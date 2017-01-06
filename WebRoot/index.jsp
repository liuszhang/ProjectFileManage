<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<base href="<%=basePath%>">
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<link rel="stylesheet" type="text/css" href="ExtJs/resources/css/ext-all-neptune.css">
		<link rel="stylesheet" type="text/css" href="css/main.css">
		<link rel="stylesheet" type="text/css" href="app/view/upload/UploadPanel.css">
		<link rel="icon" href="images/main/webico.ico" type="image/x-icon" />
		<link rel="shortcut icon" href="images/main/webico.ico" type="image/x-icon" />
		<link rel="bookmark" href="images/main/webico.ico" type="image/x-icon" />
		<script type="text/javascript" src="ExtJs/bootstrap.js"></script>
		<script type="text/javascript" src="ExtJs/ext-lang-zh_CN.js"></script>
		<script type="text/javascript" src="swfupload/swfupload.js"></script>
		
		<title>定日县城市投资有限公司-项目管理系统</title>
		<script type="text/javascript">
			//Ext.BLANK_IMAGE_URL = "ext-4.2.1.883/resources/themes/images/access/tree/s.gif";
			Ext.Loader.setConfig({
				enabled : true
			});
			Ext.application({
				name : 'KJXM',
				autoCreateViewport: true,
				appFolder : 'app',
				controllers : [ 'Menu','Main' ],
				launch: function() {
					Ext.Ajax.on('requestexception',function(conn,response,options) {
					    if(response.status=="999"){
					    	parent.location.href = 'LogoutError.jsp';
					    }else if(response.status=="998"){
					    	Ext.Msg.alert('提示', '与服务器通信超时，请重新登录!', function(){
					            parent.location.href = 'login.jsp';    
					        });
					    }else if(response.status=="997"){
					    	Ext.Msg.alert('提示', '您没有权限进行该操作!');
					    }else if(response.status=="996"){
					    	Ext.Msg.alert('提示', '您的角色信息非法!');
					    }else if(response.status=="995"){
					    	Ext.Msg.alert('提示', '您的角色信息未设置!');
					    }else{
					    	Ext.Msg.alert('提示', '请重新登录!', function(){
					            parent.location.href = 'login.jsp';    
					        });
					    }
					});
    			}
			});
			//Ext.require('KJXM.store.Kjghgl');
		</script>
	</head>

	<body>
		<div id='main'></div>
	</body>
</html>
