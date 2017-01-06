package com.dr.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.struts2.ServletActionContext;

import com.dr.model.Publicity;
import com.dr.model.PageJson;
import com.dr.service.impl.PublicityServiceImpl;
import com.dr.util.GenerationUtils;
import com.opensymphony.xwork2.ActionSupport;


/**
 * @author:赵亚一
 * @E-mail:yayi_zhao@163.com
 * @comment:
 * @classDescription:
 * @version:
 * @date:2016-8-19下午10:40:25
 */
public class PublicityAction extends ActionSupport{
	private PageJson pageJson;
	private boolean success;
	private Publicity publicity;
	private String message;
	private String page;
	private String start;  
	private String limit;  
	private String idStr;
	private PublicityServiceImpl publicityService;
	
	private File userfile_E; // 上传的文件
	private String uploadEFileName; // 文件名
	
	private static Logger logger=Logger.getLogger(PublicityAction.class);
	String fileDir=ServletActionContext.getServletContext().getRealPath("/")+"upload\\";
	String saveName="项目公示栏.xls";
	
	public String publicityExlDataDisplay() throws Exception {
		this.message="";
		this.success = false;
		
		String xlsFile=fileDir+saveName;

		//boolean templateFlag=false;
		int startRow=0;//Excel读取开始行数，开始行数-1
		//int maxColNum=23;//数据中最大列数
		InputStream iss = new FileInputStream(xlsFile);
		POIFSFileSystem fs=new POIFSFileSystem(iss);
		HSSFWorkbook wb=new HSSFWorkbook(fs);
		HSSFSheet st=wb.getSheetAt(0);
		logger.info("st getSheetName::"+st.getSheetName());
		logger.info("st getLastRowNum::"+st.getLastRowNum());
		HSSFRow rowm=st.getRow(startRow);
		HSSFCell cell=rowm.getCell(0);
		logger.info("st the first cell value::"+GenerationUtils.getStringCellValue(cell));
		//String headStr="";
		//rowm=st.getRow(++startRow);
		/*for(int m=0;m<maxColNum;m++){
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
		}*/
		startRow=startRow+3;
		List<Publicity> hrList=new ArrayList<Publicity>();
		for(int i=startRow;i<st.getLastRowNum()+1;i++){
			logger.info("st rowm num::"+i);
			rowm=st.getRow(i);
			int j=0;
			cell=rowm.getCell(j++);
			String xh=GenerationUtils.getStringCellValue(cell);
			
			//检查是否空项
			if(xh==null||xh.trim().length()==0){
				logger.info("st rowm num::"+i+"是空项，跳过");
			}else{
				//String xh=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String jsdd=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String xmnr=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String jsxmgcl=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String xmlx=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String ztz=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String zyczbzzj=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String zczj=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String nmmzc=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String qtzj=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String gspftze=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String jsdw=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String zrdw=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String hpdw=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String dkdw=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String pzdw=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String sjdw=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String zbdw=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String sgdmc=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String jldw=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String kgdw=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String jgsj=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String bz=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				
				hrList.add(new Publicity(xh,jsdd,xmnr,jsxmgcl,xmlx,ztz,zyczbzzj,zczj,nmmzc,qtzj,gspftze,jsdw,zrdw,hpdw,dkdw,pzdw,sjdw,zbdw,sgdmc,jldw,kgdw,jgsj,bz));
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
		
		logger.info("publicity::数据输入成功");
		this.success = true;
		return SUCCESS;
	}
	
	public String publicityReporting() throws Exception {
		this.message="";
		this.success = false;
		int flag=0;
		
		String xlsFile=fileDir+saveName;

		//boolean templateFlag=false;
		int startRow=0;//Excel读取开始行数，开始行数-1
		//int maxColNum=23;//数据中最大列数
		InputStream iss = new FileInputStream(xlsFile);
		POIFSFileSystem fs=new POIFSFileSystem(iss);
		HSSFWorkbook wb=new HSSFWorkbook(fs);
		HSSFSheet st=wb.getSheetAt(0);
		logger.info("st getSheetName::"+st.getSheetName());
		logger.info("st getLastRowNum::"+st.getLastRowNum());
		HSSFRow rowm=st.getRow(startRow);
		HSSFCell cell=rowm.getCell(0);
		logger.info("st the first cell value::"+GenerationUtils.getStringCellValue(cell));

		startRow=startRow+3;
		List<Publicity> hrList=new ArrayList<Publicity>();
		for(int i=startRow;i<st.getLastRowNum()+1;i++){
			logger.info("st rowm num::"+i);
			rowm=st.getRow(i);
			int j=0;
			cell=rowm.getCell(j++);
			String xh=GenerationUtils.getStringCellValue(cell);
			
			//检查是否空项
			if(xh==null||xh.trim().length()==0){
				logger.info("st rowm num::"+i+"是空项，跳过");
			}else{
				//String xh=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String jsdd=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String xmnr=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String jsxmgcl=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String xmlx=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String ztz=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String zyczbzzj=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String zczj=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String nmmzc=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String qtzj=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String gspftze=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String jsdw=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String zrdw=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String hpdw=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String dkdw=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String pzdw=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String sjdw=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String zbdw=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String sgdmc=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String jldw=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String kgdw=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String jgsj=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String bz=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				
				if(xh.equals("民房重建")){
					++flag;
				}else if(xh.equals("33个整村推进灾后重建基础设施")){
					++flag;
				}
				/*"总投资（万元）"	ztz
				中央财政补助资金	zyczbzzj
				自筹资金（县级）	zczj
				农牧民自筹	nmmzc
				其他资金	qtzj
				*/
				String cm="";
				if(jsdd.indexOf("乡")!=-1){
					cm=jsdd.substring(jsdd.indexOf("乡")+1);
				}else if(jsdd.indexOf("镇")!=-1){
					cm=jsdd.substring(jsdd.indexOf("镇")+1);
				}else{
					cm=jsdd;
				}
				ztz=publicityService.getFundingSum("ztz",cm,flag);
				ztz=getWY(ztz);
				zyczbzzj=publicityService.getFundingSum("gjbz",cm,flag);
				zyczbzzj=getWY(zyczbzzj);
				if(flag==1){
					nmmzc=publicityService.getFundingSum("qzzc",cm,flag);
					nmmzc=getWY(nmmzc);
				}
				if(flag==2){
					zczj=publicityService.getFundingSum("qzzc",cm,flag);
					zczj=getWY(zczj);
				}
				
				qtzj=publicityService.getOtherFundingSum(cm,flag);
				qtzj=getWY(qtzj);
				
				hrList.add(new Publicity(xh,jsdd,xmnr,jsxmgcl,xmlx,ztz,zyczbzzj,zczj,nmmzc,qtzj,gspftze,jsdw,zrdw,hpdw,dkdw,pzdw,sjdw,zbdw,sgdmc,jldw,kgdw,jgsj,bz));
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
		
		logger.info("publicity::数据统计成功");
		this.success = true;
		return SUCCESS;
	}
	
	//转换万元
	public String getWY(String str) {
		if(str!=null&&!str.trim().equals("")){
			double num = Double.parseDouble(str);
			double n = (double)num/10000;
			str=String.format("%.6f",n);
			return getNo0(str);
		}else return str;
	}
	//去掉后面的0
	public String getNo0(String str) {
		String a=str.substring(str.length()-1, str.length());
		if(a.equals("0")){
			str=str.substring(0, str.length()-1);
			return getNo0(str);
		}else if(a.equals(".")){
			return str.substring(0, str.length()-1);
		}else{
			return str;
		}
	}

	public Publicity getPublicity() {
		return publicity;
	}
	public void setPublicity(Publicity publicity) {
		this.publicity = publicity;
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

	public PublicityServiceImpl getPublicityService() {
		return publicityService;
	}

	public void setPublicityService(PublicityServiceImpl publicityService) {
		this.publicityService = publicityService;
	}

}
