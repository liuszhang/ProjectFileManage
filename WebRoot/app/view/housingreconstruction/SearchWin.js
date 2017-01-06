Ext.define('KJXM.view.housingreconstruction.SearchWin', {
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
		        	columnWidth:.33,
		        	layout:'form',
		        	labelWidth: 30,
		        	defaultType: 'textfield',
		        	items:[{
		        		fieldLabel: '户编号',
		        		name:'hbh'
		        	}]
		        },{
		        	columnWidth:.67,
		        	layout:'form',
		        	bodyPadding:'0 0 0 5',
		        	labelWidth: 30,
		        	defaultType: 'textfield',
		        	items:[{
		        		fieldLabel: '项目名称',
		        		name:'xmmc'
		        	}]
		        }]
			},{
				layout: 'column',
				border:false,
				defaults: { 
					border : false
				},
		        items: [{
		        	columnWidth:.33,
		        	layout:'form',
		        	labelWidth: 30,
		        	defaultType: 'textfield',
		        	items:[{
		        		xtype:'combo',
		        		//forceSelection : true,
		        		triggerAction : 'all',
		        		store : Ext.create('KJXM.store.RegionC2'),
		        		displayField : 'c2',
		        		valueField : 'c2',
		        		queryMode: 'local',
		        		fieldLabel: '乡镇名称',
		        		name:'xzmc',
		        		listeners: {
		                    select : function(combo, record, index){  
		                    	var c3Combo=Ext.getCmp('HRc3Combo');
		                    	//console.log(c3Combo);
		                    	c3Combo.reset();  
		                    	c3Combo.getStore().load({
		                            params: {
		                            	regionPara: combo.value
		                            }  
		                        });     
		                    }    
		                }
		        	}]
		        },{
		        	columnWidth:.34,
		        	layout:'form',
		        	bodyPadding:'0 0 0 5',
		        	labelWidth: 30,
		        	defaultType: 'textfield',
		        	items:[{
		        		xtype:'combo',
		        		id:'HRc3Combo',
		        		//forceSelection : true,
		        		triggerAction : 'all',
		        		store : Ext.create('KJXM.store.RegionC3'),
		        		displayField : 'c3',
		        		valueField : 'c3',
		        		queryMode: 'local',
		        		fieldLabel: '村名',
		        		name:'cm'
		        	}]
		        },{
		        	columnWidth:.33,
		        	layout:'form',
		        	bodyPadding:'0 0 0 5',
		        	labelWidth: 30,
		        	defaultType: 'textfield',
		        	items:[{
		        		fieldLabel: '自然村名',			        		
		        		name:'zrcm'
		        	}]
		        }]
				
			},{
				xtype : 'fieldset',
				title : '家庭情况',
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
			        	columnWidth:.2,
			        	layout:'form',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '户主姓名',
			        		name:'hzxm'
			        	},{
			        		fieldLabel: '家庭劳力',
			        		name:'jtll'
			        	}]
			        },{
			        	columnWidth:.25,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '身份证号码',
			        		name:'sfzh'
			        	},{
			        		fieldLabel: '党员数',
			        		name:'dys'
			        	}]
			        },{
			        	columnWidth:.15,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '家庭人数',
			        		name:'jtrs'
			        	},{
			        		fieldLabel: '牲畜（头只匹）',
			        		name:'sc'
			        	}]
			        },{
			        	columnWidth:.2,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '家庭类型',
			        		name:'jtlx'
			        	},{
			        		fieldLabel: '耕地面积（亩）',
			        		name:'gdmj'
			        	}]
			        },{
			        	columnWidth:.2,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		fieldLabel: '联系号码',
			        		name:'lxhm'
			        	}]
			        }]
				}]
			},{
				xtype : 'fieldset',
				title : '重建情况',
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
			        	columnWidth:.23,
			        	layout:'form',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		xtype : "combo",
							name:'cjlx',
							fieldLabel : '重建类型',
							forceSelection : true,
							triggerAction : 'all',
							store : new Ext.data.SimpleStore({
								fields : [ 'value', 'text' ],
								data : [[ '零星重建', '零星重建' ],[ '原址重建', '原址重建' ],[ '异地搬迁', '异地搬迁' ],[ '整村推进', '整村推进' ]]
							}),
							displayField : 'text',
							valueField : 'value',
							mode : 'local',
							emptyText : '请选择'
			        	}]
			        },{
			        	columnWidth:.22,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		xtype : "combo",
							name:'cjhx',
							fieldLabel : '重建户型',
							forceSelection : true,
							triggerAction : 'all',
							store : new Ext.data.SimpleStore({
								fields : [ 'value', 'text' ],
								data : [[ 'A', 'A' ],[ 'B', 'B' ],[ 'C', 'C' ],[ 'D', 'D' ],[ 'E', 'E' ],[ 'F', 'F' ],[ 'G', 'G' ],[ 'H', 'H' ],[ 'I', 'I' ],[ 'J', 'J' ],[ 'K', 'K' ]]
							}),
							displayField : 'text',
							valueField : 'value',
							mode : 'local',
							emptyText : '请选择'
			        	}]
			        },{
			        	columnWidth:.3,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		xtype : "combo",
							name:'cjdd',
							fieldLabel : '重建地点',
							forceSelection : true,
							triggerAction : 'all',
							store : new Ext.data.SimpleStore({
								fields : [ 'value', 'text' ],
								data : [[ '本村', '本村' ],[ '乡镇所在地', '乡镇所在地' ],[ '格吉林A区', '格吉林A区' ],[ '格吉林B区', '格吉林B区' ],[ '噶旦其仓小区', '噶旦其仓小区' ],[ '曲辖林萨小区', '曲辖林萨小区' ],[ '岗玛小区', '岗玛小区' ],[ '其他', '其他' ]]
							}),
							displayField : 'text',
							valueField : 'value',
							mode : 'local',
							emptyText : '请选择'
			        	}]
			        },{
			        	columnWidth:.25,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		labelWidth: 90,
							xtype : "combo",
							name:'cjfwjg',
							fieldLabel : '重建房屋结构',
							forceSelection : true,
							triggerAction : 'all',
							store : new Ext.data.SimpleStore({
								fields : [ 'value', 'text' ],
								data : [[ '砖木', '砖木' ],[ '砖混', '砖混' ],[ '石木', '石木' ]]
							}),
							displayField : 'text',
							valueField : 'value',
							mode : 'local',
							emptyText : '请选择'
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
			        	columnWidth:.25,
			        	layout:'form',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		labelWidth: 60,
			        		xtype : "combo",
							name:'gcjd',
							fieldLabel : '工程阶段',
							forceSelection : true,
							triggerAction : 'all',
							store : new Ext.data.SimpleStore({
								fields : [ 'value', 'text' ],
								data : [[ '放线阶段', '放线阶段' ],[ '基槽阶段', '基槽阶段' ],[ '基础阶段', '基础阶段' ],[ '主体阶段', '主体阶段' ],[ '竣工阶段', '竣工阶段' ]]
							}),
							displayField : 'text',
							valueField : 'value',
							mode : 'local',
							emptyText : '请选择'
			        	}]
			        },{
			        	columnWidth:.25,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
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
			        		fieldLabel: '是否已验收',
			        		name:'yys'
			        	}]
			        },{
			        	columnWidth:.25,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
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
			        		fieldLabel: '是否已竣工',
			        		name:'yjg'
			        	}]
			        },{
			        	columnWidth:.25,
			        	layout:'form',
			        	//labelWidth: 30,
			        	bodyPadding:'0 0 0 5',
			        	defaultType: 'textfield',
			        	items:[{
			        		labelWidth: 90,
			        		fieldLabel: '列入计划年度',
			        		name:'lrndjh'
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
			        	labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		labelWidth: 115,
			        		xtype: 'checkboxfield',
			        		fieldLabel: '已开工项目',
			        		name:'ykgxm'
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
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		xtype: 'numberfield',
			        		minValue : 0,
			        		fieldLabel: '总投资（元）',
			        		name:'ztz'
			        	},{
			        		xtype: 'numberfield',
			        		minValue : 0,
			        		fieldLabel: '其他资金1（元）',
			        		name:'qtzj1'
			        	}]
			        },{
			        	columnWidth:.25,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		xtype: 'numberfield',
			        		minValue : 0,
			        		fieldLabel: '国家补助（元）',
			        		name:'gjbz'
			        	},{
			        		xtype: 'numberfield',
			        		minValue : 0,
			        		fieldLabel: '其他资金2（元）',
			        		name:'qtzj2'
			        	}]
			        },{
			        	columnWidth:.25,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		xtype: 'numberfield',
			        		minValue : 0,
			        		fieldLabel: '群众自筹（元）',
			        		name:'qzzc'
			        	},{
			        		xtype: 'numberfield',
			        		minValue : 0,
			        		fieldLabel: '其他资金3（元）',
			        		name:'qtzj3'
			        	}]
			        },{
			        	columnWidth:.25,
			        	layout:'form',
			        	//labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		xtype: 'numberfield',
			        		minValue : 0,
			        		fieldLabel: '其中重建贷款（元）',
			        		name:'qzcjdk'
			        	},{
			        		xtype: 'numberfield',
			        		minValue : 0,
			        		fieldLabel: '其他资金4（元）',
			        		name:'qtzj4'
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
			        		labelWidth: 155,
			        		xtype : 'datefield',
			        		format : 'Y/m/d',
			        		fieldLabel: '第一次拨款时间（起始）',
			        		name:'bksjks1'
			        	},{
			        		labelWidth: 155,
			        		xtype : 'datefield',
			        		format : 'Y/m/d',
			        		fieldLabel: '第二次拨款时间（起始）',
			        		name:'bksjks2'
			        	},{
			        		labelWidth: 155,
			        		xtype : 'datefield',
			        		format : 'Y/m/d',
			        		fieldLabel: '第三次拨款时间（起始）',
			        		name:'bksjks3'
			        	},{
			        		labelWidth: 155,
			        		xtype : 'datefield',
			        		format : 'Y/m/d',
			        		fieldLabel: '第四次拨款时间（起始）',
			        		name:'bksjks4'
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
			        		name:'bksjjs1'
			        	},{
			        		labelWidth: 60,
			        		xtype : 'datefield',
			        		format : 'Y/m/d',
			        		fieldLabel: '（结束）',
			        		name:'bksjjs2'
			        	},{
			        		labelWidth: 60,
			        		xtype : 'datefield',
			        		format : 'Y/m/d',
			        		fieldLabel: '（结束）',
			        		name:'bksjjs3'
			        	},{
			        		labelWidth: 60,
			        		xtype : 'datefield',
			        		format : 'Y/m/d',
			        		fieldLabel: '（结束）',
			        		name:'bksjjs4'
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
					var strSingle='bksjks1|bksjks2|bksjks3|bksjks4|bksjjs1|bksjjs2|bksjjs3|bksjjs4';
					for(dt in disabledFields){
						if(disabledFields[dt].getName()=='ykgxm'||disabledFields[dt].getName()=='kgsjks'||disabledFields[dt].getName()=='sgsjks'||disabledFields[dt].getName()=='kgsjjs'||disabledFields[dt].getName()=='sgsjjs'||strSingle.indexOf(disabledFields[dt].getName())!=-1){
							paramStr[disabledFields[dt].getName()]=disabledFields[dt].getValue();
						}else{
							paramStr['housingReconstruction.'+disabledFields[dt].getName()]=disabledFields[dt].getValue();
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