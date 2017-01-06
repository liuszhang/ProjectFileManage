/**
 * @author 赵亚一
 * @comment 
 * @date 2014-7-16 下午06:37:42
 */
Ext.define('KJXM.view.KjGridPanel', {
	extend : 'Ext.grid.Panel',
	closable : true,
	title : 'undefined',//标题
	idStr:'hbh',
	moduleFlag:'undefined',
	hrBarCfg:false,//民房重建配置
	searchBar:false,//搜索条
	searchCfg:true,//搜索条
	templateCfg:true,//模板
	templateName:'undefined',
	createCfg:true,//导入
	createWinCfg:true,//新建
	delCfg:true,//删除
	delUrl:'undefined',//删除AjaxUrl
	expExlCfg:true,//导出数据
	expExlUrl:'undefined',//导出数据AjaxUrl
	store:null,
	columns: null,//栏
	constructor : function(o) {
		Ext.apply(this,o);
		this.callParent();
	},
	
	//初始化工具条
	initDock:function(o){//参数:搜索form，扩展条
		var me=this;
		var storereloadFtn=function(){
			me.getStore().reload();
		}
		var barItems=[];
		//搜索
		if(this.searchCfg){
			barItems.push({
				text:'搜索',
				handler : function() {
					var view=Ext.create('KJXM.view.'+me.moduleFlag+'.SearchWin',{
						//recordStr:record
						title:'搜索：'+me.title,
						relatedStore:me.getStore()
					});
				}
			});
			barItems.push({
				text:'重置搜索',
				handler : function() {
					//console.log("resetSearch:"+me.moduleFlag+" handler");
					//var paramStr={'start':0,housingReconstruction.cjdd:null,housingReconstruction.cjfwjg:null,housingReconstruction.cjhx:null,housingReconstruction.cjlx:null,housingReconstruction.gcjd:null,housingReconstruction.jldwmc:null,housingReconstruction.sgdwmc:null,housingReconstruction.xmmc:null,housingReconstruction.xzmc:null,housingReconstruction.yys:null,kgsjjs:null,kgsjks:null,sgsjjs:null,sgsjks:null};
					if(me.moduleFlag=='housingreconstruction'){
						me.getStore().loadPage(1,{
							params:{'start':0,'housingReconstruction.hbh':null,'housingReconstruction.xzmc':null,'housingReconstruction.cm':null,'housingReconstruction.zrcm':null,'housingReconstruction.hzxm':null,'housingReconstruction.sfzh':null,'housingReconstruction.jtrs':null,'housingReconstruction.jtll':null,'housingReconstruction.dys':null,'housingReconstruction.sc':null,'housingReconstruction.gdmj':null,'housingReconstruction.jtlx':null,'housingReconstruction.lxhm':null,'housingReconstruction.cjlx':null,'housingReconstruction.cjhx':null,'housingReconstruction.cjdd':null,'housingReconstruction.cjfwjg':null,'housingReconstruction.sgdwmc':null,'housingReconstruction.sgfzr':null,'housingReconstruction.sglxhm':null,'housingReconstruction.jldwmc':null,'housingReconstruction.jlfzr':null,'housingReconstruction.jllxhm':null,'housingReconstruction.gcjd':null,'housingReconstruction.yys':null,'housingReconstruction.yjg':null,'housingReconstruction.lrndjh':null,'housingReconstruction.ztz':null,'housingReconstruction.gjbz':null,'housingReconstruction.qzzc':null,'housingReconstruction.qzcjdk':null,'housingReconstruction.qtzj1':null,'housingReconstruction.qtzj2':null,'housingReconstruction.qtzj3':null,'housingReconstruction.qtzj4':null,'kgsjjs':null,'kgsjks':null,'sgsjjs':null,'sgsjks':null,'bksjks1':null,'bksjks2':null,'bksjks3':null,'bksjks4':null,'bksjjs1':null,'bksjjs2':null,'bksjjs3':null,'bksjjs4':null,'ykgxm':false}
						});
					}else if(me.moduleFlag=='maintenanceandreinforcement'){
						me.getStore().loadPage(1,{
							params:{'start':0,'maintenanceAndReinforcement.hbh':null,'maintenanceAndReinforcement.bzdw':null,'maintenanceAndReinforcement.xmmc':null,'maintenanceAndReinforcement.sscd':null,'maintenanceAndReinforcement.xz':null,'maintenanceAndReinforcement.xzc':null,'maintenanceAndReinforcement.zrc':null,'maintenanceAndReinforcement.mph':null,'maintenanceAndReinforcement.hzxm':null,'maintenanceAndReinforcement.sfzh':null,'maintenanceAndReinforcement.lxhm':null,'maintenanceAndReinforcement.jtrk':null,'maintenanceAndReinforcement.ldl':null,'maintenanceAndReinforcement.sfdbh':null,'maintenanceAndReinforcement.jznd':null,'maintenanceAndReinforcement.fwjg':null,'maintenanceAndReinforcement.cs':null,'maintenanceAndReinforcement.jzmj':null,'maintenanceAndReinforcement.sfajgc':null,'maintenanceAndReinforcement.gjbzzj':null,'kgsjjs':null,'kgsjks':null,'sgsjjs':null,'sgsjks':null}
						});
					}else if(me.moduleFlag=='reconstruction'){
						me.getStore().loadPage(1,{
							params:{'start':0,'reconstruction.xmmc':null,'reconstruction.cjdd':null,'reconstruction.jsxz':null,'reconstruction.jsnrjgm':null,'reconstruction.xmzgdw':null,'reconstruction.dkdwmc':null,'reconstruction.dkfzr':null,'reconstruction.dklxhm':null,'reconstruction.sjdwmc':null,'reconstruction.sjfzr':null,'reconstruction.sjlxhm':null,'reconstruction.sgdwmc':null,'reconstruction.sgfzr':null,'reconstruction.sglxhm':null,'reconstruction.jldwmc':null,'reconstruction.jlfzr':null,'reconstruction.jllxhm':null,'reconstruction.kgsj':null,'reconstruction.sgsj':null,'reconstruction.tzpfwh':null,'reconstruction.ztz':null,'reconstruction.gjbz':null,'reconstruction.qzzc':null,'reconstruction.qzcjdk':null,'reconstruction.qtzj1':null,'reconstruction.qtzj2':null,'reconstruction.bz':null,'kgsjjs':null,'kgsjks':null,'sgsjjs':null,'sgsjks':null}
						});
					}
					
				}
			});
			barItems.push('-');
		}
		
		if(this.templateCfg){
			barItems.push({
				text:'Excel模板下载',
				handler : function() {
					var grid=this.up('grid');
					window.open("page/"+grid.templateName);
				}
			});
		}

		if(this.createCfg){
			barItems.push({
				text:'导入数据',
				handler : function() {
					var idStr='ImportExlWin'+me.moduleFlag;
					var panel = Ext.getCmp(idStr);
					//console.log("open panel id： "+idStr);
					if (!panel) {
						panel = Ext.create('KJXM.view.'+me.moduleFlag+'.ImportExlWin',{
							id:idStr,
							title:'导入数据：'+me.title
						});
						
						panel.addEvents('done');
						panel.on('done',storereloadFtn);
						panel.on('close',storereloadFtn);
					}
					panel.show();
				}
			});
		}
		if(this.delCfg){
			barItems.push({
				text:'删除',
				disabled: true,
				itemId:'delBtn',
				handler :this.btnPost
			});
		}
		
		if(this.expExlCfg){
			barItems.push({
				text:'导出数据',
				itemId:'expExlBtn',
				handler :this.expExlPost
			});
		}
		barItems.push('-');
		if(this.createWinCfg){
			barItems.push({
				text:'新建',
				//itemId:'newBtn',
				handler :function() {
					var idStr='create'+me.moduleFlag;
					var panel = Ext.getCmp(idStr);
					if (!panel) {
						panel = Ext.create('KJXM.view.'+me.moduleFlag+'.Create',{
							id:idStr,
							title:'新建：'+me.title
						});
					}
					panel.show();
				}
			});
		}
		
		if(this.hrBarCfg){
			barItems.push('-');
			barItems.push({
				text:'资金划拨记录导入',
				handler : function() {
					var idStr='FundingImportExlWin'+me.moduleFlag;
					var panel = Ext.getCmp(idStr);
					//console.log("open panel id： "+idStr);
					if (!panel) {
						panel = Ext.create('KJXM.view.'+me.moduleFlag+'.FundingImportExlWin',{
							id:idStr,
							title:'资金划拨导入数据：'+me.title
						});
						
						panel.addEvents('done');
						panel.on('done',storereloadFtn);
						panel.on('close',storereloadFtn);
					}
					panel.show();
				}
			});
			barItems.push({
				text:'资金划拨记录导出',
				handler :this.expFundingExlPost
			});
			
		}
		
		if(o){
			barItems.push(o);
		}

		var dock=[{
			xtype:'toolbar',
			dock:'top',
			items:barItems
		}];
		this.dockedItems=dock;
	},
	
	//删除
	btnPost : function(button) {
		var btnTxt=button.text;
		var ajaxUrl='';
		var grid=this.up('grid');
		var idStr=grid.idStr;
		//console.log("btnPost handler："+btnTxt);
		switch(btnTxt){
		case '删除' : ajaxUrl=grid.delUrl;break;
		default : ;
		};
		var record = grid.getSelectionModel().getSelection()[0];
		if(grid.getSelectionModel().getSelection().length<1){
			Ext.Msg.alert('提示','请选择项目数据');
		}
		if(record.get(idStr)==null||record.get(idStr)==''){
			idStr='userid';//用户管理
        }
		var store=grid.getStore();
		if(!record){
			Ext.Msg.alert('提示','请选择项目数据');
		}else{
			Ext.Msg.confirm('提示','确定要'+btnTxt+'吗？',function(btn){
	            if(btn=='yes'){
	                if(record.get(idStr)==null||record.get(idStr)==''){
	                	Ext.Msg.alert('提示','查无此项');
	                }else{
	                    Ext.Ajax.request({
	                        url:ajaxUrl,
	                        method:'post',
	                        params:{
	                        	'idStr':record.get(idStr),
	                        	'buttonname':btnTxt
	                        },
	                        success:function(res,opt){
	                            var result = Ext.decode(res.responseText);
	                            //console.dir(result);
	                            if(result.success==true){
	                            	Ext.Msg.alert('提示',result.message);
	                            	store.reload();
	                            }else{
	                                //Ext.Msg.alert('提示',''+btnTxt+'不成功');
	                            	Ext.Msg.alert('提示',result.message);
	                            }
	                        },
	                        failure:function(res,opt){
	                            Ext.Msg.alert('提示','服务访问不成功');
	                        }
	                    });
	                }
	            }
	        });
		}
        
	},
	
	expExlPost : function(button) {
		var btnTxt=button.text;
		var grid=this.up('grid');
		var ajaxUrl=grid.expExlUrl;
		var store=grid.getStore();
		Ext.Msg.confirm('提示','确定要'+btnTxt+'吗？',function(btn){
            if(btn=='yes'){
                Ext.Ajax.request({
                    url:ajaxUrl,
                    method:'post',
                    params:{
                    	'buttonname':btnTxt
                    },
                    success:function(res,opt){
                        var result = Ext.decode(res.responseText);
                        //console.dir(result);
                        if(result.success==true){
                        	//store.reload();
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
	},
	
	expFundingExlPost : function(button) {
		var btnTxt=button.text;
		var grid=this.up('grid');
		var ajaxUrl=grid.expExlUrl;
		var store=grid.getStore();
		Ext.Msg.confirm('提示','确定要'+btnTxt+'吗？',function(btn){
            if(btn=='yes'){
                Ext.Ajax.request({
                    url:'fundingBatchExlDataExp.action',
                    method:'post',
                    params:{
                    	'buttonname':btnTxt
                    },
                    success:function(res,opt){
                        var result = Ext.decode(res.responseText);
                        //console.dir(result);
                        if(result.success==true){
                        	//store.reload();
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
	},
	
	//初始化数据源
	initStore:function(store){//参数：store
		var me=this;
		if(store){
			Ext.apply(this, {
				store:store,
				bbar:Ext.create('Ext.PagingToolbar',{
					store:store,
					displayInfo: true,
			        displayMsg: '显示第 {0} 条到 {1} 条记录，一共 {2} 条',
			        emptyMsg: "没有记录"
				})
			});
			store.on('load',function(store,records,successful){
				if(successful){
					this.getSelectionModel().deselectAll();
				}
			},this);
		}
	},
	
	//监听事件
	initEv:function(dblclickFlag,ajaxUrl){
		var me=this;
		//编辑、删除按钮
		this.getSelectionModel().on('selectionchange', function(sm){
			//me.down('toolbar').getComponent('editBtn').setDisabled(sm.getCount() < 1);
			me.down('toolbar').getComponent('delBtn').setDisabled(sm.getCount() < 1);
	    });
		this.on('itemdblclick', function(grid, record,item, index){
			//console.log("double click handler:"+me.moduleFlag);
			//console.log('index!=grid.getStore().count'+index+':'+grid.getStore().count());
			if((index+1)!=grid.getStore().count()){
				var view=Ext.create('KJXM.view.'+me.moduleFlag+'.Show',{
					recordStr:record
				});
				view.down('form').loadRecord(record);
			}
	    });
		this.on('beforeselect', function(rowModel,record,index,eOpts){
			//console.log((index+1)+':'+rowModel.getStore().count());
			if((index+1)==rowModel.getStore().count()){
				return false; 
			}
	    });
	}
	
})