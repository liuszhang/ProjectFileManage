/**
 * @author 赵亚一
 * @comment 民房重建
 * @date 2016-8-13 下午01:04:54
 */
Ext.define('KJXM.view.reconstruction.ReconstructionPanel', {
	extend : 'KJXM.view.KjGridPanel',
	alias:'widget.ReconstructionPanel',
	moduleFlag:'reconstruction',
	idStr:'id',
	searchBar:[{
    	xtype:'textfield',
    	itemId:'afjmc',
		width:120,
		emptyText : '无用'
	}],
	templateName:'重建项目输入模板.xls',
	expExlUrl:'reconstructionExlDataExp.action',
	delUrl:'delReconstruction.action',
/*    features: [{
        ftype: 'summary'
    }],*/
	columns: [
		{header: '项目名称',dataIndex:'xmmc',width:230},
		{header: '建设地点',dataIndex:'cjdd'},
		{header: '项目类型',dataIndex:'xmlx',width:130},
		{header: '建设性质',dataIndex:'jsxz'},
		{header: '建设内容及规模',dataIndex:'jsnrjgm',width:290},
		{header: '项目主管单位',dataIndex:'xmzgdw',width:260},
		{header: '地勘单位名称',dataIndex:'dkdwmc',width:160},
		{header: '地勘单位负责人',dataIndex:'dkfzr'},
		{header: '地勘单位联系号码',dataIndex:'dklxhm'},
		{header: '设计单位名称',dataIndex:'sjdwmc',width:160},
		{header: '设计单位负责人',dataIndex:'sjfzr'},
		{header: '设计单位联系号码',dataIndex:'sjlxhm'},
		{header: '施工单位名称',dataIndex:'sgdwmc',width:160},
		{header: '施工单位负责人',dataIndex:'sgfzr'},
		{header: '施工单位联系号码',dataIndex:'sglxhm'},
		{header: '监理单位名称',dataIndex:'jldwmc',width:160},
		{header: '监理单位负责人',dataIndex:'jlfzr'},
		{header: '监理单位联系号码',dataIndex:'jllxhm'},
		{header: '开工时间',dataIndex:'kgsj',xtype : 'datecolumn',format : 'Y/m/d'},
		{header: '竣工时间',dataIndex:'sgsj',xtype : 'datecolumn',format : 'Y/m/d'},
		{header: '投资批复文号',dataIndex:'tzpfwh'},
		{header: '总投资（万元）',dataIndex:'ztz',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+Ext.util.Format.number(value,'0,000.00')+'万元</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+Ext.util.Format.number(value,'0,000.00')+' 万元</strong>'; 
            	}else{
            		return value;
            	}
            }},
		{header: '国家补助（万元）',dataIndex:'gjbz',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+Ext.util.Format.number(value,'0,000.00')+'万元</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+Ext.util.Format.number(value,'0,000.00')+' 万元</strong>'; 
            	}else{
            		return value;
            	}
            }},
		{header: '本级财政配套（万元）',dataIndex:'qzzc',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+Ext.util.Format.number(value,'0,000.00')+'万元</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+Ext.util.Format.number(value,'0,000.00')+' 万元</strong>'; 
            	}else{
            		return value;
            	}
            }},
		{header: '援藏配套资金（万元）',dataIndex:'qzcjdk',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+Ext.util.Format.number(value,'0,000.00')+'万元</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+Ext.util.Format.number(value,'0,000.00')+' 万元</strong>'; 
            	}else{
            		return value;
            	}
            }},
		{header: '其他资金1（万元）',dataIndex:'qtzj1',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+Ext.util.Format.number(value,'0,000.00')+'万元</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+Ext.util.Format.number(value,'0,000.00')+' 万元</strong>'; 
            	}else{
            		return value;
            	}
            }},
		{header: '其他资金2（万元）',dataIndex:'qtzj2',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+Ext.util.Format.number(value,'0,000.00')+'万元</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+Ext.util.Format.number(value,'0,000.00')+' 万元</strong>'; 
            	}else{
            		return value;
            	}
            }},
		{header: '备注',dataIndex:'bz'}
	],
	initComponent : function() {
		var me=this;
		var store=Ext.create('KJXM.store.Reconstruction');
		if(me.xmlx!=undefined){
			var paramStr={'reconstruction.xmlx':me.xmlx};
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