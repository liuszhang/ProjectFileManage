/**
 * 
 */
package com.dr.service.impl;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.lang.reflect.Field;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.poi.ss.usermodel.Font;
import org.apache.struts2.ServletActionContext;

import com.dr.action.HousingReconstructionAction;
import com.dr.dao.impl.HousingReconstructionDAOImpl;
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
public class HousingReconstructionServiceImpl {
	private RegionCodeServiceImpl regionCodeService;
	private ValidatorServiceImpl validatorService;
	private HousingReconstructionDAOImpl housingReconstructionDAO;
	
	private static Logger logger=Logger.getLogger(HousingReconstructionServiceImpl.class);
	
	String fileDir=UploadUtil.getHrFolderRealpath();
	String fileDirMtl=UploadUtil.getHrFolderMtl();
	String fileDirImg=UploadUtil.getHrFolderImg();
	String fileDirJs=UploadUtil.getJSPath(UploadUtil.getHrFolder());
	
	public boolean addHousingReconstruction(HousingReconstruction instance) {
		return housingReconstructionDAO.addHousingReconstruction(instance);
	}
	
	public List getAllHousingReconstruction() {
		//System.out.println("List size:"+housingReconstructionDAO.getAllHousingReconstruction().size());
		return housingReconstructionDAO.getAllHousingReconstruction();
	}
	
	public PageJson findHousingReconstructionByPage(int index, int pageSize, String dateStr) {
		//System.out.println("List size:"+housingReconstructionDAO.getAllHousingReconstruction().size());
		PageJson pageJson=new PageJson();
		if(dateStr.trim().length()!=0){
			dateStr=" WHERE "+dateStr;
		}
		pageJson.setTotalProperty(housingReconstructionDAO.countNum(dateStr));
		pageJson.setRoot(housingReconstructionDAO.findHousingReconstructionByPage(index,pageSize,dateStr));
		return pageJson;
	}

	//提供搜索服务
	public PageJson findHousingReconstructionByPage(int index, int pageSize, String whereStr,
			HousingReconstruction housingReconstruction) throws Exception {
		PageJson pageJson=new PageJson();
		if(housingReconstruction!=null){
			Class cls = housingReconstruction.getClass();
			Field[] fields = cls.getDeclaredFields();
			int i=0;
			if(whereStr.trim().length()!=0){
				i++;
			}
			//String whereStr="";
			for(Field f : fields){
				f.setAccessible(true); 
				if(f.get(housingReconstruction)!=null&&!f.get(housingReconstruction).toString().trim().equals("")){
					if(f.getName().equals("cjlx")&&f.get(housingReconstruction).equals("整村推进")){
						if(i<1){
							whereStr=whereStr+" (cjlx LIKE '%原址重建%' OR cjlx LIKE '%异地搬迁%')";
						}else{
							whereStr=whereStr+" AND (cjlx LIKE '%原址重建%' OR cjlx LIKE '%异地搬迁%')";
						}
					}else{
						if(i<1){
							whereStr=whereStr+f.getName()+" LIKE '%"+f.get(housingReconstruction)+"%'";
						}else{
							whereStr=whereStr+" AND "+f.getName()+" LIKE '%"+f.get(housingReconstruction)+"%'";
						}
					}
					
					i++;
				}
			}
			if(i>0&&whereStr.trim().length()!=0){
				whereStr=" WHERE "+whereStr;
			}
			System.out.println("whereStr:"+whereStr);  
		}else{
			if(whereStr.trim().length()!=0){
				whereStr=" WHERE "+whereStr;
			}
		}
		pageJson.setTotalProperty(housingReconstructionDAO.countNum(whereStr));
		List searchList=housingReconstructionDAO.findHousingReconstructionByPage(index,pageSize,whereStr);
		if(searchList.size()>0){
			searchList.add(housingReconstructionDAO.sumHousingReconstruction(whereStr));
		}
		pageJson.setRoot(searchList);
		return pageJson;
	}
	
	public List findHousingReconstruction(HousingReconstruction instance) {
		return housingReconstructionDAO.findHousingReconstruction(instance);
	}
	
	public int deleteHousingReconstructionById(String instance) {
		HousingReconstruction hr=new HousingReconstruction();
		hr.setHbh(instance);
		return housingReconstructionDAO.deleteById(hr);
	}
	
	public int countNum(String str) {
		return housingReconstructionDAO.countNum(str);
	}
	
	@SuppressWarnings("deprecation")
	public HSSFWorkbook housingReconstructionExlDataExp(HSSFWorkbook wb) throws Exception {
		String headStr="户编号|乡镇名称|村名|自然村名|户主姓名|身份证号码|家庭人数|家庭劳力|党员数|牲畜（头只匹）|耕地面积（亩）|家庭类型|联系号码|受损程度|重建类型|重建户型|重建地点|重建房屋结构|施工单位名称|负责人|联系号码|监理单位名称|负责人|联系号码|工程阶段|已验收|已竣工|列入计划年度|开工时间|竣工时间|总投资（元）|国家补助（元）|群众自筹（元）|其中重建贷款（元）|本级财政自筹资金（元）|农牧三配套资金（元）|棚户区改造资金（元）|其他资金（元）";
        String fieldStr="hbh|xzmc|cm|zrcm|hzxm|sfzh|jtrs|jtll|dys|sc|gdmj|jtlx|lxhm|sscd|cjlx|cjhx|cjdd|cjfwjg|sgdwmc|sgfzr|sglxhm|jldwmc|jlfzr|jllxhm|gcjd|yys|yjg|lrndjh|kgsj|sgsj|ztz|gjbz|qzzc|qzcjdk|qtzj1|qtzj2|qtzj3|qtzj4";
		if(wb==null){
			logger.info("housingReconstructionExlDataExp wb::null");
			wb = new HSSFWorkbook();
		}
        HSSFSheet sheet = wb.createSheet("民房重建导出数据");  
        HSSFRow row = sheet.createRow((int) 0); 
        
        HSSFCellStyle style = wb.createCellStyle();  
        style.setAlignment(HSSFCellStyle.ALIGN_CENTER); // 创建一个居中格式   
        style.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);// 垂直  
        Font font = wb.createFont();     
        font.setFontHeightInPoints((short)12);
        style.setFont(font);
        
        String[] headStrArray = headStr.split("\\|"); 
        for (int i = 0 ; i <headStrArray.length ; i++) {
          //System.out.println("--"+headStrArray[i]);
          HSSFCell cell = row.createCell((short) i);  
          cell.setCellValue(headStrArray[i]);  
          cell.setCellStyle(style); 
        }
 
        List list = getAllHousingReconstruction();
        logger.info("export list size::"+list.size());
  
        for (int i = 0; i < list.size(); i++){
            row = sheet.createRow((int) i + 1);  
            HousingReconstruction instance = (HousingReconstruction)list.get(i);  
            Class cls = instance.getClass();
            logger.info("CLS::"+cls.getName());
            
            String[] fieldStrArray = fieldStr.split("\\|"); 
            for (int i1 = 0 ; i1 <fieldStrArray.length ; i1++) {
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
        }  

		return wb;
	}
	
	public String housingReconstructionExlDataImp(HSSFSheet st) throws Exception {
		String message;
		String flag="民房重建表";
		boolean templateFlag=false;
		int startRow=0;//Excel读取开始行数，开始行数-1
		int maxColNum=37+1;//数据中最大列数
		
		logger.info("st getSheetName::"+st.getSheetName());
		logger.info("st getLastRowNum::"+st.getLastRowNum());
		HSSFRow rowm=st.getRow(startRow);
		HSSFCell cell=rowm.getCell(0);
		String headStr="";
		for(int m=startRow++;m<maxColNum;m++){
			cell=rowm.getCell(m);
			headStr=headStr+GenerationUtils.getStringCellValue(cell);
		}
		logger.info("st headStr::"+headStr);
		if(!headStr.equals("户编号乡镇名称村名自然村名户主姓名身份证号码家庭人数家庭劳力党员数牲畜（头只匹）耕地面积（亩）家庭类型联系号码受损程度重建类型重建户型重建地点重建房屋结构施工单位名称负责人联系号码监理单位名称负责人联系号码工程阶段已验收已竣工列入计划年度开工时间竣工时间总投资（元）国家补助（元）群众自筹（元）其中重建贷款（元）本级财政自筹资金（元）农牧三配套资金（元）棚户区改造资金（元）其他资金（元）")){templateFlag=true;}
		if(templateFlag){
			message=flag+"模版不是标准模版，或者进行了改动，请下载使用正确的模版";
			return message;
		}
		
		List<HousingReconstruction> hrList=new ArrayList<HousingReconstruction>();
		
		for(int i=startRow;i<st.getLastRowNum()+1;i++){
			logger.info("st rowm num::"+i);
			rowm=st.getRow(i);
			int j=0;
			cell=rowm.getCell(j++);
			String hbh=GenerationUtils.getStringCellValue(cell);
			
			//String hbh=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String xzmc=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String cm=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String zrcm=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String hzxm=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String sfzh=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String jtrs=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String jtll=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String dys=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String sc=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String gdmj=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String jtlx=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String lxhm=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			
			String sscd=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			
			String cjlx=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String cjhx=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String cjdd=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String cjfwjg=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String sgdwmc=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String sgfzr=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String sglxhm=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String jldwmc=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String jlfzr=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String jllxhm=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String gcjd=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String yys=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String yjg=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String lrndjh=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			Date kgsj=GenerationUtils.getDateCellValue(rowm.getCell(j++));
			Date sgsj=GenerationUtils.getDateCellValue(rowm.getCell(j++));
			String ztz=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String gjbz=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String qzzc=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String qzcjdk=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String qtzj1=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String qtzj2=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String qtzj3=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String qtzj4=GenerationUtils.getStringCellValue(rowm.getCell(j++));	
			
			//检查户编号是否空项
			if(hbh==null||hbh.trim().length()==0){
				logger.info("st rowm num::"+i+"是空项，跳过");
			}else{
				
				if(hbh.trim().length()<6){//户编号最多支持5位
					String regionCode=regionCodeService.getRegionCode(xzmc=xzmc.trim(), cm=cm.trim());
					
					if(regionCode!="error"){
						hbh=regionCode+hbh;
					}else{
						message=flag+"（第"+(i+1)+"行，户编号为"+hbh+"）未在行政区域代码表中识别该区域，导入中断！";
						return message;
					}
				}
				
				//身份证号验证
				//ValidatorServiceImpl validatorService=new ValidatorServiceImpl();
				String validateIdcardStr=validatorService.validateIdcard("HousingReconstruction", sfzh,hbh);
				if(validateIdcardStr!= null){
					if(!validateIdcardStr.equals(validatorService.getSuccessStr())){
						message=flag+"（第"+(i+1)+"行，户编号为"+hbh+"）"+validateIdcardStr+"，导入中断！";
						return message;
					}
				}else{
					message=flag+"（第"+(i+1)+"行，户编号为"+hbh+"）身份证检查出现异常，导入中断！";
					return message;
				}
				for (HousingReconstruction housingReconstruction : hrList) {
			        if(housingReconstruction.getSfzh().equals(sfzh)){
			        	message=flag+"（第"+(i+1)+"行，户编号为"+hbh+"）身份证号："+sfzh+"在Excel表中存在重复，导入中断！";
						return message;
			        }
			    }
				
				
				String xmmc="西藏自治区日喀则市定日县"+xzmc+cm+"民房重建项目";
				String dz="西藏自治区日喀则市定日县"+xzmc+cm;
				
				//GenerationUtils.createDir(fileDir+xmmc+hbh);
				//GenerationUtils.createDir(fileDir+xmmc+hbh+"\\"+fileDirMtl);
				//GenerationUtils.createDir(fileDir+xmmc+hbh+"\\"+fileDirImg);
				String project=xmmc+hbh;
				GenerationUtils.createDir(UploadUtil.getUploadRealPath(fileDir, project, fileDirMtl));
				GenerationUtils.createDir(UploadUtil.getUploadRealPath(fileDir, project, fileDirImg));
				
				hrList.add(new HousingReconstruction(hbh,xmmc,dz, xzmc, cm,zrcm, hzxm, sfzh, jtrs, jtll,dys, sc, gdmj, jtlx, lxhm, sscd, cjlx, cjhx, cjdd, cjfwjg,sgdwmc, sgfzr, sglxhm, jldwmc,jlfzr, jllxhm, gcjd, yys, yjg,lrndjh, kgsj, sgsj, ztz, gjbz,qzzc, qzcjdk, qtzj1, qtzj2,qtzj3, qtzj4));
			}			
			//String id=st.getCell(j++, i).getContents();
			//headStr=headStr+GenerationUtils.getStringCellValue(cell);
		}
		logger.info("upload list size::"+hrList.size());
		if(hrList.size()<1){
			message=flag+"Excel中没有可识别的数据，未导入！";
			return message;
		}
		
		for(HousingReconstruction instance:hrList){
			logger.info("hrList save instance getHbh::"+instance.getHbh());
			if(!addHousingReconstruction(instance)){
				message=flag+"在执行保存过程中出现错误，错误条目为“"+instance.getHbh()+"”，系统停止保存，请检查格式问题并重试";
				return message;
			};
		}
		
		logger.info("housingReconstruction::数据输入成功");
		message="数据输入成功";
		return message;
	}
	
	public HousingReconstructionDAOImpl getHousingReconstructionDAO() {
		return housingReconstructionDAO;
	}

	public void setHousingReconstructionDAO(HousingReconstructionDAOImpl housingReconstructionDAO) {
		this.housingReconstructionDAO = housingReconstructionDAO;
	}

	public RegionCodeServiceImpl getRegionCodeService() {
		return regionCodeService;
	}

	public void setRegionCodeService(RegionCodeServiceImpl regionCodeService) {
		this.regionCodeService = regionCodeService;
	}

	public ValidatorServiceImpl getValidatorService() {
		return validatorService;
	}

	public void setValidatorService(ValidatorServiceImpl validatorService) {
		this.validatorService = validatorService;
	}


}
