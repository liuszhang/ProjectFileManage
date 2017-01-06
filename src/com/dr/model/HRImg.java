package com.dr.model;


/**
 * @author:赵亚一
 * @E-mail:yayi_zhao@163.com
 * @comment:
 * @classDescription:
 * @version:
 * @date:2016-8-24下午9:52:16
 */
public class HRImg implements java.io.Serializable{
	private String name;
	private String img;
	private String person;
	private String result;

	
	/**
	 * @Title: HousingReconstruction
	 * @Description: TODO
	 * @param: 
	 * @throws
	 */
	public HRImg() {
		super();
	}

	/**
	 * @Title: HRImg
	 * @Description: TODO
	 * @param: @param name
	 * @param: @param img
	 * @param: @param person
	 * @param: @param result
	 * @throws
	 */
	public HRImg(String name, String img, String person, String result) {
		super();
		this.name = name;
		this.img = img;
		this.person = person;
		this.result = result;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getImg() {
		return img;
	}


	public void setImg(String img) {
		this.img = img;
	}


	public String getPerson() {
		return person;
	}


	public void setPerson(String person) {
		this.person = person;
	}


	public String getResult() {
		return result;
	}


	public void setResult(String result) {
		this.result = result;
	}
	
	

	
}
