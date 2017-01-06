package com.dr.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
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
import com.dr.model.MaintenanceAndReinforcement;
import com.dr.model.PageJson;
import com.dr.model.Reconstruction;
import com.dr.service.impl.RegionCodeServiceImpl;
import com.dr.service.impl.ValidatorServiceImpl;
import com.dr.service.impl.MaintenanceAndReinforcementServiceImpl;
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
public class MaintenanceAndReinforcementAction extends ActionSupport{
	private MaintenanceAndReinforcementServiceImpl maintenanceAndReinforcementService;
	private ValidatorServiceImpl validatorService;
	private RegionCodeServiceImpl regionCodeService;
	private PageJson pageJson;
	private boolean success;
	private MaintenanceAndReinforcement maintenanceAndReinforcement;
	private String message;
	private String page;
	private String start;  
	private String limit;  
	private String idStr;
	
	private File userfile_E; // 上传的文件
	private String uploadEFileName; // 文件名
	
	private static Logger logger=Logger.getLogger(MaintenanceAndReinforcementAction.class);
	String fileDir=UploadUtil.getMarFolderRealpath();
	String fileDirMtl=UploadUtil.getMarFolderMtl();
	String fileDirImg=UploadUtil.getMarFolderImg();
	String fileDirJs=UploadUtil.getJSPath(UploadUtil.getMarFolder());
	
	
	private Date kgsjks;
	private Date sgsjks;
	private Date kgsjjs;
	private Date sgsjjs;
	
	public String saveMaintenanceAndReinforcement() throws Exception {
		//增加
		this.success=false;
		//检查户编号是否空项
		String hbh=maintenanceAndReinforcement.getHbh();
		String sfzh=maintenanceAndReinforcement.getSfzh();
		String cm=maintenanceAndReinforcement.getXzc();
		String xzmc=maintenanceAndReinforcement.getXz();
		if(hbh==null||hbh.trim().length()==0){
			this.setMessage("添加失败，户编号为空");
		}else{
			String regionCode="";
			if(hbh.trim().length()<6){//户编号最多支持5位
				regionCode=regionCodeService.getRegionCode(xzmc=xzmc.trim(), cm=cm.trim());
				if(regionCode!="error"){
					maintenanceAndReinforcement.setHbh(regionCode+hbh);
				}else{
					message="未在行政区域代码表中识别该区域户编号，无法保存！";
					success=false;
					return SUCCESS;
				}
			}
			
			//身份证号验证
			String validateIdcardStr=validatorService.validateIdcard("MaintenanceAndReinforcement", sfzh,regionCode+hbh);
			if(validateIdcardStr!= null){
				if(!validateIdcardStr.equals(validatorService.getSuccessStr())){
					message="（户编号为"+hbh+"）"+validateIdcardStr+"，保存中断！";
					return SUCCESS;
				}
			}else{
				message="（户编号为"+hbh+"）身份证检查出现异常，保存中断！";
				return SUCCESS;
			}
			
			
			String xmmc="西藏自治区日喀则市定日县"+xzmc+cm+"维修加固项目";
			String dz="西藏自治区日喀则市定日县"+xzmc+cm;
			
			
			maintenanceAndReinforcement.setXmmc(xmmc);
			maintenanceAndReinforcement.setDz(dz);
			
		}
		
		if(maintenanceAndReinforcementService.countNum(" WHERE hbh='"+maintenanceAndReinforcement.getHbh()+"'")>0){
			this.setMessage("户编号"+maintenanceAndReinforcement.getHbh()+"系统中已经存在");
			return SUCCESS;
		}
		
		if(maintenanceAndReinforcementService.addMaintenanceAndReinforcement(maintenanceAndReinforcement)){
			String project=maintenanceAndReinforcement.getXmmc()+maintenanceAndReinforcement.getHbh();
			GenerationUtils.createDir(UploadUtil.getUploadRealPath(fileDir, project, fileDirMtl));
			GenerationUtils.createDir(UploadUtil.getUploadRealPath(fileDir, project, fileDirImg));
			this.success=true;
			this.setMessage("保存成功");
		}else{
			this.setMessage("添加失败，请检查填写内容和网络");
		};
		if(maintenanceAndReinforcementService.addMaintenanceAndReinforcement(maintenanceAndReinforcement)){
			this.success=true;
		}else{
			this.setMessage("添加失败，请检查填写内容和网络");
		};
		return SUCCESS;
	}
	
	public String delMaintenanceAndReinforcement() throws Exception {
		this.success=false;
		int test=maintenanceAndReinforcementService.deleteMaintenanceAndReinforcementById(idStr);
		//System.out.println("test count::"+test);
		if(test>0){
			this.success=true;
			this.setMessage("删除项目（户编号为“"+idStr+"”）成功");
		}else{
			this.setMessage("删除失败，请检查填写内容和网络");
		};
		return SUCCESS;
	}
	
	public String findMaintenanceAndReinforcement() {
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
		}
		if(sgsjks!=null){
			if(i<1){
				whereStr=whereStr+"jgsj>="+GenerationUtils.getDateSQLiteString(sgsjks);
			}else{
				whereStr=whereStr+" AND jgsj>="+GenerationUtils.getDateSQLiteString(sgsjks);
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
				whereStr=whereStr+"jgsj<="+GenerationUtils.getDateSQLiteString(sgsjjs);
			}else{
				whereStr=whereStr+" AND jgsj<="+GenerationUtils.getDateSQLiteString(sgsjjs);
			}
			i++;
		}
		
		try {
			pageJson=maintenanceAndReinforcementService.findMaintenanceAndReinforcementByPage(index,pageSize,whereStr,maintenanceAndReinforcement);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			logger.info("出错了");
			e.printStackTrace();
		}
		//pageJson.setRoot(maintenanceAndReinforcementService.findMaintenanceAndReinforcementByPage(index,pageSize));//获取结果集
		return SUCCESS;
	}
	
	public String maintenanceAndReinforcementExlDataImp() throws Exception {
		String timeStamp=GenerationUtils.getTimeStampString();		
		String saveName=null;
		int index=uploadEFileName.lastIndexOf(".");
		String last=uploadEFileName.substring(index);
		saveName=uploadEFileName.substring(0, index)+"_"+"上传数据"+timeStamp+last;
		//String fileDir=ServletActionContext.getServletContext().getRealPath("/")+"upload\\MaintenanceAndReinforcement\\";
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
			this.message=maintenanceAndReinforcementService.maintenanceAndReinforcementExlDataImp(st);
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
	public String maintenanceAndReinforcementExlDataExp() throws Exception {
		String saveName="维修加固数据导出";
        String timeStamp=GenerationUtils.getTimeStampString();
        saveName=saveName+"_"+timeStamp+".xls";
        String xlsFile=ServletActionContext.getServletContext().getRealPath("/")+"export\\"+saveName;
        logger.info("保存xlsFile::"+xlsFile);
        try{  
        	HSSFWorkbook wb=maintenanceAndReinforcementService.maintenanceAndReinforcementExlDataExp(null);
            FileOutputStream fos = new FileOutputStream(xlsFile);  
            wb.write(fos);  
            fos.close();  
            
            logger.info("maintenanceAndReinforcement::数据导出成功");
    		message="数据导出成功，导出文件为<a href='export/"+saveName+"'>"+saveName+"</a>";
    		this.success = true;
        }catch (Exception e){  
        	this.success = false;
			message="数据导出失败，请重试";
            e.printStackTrace();  
        }
		
		
		return SUCCESS;
	}
	
	public String findMaintenanceAndReinforcementImg() throws Exception {
		pageJson=new PageJson();
		List<HRImg> list = new ArrayList<HRImg>();
		
		if(maintenanceAndReinforcement.getXmmc()!=null&&maintenanceAndReinforcement.getXmmc().trim().length()!=0){
			String project=maintenanceAndReinforcement.getXmmc()+maintenanceAndReinforcement.getHbh();
			String filePathStr=fileDir+project+"\\"+fileDirImg;
			GenerationUtils.getFiles(filePathStr, list);
			if(list.size()<1){
				list.add(new HRImg("图片","images/main/notupload.jpg","",""));
			}
		}
		pageJson.setRoot(list);
		return SUCCESS;
	}
	
	public String findMaintenanceAndReinforcementMtl() throws Exception {
		pageJson=new PageJson();
		//pageJson.setTotalProperty(6);
		//pageJson.setLimit(20);
		List<HRImg> list = new ArrayList<HRImg>();
		
		if(maintenanceAndReinforcement.getXmmc()!=null&&maintenanceAndReinforcement.getXmmc().trim().length()!=0){
			String project=maintenanceAndReinforcement.getXmmc()+maintenanceAndReinforcement.getHbh();
			String filePathStr=fileDir+project+"\\"+fileDirMtl;
			//String fileDirJsStr=fileDirJs+maintenanceAndReinforcement.getXmmc()+"/"+fileDirImg+"/";
			GenerationUtils.getFiles(filePathStr, list);
			if(list.size()<1){
				list.add(new HRImg("图片","images/main/notupload.jpg","",""));
			}
		}
		pageJson.setRoot(list);
		return SUCCESS;
	}

	public MaintenanceAndReinforcement getMaintenanceAndReinforcement() {
		return maintenanceAndReinforcement;
	}
	public void setMaintenanceAndReinforcement(MaintenanceAndReinforcement maintenanceAndReinforcement) {
		this.maintenanceAndReinforcement = maintenanceAndReinforcement;
	}
	public MaintenanceAndReinforcementServiceImpl getMaintenanceAndReinforcementService() {
		return maintenanceAndReinforcementService;
	}
	public void setMaintenanceAndReinforcementService(MaintenanceAndReinforcementServiceImpl maintenanceAndReinforcementService) {
		this.maintenanceAndReinforcementService = maintenanceAndReinforcementService;
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



}
