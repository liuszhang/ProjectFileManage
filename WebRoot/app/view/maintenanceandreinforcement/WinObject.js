/**
 * @author 赵亚一
 * @comment 
 * @date 2016-8-13 下午02:20:18
 */
Ext.define('KJXM.view.maintenanceandreinforcement.WinObject', {
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
			        		readOnly:true,fieldLabel: '编制单位',
			        		name:'bzdw'
			        	}]
			        },{
			        	columnWidth:.3,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		readOnly:true,fieldLabel: '受损程度',
			        		name:'sscd'
			        	}]
			        },{
			        	columnWidth:.4,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		readOnly:true,fieldLabel: '项目名称',
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
				        		readOnly:true,fieldLabel: '乡（镇）',
				        		name:'xz'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
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
		    
		},{
		    title: '项目信息图片',
		    autoScroll : true,
		    dockedItems:[{
				xtype:'toolbar',
				dock:'bottom',
				ui: 'footer',
				items:['->',{
					text:'上传文件',
					handler : function() {
						var uploadWin=Ext.create('KJXM.view.upload.SingleUploadWin',{
						    title : '上传文件',
						    autoShow : true,
						    fileModel:'维修加固一户一档',
							xmmc:this.up('window').recordStr.get('xmmc')+this.up('window').recordStr.get('hbh'),
							lx:'维修加固项目信息图片'
						});
						uploadWin.on('close',function(){
							Ext.data.StoreManager.lookup('MaintenanceAndReinforcementImg').reload();
						});
					}
				}]
			}],
		    items:[{
		    	xtype: 'dataview',
		    	height : 620,
		    	itemSelector: 'tr.printcontent',
		    	store:Ext.create('KJXM.store.MaintenanceAndReinforcementImg'),
			    tpl: Ext.create('Ext.XTemplate',
			    		'<div width="880"><table border="1" cellspacing="0" cellpadding="0" width="868" style="font-size:14px;">',
			    			'<tr><th style="font-size:20px;text-align:center;padding: 10px;">',
			    				'项目信息图片',  
			    			'</th></tr>',
			    			'<tpl for=".">', 
				    			'<tr><td align="center"><img src="{img}" width="865" alt="图片"></td></tr>',
				    			'<tr><td align="center" style="text-align:center;padding: 5px;"><a href="{img}" target="_blank">查看</a>&nbsp;&nbsp;',
				    			'<input style="cursor:pointer;color:blue;background-color: #FFFFFF;border: 0px none;font-size:14px;text-decoration:underline;" type="button" value="打印" onclick=javascript:printimage("{img}"); /></td>',//打印函数在header
				    			'</td></tr>',
			    	        '</tpl>',
			    	    '</table></div>'
		        )
		    }]
		    
		},{
		    title: '验收文件图片',
		    autoScroll : true,
		    dockedItems:[{
				xtype:'toolbar',
				dock:'bottom',
				ui: 'footer',
				items:['->',{
					text:'上传文件',
					handler : function() {
						var uploadWin=Ext.create('KJXM.view.upload.SingleUploadWin',{
						    title : '上传文件',  
						    autoShow : true,
						    fileModel:'维修加固一户一档',
							xmmc:this.up('window').recordStr.get('xmmc')+this.up('window').recordStr.get('hbh'),
							lx:'维修加固验收文件图片'
						});
						uploadWin.on('close',function(){
							Ext.data.StoreManager.lookup('MaintenanceAndReinforcementMtl').reload();
						});
					}
				}]
			}],
		    items:[{
		    	xtype: 'dataview',
		    	height : 620,
		    	itemSelector: 'tr.printcontent',
		    	store:Ext.create('KJXM.store.MaintenanceAndReinforcementMtl'),
			    tpl: Ext.create('Ext.XTemplate',
			    		'<div width="900"><table border="1" cellspacing="0" cellpadding="0" width="868" style="font-size:14px;">',
			    			'<tr><th style="font-size:20px;text-align:center;padding: 10px;">',
			    				'验收文件图片',  
			    			'</th></tr>',
			    			'<tpl for=".">', 
				    			'<tr><td align="center"><img src="{img}" width="865" alt="图片"></td></tr>',
				    			'<tr><td align="center" style="text-align:center;padding: 5px;"><a href="{img}" target="_blank">查看</a>&nbsp;&nbsp;',
				    			'<input style="cursor:pointer;color:blue;background-color: #FFFFFF;border: 0px none;font-size:14px;text-decoration:underline;" type="button" value="打印" onclick=javascript:printimage("{img}"); /></td>',//打印函数在header
				    			'</td></tr>',
			    	        '</tpl>',
			    	    '</table></div>'
		        )
		    }]
		    
		}]
	}],
	initComponent:function(){
		var me=this;
		var HRImgStore = Ext.data.StoreManager.lookup('MaintenanceAndReinforcementImg');
		HRImgStore.load({
		    params:{
		    	'maintenanceAndReinforcement.xmmc':me.recordStr.get('xmmc'),
		    	'maintenanceAndReinforcement.hbh':me.recordStr.get('hbh')
		    }
		});
		var HRFileStore = Ext.data.StoreManager.lookup('MaintenanceAndReinforcementMtl');
		HRFileStore.load({
		    params:{
		    	'maintenanceAndReinforcement.xmmc':me.recordStr.get('xmmc'),
		    	'maintenanceAndReinforcement.hbh':me.recordStr.get('hbh')
		    }
		});
		
		this.callParent(arguments);
	}
})