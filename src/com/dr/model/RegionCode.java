/**
 * 
 */
package com.dr.model;

/**
 * @author 赵亚一
 * @E-mail:yayi_zhao@163.com
 * @classDescription:TODO
 * @version:
 * @date:2016-8-25 下午7:37:55
 */
public class RegionCode {
	private int id;
	private String c1;
	private String c2;
	private String c3;
	private String code;
	
	/**
	 * @Title: RegionCode
	 * @Description: TODO
	 * @param: 
	 * @throws
	 */
	public RegionCode() {
		super();
	}
	/**
	 * @Title: RegionCode
	 * @Description: TODO
	 * @param: @param c2
	 * @param: @param c3
	 * @throws
	 */
	public RegionCode(String c2, String c3) {
		this.c2 = c2;
		this.c3 = c3;
	}
	/**
	 * @Title: RegionCode
	 * @Description: TODO
	 * @param: @param id
	 * @param: @param c1
	 * @param: @param c2
	 * @param: @param c3
	 * @param: @param code
	 * @throws
	 */
	public RegionCode(int id, String c1, String c2, String c3, String code) {
		super();
		this.id = id;
		this.c1 = c1;
		this.c2 = c2;
		this.c3 = c3;
		this.code = code;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getC1() {
		return c1;
	}
	public void setC1(String c1) {
		this.c1 = c1;
	}
	public String getC2() {
		return c2;
	}
	public void setC2(String c2) {
		this.c2 = c2;
	}
	public String getC3() {
		return c3;
	}
	public void setC3(String c3) {
		this.c3 = c3;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	

}
