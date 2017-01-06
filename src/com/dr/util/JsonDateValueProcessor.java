package com.dr.util;

import java.text.SimpleDateFormat;   
import java.util.Date;   
import java.util.Locale;   
  
import net.sf.json.JsonConfig;   
import net.sf.json.processors.JsonValueProcessor;   
  
public class JsonDateValueProcessor implements JsonValueProcessor {   
  
    private String format ="yyyy-MM-dd";
    private String format2 ="HH:mm:ss";
       
    public Object processArrayValue(Object value, JsonConfig config) {   
        return process(value);   
    }   
  
    public Object processObjectValue(String key, Object value, JsonConfig config) {   
        return process(value);   
    }   
       
    private Object process(Object value){   
           
        if(value instanceof Date){   
            SimpleDateFormat sdf = new SimpleDateFormat(format,Locale.UK);  
            SimpleDateFormat sdf2 = new SimpleDateFormat(format2,Locale.UK);   
            return sdf.format(value)+"T"+sdf2.format(value);   
        }   
        return value == null ? "" : value.toString();   
    }   
}


