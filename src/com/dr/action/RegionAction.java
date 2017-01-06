/**
 * 
 */
package com.dr.action;

import java.util.ArrayList;
import java.util.List;

import com.dr.model.PageJson;
import com.dr.service.impl.RegionCodeServiceImpl;
import com.opensymphony.xwork2.ActionSupport;

/**
 * @author 赵亚一
 * @E-mail:yayi_zhao@163.com
 * @classDescription:TODO
 * @version:
 * @date:2016-9-21 下午5:18:17
 */
public class RegionAction extends ActionSupport{
	private RegionCodeServiceImpl regionCodeService;
	private PageJson pageJson;
	private String regionPara;//获取乡镇、乡村的参数
	
	public String getRegionStore(){
		pageJson=new PageJson();
		pageJson.setRoot(regionCodeService.getRegion(regionPara));
		return SUCCESS;
	}

	public RegionCodeServiceImpl getRegionCodeService() {
		return regionCodeService;
	}

	public void setRegionCodeService(RegionCodeServiceImpl regionCodeService) {
		this.regionCodeService = regionCodeService;
	}

	public PageJson getPageJson() {
		return pageJson;
	}

	public void setPageJson(PageJson pageJson) {
		this.pageJson = pageJson;
	}

	public String getRegionPara() {
		return regionPara;
	}

	public void setRegionPara(String regionPara) {
		this.regionPara = regionPara;
	}

}
