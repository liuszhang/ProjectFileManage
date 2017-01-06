/**
 * @author 赵亚一
 * @comment 
 * @date 2016-8-13 下午02:20:18
 */
Ext.define('KJXM.view.housingreconstruction.Create', {
	extend : 'KJXM.view.KjWindow',
	//layout:'fit',
	autoShow : true,
	autoScroll : true,
	modal : true,
	frame : true,
	relatedGrid:'mfcj',
	border : false,
	width:900,
	items:[{
		xtype: 'tabpanel',
		itemId:'mytabpanel',
		activeTab: 0, // index or id
		items:[{
		    title: '项目基本信息',
		    autoScroll : true,
		    itemId:'mytab0',
		    items:[{
				xtype:'form',
				bodyPadding:5,
				items:[{
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
			        		allowBlank : false,
			        		readOnly:true,fieldLabel: '户编号',
			        		name:'hbh'
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
			        		forceSelection : true,
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
			        	columnWidth:.33,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		xtype:'combo',
			        		id:'HRc3Combo',
			        		forceSelection : true,
			        		triggerAction : 'all',
			        		store : Ext.create('KJXM.store.RegionC3'),
			        		displayField : 'c3',
			        		valueField : 'c3',
			        		queryMode: 'local',
			        		readOnly:true,fieldLabel: '村名',
			        		name:'cm'
			        	}]
			        },{
			        	columnWidth:.33,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		readOnly:true,fieldLabel: '自然村名',			        		
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
				        		readOnly:true,fieldLabel: '户主姓名',
				        		name:'hzxm'
				        	},{
				        		readOnly:true,fieldLabel: '家庭劳力',
				        		name:'jtll'
				        	}]
				        },{
				        	columnWidth:.25,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '身份证号码',
				        		name:'sfzh'
				        	},{
				        		readOnly:true,fieldLabel: '党员数',
				        		name:'dys'
				        	}]
				        },{
				        	columnWidth:.15,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '家庭人数',
				        		name:'jtrs'
				        	},{
				        		readOnly:true,fieldLabel: '牲畜（头只匹）',
				        		name:'sc'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '家庭类型',
				        		name:'jtlx'
				        	},{
				        		readOnly:true,fieldLabel: '耕地面积（亩）',
				        		name:'gdmj'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '联系号码',
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
				        	columnWidth:.2,
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
									data : [[ '零星重建', '零星重建' ],[ '原址重建', '原址重建' ],[ '异地搬迁', '异地搬迁' ]]
								}),
								displayField : 'text',
								valueField : 'value',
								mode : 'local',
								emptyText : '请选择'
				        	}]
				        },{
				        	columnWidth:.2,
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
				        	columnWidth:.35,
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
				        		readOnly:true,fieldLabel: '单位名称',
				        		name:'sgdwmc'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '负责人',
				        		name:'sgfzr'
				        	}]
				        },{
				        	columnWidth:.4,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '联系号码',
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
				        		readOnly:true,fieldLabel: '单位名称',
				        		name:'jldwmc'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '负责人',
				        		name:'jlfzr'
				        	}]
				        },{
				        	columnWidth:.4,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '联系号码',
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
				        	columnWidth:.17,
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
				        	columnWidth:.166,
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
				        		readOnly:true,fieldLabel: '是否已验收',
				        		name:'yys'
				        	}]
				        },{
				        	columnWidth:.166,
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
				        		readOnly:true,fieldLabel: '是否已竣工',
				        		name:'yjg'
				        	}]
				        },{
				        	columnWidth:.166,
				        	layout:'form',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '列入计划年度',
				        		name:'lrndjh'
				        	}]
				        },{
				        	columnWidth:.166,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		labelWidth: 30,
				        		xtype : 'datefield',
				        		format : 'Y/m/d',
				        		readOnly:true,fieldLabel: '开工时间',
				        		name:'kgsj'
				        	}]
				        },{
				        	columnWidth:.166,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		labelWidth: 30,
				        		xtype : 'datefield',
				        		format : 'Y/m/d',
				        		readOnly:true,fieldLabel: '竣工时间',
				        		name:'sgsj'
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
				        		readOnly:true,fieldLabel: '总投资（元）',
				        		name:'ztz'
				        	},{
				        		xtype: 'numberfield',
				        		minValue : 0,
				        		readOnly:true,fieldLabel: '其他资金1（元）',
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
				        		readOnly:true,fieldLabel: '国家补助（元）',
				        		name:'gjbz'
				        	},{
				        		xtype: 'numberfield',
				        		minValue : 0,
				        		readOnly:true,fieldLabel: '其他资金2（元）',
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
				        		readOnly:true,fieldLabel: '群众自筹（元）',
				        		name:'qzzc'
				        	},{
				        		xtype: 'numberfield',
				        		minValue : 0,
				        		readOnly:true,fieldLabel: '其他资金3（元）',
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
				        		readOnly:true,fieldLabel: '其中重建贷款（元）',
				        		name:'qzcjdk'
				        	},{
				        		xtype: 'numberfield',
				        		minValue : 0,
				        		readOnly:true,fieldLabel: '其他资金4（元）',
				        		name:'qtzj4'
				        	}]
				        }]
					}]
				}]
		    }]
		    
		}]
	}],
	buttons:[{
		text:'保存',
		handler : function() {
			var me=this;
			var fundingForm=this.up().up().down('form');
			var grid=Ext.getCmp(me.up('window').relatedGrid);
			var store=grid.getStore();
			if(fundingForm.isValid()){
				var disabledFields = fundingForm.query('textfield');
				var paramStr={};
				for(dt in disabledFields){
					paramStr['housingReconstruction.'+disabledFields[dt].getName()]=disabledFields[dt].getValue();
				}					
				Ext.Ajax.request({
	                url:'saveHousingReconstruction.action',
	                method:'post',
	                params:paramStr,
	                success:function(res,opt){
	                    var result = Ext.decode(res.responseText);
	                    //console.dir(result);
	                    if(result.success==true){
	                    	Ext.Msg.alert('提示',result.message);
	                    	me.up('window').close();
	                    	store.reload();
	                    }else{
	                    	Ext.Msg.alert('提示',result.message);
	                    }
	                },
	                failure:function(res,opt){
	                    Ext.Msg.alert('提示','服务访问不成功');
	                }
	            });
			}
		}
	}],
	initComponent:function(){
		var me=this;
		this.callParent(arguments);
		var fundingForm=me.down('form');
		var disabledFields = fundingForm.query('textfield');
		for(dt in disabledFields){
			disabledFields[dt].setReadOnly(false);
		}
	}
})