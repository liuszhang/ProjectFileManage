/**
 * 
 */
package com.dr.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.dr.dao.impl.UserDAOImpl;
import com.dr.model.User;
import com.dr.util.GlobleVs;

/**
 * @author 赵亚一
 * @E-mail:yayi_zhao@163.com
 * @classDescription:TODO
 * @version:
 * @date:2016-9-2 下午6:29:44
 */
public class UserServiceImpl {


	private UserDAOImpl userDAO;
	
	public UserDAOImpl getUserDAO() {
		return userDAO;
	}

	public void setUserDAO(UserDAOImpl userDAO) {
		this.userDAO = userDAO;
	}

	/* (non-Javadoc)
	 * @see com.poos.service.UserService#login(java.lang.String, java.lang.String)
	 */
	public Map login(String userid, String userpwd) throws Exception{
		Map map = new HashMap();
        map.put("success", Boolean.valueOf(false));
        map.put("message",GlobleVs.getUserLoginSuccessMessage());
        User paramUser = new User();
        paramUser.setUserid(userid);
        paramUser.setUserpwd(userpwd);
        List userList = null;
        userList = userDAO.checkLoginUser(paramUser);
        if((userList.isEmpty())||(userList == null) || (userList.size() != 1))
        {
            //map.put("success", Boolean.valueOf(false));
            map.put("message",GlobleVs.getUserLoginFailureMessage());
        }else{
        	map.put("success", Boolean.valueOf(true));
            User currentUser = (User)userList.get(0);
            map.put("sessionUser", currentUser);
        }
        return map;
	}

	/* (non-Javadoc)
	 * @see com.erpks.service.UserService#getUsers()
	 */
	public List getUsers() {
		// TODO Auto-generated method stub
		return userDAO.findAll();
	}
	public List findUser(String str) {
		// TODO Auto-generated method stub
		return userDAO.findUser(str);
	}

	/* (non-Javadoc)
	 * @see com.erpks.service.UserService#checkIn(com.erpks.model.User)
	 */
	public User checkIn(User account) {
		// TODO Auto-generated method stub
		String userid = account.getUserid();
		List<User> list = userDAO.findAndCheck(userid);
		String pass = account.getUserpwd();
		for (User a : list) {
			if (a.getUserpwd().trim().equals(pass))
				return a;
		}
		return null;
	}

	/* (non-Javadoc)
	 * @see com.erpks.service.UserService#saveEditedAccounts(com.erpks.model.User)
	 */
	public boolean saveEditedAccounts(User user) {
		// TODO Auto-generated method stub
		boolean s = userDAO.updateEditedData(user);

		return s;
	}

	public boolean addUser(User instance) {
		// TODO Auto-generated method stub
		return userDAO.addUser(instance);
	}
	
	public boolean saveUser(User instance) {
		// TODO Auto-generated method stub
		return userDAO.saveUser(instance);
	}
	
	public int deleteUserById(String instance) {
		User hr=new User();
		hr.setUserid(instance);
		return userDAO.deleteById(hr);
	}

}
