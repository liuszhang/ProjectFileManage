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

import com.dr.dao.impl.MaintenanceAndReinforcementDAOImpl;
import com.dr.model.MaintenanceAndReinforcement;
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
public class MaintenanceAndReinforcementServiceImpl {
	private RegionCodeServiceImpl regionCodeService;
	private ValidatorServiceImpl validatorService;
	private MaintenanceAndReinforcementDAOImpl maintenanceAndReinforcementDAO;
	private static Logger logger=Logger.getLogger(MaintenanceAndReinforcementServiceImpl.class);
	String fileDir=UploadUtil.getMarFolderRealpath();
	String fileDirMtl=UploadUtil.getMarFolderMtl();
	String fileDirImg=UploadUtil.getMarFolderImg();
	String fileDirJs=UploadUtil.getJSPath(UploadUtil.getMarFolder());
	
	public boolean addMaintenanceAndReinforcement(MaintenanceAndReinforcement instance) {
		return maintenanceAndReinforcementDAO.addMaintenanceAndReinforcement(instance);
	}
	
	public List getAllMaintenanceAndReinforcement() {
		//System.out.println("List size:"+maintenanceAndReinforcementDAO.getAllMaintenanceAndReinforcement().size());
		return maintenanceAndReinforcementDAO.getAllMaintenanceAndReinforcement();
	}
	
	public PageJson findMaintenanceAndReinforcementByPage(int index, int pageSize, String dateStr) {
		//System.out.println("List size:"+maintenanceAndReinforcementDAO.getAllMaintenanceAndReinforcement().size());
		PageJson pageJson=new PageJson();
		if(dateStr.trim().length()!=0){
			dateStr=" WHERE "+dateStr;
		}
		pageJson.setTotalProperty(maintenanceAndReinforcementDAO.countNum(dateStr));
		pageJson.setRoot(maintenanceAndReinforcementDAO.findMaintenanceAndReinforcementByPage(index,pageSize,dateStr));
		return pageJson;
	}
	
	/**
	 * @throws Exception 
	 * @Title: findMaintenanceAndReinforcementByPage
	 * @Description: TODO
	 * @param: @param index
	 * @param: @param pageSize
	 * @param: @param whereStr
	 * @param: @param maintenanceAndReinforcement
	 * @param: @return   
	 * @return: PageJson   
	 * @throws
	 */
	public PageJson findMaintenanceAndReinforcementByPage(int index, int pageSize, String whereStr,
			MaintenanceAndReinforcement maintenanceAndReinforcement) throws Exception {
		PageJson pageJson=new PageJson();
		if(maintenanceAndReinforcement!=null){
			Class cls = maintenanceAndReinforcement.getClass();
			Field[] fields = cls.getDeclaredFields();
			int i=0;
			if(whereStr.trim().length()!=0){
				i++;
			}
			//String whereStr="";
			for(Field f : fields){
				f.setAccessible(true); 
				if(f.get(maintenanceAndReinforcement)!=null&&!f.get(maintenanceAndReinforcement).toString().trim().equals("")){
					if(i<1){
						whereStr=whereStr+f.getName()+" LIKE '%"+f.get(maintenanceAndReinforcement)+"%'";
					}else{
						whereStr=whereStr+" AND "+f.getName()+" LIKE '%"+f.get(maintenanceAndReinforcement)+"%'";
					}
					i++;
				}
			}
			if(i>0&&whereStr.trim().length()!=0){
				whereStr=" WHERE "+whereStr;
			}
			System.out.println(whereStr);  
		}else{
			if(whereStr.trim().length()!=0){
				whereStr=" WHERE "+whereStr;
			}
		}
		
		pageJson.setTotalProperty(maintenanceAndReinforcementDAO.countNum(whereStr));
		List searchList=maintenanceAndReinforcementDAO.findMaintenanceAndReinforcementByPage(index,pageSize,whereStr);
		if(searchList.size()>0){
			searchList.add(maintenanceAndReinforcementDAO.sumMaintenanceAndReinforcement(whereStr));
		}
		pageJson.setRoot(searchList);
		return pageJson;
	}
	
	public List findMaintenanceAndReinforcement(MaintenanceAndReinforcement instance) {
		return maintenanceAndReinforcementDAO.findMaintenanceAndReinforcement(instance);
	}
	
	public int deleteMaintenanceAndReinforcementById(String instance) {
		MaintenanceAndReinforcement hr=new MaintenanceAndReinforcement();
		hr.setHbh(instance);
		return maintenanceAndReinforcementDAO.deleteById(hr);
	}
	
	@SuppressWarnings("deprecation")
	public HSSFWorkbook maintenanceAndReinforcementExlDataExp(HSSFWorkbook wb) throws Exception {
		String headStr="户编号|编制单位|受损程度|乡（镇）|行政村|自然村|门牌号|户主姓名|身份证号码|联系号码|家庭人口|劳动力|是否低保户|建造年代|房屋结构|层数|建筑面积|是否安居工程|国家补助资金|是否结构受损|是否非承重构件受损|是否地基沉降|受损情况|震后房屋受损照片|维修情况描述及验收情况|维修过程图片|预付款拨付比例（%）|验收结算金额（元）|结余资金（元）|预付款拨付金额（元）|领款人|经办人|验收通过后的图片|列入计划年度|开工时间|竣工时间|验收结果";
        String fieldStr="hbh|bzdw|sscd|xz|xzc|zrc|mph|hzxm|sfzh|lxhm|jtrk|ldl|sfdbh|jznd|fwjg|cs|jzmj|sfajgc|gjbzzj|sfjgss|sffczgjss|sfdjcj|ssqk|zhfwsszp|wxqkmsjysqk|wxgctp|yfkbfbl|ysjsje|jyzj|yfkbfje|lkr|jbr|ystghdtp|lrjhnd|kgsj|jgsj|ysjg";
		if(wb==null){
			logger.info("maintenanceAndReinforcementExlDataExp wb::null");
			wb = new HSSFWorkbook();
		}
        HSSFSheet sheet = wb.createSheet("维修加固导出数据");  
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
 
        List list = getAllMaintenanceAndReinforcement();
        logger.info("export list size::"+list.size());
  
        for (int i = 0; i < list.size(); i++){
            row = sheet.createRow((int) i + 1);  
            MaintenanceAndReinforcement instance = (MaintenanceAndReinforcement)list.get(i);  
            Class cls = instance.getClass();
            logger.info("CLS::"+cls.getName());
            
            String[] fieldStrArray = fieldStr.split("\\|"); 
            for (int i1 = 0 ; i1 <fieldStrArray.length ; i1++) {
            	Field fld = cls.getDeclaredField(fieldStrArray[i1]); 
                fld.setAccessible(true);
                //System.out.println(fieldStrArray[i1]+":field:" + fld.get(instance)); 
            	//row.createCell((short) i1).setCellValue((String) fld.get(instance));
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
	
	public String maintenanceAndReinforcementExlDataImp(HSSFSheet st) throws Exception {
		String message;
		String flag="维修加固表";
		boolean templateFlag=false;
		int startRow=0;//Excel读取开始行数，开始行数-1
		int maxColNum=37;//数据中最大列数

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
		if(!headStr.equals("户编号编制单位受损程度乡（镇）行政村自然村门牌号户主姓名身份证号码联系号码家庭人口劳动力是否低保户建造年代房屋结构层数建筑面积是否安居工程国家补助资金是否结构受损是否非承重构件受损是否地基沉降受损情况震后房屋受损照片维修情况描述及验收情况维修过程图片预付款拨付比例（%）验收结算金额（元）结余资金（元）预付款拨付金额（元）领款人经办人验收通过后的图片列入计划年度开工时间竣工时间验收结果")){templateFlag=true;}
		if(templateFlag){
			message=flag+"模版不是标准模版，或者进行了改动，请下载使用正确的模版";
			return message;
		}
		
		List<MaintenanceAndReinforcement> hrList=new ArrayList<MaintenanceAndReinforcement>();
		
		for(int i=startRow;i<st.getLastRowNum()+1;i++){
			logger.info("st rowm num::"+i);
			rowm=st.getRow(i);
			int j=0;
			cell=rowm.getCell(j++);
			String hbh=GenerationUtils.getStringCellValue(cell);
			
			//String hbh=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String bzdw=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String sscd=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			//String dz=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String xz=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String xzc=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String zrc=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String mph=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String hzxm=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String sfzh=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String lxhm=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String jtrk=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String ldl=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String sfdbh=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String jznd=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String fwjg=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String cs=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String jzmj=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String sfajgc=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String gjbzzj=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String sfjgss=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String sffczgjss=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String sfdjcj=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String ssqk=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String zhfwsszp=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String wxqkmsjysqk=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String wxgctp=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String yfkbfbl=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String ysjsje=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String jyzj=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String yfkbfje=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String lkr=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String jbr=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String ystghdtp=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String lrjhnd=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			Date kgsj=GenerationUtils.getDateCellValue(rowm.getCell(j++));
			Date jgsj=GenerationUtils.getDateCellValue(rowm.getCell(j++));
			String ysjg=GenerationUtils.getStringCellValue(rowm.getCell(j++));

			
			//检查是否空项
			if(hbh==null||hbh.trim().length()==0){
				logger.info("st rowm num::"+i+"是空项，跳过");
			}else{
				
				if(hbh.trim().length()<6){
					String regionCode=regionCodeService.getRegionCode(xz=xz.trim(), xzc=xzc.trim());
					if(regionCode!="error"){
						hbh=regionCode+hbh;
					}else{
						message=flag+"（项目编号为"+hbh+"）未在行政区域代码表中识别该区域，导入中断！";
						return message;
					}
				}
				
				//身份证号验证
				//ValidatorServiceImpl validatorService=new ValidatorServiceImpl();
				String validateIdcardStr=validatorService.validateIdcard("MaintenanceAndReinforcement", sfzh,hbh);
				if(validateIdcardStr!= null){
					if(!validateIdcardStr.equals(validatorService.getSuccessStr())){
						message=flag+"（第"+(i+1)+"行，户编号为"+hbh+"）"+validateIdcardStr+"，导入中断！";
						return message;
					}
				}else{
					message=flag+"（第"+(i+1)+"行，户编号为"+hbh+"）身份证检查出现异常，导入中断！";
					return message;
				}
				for (MaintenanceAndReinforcement instance : hrList) {
			        if(instance.getSfzh().equals(sfzh)){
			        	message=flag+"（第"+(i+1)+"行，户编号为"+hbh+"）身份证号："+sfzh+"在表中存在重复，导入中断！";
						return message;
			        }
			    }
				
				String xmmc="西藏自治区日喀则市定日县"+xz+xzc+"维修加固项目";
				String dz="西藏自治区日喀则市定日县"+xz+xzc;
				
				String project=xmmc+hbh;
				GenerationUtils.createDir(UploadUtil.getUploadRealPath(fileDir, project, fileDirMtl));
				GenerationUtils.createDir(UploadUtil.getUploadRealPath(fileDir, project, fileDirImg));
				hrList.add(new MaintenanceAndReinforcement(hbh,bzdw,xmmc,sscd,dz,xz,xzc,zrc,mph,hzxm,sfzh,lxhm,jtrk,ldl,sfdbh,jznd,fwjg,cs,jzmj,sfajgc,gjbzzj,sfjgss,sffczgjss,sfdjcj,ssqk,zhfwsszp,wxqkmsjysqk,wxgctp,yfkbfbl,ysjsje,jyzj,yfkbfje,lkr,jbr,ystghdtp,lrjhnd,kgsj,jgsj,ysjg));
			}
			//String id=st.getCell(j++, i).getContents();
			//headStr=headStr+GenerationUtils.getStringCellValue(cell);
		}
		logger.info("upload list size::"+hrList.size());
		if(hrList.size()<1){
			message=flag+"Excel中没有可识别的数据，未导入！";
			return message;
		}
		
		for(MaintenanceAndReinforcement instance:hrList){
			logger.info("hrList save instance getHbh::"+instance.getHbh());
			if(!addMaintenanceAndReinforcement(instance)){
				message=flag+"在执行保存过程中出现错误，错误条目为“"+instance.getHbh()+"”，系统停止保存，请检查格式问题并重试";
				return message;
			};
		}
		
		logger.info("maintenanceAndReinforcement::数据输入成功");
		message="数据输入成功";
		return message;
	}
	
	public MaintenanceAndReinforcementDAOImpl getMaintenanceAndReinforcementDAO() {
		return maintenanceAndReinforcementDAO;
	}

	public void setMaintenanceAndReinforcementDAO(MaintenanceAndReinforcementDAOImpl maintenanceAndReinforcementDAO) {
		this.maintenanceAndReinforcementDAO = maintenanceAndReinforcementDAO;
	}


	public int countNum(String str) {
		// TODO Auto-generated method stub
		return maintenanceAndReinforcementDAO.countNum(str);
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
