/**
 * 
 */
package com.dr.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Field;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.apache.log4j.MDC;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.poi.ss.usermodel.Font;
import org.apache.struts2.ServletActionContext;

import com.dr.action.LoginAction;
import com.dr.model.TreeNode;
import com.dr.model.User;
import com.dr.model.PageJson;
import com.dr.service.impl.RegionCodeServiceImpl;
import com.dr.service.impl.UserServiceImpl;
import com.dr.util.GenerationUtils;
import com.dr.util.MACAddress;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

/**
 * @author 赵亚一
 * @E-mail:yayi_zhao@163.com
 * @classDescription:TODO
 * @version:
 * @date:2016-9-2 下午6:32:02
 */
public class LoginAction extends ActionSupport{

	private UserServiceImpl userService;
	private RegionCodeServiceImpl regionCodeService;
	private PageJson pageJson;
	private boolean success;
	private String newPwd;
	private String rePwd;
	private String message;
	private String loginurl;
	private String userRole;
	private User user;
	private String idStr;
	private String node;
	private static Logger logger=Logger.getLogger(LoginAction.class);
	
	private File userfile_E; // 上传的文件
	private String uploadEFileName; // 文件名
	String fileDirJs="upload/User/";
	String fileDir=ServletActionContext.getServletContext().getRealPath("/")+"upload\\User\\";
	
	public String login() throws Exception{
		setUserRole("");
		this.loginurl = null;
		User s=userService.checkIn(user);
		if(s!=null){
			
			HttpServletRequest request=ServletActionContext.getRequest();
			request.getSession().setAttribute("user", s);
			MDC.put("ip", request.getRemoteAddr());
			
			MACAddress macAdd=new MACAddress();
			if(!s.getUserrole().equals("管理员")||macAdd.getMacIdentity()){
				this.loginurl = "index.jsp";
				setUserRole(s.getUserrole());
	            this.success = true;
	 			this.message = "登录成功，正在跳转……";
	 			logger.info("用户ID："+s.getUserid()+"尝试登陆成功");
			}else{
				this.success = false;
				this.message = "授权失败，您未通过许可认证授权";
			}
			
	    }else {
			this.success = false;
			this.message = "登录失败，请检查账号和密码。";
	    }
		return SUCCESS;

	}
	
	public boolean checkLogin() throws Exception{
		ActionContext ctx=ActionContext.getContext();
		User loginUser=(User)ctx.getSession().get("user");
		if(loginUser==null||!loginUser.getUserrole().trim().equals("管理员")){
			this.setSuccess(false);
			this.setMessage("请您登录，或者您不是管理员，没有权限执行此操作");
			return false;
		}else{
			this.setSuccess(true);
			return true;
		}
	}
	
	public String findAllUsers() throws Exception{
		pageJson=new PageJson();
		pageJson.setRoot(userService.getUsers());//获取结果集
		return SUCCESS;
	}
	
	public String findUser() {//暂时无用
		pageJson=new PageJson();
		String whereStr="";
		int i=0;
		try {
			if(user!=null){
				pageJson.setRoot(userService.findUser(""));
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			logger.info("出错了");
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public String delUser() throws Exception {
		if(!checkLogin()){
			  return SUCCESS;
		  }
		this.success=false;
		int test=userService.deleteUserById(idStr);
		//System.out.println("test count::"+test);
		if(test>0){
			this.success=true;
			this.setMessage("删除项目（用户ID为“"+idStr+"”）成功");
		}else{
			this.setMessage("删除失败，请检查填写内容和网络");
		};
		return SUCCESS;
	}
	
	public String logout() throws Exception {
		HttpServletRequest request=ServletActionContext.getRequest();
		HttpSession session1=request.getSession();
		session1.invalidate();
		this.success=true;
		return SUCCESS;
	}
	
	  public String changePwd() throws Exception {
		  if(!checkLogin()){
			  return SUCCESS;
		  }
		  if(newPwd==null || !newPwd.equals(rePwd)){
			  this.success=false;
			  this.setMessage("新密码为空或者两次填写不一致。");
		  }else{
				User s=userService.checkIn(user);
				if(s!=null){
					if(s.getUserrole().equals("管理员")){
						s.setUserpwd(newPwd);
						boolean flag=userService.saveEditedAccounts(s);
						if(flag){
							this.success = true;
							this.setMessage("保存成功");
						}else{
							this.success = false;
							this.setMessage("保存失败");
						}
					}else{
						this.success = false;
						this.setMessage("您没有权限执行此操作");
					}
					
					
			    }else {
						this.success = false;
						this.setMessage("密码错误，保存失败");
			    }
			  
		  }
			return SUCCESS;
	  }
	  
	  public String addUser() throws Exception {
		  if(!checkLogin()){
			  return SUCCESS;
		  }
		  this.message="";
		  this.success = false;
		  user.setUserid(user.getUserid().trim());
		  if(user.getUserid().length()==0||user.getUserid().equals("")){
			  message="用户ID不能为空或者空格";
				success=false;
				return SUCCESS;
		  }
		  logger.info("addUser save instance getHbh::"+user.getUserid());
/*		  if(user.getUserpwd()==null||user.getUserpwd()==""){
			  user.setUserpwd("123");
		  }*/
		  
		  if(!userService.addUser(user)){
					message="在添加过程中出现错误，系统可能已经存在本用户，错误条目为“"+user.getUserid()+"”，系统停止保存，请修改并重试，如果您需要在系统中覆盖此用户，请使用Excel导入功能";
					success=false;
					return SUCCESS;
		  };
			
			logger.info("user::addUser成功");
			message="添加用户成功";
			this.success = true;
			return SUCCESS;
		}
	  
	  public String userExlDataImp() throws Exception {
		  if(!checkLogin()){
			  return SUCCESS;
		  }
			this.message="";
			this.success = false;
			String timeStamp=GenerationUtils.getTimeStampString();		
			String saveName=null;
			int index=uploadEFileName.lastIndexOf(".");
			String last=uploadEFileName.substring(index);
			saveName=uploadEFileName.substring(0, index)+"_"+"上传数据"+timeStamp+last;
			//String fileDir=ServletActionContext.getServletContext().getRealPath("/")+"upload\\User\\";
			String xlsFile=fileDir+"import\\"+saveName;
			GenerationUtils.createDir(fileDir+"import\\");
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
			
			boolean templateFlag=false;
			int startRow=0;//Excel读取开始行数，开始行数-1
			int maxColNum=5;//数据中最大列数
			InputStream iss = new FileInputStream(xlsFile);
			POIFSFileSystem fs=new POIFSFileSystem(iss);
			HSSFWorkbook wb=new HSSFWorkbook(fs);
			HSSFSheet st=wb.getSheetAt(0);
			logger.info("st getSheetName::"+st.getSheetName());
			logger.info("st getLastRowNum::"+st.getLastRowNum());
			HSSFRow rowm=st.getRow(startRow);
			HSSFCell cell=rowm.getCell(0);
			String headStr="";
			for(int m=startRow++;m<maxColNum;m++){
				cell=rowm.getCell(m);
				headStr=headStr+GenerationUtils.getStringCellValue(cell);
			}
			logger.info("st headStr::"+headStr);
			if(!headStr.equals("用户ID用户名密码组织角色")){templateFlag=true;}
			if(templateFlag){
				iss.close();
				message="模版不是标准模版，或者进行了改动，请下载使用正确的模版";
				success=false;
				return SUCCESS;
			}
			
			List<User> hrList=new ArrayList<User>();
			
			for(int i=startRow;i<st.getLastRowNum()+1;i++){
				logger.info("st rowm num::"+i);
				rowm=st.getRow(i);
				int j=0;
				cell=rowm.getCell(j++);
				String userid=GenerationUtils.getStringCellValue(cell);
				
				String username=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String userpwd=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String userdept=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String userrole=GenerationUtils.getStringCellValue(rowm.getCell(j++));

				Date usercrtdate=new Date();
				//检查是否空项
				if(userid==null||userid.trim().length()==0){
					logger.info("st rowm num::"+i+"是空项，跳过");
				}else{
					hrList.add(new User(userid,username,userpwd,usercrtdate, userdept, userrole,null));
				}			
				//String id=st.getCell(j++, i).getContents();
				//headStr=headStr+GenerationUtils.getStringCellValue(cell);
			}
			iss.close();
			logger.info("upload list size::"+hrList.size());
			if(hrList.size()<1){
				message="Excel中没有可识别的数据，未导入！";
				success=false;
				return SUCCESS;
			}
			
			for(User instance:hrList){
				logger.info("hrList save instance getHbh::"+instance.getUserid());
				if(!userService.saveUser(instance)){
					message="在导入过程中出现错误，错误条目为“"+instance.getUserid()+"”，系统停止保存，请检查是否存在问题并重试";
					success=false;
					return SUCCESS;
				};
			}
			
			logger.info("user::数据输入成功");
			message="数据输入成功";
			this.success = true;
			return SUCCESS;
		}
	  
	@SuppressWarnings("deprecation")
	public String userExlDataExp() throws Exception {
		if(!checkLogin()){
			  return SUCCESS;
		}
		this.message="";
		this.success = false;
		String saveName="用户数据导出";
		String headStr="用户ID|用户名|密码|组织|角色";
        String fieldStr="userid|username|userpwd|userdept|userrole";
		HSSFWorkbook wb = new HSSFWorkbook();  
        HSSFSheet sheet = wb.createSheet("导出数据");  
        HSSFRow row = sheet.createRow((int) 0); 
        
        HSSFCellStyle style = wb.createCellStyle();  
        style.setAlignment(HSSFCellStyle.ALIGN_CENTER); // 创建一个居中格式   
        style.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);// 垂直  
        Font font = wb.createFont();     
        font.setFontHeightInPoints((short)12);
        style.setFont(font);
        
        String[] headStrArray = headStr.split("\\|"); 
        for (int i = 0 ; i <headStrArray.length ; i++) {
          //System.out.println("--"+headStrArray[i]);
          HSSFCell cell = row.createCell((short) i);  
          cell.setCellValue(headStrArray[i]);  
          cell.setCellStyle(style); 
        }
 
        List list = userService.getUsers();
        logger.info("export list size::"+list.size());
  
        for (int i = 0; i < list.size(); i++){
            row = sheet.createRow((int) i + 1);  
            User instance = (User)list.get(i);  
            Class cls = instance.getClass();
            logger.info("CLS::"+cls.getName());
            
            String[] fieldStrArray = fieldStr.split("\\|"); 
            for (int i1 = 0 ; i1 <fieldStrArray.length ; i1++) {
            	Field fld = cls.getDeclaredField(fieldStrArray[i1]); 
                fld.setAccessible(true);
                //System.out.println(fieldStrArray[i1]+":field:" + fld.get(instance)); 
                if(fld.get(instance) instanceof Date){
                	SimpleDateFormat sdf=new SimpleDateFormat("yyyy/MM/dd");  
                	String str=sdf.format(fld.get(instance));  
                    row.createCell((short) i1).setCellValue(str);
                }else{
                	row.createCell((short) i1).setCellValue((String) fld.get(instance));
                }
            } 
        }  

        String timeStamp=GenerationUtils.getTimeStampString();
        saveName=saveName+"_"+timeStamp+".xls";
        String xlsFile=ServletActionContext.getServletContext().getRealPath("/")+"export\\"+saveName;
        logger.info("保存xlsFile::"+xlsFile);
        try{  
            FileOutputStream fos = new FileOutputStream(xlsFile);  
            wb.write(fos);  
            fos.close();  
        }catch (Exception e){  
            e.printStackTrace();  
        }
		
		logger.info("user::数据导出成功");
		message="数据导出成功，导出文件为<a href='export/"+saveName+"'>"+saveName+"</a>";
		this.success = true;
		return SUCCESS;
	}
	
	public String getMenuStore(){
		pageJson=new PageJson();
		pageJson.setRoot(regionCodeService.getTreeList(node));
		return SUCCESS;
	}

	public String getNewPwd() {
		return newPwd;
	}

	public void setNewPwd(String newPwd) {
		this.newPwd = newPwd;
	}

	public String getRePwd() {
		return rePwd;
	}

	public void setRePwd(String rePwd) {
		this.rePwd = rePwd;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public PageJson getPageJson() {
		return pageJson;
	}

	public void setPageJson(PageJson pageJson) {
		this.pageJson = pageJson;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setLoginurl(String loginurl) {
		this.loginurl = loginurl;
	}

	public String getLoginurl() {
		return loginurl;
	}

	public UserServiceImpl getUserService() {
		return userService;
	}

	public void setUserService(UserServiceImpl userService) {
		this.userService = userService;
	}

	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
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

	public String getIdStr() {
		return idStr;
	}

	public void setIdStr(String idStr) {
		this.idStr = idStr;
	}

	public RegionCodeServiceImpl getRegionCodeService() {
		return regionCodeService;
	}

	public void setRegionCodeService(RegionCodeServiceImpl regionCodeService) {
		this.regionCodeService = regionCodeService;
	}

	public String getNode() {
		return node;
	}

	public void setNode(String node) {
		this.node = node;
	}


}
