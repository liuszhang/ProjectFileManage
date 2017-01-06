/**
 * @author 赵亚一
 * @comment 计划单
 * @date 2016-8-27 上午02:13:51
 */
Ext.define('KJXM.view.plan.PlanGridPanel', {
	extend : 'KJXM.view.KjGridPanel',
	alias:'widget.PlanPanel',
	moduleFlag:'plan',
	searchBar:[{
    	xtype:'textfield',
    	itemId:'afjmc',
		width:120,
		emptyText : '无用'
	}],
	templateCfg:false,
	expExlCfg:false,
	delCfg:false,
	//templateName:'输入模板.xls',
	//expExlUrl:'planExlDataExp.action',
	//delUrl:'delPlan.action',
	columns: [
{header: '序号',dataIndex:'xh'},
{header: '项目名称',dataIndex:'xmmc',width: 150},
{header: '项目内容',dataIndex:'xmnr',width: 500},
{header: '投资金额（万元）',dataIndex:'tzje',width: 80},
{header: '开工实施',dataIndex:'kgss',width: 80},
{header: '计划施工时间',dataIndex:'jhsgsj',width: 100},
{header: '备注',dataIndex:'bz'}
	],
	initComponent : function() {
		//this.initDock();
		this.initStore(Ext.create('KJXM.store.Plan'));
		//this.initEv();
		this.callParent(arguments);
	}
})