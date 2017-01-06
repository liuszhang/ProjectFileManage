Ext.define('KJXM.view.reconstruction.SearchWin', {
	extend : 'KJXM.view.KjWindow',
	layout:'fit',
	autoShow : true,
	width:750,
	//height:150,
	autoHeight : true,
	modal : true,
	frame : true,
	border : false,
	autoScroll : true,
	initComponent : function() {
		var count=0;
		var impForm = Ext.create('Ext.form.Panel',{
			buttonAlign : 'center',
			//enctype : "multipart/form-data",
			//fileUpload : true,
			width : '95%',
			bodyPadding:5,
			header : false,
			//frame : true,
			fieldDefaults:{
				labelWidth : 60
			},
			items : [{
				layout: 'column',
				border:false,
				defaults: { 
					border : false
				},
		        items: [{
		        	columnWidth:.5,
		        	layout:'form',
		        	bodyPadding:'0 0 0 5',
		        	labelWidth: 30,
		        	defaultType: 'textfield',
		        	items:[{
		        		allowBlank:false,
		        		fieldLabel: '项目名称',
		        		name:'xmmc'
		        	}]
		        },{
		        	columnWidth:.5,
		        	layout:'form',
		        	bodyPadding:'0 0 0 5',
		        	labelWidth: 30,
		        	defaultType: 'textfield',
		        	items:[{
		        		labelWidth: 80,
		        		fieldLabel: '项目主管单位',
		        		name:'xmzgdw'
		        	}]
		        }]
			},{
				layout: 'column',
				border:false,
				defaults: { 
					border : false
				},
		        items: [{
		        	columnWidth:1,
		        	layout:'form',
		        	bodyPadding:'0 0 0 5',
		        	labelWidth: 30,
		        	defaultType: 'textfield',
		        	items:[{
		        		fieldLabel: '建设地点',
		        		name:'cjdd'
		        	}]
		        },{
		        	columnWidth:.5,
		        	layout:'form',
		        	bodyPadding:'0 0 0 5',
		        	labelWidth: 30,
		        	defaultType: 'textfield',
		        	items:[{
		        		xtype : "combo",
						forceSelection : true,
						triggerAction : 'all',
						store : new Ext.data.SimpleStore({
							fields : [ 'value', 'text' ],
							data : [[ '新建', '新建' ],[ '维修加固', '维修加固' ],[ '改扩建', '改扩建' ],[ '其他', '其他' ]]
						}),
						displayField : 'text',
						valueField : 'value',
						mode : 'local',
						emptyText : '请选择',
		        		fieldLabel: '建设性质',			        		
		        		name:'jsxz'
		        	}]
		        },{
		        	columnWidth:1,
		        	layout:'form',
		        	bodyPadding:'0 0 0 5',
		        	labelWidth: 30,
		        	defaultType: 'textfield',
		        	items:[{
		        		xtype:'textarea',
		        		fieldLabel: '建设内容及规模',
		        		name:'jsnrjgm'
		        	}]
		        }]
				
			},{
				xtype : 'fieldset',
				title : '资金情况',
				style: {
			        width: '95%',
			        marginBottom: '10px'
			    },
			    defaults: { 
					border : false
				},
				fieldDefaults:{
					labelWidth : 90
				},
				items : [{
					layout: 'column',
					border:false,
					defaults: { 
						border : false
					},
			        items: [{
			        	columnWidth:1,
			        	layout:'form',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		labelWidth: 130,
			        		
							name:'tzpfwh',
							fieldLabel : '投资批复文号'
			        	}]
			        },{
			        	columnWidth:1,
			        	layout:'form',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		labelWidth: 130,
			        		
							name:'ztz',
							fieldLabel : '总投资（万元）'
			        	}]
			        },{
			        	columnWidth:.33,
			        	layout:'form',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		labelWidth: 130,
			        		
							name:'gjbz',
							fieldLabel : '国家补助（万元）'
			        	},{
			        		labelWidth: 130,
			        		
							name:'qtzj1',
							fieldLabel : '其他资金1（万元）'
			        	}]
			        },{
			        	columnWidth:.33,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		labelWidth: 145,
			        		
							name:'qzzc',
							fieldLabel : '本级财政配套（万元）'
			        	},{
			        		labelWidth: 145,
			        		
							name:'qtzj2',
							fieldLabel : '其他资金2（万元）'
			        	}]
			        },{
			        	columnWidth:.33,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		labelWidth: 145,
			        		
							name:'qzcjdk',
							fieldLabel : '援藏配套资金（万元）'
			        	},{
			        		labelWidth: 140,
			        		
							name:'bz',
							fieldLabel : '备注'
			        	}]
			        }]
				}]
			},{
				xtype : 'fieldset',
				title : '地勘单位情况',
				style: {
			        width: '95%',
			        marginBottom: '10px'
			    },
			    defaults: { 
					border : false
				},
				fieldDefaults:{
					labelWidth : 70
				},
				items : [{
					layout: 'column',
					border:false,
					defaults: { 
						border : false
					},
			        items: [{
			        	columnWidth:.4,
			        	layout:'form',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '单位名称',
			        		name:'dkdwmc'
			        	}]
			        },{
			        	columnWidth:.2,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '负责人',
			        		name:'dkfzr'
			        	}]
			        },{
			        	columnWidth:.4,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '联系号码',
			        		name:'dklxhm'
			        	}]
			        }]
				}]
			},{
				xtype : 'fieldset',
				title : '设计单位情况',
				style: {
			        width: '95%',
			        marginBottom: '10px'
			    },
			    defaults: { 
					border : false
				},
				fieldDefaults:{
					labelWidth : 70
				},
				items : [{
					layout: 'column',
					border:false,
					defaults: { 
						border : false
					},
			        items: [{
			        	columnWidth:.4,
			        	layout:'form',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '单位名称',
			        		name:'sjdwmc'
			        	}]
			        },{
			        	columnWidth:.2,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '负责人',
			        		name:'sjfzr'
			        	}]
			        },{
			        	columnWidth:.4,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '联系号码',
			        		name:'sjlxhm'
			        	}]
			        }]
				}]
			},{
				xtype : 'fieldset',
				title : '施工单位情况',
				style: {
			        width: '95%',
			        marginBottom: '10px'
			    },
			    defaults: { 
					border : false
				},
				fieldDefaults:{
					labelWidth : 70
				},
				items : [{
					layout: 'column',
					border:false,
					defaults: { 
						border : false
					},
			        items: [{
			        	columnWidth:.4,
			        	layout:'form',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '单位名称',
			        		name:'sgdwmc'
			        	}]
			        },{
			        	columnWidth:.2,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '负责人',
			        		name:'sgfzr'
			        	}]
			        },{
			        	columnWidth:.4,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '联系号码',
			        		name:'sglxhm'
			        	}]
			        }]
				}]
			},{
				xtype : 'fieldset',
				title : '监理单位情况',
				style: {
			        width: '95%',
			        marginBottom: '10px'
			    },
			    defaults: { 
					border : false
				},
				fieldDefaults:{
					labelWidth : 70
				},
				items : [{
					layout: 'column',
					border:false,
					defaults: { 
						border : false
					},
			        items: [{
			        	columnWidth:.4,
			        	layout:'form',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '单位名称',
			        		name:'jldwmc'
			        	}]
			        },{
			        	columnWidth:.2,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '负责人',
			        		name:'jlfzr'
			        	}]
			        },{
			        	columnWidth:.4,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '联系号码',
			        		name:'jllxhm'
			        	}]
			        }]
				}]
			},{
				xtype : 'fieldset',
				title : '进度情况',
				style: {
			        width: '95%',
			        marginBottom: '10px'
			    },
			    defaults: { 
					border : false
				},
				fieldDefaults:{
					labelWidth : 70
				},
				items : [{
					layout: 'column',
					border:false,
					defaults: { 
						border : false
					},
			        items: [{
			        	columnWidth:1,
			        	layout:'form',
			        	labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		labelWidth: 115,
			        		xtype: 'checkboxfield',
			        		fieldLabel: '已开工项目',
			        		name:'ykgxm'
			        	}]
			        },{
			        	columnWidth:.57,
			        	layout:'form',
			        	labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		labelWidth: 115,
			        		xtype : 'datefield',
			        		format : 'Y/m/d',
			        		fieldLabel: '开工时间（起始）',
			        		name:'kgsjks'
			        	},{
			        		labelWidth: 115,
			        		xtype : 'datefield',
			        		format : 'Y/m/d',
			        		fieldLabel: '竣工时间（起始）',
			        		name:'sgsjks'
			        	}]
			        },{
			        	columnWidth:.43,
			        	layout:'form',
			        	labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		labelWidth: 60,
			        		xtype : 'datefield',
			        		format : 'Y/m/d',
			        		fieldLabel: '（结束）',
			        		name:'kgsjjs'
			        	},{
			        		labelWidth: 60,
			        		xtype : 'datefield',
			        		format : 'Y/m/d',
			        		fieldLabel: '（结束）',
			        		name:'sgsjjs'
			        	}]
			        }]
				}]
			}],
			buttons : [ {
				text : '查询',
				type : 'submit',
				handler : function() {
					var me=this.up('window');					
					var paramStr={'start':0};
					var disabledFields = me.query('textfield, combo, checkboxfield');
					for(dt in disabledFields){
						if(disabledFields[dt].getName()=='ykgxm'||disabledFields[dt].getName()=='kgsjks'||disabledFields[dt].getName()=='sgsjks'||disabledFields[dt].getName()=='kgsjjs'||disabledFields[dt].getName()=='sgsjjs'){
							paramStr[disabledFields[dt].getName()]=disabledFields[dt].getValue();
						}else{
							paramStr['reconstruction.'+disabledFields[dt].getName()]=disabledFields[dt].getValue();
						}
					}
					//console.log(paramStr);
					me.relatedStore.loadPage(1,{
						scope: this,
						params:paramStr,
						callback: function(records, operation, success) {
					        if(success){
								if(me.relatedStore.getCount()<1){
									Ext.Msg.alert("提示","查询结果为空 ");
								}
								if(count<1){
									var lisParamStr=paramStr;
									delete lisParamStr.start;
									me.relatedStore.on('beforeload',function(){
										Ext.apply(me.relatedStore.proxy.extraParams,lisParamStr);
									});
								}
								count++;
								me.close();
							}else{
								Ext.Msg.alert("提示","查询失败！");
							}
					    }
					});
				}
			},{
				text:'取消',
				handler:function() {
					this.up('window').close();
				}
			}]
		});

		this.items = [ impForm ];
		this.callParent(arguments);
	}
});