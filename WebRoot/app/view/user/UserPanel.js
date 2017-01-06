/**
 * @author 赵亚一
 * @comment 民房重建
 * @date 2016-8-13 下午01:04:54
 */
Ext.define('KJXM.view.user.UserPanel', {
	extend : 'KJXM.view.KjGridPanel',
	alias:'widget.UserPanel',
	moduleFlag:'user',
	templateName:'用户管理输入模板.xls',
	searchCfg:false,
	expExlUrl:'userExlDataExp.action',
	delUrl:'delUser.action',
	columns: [
		{header: '用户ID',dataIndex:'userid',width:130},
		{header: '用户名',dataIndex:'username',width:130},
		{header: '组织',dataIndex:'userdept',width:280},
		{header: '角色',dataIndex:'userrole'}
	],
	initComponent : function(){
		this.initDock();
		this.initStore(Ext.create('KJXM.store.User'));
		this.initEv();
		this.callParent(arguments);
	}
})