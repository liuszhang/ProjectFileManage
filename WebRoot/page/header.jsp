<%@ page import="java.text.SimpleDateFormat"%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.dr.model.User"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	String userIP=request.getRemoteAddr();
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  	<script type="text/javascript">
  	var dep='';
  	var role='';
  	
  	function printimage(str) {
  		var titleHtml = "<img src='"+str+"' alt='图片'>";
  		var newwin = window.open("printer.html", "", "");
  		newwin.document.write(titleHtml);
  		newwin.document.location.reload();
  		newwin.print();
  		newwin.close();
  	}
  	
 	// 一键导入
	function oneKeyImp(){
		var idStr='oneKeyImpWin';
		var panel = Ext.getCmp(idStr);
		//console.log("open panel id： "+idStr);
		if (!panel) {
			panel = Ext.create('KJXM.view.onekey.ImportExlWin',{
				id:idStr,
				title:'导入数据：一键导入'
			});
		}
		panel.show();
	}
 
 	// 一键导出
	function oneKeyExp(){
		Ext.Msg.confirm("提示", "确定要导出吗？", function(btn){
			if(btn=="yes"){
				Ext.Ajax.request({
					url:'oneKeyExlDataExp.action', 
	           	 	method:"post",
	           	 	success:function(res,opt){
	                    var result = Ext.decode(res.responseText);
	                    if(result.success==true){
	                    	Ext.Msg.alert('提示',result.message);
	                    }else{
	                    	Ext.Msg.alert('提示',result.message);
	                    }
	                },
	                failure:function(res,opt){
	                    Ext.Msg.alert('提示','服务访问不成功');
	                }
				});
		
			}
		});
	}

   		// 用户退出
		function logoutSys(){
			Ext.Msg.confirm("提示", "确定要退出吗？", function(btn){
				if(btn=="yes"){
					Ext.Ajax.request({
						url:'logout.action', 
		           	 	method:"post",
		            	success: function(){
							location.href="login.jsp";
						}
					});
			
				}
			});
		}
		
		//修改密码
		function editPwd(){
			changePwdWindow = Ext.create('Ext.window.Window', {
				title: '修改密码',
				width: 300,
				height: 170,
				modal: true,
				maximizable: false,
				resizable: false,
				layout:'fit',
				plain: true,
				loader:{url:'page/changepwd.jsp',scripts:true,nocache:true,autoLoad:true}
				//autoLoad:{url:'<%=path%>/page/changepwd.jsp',scripts:true,nocache:true}
			});
			if (!changePwdWindow) {
				changePwdWindow.show();
			}else{
				changePwdWindow.show();
			}
			
		}
		
		Ext.create('Ext.form.field.Display',{
    		value:dep,
    		id:'userDep'
    	}).show();
		Ext.create('Ext.form.field.Display',{
    		value:role,
    		id:'userRole'
    	}).show();
				
		//上传方法参数flag=1/2，表示上传或重新上传
		function uploadFnc(flag){
			//console.log("flag::"+flag);
		};
	</script>

  </head>
  
  <body>
    <span style="float:left"><img src="images/main/logo.png" alt="定日县"/></span>
   	<div style="height:100%;text-align:left;color:#FFF;font:normal 28px 微软雅黑; float:left; width:480px; margin-top:16px; margin-left:6px; margin-right:16px">定日县城市投资有限公司项目管理系统</div>
    <div style="float:right">
    <table style="height:100%;color:#FFF;font:normal 14px 微软雅黑">
    <tr style="height:50%"><td align="right" style="padding-top:6px">
    <span style="padding:0px 13px 3px 0px"><img src="images/icon/version.png" alt="X"/><a style="color:#FFF" href="javascript:oneKeyImp();">一键导入</a></span>
    <span style="padding:0px 13px 3px 0px"><img src="images/icon/version.png" alt="X"/><a style="color:#FFF" href="javascript:oneKeyExp();">一键导出</a></span>
    <span style="padding:0px 13px 3px 0px"><img src="images/icon/key.png" alt="X"/><a style="color:#FFF" href="javascript:editPwd();">修改密码</a></span>
    <%--<span style="padding:0px 11px 3px 0px"><img src="images/icon/version.png" alt="X"/><a style="color:#006e67" href="javascript:showVer();">版本信息</a></span>
    --%><span style="padding:0px 11px 3px 0px"><img src="images/icon/outbox.png" alt="X"/><a href="javascript:logoutSys();" style="color:#FFF">退出登录</a></span>
    </td></tr>
    <tr style="height:50%"><td align="center" style="padding-top:6px">
    <%
    	User loginAccount = (User) session.getAttribute("user");
    	out.print("<p>用户：");
    	out.print(loginAccount.getUsername());
    %>
    <%
    	out.print("&nbsp; &nbsp; 组织：");
    	out.print(loginAccount.getUserdept());
    	out.print("</p>");
    	
    %>
    </td></tr>
    </table></div>
  </body>
</html>
