<%@ page language="java" pageEncoding="UTF-8" isELIgnored="false"%>
<html>
	<head>
		<%
			String baseUrl = request.getContextPath();
		%>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<script type="text/javascript">

		 	// 编辑用户Form
			var changePwdFormPanel = Ext.create('Ext.form.Panel', {
				renderTo: 'changePwdFormDiv',
		        labelWidth: 60,
		        border: false,
		        items: [{
		            layout:'form',
		            border: false,
		            bodyStyle: 'padding:5px;',
		            items:[Ext.create('Ext.form.field.Text', {// 原密码
	            		inputType: 'password',
		                id: 'oldpassword',
		                name: 'oldpassword',
		                fieldLabel: '旧密码',
		                anchor:'95%',
		                allowBlank:false,
		                maxLength: 20
		           }),new Ext.form.TextField ({// 新密码
		        	   inputType: 'password',
		               id:'password',
		               name:'password',
		               fieldLabel:'新密码',
		               anchor:'95%',
		               allowBlank:false,
		               maxLength: 20
		           }),new Ext.form.TextField ({// 确认密码
	            	   inputType: 'password',
		        	   id:'repassword',
		               fieldLabel:'确认密码',
		               anchor:'95%',
		               allowBlank:false,
		               maxLength: 20,
		               validator:function(value){
		               		if(value==this.previousSibling().value){
		               		return true
		               		}else{
		               		return '两次输入密码不一致';
		               		}
		               		
		               
		               }
	                })]
		        }]
		    });
		    
		    // 工具栏
		    var changePwdToolbar = Ext.create('Ext.toolbar.Toolbar', {
		    	renderTo: 'changePwdToolBarDiv',
		    	items: [{
					    id: 'changePwd-save-button',
						text: '保存',
						handler:function(){
							var form = changePwdFormPanel.getForm();
						    if(form.isValid()){
						    	Ext.Ajax.request({
			                			url:'changePwd.action', 
			                			method:'post', 
			                			params:{
			                				'userpwd':Ext.getCmp('oldpassword').getValue(),
			                				'newuserpwd':Ext.getCmp('password').getValue()
			                			}, 
			                				success:function(res,opt){
			                					var result = Ext.decode(res.responseText);
			                                    if(result.success==true){
			                                    	Ext.Msg.alert("成功",result.message);
			                                    	changePwdWindow.close();
			                                    }
			                                    else{Ext.Msg.alert("失败",result.message);}
			                				},
			                				failure:function(){
			                					Ext.Msg.alert("失败","请检查网络等状况是否正常");
			                				}
			                	});
							}
						
						}
					},{
					    id: 'changePwd-cancel-button',
						text: '取消',
						handler:function(){
							changePwdWindow.close();
						}
					}]
			});

	</script>
	</head>
	<body>
		<div id="changePwdDiv" style="width: 100%; height: 100%;">
			<div id="changePwdFormDiv""></div>
			<div id="changePwdToolBarDiv"></div>
		</div>
	</body>
</html>