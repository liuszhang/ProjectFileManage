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
import com.dr.model.Funding;
import com.dr.model.PageJson;
import com.dr.service.impl.FundingServiceImpl;
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
public class FundingAction extends ActionSupport{
	private FundingServiceImpl fundingService;
	private PageJson pageJson;
	private boolean success;
	private Funding funding;
	private String message;
	private String page;
	private String start;  
	private String limit;  
	private String idStr;
	private File userfile_E; // 上传的文件
	private String uploadEFileName; // 文件名
		
	private static Logger logger=Logger.getLogger(FundingAction.class);
	String fileDir=UploadUtil.getfFolderRealpath();
	
	public String saveFunding() throws Exception {
		//增加
		this.success=false;
		if(fundingService.saveFunding(funding)){
			this.success=true;
			this.setMessage("保存成功");
		}else{
			this.setMessage("保存失败，请检查填写内容和网络");
		};
		return SUCCESS;
	}
	
	
	public String findFunding() {
		this.success=true;
		pageJson=new PageJson();		
		try {
			if(funding!=null){
				pageJson.setRoot(fundingService.findFundingById(funding));
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			logger.info("出错了");
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public String fundingExlDataImp() throws Exception {
		this.message="";
		this.success = false;
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
		
		int startRow=0;//Excel读取开始行数，开始行数-1
		InputStream iss = new FileInputStream(xlsFile);
		POIFSFileSystem fs=new POIFSFileSystem(iss);
		HSSFWorkbook wb=new HSSFWorkbook(fs);
		HSSFSheet st=wb.getSheetAt(0);
		logger.info("st getSheetName::"+st.getSheetName());
		HSSFRow rowm=st.getRow(startRow);
		HSSFCell cell=rowm.getCell(0);
		String headStr="";
		headStr=GenerationUtils.getStringCellValue(cell);
		logger.info("st headStr::"+headStr);
		
		Funding fundingImp=new Funding();
		fundingImp.setXmmc(funding.getXmmc());
		rowm=st.getRow(3);
		int i=0;
		fundingImp.setJe1(GenerationUtils.getStringCellValue(rowm.getCell(i++)));
		fundingImp.setZgck1(GenerationUtils.getStringCellValue(rowm.getCell(i++)));
		fundingImp.setGjbz1(GenerationUtils.getStringCellValue(rowm.getCell(i++)));
		fundingImp.setHzzc1(GenerationUtils.getStringCellValue(rowm.getCell(i++)));
		fundingImp.setBksj1(GenerationUtils.getDateCellValue(rowm.getCell(i++)));
		fundingImp.setBz1(GenerationUtils.getStringCellValue(rowm.getCell(i++)));
		rowm=st.getRow(6);
		i=0;
		fundingImp.setJe2(GenerationUtils.getStringCellValue(rowm.getCell(i++)));
		fundingImp.setZgck2(GenerationUtils.getStringCellValue(rowm.getCell(i++)));
		fundingImp.setGjbz2(GenerationUtils.getStringCellValue(rowm.getCell(i++)));
		fundingImp.setHzzc2(GenerationUtils.getStringCellValue(rowm.getCell(i++)));
		fundingImp.setBksj2(GenerationUtils.getDateCellValue(rowm.getCell(i++)));
		fundingImp.setBz2(GenerationUtils.getStringCellValue(rowm.getCell(i++)));
		rowm=st.getRow(9);
		i=0;
		fundingImp.setJe3(GenerationUtils.getStringCellValue(rowm.getCell(i++)));
		fundingImp.setZgck3(GenerationUtils.getStringCellValue(rowm.getCell(i++)));
		fundingImp.setGjbz3(GenerationUtils.getStringCellValue(rowm.getCell(i++)));
		fundingImp.setHzzc3(GenerationUtils.getStringCellValue(rowm.getCell(i++)));
		fundingImp.setBksj3(GenerationUtils.getDateCellValue(rowm.getCell(i++)));
		fundingImp.setBz3(GenerationUtils.getStringCellValue(rowm.getCell(i++)));
		rowm=st.getRow(12);
		i=0;
		fundingImp.setJe4(GenerationUtils.getStringCellValue(rowm.getCell(i++)));
		fundingImp.setZgck4(GenerationUtils.getStringCellValue(rowm.getCell(i++)));
		fundingImp.setGjbz4(GenerationUtils.getStringCellValue(rowm.getCell(i++)));
		fundingImp.setHzzc4(GenerationUtils.getStringCellValue(rowm.getCell(i++)));
		fundingImp.setBksj4(GenerationUtils.getDateCellValue(rowm.getCell(i++)));
		fundingImp.setBz4(GenerationUtils.getStringCellValue(rowm.getCell(i++)));
				
		iss.close();
		
		if(fundingService.saveFunding(fundingImp)){
			logger.info("fundingExlDataImp::数据输入成功");
			message="数据输入成功";
			this.success = true;
			return SUCCESS;
		}else{
			message="在执行保存过程中出现错误，系统停止保存，请检查格式问题并重试";
			logger.info("fundingExlDataImp::数据输入失败");
			success=false;
		}
		
		return SUCCESS;
	}
	
	public String fundingExlDataExp() throws Exception {
		this.message="";
		this.success = false;
		List<Funding> fundingList=fundingService.findFundingById(funding);
		if(fundingList==null||fundingList.size()<1){
			message="系统中没有该项目的资金划拨记录";
			logger.info("fundingExlDataExp::系统中没有该项目的资金划拨记录");
			success=false;
			return SUCCESS;
		}
		Funding fundingExp=(Funding)fundingList.get(0);
		String templateXls=UploadUtil.getfTemplateRealpath()+"资金划拨记录输入模板.xls";
		InputStream iss = new FileInputStream(templateXls);
		POIFSFileSystem fs=new POIFSFileSystem(iss);
		HSSFWorkbook wb=new HSSFWorkbook(fs);
		HSSFSheet st=wb.getSheetAt(0);
		logger.info("fundingExlDataExp st getSheetName::"+st.getSheetName());
        
		int startRow=0;//Excel读取开始行数，开始行数-1
		HSSFRow rowm=st.getRow(startRow);
		HSSFCell cell=rowm.getCell(0);
		
		rowm=st.getRow(3);
		int i=0;
		cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getJe1());

        cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getZgck1());

        cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getGjbz1());  
        
        cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getHzzc1());  
        
        cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getBksj1());  
        
        cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getBz1());  
        

		rowm=st.getRow(6);
		i=0;
		cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getJe2());  
         
        cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getZgck2());  
         
        cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getGjbz2());  
        
        cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getHzzc2());  
        
        cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getBksj2());  
        
        cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getBz2());
        
        
		rowm=st.getRow(9);
		i=0;
		cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getJe3());  
         
        cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getZgck3());  
         
        cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getGjbz3());  
        
        cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getHzzc3());  
        
        cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getBksj3());  
        
        cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getBz3());
        
        
        rowm=st.getRow(12);
		i=0;
		cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getJe4());  
         
        cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getZgck4());  
         
        cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getGjbz4());  
        
        cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getHzzc4());  
        
        cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getBksj4());  
        
        cell=rowm.getCell(i++);
		cell.setCellValue(fundingExp.getBz4());
        
        
        String timeStamp=GenerationUtils.getTimeStampString();
        String saveName=null;
        saveName=fundingExp.getXmmc()+"_"+"资金划拨记录导出数据"+timeStamp+".xls";
        String xlsFile=ServletActionContext.getServletContext().getRealPath("/")+"export\\"+saveName;
        //GenerationUtils.createDir(ServletActionContext.getServletContext().getRealPath("/")+"export\\");
        logger.info("导出资金划拨记录xlsFile::"+xlsFile);
        try{
        	FileOutputStream fos = new FileOutputStream(xlsFile);  
            wb.write(fos);  
            fos.close();  
		}catch(Exception e){
			iss.close();
			e.printStackTrace();
			message="导出文件过大或模板文件存在问题，未能正常导出";
			success=false;
			return SUCCESS;
		}
				
		iss.close();
		
		logger.info("fundingExlDataExp::数据导出成功");
		message="数据导出成功，导出文件为<a href='export/"+saveName+"'>"+saveName+"</a>";
		this.success = true;
		return SUCCESS;
	}
	
	public String fundingBatchExlDataExp() throws Exception {
		String timeStamp=GenerationUtils.getTimeStampString();
	    String saveName="民房重建一户一档资金划拨记录导出数据";
	    saveName=saveName+"_"+timeStamp+".xls";
	    try{
	    	String xlsFile=ServletActionContext.getServletContext().getRealPath("/")+"export\\"+saveName;
	    	logger.info("导出资金划拨记录xlsFile::"+xlsFile);
	    	HSSFWorkbook wb=fundingService.fundingBatchExlDataExp(null);    
        
        	FileOutputStream fos = new FileOutputStream(xlsFile);  
            wb.write(fos);  
            fos.close();  
            
            logger.info("fundingExlDataExp::数据导出成功");
    		message="数据导出成功，导出文件为<a href='export/"+saveName+"'>"+saveName+"</a>";
    		this.success = true;
		}catch(Exception e){
			e.printStackTrace();
			message="数据导出失败，请重试";
			this.success=false;
		}
		
		return SUCCESS;
	}
	
	public String fundingBatchExlDataImp() throws Exception {
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
			this.message=fundingService.fundingBatchExlDataImp(st);
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
	

	public Funding getFunding() {
		return funding;
	}
	public void setFunding(Funding funding) {
		this.funding = funding;
	}
	public FundingServiceImpl getFundingService() {
		return fundingService;
	}
	public void setFundingService(FundingServiceImpl fundingService) {
		this.fundingService = fundingService;
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

}
