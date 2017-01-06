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

import com.dr.model.ReconstructionFunding;

/**
 * @author:赵亚一
 * @E-mail:yayi_zhao@163.com
 * @comment:
 * @classDescription:
 * @version:
 * @date:2016-9-26下午10:15:21
 */
public class ReconstructionFundingDAOImpl extends HibernateDaoSupport {
	private static final Logger log = LoggerFactory.getLogger(ReconstructionFundingDAOImpl.class);
	private static final String TAG = "ReconstructionFundingDAOImpl";
	
	public boolean saveRFunding(ReconstructionFunding instance) {
		log.debug("saving ReconstructionFunding instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("save successful");
			return true;
		} catch (RuntimeException re) {
			log.error("save failed", re);
			return false;
		}
	}

	
	public List findRFundingById(ReconstructionFunding instance) {
		log.debug("getting ReconstructionFunding instance with RFundingId");
		try {
			String queryString = "from ReconstructionFunding where xmmc = '"+instance.getXmmc()+"'";
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
	public List findRFundingByPage(final int index, final int pageSize) {
		log.debug("finding ReconstructionFunding instances");
		final String queryString = "from ReconstructionFunding";
		List list=getHibernateTemplate().executeFind(new HibernateCallback(){
			@Override
			public Object doInHibernate(org.hibernate.Session session)throws HibernateException, SQLException{
				List result=session.createQuery(queryString).setFirstResult(index).setMaxResults(pageSize).list();
				return result;
			}

		
		});
		return list;
	}
	
	public List findRFundingByPage(final int index, final int pageSize,String str) {
		log.debug("finding ReconstructionFunding instances");
		final String queryString = "from ReconstructionFunding"+str;
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
		log.debug("counting ReconstructionFunding instances with queryString");
		try {
			String queryString = "select count(*) from ReconstructionFunding"+str;
			log.debug("queryString："+queryString);
			Long test= (Long)getHibernateTemplate().find(queryString).get(0);
			return test.intValue();
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
	public List getAllRFunding() {
		log.debug("getting All ReconstructionFunding instance");
		try {
			String queryString = "from ReconstructionFunding";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("getting failed", re);
			throw re;
		}
	}
	
	
	public int deleteById(ReconstructionFunding instance) {
		log.debug("deleteById ReconstructionFunding");
		try {
			getHibernateTemplate().delete(instance);
			return 1;
		} catch (RuntimeException re) {
			log.error("getting failed", re);
			throw re;
		}
	}


}
