<%@ page language="java" import="java.util.*,com.dr.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <link rel="stylesheet" type="text/css" href="ExtJs/resources/css/ext-all-neptune.css">
            <link rel="stylesheet" type="text/css" href="css/login.css">
            <link rel="icon" href="images/main/webico.ico" type="image/x-icon" />
            <link rel="shortcut icon" href="images/main/webico.ico" type="image/x-icon" />
            <link rel="bookmark" href="images/main/webico.ico" type="image/x-icon" />
            <script type="text/javascript" src="ExtJs/bootstrap.js"></script>
            <script type="text/javascript" src="ExtJs/ext-lang-zh_CN.js"></script>
            <title>定日县城市投资有限公司-项目管理系统</title>
            <script type="text/javascript">
                    Ext.Loader.setConfig({
                            enabled : true
                    });
                    Ext.application({
                            name : 'myapp',
                            launch: function() {
                        var dCookie = new Ext.state.CookieProvider();
                        Ext.state.Manager.setProvider(dCookie);
                        Ext.EventManager.onWindowResize(function () {
                            if (currentWindow) {
                                currentWindow.center();
                            }
                        });

                        var loginForm = Ext.create('Ext.form.Panel', {
                            title: "myform",
                            header: false,
                            border: false,
                            //autoScroll: true,
                            layout: "absolute",
                            height: 518,
                            width: 740,
                            region: "center",
                            bodyStyle: "background-color:transparent",
                            defaults: {
                                style: "font:normal 14px 微软雅黑"
                            },
                            items: [
                                {
                                    xtype: "label",
                                    text: "账号：",
                                    x: 445,
                                    y: 275,
                                    width: 50
                                },
                                {
                                    xtype: "label",
                                    text: "密码：",
                                    x: 445,
                                    y: 315
                                },
                                {
                                    xtype: "textfield",
                                    style: "background:none;border-top:none;border-left:none;border-right:none;border-bottom:1px solid #000;opacity:0.6;",
                                    fieldLabel: "username",
                                    hideLabel: true,
                                    id: 'userid',
                                    name: 'user.userid',
                                    allowBlank: false,
                                    blankText: '不能为空',
                                    x: 495,
                                    y: 275,
                                    width: 150
                                },
                                {
                                    xtype: "textfield",
                                    style: "background:none;border-top:none;border-left:none;border-right:none;border-bottom:1px solid #000;opacity:0.6;",
                                    fieldLabel: "password",
                                    hideLabel: true,
                                    id: 'userpassword',
                                    name: 'user.userpwd',
                                    inputType: 'password',
                                    allowBlank: false,
                                    blankText: '不能为空',
                                    x: 495,
                                    y: 315,
                                    width: 150
                                },
                                {
                                    xtype: 'checkboxgroup',
                                    //itemCls: 'x-check-group-alt',
                                    columns: 3, x: 467, y: 360,
                                    items: [
                                        {boxLabel: '<font face="微软雅黑">记住账号</font>', id: 'rememberUserId'}
                                    ]
                                },
                                {
                                    xtype: "button",
                                    id: 'loginBtn',
                                    text: "<span style='font:normal 12px 微软雅黑'>登录</span>",
                                    type: 'submit',
                                    x: 485,
                                    y: 395,
                                    handler: function () {
                                        var form = loginForm.getForm();
                                        var userId = Ext.getCmp('userid').getValue();
                                        var password = Ext.getCmp('userpassword').getValue();
                                        if (userId == "" || password == "") {
                                            Ext.Msg.alert('<font face="微软雅黑">提示</font>', '<font face="微软雅黑">请输入用户名和密码。</font>');
                                        } else {
                                            Ext.Ajax.request({
                                                url: "login.action",
                                                method: 'POST',
                                                params: {
                                                    'user.userid': userId,
                                                    'user.userpwd': password
                                                },
                                                success: function (res, opt) {
                                                    var result = Ext.decode(res.responseText);
                                                    //console.dir(result);
                                                    if (result.success == true) {
                                                        Ext.Msg.alert('提示', result.message);
                                                        var rememberUserId = Ext.getCmp('rememberUserId').getValue();
                                                        if (rememberUserId) {
                                                            Ext.state.Manager.set('wzfx_userId', userId);
                                                        } else {
                                                            Ext.state.Manager.set('wzfx_userId', '');
                                                        }
                                                        Ext.util.Cookies.set('userRole', result.userRole);
                                                        window.location.href = result.loginurl;

                                                    } else {
                                                        Ext.Msg.alert('提示', result.message);
                                                    }
                                                },
                                                failure: function (res, opt) {
                                                    Ext.Msg.alert('提示', '服务访问不成功');
                                                }
                                            });

                                        }
                                        ;
                                    }},
                                {
                                    xtype: "button",
                                    text: "<span style='font:normal 12px 微软雅黑'>重置</span>",
                                    x: 575,
                                    y: 395,
                                    handler: function () {
                                        loginForm.getForm().reset();
                                    }
                                }
                            ],
                            listeners: {
                                render: function (input) {
                                    new Ext.KeyMap(input.getEl(), [{
                                            key: Ext.EventObject.ENTER,
                                            fn: function () {
                                                Ext.getCmp("loginBtn").handler();
                                            }
                                        }]);
                                }
                            }
                        });

                        var win = Ext.create('Ext.window.Window', {
                            width: 740,
                            height: 518,
                            layout: "absolute",                            
                            bodyStyle: "background-image:url(images/logincenter.png); background-repeat:no-repeat; background-position:center;",
                            //bodyStyle: "background:#000000",
                            autoScroll: false,
                            baseCls: 'x-plain',
                            border: false,
                            shadow: false,
                            collapsible: false,
                            constrain: false,
                            plain: true,
                            closable: false,
                            resizable: false,
                            defaults: {
                                style: "font:normal 14px 微软雅黑"
                            },
                            items: [loginForm]
                        });
                        var currentWindow;
                        win.addListener('beforeshow', function (o) {
                            currentWindow = o;
                        });
                        win.show();
                        win.center();

                        var cookieUserId = Ext.state.Manager.get('wzfx_userId');
                        var form = loginForm.getForm();

                        if (cookieUserId && cookieUserId != '') {
                            Ext.getCmp('userid').setValue(cookieUserId);
                            Ext.getCmp('rememberUserId').setValue(true);
                        }
                        ;
                    }
                });
            </script>
	</head>
	
	
	<body>
	<!div id='loginpanel' style="height:100%;width:100%;background-color:#d4d6d1;background-image: url(images/login/bg1px.jpg);background-repeat:repeat-x;"></div>
        <div id='loginpanel' style="height:100%;width:100%;background-color:#FFFFFF;"></div>
	</body>
</html>