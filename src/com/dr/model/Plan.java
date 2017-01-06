/**
 * 
 */
package com.dr.model;

/**
 * @author 赵亚一
 * @E-mail:yayi_zhao@163.com
 * @classDescription:TODO
 * @version:
 * @date:2016-8-27 上午1:34:34
 */
public class Plan {
	private String xh;
	private String xmmc;
	private String xmnr;
	private String tzje;
	private String kgss;
	private String jhsgsj;
	private String bz;
	/**
	 * @Title: Plan
	 * @Description: TODO
	 * @param: 
	 * @throws
	 */
	public Plan() {
		super();
	}
	/**
	 * @Title: Plan
	 * @Description: TODO
	 * @param: @param xh
	 * @param: @param xmmc
	 * @param: @param xmnr
	 * @param: @param tzje
	 * @param: @param kgss
	 * @param: @param jhsgsj
	 * @param: @param bz
	 * @throws
	 */
	public Plan(String xh, String xmmc, String xmnr, String tzje, String kgss,
			String jhsgsj, String bz) {
		super();
		this.xh = xh;
		this.xmmc = xmmc;
		this.xmnr = xmnr;
		this.tzje = tzje;
		this.kgss = kgss;
		this.jhsgsj = jhsgsj;
		this.bz = bz;
	}
	public String getXh() {
		return xh;
	}
	public void setXh(String xh) {
		this.xh = xh;
	}
	public String getXmmc() {
		return xmmc;
	}
	public void setXmmc(String xmmc) {
		this.xmmc = xmmc;
	}
	public String getXmnr() {
		return xmnr;
	}
	public void setXmnr(String xmnr) {
		this.xmnr = xmnr;
	}
	public String getTzje() {
		return tzje;
	}
	public void setTzje(String tzje) {
		this.tzje = tzje;
	}
	public String getKgss() {
		return kgss;
	}
	public void setKgss(String kgss) {
		this.kgss = kgss;
	}
	public String getJhsgsj() {
		return jhsgsj;
	}
	public void setJhsgsj(String jhsgsj) {
		this.jhsgsj = jhsgsj;
	}
	public String getBz() {
		return bz;
	}
	public void setBz(String bz) {
		this.bz = bz;
	}


}
