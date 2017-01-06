/**
 * @author 赵亚一
 * @comment 
 * @date 2016-8-13 下午02:20:18
 */
Ext.define('KJXM.view.reconstruction.WinObject', {
	extend : 'KJXM.view.KjWindow',
	templateName:'资金划拨记录输入模板.xls',
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
				        		//xtype : 'datefield',
				        		//format : 'Y/m/d',
				        		readOnly:true,fieldLabel: '开工时间',
				        		name:'kgsjDate'
				        	}]
				        },{
				        	columnWidth:.5,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	//labelWidth: 30,
				        	defaultType: 'textfield',
				        	items:[{
				        		//labelWidth: 30,
				        		//xtype : 'datefield',
				        		//format : 'Y/m/d',
				        		readOnly:true,fieldLabel: '竣工时间',
				        		name:'sgsjDate'
				        	}]
				        }]
					}]
				}]
		    }]
		    
		}]
	}],
	initComponent:function(){
		var me=this;
		var ReconstructionImgStore = Ext.create('KJXM.store.ReconstructionImg');
		//HRImgStore.load();
		ReconstructionImgStore.load({
		    params:{
		    	'reconstruction.xmmc':me.recordStr.get('xmmc')
		    }
		});
		//console.log(this.down('tabpanel'));
		var ReconstructionFileStore=Ext.create('KJXM.store.ReconstructionFile');
		ReconstructionFileStore.load({
		    params:{
		    	'reconstruction.xmmc':me.recordStr.get('xmmc')
		    }
		});
		
		var ReconstructionArchiveStore=Ext.create('KJXM.store.ReconstructionArchive');
		ReconstructionArchiveStore.load({
		    params:{
		    	'reconstruction.xmmc':me.recordStr.get('xmmc')
		    }
		});
		
		this.callParent(arguments);
		
		var reconstructionArchiveGrid=Ext.create('Ext.grid.Panel',{
	    	autoScroll : true,
	    	region:'center',
	    	//title: 'Simpsons',
	    	store:ReconstructionArchiveStore,
	    	columns: [new Ext.grid.RowNumberer(),
	    	          {width:300,header: '文件名称',dataIndex:'name'},
	    	          {header: '操作',dataIndex:'img',renderer: function(value,cell,record){
	    	              if (value !==null) {
	    	                  return '<A href="'+value+'" target=_blank>'+'下载</A>';
	    	              }
	    	              return '未上传';
	    	          }}
	    	],
	    	height: 400
	    });
		var reconstructionArchiveForm = Ext.create('Ext.form.Panel',{
			region:'west',
			width:300,
			bodyPadding : '10 5 3 10',
			items:[{
        		xtype : 'label',
        		html:"项目名称："+me.recordStr.get('xmmc')+"<p>完整目录清单：<p>环境影响评估报告表<p>规划选址意见书<p>土地预审意见<p>节能登记表<p>社会稳定风险评估报告表<p>实施方案文本（修改最终版）<p>可研文本（修改最终版）<p>初步设计文本（修改最终版）<p>地勘报告<p>可行性研究报告批复<p>评审报告<p>初步设计概算批复<p>实施方案批复<p>防雷审查合格书<p>消防审查合格书<p>建设工程规划许可证<p>施工图审查合格书<p>中标通知书<p>施工许可证"
        	}]
		});
		this.down('tabpanel').add(Ext.create('Ext.panel.Panel',{
		    title: '项目前期档案',
		    layout:'border',
		    height : 650,
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
						    fileModel:'重建项目',
							xmmc:this.up('window').recordStr.get('xmmc'),
							lx:'重建项目档案'
						});
						uploadWin.on('close',function(){
							ReconstructionArchiveStore.reload();
						});	
					}
				}]
			}],
		    items:[reconstructionArchiveForm,reconstructionArchiveGrid]
		}));
		
		var dtView=Ext.create('Ext.panel.Panel',{
			title: '重建建设图片',
		    autoScroll : true,
		    dockedItems:[{
				xtype:'toolbar',
				dock:'bottom',
				ui: 'footer',
				items:['->',{
					text:'录入图片描述',
					handler : function() {
						var uploadWin=Ext.create('KJXM.view.reconstruction.SavePicName',{
						    title : '录入图片名',  
						    autoShow : true,
						    imgStore:ReconstructionImgStore,
						    fileNumLimit:6,
						    fileModel:'重建项目',
							xmmc:this.up('window').recordStr.get('xmmc'),
							lx:'重建建设图片'
						});
						uploadWin.on('close',function(){
							ReconstructionImgStore.reload();
						});						
					}
				},{
					text:'上传文件',
					handler : function() {
						var uploadWin=Ext.create('KJXM.view.upload.UploadWindow',{
						    title : '上传文件',  
						    autoShow : true,
						    fileNumLimit:6,
						    fileModel:'重建项目',
							xmmc:this.up('window').recordStr.get('xmmc'),
							lx:'重建建设图片'
						});
						uploadWin.on('close',function(){
							ReconstructionImgStore.reload();
						});						
					}
				},{
					text:'输出打印',
					handler : function() {
						var titleHtml = '<html><head><link rel="stylesheet" type="text/css" href="css/print.css"></head><body>';
						titleHtml = titleHtml+Ext.get("testp1").dom.innerHTML;
						titleHtml = titleHtml+'</body></html>';
						var newwin = window.open("printer.html", "", "");
				  		newwin.document.write(titleHtml);
				  		newwin.document.location.reload();
				  		newwin.print();
					}
				}/*,{
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
				}*/]
			}],
		    items:[{
		    	xtype: 'dataview',
		    	height : 620,
		    	itemSelector: 'tr.printcontent',
		    	store:ReconstructionImgStore,
			    tpl: Ext.create('Ext.XTemplate',
			    		'<div id="testp1" width="900"><table border="0" bordercolor="#000000" cellspacing="0" style="border-collapse:collapse;font-size:14px;text-align:center;" width="870">',
		    			'<tr><th colspan="4" style="font-size:24px;text-align:center;padding: 10px;">',
		    				'建设项目分步工程图片<br /><span style="font-size:12px;float:left;padding: 2px;">项目名称：'+me.recordStr.get('xmmc')+'</span>',  
		    			'</th></tr>',
		    			'<tpl for=".">', // 处理数据的子节点
		    				//'{% if (xindex > 3) break; %}',
		    	        	'<tr><th width="20" style="text-align: center;font-size:12px;padding: 1px; border:solid #000 1px;">（{#}）</th>',
		    	        	'<th width="100" style="text-align: center;font-size:12px;padding: 1px; border:solid #000 1px;">{name}</th>',// 图片名称
		    	        	'<td align="center" style="text-align: center;font-size:12px;padding: 5px; border:solid #000 1px;"><img src="{img}" width="290" alt="图片未上传">',//图片
		    	        	//'<br />',
		    	        	//'<a href="{img}" target="_blank">查看</a>&nbsp;&nbsp;',//查看
		    	        	//'<input style="cursor:pointer;color:blue;background-color: #FFFFFF;border: 0px none;font-size:14px;text-decoration:underline;" type="button" value="打印" onclick=javascript:printimage("{img}"); />',//打印函数在header
		    	        	'</td>',
		    	        	'<td align="center" style="text-align: center;font-size:12px;padding: 5px; border:solid #000 1px;"><img src="{person}" width="290" alt="图片未上传">',//图片
		    	        	'</td>',
		    	        	//'<th width="150" height="30" style="text-align: center;font-size:12px;padding: 5px; border:solid #000 1px;">鉴定人</th>',
		    	        	'</tr>',
		    	        	//'<tr><td style="text-align: center;font-size:12px;padding: 5px; border:solid #000 1px;">{person}</td></tr>',//验收（鉴定）人
		    	        	//'<tr><th height="30" style="text-align: center;font-size:12px;padding: 5px; border:solid #000 1px;">结论</th></tr>',
		    	        	//'<tr><td style="text-align: center;font-size:12px;padding: 5px; border:solid #000 1px;">{result}</td></tr>',//结论
		    	        '</tpl>',
		    	    '</table></div>'
		        )
		    }]
		});
		this.down('tabpanel').add(dtView);
		
		var fundingStore=Ext.create('KJXM.store.ReconstructionFunding');
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
					html:"项目名称："+me.recordStr.get('xmmc')+"<p>"
	        	},{
					xtype : 'fieldset',
					title : '设计',
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
				        	columnWidth:1,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	defaultType: 'textfield',
				        	items:[{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '合同总额',
				        		name:'htze1'
				        	}]
				        },{
				        	columnWidth:.33,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	defaultType: 'textfield',
				        	items:[{
				        		labelWidth: 150,
				        		readOnly:true,
				        		fieldLabel: '第一次拨款占总合同价%',
				        		name:'zb1'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第二次拨款占总合同价%',
				        		name:'zb2'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第三次拨款占总合同价%',
				        		name:'zb3'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第四次拨款占总合同价%',
				        		name:'zb4'
				        	}]
				        },{
				        	columnWidth:.33,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	defaultType: 'textfield',
				        	items:[{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第一次拨款金额',
				        		name:'bkje1'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第二次拨款金额',
				        		name:'bkje2'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第三次拨款金额',
				        		name:'bkje3'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第四次拨款金额',
				        		name:'bkje4'
				        	}]
				        },{
				        	columnWidth:.33,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	defaultType: 'textfield',
				        	items:[{
				        		xtype : 'datefield',
				        		format : 'Y/m/d',
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第一次拨款时间',
				        		name:'bksj1'
				        	},{
				        		xtype : 'datefield',
				        		format : 'Y/m/d',
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第二次拨款时间',
				        		name:'bksj2'
				        	},{
				        		xtype : 'datefield',
				        		format : 'Y/m/d',
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第三次拨款时间',
				        		name:'bksj3'
				        	},{
				        		xtype : 'datefield',
				        		format : 'Y/m/d',
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第四次拨款时间',
				        		name:'bksj4'
				        	}]
				        }]
					}]
				},{
					xtype : 'fieldset',
					title : '施工',
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
				        	columnWidth:1,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	defaultType: 'textfield',
				        	items:[{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '合同总额',
				        		name:'htze2'
				        	}]
				        },{
				        	columnWidth:.33,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	defaultType: 'textfield',
				        	items:[{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第一次拨款占总合同价%',
				        		name:'zb5'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第二次拨款占总合同价%',
				        		name:'zb6'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第三次拨款占总合同价%',
				        		name:'zb7'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第四次拨款占总合同价%',
				        		name:'zb8'
				        	}]
				        },{
				        	columnWidth:.33,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	defaultType: 'textfield',
				        	items:[{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第一次拨款金额',
				        		name:'bkje5'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第二次拨款金额',
				        		name:'bkje6'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第三次拨款金额',
				        		name:'bkje7'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第四次拨款金额',
				        		name:'bkje8'
				        	}]
				        },{
				        	columnWidth:.33,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	defaultType: 'textfield',
				        	items:[{
				        		xtype : 'datefield',
				        		format : 'Y/m/d',
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第一次拨款时间',
				        		name:'bksj5'
				        	},{
				        		xtype : 'datefield',
				        		format : 'Y/m/d',
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第二次拨款时间',
				        		name:'bksj6'
				        	},{
				        		xtype : 'datefield',
				        		format : 'Y/m/d',
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第三次拨款时间',
				        		name:'bksj7'
				        	},{
				        		xtype : 'datefield',
				        		format : 'Y/m/d',
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第四次拨款时间',
				        		name:'bksj8'
				        	}]
				        }]
					}]
				},{
					xtype : 'fieldset',
					title : '监理',
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
				        	columnWidth:1,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	defaultType: 'textfield',
				        	items:[{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '合同总额',
				        		name:'htze3'
				        	}]
				        },{
				        	columnWidth:.33,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	defaultType: 'textfield',
				        	items:[{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第一次拨款占总合同价%',
				        		name:'zb9'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第二次拨款占总合同价%',
				        		name:'zb10'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第三次拨款占总合同价%',
				        		name:'zb11'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第四次拨款占总合同价%',
				        		name:'zb12'
				        	}]
				        },{
				        	columnWidth:.33,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	defaultType: 'textfield',
				        	items:[{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第一次拨款金额',
				        		name:'bkje9'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第二次拨款金额',
				        		name:'bkje10'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第三次拨款金额',
				        		name:'bkje11'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第四次拨款金额',
				        		name:'bkje12'
				        	}]
				        },{
				        	columnWidth:.33,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	defaultType: 'textfield',
				        	items:[{
				        		xtype : 'datefield',
				        		format : 'Y/m/d',
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第一次拨款时间',
				        		name:'bksj9'
				        	},{
				        		xtype : 'datefield',
				        		format : 'Y/m/d',
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第二次拨款时间',
				        		name:'bksj10'
				        	},{
				        		xtype : 'datefield',
				        		format : 'Y/m/d',
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第三次拨款时间',
				        		name:'bksj11'
				        	},{
				        		xtype : 'datefield',
				        		format : 'Y/m/d',
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第四次拨款时间',
				        		name:'bksj12'
				        	}]
				        }]
					}]
				},{
					xtype : 'fieldset',
					title : '地勘',
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
				        	columnWidth:1,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	defaultType: 'textfield',
				        	items:[{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '合同总额',
				        		name:'htze4'
				        	}]
				        },{
				        	columnWidth:.33,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	defaultType: 'textfield',
				        	items:[{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第一次拨款占总合同价%',
				        		name:'zb13'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第二次拨款占总合同价%',
				        		name:'zb14'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第三次拨款占总合同价%',
				        		name:'zb15'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第四次拨款占总合同价%',
				        		name:'zb16'
				        	}]
				        },{
				        	columnWidth:.33,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	defaultType: 'textfield',
				        	items:[{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第一次拨款金额',
				        		name:'bkje13'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第二次拨款金额',
				        		name:'bkje14'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第三次拨款金额',
				        		name:'bkje15'
				        	},{
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第四次拨款金额',
				        		name:'bkje16'
				        	}]
				        },{
				        	columnWidth:.33,
				        	layout:'form',
				        	bodyPadding:'0 0 0 5',
				        	defaultType: 'textfield',
				        	items:[{
				        		xtype : 'datefield',
				        		format : 'Y/m/d',
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第一次拨款时间',
				        		name:'bksj13'
				        	},{
				        		xtype : 'datefield',
				        		format : 'Y/m/d',
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第二次拨款时间',
				        		name:'bksj14'
				        	},{
				        		xtype : 'datefield',
				        		format : 'Y/m/d',
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第三次拨款时间',
				        		name:'bksj15'
				        	},{
				        		xtype : 'datefield',
				        		format : 'Y/m/d',
				        		labelWidth: 150,
				        		readOnly:true,fieldLabel: '第四次拨款时间',
				        		name:'bksj16'
				        	}]
				        }]
					}]
				}]
		    }],
		    buttons:[{
				text:'编辑',
				handler : function() {
					var fundingForm=this.up().up().down('form');
					var disabledFields = fundingForm.query('textfield');
					for(dt in disabledFields){
						if(disabledFields[dt].getName().substring(0,2)!='zb'){
							disabledFields[dt].setReadOnly(false);
						}
						//console.log(disabledFields[dt]);
						
					}
				}
			},{
				text:'保存',
				handler : function() {
					var fundingForm=this.up().up().down('form');
					var disabledFields = fundingForm.query('textfield');
					var paramStr={'reconstructionFunding.xmmc':me.recordStr.get('xmmc')};
					for(dt in disabledFields){
						paramStr['reconstructionFunding.'+disabledFields[dt].getName()]=disabledFields[dt].getValue();
					}					
					Ext.Ajax.request({
                        url:'saveReconstructionFunding.action',
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
					
			  		//newwin.close();
				}
			},{
				text:'输出打印',
				handler : function() {
					var getContent=function(str){
						return '<td style="font-size:14px;text-align:center;padding: 5px;border:solid #000 1px;">'+str+'</td>';
					}
					var getContentRow=function(str){
						return '<td colspan="5" style="font-size:14px;text-align:center;padding: 5px;border:solid #000 1px;">'+str+'</td>';
					}
					var fundingForm=this.up().up().down('form');
					var disabledFields = fundingForm.query('textfield');
					var titleHtml = '<html><head><link rel="stylesheet" type="text/css" href="css/print.css"></head><body>';
					titleHtml = titleHtml+'<div width="800" style="text-align:center;font-size:18px;font-family:\'黑体\';padding: 5px;">资金划拨记录</div>';
					titleHtml = titleHtml+'<div align="center"><table border="0" bordercolor="#000000" cellspacing="0" width="690" style="border-collapse:collapse;font-size:16px;text-align:center;">';
					titleHtml = titleHtml+'<tr border="0" rules="none"><td colspan="6" border="0" style="font-size:12px;text-align:left;padding: 5px;">项目名称：'+me.recordStr.get('xmmc')+' </td></tr>';
					titleHtml = titleHtml+'<tr>';
					var i=0;
					var str=new Array('设计','施工','监理','地勘');
					var labelstr=new Array('第一次拨款占总合同价%','第二次拨款占总合同价%','第三次拨款占总合同价%','第四次拨款占总合同价%','第一次拨款金额','第二次拨款金额','第三次拨款金额','第四次拨款金额','第一次拨款时间','第二次拨款时间','第三次拨款时间','第四次拨款时间');
					for(dt in disabledFields){
						if(i%13==0){
							//console.log(i);
							titleHtml = titleHtml+'</tr>';
							titleHtml = titleHtml+'<tr><td colspan="6" style="text-align: center;font-size:16px;padding: 5px;font-family:\'黑体\';border:solid #000 1px;">'+str[i/13]+'</td></tr>';
							titleHtml = titleHtml+'<tr>';
							titleHtml = titleHtml+getContent('合同总额')+getContentRow(disabledFields[dt].getValue()==null?'&nbsp':disabledFields[dt].getValue())+'</tr>';
							titleHtml = titleHtml+'<tr>';
						}else if(i%13>0&&i%13<5){
							console.log(dt);
							titleHtml = titleHtml+getContent(labelstr[i%13-1])+getContent(disabledFields[dt].getValue()==null?'&nbsp':disabledFields[dt].getValue());
							titleHtml = titleHtml+getContent(labelstr[i%13-1+4])+getContent(disabledFields[parseInt(dt)+4].getValue()==null?'&nbsp':disabledFields[parseInt(dt)+4].getValue());
							titleHtml = titleHtml+getContent(labelstr[i%13-1+8])+getContent(disabledFields[parseInt(dt)+8].getValue()==null?'&nbsp':Ext.Date.format(disabledFields[parseInt(dt)+8].getValue(),'Y/m/d'));
							titleHtml = titleHtml+'</tr><tr>';
							
						}
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
				hidden:true,
				text:'Excel模板下载',
				handler : function() {
					window.open("page/"+me.templateName);
				}
			},{
				hidden:true,
				text:'Excel导入',
				handler : function() {
					var btn=this.up().up();
					var idStr='ImportReconstructionFundingExlWin';
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
				hidden:true,
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
		
		var fundingForm=zjhbjfTab.down('form');
		for (var i=0;i<16;i++){
			fundingForm.query('textfield[name="bkje'+(i+1)+'"]')[0].on('change',function(field,newValue,oldValue,eOpts){
				var str=field.getName();
				str=str.substring(4,str.length);
				//console.log(str+1);
				var a=field.getValue();
				var b=fundingForm.query('textfield[name="htze'+Math.ceil(parseInt(str)/4)+'"]')[0].getValue();
				if(b!=0){
					if(a!=0){
						var d=(a/b*100).toFixed(2)+'%';
						fundingForm.query('textfield[name="zb'+str+'"]')[0].setValue(d);					
					}else{
						fundingForm.query('textfield[name="zb'+str+'"]')[0].setValue('');
					}
					
				}
				
			});
			if((i+1)%4==0){
				fundingForm.query('textfield[name="htze'+(i+1)/4+'"]')[0].on('change',function(field,newValue,oldValue,eOpts){
					var str=field.getName();
					var aa=parseInt(str.substring(4,str.length));
					var b=field.getValue();
					if(b!=0){
						var c;
						var d;
						c=aa*4;
						(d=fundingForm.query('textfield[name="bkje'+c+'"]')[0].getValue())!=0?fundingForm.query('textfield[name="zb'+c+'"]')[0].setValue((d/b*100).toFixed(2)+'%'):fundingForm.query('textfield[name="zb'+c+'"]')[0].setValue('');
						c=aa*4-1;
						(d=fundingForm.query('textfield[name="bkje'+c+'"]')[0].getValue())!=0?fundingForm.query('textfield[name="zb'+c+'"]')[0].setValue((d/b*100).toFixed(2)+'%'):fundingForm.query('textfield[name="zb'+c+'"]')[0].setValue('');
						c=aa*4-2;
						(d=fundingForm.query('textfield[name="bkje'+c+'"]')[0].getValue())!=0?fundingForm.query('textfield[name="zb'+c+'"]')[0].setValue((d/b*100).toFixed(2)+'%'):fundingForm.query('textfield[name="zb'+c+'"]')[0].setValue('');
						c=aa*4-3;
						(d=fundingForm.query('textfield[name="bkje'+c+'"]')[0].getValue())!=0?fundingForm.query('textfield[name="zb'+c+'"]')[0].setValue((d/b*100).toFixed(2)+'%'):fundingForm.query('textfield[name="zb'+c+'"]')[0].setValue('');
						
					}else{
						var c;
						c=aa*4;
						fundingForm.query('textfield[name="zb'+c+'"]')[0].setValue('');
						c=aa*4-1;
						fundingForm.query('textfield[name="zb'+c+'"]')[0].setValue('');
						c=aa*4-2;
						fundingForm.query('textfield[name="zb'+c+'"]')[0].setValue('');
						c=aa*4-3;
						fundingForm.query('textfield[name="zb'+c+'"]')[0].setValue('');
						
					}
				});
			}
			
		}
		
		fundingStore.load({
			scope: this,
			params:{'reconstructionFunding.xmmc':me.recordStr.get('xmmc')},
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
	    	store:ReconstructionFileStore,
	    	columns: [new Ext.grid.RowNumberer(),
	    	          {width:300,header: '文件名称',dataIndex:'name'},
	    	          {header: '操作',dataIndex:'img',renderer: function(value,cell,record){
	    	              if (value !==null) {
	    	                  return '<A href="'+value+'" target=_blank>'+'下载</A>';
	    	              }
	    	              return '未上传';
	    	          }}
	    	],
	    	height: 400
	    });
		var cjxmForm = Ext.create('Ext.form.Panel',{
			region:'west',
			width:300,
			bodyPadding : '10 5 3 10',
			items:[{
        		xtype : 'label',
        		html:"项目名称："+me.recordStr.get('xmmc')+"<p>完整目录清单：<p>	基本情况表<p>	房屋受损情况图片<p>	征求意见表<p>	宅基地申请表<p>	宅基地确权登记表<p>	施工平面图<p>	施工合同<p>	放线记录<p>	基础验收图<p>	梁柱配筋验收图<p>	屋面验收图<p>	主体验收图<p>	竣工验收图<p>	施工当中返工及处理意见<p>	4.25灾后民房重建资金拨款记录表<p>	宅基地面积验收表"
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
						    fileModel:'重建项目',
							xmmc:this.up('window').recordStr.get('xmmc'),
							lx:'重建资料目录'
						});
						uploadWin.on('close',function(){
							ReconstructionFileStore.reload();
						});	
					}
				}]
			}],
		    items:[cjxmForm,cjxmGrid]
		}));
		
		
	}
})