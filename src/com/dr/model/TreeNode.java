package com.dr.model;

/**
 * @author 赵亚一
 * @E-mail:yayi_zhao@163.com
 * @classDescription:TODO
 * @version:
 * @date:2016-9-17 下午5:47:51
 */
public class TreeNode {
	private String id;
	private String text;
	private String icon;
	private boolean leaf;
	
	public TreeNode(){
		
	}

	public TreeNode(String id, String text, String icon, boolean leaf) {
		super();
		this.text = text;
		this.id = id;
		this.leaf = leaf;
		this.icon = icon;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public boolean isLeaf() {
		return leaf;
	}

	public void setLeaf(boolean leaf) {
		this.leaf = leaf;
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}

	
}
