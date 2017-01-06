/**
 * 
 */
package com.dr.model;

import java.util.Date;

/**
 * @author:赵亚一
 * @E-mail:yayi_zhao@163.com
 * @comment:
 * @classDescription:
 * @version:
 * @date:2016-9-2下午06:07:49
 */
public class User implements java.io.Serializable{
	
	private String userid;
	private String username;
	private String userpwd;
	private Date usercrtdate;
	private String userdept;
	private String userrole;
	private String userstatus;
	
	/**
	 * @param userid
	 * @param username
	 * @param userpwd
	 * @param usercrtdate
	 * @param userdept
	 * @param userrole
	 * @param userstatus
	 */
	public User(String userid, String username, String userpwd,
			Date usercrtdate, String userdept, String userrole,
			String userstatus) {
		super();
		this.userid = userid;
		this.username = username;
		this.userpwd = userpwd;
		this.usercrtdate = usercrtdate;
		this.userdept = userdept;
		this.userrole = userrole;
		this.userstatus = userstatus;
	}

	public User() {
		super();
	}
	
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getUserpwd() {
		return userpwd;
	}
	public void setUserpwd(String userpwd) {
		this.userpwd = userpwd;
	}
	public Date getUsercrtdate() {
		return usercrtdate;
	}
	public void setUsercrtdate(Date usercrtdate) {
		this.usercrtdate = usercrtdate;
	}
	public String getUserdept() {
		return userdept;
	}
	public void setUserdept(String userdept) {
		this.userdept = userdept;
	}
	public String getUserrole() {
		return userrole;
	}
	public void setUserrole(String userrole) {
		this.userrole = userrole;
	}
	public String getUserstatus() {
		return userstatus;
	}
	public void setUserstatus(String userstatus) {
		this.userstatus = userstatus;
	}
}
