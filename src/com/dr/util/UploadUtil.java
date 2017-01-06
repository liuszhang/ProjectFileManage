/**
 * 
 */
package com.dr.util;

import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;

import com.dr.action.HousingReconstructionAction;

/**
 * @author 赵亚一
 * @E-mail:yayi_zhao@163.com
 * @classDescription:TODO
 * @version:
 * @date:2016-9-10 上午9:43:34
 */
public class UploadUtil {
	//上传路径
		private static final String GLOBLE_UPLOADPATH=ServletActionContext.getServletContext().getRealPath("/");
		private static final String HR_FOLDER="upload\\民房重建一户一档\\";
		private static final String HR_FOLDER_REALPATH=GLOBLE_UPLOADPATH+HR_FOLDER;
		private static final String HR_FOLDER_IMG="民房重建建设图片";
		private static final String HR_FOLDER_MTL="民房重建资料目录";
		private static final String MAR_FOLDER="upload\\维修加固一户一档\\";
		private static final String MAR_FOLDER_REALPATH=GLOBLE_UPLOADPATH+MAR_FOLDER;
		private static final String MAR_FOLDER_IMG="维修加固项目信息图片";
		private static final String MAR_FOLDER_MTL="维修加固验收文件图片";
		private static final String R_FOLDER="upload\\重建项目\\";
		private static final String R_FOLDER_REALPATH=GLOBLE_UPLOADPATH+R_FOLDER;
		private static final String R_FOLDER_IMG="重建建设图片";
		private static final String R_FOLDER_MTL="重建资料目录";
		private static final String R_FOLDER_ARCHV="重建项目档案";
		private static final String F_FOLDER="upload\\Funding\\";
		private static final String F_FOLDER_REALPATH=GLOBLE_UPLOADPATH+F_FOLDER;
		private static final String F_TEMPLATE_REALPATH=ServletActionContext.getServletContext().getRealPath("/")+"page\\";
		
		private static Logger logger=Logger.getLogger(UploadUtil.class);
		
		
		/**
		 * @Title: getUploadpath
		 * @Description: 获取具体上传路径
		 * @param: @param realPath 上层路径
		 * @param: @param project 项目名称或每个项目唯一识别
		 * @param: @param folderName 目的文件夹
		 * @param: @return   要上传的文件夹路径
		 * @return: String   
		 * @throws
		 */
		public static String getUploadRealPath(String realPath,String project, String folderName) {
			String path=realPath+project+"\\"+folderName;
			logger.info("返回目录："+path);
			return path;
		}
		
		public static String getJSPath(String path) {
			return path.replaceAll("\\\\", "/");
		}


		public static String getGlobleUploadpath() {
			return GLOBLE_UPLOADPATH;
		}


		public static String getHrFolder() {
			return HR_FOLDER;
		}


		public static String getHrFolderRealpath() {
			return HR_FOLDER_REALPATH;
		}


		public static String getHrFolderImg() {
			return HR_FOLDER_IMG;
		}


		public static String getHrFolderMtl() {
			return HR_FOLDER_MTL;
		}


		public static String getMarFolder() {
			return MAR_FOLDER;
		}


		public static String getMarFolderRealpath() {
			return MAR_FOLDER_REALPATH;
		}


		public static String getMarFolderImg() {
			return MAR_FOLDER_IMG;
		}


		public static String getMarFolderMtl() {
			return MAR_FOLDER_MTL;
		}


		public static String getrFolder() {
			return R_FOLDER;
		}


		public static String getrFolderRealpath() {
			return R_FOLDER_REALPATH;
		}


		public static String getrFolderImg() {
			return R_FOLDER_IMG;
		}


		public static String getrFolderMtl() {
			return R_FOLDER_MTL;
		}


		public static String getrFolderArchv() {
			return R_FOLDER_ARCHV;
		}

		public static String getfFolder() {
			return F_FOLDER;
		}

		public static String getfFolderRealpath() {
			return F_FOLDER_REALPATH;
		}

		public static String getfTemplateRealpath() {
			return F_TEMPLATE_REALPATH;
		}
		
}
