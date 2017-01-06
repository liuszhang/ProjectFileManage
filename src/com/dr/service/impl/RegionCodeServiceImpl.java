/**
 * 
 */
package com.dr.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.dr.action.LoginAction;
import com.dr.dao.impl.RegionCodeDAOImpl;
import com.dr.model.RegionCode;
import com.dr.model.TreeNode;
import com.dr.model.User;
import com.dr.util.GenerationUtils;
import com.dr.util.GlobleVs;
import com.opensymphony.xwork2.ActionContext;

/**
 * @author 赵亚一
 * @E-mail:yayi_zhao@163.com
 * @classDescription:TODO
 * @version:
 * @date:2016-9-2 下午6:29:44
 */
public class RegionCodeServiceImpl {

	private RegionCodeDAOImpl regionCodeDAO;
	private static Logger logger=Logger.getLogger(RegionCodeServiceImpl.class);

	public List getAllRegionCodes() {
		// TODO Auto-generated method stub
		return regionCodeDAO.findAll();
	}
	public List findRegionCode(String str) {
		// TODO Auto-generated method stub
		return regionCodeDAO.findRegionCode(str);
	}
	
	public RegionCodeDAOImpl getRegionCodeDAO() {
		return regionCodeDAO;
	}

	public void setRegionCodeDAO(RegionCodeDAOImpl regionCodeDAO) {
		this.regionCodeDAO = regionCodeDAO;
	}
	/**
	 * @Title: getTreeList
	 * @Description: TODO获取动态树
	 * @param: @param node
	 * @param: @return   
	 * @return: List   
	 * @throws
	 */
	public List getTreeList(String node) {
		ActionContext ctx=ActionContext.getContext();
		User loginUser=(User)ctx.getSession().get("user");
		List<TreeNode> treeList=new ArrayList<TreeNode>();
		String leafIco="images/main/drico.png";
		if("root".equals(node)){
			treeList.add(new TreeNode("mfcj","合格供应商管理", leafIco,false));
			treeList.add(new TreeNode("wxjg","客户资源管理（CRM）", leafIco,false));
			treeList.add(new TreeNode("cjxm","项目管理", leafIco,false));
			treeList.add(new TreeNode("xmgsd","项目档案管理", leafIco,true));
			treeList.add(new TreeNode("xmgsbb","项目公示单报表", leafIco,true));
			treeList.add(new TreeNode("ssjhd","进展情况汇总表", leafIco,true));
			if(loginUser.getUserrole().equals("管理员")){
				treeList.add(new TreeNode("yhgl","用户管理", leafIco,true));
			}
		}else{
			treeList=getRegionTreeList(node);
		}
		return treeList;
	}
	
	public List<TreeNode> getRegionTreeList(String node) {
		logger.info("node:"+node);
		List<TreeNode> treeList=new ArrayList<TreeNode>();
		String leafIco="images/main/drico.png";
		if(node.equals("cjxm")){
			treeList.add(new TreeNode("cjxm001","整村推进基础设施", leafIco,true));
			treeList.add(new TreeNode("cjxm002","特色小城镇基础设施", leafIco,true));
			treeList.add(new TreeNode("cjxm003","非住宅用房", leafIco,true));
			treeList.add(new TreeNode("cjxm004","水利系统", leafIco,true));
			treeList.add(new TreeNode("cjxm005","教育系统", leafIco,true));
			treeList.add(new TreeNode("cjxm006","农牧系统", leafIco,true));
			treeList.add(new TreeNode("cjxm007","文化系统", leafIco,true));
			treeList.add(new TreeNode("cjxm008","卫生系统", leafIco,true));
			treeList.add(new TreeNode("cjxm009","特色产业", leafIco,true));
			treeList.add(new TreeNode("cjxm010","林业系统", leafIco,true));
			treeList.add(new TreeNode("cjxm011","民宗或文物保护", leafIco,true));
			treeList.add(new TreeNode("cjxm012","其他", leafIco,true));
			
		}else{
			if(node.length()==4){
				String id="1";
				String newNodeId=node+get3Str(id);
				RegionCode regionCode=(RegionCode)regionCodeDAO.findRegionCode("from RegionCode WHERE id="+id).get(0);
				logger.info("findRegionCode :"+"from RegionCode WHERE id="+id);
				treeList.add(new TreeNode(newNodeId,regionCode.getC1(), leafIco,false));
			}else if(node.length()==7){
				String id=get3Num(node);
				String c1=(String) regionCodeDAO.findRegionCode("select c1 from RegionCode WHERE id="+id).get(0);
				List<RegionCode> list=regionCodeDAO.findRegionCode("from RegionCode WHERE c1='"+c1+"' and c2!='' and c3=''");
				logger.info("findRegionCode:"+"select c1 from RegionCode WHERE id="+id);
				logger.info("findRegionCode:"+"from RegionCode WHERE c1='"+c1+"' and c2!='' and c3=''");
				String newNodeId;
				for(RegionCode regionCode:list){
					newNodeId=node+get3Str(Integer.toString(regionCode.getId()));
					treeList.add(new TreeNode(newNodeId,regionCode.getC2(), leafIco,false));
				}
			}else if(node.length()==10){
				String id=get3Num(node);
				String c2=(String) regionCodeDAO.findRegionCode("select c2 from RegionCode WHERE id="+id).get(0);
				List<RegionCode> list=regionCodeDAO.findRegionCode("from RegionCode WHERE c2='"+c2+"' and c3!=''");
				logger.info("findRegionCode:"+"select c2 from RegionCode WHERE id="+id);
				logger.info("findRegionCode:"+"from RegionCode WHERE c2='"+c2+"' and c3!=''");
				String newNodeId;
				for(RegionCode regionCode:list){
					newNodeId=node+get3Str(Integer.toString(regionCode.getId()));
					treeList.add(new TreeNode(newNodeId,regionCode.getC3(), leafIco,true));
				}
			}
		}
		
		return treeList;
	}
	
	public String get3Str(String str) {
		//logger.info("get3Str1:"+str);
		if(str.length()==1)str="00"+str;
		else if(str.length()==2)str="0"+str;
		else if(str.length()>3)str=str.substring(str.length()-3, str.length());
		//logger.info("get3Str2:"+str);
		return str;
	}
	public String get3Num(String str) {
		//logger.info("get3Num1:"+str);
		if(str.length()>4)str=str.substring(str.length()-3, str.length());
		str=Integer.toString(Integer.parseInt(str));
		//logger.info("get3Num2:"+str);
		return str;
	}
	/**
	 * @Title: getRegion获取行政区域
	 * @Description: TODO
	 * @param: @param regionPara
	 * @param: @return   行政区域列表
	 * @return: List   
	 * @throws
	 */
	public List getRegion(String regionPara) {
		// TODO Auto-generated method stub
		if(regionPara==null||regionPara.equals("root")){//返回乡镇
			return regionCodeDAO.findRegionCode("select new RegionCode(c2,c3) from RegionCode");
		}else{
			return regionCodeDAO.findRegionCode("select new RegionCode(c2,c3) from RegionCode WHERE c2='"+regionPara+"'");
		}
	}
	
	public String getRegionCode(String c2,String c3) {
		String queryStr="select code from RegionCode WHERE c2='"+c2+"' and c3='"+c3+"'";
		logger.info("getRegionCode queryStr:"+queryStr);
		String regionCode=(String)(regionCodeDAO.findRegionCode(queryStr).size()>0?regionCodeDAO.findRegionCode(queryStr).get(0):"error");
		logger.info("getRegionCode return:"+regionCode);
		return regionCode;
	}

}
