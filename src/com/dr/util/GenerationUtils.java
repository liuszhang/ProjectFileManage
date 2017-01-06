/**
 * 
 */
package com.dr.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.InputStreamReader;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFDateUtil;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dr.dao.impl.HousingReconstructionDAOImpl;
import com.dr.model.HRImg;

/**
 * @author:赵亚一
 * @E-mail:yayi_zhao@163.com
 * @comment:
 * @classDescription:
 * @version:
 * @date:2012-6-29上午11:48:58
 */
public class GenerationUtils {
	private static final Logger log = LoggerFactory.getLogger(GenerationUtils.class);
	
	private static final int SECONDS_PER_MINUTE = 60;
    private static final int MINUTES_PER_HOUR = 60;
    private static final int HOURS_PER_DAY = 24;
    private static final int SECONDS_PER_DAY = (HOURS_PER_DAY * MINUTES_PER_HOUR * SECONDS_PER_MINUTE);
    private static final long DAY_MILLISECONDS = SECONDS_PER_DAY * 1000L;
	
	public GenerationUtils(){
		
	}
	
	public static String getDateSQLiteString(Date date){
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		return "1000*strftime('%s','"+sdf.format(date)+"','-8 hours')";
	}
	
	public static String getTimeStampString(){
		Date now=new Date();
		String timeStamp=null;
		
		
		String nowMonth=""+(now.getMonth()+1);
		if(nowMonth.length()<2){
			nowMonth="0"+nowMonth;
		}
		
		String nowDate=""+now.getDate();
		if(nowDate.length()<2){
			nowDate="0"+nowDate;
		}
		
		String nowHour=""+now.getHours();
		if(nowHour.length()<2){
			nowHour="0"+nowHour;
		}
		
		String nowMinute=""+now.getMinutes();
		if(nowMinute.length()<2){
			nowMinute="0"+nowMinute;
		}
		
		String nowSecond=""+now.getSeconds();
		if(nowSecond.length()<2){
			nowSecond="0"+nowSecond;
		}
		
		timeStamp=""+(now.getYear()+1900)+nowMonth+nowDate+nowHour+nowMinute+nowSecond;
		
		return timeStamp;
		
	}
	
	public static String getStringCellValue(HSSFCell cell) {
		if(cell==null){
			return "";
		}
        String strCell = "";
        switch (cell.getCellType()) {
        case HSSFCell.CELL_TYPE_STRING:
            strCell = cell.getStringCellValue();
            break;
        case HSSFCell.CELL_TYPE_NUMERIC:
        	cell.setCellType(HSSFCell.CELL_TYPE_STRING);
        	strCell =getStringCellValue(cell);
            break;
        case HSSFCell.CELL_TYPE_BOOLEAN:
            strCell = String.valueOf(cell.getBooleanCellValue());
            break;
        case HSSFCell.CELL_TYPE_BLANK:
            strCell = "";
            break;
        case HSSFCell.CELL_TYPE_FORMULA:  
            try {  
            	strCell = cell.getStringCellValue();  
            } catch (IllegalStateException e) {  
            	strCell = String.valueOf(cell.getNumericCellValue());  
            }  
        break;  
        default:
            strCell = "";
            break;
        }
        if (strCell.equals("") || strCell == null) {
            return "";
        }
        return strCell.trim();
    }
	
	public static Date getDateCellValue(HSSFCell cell) throws ParseException {
		Date strCell =new Date(0,0,1);
		if(cell==null){
			return strCell;
		}
        if(cell.getCellType()==HSSFCell.CELL_TYPE_NUMERIC) {
        	System.out.println("getDateCellValue:The cell is CELL_TYPE_NUMERIC");
        	if (HSSFDateUtil.isCellDateFormatted(cell)) {
        		strCell = HSSFDateUtil.getJavaDate(cell.getNumericCellValue());
        	}
        }else{
        	System.out.println("getDateCellValue:The cell is not CELL_TYPE_NUMERIC, type is"+cell.getCellType());
        	if(cell.getCellType()==HSSFCell.CELL_TYPE_STRING) {
        		SimpleDateFormat sdFormat=new SimpleDateFormat("yyyy/MM/dd");
        		System.out.println("getDateCellValue:The cell is CELL_TYPE_STRING, string value is"+cell.getStringCellValue());
        		strCell=sdFormat.parse(cell.getStringCellValue());
        	}
        }
        
        return strCell;
    }
	
	public static Date getDateCellValue(Cell cell) throws NumberFormatException{
		SimpleDateFormat sdFormat=new SimpleDateFormat("yyyy-MM-dd");
        Date strCell =null;
        if(cell.getCellType()==HSSFCell.CELL_TYPE_NUMERIC) {
        	System.out.println("The cell is CELL_TYPE_NUMERIC");
        	if (HSSFDateUtil.isCellDateFormatted(cell)) {
        		strCell = HSSFDateUtil.getJavaDate(cell.getNumericCellValue());
        	}
        }else{
        	System.out.println("The cell is not CELL_TYPE_NUMERIC, type is"+cell.getCellType());
        	if(cell.getCellType()==HSSFCell.CELL_TYPE_STRING) {
        		System.out.println("The cell is CELL_TYPE_STRING, string value is"+cell.getStringCellValue());
        		Double date = Double.parseDouble(cell.getStringCellValue());
        		int wholeDays = (int)Math.floor(date);
        		System.out.println("String to int value:"+wholeDays);
        		int millisecondsInDay = (int)((date - wholeDays) * DAY_MILLISECONDS + 0.5);
                Calendar calendar = new GregorianCalendar(); // using default time-zone
                setCalendar(calendar, wholeDays, millisecondsInDay, false);
                System.out.println("calendar value:"+sdFormat.format(calendar.getTime())); 
                strCell=calendar.getTime();
        	}
        }
        
        return strCell;
    }
	
	public static void setCalendar(Calendar calendar, int wholeDays,
            int millisecondsInDay, boolean use1904windowing) {
        int startYear = 1900;
        int dayAdjust = -1; // Excel thinks 2/29/1900 is a valid date, which it isn't
        if (use1904windowing) {
            startYear = 1904;
            dayAdjust = 1; // 1904 date windowing uses 1/2/1904 as the first day
        }
        else if (wholeDays < 61) {
            // Date is prior to 3/1/1900, so adjust because Excel thinks 2/29/1900 exists
            // If Excel date == 2/29/1900, will become 3/1/1900 in Java representation
            dayAdjust = 0;
        }
        calendar.set(startYear,0, wholeDays + dayAdjust, 0, 0, 0);
        calendar.set(GregorianCalendar.MILLISECOND, millisecondsInDay);
    }
	
	//创建目录
    public static boolean createDir(String destDirName) {
        File dir = new File(destDirName);  
        if (dir.exists()) {  
        	log.info("创建目录" + destDirName + "跳过，目标目录已经存在");  
            return false;  
        }  
        if (!destDirName.endsWith(File.separator)) {  
            destDirName = destDirName + File.separator;  
        }  
        //创建目录  
        if (dir.mkdirs()) {  
        	log.info("创建目录" + destDirName + "成功！");  
            return true;  
        } else {  
        	log.info("创建目录" + destDirName + "失败！");  
            return false;  
        }  
    } 
    
    //通过递归得到某一路径下所有的目录及其文件
    public static void getFiles(String filePath){
    	ArrayList<String> filelist = new ArrayList<String>();
    	File root = new File(filePath);
        File[] files = root.listFiles();
        for(File file:files){
        	if(file.isDirectory()){
        		getFiles(file.getAbsolutePath());
        		filelist.add(file.getAbsolutePath());
        		log.info("显示"+filePath+"下所有子目录及其文件"+file.getAbsolutePath());
        	}else{
        		log.info("显示"+filePath+"下所有子目录"+file.getAbsolutePath());
        	}     
        }
    }
    
    public static void getFiles(String filePath,List<HRImg> fileList){
    	//ArrayList<String> filelist = new ArrayList<String>();
    	File root = new File(filePath);
        File[] files = root.listFiles();
        try{
        	for(File file:files){
            	if(file.isDirectory()){
            		getFiles(file.getAbsolutePath());
            		//filelist.add(file.getAbsolutePath());
            		
            		log.info("显示"+filePath+"下子目录及其文件"+file.getAbsolutePath());
            	}else{
            		log.info("显示"+filePath+"下子目录：绝对路径："+file.getAbsolutePath());
            		HRImg instance=new HRImg();
            		instance.setName(file.getName());
            		String str=file.getAbsolutePath();
            		//log.info("显示str：："+str);
            		str=str.substring(str.indexOf("upload"));
            		//log.info("显示str：："+str);
            		str=str.replace('\\', '/');
            		instance.setImg(str);
            		log.info("显示"+filePath+"下子目录：相对路径："+str+file.getName());
            		fileList.add(instance);
            	}     
            }
        }catch(Exception e){
        	log.info("未找到文件夹："+filePath);
        }         
    }
    
    //获取行政区域码
    public static String getRegionCode(String region){
    	String[] rcArray = GlobleVs.getRegioncode().split("\\,"); 
    	for(String rc : rcArray){
    		log.info("getRegionCode rc.substring："+rc.substring(0,rc.indexOf(':')-1));
    		log.info("getRegionCode region："+region);
    		if(rc.substring(0,rc.indexOf(':')).equals(region)){
    			return rc.substring(rc.indexOf(':')+1);
    		}
    		/*if(rc.contains(region)){
    			return rc.substring(rc.indexOf(':')+1);
    		}*/
    	}		
		return "error";
	}
    
    public static String readTxt(String filePath) {
    	String returnTxt = "";
    	String lineTxt = "";
		try {
			File file = new File(filePath);
			System.out.println("文件路径："+filePath);
			if (file.isFile() && file.exists()) {
				//InputStreamReader isr = new InputStreamReader(new FileInputStream(file), "utf-8");
				BufferedReader br = new BufferedReader(new FileReader(file));
				
				while ((lineTxt = br.readLine()) != null) {
					returnTxt=returnTxt+lineTxt;
					//lineTxt = lineTxt+br.readLine();
					//System.out.println(lineTxt);
					//System.out.println(br.readLine());
				}
				br.close();
			} else {
				System.out.println("文件不存在!");
			}
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("文件读取错误!");
		}
		return returnTxt;

	}

}
