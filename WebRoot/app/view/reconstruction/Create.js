/**
 * @author 赵亚一
 * @comment 
 * @date 2016-8-13 下午02:20:18
 */
Ext.define('KJXM.view.reconstruction.Create', {
	extend : 'KJXM.view.KjWindow',
	//layout:'fit',
	autoShow : true,
	autoScroll : true,
	modal : true,
	frame : true,
	relatedGrid:'cjxm',
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
			        	columnWidth:.5,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		allowBlank:false,
			        		readOnly:true,fieldLabel: '项目名称',
			        		name:'xmmc'
			        	}]
			        },{
			        	columnWidth:.5,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		readOnly:true,fieldLabel: '项目主管单位',
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
			        		readOnly:true,fieldLabel: '建设地点',
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
								data : [[ '整村推进基础设施', '整村推进基础设施' ],[ '特色小城镇基础设施', '特色小城镇基础设施' ],[ '非住宅用房', '非住宅用房' ],[ '水利系统', '水利系统' ],[ '教育系统', '教育系统' ],[ '农牧系统', '农牧系统' ],[ '文化系统', '文化系统' ],[ '卫生系统', '卫生系统' ],[ '特色产业', '特色产业' ],[ '林业系统', '林业系统' ],[ '民宗或文物保护', '民宗或文物保护' ],[ '其他', '其他' ]]
							}),
							displayField : 'text',
							valueField : 'value',
							mode : 'local',
							emptyText : '请选择',
			        		readOnly:true,fieldLabel: '项目类型',			        		
			        		name:'xmlx'
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
			        		readOnly:true,fieldLabel: '建设性质',			        		
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
			        		readOnly:true,fieldLabel: '建设内容及规模',
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
				        		readOnly:true,
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
				        		readOnly:true,
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
				        		readOnly:true,
								name:'gjbz',
								fieldLabel : '国家补助（万元）'
				        	},{
				        		labelWidth: 130,
				        		readOnly:true,
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
				        		readOnly:true,
								name:'qzzc',
								fieldLabel : '本级财政配套（万元）'
				        	},{
				        		labelWidth: 145,
				        		readOnly:true,
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
				        		readOnly:true,
								name:'qzcjdk',
								fieldLabel : '援藏配套资金（万元）'
				        	},{
				        		labelWidth: 140,
				        		readOnly:true,
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
				        		readOnly:true,fieldLabel: '单位名称',
				        		name:'dkdwmc'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '负责人',
				        		name:'dkfzr'
				        	}]
				        },{
				        	columnWidth:.4,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '联系号码',
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
				        		readOnly:true,fieldLabel: '单位名称',
				        		name:'sjdwmc'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '负责人',
				        		name:'sjfzr'
				        	}]
				        },{
				        	columnWidth:.4,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '联系号码',
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
				        	columnWidth:.5,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		//labelWidth: 30,
				        		xtype : 'datefield',
				        		format : 'Y/m/d',
				        		readOnly:true,fieldLabel: '开工时间',
				        		name:'kgsj'
				        	}]
				        },{
				        	columnWidth:.5,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		//labelWidth: 30,
				        		xtype : 'datefield',
				        		format : 'Y/m/d',
				        		readOnly:true,fieldLabel: '竣工时间',
				        		name:'sgsj'
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
					paramStr['reconstruction.'+disabledFields[dt].getName()]=disabledFields[dt].getValue();
				}					
				Ext.Ajax.request({
	                url:'saveReconstruction.action',
	                method:'post',
	                params:paramStr,
	                success:function(res,opt){
	                    var result = Ext.decode(res.responseText);
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