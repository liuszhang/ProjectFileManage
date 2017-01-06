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

import com.dr.dao.impl.ReconstructionDAOImpl;
import com.dr.model.Reconstruction;
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
public class ReconstructionServiceImpl {
	private RegionCodeServiceImpl regionCodeService;
	private ValidatorServiceImpl validatorService;
	private ReconstructionDAOImpl reconstructionDAO;
	private static Logger logger=Logger.getLogger(ReconstructionServiceImpl.class);
	String fileDir=UploadUtil.getrFolderRealpath();
	String fileDirMtl=UploadUtil.getrFolderMtl();
	String fileDirImg=UploadUtil.getrFolderImg();
	String fileDirArchive=UploadUtil.getrFolderArchv();
	String fileDirJs=UploadUtil.getJSPath(UploadUtil.getrFolder());
	
	public boolean addReconstruction(Reconstruction instance) throws Exception {
		return reconstructionDAO.saveReconstruction(instance);
	}
	
	public boolean saveReconstruction(Reconstruction instance) throws Exception {
		List list= reconstructionDAO.findReconstructionByXmmc(instance.getXmmc());
		logger.info("list size:"+list.size());
		if(list.size()==1){
			Reconstruction r=(Reconstruction)list.get(0);
			instance.setId(r.getId());
		}else if(list.size()>1){
			return false;
		}
		return reconstructionDAO.saveReconstruction(instance);
	}
	
	public List getAllReconstruction() {
		//System.out.println("List size:"+reconstructionDAO.getAllReconstruction().size());
		return reconstructionDAO.getAllReconstruction();
	}
	
	public PageJson findReconstructionByPage(int index, int pageSize, String dateStr) {
		//System.out.println("List size:"+reconstructionDAO.getAllReconstruction().size());
		PageJson pageJson=new PageJson();
		if(dateStr.trim().length()!=0){
			dateStr=" WHERE "+dateStr;
		}
		pageJson.setTotalProperty(reconstructionDAO.countNum(dateStr));
		pageJson.setRoot(reconstructionDAO.findReconstructionByPage(index,pageSize,dateStr));
		return pageJson;
	}
	
	/**
	 * @throws Exception 
	 * @Title: findReconstructionByPage
	 * @Description: TODO
	 * @param: @param index
	 * @param: @param pageSize
	 * @param: @param whereStr
	 * @param: @param reconstruction
	 * @param: @return   
	 * @return: PageJson   
	 * @throws
	 */
	public PageJson findReconstructionByPage(int index, int pageSize, String whereStr,
			Reconstruction reconstruction) throws Exception {
		PageJson pageJson=new PageJson();
		if(reconstruction!=null){
			if(reconstruction.getXmlx().equals("重建项目")){
				reconstruction.setXmlx("");
			}
			Class cls = reconstruction.getClass();
			Field[] fields = cls.getDeclaredFields();
			int i=0;
			if(whereStr.trim().length()!=0){
				i++;
			}
			for(Field f : fields){
				f.setAccessible(true); 
				if(f.get(reconstruction)!=null&&!f.get(reconstruction).toString().trim().equals("")){
					if(!f.getName().equals("id")){
						if(i<1){
							whereStr=whereStr+f.getName()+" LIKE '%"+f.get(reconstruction)+"%'";
						}else{
							whereStr=whereStr+" AND "+f.getName()+" LIKE '%"+f.get(reconstruction)+"%'";
						}
						i++;
					}					
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
		pageJson.setTotalProperty(reconstructionDAO.countNum(whereStr));
		List searchList=reconstructionDAO.findReconstructionByPage(index,pageSize,whereStr);
		if(searchList.size()>0){
			searchList.add(reconstructionDAO.sumReconstruction(whereStr));
		}
		pageJson.setRoot(searchList);
		return pageJson;
	}
	
	public List findReconstruction(Reconstruction instance) {
		return reconstructionDAO.findReconstruction(instance);
	}
	
	public int deleteReconstructionById(String instance) {
		Reconstruction hr=new Reconstruction();
		hr.setId(Integer.parseInt(instance));
		return reconstructionDAO.deleteById(hr);
	}
	
	@SuppressWarnings("deprecation")
	public HSSFWorkbook reconstructionExlDataExp(HSSFWorkbook wb) throws Exception {
		String headStr="项目名称|建设地点|项目类型|建设性质|建设内容及规模|项目主管单位|地勘单位名称|地勘单位负责人|地勘单位联系号码|设计单位名称|设计单位负责人|设计单位联系号码|施工单位名称|施工单位负责人|施工单位联系号码|监理单位名称|监理单位负责人|监理单位联系号码|开工时间|竣工时间|投资批复文号|总投资（万元）|国家补助（万元）|本级财政配套（万元）|援藏配套资金（万元）|其他资金1（万元）|其他资金2（万元）|备注";
        String fieldStr="xmmc|cjdd|xmlx|jsxz|jsnrjgm|xmzgdw|dkdwmc|dkfzr|dklxhm|sjdwmc|sjfzr|sjlxhm|sgdwmc|sgfzr|sglxhm|jldwmc|jlfzr|jllxhm|kgsj|sgsj|tzpfwh|ztz|gjbz|qzzc|qzcjdk|qtzj1|qtzj2|bz";
		if(wb==null){
			logger.info("reconstructionExlDataExp wb::null");
			wb = new HSSFWorkbook();
		}
        HSSFSheet sheet = wb.createSheet("重建项目导出数据");  
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
 
        List list = getAllReconstruction();
        logger.info("export list size::"+list.size());
  
        for (int i = 0; i < list.size(); i++){
            row = sheet.createRow((int) i + 1);  
            Reconstruction instance = (Reconstruction)list.get(i);  
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
	
	public String reconstructionExlDataImp(HSSFSheet st) throws Exception {
		String message;
		String flag="重建项目表";
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
		if(!headStr.equals("项目名称建设地点项目类型建设性质建设内容及规模项目主管单位地勘单位名称地勘单位负责人地勘单位联系号码设计单位名称设计单位负责人设计单位联系号码施工单位名称施工单位负责人施工单位联系号码监理单位名称监理单位负责人监理单位联系号码开工时间竣工时间投资批复文号总投资（万元）国家补助（万元）本级财政配套（万元）援藏配套资金（万元）其他资金1（万元）其他资金2（万元）备注")){templateFlag=true;}
		if(templateFlag){
			message=flag+"模版不是标准模版，或者进行了改动，请下载使用正确的模版";
			return message;
		}
		
		List<Reconstruction> hrList=new ArrayList<Reconstruction>();
		
		for(int i=startRow;i<st.getLastRowNum()+1;i++){
			logger.info("st rowm num::"+i);
			rowm=st.getRow(i);
			int j=0;
			cell=rowm.getCell(j++);
			
			String xmmc=GenerationUtils.getStringCellValue(cell);
			
			String cjdd=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String xmlx=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String jsxz=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String jsnrjgm=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String xmzgdw=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String dkdwmc=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String dkfzr=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String dklxhm=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String sjdwmc=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String sjfzr=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String sjlxhm=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String sgdwmc=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String sgfzr=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String sglxhm=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String jldwmc=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String jlfzr=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String jllxhm=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			Date kgsj=GenerationUtils.getDateCellValue(rowm.getCell(j++));
			Date sgsj=GenerationUtils.getDateCellValue(rowm.getCell(j++));
			String tzpfwh=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String ztz=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String gjbz=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String qzzc=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String qzcjdk=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String qtzj1=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String qtzj2=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			String bz=GenerationUtils.getStringCellValue(rowm.getCell(j++));
			
			//检查是否空项
			if(xmmc==null||xmmc.trim().length()==0){
				logger.info("st rowm num::"+i+"是空项，跳过");
			}else{
				String project=xmmc;
				GenerationUtils.createDir(UploadUtil.getUploadRealPath(fileDir, project, fileDirMtl));
				GenerationUtils.createDir(UploadUtil.getUploadRealPath(fileDir, project, fileDirImg));
				GenerationUtils.createDir(UploadUtil.getUploadRealPath(fileDir, project, fileDirArchive));
				hrList.add(new Reconstruction(0,xmmc,cjdd,xmlx,jsxz,jsnrjgm,xmzgdw,dkdwmc,dkfzr,dklxhm,sjdwmc,sjfzr,sjlxhm,sgdwmc,sgfzr,sglxhm,jldwmc,jlfzr,jllxhm,kgsj,sgsj,tzpfwh,ztz,gjbz,qzzc,qzcjdk,qtzj1,qtzj2,bz));
			}			
			//String id=st.getCell(j++, i).getContents();
			//headStr=headStr+GenerationUtils.getStringCellValue(cell);
		}
		logger.info("upload list size::"+hrList.size());
		if(hrList.size()<1){
			message=flag+"Excel中没有可识别的数据，未导入！";
			return message;
		}
		
		for(Reconstruction instance:hrList){
			logger.info("hrList save instance getHbh::"+instance.getXmmc());
			try{
				if(!saveReconstruction(instance)){
					message=flag+"在执行保存过程中出现错误，错误条目为“"+instance.getXmmc()+"”，系统停止保存，请检查系统中项目名称是否存在2个以上的项目名称重复并重试";
					return message;
				};
			}catch (Exception e){
				e.printStackTrace();
				message=flag+"在执行保存过程中出现错误，错误条目为“"+instance.getXmmc()+"”，系统停止保存，请检查格式问题";
				return message;
			}
		}
		
		logger.info("reconstruction::数据输入成功");
		message="数据输入成功";
		return message;
	}
	
	public ReconstructionDAOImpl getReconstructionDAO() {
		return reconstructionDAO;
	}

	public void setReconstructionDAO(ReconstructionDAOImpl reconstructionDAO) {
		this.reconstructionDAO = reconstructionDAO;
	}


	public int countNum(String str) {
		// TODO Auto-generated method stub
		return reconstructionDAO.countNum(str);
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
