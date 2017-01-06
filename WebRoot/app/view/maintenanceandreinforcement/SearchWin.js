Ext.define('KJXM.view.maintenanceandreinforcement.SearchWin', {
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
		        	columnWidth:.3,
		        	layout:'form',
		        	labelWidth: 30,
		        	defaultType: 'textfield',
		        	items:[{
		        		allowBlank : false,
		        		fieldLabel: '户编号',
		        		name:'hbh'
		        	}]
		        },{
		        	columnWidth:.3,
		        	layout:'form',
		        	bodyPadding:'0 0 0 5',
		        	labelWidth: 30,
		        	defaultType: 'textfield',
		        	items:[{
		        		fieldLabel: '编制单位',
		        		name:'bzdw'
		        	}]
		        },{
		        	columnWidth:.4,
		        	layout:'form',
		        	bodyPadding:'0 0 0 5',
		        	labelWidth: 30,
		        	defaultType: 'textfield',
		        	items:[{
		        		labelWidth: 60,
		        		xtype : "combo",
						forceSelection : true,
						triggerAction : 'all',
						store : new Ext.data.SimpleStore({
							fields : [ 'value', 'text' ],
							data : [[ '重度', '重度' ],[ '中度', '中度' ],[ '轻度', '轻度' ],[ '其他', '其他' ]]
						}),
						displayField : 'text',
						valueField : 'value',
						mode : 'local',
						emptyText : '请选择',
		        		fieldLabel: '受损程度',
		        		name:'sscd'
		        	}]
		        },{
		        	columnWidth:1,
		        	layout:'form',
		        	labelWidth: 30,
		        	defaultType: 'textfield',
		        	items:[{
		        		fieldLabel: '项目名称',
		        		name:'xmmc'
		        	}]
		        }]
			},{
				xtype : 'fieldset',
				title : '地址',
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
			        	columnWidth:.25,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		xtype:'combo',
			        		//forceSelection : true,
			        		triggerAction : 'all',
			        		store : Ext.create('KJXM.store.RegionC2'),
			        		displayField : 'c2',
			        		valueField : 'c2',
			        		queryMode: 'local',
			        		listeners: {
			                    select : function(combo, record, index){  
			                    	var c3Combo=Ext.getCmp('MAIc3Combo');
			                    	//console.log(c3Combo);
			                    	c3Combo.reset();  
			                    	c3Combo.getStore().load({
			                            params: {
			                            	regionPara: combo.value
			                            }  
			                        });     
			                    }    
			                },
			                fieldLabel: '乡（镇）',
			        		name:'xz'
			        	}]
			        },{
			        	columnWidth:.25,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		xtype:'combo',
			        		id:'MAIc3Combo',
			        		//forceSelection : true,
			        		triggerAction : 'all',
			        		store : Ext.create('KJXM.store.RegionC3'),
			        		displayField : 'c3',
			        		valueField : 'c3',
			        		queryMode: 'local',
			        		fieldLabel: '行政村',
			        		name:'xzc'
			        	}]
			        },{
			        	columnWidth:.25,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '自然村',
			        		name:'zrc'
			        	}]
			        },{
			        	columnWidth:.25,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '门牌号',
			        		name:'mph'
			        	}]
			        }]
				}]
			},{
				xtype : 'fieldset',
				title : '户主信息和家庭信息',
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
			        	columnWidth:.3,
			        	layout:'form',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '户主姓名',
			        		name:'hzxm'
			        	},{
			        		fieldLabel: '家庭人口',
			        		labelWidth: 60,
			        		name:'jtrk'
			        	}]
			        },{
			        	columnWidth:.4,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '身份证号码',
			        		name:'sfzh'
			        	},{
			        		fieldLabel: '劳动力',
			        		labelWidth: 50,
			        		name:'ldl'
			        	}]
			        },{
			        	columnWidth:.3,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '联系号码',
			        		name:'lxhm'
			        	},{
			        		xtype : "combo",
							forceSelection : true,
							triggerAction : 'all',
							store : new Ext.data.SimpleStore({
								fields : [ 'value', 'text' ],
								data : [[ '是', '是' ],[ '否', '否' ]]
							}),
							displayField : 'text',
							valueField : 'value',
							mode : 'local',
							emptyText : '请选择',
			        		fieldLabel: '是否低保户',
			        		name:'sfdbh'
			        	}]
			        }]
				}]
			},{
				xtype : 'fieldset',
				title : '房屋基本信息',
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
			        	columnWidth:.3,
			        	layout:'form',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '建造年代',
			        		name:'jznd'
			        	},{
			        		fieldLabel: '建筑面积',
			        		labelWidth: 60,
			        		name:'jzmj'
			        	}]
			        },{
			        	columnWidth:.4,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '房屋结构',
			        		name:'fwjg'
			        	},{
			        		xtype : "combo",
							forceSelection : true,
							triggerAction : 'all',
							store : new Ext.data.SimpleStore({
								fields : [ 'value', 'text' ],
								data : [[ '是', '是' ],[ '否', '否' ]]
							}),
							displayField : 'text',
							valueField : 'value',
							mode : 'local',
							emptyText : '请选择',
			        		fieldLabel: '是否安居工程',
			        		labelWidth: 85,
			        		name:'sfajgc'
			        	}]
			        },{
			        	columnWidth:.3,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '层数',
			        		labelWidth: 30,
			        		name:'cs'
			        	},{
			        		fieldLabel: '国家补助资金',
			        		labelWidth: 85,
			        		name:'gjbzzj'
			        	}]
			        }]
				}]
			},{
				layout: 'column',
				border:false,
				defaults: {
					border : false
				},
		        items: [{
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
			}],
			buttons : [ {
				text : '查询',
				type : 'submit',
				handler : function() {
					var me=this.up('window');					
					var paramStr={'start':0};
					var disabledFields = me.query('textfield, combo');
					for(dt in disabledFields){
						if(disabledFields[dt].getName()=='kgsjks'||disabledFields[dt].getName()=='sgsjks'||disabledFields[dt].getName()=='kgsjjs'||disabledFields[dt].getName()=='sgsjjs'){
							paramStr[disabledFields[dt].getName()]=disabledFields[dt].getValue();
						}else{
							paramStr['maintenanceAndReinforcement.'+disabledFields[dt].getName()]=disabledFields[dt].getValue();
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