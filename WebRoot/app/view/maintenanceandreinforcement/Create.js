/**
 * @author 赵亚一
 * @comment 
 * @date 2016-8-13 下午02:20:18
 */
Ext.define('KJXM.view.maintenanceandreinforcement.Create', {
	extend : 'KJXM.view.KjWindow',
	//layout:'fit',
	autoShow : true,
	autoScroll : true,
	modal : true,
	frame : true,
	relatedGrid:'wxjg',
	border : false,
	width:900,
	items:[{
		xtype: 'tabpanel',
		activeTab: 1, // index or id
		items:[{
		    title: '项目基本信息',
		    autoScroll : true,
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
			        	columnWidth:.3,
			        	layout:'form',
			        	labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		allowBlank : false,
			        		readOnly:true,fieldLabel: '户编号',
			        		name:'hbh'
			        	}]
			        },{
			        	columnWidth:.3,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		readOnly:true,fieldLabel: '编制单位',
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
			        		readOnly:true,fieldLabel: '受损程度',
			        		name:'sscd'
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
				        	columnWidth:.2,
				        	layout:'form',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '地址',
				        		name:'dz'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		xtype:'combo',
				        		forceSelection : true,
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
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		xtype:'combo',
				        		id:'MAIc3Combo',
				        		forceSelection : true,
				        		triggerAction : 'all',
				        		store : Ext.create('KJXM.store.RegionC3'),
				        		displayField : 'c3',
				        		valueField : 'c3',
				        		queryMode: 'local',
				        		readOnly:true,fieldLabel: '行政村',
				        		name:'xzc'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '自然村',
				        		name:'zrc'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '门牌号',
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
				        	columnWidth:.2,
				        	layout:'form',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '户主姓名',
				        		name:'hzxm'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '身份证号码',
				        		name:'sfzh'
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
				        },{
				        	columnWidth:.13,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '家庭人口',
				        		labelWidth: 60,
				        		name:'jtrk'
				        	}]
				        },{
				        	columnWidth:.12,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '劳动力',
				        		labelWidth: 50,
				        		name:'ldl'
				        	}]
				        },{
				        	columnWidth:.15,
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
				        		readOnly:true,fieldLabel: '是否低保户',
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
				        	columnWidth:.2,
				        	layout:'form',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '建造年代',
				        		name:'jznd'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '房屋结构',
				        		name:'fwjg'
				        	}]
				        },{
				        	columnWidth:.1,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '层数',
				        		labelWidth: 30,
				        		name:'cs'
				        	}]
				        },{
				        	columnWidth:.15,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '建筑面积',
				        		labelWidth: 60,
				        		name:'jzmj'
				        	}]
				        },{
				        	columnWidth:.17,
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
				        		readOnly:true,fieldLabel: '是否安居工程',
				        		labelWidth: 85,
				        		name:'sfajgc'
				        	}]
				        },{
				        	columnWidth:.18,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '国家补助资金',
				        		labelWidth: 85,
				        		name:'gjbzzj'
				        	}]
				        }]
					}]
				},{
					xtype : 'fieldset',
					title : '震后房屋受损情况',
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
				        	defaultType: 'textareafield',
				        	items:[{
				        		xtype: 'label',
				        		cls :'x-form-item-label',
				        		text: '是否结构受损'
				        	},{
				        		hideLabel : true,
				        		readOnly:true,fieldLabel: '是否结构受损',
				        		name:'sfjgss'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textareafield',
				        	items:[{
				        		xtype: 'label',
				        		cls :'x-form-item-label',
				        		text: '是否非承重构件受损'
				        	},{
				        		hideLabel : true,
				        		readOnly:true,fieldLabel: '是否非承重构件受损',
				        		name:'sffczgjss'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textareafield',
				        	items:[{
				        		xtype: 'label',
				        		cls :'x-form-item-label',
				        		text: '是否地基沉降'
				        	},{
				        		hideLabel : true,
				        		readOnly:true,fieldLabel: '是否地基沉降',
				        		name:'sfdjcj'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textareafield',
				        	items:[{
				        		xtype: 'label',
				        		cls :'x-form-item-label',
				        		text: '受损情况'
				        	},{
				        		hideLabel : true,
				        		readOnly:true,fieldLabel: '受损情况',
				        		name:'ssqk'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textareafield',
				        	items:[{
				        		xtype: 'label',
				        		cls :'x-form-item-label',
				        		text: '震后房屋受损照片'
				        	},{
				        		hideLabel : true,
				        		readOnly:true,fieldLabel: '震后房屋受损照片',
				        		name:'zhfwsszp'
				        	}]
				        }]
					}]
				},{
					xtype : 'fieldset',
					title : '震后（维修加固）情况',
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
				        	columnWidth:.8,
				        	layout:'form',
				        	//labelWidth: 30,
				        	defaultType: 'textareafield',
				        	items:[{
				        		xtype: 'label',
				        		cls :'x-form-item-label',
				        		text: '维修情况描述及验收情况'
				        	},{
				        		hideLabel : true,
				        		readOnly:true,fieldLabel: '维修情况描述及验收情况',
				        		name:'wxqkmsjysqk'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textareafield',
				        	items:[{
				        		xtype: 'label',
				        		cls :'x-form-item-label',
				        		text: '维修过程图片'
				        	},{
				        		hideLabel : true,
				        		readOnly:true,fieldLabel: '维修过程图片',
				        		name:'wxgctp'
				        	}]
				        }]
					}]
				},{
					xtype : 'fieldset',
					title : '资金拨付与进度情况',
					style: {
				        width: '95%',
				        marginBottom: '10px'
				    },
				    defaults: { 
						border : false
					},
					fieldDefaults:{
						labelWidth : 135
					},
					items : [{
						layout: 'column',
						border:false,
						defaults: { 
							border : false
						},
				        items: [{
				        	columnWidth:.35,
				        	layout:'form',
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '预付款拨付比例（%）',
				        		name:'yfkbfbl'
				        	},{
				        		readOnly:true,fieldLabel: '验收结算金额（元）',
				        		name:'ysjsje'
				        	},{
				        		readOnly:true,fieldLabel: '结余资金（元）',
				        		name:'jyzj'
				        	},{
				        		readOnly:true,fieldLabel: '列入计划年度',
				        		name:'lrjhnd'
				        	},{
				        		readOnly:true,fieldLabel: '验收结果',
				        		name:'ysjg'
				        	}]
				        },{
				        	columnWidth:.35,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '预付款拨付金额（元）',
				        		name:'yfkbfje'
				        	},{
				        		readOnly:true,fieldLabel: '领款人',
				        		name:'lkr'
				        	},{
				        		readOnly:true,fieldLabel: '经办人',
				        		name:'jbr'
				        	},{
				        		readOnly:true,fieldLabel: '开工时间',
				        		name:'kgsj'
				        	},{
				        		readOnly:true,fieldLabel: '竣工时间',
				        		name:'jgsj'
				        	}]
				        },{
				        	columnWidth:.3,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textareafield',
				        	items:[{
				        		xtype: 'label',
				        		cls :'x-form-item-label',
				        		text: '验收通过后的图片'
				        	},{
				        		hideLabel : true,
				        		readOnly:true,fieldLabel: '验收通过后的图片',
				        		name:'ystghdtp'
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
					paramStr['maintenanceAndReinforcement.'+disabledFields[dt].getName()]=disabledFields[dt].getValue();
				}					
				Ext.Ajax.request({
	                url:'saveMaintenanceAndReinforcement.action',
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