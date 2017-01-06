/**
 * @author 赵亚一
 * @comment 民房重建
 * @date 2016-8-13 下午01:04:54
 */
Ext.define('KJXM.view.maintenanceandreinforcement.MaintenanceAndReinforcementPanel', {
	extend : 'KJXM.view.KjGridPanel',
	alias:'widget.MaintenanceAndReinforcementPanel',
	moduleFlag:'maintenanceandreinforcement',
	idStr:'hbh',
	searchBar:[{
    	xtype:'textfield',
    	itemId:'afjmc',
		width:120,
		emptyText : '无用'
	}],
	templateName:'维修加固一户一档输入模板.xls',
	expExlUrl:'maintenanceAndReinforcementExlDataExp.action',
	delUrl:'delMaintenanceAndReinforcement.action',
/*    features: [{
        ftype: 'summary'
    }],*/
	columns: [
	    {header: '户编号',dataIndex:'hbh',width:130},
		{header: '编制单位',dataIndex:'bzdw'},
		{header: '项目名称',dataIndex:'xmmc',width:350},
		{header: '受损程度',dataIndex:'sscd'},
		/*{header: '地址',dataIndex:'dz'},*/
		{header: '乡（镇）',dataIndex:'xz'},
		{header: '行政村',dataIndex:'xzc'},
		{header: '自然村',dataIndex:'zrc'},
		{header: '门牌号',dataIndex:'mph'},
		{header: '户主姓名',dataIndex:'hzxm'},
		{header: '身份证号码',dataIndex:'sfzh',width:150},
		{header: '联系号码',dataIndex:'lxhm'},
		{header: '家庭人口',dataIndex:'jtrk',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+value+'人</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+value + ' 人</strong>';
            	}else{
            		return value;
            	}
            }},
		{header: '劳动力',dataIndex:'ldl',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+value+'人</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+value + ' 人</strong>';
            	}else{
            		return value;
            	}
            }},
		{header: '是否低保户',dataIndex:'sfdbh'},
		{header: '建造年代',dataIndex:'jznd'},
		{header: '房屋结构',dataIndex:'fwjg'},
		{header: '层数',dataIndex:'cs',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+value+'层</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+value + ' 层</strong>';
            	}else{
            		return value;
            	}
            }},
		{header: '建筑面积',dataIndex:'jzmj'},
		{header: '是否安居工程',dataIndex:'sfajgc'},
		{header: '国家补助资金',dataIndex:'gjbzzj'},
		{header: '是否结构受损',dataIndex:'sfjgss'},
		{header: '是否非承重构件受损',dataIndex:'sffczgjss'},
		{header: '是否地基沉降',dataIndex:'sfdjcj'},
		{header: '受损情况',dataIndex:'ssqk'},
		{header: '震后房屋受损照片',dataIndex:'zhfwsszp'},
		{header: '维修情况描述及验收情况',dataIndex:'wxqkmsjysqk'},
		{header: '维修过程图片',dataIndex:'wxgctp'},
		{header: '预付款拨付比例（%）',dataIndex:'yfkbfbl'},
		{header: '验收结算金额（元）',dataIndex:'ysjsje',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+Ext.util.Format.number(value,'0,000.00')+'元</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+Ext.util.Format.number(value,'0,000.00')+' 元</strong>'; 
            	}else{
            		return value;
            	}
            }},
		{header: '结余资金（元）',dataIndex:'jyzj'
		,renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
        	if((rowIdx+1)==store.count()){
        		return '<strong>'+Ext.util.Format.number(value,'0,000.00')+' 元</strong>'; 
        	}else{
        		return value;
        	}
        }},
		{header: '预付款拨付金额（元）',dataIndex:'yfkbfje',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+Ext.util.Format.number(value,'0,000.00')+'元</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+Ext.util.Format.number(value,'0,000.00')+' 元</strong>'; 
            	}else{
            		return value;
            	}
            }},
		{header: '领款人',dataIndex:'lkr'},
		{header: '经办人',dataIndex:'jbr'},
		{header: '验收通过后的图片',dataIndex:'ystghdtp'},
		{header: '列入计划年度',dataIndex:'lrjhnd'},
		{header: '开工时间',dataIndex:'kgsj',xtype : 'datecolumn',format : 'Y/m/d'},
		{header: '竣工时间',dataIndex:'jgsj',xtype : 'datecolumn',format : 'Y/m/d'},
		{header: '验收结果',dataIndex:'ysjg'}
	],
	initComponent : function() {
		var me=this;
		var store=Ext.create('KJXM.store.MaintenanceAndReinforcement');
		if(me.dz!=undefined){
			var paramStr={'maintenanceAndReinforcement.dz':me.dz};
			//console.log(me.dz);
			store.loadPage(1,{
				scope: this,
				params:paramStr,
				callback: function(records, operation, success) {
			        if(success){
						if(store.getCount()<1){
							//Ext.Msg.alert("提示","查询结果为空 ");
						}
						store.on('beforeload', function (store, options) {
					        Ext.apply(store.proxy.extraParams, paramStr);
					    });
					}else{
						Ext.Msg.alert("提示","查询失败！");
					}
			    }
			});
		}
		this.initDock();
		this.initStore(store);
		this.initEv();
		this.callParent(arguments);
	}
})