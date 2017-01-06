/**
 * 
 */
package com.dr.dao.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.dr.model.User;

/**
 * @author:赵亚一
 * @E-mail:yayi_zhao@163.com
 * @comment:
 * @classDescription:
 * @version:
 * @date:2016-9-2 下午6:30:02
 */
public class UserDAOImpl extends HibernateDaoSupport{
	private static final Logger log = LoggerFactory.getLogger(UserDAOImpl.class);
	private static final String TAG = "UserDAOImpl";

	/* (non-Javadoc)
	 * @see com.poos.dao.UserDAO#checkLoginUser(com.poos.model.User)
	 */
	public List<User> checkLoginUser(User user) {
		log.debug(TAG, "Finding Account");
		log.debug("Finding Account:"+user.getUserid());
		return getHibernateTemplate().find("from User where userid=? and userpwd=?",user.getUserid(),user.getUserpwd());
	}
	
	public List<User> findAll() {
		log.debug("finding all User instances");
		try {
			String queryString = "from User";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
	public List findUser(String str) {
		log.debug("getting User instance with UserId");
		try {
			String queryString = "from User"+str;
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("getting failed", re);
			throw re;
		}
	}

	/* (non-Javadoc)
	 * @see com.erpks.dao.UserDAO#updateEditedData(com.erpks.model.User)
	 */
	public boolean updateEditedData(User account) {
		// TODO Auto-generated method stub
		boolean flag=false;
		log.debug("update User instance");
		try {
			getHibernateTemplate().update(account);
			log.debug("update User instance successful");
			flag= true;
		} catch (org.springframework.dao.DataAccessException re) {
			log.error("update User instance failed", re);
			flag=false;
			//throw re;
		}
		return flag;
	}

	/* (non-Javadoc)
	 * @see com.erpks.dao.UserDAO#findAndCheck(java.lang.String)
	 */
	public List<User> findAndCheck(String userid) {
		// TODO Auto-generated method stub
		return getHibernateTemplate().find("from User where userid=?",userid);
	}
	
	public boolean addUser(User account) {
		log.debug("saving User instance");
		try {
			getHibernateTemplate().save(account);
			log.debug("save successful");
			return true;
		} catch (RuntimeException re) {
			log.error("save failed", re);
			return false;
		}
	}
	
	public boolean saveUser(User account) {
		log.debug("saving User instance");
		try {
			getHibernateTemplate().saveOrUpdate(account);
			log.debug("save successful");
			return true;
		} catch (RuntimeException re) {
			log.error("save failed", re);
			return false;
		}
	}
	
	public int deleteById(User instance) {
		log.debug("deleteById User");
		try {
			getHibernateTemplate().delete(instance);
			return 1;
		} catch (RuntimeException re) {
			log.error("getting failed", re);
			throw re;
		}
	}

}
