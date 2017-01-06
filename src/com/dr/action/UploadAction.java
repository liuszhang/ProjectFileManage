/**
 * 
 */
package com.dr.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;

import com.dr.util.GenerationUtils;
import com.dr.util.UploadUtil;
import com.opensymphony.xwork2.ActionSupport;

/**
 * @author 赵亚一
 * @E-mail:yayi_zhao@163.com
 * @classDescription:TODO
 * @version:
 * @date:2016-9-7 下午8:03:38
 */
public class UploadAction extends ActionSupport{
	private String message;
	private boolean success;
	private String model;//模块:民房重建一户一档
	private String xmmc;
	private String lx;//子文件夹
	
	private File uploadE; // 上传的文件
	private String uploadEFileName; // 文件名
	private static Logger logger=Logger.getLogger(UploadAction.class);
	private String Filename; // 文件名
	private String fileNewName;//保存的文件名
	
	public String fileDataImp() throws Exception {
		//model="HousingReconstruction";
		String singleDirName="维修加固项目信息图片维修加固验收文件图片";
		String sixDirName="民房重建建设图片";
		
		String fileDir=UploadUtil.getGlobleUploadpath()+"upload\\"+model+"\\"+xmmc+"\\"+lx+"\\";
		this.message="";
		this.success = false;
		String saveName;
		if(fileNewName==null||fileNewName.trim().length()==0){
			saveName=uploadEFileName;
		}else{
			saveName=fileNewName.trim();
		}
		String xlsFile=fileDir+saveName;
		GenerationUtils.createDir(fileDir);
		logger.info("上传File::"+xlsFile);
		try{
			if(singleDirName.indexOf(lx)!=-1){//满足条件的先删掉文件，保证唯一
				delFilesInFolder(fileDir);
			}
			if(sixDirName.indexOf(lx)!=-1){//满足条件的先删掉文件，保证唯一
				delFilesByFilter(fileDir,saveName);
			}
			FileOutputStream fos = new FileOutputStream(xlsFile);
			InputStream is = new FileInputStream(uploadE);
			byte[] buffer = new byte[8192];
			int count = 0;
			while ((count = is.read(buffer)) > 0) {
				fos.write(buffer, 0, count);
			}
			fos.close();
			is.close();
		}catch(Exception e){
			e.printStackTrace();
			message="输入文件过大或存在问题，未能正常上传，请下载使用正确的模版";
			success=false;
			return SUCCESS;
		}
				
		logger.info(model+"模块::数据上传成功");
		message="文件上传成功";
		this.success = true;
		return SUCCESS;
	}

	// 删除指定文件夹下所有文件
	public static boolean delFilesInFolder(String path) {
		boolean flag = false;
		File file = new File(path);
		if (!file.exists()) {
			return flag;
		}
		if (!file.isDirectory()) {
			return flag;
		}
		String[] tempList = file.list();
		File temp = null;
		if(tempList.length<1){
			return true;
		}
		for (int i = 0; i < tempList.length; i++) {
			if (path.endsWith(File.separator)) {
				temp = new File(path + tempList[i]);
			} else {
				temp = new File(path + File.separator + tempList[i]);
			}
			if (temp.isFile()) {
				temp.delete();
			}
		}
		return flag;
	}
	
	// 删除以1、2、3等开头的文件
	public static boolean delFilesByFilter(String path, String saveName) {
		String filter=saveName.substring(0, 1);
		boolean flag = false;
		File file = new File(path);
		if (!file.exists()) {
			return flag;
		}
		if (!file.isDirectory()) {
			return flag;
		}
		String[] tempList = file.list();
		File temp = null;
		if (tempList.length < 1) {
			return true;
		}
		for (int i = 0; i < tempList.length; i++) {
			if (path.endsWith(File.separator)) {
				temp = new File(path + tempList[i]);
			} else {
				temp = new File(path + File.separator + tempList[i]);
			}
			//System.out.println("temp.getName():"+temp.getName()+";temp.getName().indexOf(filter)"+temp.getName().indexOf(filter));
			if (temp.isFile()&&temp.getName().indexOf(filter)==0) {
				temp.delete();
			}
		}
		return flag;
	}

	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getXmmc() {
		return xmmc;
	}
	public void setXmmc(String xmmc) {
		this.xmmc = xmmc;
	}
	public String getLx() {
		return lx;
	}
	public void setLx(String lx) {
		this.lx = lx;
	}



	public File getUploadE() {
		return uploadE;
	}



	public void setUploadE(File uploadE) {
		this.uploadE = uploadE;
	}



	public String getUploadEFileName() {
		return uploadEFileName;
	}



	public void setUploadEFileName(String uploadEFileName) {
		this.uploadEFileName = uploadEFileName;
	}



	public String getFilename() {
		return Filename;
	}



	public void setFilename(String filename) {
		Filename = filename;
	}



	public String getFileNewName() {
		return fileNewName;
	}



	public void setFileNewName(String fileNewName) {
		this.fileNewName = fileNewName;
	}

}
