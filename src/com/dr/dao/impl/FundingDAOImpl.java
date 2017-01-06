/**
 * 
 */
package com.dr.dao.impl;

import java.sql.SQLException;
import java.util.List;

import org.hibernate.HibernateException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.dr.model.Funding;

/**
 * @author:赵亚一
 * @E-mail:yayi_zhao@163.com
 * @comment:
 * @classDescription:
 * @version:
 * @date:2016-8-20下午10:15:21
 */
public class FundingDAOImpl extends HibernateDaoSupport {
	private static final Logger log = LoggerFactory.getLogger(FundingDAOImpl.class);
	private static final String TAG = "FundingDAOImpl";
	
	public boolean saveFunding(Funding instance) {
		log.debug("saving Funding instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("save successful");
			return true;
		} catch (RuntimeException re) {
			log.error("save failed", re);
			return false;
		}
	}

	
	public List findFundingById(Funding instance) {
		log.debug("getting Funding instance with FundingId");
		try {
			String queryString = "from Funding where xmmc = '"+instance.getXmmc()+"'";
			//queryString=queryString+instance.getXmmc();
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("getting failed", re);
			throw re;
		}
	}
	
	/**
	 * @param index
	 * @param pageSize
	 * @return
	 */
	public List findFundingByPage(final int index, final int pageSize) {
		log.debug("finding Funding instances");
		final String queryString = "from Funding";
		List list=getHibernateTemplate().executeFind(new HibernateCallback(){
			@Override
			public Object doInHibernate(org.hibernate.Session session)throws HibernateException, SQLException{
				List result=session.createQuery(queryString).setFirstResult(index).setMaxResults(pageSize).list();
				return result;
			}

		
		});
		return list;
	}
	
	public List findFundingByPage(final int index, final int pageSize,String str) {
		log.debug("finding Funding instances");
		final String queryString = "from Funding"+str;
		List list=getHibernateTemplate().executeFind(new HibernateCallback(){
			@Override
			public Object doInHibernate(org.hibernate.Session session)throws HibernateException, SQLException{
				List result=session.createQuery(queryString).setFirstResult(index).setMaxResults(pageSize).list();
				return result;
			}

		
		});
		return list;
	}
	
	public int countNum(String str) {//2.9+
		log.debug("counting Funding instances with queryString");
		try {
			String queryString = "select count(*) from Funding"+str;
			log.debug("queryString："+queryString);
			Long test= (Long)getHibernateTemplate().find(queryString).get(0);
			return test.intValue();
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
	public List getAllFunding() {
		log.debug("getting All Funding instance");
		try {
			String queryString = "from Funding";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("getting failed", re);
			throw re;
		}
	}
	
	
	public int deleteById(Funding instance) {
		log.debug("deleteById Funding");
		try {
			getHibernateTemplate().delete(instance);
			return 1;
		} catch (RuntimeException re) {
			log.error("getting failed", re);
			throw re;
		}
	}


}
