Ext.define('KJXM.view.housingreconstruction.FundingImportExlWin', {
	extend : 'KJXM.view.KjWindow',
	layout:'fit',
	width:360,
	//height:150,
	autoHeight : true,
	modal : true,
	frame : true,
	border : false,
	autoScroll : true,
	initComponent : function() {

		var impForm = Ext.create('Ext.form.Panel',{
			buttonAlign : 'center',
			//enctype : "multipart/form-data",
			//fileUpload : true,
			width : '95%',
			bodyPadding:5,
			header : false,
			//frame : true,
			items : [ {
				xtype : 'filefield',
				labelWidth : 65,
				fieldLabel : '选择文件',
				name : 'userfile_E',
				id : 'userfile_E',
				//inputType : 'file',
				allowBlank : false,
				blankText : '文件不能为空',
				buttonText:'浏览',
				height : 25,
				anchor : '98%'
			}, {
				xtype : 'textfield',
				name : 'uploadEContentType',
				id : 'uploadEContentType',
				allowBlank : false,
				hidden : true
			}, {
				xtype : 'textfield',
				name : 'uploadEFileName',
				id : 'uploadEFileName',
				allowBlank : false,
				hidden : true
			} ],
			buttons : [ {
				text : '读取',
				type : 'submit',
				handler : function() {
					var me=this;

					var efurl = "";//文件物理地址
					var efname = "";//文件名称
					
					efurl = impForm.getComponent('userfile_E')
							.getValue();

					var type = efurl.substring(efurl.length - 3).toLowerCase();
					Ext.getCmp('uploadEContentType').setValue(type);
					
					if (efurl == "" || efurl == null) {
						Ext.Msg.alert("提示", "文件为空");
						return;
					}
					if (type != 'xls') {
						Ext.Msg.alert("提示", "仅支持上传xls格式的文件");
						return;
					}
					efname = efurl.substring(efurl.lastIndexOf("\\") + 1);
					Ext.getCmp('uploadEFileName').setValue(efname);
										
					impForm.form.submit({
						url : 'fundingBatchExlDataImp.action',
						waitMsg : '正在处理......',
						waitTitle : '请等待',
						method : 'post',
						success : function(form, action) {
							if (action.result.success) {
								Ext.Msg.alert("提示",action.result.message);
		                		//me.up('window').close();
		                		me.up('window').fireEvent("done");
		                		me.up('window').close();
		                		//me.grid.getStore().reload();
							} else {
								
								Ext.Msg.alert("错误", action.result.message);
								
							}
						},
						failure : function(form, action) {
							//Ext.MessageBox.alert('警告', "导入过程出现问题，请检查网络连接或者联系管理员");
							Ext.MessageBox.alert('警告', action.result.message);
							
							//Ext.Msg.alert("失败","请检查网络连接或者联系管理员");
						}
					});
				}
			} ]
		});

		this.items = [ impForm ];
		this.callParent(arguments);
	}
});