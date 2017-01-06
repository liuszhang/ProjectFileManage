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

import com.dr.model.Reconstruction;

/**
 * @author:赵亚一
 * @E-mail:yayi_zhao@163.com
 * @comment:
 * @classDescription:
 * @version:
 * @date:2016-8-20下午10:15:21
 */
public class ReconstructionDAOImpl extends HibernateDaoSupport {
	private static final Logger log = LoggerFactory.getLogger(ReconstructionDAOImpl.class);
	private static final String TAG = "ReconstructionDAOImpl";
	
	public boolean saveReconstruction(Reconstruction instance) {
		log.debug("saving Reconstruction instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("save successful");
			return true;
		} catch (RuntimeException re) {
			log.error("save failed", re);
			return false;
		}
	}

	
	public List findReconstruction(Reconstruction instance) {
		log.debug("getting Reconstruction instance with ReconstructionId");
		try {
			String queryString = "from Reconstruction where xmmc =";
			queryString=queryString+instance.getXmmc();
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("getting failed", re);
			throw re;
		}
	}
	
	public List findReconstructionByXmmc(String xmmc) throws Exception {
		log.debug("getting Reconstruction instance with Reconstruction xmmc");
		String queryString = "from Reconstruction where xmmc ='"+xmmc+"'";
		return getHibernateTemplate().find(queryString);
	}
	
	/**
	 * @param index
	 * @param pageSize
	 * @return
	 */
	public List findReconstructionByPage(final int index, final int pageSize) {
		log.debug("finding Reconstruction instances");
		final String queryString = "from Reconstruction";
		List list=getHibernateTemplate().executeFind(new HibernateCallback(){
			@Override
			public Object doInHibernate(org.hibernate.Session session)throws HibernateException, SQLException{
				List result=session.createQuery(queryString).setFirstResult(index).setMaxResults(pageSize).list();
				return result;
			}

		
		});
		return list;
	}
	
	public List findReconstructionByPage(final int index, final int pageSize,String str) {
		log.debug("finding Reconstruction instances");
		final String queryString = "from Reconstruction"+str;
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
		log.debug("counting Reconstruction instances with queryString");
		try {
			String queryString = "select count(*) from Reconstruction"+str;
			log.debug("queryString："+queryString);
			Long test= (Long)getHibernateTemplate().find(queryString).get(0);
			return test.intValue();
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
	public String sumFunding(String col, String str) {//2.9+
		log.debug("counting Reconstruction Funding instances with queryString");
		try {
			String queryString="select sum("+col+") from Reconstruction"+str;
			log.debug("queryString："+queryString);
			String test= (String) getHibernateTemplate().find(queryString).get(0);
			return test;
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
	public String sumOtherFunding(String str) {
		// TODO Auto-generated method stub
		log.debug("counting Reconstruction Other Funding instances with queryString");
		try {
			String queryString="select sum(qtzj1)+sum(qtzj2)+sum(qtzj3)+sum(qtzj4) from Reconstruction"+str;
			log.info("queryString："+queryString);
			String test= (String) getHibernateTemplate().find(queryString).get(0);
			return test;
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
	public List getAllReconstruction() {
		log.debug("getting All Reconstruction instance");
		try {
			String queryString = "from Reconstruction";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("getting failed", re);
			throw re;
		}
	}
	
	public int deleteById(Reconstruction instance) {
		log.debug("deleteById Reconstruction");
		try {
			getHibernateTemplate().delete(instance);
			return 1;
		} catch (RuntimeException re) {
			log.error("getting failed", re);
			throw re;
		}
	}


	public Reconstruction sumReconstruction(String str) {
		log.debug("sum Reconstruction instances with queryString");
		try {
			Reconstruction reconstruction=new Reconstruction();
			reconstruction.setZtz(sumField("ztz",str));
			reconstruction.setGjbz(sumField("gjbz",str));
			reconstruction.setQzzc(sumField("qzzc",str));
			reconstruction.setQzcjdk(sumField("qzcjdk",str));
			reconstruction.setQtzj1(sumField("qtzj1",str));
			reconstruction.setQtzj2(sumField("qtzj2",str));
			
			return reconstruction;
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
	public String sumField(String field, String str) {
		log.debug("sumField Reconstruction instances with queryString");
		try {
			String queryString = "select sum("+field+") from Reconstruction"+str;
			log.debug("queryString："+queryString);
			String test= (String) getHibernateTemplate().find(queryString).get(0);
			return test;
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

}
