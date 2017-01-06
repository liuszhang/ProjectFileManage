/**
 * 
 */
package com.dr.service.impl;

import java.math.BigDecimal;

import com.dr.dao.impl.HousingReconstructionDAOImpl;
import com.dr.dao.impl.ReconstructionDAOImpl;
import com.dr.model.HousingReconstruction;

/**
 * @author 赵亚一
 * @E-mail:yayi_zhao@163.com
 * @classDescription:TODO
 * @version:
 * @date:2016-8-29 下午10:16:13
 */
public class PublicityServiceImpl {
	private HousingReconstructionDAOImpl housingReconstructionDAO;
	private ReconstructionDAOImpl reconstructionDAO;
	
	public String getFundingSum(String col, String instance, int flag) {
		//flag:1.民房重建，2.重建，//3.相加
		if(instance!=null&&instance.trim().length()!=0){
			String str=" WHERE cm LIKE '%"+instance+"%'";
			//System.out.println(instance+housingReconstructionDAO.sumFunding(str));
			//String a=housingReconstructionDAO.sumFunding(col,str);
			if(flag==1){
				return housingReconstructionDAO.sumFunding(col,str);
			}
			//String b=reconstructionDAO.sumFunding(col,str);
			if(flag==2){
				return reconstructionDAO.sumFunding(col,str);
			}
			/*System.out.println("aabb a::"+a+"bbaa b::"+b);
			BigDecimal aa = null;  
			BigDecimal bb = null;  
			BigDecimal cc = null;
			if(a!=null&&!a.equals("")){
				aa =new BigDecimal(a);
				cc=aa;
			}
			if(b!=null&&!b.equals("")){
				bb =new BigDecimal(b);
				cc=cc.add(bb);
			}
			if(cc==null){
				return "";
			}
			System.out.println("aabb cc::"+cc.toString());
			return cc.toString();*/
			return "";
		}
		return "";
	}
	
	public String getOtherFundingSum(String instance, int flag) {
		//flag:1.民房重建，2.重建
		if(instance!=null&&instance.trim().length()!=0){
			String str=" WHERE cm LIKE '%"+instance+"%'";
			//System.out.println(instance+housingReconstructionDAO.sumFunding(str));
			if(flag==1){
				return housingReconstructionDAO.sumOtherFunding(str);
			}
			if(flag==2){
				return reconstructionDAO.sumOtherFunding(str);
			}
			return "";
		}
		return "";
	}

	public HousingReconstructionDAOImpl getHousingReconstructionDAO() {
		return housingReconstructionDAO;
	}

	public void setHousingReconstructionDAO(HousingReconstructionDAOImpl housingReconstructionDAO) {
		this.housingReconstructionDAO = housingReconstructionDAO;
	}

	public ReconstructionDAOImpl getReconstructionDAO() {
		return reconstructionDAO;
	}

	public void setReconstructionDAO(ReconstructionDAOImpl reconstructionDAO) {
		this.reconstructionDAO = reconstructionDAO;
	}

}
