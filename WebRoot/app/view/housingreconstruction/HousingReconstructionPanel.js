/**
 * 
 * @param {type} param1
 * @param {type} param2
 */
Ext.define('KJXM.view.housingreconstruction.HousingReconstructionPanel', {
	extend : 'KJXM.view.KjGridPanel',
	alias:'widget.HousingReconstructionPanel',
	moduleFlag:'housingreconstruction',
	idStr:'hbh',
	searchBar:[{
    	xtype:'textfield',
    	itemId:'afjmc',
		width:120,
		emptyText : '无用'
	}],
	hrBarCfg:true,
	templateName:'民房重建一户一档输入模板.xls',
	expExlUrl:'housingReconstructionExlDataExp.action',
	delUrl:'delHousingReconstruction.action',
/*    features: [{
        ftype: 'summary'
    }],*/
	columns: [
		{header: '户编号',dataIndex:'hbh',width:130
		,renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
        	if((rowIdx+1)==store.count()){
        		return '<strong>总计：</strong>';
        	}else{
        		return value;
        	}
        }},
		{header: '项目名称',dataIndex:'xmmc',width:350},
		{header: '地址情况',dataIndex:'dz',width:250},
		{header: '乡镇名称',dataIndex:'xzmc'},
		{header: '村名',dataIndex:'cm',width:110},
		{header: '自然村名',dataIndex:'zrcm'},
		{header: '户主姓名',dataIndex:'hzxm'},
		{header: '身份证号码',dataIndex:'sfzh',width:150},
		{header: '家庭人数',dataIndex:'jtrs',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+value+'人</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+value + ' 人</strong>';
            	}else{
            		return value;
            	}
            }},
		{header: '家庭劳力',dataIndex:'jtll',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+value+'人</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+value + ' 人</strong>';
            	}else{
            		return value;
            	}
            }},
		{header: '党员数',dataIndex:'dys',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+value+'人</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+value + ' 人</strong>';
            	}else{
            		return value;
            	}
            }},
		{header: '牲畜（头只匹）',dataIndex:'sc',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+value+'头（只匹）</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+value + ' 头（只匹）</strong>';
            	}else{
            		return value;
            	}
            }},
		{header: '耕地面积（亩）',dataIndex:'gdmj',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+value+'亩</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+value + ' 亩</strong>';
            	}else{
            		return value;
            	}
            }},
		{header: '家庭类型',dataIndex:'jtlx'},
		{header: '联系号码',dataIndex:'lxhm'},
		{header: '受损程度',dataIndex:'sscd'},
		{header: '重建类型',dataIndex:'cjlx'},
		{header: '重建户型',dataIndex:'cjhx'},
		{header: '重建地点',dataIndex:'cjdd'},
		{header: '重建房屋结构',dataIndex:'cjfwjg'},
		{header: '施工单位名称',dataIndex:'sgdwmc',width:160},
		{header: '负责人',dataIndex:'sgfzr'},
		{header: '联系号码',dataIndex:'sglxhm'},
		{header: '监理单位名称',dataIndex:'jldwmc',width:160},
		{header: '负责人',dataIndex:'jlfzr'},
		{header: '联系号码',dataIndex:'jllxhm'},
		{header: '工程阶段',dataIndex:'gcjd'},
		{header: '已验收',dataIndex:'yys'},
		{header: '已竣工',dataIndex:'yjg'},
		{header: '列入计划年度',dataIndex:'lrndjh'},
		{header: '开工时间',dataIndex:'kgsj',xtype : 'datecolumn',format : 'Y/m/d'},
		{header: '竣工时间',dataIndex:'sgsj',xtype : 'datecolumn',format : 'Y/m/d'},
		{header: '总投资（元）',dataIndex:'ztz',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+Ext.util.Format.number(value,'0,000.00')+'元</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+Ext.util.Format.number(value,'0,000.00')+' 元</strong>'; 
            	}else{
            		return value;
            	}
            }},
		{header: '国家补助（元）',dataIndex:'gjbz',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+Ext.util.Format.number(value,'0,000.00')+'元</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+Ext.util.Format.number(value,'0,000.00')+' 元</strong>'; 
            	}else{
            		return value;
            	}
            }},
		{header: '群众自筹（元）',dataIndex:'qzzc',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+Ext.util.Format.number(value,'0,000.00')+'元</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+Ext.util.Format.number(value,'0,000.00')+' 元</strong>'; 
            	}else{
            		return value;
            	}
            }},
		{header: '其中重建贷款（元）',dataIndex:'qzcjdk',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+Ext.util.Format.number(value,'0,000.00')+'元</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+Ext.util.Format.number(value,'0,000.00')+' 元</strong>'; 
            	}else{
            		return value;
            	}
            }},
		{header: '本级财政自筹资金（元）',dataIndex:'qtzj1',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+Ext.util.Format.number(value,'0,000.00')+'元</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+Ext.util.Format.number(value,'0,000.00')+' 元</strong>'; 
            	}else{
            		return value;
            	}
            }},
		{header: '农牧三配套资金（元）',dataIndex:'qtzj2',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+Ext.util.Format.number(value,'0,000.00')+'元</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+Ext.util.Format.number(value,'0,000.00')+' 元</strong>'; 
            	}else{
            		return value;
            	}
            }},
		{header: '棚户区改造资金（元）',dataIndex:'qtzj3',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+Ext.util.Format.number(value,'0,000.00')+'元</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+Ext.util.Format.number(value,'0,000.00')+' 元</strong>'; 
            	}else{
            		return value;
            	}
            }},
		{header: '其他资金（元）',dataIndex:'qtzj4',summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return '<strong>'+Ext.util.Format.number(value,'0,000.00')+'元</strong>'; 
            },renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
            	if((rowIdx+1)==store.count()){
            		return '<strong>'+Ext.util.Format.number(value,'0,000.00')+' 元</strong>'; 
            	}else{
            		return value;
            	}
            }}
	],
	initComponent : function(){
		var me=this;
		var store=Ext.create('KJXM.store.HousingReconstruction');
		if(me.dz!=undefined){
			var paramStr={'housingReconstruction.dz':me.dz};
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
						/*if(count<1){
							var lisParamStr=paramStr;
							delete lisParamStr.start;
							me.relatedStore.on('beforeload',function(){
								Ext.apply(me.relatedStore.proxy.extraParams,lisParamStr);
							});
						}
						count++;*/
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