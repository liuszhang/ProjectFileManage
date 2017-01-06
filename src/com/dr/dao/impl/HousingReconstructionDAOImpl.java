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

import com.dr.model.HousingReconstruction;
import com.dr.model.Funding;

/**
 * @author:赵亚一
 * @E-mail:yayi_zhao@163.com
 * @comment:
 * @classDescription:
 * @version:
 * @date:2016-8-20下午10:15:21
 */
public class HousingReconstructionDAOImpl extends HibernateDaoSupport {
	private static final Logger log = LoggerFactory.getLogger(HousingReconstructionDAOImpl.class);
	private static final String TAG = "HousingReconstructionDAOImpl";
	
	public boolean addHousingReconstruction(HousingReconstruction instance) {
		log.debug("saving HousingReconstruction instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("save successful");
			return true;
		} catch (RuntimeException re) {
			log.error("save failed", re);
			return false;
		}
	}

	
	public List findHousingReconstruction(HousingReconstruction instance) {
		log.debug("getting HousingReconstruction instance with HousingReconstructionId");
		try {
			String queryString = "from HousingReconstruction where hbh =";
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
	public List findHousingReconstructionByPage(final int index, final int pageSize) {
		log.debug("finding HousingReconstruction instances");
		final String queryString = "from HousingReconstruction";
		List list=getHibernateTemplate().executeFind(new HibernateCallback(){
			@Override
			public Object doInHibernate(org.hibernate.Session session)throws HibernateException, SQLException{
				List result=session.createQuery(queryString).setFirstResult(index).setMaxResults(pageSize).list();
				return result;
			}

		
		});
		return list;
	}
	
	//改左外连接
	public List findHousingReconstructionByPage(final int index, final int pageSize,String str) {
		log.debug("finding HousingReconstruction instances");
		final String queryString = "from HousingReconstruction"+str;
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
		log.debug("counting HousingReconstruction instances with queryString");
		try {
			String queryString = "select count(*) from HousingReconstruction"+str;
			log.debug("queryString："+queryString);
			Long test= (Long)getHibernateTemplate().find(queryString).get(0);
			return test.intValue();
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
	public String sumFunding(String col, String str) {//2.9+
		log.debug("counting HousingReconstruction Funding instances with queryString");
		try {
			
			/*String queryString ="select sum(a) from (";
			queryString= queryString+"select sum(ztz) a from HousingReconstruction"+str;
			queryString= queryString+" union all ";
			queryString= queryString+"select sum(ztz) a from HousingReconstruction"+str;
			queryString= queryString+")";*/
			/*String queryString ="select ";
			queryString= queryString+"(select sum(ztz) from HousingReconstruction"+str+")";
			queryString= queryString+" + ";
			queryString= queryString+"(select sum(ztz) from HousingReconstruction"+str+")";*/
			String queryString="select sum("+col+") from HousingReconstruction"+str;
			log.debug("queryString："+queryString);
			String test= (String) getHibernateTemplate().find(queryString).get(0);
			return test;
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
	public String sumOtherFunding(String str) {//2.9+
		log.debug("counting HousingReconstruction Other Funding instances with queryString");
		try {
			String queryString="select sum(qtzj1)+sum(qtzj2)+sum(qtzj3)+sum(qtzj4) from HousingReconstruction"+str;
			log.info("queryString："+queryString);
			String test= (String) getHibernateTemplate().find(queryString).get(0);
			return test;
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
	public List getAllHousingReconstruction() {
		log.debug("getting All HousingReconstruction instance");
		try {
			String queryString = "from HousingReconstruction";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("getting failed", re);
			throw re;
		}
	}
	
/*	public int deleteById(String id) {
		log.debug("deleteById HousingReconstruction");
		try {
			Session session=HibernateSessionFactory.getSession();
			Transaction tx=session.beginTransaction();
			String hql="delete from HousingReconstruction where hbh="+id;
			Query query=session.createQuery(hql);
			int count=query.executeUpdate();
			tx.commit();
			session.close();
			return count;

		} catch (RuntimeException re) {
			log.error("getting failed", re);
			throw re;
		}
	}*/
	
	public int deleteById(HousingReconstruction instance) {
		log.debug("deleteById HousingReconstruction");
		try {
			getHibernateTemplate().delete(instance);
			return 1;
		} catch (RuntimeException re) {
			log.error("getting failed", re);
			throw re;
		}
	}


	public HousingReconstruction sumHousingReconstruction(String str) {
		log.debug("sum HousingReconstruction instances with queryString");
		try {
			HousingReconstruction housingReconstruction=new HousingReconstruction();
			//housingReconstruction.setHbh("总计：");
			housingReconstruction.setJtrs(sumField("jtrs",str));
			housingReconstruction.setJtll(sumField("jtll",str));
			housingReconstruction.setDys(sumField("dys",str));
			housingReconstruction.setSc(sumField("sc",str));
			housingReconstruction.setGdmj(sumField("gdmj",str));
			housingReconstruction.setZtz(sumField("ztz",str));
			housingReconstruction.setGjbz(sumField("gjbz",str));
			housingReconstruction.setQzzc(sumField("qzzc",str));
			housingReconstruction.setQzcjdk(sumField("qzcjdk",str));
			housingReconstruction.setQtzj1(sumField("qtzj1",str));
			housingReconstruction.setQtzj2(sumField("qtzj2",str));
			housingReconstruction.setQtzj3(sumField("qtzj3",str));
			housingReconstruction.setQtzj4(sumField("qtzj4",str));
			//String queryString = "select sum(hbh) as hbh, sum(xmmc) as xmmc, sum(dz) as dz, sum(xzmc) as xzmc, sum(cm) as cm, sum(zrcm) as zrcm, sum(hzxm) as hzxm, sum(sfzh) as sfzh, sum(jtrs) as jtrs, sum(jtll) as jtll, sum(dys) as dys, sum(sc) as sc, sum(gdmj) as gdmj, sum(jtlx) as jtlx, sum(lxhm) as lxhm, sum(sscd) as sscd, sum(cjlx) as cjlx, sum(cjhx) as cjhx, sum(cjdd) as cjdd, sum(cjfwjg) as cjfwjg, sum(sgdwmc) as sgdwmc, sum(sgfzr) as sgfzr, sum(sglxhm) as sglxhm, sum(jldwmc) as jldwmc, sum(jlfzr) as jlfzr, sum(jllxhm) as jllxhm, sum(gcjd) as gcjd, sum(yys) as yys, sum(yjg) as yjg, sum(lrndjh) as lrndjh, sum(kgsj) as kgsj, sum(sgsj) as sgsj, sum(ztz) as ztz, sum(gjbz) as gjbz, sum(qzzc) as qzzc, sum(qzcjdk) as qzcjdk, sum(qtzj1) as qtzj1, sum(qtzj2) as qtzj2, sum(qtzj3) as qtzj3, sum(qtzj4) as qtzj4 from HousingReconstruction"+str;
			return housingReconstruction;
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
	public String sumField(String field, String str) {
		log.debug("sumField HousingReconstruction instances with queryString");
		try {
			String queryString = "select sum("+field+") from HousingReconstruction"+str;
			log.debug("queryString："+queryString);
			String test= (String) getHibernateTemplate().find(queryString).get(0);
			return test;
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

}
