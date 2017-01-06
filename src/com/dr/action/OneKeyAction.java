/**
 * 
 */
package com.dr.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;

import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.struts2.ServletActionContext;

import com.dr.service.impl.FundingServiceImpl;
import com.dr.service.impl.HousingReconstructionServiceImpl;
import com.dr.service.impl.MaintenanceAndReinforcementServiceImpl;
import com.dr.service.impl.ReconstructionServiceImpl;
import com.dr.util.GenerationUtils;
import com.opensymphony.xwork2.ActionSupport;

/**
 * @author 赵亚一
 * @E-mail:yayi_zhao@163.com
 * @classDescription:TODO
 * @version:
 * @date:2016-9-22 下午3:36:02
 */
public class OneKeyAction extends ActionSupport{
	private HousingReconstructionServiceImpl housingReconstructionService;
	private MaintenanceAndReinforcementServiceImpl maintenanceAndReinforcementService;
	private ReconstructionServiceImpl reconstructionService;
	private FundingServiceImpl fundingService;

	private boolean success;
	private String message;
	
	private File userfile_E; // 上传的文件
	private String uploadEFileName; // 文件名
	private static Logger logger=Logger.getLogger(OneKeyAction.class);
	
	public String oneKeyExlDataExp() throws Exception {
		String saveName="一键数据导出";
		String timeStamp=GenerationUtils.getTimeStampString();
		saveName=saveName+"_"+timeStamp+".xls";
		HSSFWorkbook wb=new HSSFWorkbook();
		try{
			wb=housingReconstructionService.housingReconstructionExlDataExp(wb);
			wb=maintenanceAndReinforcementService.maintenanceAndReinforcementExlDataExp(wb);
			wb=reconstructionService.reconstructionExlDataExp(wb);
			wb=fundingService.fundingBatchExlDataExp(wb);
			
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
	
	public String oneKeyExlDataImp() throws Exception {
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
			String returnMsg="";
			
			HSSFSheet st=wb.getSheetAt(0);
			returnMsg=housingReconstructionService.housingReconstructionExlDataImp(st)+";";
			if(returnMsg.equals("数据输入成功")){
				this.message="民房重建表"+returnMsg+"；";
			}else{
				this.message=returnMsg+"；";
			}
			st=wb.getSheetAt(1);
			returnMsg=maintenanceAndReinforcementService.maintenanceAndReinforcementExlDataImp(st);
			if(returnMsg.equals("数据输入成功")){
				this.message=this.message+"维修加固表"+returnMsg+"；";
			}else{
				this.message=this.message+returnMsg+"；";
			}
			st=wb.getSheetAt(2);
			returnMsg=reconstructionService.reconstructionExlDataImp(st);
			if(returnMsg.equals("数据输入成功")){
				this.message=this.message+"重建项目表"+returnMsg+"。";
			}else{
				this.message=this.message+returnMsg+"；";
			}
			st=wb.getSheetAt(3);
			returnMsg=fundingService.fundingBatchExlDataImp(st);
			if(returnMsg.equals("数据输入成功")){
				this.message=this.message+"民房资金划拨表"+returnMsg+"。";
			}else{
				this.message=this.message+returnMsg+"；";
			}
			
			this.message=this.message+"请刷新数据。";
			this.success = true;
			iss.close();
		}catch(Exception e){
			e.printStackTrace();
			message="输入过程中存在问题，请检查输入表";
			success=false;
			return SUCCESS;
		}
		
		return SUCCESS;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public HousingReconstructionServiceImpl getHousingReconstructionService() {
		return housingReconstructionService;
	}

	public void setHousingReconstructionService(
			HousingReconstructionServiceImpl housingReconstructionService) {
		this.housingReconstructionService = housingReconstructionService;
	}

	public MaintenanceAndReinforcementServiceImpl getMaintenanceAndReinforcementService() {
		return maintenanceAndReinforcementService;
	}

	public void setMaintenanceAndReinforcementService(
			MaintenanceAndReinforcementServiceImpl maintenanceAndReinforcementService) {
		this.maintenanceAndReinforcementService = maintenanceAndReinforcementService;
	}

	public ReconstructionServiceImpl getReconstructionService() {
		return reconstructionService;
	}

	public void setReconstructionService(ReconstructionServiceImpl reconstructionService) {
		this.reconstructionService = reconstructionService;
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
	
	public FundingServiceImpl getFundingService() {
		return fundingService;
	}

	public void setFundingService(FundingServiceImpl fundingService) {
		this.fundingService = fundingService;
	}

}
