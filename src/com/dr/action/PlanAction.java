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
import com.dr.model.Plan;
import com.dr.model.PageJson;
import com.dr.model.PlanSummary;
import com.dr.util.GenerationUtils;
import com.dr.util.GlobleVs;
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
public class PlanAction extends ActionSupport{
	private PageJson pageJson;
	private boolean success;
	private Plan plan;
	private PlanSummary planSummary;
	private String message;
	private String page;
	private String start;  
	private String limit;  
	private String idStr;
	
	private File userfile_E; // 上传的文件
	private String uploadEFileName; // 文件名
	
	private static Logger logger=Logger.getLogger(PlanAction.class);
	String fileDirJs="upload/Plan/";
	String fileDir=ServletActionContext.getServletContext().getRealPath("/")+"upload\\";
	String saveName="实施计划单.xls";
	String psSaveName="定日县灾后重建9月20日.xls";
	
	public String planExlDataDisplay() throws Exception {
		this.message="";
		this.success = false;
		
		String xlsFile=fileDir+saveName;

		boolean templateFlag=false;
		int startRow=0;//Excel读取开始行数，开始行数-1
		int maxColNum=7;//数据中最大列数
		InputStream iss = new FileInputStream(xlsFile);
		POIFSFileSystem fs=new POIFSFileSystem(iss);
		HSSFWorkbook wb=new HSSFWorkbook(fs);
		HSSFSheet st=wb.getSheetAt(0);
		logger.info("st getSheetName::"+st.getSheetName());
		logger.info("st getLastRowNum::"+st.getLastRowNum());
		HSSFRow rowm=st.getRow(startRow);
		HSSFCell cell=rowm.getCell(0);
		logger.info("st the first cell value::"+GenerationUtils.getStringCellValue(cell));
		String headStr="";
		rowm=st.getRow(++startRow);
		for(int m=0;m<maxColNum;m++){
			cell=rowm.getCell(m);
			headStr=headStr+GenerationUtils.getStringCellValue(cell);
		}
		logger.info("st headStr::"+headStr);
		//if(!headStr.equals("序号项目名称项目内容投资金额（万元）开工实施计划施工时间备注")){templateFlag=true;}
		if(templateFlag){
			iss.close();
			message="文件不标准，或者进行了改动，请确保读取正确的文件";
			success=false;
			return SUCCESS;
		}
		
		List<Plan> hrList=new ArrayList<Plan>();
		
		for(int i=++startRow;i<st.getLastRowNum()+1;i++){
			logger.info("st rowm num::"+i);
			rowm=st.getRow(i);
			int j=0;
			cell=rowm.getCell(j++);
			String xh=GenerationUtils.getStringCellValue(cell);
			//String xh=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String xmmc=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String xmnr=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String tzje=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String kgss=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String jhsgsj=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String bz=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			
			//检查是否空项
			if(xh==null||xh.trim().length()==0){
				logger.info("st rowm num::"+i+"是空项，跳过");
			}else{
				
				hrList.add(new Plan(xh,xmmc,xmnr,tzje,kgss,jhsgsj,bz));
			}			
		}
		iss.close();
		logger.info("upload list size::"+hrList.size());
		if(hrList.size()<1){
			message="Excel中没有可识别的数据，未显示！";
			success=false;
			return SUCCESS;
		}
		pageJson=new PageJson();
		pageJson.setRoot(hrList);
		
		logger.info("plan::数据输入成功");
		this.success = true;
		return SUCCESS;
	}
	
	public String planSummaryExlDataDisplay() throws Exception {
		this.message="";
		this.success = false;
		
		String xlsFile=fileDir+psSaveName;

		boolean templateFlag=false;
		int startRow=0;//Excel读取开始行数，开始行数-1
		int maxColNum=34;//数据中最大列数
		InputStream iss = new FileInputStream(xlsFile);
		POIFSFileSystem fs=new POIFSFileSystem(iss);
		HSSFWorkbook wb=new HSSFWorkbook(fs);
		HSSFSheet st=wb.getSheetAt(0);
		logger.info("st getSheetName::"+st.getSheetName());
		logger.info("st getLastRowNum::"+st.getLastRowNum());
		HSSFRow rowm=st.getRow(startRow);
		HSSFCell cell=rowm.getCell(0);
		logger.info("st the first cell value::"+GenerationUtils.getStringCellValue(cell));
		String headStr="";
		rowm=st.getRow(++startRow);
		for(int m=0;m<maxColNum;m++){
			cell=rowm.getCell(m);
			headStr=headStr+GenerationUtils.getStringCellValue(cell);
		}
		logger.info("st headStr::"+headStr);
		//if(!headStr.equals("序号项目名称项目内容投资金额（万元）开工实施计划施工时间备注")){templateFlag=true;}
		if(templateFlag){
			iss.close();
			message="文件不标准，或者进行了改动，请确保读取正确的文件";
			success=false;
			return SUCCESS;
		}
		
		List<PlanSummary> hrList=new ArrayList<PlanSummary>();
		startRow=startRow+4;
		for(int i=++startRow;i<st.getLastRowNum()+1;i++){
			logger.info("st rowm num::"+i);
			rowm=st.getRow(i);
			int j=0;
			cell=rowm.getCell(j++);
			String plans1=GenerationUtils.getStringCellValue(cell);
			//String xh=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			//String plans1=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans2=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans3=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans4=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans5=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans6=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans7=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans8=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans9=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans10=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans11=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans12=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans13=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans14=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans15=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans16=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans17=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans18=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans19=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans20=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans21=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans22=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans23=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans24=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans25=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans26=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans27=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans28=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans29=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans30=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans31=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans32=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans33=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String plans34=GenerationUtils.getStringCellValue(rowm.getCell(j++));

			
			//检查是否空项
			if((plans1==null||plans1.trim().length()==0)&&(plans2==null||plans2.trim().length()==0)){
				logger.info("st rowm num::"+i+"是空项，跳过");
			}else{
				
				hrList.add(new PlanSummary(plans1,plans2,plans3,plans4,plans5,plans6,plans7,plans8,plans9,plans10,plans11,plans12,plans13,plans14,plans15,plans16,plans17,plans18,plans19,plans20,plans21,plans22,plans23,plans24,plans25,plans26,plans27,plans28,plans29,plans30,plans31,plans32,plans33,plans34));
			}			
		}
		iss.close();
		logger.info("upload list size::"+hrList.size());
		if(hrList.size()<1){
			message="Excel中没有可识别的数据，未显示！";
			success=false;
			return SUCCESS;
		}
		pageJson=new PageJson();
		pageJson.setRoot(hrList);
		
		logger.info("plan::数据输入成功");
		this.success = true;
		return SUCCESS;
	}

	public Plan getPlan() {
		return plan;
	}
	public void setPlan(Plan plan) {
		this.plan = plan;
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

	public PlanSummary getPlanSummary() {
		return planSummary;
	}

	public void setPlanSummary(PlanSummary planSummary) {
		this.planSummary = planSummary;
	}

}
