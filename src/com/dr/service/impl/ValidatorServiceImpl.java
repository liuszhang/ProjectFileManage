/**
 * 
 */
package com.dr.service.impl;

import java.util.regex.Pattern;  

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dr.dao.impl.HousingReconstructionDAOImpl;
import com.dr.dao.impl.MaintenanceAndReinforcementDAOImpl;
import com.dr.dao.impl.ReconstructionDAOImpl;

/**
 * @author 赵亚一
 * @E-mail:yayi_zhao@163.com
 * @classDescription:TODO
 * @version:
 * @date:2016-9-15 下午6:48:01
 */
public class ValidatorServiceImpl {
	private static final Logger logger = LoggerFactory.getLogger(ValidatorServiceImpl.class);
	private HousingReconstructionDAOImpl housingReconstructionDAO;
	private MaintenanceAndReinforcementDAOImpl maintenanceAndReinforcementDAO;
	private ReconstructionDAOImpl reconstructionDAO;
	private String successStr="验证通过";
  
    /** 
     * 验证所有的身份证的合法性 
     *  
     * @param idcard 模块名
     * @param idcard 身份证号
     * @param hbh 
     * @return 
     */  
    public String validateIdcard(String model,String idcard, String hbh) {
        if (idcard.length() != 18) {
        	return "身份证号码不是18位";
        }
        if(!isIdcard(idcard)){
        	return "身份证号码没有通过验证";
        }
        String str=" WHERE sfzh = '"+idcard+"' and hbh!='"+hbh+"'";
        logger.info("查找身份证号："+model+"："+str);
        if(model.equals("HousingReconstruction")){
        	return housingReconstructionDAO.countNum(str)>0?"身份证号码系统中已经存在":successStr;
        }
        if(model.equals("MaintenanceAndReinforcement")){
        	return maintenanceAndReinforcementDAO.countNum(str)>0?"身份证号码系统中已经存在":successStr;
        }
        if(model.equals("Reconstruction")){
        	return reconstructionDAO.countNum(str)>0?"身份证号码系统中已经存在":successStr;
        }
        return "身份证号码验证没有通过";  
    }  
  
    /** 
     * 15位和18位身份证号码的基本数字和位数验校 
     *  
     * @param idcard 
     * @return 
     */  
    boolean isIdcard(String idcard) {  
        return idcard == null || "".equals(idcard) ? false : Pattern.matches(  
                "(^\\d{15}$)|(\\d{17}(?:\\d|x|X)$)", idcard);  
    }  
  
    /** 
     * 18位身份证号码的基本数字和位数验校 
     *  
     * @param idcard 
     * @return 
     */  
    boolean is18Idcard(String idcard) {  
        return Pattern  
                .matches(  
                        "^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}([\\d|x|X]{1})$",  
                        idcard);  
    }  

	public HousingReconstructionDAOImpl getHousingReconstructionDAO() {
		return housingReconstructionDAO;
	}

	public void setHousingReconstructionDAO(HousingReconstructionDAOImpl housingReconstructionDAO) {
		this.housingReconstructionDAO = housingReconstructionDAO;
	}

	public MaintenanceAndReinforcementDAOImpl getMaintenanceAndReinforcementDAO() {
		return maintenanceAndReinforcementDAO;
	}

	public void setMaintenanceAndReinforcementDAO(
			MaintenanceAndReinforcementDAOImpl maintenanceAndReinforcementDAO) {
		this.maintenanceAndReinforcementDAO = maintenanceAndReinforcementDAO;
	}

	public ReconstructionDAOImpl getReconstructionDAO() {
		return reconstructionDAO;
	}

	public void setReconstructionDAO(ReconstructionDAOImpl reconstructionDAO) {
		this.reconstructionDAO = reconstructionDAO;
	}

	public String getSuccessStr() {
		return successStr;
	}

	public void setSuccessStr(String successStr) {
		this.successStr = successStr;
	}
	

}
