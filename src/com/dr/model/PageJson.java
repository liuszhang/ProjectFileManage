/**
 * 
 */
package com.dr.model;

import java.util.List;

/**
 * @author:赵亚一
 * @E-mail:yayi_zhao@163.com
 * @comment:
 * @classDescription:
 * @version:
 * @date:2012-6-29下午02:49:45
 */
public class PageJson {
	private int totalProperty;
	private List root;
	private int start;
	private int limit;
	
	
	/**
	 * @Title: PageJson
	 * @Description: TODO
	 * @param: 
	 * @throws
	 */
	public PageJson() {
		super();
	}
	
	/**
	 * @Title: PageJson
	 * @Description: TODO
	 * @param: @param totalProperty
	 * @param: @param root
	 * @param: @param start
	 * @param: @param limit
	 * @throws
	 */
	public PageJson(int totalProperty, List root, int start, int limit) {
		super();
		this.totalProperty = totalProperty;
		this.root = root;
		this.start = start;
		this.limit = limit;
	}

	public int getTotalProperty() {
		return totalProperty;
	}
	public void setTotalProperty(int totalProperty) {
		this.totalProperty = totalProperty;
	}
	public List getRoot() {
		return root;
	}
	public void setRoot(List root) {
		this.root = root;
	}
	public int getStart() {
		return start;
	}
	public void setStart(int start) {
		this.start = start;
	}
	public int getLimit() {
		return limit;
	}
	public void setLimit(int limit) {
		this.limit = limit;
	}

	
	

}
