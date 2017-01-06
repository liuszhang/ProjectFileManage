package com.dr.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;

/**
 * @author 赵亚一
 * @E-mail:yayi_zhao@163.com
 * @classDescription:TODO
 * @version:
 * @date:2016-9-21 下午10:41:38
 */

public class MACAddress {
	String ip;
	String mac;
	private static Logger logger = Logger.getLogger(MACAddress.class);

	public MACAddress(String ip) {
		this.ip = ip;
	}

	public MACAddress() {
		this.ip = "0.0.0.0";
	}
	
/*	public boolean getMacIdentity(){
		String mac=getMac();
		if(mac!=null){
			return getMacConfig().indexOf(mac)!=-1;
		}else{
			return false;
		}
		
	}*/

	public boolean getMacIdentity() {
		String mac = null;
		boolean flag=false;
		String macConfig=getMacConfig();
		try {
			Process pro = Runtime.getRuntime().exec("cmd.exe /c ipconfig/all");

			InputStream is = pro.getInputStream();
			BufferedReader br = new BufferedReader(new InputStreamReader(is));
			String message = br.readLine();

			int index = -1;
			while (message != null) {
				//logger.info(message);
				if ((index = message.indexOf("Physical Address")) > 0) {
					mac = message.substring(index + 36).trim();
					logger.info("login getMac: Mac:" + mac);
					//break;
					if(macConfig.indexOf(mac)!=-1){
						flag=true;break;
					}
				}else if((index = message.indexOf("物理地址")) > 0){
					mac = message.substring(index + 32).trim();
					logger.info("login getMac: Mac:" + mac);
					//break;
					if(macConfig.indexOf(mac)!=-1){
						flag=true;break;
					}
				}
				
				message = br.readLine();
			}
			br.close();
			pro.destroy();
		} catch (IOException e) {
			//System.out.println("Can't get mac address!");
			logger.info("Can't get mac address!");
			logger.info(e);
			return false;
		}
		return flag;
	}

	public String getMacConfig() {
		InputStream inputStream = this.getClass().getClassLoader()
				.getResourceAsStream("bindmac.properties");
		Properties p = new Properties();
		try {
			p.load(inputStream);
		} catch (IOException e1) {
			e1.printStackTrace();
		}
		logger.info("login getMacConfig: mac:" + p.getProperty("mac"));
		return p.getProperty("mac");
	}

	public String getIpAddr(HttpServletRequest request) {
		String ip = request.getHeader("x-forwarded-for");
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("WL-Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getRemoteAddr();
		}
		logger.info("login getIpAddr: ip:" + ip);
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}

}
