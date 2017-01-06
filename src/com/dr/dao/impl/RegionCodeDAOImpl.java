/**
 * 
 */
package com.dr.dao.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.dr.model.RegionCode;

/**
 * @author:赵亚一
 * @E-mail:yayi_zhao@163.com
 * @comment:
 * @classDescription:
 * @version:
 * @date:2016-9-2 下午6:30:02
 */
public class RegionCodeDAOImpl extends HibernateDaoSupport{
	private static final Logger log = LoggerFactory.getLogger(RegionCodeDAOImpl.class);
	private static final String TAG = "RegionCodeDAOImpl";
	
	public List<RegionCode> findAll() {
		log.debug("finding all RegionCode instances");
		try {
			String queryString = "from RegionCode";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
	public List findRegionCode(String str) {
		log.debug("getting RegionCode instance with RegionCodeId");
		try {
			String queryString = str;
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("getting failed", re);
			throw re;
		}
	}

}
