/**
 * 
 */
package com.dr.service.impl;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.lang.reflect.Field;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.Region;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.struts2.ServletActionContext;

import com.dr.action.HousingReconstructionAction;
import com.dr.dao.impl.FundingDAOImpl;
import com.dr.dao.impl.HousingReconstructionDAOImpl;
import com.dr.model.Funding;
import com.dr.model.HousingReconstruction;
import com.dr.model.PageJson;
import com.dr.util.GenerationUtils;
import com.dr.util.UploadUtil;

/**
 * @author:赵亚一
 * @E-mail:yayi_zhao@163.com
 * @comment:
 * @classDescription:
 * @version:
 * @date:2016-8-20下午10:20:59
 */
public class FundingServiceImpl {
	private FundingDAOImpl fundingDAO;
	private HousingReconstructionDAOImpl housingReconstructionDAO;
	private static Logger logger=Logger.getLogger(FundingServiceImpl.class);
	
	public boolean saveFunding(Funding instance) {
		return fundingDAO.saveFunding(instance);
	}
	
	public List getAllFunding() {
		//System.out.println("List size:"+fundingDAO.getAllFunding().size());
		return fundingDAO.getAllFunding();
	}
	
	public PageJson findFundingByPage(int index, int pageSize, String dateStr) {
		//System.out.println("List size:"+fundingDAO.getAllFunding().size());
		PageJson pageJson=new PageJson();
		if(dateStr.trim().length()!=0){
			dateStr=" WHERE "+dateStr;
		}
		pageJson.setTotalProperty(fundingDAO.countNum(dateStr));
		pageJson.setRoot(fundingDAO.findFundingByPage(index,pageSize,dateStr));
		return pageJson;
	}
	
	/**
	 * @throws Exception 
	 * @Title: findFundingByPage
	 * @Description: TODO
	 * @param: @param index
	 * @param: @param pageSize
	 * @param: @param whereStr
	 * @param: @param funding
	 * @param: @return   
	 * @return: PageJson   
	 * @throws
	 */
	public PageJson findFundingByPage(int index, int pageSize, String whereStr,
			Funding funding) throws Exception {
		Class cls = funding.getClass();
		Field[] fields = cls.getDeclaredFields();
		int i=0;
		if(whereStr.trim().length()!=0){
			i++;
		}
		//String whereStr="";
		for(Field f : fields){
			f.setAccessible(true); 
			if(f.get(funding)!=null&&!f.get(funding).toString().trim().equals("")){
				if(i<1){
					whereStr=whereStr+f.getName()+" LIKE '%"+f.get(funding)+"%'";
				}else{
					whereStr=whereStr+" AND "+f.getName()+" LIKE '%"+f.get(funding)+"%'";
				}
				i++;
			}
		}
		if(i>0&&whereStr.trim().length()!=0){
			whereStr=" WHERE "+whereStr;
		}
		System.out.println(whereStr);  
		PageJson pageJson=new PageJson();
		pageJson.setTotalProperty(fundingDAO.countNum(whereStr));
		pageJson.setRoot(fundingDAO.findFundingByPage(index,pageSize,whereStr));
		return pageJson;
	}
	
	public List findFundingById(Funding instance) {
		return fundingDAO.findFundingById(instance);
	}
	
	public int deleteFundingById(String instance) {
		Funding hr=new Funding();
		hr.setXmmc(instance);
		return fundingDAO.deleteById(hr);
	}
	
	@SuppressWarnings("deprecation")
	public HSSFWorkbook fundingBatchExlDataExp(HSSFWorkbook wb) throws Exception {
		HSSFSheet sheet;
		HSSFRow row;
		HSSFCell cell;
		String message;
		String headStr="户编号|乡镇名称|村名|自然村名|户主姓名|身份证号码|金额|占总合同额百分比|国家补助|户主自筹|拨款时间|备注|金额|占总合同额百分比|国家补助|户主自筹|拨款时间|备注|金额|占总合同额百分比|国家补助|户主自筹|拨款时间|备注|金额|占总合同额百分比|国家补助|户主自筹|拨款时间|备注";
        String fieldStr="hbh|xzmc|cm|zrcm|hzxm|sfzh|je1|zgck1|gjbz1|hzzc1|bksj1|bz1|je2|zgck2|gjbz2|hzzc2|bksj2|bz2|je3|zgck3|gjbz3|hzzc3|bksj3|bz3|je4|zgck4|gjbz4|hzzc4|bksj4|bz4";
        
		if(wb==null){
			String templateXls=UploadUtil.getfTemplateRealpath()+"民房重建一户一档资金划拨记录输入模板.xls";
			InputStream iss = new FileInputStream(templateXls);
			POIFSFileSystem fs=new POIFSFileSystem(iss);
			wb=new HSSFWorkbook(fs);
			sheet=wb.getSheetAt(0);
		}else{
			sheet = wb.createSheet("资金划拨导出数据");  
	        sheet.addMergedRegion(new Region(0, (short)6,0,(short)11)); 
	        row = sheet.createRow((int) 0); 
	        cell = row.createCell((short) 6);  
	        cell.setCellValue("第一次拨款"); 
	        sheet.addMergedRegion(new Region(0, (short)12,0,(short)17)); 
	        cell = row.createCell((short) 12);  
	        cell.setCellValue("第二次拨款"); 
	        sheet.addMergedRegion(new Region(0, (short)18,0,(short)23)); 
	        cell = row.createCell((short) 18);  
	        cell.setCellValue("第三次拨款"); 
	        sheet.addMergedRegion(new Region(0, (short)24,0,(short)29)); 
	        cell = row.createCell((short) 24);  
	        cell.setCellValue("第四次拨款"); 

	        row = sheet.createRow((int) 1); 
	        String[] headStrArray = headStr.split("\\|"); 
	        for (int i = 0 ; i <headStrArray.length ; i++) {
	          //System.out.println("--"+headStrArray[i]);
	          cell = row.createCell((short) i);  
	          cell.setCellValue(headStrArray[i]);  
	          //cell.setCellStyle(style); 
	        }
	        
		}
		int startRow=2;
		List list = housingReconstructionDAO.getAllHousingReconstruction();
		for (int i = 0; i < list.size(); i++){
            row = sheet.createRow((int) i + startRow);  
            HousingReconstruction instance = (HousingReconstruction)list.get(i);  
            Class cls = instance.getClass();
            logger.info("CLS::"+cls.getName());
            
            Funding fundingTemp=new Funding();
            fundingTemp.setXmmc(instance.getXmmc()+instance.getHbh());
            List<Funding> fundingList=fundingDAO.findFundingById(fundingTemp);
    		
            String[] fieldStrArray = fieldStr.split("\\|"); 
            for (int i1 = 0 ; i1 <6; i1++) {
            	Field fld = cls.getDeclaredField(fieldStrArray[i1]); 
                fld.setAccessible(true);
                //System.out.println(fieldStrArray[i1]+":field:" + fld.get(instance)); 
                if(fld.get(instance) instanceof Date){
                	SimpleDateFormat sdf=new SimpleDateFormat("yyyy/MM/dd");  
                	String str=sdf.format(fld.get(instance));  
                    row.createCell((short) i1).setCellValue(str);
                }else{
                	row.createCell((short) i1).setCellValue((String) fld.get(instance));
                }
            } 
            
            if(fundingList==null||fundingList.size()<1){
    			logger.info("fundingList:size:<1");
    		}else{
    			Funding fundingExp=(Funding)fundingList.get(0);
    			Class clsFunding = fundingExp.getClass();
    			for (int i1 = 6 ; i1 <fieldStrArray.length ; i1++) {
                	Field fld = clsFunding.getDeclaredField(fieldStrArray[i1]); 
                    fld.setAccessible(true);
                    //System.out.println(fieldStrArray[i1]+":field:" + fld.get(instance)); 
                    if(fld.get(fundingExp) instanceof Date){
                    	SimpleDateFormat sdf=new SimpleDateFormat("yyyy/MM/dd");  
                    	String str=sdf.format(fld.get(fundingExp));  
                        row.createCell((short) i1).setCellValue(str);
                    }else{
                    	row.createCell((short) i1).setCellValue((String) fld.get(fundingExp));
                    }
                } 
    		}
            
            
        }

		return wb;
	}
	
	public String fundingBatchExlDataImp(HSSFSheet st) throws ParseException {
		String message;
		String flag="民房重建一户一档资金划拨记录表";
		boolean templateFlag=false;
		int startRow=1;//Excel读取开始行数，开始行数-1
		int maxColNum=30;//数据中最大列数
		
		logger.info("st getSheetName::"+st.getSheetName());
		logger.info("st getLastRowNum::"+st.getLastRowNum());
		HSSFRow rowm=st.getRow(startRow);
		HSSFCell cell=rowm.getCell(0);
		String headStr="";
		for(int m=0;m<maxColNum;m++){
			cell=rowm.getCell(m);
			headStr=headStr+GenerationUtils.getStringCellValue(cell);
		}
		logger.info("st headStr::"+headStr);
		String head1="户编号乡镇名称村名自然村名户主姓名身份证号码金额占总合同额百分比国家补助户主自筹拨款时间备注金额占总合同额百分比国家补助户主自筹拨款时间备注金额占总合同额百分比国家补助户主自筹拨款时间备注金额占总合同额百分比国家补助户主自筹拨款时间备注";
		String head2="金额占总合同额百分比国家补助户主自筹拨款时间备注金额占总合同额百分比国家补助户主自筹拨款时间备注金额占总合同额百分比国家补助户主自筹拨款时间备注金额占总合同额百分比国家补助户主自筹拨款时间备注";
		
		if(!(headStr.equals(head1)||headStr.equals(head2))){templateFlag=true;}
		if(templateFlag){
			message=flag+"模版不是标准模版，或者进行了改动，请下载使用正确的模版";
			return message;
		}
		
		List<Funding> fundingList=new ArrayList<Funding>();
		startRow++;
		for(int i=startRow;i<st.getLastRowNum()+1;i++){
			logger.info("st rowm num::"+i);
			rowm=st.getRow(i);
			int j=6;
			cell=rowm.getCell(0);
			String hbh=GenerationUtils.getStringCellValue(cell);
			hbh=hbh.trim();
			if(hbh==null||hbh.trim().length()==0){
				logger.info("st rowm num::"+i+"是空项，跳过");
			}else{
				HousingReconstruction hr=new HousingReconstruction();
				hr.setHbh(hbh);
				List list = housingReconstructionDAO.findHousingReconstruction(hr);
				String xmmc;
				if(list==null||list.size()<1){
	    			message=flag+"在导入时系统查不到民房重建中的户编号："+hbh;
	    			return message;
	    		}else{
	    			HousingReconstruction hrFind=(HousingReconstruction)list.get(0);
	    			xmmc=hrFind.getXmmc()+hrFind.getHbh();
	    		}
				
				String je1=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String zgck1=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String gjbz1=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String hzzc1=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				Date bksj1=GenerationUtils.getDateCellValue(rowm.getCell(j++));
				String bz1=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String je2=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String zgck2=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String gjbz2=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String hzzc2=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				Date bksj2=GenerationUtils.getDateCellValue(rowm.getCell(j++));
				String bz2=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String je3=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String zgck3=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String gjbz3=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String hzzc3=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				Date bksj3=GenerationUtils.getDateCellValue(rowm.getCell(j++));
				String bz3=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String je4=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String zgck4=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String gjbz4=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				String hzzc4=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				Date bksj4=GenerationUtils.getDateCellValue(rowm.getCell(j++));
				String bz4=GenerationUtils.getStringCellValue(rowm.getCell(j++));
				
				
				fundingList.add(new Funding(xmmc,je1,zgck1,gjbz1,hzzc1,bksj1,bz1,je2,zgck2,gjbz2,hzzc2,bksj2,bz2,je3,zgck3,gjbz3,hzzc3,bksj3,bz3,je4,zgck4,gjbz4,hzzc4,bksj4,bz4));
			}
			
			//String id=st.getCell(j++, i).getContents();
			//headStr=headStr+GenerationUtils.getStringCellValue(cell);
		}
		logger.info("upload list size::"+fundingList.size());
		if(fundingList.size()<1){
			message=flag+"Excel中没有可识别的数据，未导入！";
			return message;
		}
		
		for(Funding instance:fundingList){
			logger.info("hrList save instance getXmmc::"+instance.getXmmc());
			if(!saveFunding(instance)){
				message=flag+"在执行保存过程中出现错误，错误条目为“"+instance.getXmmc()+"”，系统停止保存，请检查格式问题并重试";
				return message;
			};
		}
		
		logger.info("fundingBatchExlDataImp::数据输入成功");
		message="数据输入成功";
		return message;
	}
	
	public FundingDAOImpl getFundingDAO() {
		return fundingDAO;
	}

	public void setFundingDAO(FundingDAOImpl fundingDAO) {
		this.fundingDAO = fundingDAO;
	}

	public HousingReconstructionDAOImpl getHousingReconstructionDAO() {
		return housingReconstructionDAO;
	}

	public void setHousingReconstructionDAO(HousingReconstructionDAOImpl housingReconstructionDAO) {
		this.housingReconstructionDAO = housingReconstructionDAO;
	}

}
