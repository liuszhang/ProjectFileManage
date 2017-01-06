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

import com.dr.model.MaintenanceAndReinforcement;

/**
 * @author:赵亚一
 * @E-mail:yayi_zhao@163.com
 * @comment:
 * @classDescription:
 * @version:
 * @date:2016-8-20下午10:15:21
 */
public class MaintenanceAndReinforcementDAOImpl extends HibernateDaoSupport {
	private static final Logger log = LoggerFactory.getLogger(MaintenanceAndReinforcementDAOImpl.class);
	private static final String TAG = "MaintenanceAndReinforcementDAOImpl";
	
	public boolean addMaintenanceAndReinforcement(MaintenanceAndReinforcement instance) {
		log.debug("saving MaintenanceAndReinforcement instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("save successful");
			return true;
		} catch (RuntimeException re) {
			log.error("save failed", re);
			return false;
		}
	}

	
	public List findMaintenanceAndReinforcement(MaintenanceAndReinforcement instance) {
		log.debug("getting MaintenanceAndReinforcement instance with MaintenanceAndReinforcementId");
		try {
			String queryString = "from MaintenanceAndReinforcement where hbh =";
			queryString=queryString+instance.getHbh();
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
	public List findMaintenanceAndReinforcementByPage(final int index, final int pageSize) {
		log.debug("finding MaintenanceAndReinforcement instances");
		final String queryString = "from MaintenanceAndReinforcement";
		List list=getHibernateTemplate().executeFind(new HibernateCallback(){
			@Override
			public Object doInHibernate(org.hibernate.Session session)throws HibernateException, SQLException{
				List result=session.createQuery(queryString).setFirstResult(index).setMaxResults(pageSize).list();
				return result;
			}

		
		});
		return list;
	}
	
	public List findMaintenanceAndReinforcementByPage(final int index, final int pageSize,String str) {
		log.debug("finding MaintenanceAndReinforcement instances");
		final String queryString = "from MaintenanceAndReinforcement"+str;
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
		log.debug("counting MaintenanceAndReinforcement instances with queryString");
		try {
			String queryString = "select count(*) from MaintenanceAndReinforcement"+str;
			log.debug("queryString："+queryString);
			Long test= (Long)getHibernateTemplate().find(queryString).get(0);
			return test.intValue();
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
	public List getAllMaintenanceAndReinforcement() {
		log.debug("getting All MaintenanceAndReinforcement instance");
		try {
			String queryString = "from MaintenanceAndReinforcement";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("getting failed", re);
			throw re;
		}
	}
	
	public int deleteById(MaintenanceAndReinforcement instance) {
		log.debug("deleteById MaintenanceAndReinforcement");
		try {
			getHibernateTemplate().delete(instance);
			return 1;
		} catch (RuntimeException re) {
			log.error("getting failed", re);
			throw re;
		}
	}


	public MaintenanceAndReinforcement sumMaintenanceAndReinforcement(String str) {
		log.debug("sum MaintenanceAndReinforcement instances with queryString");
		try {
			MaintenanceAndReinforcement maintenanceAndReinforcement=new MaintenanceAndReinforcement();
			maintenanceAndReinforcement.setJtrk(sumField("jtrk",str));
			maintenanceAndReinforcement.setLdl(sumField("ldl",str));
			maintenanceAndReinforcement.setCs(sumField("cs",str));
			maintenanceAndReinforcement.setYsjsje(sumField("ysjsje",str));
			maintenanceAndReinforcement.setJyzj(sumField("jyzj",str));
			maintenanceAndReinforcement.setYfkbfje(sumField("yfkbfje",str));
			
			return maintenanceAndReinforcement;
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
	public String sumField(String field, String str) {
		log.debug("sumField MaintenanceAndReinforcement instances with queryString");
		try {
			String queryString = "select sum("+field+") from MaintenanceAndReinforcement"+str;
			log.debug("queryString："+queryString);
			String test= (String) getHibernateTemplate().find(queryString).get(0);
			return test;
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}


}
