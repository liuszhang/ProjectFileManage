package com.dr.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.lang.reflect.Field;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.poi.ss.usermodel.Font;
import org.apache.struts2.ServletActionContext;

import com.dr.model.HRImg;
import com.dr.model.HousingReconstruction;
import com.dr.model.PageJson;
import com.dr.service.impl.HousingReconstructionServiceImpl;
import com.dr.service.impl.RegionCodeServiceImpl;
import com.dr.service.impl.ValidatorServiceImpl;
import com.dr.util.GenerationUtils;
import com.dr.util.GlobleVs;
import com.dr.util.UploadUtil;
import com.opensymphony.xwork2.ActionSupport;


/**
 * @author:赵亚一
 * @E-mail:yayi_zhao@163.com
 * @comment:
 * @classDescription:
 * @version:
 * @date:2016-8-19下午10:40:25
 */
public class HousingReconstructionAction extends ActionSupport{
	private HousingReconstructionServiceImpl housingReconstructionService;
	private RegionCodeServiceImpl regionCodeService;
	private ValidatorServiceImpl validatorService;
	private PageJson pageJson;
	private boolean success;
	private HousingReconstruction housingReconstruction;
	private String message;
	private String page;
	private String start;  
	private String limit;  
	private String idStr;
	private boolean ykgxm;
	
	private File userfile_E; // 上传的文件
	private String uploadEFileName; // 文件名
	
	private static Logger logger=Logger.getLogger(HousingReconstructionAction.class);
	String fileDir=UploadUtil.getHrFolderRealpath();
	String fileDirMtl=UploadUtil.getHrFolderMtl();
	String fileDirImg=UploadUtil.getHrFolderImg();
	//String fileDirJs=UploadUtil.getHrFolder().replaceAll("\\", "/");
	String fileDirJs=UploadUtil.getJSPath(UploadUtil.getHrFolder());
	
	//查询
	private Date kgsjks;
	private Date sgsjks;
	private Date kgsjjs;
	private Date sgsjjs;
	
	private Date bksjks1;
	private Date bksjks2;
	private Date bksjks3;
	private Date bksjks4;
	private Date bksjjs1;
	private Date bksjjs2;
	private Date bksjjs3;
	private Date bksjjs4;
	
	public String saveHousingReconstruction() throws Exception {
		//增加
		this.success=false;
		//检查户编号是否空项
		String hbh=housingReconstruction.getHbh();
		String sfzh=housingReconstruction.getSfzh();
		String cm=housingReconstruction.getCm();
		String xzmc=housingReconstruction.getXzmc();
		if(hbh==null||hbh.trim().length()==0){
			this.setMessage("添加失败，户编号为空");
		}else{
			String regionCode="";
			if(hbh.trim().length()<6){//户编号最多支持5位
				regionCode=regionCodeService.getRegionCode(xzmc=xzmc.trim(), cm=cm.trim());
				if(regionCode!="error"){
					housingReconstruction.setHbh(regionCode+hbh);
				}else{
					message="未在行政区域代码表中识别该区域户编号，无法保存！";
					success=false;
					return SUCCESS;
				}
			}
			
			//身份证号验证
			String validateIdcardStr=validatorService.validateIdcard("HousingReconstruction", sfzh,regionCode+hbh);
			if(validateIdcardStr!= null){
				if(!validateIdcardStr.equals(validatorService.getSuccessStr())){
					message="（户编号为"+hbh+"）"+validateIdcardStr+"，保存中断！";
					return SUCCESS;
				}
			}else{
				message="（户编号为"+hbh+"）身份证检查出现异常，保存中断！";
				return SUCCESS;
			}
			
			
			String xmmc="西藏自治区日喀则市定日县"+xzmc+cm+"民房重建项目";
			String dz="西藏自治区日喀则市定日县"+xzmc+cm;
			
			
			housingReconstruction.setXmmc(xmmc);
			housingReconstruction.setDz(dz);
			
		}
		
		if(housingReconstructionService.countNum(" WHERE hbh='"+housingReconstruction.getHbh()+"'")>0){
			this.setMessage("户编号"+housingReconstruction.getHbh()+"系统中已经存在");
			return SUCCESS;
		}
		
		if(housingReconstructionService.addHousingReconstruction(housingReconstruction)){
			String project=housingReconstruction.getXmmc()+housingReconstruction.getHbh();
			GenerationUtils.createDir(UploadUtil.getUploadRealPath(fileDir, project, fileDirMtl));
			GenerationUtils.createDir(UploadUtil.getUploadRealPath(fileDir, project, fileDirImg));
			this.success=true;
			this.setMessage("保存成功");
		}else{
			this.setMessage("添加失败，请检查填写内容和网络");
		};
		return SUCCESS;
	}
	
	public String delHousingReconstruction() throws Exception {
		this.success=false;
		int test=housingReconstructionService.deleteHousingReconstructionById(idStr);
		//System.out.println("test count::"+test);
		if(test>0){
			this.success=true;
			this.setMessage("删除项目（户编号为“"+idStr+"”）成功");
		}else{
			this.setMessage("删除失败，请检查填写内容和网络");
		};
		return SUCCESS;
	}
	
	//搜索
	public String findHousingReconstruction() {
		pageJson=new PageJson();
		int index;
		int pageSize;
		if(start!=null&&start.trim().length()!=0){
			index=Integer.parseInt(start);  
		}else{
			index=0;
		}
		if(limit!=null&&limit.trim().length()!=0){
			pageSize=Integer.parseInt(limit);  
		}else{
			pageSize=GlobleVs.getGloblePagesize();
		}
		
		String whereStr="";
		//SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		//java.util.Date date=new java.util.Date();  
		//String str=sdf.format(date);  
        //Date dBegin = sdf.parse(kgsjks);  
		int i=0;
		if(kgsjks!=null){
			//whereStr=whereStr+"kgsj>=1000*strftime('%s','"+sdf.format(kgsjks)+"','-8 hours')";
			whereStr=whereStr+"kgsj>="+GenerationUtils.getDateSQLiteString(kgsjks);
			System.out.println(whereStr);
			i++;
		}else{
			if(ykgxm){
				whereStr=whereStr+"kgsj>='57600000'";
				System.out.println(whereStr);
				i++;
			}
		}
		if(sgsjks!=null){
			if(i<1){
				whereStr=whereStr+"sgsj>="+GenerationUtils.getDateSQLiteString(sgsjks);
			}else{
				whereStr=whereStr+" AND sgsj>="+GenerationUtils.getDateSQLiteString(sgsjks);
			}
			i++;
		}
		if(kgsjjs!=null){
			if(i<1){
				whereStr=whereStr+"kgsj<="+GenerationUtils.getDateSQLiteString(kgsjjs);
			}else{
				whereStr=whereStr+" AND kgsj<="+GenerationUtils.getDateSQLiteString(kgsjjs);
			}
			i++;
		}
		if(sgsjjs!=null){
			if(i<1){
				whereStr=whereStr+"sgsj<="+GenerationUtils.getDateSQLiteString(sgsjjs);
			}else{
				whereStr=whereStr+" AND sgsj<="+GenerationUtils.getDateSQLiteString(sgsjjs);
			}
			i++;
		}
		String fundingCondition=getQueryStrByDate();
		if(fundingCondition.trim().length()>0){
			if(whereStr.trim().length()!=0){
				whereStr=whereStr+" AND "+fundingCondition;
			}else{
				whereStr=fundingCondition;
			}
		}
		
		try {
			pageJson=housingReconstructionService.findHousingReconstructionByPage(index,pageSize,whereStr,housingReconstruction);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			logger.info("出错了");
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public String getQueryStrByDate(){
		String whereStr="hbh in (select substr(xmmc,length(xmmc)-14,15) from Funding";
		int i=0;
		if(bksjks1!=null){
			if(i<1){
				whereStr=whereStr+" where bksj1>="+GenerationUtils.getDateSQLiteString(bksjks1);
			}else{
				whereStr=whereStr+" AND bksj1>="+GenerationUtils.getDateSQLiteString(bksjks1);
			}
			i++;
		}
		if(bksjks2!=null){
			if(i<1){
				whereStr=whereStr+" where bksj2<="+GenerationUtils.getDateSQLiteString(bksjks2);
			}else{
				whereStr=whereStr+" AND bksj2<="+GenerationUtils.getDateSQLiteString(bksjks2);
			}
			i++;
		}
		if(bksjks3!=null){
			if(i<1){
				whereStr=whereStr+" where bksj3<="+GenerationUtils.getDateSQLiteString(bksjks3);
			}else{
				whereStr=whereStr+" AND bksj3<="+GenerationUtils.getDateSQLiteString(bksjks3);
			}
			i++;
		}
		if(bksjks4!=null){
			if(i<1){
				whereStr=whereStr+" where bksj4<="+GenerationUtils.getDateSQLiteString(bksjks4);
			}else{
				whereStr=whereStr+" AND bksj4<="+GenerationUtils.getDateSQLiteString(bksjks4);
			}
			i++;
		}
		if(bksjjs1!=null){
			if(i<1){
				whereStr=whereStr+" where bksj1<="+GenerationUtils.getDateSQLiteString(bksjjs1);
			}else{
				whereStr=whereStr+" AND bksj1<="+GenerationUtils.getDateSQLiteString(bksjjs1);
			}
			i++;
		}
		if(bksjjs2!=null){
			if(i<1){
				whereStr=whereStr+" where bksj2<="+GenerationUtils.getDateSQLiteString(bksjjs2);
			}else{
				whereStr=whereStr+" AND bksj2<="+GenerationUtils.getDateSQLiteString(bksjjs2);
			}
			i++;
		}
		if(bksjjs3!=null){
			if(i<1){
				whereStr=whereStr+" where bksj3<="+GenerationUtils.getDateSQLiteString(bksjjs3);
			}else{
				whereStr=whereStr+" AND bksj3<="+GenerationUtils.getDateSQLiteString(bksjjs3);
			}
			i++;
		}
		if(bksjjs4!=null){
			if(i<1){
				whereStr=whereStr+" where bksj4<="+GenerationUtils.getDateSQLiteString(bksjjs4);
			}else{
				whereStr=whereStr+" AND bksj4<="+GenerationUtils.getDateSQLiteString(bksjjs4);
			}
			i++;
		}
		whereStr = whereStr + ")";
		if(i<1){
			return "";
		}
		return whereStr;
	}
	
	public String housingReconstructionExlDataImp() throws Exception {
		String timeStamp=GenerationUtils.getTimeStampString();		
		String saveName=null;
		int index=uploadEFileName.lastIndexOf(".");
		String last=uploadEFileName.substring(index);
		saveName=uploadEFileName.substring(0, index)+"_"+"上传数据"+timeStamp+last;
		String xlsFile=ServletActionContext.getServletContext().getRealPath("/")+"import\\"+saveName;
		GenerationUtils.createDir(ServletActionContext.getServletContext().getRealPath("/")+"import\\");
		logger.info("上传xlsFile::"+xlsFile);
		try{
			FileOutputStream fos = new FileOutputStream(xlsFile);
			InputStream is = new FileInputStream(userfile_E);
			byte[] buffer = new byte[8192];
			int count = 0;
			while ((count = is.read(buffer)) > 0) {
				fos.write(buffer, 0, count);
			}
			fos.close();
			is.close();
		}catch(Exception e){
			e.printStackTrace();
			message="输入文件过大或模板文件存在问题，未能正常上传，请下载使用正确的模版";
			success=false;
			return SUCCESS;
		}
		
		try{
			InputStream iss = new FileInputStream(xlsFile);
			POIFSFileSystem fs=new POIFSFileSystem(iss);
			HSSFWorkbook wb=new HSSFWorkbook(fs);
			HSSFSheet st=wb.getSheetAt(0);
			this.message=housingReconstructionService.housingReconstructionExlDataImp(st);
			if(this.message.equals("数据输入成功")){
				this.success = true;
			}else{
				this.success = false;
			}
			iss.close();
		}catch(Exception e){
			e.printStackTrace();
			message="输入过程中存在问题，请检查格式";
			success=false;
			return SUCCESS;
		}
		
		return SUCCESS;
	}
	

	public String housingReconstructionExlDataExp() throws Exception {
		String saveName="民房重建数据导出";
		String timeStamp=GenerationUtils.getTimeStampString();
		saveName=saveName+"_"+timeStamp+".xls";
		try{
			HSSFWorkbook wb=housingReconstructionService.housingReconstructionExlDataExp(null);
	        String xlsFile=ServletActionContext.getServletContext().getRealPath("/")+"export\\"+saveName;
	        logger.info("保存xlsFile::"+xlsFile);
	 
            FileOutputStream fos = new FileOutputStream(xlsFile);  
            wb.write(fos);  
            fos.close();  
	        
	    	logger.info("housingReconstruction::数据导出成功");
	    	message="数据导出成功，导出文件为<a href='export/"+saveName+"'>"+saveName+"</a>";
			this.success = true;
		}catch (Exception e){
			this.success = false;
			message="数据导出失败，请重试";
			e.printStackTrace();
		}
		
		return SUCCESS;
	}
	
	public String findHRImg() throws Exception {
		pageJson=new PageJson();
		pageJson.setTotalProperty(6);
		pageJson.setLimit(20);
		List<HRImg> list = new ArrayList<HRImg>();
		HRImg hRImg1=new HRImg("房屋受损情况图片","images/main/notupload.jpg","","");
		list.add(hRImg1);
		HRImg hRImg2=new HRImg("基础验收图","images/main/notupload.jpg","","");
		list.add(hRImg2);
		HRImg hRImg3=new HRImg("梁柱配筋验收图","images/main/notupload.jpg","","");
		list.add(hRImg3);
		HRImg hRImg4=new HRImg("主体验收图","images/main/notupload.jpg","","");
		list.add(hRImg4);
		HRImg hRImg5=new HRImg("屋面验收图","images/main/notupload.jpg","","");
		list.add(hRImg5);
		HRImg hRImg6=new HRImg("竣工验收图","images/main/notupload.jpg","","");
		list.add(hRImg6);
		
		if(housingReconstruction.getXmmc()!=null&&housingReconstruction.getHbh()!=null){
			String project=housingReconstruction.getXmmc()+housingReconstruction.getHbh();
			String filePathStr=fileDir+project+"\\"+fileDirImg;
			String fileDirJsStr=fileDirJs+project+"/"+fileDirImg+"/";
			logger.info("寻找目录：" + filePathStr);  
			File file = new File(filePathStr);
	        if (file.exists()) {
	        	logger.info("找到目录" + filePathStr + "，开始查询图片");  
	        	File flist[] = file.listFiles();
				for (File f : flist) {
				      if (f.isDirectory()) {
				    	  logger.info("findHRImg Dir==>" + f.getAbsolutePath()); 
				      } else {
				         //这里将列出所有的文件
				    	  logger.info("findHRImg file==>" + f.getAbsolutePath()+"::name==>"+f.getName());
				    	  if(f.getName().indexOf("1")==0||f.getName().indexOf("受损")!=-1){
				    		  hRImg1.setImg(fileDirJsStr+f.getName());
				    	  }
				    	  if(f.getName().indexOf("2")==0||f.getName().indexOf("基础")!=-1){
				    		  hRImg2.setImg(fileDirJsStr+f.getName());
				    	  }
				    	  if(f.getName().indexOf("3")==0||f.getName().indexOf("配筋")!=-1){
				    		  hRImg3.setImg(fileDirJsStr+f.getName());
				    	  }
				    	  if(f.getName().indexOf("4")==0||f.getName().indexOf("主体")!=-1){
				    		  hRImg4.setImg(fileDirJsStr+f.getName());
				    	  }
				    	  if(f.getName().indexOf("5")==0||f.getName().indexOf("屋面")!=-1){
				    		  hRImg5.setImg(fileDirJsStr+f.getName());
				    	  }
				    	  if(f.getName().indexOf("6")==0||f.getName().indexOf("竣工")!=-1){
				    		  hRImg6.setImg(fileDirJsStr+f.getName());
				    	  }
				    	  
				      }
				 }
	        }
		}
		pageJson.setRoot(list);
		return SUCCESS;
	}
	
	public String findHRMtl() throws Exception {
		pageJson=new PageJson();
		//pageJson.setTotalProperty(6);
		//pageJson.setLimit(20);
		List<HRImg> list = new ArrayList<HRImg>();
		
		if(housingReconstruction.getXmmc()!=null&&housingReconstruction.getHbh()!=null){
			String project=housingReconstruction.getXmmc()+housingReconstruction.getHbh();
			String filePathStr=fileDir+project+"\\"+fileDirMtl;
			//String fileDirJsStr=fileDirJs+housingReconstruction.getXmmc()+"/"+fileDirImg+"/";
			GenerationUtils.getFiles(filePathStr, list);
		}
		pageJson.setRoot(list);
		return SUCCESS;
	}

	public HousingReconstruction getHousingReconstruction() {
		return housingReconstruction;
	}
	public void setHousingReconstruction(HousingReconstruction housingReconstruction) {
		this.housingReconstruction = housingReconstruction;
	}
	public HousingReconstructionServiceImpl getHousingReconstructionService() {
		return housingReconstructionService;
	}
	public void setHousingReconstructionService(HousingReconstructionServiceImpl housingReconstructionService) {
		this.housingReconstructionService = housingReconstructionService;
	}

	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public void setMessage(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public File getUserfile_E() {
		return userfile_E;
	}

	public void setUserfile_E(File userfile_E) {
		this.userfile_E = userfile_E;
	}

	public String getUploadEFileName() {
		return uploadEFileName;
	}

	public void setUploadEFileName(String uploadEFileName) {
		this.uploadEFileName = uploadEFileName;
	}

	public String getPage() {
		return page;
	}


	public void setPage(String page) {
		this.page = page;
	}


	public PageJson getPageJson() {
		return pageJson;
	}


	public void setPageJson(PageJson pageJson) {
		this.pageJson = pageJson;
	}


	public String getStart() {
		return start;
	}


	public void setStart(String start) {
		this.start = start;
	}


	public String getLimit() {
		return limit;
	}


	public void setLimit(String limit) {
		this.limit = limit;
	}

	public String getIdStr() {
		return idStr;
	}

	public void setIdStr(String idStr) {
		this.idStr = idStr;
	}

	public Date getKgsjks() {
		return kgsjks;
	}

	public void setKgsjks(Date kgsjks) {
		this.kgsjks = kgsjks;
	}

	public Date getSgsjks() {
		return sgsjks;
	}

	public void setSgsjks(Date sgsjks) {
		this.sgsjks = sgsjks;
	}

	public Date getKgsjjs() {
		return kgsjjs;
	}

	public void setKgsjjs(Date kgsjjs) {
		this.kgsjjs = kgsjjs;
	}

	public Date getSgsjjs() {
		return sgsjjs;
	}

	public void setSgsjjs(Date sgsjjs) {
		this.sgsjjs = sgsjjs;
	}

	public boolean isYkgxm() {
		return ykgxm;
	}

	public void setYkgxm(boolean ykgxm) {
		this.ykgxm = ykgxm;
	}

	public ValidatorServiceImpl getValidatorService() {
		return validatorService;
	}

	public void setValidatorService(ValidatorServiceImpl validatorService) {
		this.validatorService = validatorService;
	}

	public RegionCodeServiceImpl getRegionCodeService() {
		return regionCodeService;
	}

	public void setRegionCodeService(RegionCodeServiceImpl regionCodeService) {
		this.regionCodeService = regionCodeService;
	}

	public Date getBksjks1() {
		return bksjks1;
	}

	public void setBksjks1(Date bksjks1) {
		this.bksjks1 = bksjks1;
	}

	public Date getBksjks2() {
		return bksjks2;
	}

	public void setBksjks2(Date bksjks2) {
		this.bksjks2 = bksjks2;
	}

	public Date getBksjks3() {
		return bksjks3;
	}

	public void setBksjks3(Date bksjks3) {
		this.bksjks3 = bksjks3;
	}

	public Date getBksjks4() {
		return bksjks4;
	}

	public void setBksjks4(Date bksjks4) {
		this.bksjks4 = bksjks4;
	}

	public Date getBksjjs1() {
		return bksjjs1;
	}

	public void setBksjjs1(Date bksjjs1) {
		this.bksjjs1 = bksjjs1;
	}

	public Date getBksjjs2() {
		return bksjjs2;
	}

	public void setBksjjs2(Date bksjjs2) {
		this.bksjjs2 = bksjjs2;
	}

	public Date getBksjjs3() {
		return bksjjs3;
	}

	public void setBksjjs3(Date bksjjs3) {
		this.bksjjs3 = bksjjs3;
	}

	public Date getBksjjs4() {
		return bksjjs4;
	}

	public void setBksjjs4(Date bksjjs4) {
		this.bksjjs4 = bksjjs4;
	}





}
