package com.dr.action;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
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

import net.sf.json.JSONArray;

import com.dr.model.HRImg;
import com.dr.model.HousingReconstruction;
import com.dr.model.Reconstruction;
import com.dr.model.PageJson;
import com.dr.service.impl.RegionCodeServiceImpl;
import com.dr.service.impl.ValidatorServiceImpl;
import com.dr.service.impl.ReconstructionServiceImpl;
import com.dr.util.GenerationUtils;
import com.dr.util.GlobleVs;
import com.dr.util.UploadUtil;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;


/**
 * @author:赵亚一
 * @E-mail:yayi_zhao@163.com
 * @comment:
 * @classDescription:
 * @version:
 * @date:2016-8-19下午10:40:25
 */
public class ReconstructionAction extends ActionSupport{
	private ReconstructionServiceImpl reconstructionService;
	private ValidatorServiceImpl validatorService;
	private RegionCodeServiceImpl regionCodeService;
	private PageJson pageJson;
	private boolean success;
	private Reconstruction reconstruction;
	private String message;
	private String page;
	private String start;  
	private String limit;  
	private String idStr;
	private boolean ykgxm;
	
	private File userfile_E; // 上传的文件
	private String uploadEFileName; // 文件名
	
	private static Logger logger=Logger.getLogger(ReconstructionAction.class);
	
	String fileDir=UploadUtil.getrFolderRealpath();
	String fileDirMtl=UploadUtil.getrFolderMtl();
	String fileDirImg=UploadUtil.getrFolderImg();
	String fileDirArchive=UploadUtil.getrFolderArchv();
	String fileDirJs=UploadUtil.getJSPath(UploadUtil.getrFolder());
	
	private Date kgsjks;
	private Date sgsjks;
	private Date kgsjjs;
	private Date sgsjjs;
	
	private String name1;
	private String name2;
	private String name3;
	private String name4;
	private String name5;
	private String name6;
	
	public String saveReconstruction() throws Exception {
		//增加
		this.success=false;
		
		if(reconstructionService.countNum(" WHERE xmmc='"+reconstruction.getXmmc()+"'")>0){
			this.setMessage("项目名称：“"+reconstruction.getXmmc()+"”系统中已经存在");
			return SUCCESS;
		}
		
		if(reconstructionService.addReconstruction(reconstruction)){
			String project=reconstruction.getXmmc();
			GenerationUtils.createDir(UploadUtil.getUploadRealPath(fileDir, project, fileDirMtl));
			GenerationUtils.createDir(UploadUtil.getUploadRealPath(fileDir, project, fileDirImg));
			GenerationUtils.createDir(UploadUtil.getUploadRealPath(fileDir, project, fileDirArchive));
			this.success=true;
			this.setMessage("保存成功");
		}else{
			this.setMessage("添加失败，请检查填写内容和网络");
		}

		return SUCCESS;
	}
	
	public String delReconstruction() throws Exception {
		this.success=false;
		int test=reconstructionService.deleteReconstructionById(idStr);
		//System.out.println("test count::"+test);
		if(test>0){
			this.success=true;
			this.setMessage("删除项目成功");
		}else{
			this.setMessage("删除失败，请检查填写内容和网络");
		};
		return SUCCESS;
	}
	
	public String findReconstruction() {
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
		//SimpleDateFormat sdf=new SimpleDateFormat("yyyy/MM/dd");  
		//java.util.Date date=new java.util.Date();  
		//String str=sdf.format(date);  
        //Date dBegin = sdf.parse(kgsjks);  
		int i=0;
		if(kgsjks!=null){
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
		
		try {
			pageJson=reconstructionService.findReconstructionByPage(index,pageSize,whereStr,reconstruction);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			logger.info("出错了");
			e.printStackTrace();
		}
		//pageJson.setRoot(reconstructionService.findReconstructionByPage(index,pageSize));//获取结果集
		return SUCCESS;
	}
	
	public String reconstructionExlDataImp() throws Exception {
		String timeStamp=GenerationUtils.getTimeStampString();		
		String saveName=null;
		int index=uploadEFileName.lastIndexOf(".");
		String last=uploadEFileName.substring(index);
		saveName=uploadEFileName.substring(0, index)+"_"+"上传数据"+timeStamp+last;
		//String fileDir=ServletActionContext.getServletContext().getRealPath("/")+"upload\\Reconstruction\\";
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
			this.message=reconstructionService.reconstructionExlDataImp(st);
			if(this.message.equals("数据输入成功")){
				this.success = true;
			}else{
				this.success = false;
			}
			iss.close();
		}catch(Exception e){
			e.printStackTrace();
			message="输入过程中存在问题";
			success=false;
			return SUCCESS;
		}
		
		return SUCCESS;
	}
	
	@SuppressWarnings("deprecation")
	public String reconstructionExlDataExp() throws Exception {
		String saveName="重建项目数据导出";
        String timeStamp=GenerationUtils.getTimeStampString();
        saveName=saveName+"_"+timeStamp+".xls";
        String xlsFile=ServletActionContext.getServletContext().getRealPath("/")+"export\\"+saveName;
        logger.info("保存xlsFile::"+xlsFile);
        try{  
        	HSSFWorkbook wb=reconstructionService.reconstructionExlDataExp(null);
            FileOutputStream fos = new FileOutputStream(xlsFile);  
            wb.write(fos);  
            fos.close();  
            
            logger.info("reconstruction::数据导出成功");
    		message="数据导出成功，导出文件为<a href='export/"+saveName+"'>"+saveName+"</a>";
        }catch (Exception e){  
        	this.success = false;
			message="数据导出失败，请重试";
            e.printStackTrace();  
        }
		
		return SUCCESS;
	}
	
	public String findReconstructionImg() throws Exception {
		pageJson=new PageJson();
		pageJson.setTotalProperty(6);
		pageJson.setLimit(20);
		List<HRImg> list = new ArrayList<HRImg>();
		HRImg hRImg1=new HRImg("房屋受损情况图片","images/main/notupload.jpg","images/main/notupload.jpg","");
		list.add(hRImg1);
		HRImg hRImg2=new HRImg("基础验收图","images/main/notupload.jpg","images/main/notupload.jpg","");
		list.add(hRImg2);
		HRImg hRImg3=new HRImg("梁柱配筋验收图","images/main/notupload.jpg","images/main/notupload.jpg","");
		list.add(hRImg3);
		HRImg hRImg4=new HRImg("主体验收图","images/main/notupload.jpg","images/main/notupload.jpg","");
		list.add(hRImg4);
		HRImg hRImg5=new HRImg("屋面验收图","images/main/notupload.jpg","images/main/notupload.jpg","");
		list.add(hRImg5);
		HRImg hRImg6=new HRImg("竣工验收图","images/main/notupload.jpg","images/main/notupload.jpg","");
		list.add(hRImg6);
		
		if(reconstruction.getXmmc()!=null&&reconstruction.getXmmc().trim().length()!=0){
			String project=reconstruction.getXmmc();
			String filePathStr=fileDir+project+"\\"+fileDirImg;
			String fileDirJsStr=fileDirJs+project+"/"+fileDirImg+"/";
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
				    	  String fName=f.getName();
				    	  if(fName.substring(1).indexOf("1")==0){
				    		  hRImg1=setHRImgInfo(filePathStr, fileDirJsStr, fName, hRImg1);
				    	  }
				    	  if(fName.substring(1).indexOf("2")==0){
				    		  //hRImg2.setImg(fileDirJsStr+fName);
				    		  hRImg2=setHRImgInfo(filePathStr, fileDirJsStr, fName, hRImg2);
				    	  }
				    	  if(fName.substring(1).indexOf("3")==0){
				    		  //hRImg3.setImg(fileDirJsStr+fName);
				    		  hRImg3=setHRImgInfo(filePathStr, fileDirJsStr, fName, hRImg3);
				    	  }
				    	  if(fName.substring(1).indexOf("4")==0){
				    		  //hRImg4.setImg(fileDirJsStr+fName);
				    		  hRImg4=setHRImgInfo(filePathStr, fileDirJsStr, fName, hRImg4);
				    	  }
				    	  if(fName.substring(1).indexOf("5")==0){
				    		  //hRImg5.setImg(fileDirJsStr+fName);
				    		  hRImg5=setHRImgInfo(filePathStr, fileDirJsStr, fName, hRImg5);
				    	  }
				    	  if(fName.substring(1).indexOf("6")==0){
				    		  //hRImg6.setImg(fileDirJsStr+fName);
				    		  hRImg6=setHRImgInfo(filePathStr, fileDirJsStr, fName, hRImg6);
				    	  }
				    	  
				      }
				 }
	        }
		}
		pageJson.setRoot(list);
		return SUCCESS;
	}
	
	public HRImg setHRImgInfo(String javaPath, String jsPath, String fileName, HRImg hRImg){
		String fType=fileName.substring(fileName.length()-3);
		if(fileName.indexOf("1")==0&&(fType.equals("jpg")||fType.equals("gif")||fType.equals("png"))){
			hRImg.setImg(jsPath+fileName);
		}else if(fileName.indexOf("2")==0&&(fType.equals("jpg")||fType.equals("gif")||fType.equals("png"))){
			hRImg.setPerson(jsPath+fileName);
		}else if(fType.equals("txt")){
			hRImg.setName(GenerationUtils.readTxt(javaPath+"\\"+fileName));
		}	
		return hRImg;
	}
	
	
	public String findReconstructionMtl() throws Exception {
		pageJson=new PageJson();
		//pageJson.setTotalProperty(6);
		//pageJson.setLimit(20);
		List<HRImg> list = new ArrayList<HRImg>();
		
		if(reconstruction.getXmmc()!=null&&reconstruction.getXmmc().trim().length()!=0){
			String project=reconstruction.getXmmc();
			String filePathStr=fileDir+project+"\\"+fileDirMtl;
			//String fileDirJsStr=fileDirJs+reconstruction.getXmmc()+"/"+fileDirImg+"/";
			GenerationUtils.getFiles(filePathStr, list);
		}
		pageJson.setRoot(list);
		return SUCCESS;
	}
	
	public String findReconstructionArchive() throws Exception {
		pageJson=new PageJson();
		//pageJson.setTotalProperty(6);
		//pageJson.setLimit(20);
		List<HRImg> list = new ArrayList<HRImg>();
		
		if(reconstruction.getXmmc()!=null&&reconstruction.getXmmc().trim().length()!=0){
			String project=reconstruction.getXmmc();
			String filePathStr=fileDir+project+"\\"+fileDirArchive;
			//String fileDirJsStr=fileDirJs+reconstruction.getXmmc()+"/"+fileDirImg+"/";
			GenerationUtils.getFiles(filePathStr, list);
		}
		pageJson.setRoot(list);
		return SUCCESS;
	}
	
	public String saveImgName() throws Exception {
		String filePathStr = fileDir + reconstruction.getXmmc() + "\\" + fileDirImg;
		message="保存成功";
		success=true;
		FileWriter writer;
		try {
			writer = new FileWriter(filePathStr+"\\"+"11.txt");
			writer.write(name1);
			writer.flush();
			writer.close();
		} catch (Exception e) {
			e.printStackTrace();
			message="保存失败，请检查文件目录是否正确";
			success=false;
		}
		try {
			writer = new FileWriter(filePathStr+"\\"+"12.txt");
			writer.write(name2);
			writer.flush();
			writer.close();
		} catch (Exception e) {
			e.printStackTrace();
			message="保存失败，请检查文件目录是否正确";
			success=false;
		}
		try {
			writer = new FileWriter(filePathStr+"\\"+"13.txt");
			writer.write(name3);
			writer.flush();
			writer.close();
		} catch (Exception e) {
			e.printStackTrace();
			message="保存失败，请检查文件目录是否正确";
			success=false;
		}
		try {
			writer = new FileWriter(filePathStr+"\\"+"14.txt");
			writer.write(name4);
			writer.flush();
			writer.close();
		} catch (Exception e) {
			e.printStackTrace();
			message="保存失败，请检查文件目录是否正确";
			success=false;
		}
		try {
			writer = new FileWriter(filePathStr+"\\"+"15.txt");
			writer.write(name5);
			writer.flush();
			writer.close();
		} catch (Exception e) {
			e.printStackTrace();
			message="保存失败，请检查文件目录是否正确";
			success=false;
		}
		try {
			writer = new FileWriter(filePathStr+"\\"+"16.txt");
			writer.write(name6);
			writer.flush();
			writer.close();
		} catch (Exception e) {
			e.printStackTrace();
			message="保存失败，请检查文件目录是否正确";
			success=false;
		}


		return SUCCESS;
	}

	public Reconstruction getReconstruction() {
		return reconstruction;
	}
	public void setReconstruction(Reconstruction reconstruction) {
		this.reconstruction = reconstruction;
	}
	public ReconstructionServiceImpl getReconstructionService() {
		return reconstructionService;
	}
	public void setReconstructionService(ReconstructionServiceImpl reconstructionService) {
		this.reconstructionService = reconstructionService;
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

	public String getName1() {
		return name1;
	}

	public void setName1(String name1) {
		this.name1 = name1;
	}

	public String getName2() {
		return name2;
	}

	public void setName2(String name2) {
		this.name2 = name2;
	}

	public String getName3() {
		return name3;
	}

	public void setName3(String name3) {
		this.name3 = name3;
	}

	public String getName4() {
		return name4;
	}

	public void setName4(String name4) {
		this.name4 = name4;
	}

	public String getName5() {
		return name5;
	}

	public void setName5(String name5) {
		this.name5 = name5;
	}

	public String getName6() {
		return name6;
	}

	public void setName6(String name6) {
		this.name6 = name6;
	}



}
