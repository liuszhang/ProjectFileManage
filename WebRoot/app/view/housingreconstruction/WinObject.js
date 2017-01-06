/**
 * @author 赵亚一
 * @comment 
 * @date 2016-8-13 下午02:20:18
 */
Ext.define('KJXM.view.housingreconstruction.WinObject', {
	extend : 'KJXM.view.KjWindow',
	templateName:'资金划拨记录输入模板.xls',
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
			        	columnWidth:.3,
			        	layout:'form',
			        	labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		readOnly:true,fieldLabel: '户编号',
			        		name:'hbh'
			        	}]
			        },{
			        	columnWidth:.5,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		labelWidth: 80,
			        		readOnly:true,fieldLabel: '项目名称',
			        		name:'xmmc'
			        	}]
			        },{
			        	columnWidth:.2,
			        	layout:'form',
			        	bodyPadding:'0 0 0 5',
			        	labelWidth: 30,
			        	defaultType: 'textfield',
			        	items:[{
			        		labelWidth: 80,
			        		readOnly:true,fieldLabel: '受损程度',
			        		name:'sscd'
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
			        		readOnly:true,fieldLabel: '地址情况',
			        		
			        		name:'dz'
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
				        	columnWidth:.2,
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
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '家庭人数',
				        		name:'jtrs'
				        	},{
				        		labelWidth: 100,
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
				        		labelWidth: 100,
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
				        		readOnly:true,fieldLabel: '重建类型',
				        		name:'cjlx'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '重建户型',
				        		name:'cjhx'
				        	}]
				        },{
				        	columnWidth:.35,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '重建地点',
				        		name:'cjdd'
				        	}]
				        },{
				        	columnWidth:.25,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		labelWidth: 90,
				        		readOnly:true,fieldLabel: '重建房屋结构',
				        		name:'cjfwjg'
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
				        		readOnly:true,fieldLabel: '工程阶段',
				        		name:'gcjd'
				        	}]
				        },{
				        	columnWidth:.166,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
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
				        		readOnly:true,fieldLabel: '是否已竣工',
				        		name:'yjg'
				        	}]
				        },{
				        	columnWidth:.166,
				        	layout:'form',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		labelWidth: 90,
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
				        		//xtype : 'datefield',
				        		//format : 'Y/m',
				        		//readOnly : true,
				        		readOnly:true,fieldLabel: '开工时间',
				        		name:'kgsjDate'
				        	}]
				        },{
				        	columnWidth:.166,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		//xtype : 'datefield',
				        		//format : 'Y-m-dTh:m:s',
				        		//readOnly : true,
				        		readOnly:true,fieldLabel: '竣工时间',
				        		name:'sgsjDate'
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
				        		labelWidth: 110,
				        		readOnly:true,fieldLabel: '总投资（元）',
				        		name:'ztz'
				        	},{
				        		labelWidth: 149,
				        		readOnly:true,fieldLabel: '本级财政自筹资金（元）',
				        		name:'qtzj1'
				        	}]
				        },{
				        	columnWidth:.25,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		labelWidth: 110,
				        		readOnly:true,fieldLabel: '国家补助（元）',
				        		name:'gjbz'
				        	},{
				        		labelWidth: 140,
				        		readOnly:true,fieldLabel: '农牧三配套资金（元）',
				        		name:'qtzj2'
				        	}]
				        },{
				        	columnWidth:.25,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		labelWidth: 110,
				        		readOnly:true,fieldLabel: '群众自筹（元）',
				        		name:'qzzc'
				        	},{
				        		labelWidth: 140,
				        		readOnly:true,fieldLabel: '棚户区改造资金（元）',
				        		name:'qtzj3'
				        	}]
				        },{
				        	columnWidth:.25,
				        	layout:'form',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		labelWidth: 130,
				        		readOnly:true,fieldLabel: '其中重建贷款（元）',
				        		name:'qzcjdk'
				        	},{
				        		labelWidth: 110,
				        		readOnly:true,fieldLabel: '其他资金（元）',
				        		name:'qtzj4'
				        	}]
				        }]
					}/*,{
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
				        		xtype:'textarea',
				        		readOnly:true,fieldLabel: '其他资金（元）',
				        		name:'qtzj1'
				        	}]
				        }]
					}*/]
				}]
		    }]
		    
		}]
	}],
	initComponent:function(){
		var me=this;
		//var HRImgStore = Ext.data.StoreManager.lookup('HousingReconstructionImg');
		var HRImgStore = Ext.create('KJXM.store.HousingReconstructionImg');
		//HRImgStore.load();
		HRImgStore.load({
		    params:{
		    	'housingReconstruction.xmmc':me.recordStr.get('xmmc'),
		    	'housingReconstruction.hbh':me.recordStr.get('hbh')
		    }
		});
		//console.log(this.down('tabpanel'));
		var HRFileStore=Ext.create('KJXM.store.HousingReconstructionFile');
		HRFileStore.load({
		    params:{
		    	'housingReconstruction.xmmc':me.recordStr.get('xmmc'),
		    	'housingReconstruction.hbh':me.recordStr.get('hbh')
		    }
		});
		
		this.callParent(arguments);
		var imageTpl = new Ext.XTemplate(
				'<div id="testp1" width="900"><table border="0" bordercolor="#000000" cellspacing="0" style="border-collapse:collapse;font-size:14px;text-align:center;" width="870">',
	    			'<tr><th colspan="3" style="font-size:24px;text-align:center;padding: 10px;">',
	    				'定日县民房恢复重建建设图片<br /><span style="font-size:12px;float:left;padding: 2px;">户编号：'+me.recordStr.get('hbh')+'</span>',  
	    			'</th></tr>',
	    			'<tpl for=".">', // 处理数据的子节点
	    				'{% if (xindex > 3) break; %}',
	    	        	'<tr><th width="150" style="text-align: center;font-size:12px;padding: 1px; border:solid #000 1px;">（{#}）{name}</th>',// 图片名称
	    	        	'<td align="center" style="text-align: center;font-size:12px;padding: 5px; border:solid #000 1px;"><img src="{img}" width="550" alt="图片">',//图片
	    	        	//'<br />',
	    	        	//'<a href="{img}" target="_blank">查看</a>&nbsp;&nbsp;',//查看
	    	        	//'<input style="cursor:pointer;color:blue;background-color: #FFFFFF;border: 0px none;font-size:14px;text-decoration:underline;" type="button" value="打印" onclick=javascript:printimage("{img}"); />',//打印函数在header
	    	        	'</td>',
	    	        	'</tr>',
/*	    	        	'<tr><td style="text-align: center;font-size:12px;padding: 5px; border:solid #000 1px;">{person}</td></tr>',//验收（鉴定）人
	    	        	'<tr><th height="30" style="text-align: center;font-size:12px;padding: 5px; border:solid #000 1px;">结论</th></tr>',
	    	        	'<tr><td style="text-align: center;font-size:12px;padding: 5px; border:solid #000 1px;">{result}</td></tr>',//结论
*/	    	        '</tpl>',
	    	    '</table></div>',
	    	    '<div id="testp2" width="900"><table border="0" bordercolor="#000000" cellspacing="0" style="border-collapse:collapse;font-size:14px;text-align:center;" width="870">',
    			'<tr><th colspan="3" style="font-size:24px;text-align:center;padding: 10px;">',
    				'定日县民房恢复重建建设图片<br><span style="font-size:12px;float:left;padding: 2px;">户编号：'+me.recordStr.get('hbh')+'</span>',  
    			'</th></tr>',
    			'<tpl for=".">', // 处理数据的子节点
    				'{% if (xindex < 4) continue; %}',
    				'{% if (xindex > 6) break; %}',
    	        	'<tr><th width="150" style="text-align: center;font-size:12px;padding: 1px; border:solid #000 1px;">（{#}）{name}</th>',// 图片名称
    	        	'<td align="center" style="text-align: center;font-size:12px;padding: 5px; border:solid #000 1px;"><img src="{img}" width="550" alt="图片">',
    	        	//'<br />',//图片
    	        	//'<a href="{img}" target="_blank">查看</a>&nbsp;&nbsp;',//查看
    	        	//'<input type=button value="查看" onclick="window.open({img})">',//查看
    	        	//'<input style="cursor:pointer;color:blue;background-color: #FFFFFF;border: 0px none;font-size:14px;text-decoration:underline;" type="button" value="打印" onclick=javascript:printimage("{img}"); />',//打印函数在header
    	        	'</td>',
    	        	'</tr>',
    	        	/*'<tr><td style="text-align: center;font-size:12px;padding: 5px; border:solid #000 1px;">{person}</td></tr>',//验收（鉴定）人
    	        	'<tr><th height="30" style="text-align: center;font-size:12px;padding: 5px; border:solid #000 1px;">结论</th></tr>',
    	        	'<tr><td style="text-align: center;font-size:12px;padding: 5px; border:solid #000 1px;">{result}</td></tr>',//结论
*/    	        '</tpl>',
    	    '</table></div>'
			);
		
		var dtView=Ext.create('Ext.panel.Panel',{
		    title: '重建建设图片',
		    autoScroll : true,
		    dockedItems:[{
				xtype:'toolbar',
				dock:'bottom',
				ui: 'footer',
				items:['->',{
					text:'上传文件',
					handler : function() {
						var uploadWin=Ext.create('KJXM.view.upload.UploadWindow',{
						    title : '上传文件',  
						    autoShow : true,
						    fileNumLimit:6,
						    fileModel:'民房重建一户一档',
							xmmc:this.up('window').recordStr.get('xmmc')+this.up('window').recordStr.get('hbh'),
							lx:'民房重建建设图片'
						});
						uploadWin.on('close',function(){
							HRImgStore.reload();
						});
					}
				},{
					text:'输出打印第一页',
					handler : function() {
						//console.log(Ext.get("testp1").dom);
						var titleHtml = '<html><head><link rel="stylesheet" type="text/css" href="css/print.css"></head><body>';
						titleHtml = titleHtml+Ext.get("testp1").dom.innerHTML;
						titleHtml = titleHtml+'</body></html>';
						//console.log(titleHtml);
						var newwin = window.open("printer.html", "", "");
				  		newwin.document.write(titleHtml);
				  		newwin.document.location.reload();
				  		newwin.print();
					}
				},{
					text:'输出打印第二页',
					handler : function() {
						var titleHtml = '<html><head><link rel="stylesheet" type="text/css" href="css/print.css"></head><body>';
						titleHtml = titleHtml+Ext.get("testp2").dom.innerHTML;
						titleHtml = titleHtml+'</body></html>';
						var newwin = window.open("printer.html", "", "");
				  		newwin.document.write(titleHtml);
				  		newwin.document.location.reload();
				  		newwin.print();
					}
				}]
			}],
		    items:[{
		    	xtype: 'dataview',
		    	height : 620,
		    	store:HRImgStore,
			    tpl: imageTpl,
			    itemSelector: 'tr.printcontent'
		    }]
		    
		});
		this.down('tabpanel').add(dtView);
		
		var fundingStore=Ext.create('KJXM.store.Funding');
		var zjhbjfTab=Ext.create('Ext.panel.Panel',{
		    title: '资金划拨记录',
		    items:[{
				xtype:'form',
				bodyPadding:5,
				items:[{
					xtype : 'label',
					html:'<div width="900" style="font-size:20px;text-align:center;font-weight:bolder;padding: 2px;">资金划拨记录</div>'
	        	},{
					xtype : 'label',
	        		html:"户编号："+me.recordStr.get('hbh')+"<p>"
	        	},{
					xtype : 'fieldset',
					title : '第一次拨款',
					style: {
				        width: '95%',
				        marginBottom: '10px'
				    },
				    defaults: { 
						border : false
					},
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
				        	columnWidth:.2,
				        	layout:'form',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '金额',
				        		name:'je1'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '总工程款百分比',
				        		labelWidth: 100,
				        		name:'zgck1'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '国家补助',
				        		name:'gjbz1'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '户主自筹',
				        		name:'hzzc1'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '拨款时间',
				        		name:'bksj1Date'
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
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '备注',
				        		name:'bz1'
				        	}]
				        }]
					}]
				},{
					xtype : 'fieldset',
					title : '第二次拨款',
					style: {
				        width: '95%',
				        marginBottom: '10px'
				    },
				    defaults: { 
						border : false
					},
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
				        	columnWidth:.2,
				        	layout:'form',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '金额',
				        		name:'je2'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '总工程款百分比',
				        		labelWidth: 100,
				        		name:'zgck2'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '国家补助',
				        		name:'gjbz2'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '户主自筹',
				        		name:'hzzc2'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '拨款时间',
				        		name:'bksj2Date'
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
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '备注',
				        		name:'bz2'
				        	}]
				        }]
					}]
				},{
					xtype : 'fieldset',
					title : '第三次拨款',
					style: {
				        width: '95%',
				        marginBottom: '10px'
				    },
				    defaults: { 
						border : false
					},
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
				        	columnWidth:.2,
				        	layout:'form',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '金额',
				        		name:'je3'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '总工程款百分比',
				        		labelWidth: 100,
				        		name:'zgck3'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '国家补助',
				        		name:'gjbz3'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '户主自筹',
				        		name:'hzzc3'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '拨款时间',
				        		name:'bksj3Date'
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
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '备注',
				        		name:'bz3'
				        	}]
				        }]
					}]
				},{
					xtype : 'fieldset',
					title : '第四次拨款',
					style: {
				        width: '95%',
				        marginBottom: '10px'
				    },
				    defaults: { 
						border : false
					},
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
				        	columnWidth:.2,
				        	layout:'form',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '金额',
				        		name:'je4'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '总工程款百分比',
				        		labelWidth: 100,
				        		name:'zgck4'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '国家补助',
				        		name:'gjbz4'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '户主自筹',
				        		name:'hzzc4'
				        	}]
				        },{
				        	columnWidth:.2,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,fieldLabel: '拨款时间',
				        		name:'bksj4Date'
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
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		readOnly:true,
				        		fieldLabel: '备注',
				        		name:'bz4'
				        	}]
				        }]
					}]
				}]
		    }],
		    buttons:[{
				text:'编辑',
				hidden : true,
				handler : function() {
					var fundingForm=this.up().up().down('form');
					var disabledFields = fundingForm.query('textfield');
					for(dt in disabledFields){
						//console.log(disabledFields[dt]);
						disabledFields[dt].setReadOnly(false);
					}
				}
			},{
				text:'保存',
				hidden : true,
				handler : function() {
					var fundingForm=this.up().up().down('form');
					var disabledFields = fundingForm.query('textfield');
					var paramStr={'funding.xmmc':me.recordStr.get('xmmc')+me.recordStr.get('hbh')};
					for(dt in disabledFields){
						paramStr['funding.'+disabledFields[dt].getName()]=disabledFields[dt].getValue();
					}					
					Ext.Ajax.request({
                        url:'saveFunding.action',
                        method:'post',
                        params:paramStr,
                        success:function(res,opt){
                            var result = Ext.decode(res.responseText);
                            //console.dir(result);
                            if(result.success==true){
                            	Ext.Msg.alert('提示',result.message);
                            	//store.reload();
                            }else{
                            	Ext.Msg.alert('提示',result.message);
                            }
                        },
                        failure:function(res,opt){
                            Ext.Msg.alert('提示','服务访问不成功');
                        }
                    });
					
				}
			},{
				text:'输出打印',
				handler : function() {
					var getContent=function(str){
						return '<td style="font-size:14px;text-align:center;padding: 5px;border:solid #000 1px;">'+str+'</td>';
					};
					var fundingForm=this.up().up().down('form');
					var disabledFields = fundingForm.query('textfield');
					var titleHtml = '<html><head><link rel="stylesheet" type="text/css" href="css/print.css"></head><body>';
					titleHtml = titleHtml+'<div width="800" style="text-align:center;font-size:18px;font-family:\'黑体\';padding: 5px;">4.25灾后民房重建资金拨款记录表</div>';
					titleHtml = titleHtml+'<div align="center"><table border="0" bordercolor="#000000" cellspacing="0" width="690" style="border-collapse:collapse;font-size:16px;text-align:center;">';
					titleHtml = titleHtml+'<tr border="0" rules="none"><td colspan="6" border="0" style="font-size:12px;text-align:left;padding: 5px;">户编号：'+me.recordStr.get('hbh')+' </td></tr>';
					titleHtml = titleHtml+'<tr>';
					var i=0;
					var str=new Array('一','二','三','四');
					for(dt in disabledFields){
						if(i%6==0){
							titleHtml = titleHtml+'</tr>';
							titleHtml = titleHtml+'<tr><td colspan="6" style="text-align: center;font-size:16px;padding: 5px;font-family:\'黑体\';border:solid #000 1px;">第'+str[i/6]+'次拨款</td></tr>';
							titleHtml = titleHtml+'<tr>'+getContent('金额')+getContent('总工程款百分比')+getContent('国家补助')+getContent('户主自筹')+getContent('拨款时间')+getContent('备注')+'</tr>';
							titleHtml = titleHtml+'<tr>';
						}
						titleHtml = titleHtml+getContent(disabledFields[dt].getValue()==''?'&nbsp':disabledFields[dt].getValue());
						i++;
					}
					titleHtml = titleHtml+'</tr>';
					titleHtml = titleHtml+'</table></div>';
					titleHtml = titleHtml+'</body></html>';
					var newwin = window.open("printer.html", "", "");
			  		newwin.document.write(titleHtml);
			  		newwin.document.location.reload();
			  		newwin.print();
				}
			},'-',{
				text:'Excel模板下载',
				handler : function() {
					window.open("page/"+me.templateName);
				}
			},{
				text:'导入数据',
				handler : function() {
					var btn=this.up().up();
					var idStr='ImportFundingExlWin';
					var panel = Ext.getCmp(idStr);
					//console.log("open panel id： "+idStr);
					var fundingStoreReloadFtn=function(){
						fundingStore.reload({
							scope: this,
						    callback: function(records, operation, success) {
						    	//console.log(btn);
						        if(records.length != 0){
						        	btn.down('form').loadRecord(records[0]);
						        }
						    }
						});
					};
					if (!panel) {
						panel = Ext.create('KJXM.view.funding.ImportExlWin',{
							id:idStr,
							title:'导入数据：资金划拨记录',
							xmmc:me.recordStr.get('xmmc')+me.recordStr.get('hbh')
						});
						
						panel.addEvents('done');
						panel.on('done',fundingStoreReloadFtn);
						//panel.on('close',fundingStoreReloadFtn);
					}
					panel.show();
				}
			},{
				text:'导出数据',
				handler :function(button) {
					var btnTxt=button.text;
					Ext.Msg.confirm('提示','确定要'+btnTxt+'吗？',function(btn){
			            if(btn=='yes'){
			                Ext.Ajax.request({
			                    url:'fundingExlDataExp.action',
			                    method:'post',
			                    params:{
			                    	'funding.xmmc':me.recordStr.get('xmmc')+me.recordStr.get('hbh')
			                    },
			                    success:function(res,opt){
			                        var result = Ext.decode(res.responseText);
			                        if(result.success==true){
			                        	Ext.Msg.alert('提示',result.message);
			                        }else{
			                        	Ext.Msg.alert('错误',result.message);
			                        }
			                    },
			                    failure:function(res,opt){
			                        Ext.Msg.alert('警告','服务访问不成功');
			                    }
			                });
			            }
			        });
				}
			}]
		    
		});
		this.down('tabpanel').add(zjhbjfTab);
		fundingStore.load({
			scope: this,
			params:{'funding.xmmc':me.recordStr.get('xmmc')+me.recordStr.get('hbh')},
		    callback: function(records, operation, success) {
		        //console.log(records);
		        if(records.length != 0){
		        	zjhbjfTab.down('form').loadRecord(records[0]);
		        }
		    }
		});
		
		var cjxmGrid=Ext.create('Ext.grid.Panel',{
	    	autoScroll : true,
	    	region:'center',
	    	//title: 'Simpsons',
	    	store:HRFileStore,
	    	columns: [new Ext.grid.RowNumberer(),
	    	          {width:300,header: '文件名称',dataIndex:'name'},
	    	          {header: '操作',dataIndex:'img',renderer: function(value,cell,record){
	    	              if (value !==null) {
	    	                  return '<A href="'+value+'" target=_blank>'+'下载</A>';
	    	              }
	    	              return '未上传';
	    	          }}
	    	]
	    });
		var cjxmForm = Ext.create('Ext.form.Panel',{
			region:'west',
			width:300,
			bodyPadding : '10 5 3 10',
			items:[{
        		xtype : 'label',
        		html:"户编号："+me.recordStr.get('hbh')+"<p>完整目录清单：<p>	基本情况表<p>	房屋受损情况图片<p>	征求意见表<p>	宅基地申请表<p>	宅基地确权登记表<p>	施工平面图<p>	施工合同<p>	放线记录<p>	基础验收图<p>	梁柱配筋验收图<p>	屋面验收图<p>	主体验收图<p>	竣工验收图<p>	施工当中返工及处理意见<p>	4.25灾后民房重建资金拨款记录表<p>	宅基地面积验收表"
        	}]
		});
		this.down('tabpanel').add(Ext.create('Ext.panel.Panel',{
		    title: '重建资料目录',
		    layout:'border',
		    height : 620,
		    dockedItems:[{
				xtype:'toolbar',
				dock:'bottom',
				ui: 'footer',
				items:['->',{
					text:'上传文件',
					handler : function() {
						var uploadWin=Ext.create('KJXM.view.upload.UploadWindow',{
						    title : '上传文件',  
						    autoShow : true,
						    fileModel:'民房重建一户一档',
							xmmc:this.up('window').recordStr.get('xmmc')+this.up('window').recordStr.get('hbh'),
							lx:'民房重建资料目录'
						});
						uploadWin.on('close',function(){
							HRFileStore.reload();
						});	
					}
				}]
			}],
		    items:[cjxmForm,cjxmGrid]
		}));
	}
})