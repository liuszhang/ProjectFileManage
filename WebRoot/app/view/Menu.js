Ext.define('KJXM.view.Menu', {
	extend : 'Ext.tree.Panel',
	requires:['KJXM.store.Menus'],
	initComponent : function() {
		var menuStore;
		if(Ext.util.Cookies.get('userRole')&&Ext.util.Cookies.get('userRole')=="管理员"){
			menuStore=Ext.create('KJXM.store.Menus');
		}else{
			menuStore=Ext.create('KJXM.store.Menus');
		}		
		Ext.apply(this, {
			id : 'menu-panel',
			title : '系统菜单',
			iconCls : 'icon-menu',
			margins : '0 0 -1 1',
			region : 'west',
			border : false,
			enableDD : false,
			split : true,
			width : 212,
			minSize : 130,
			maxSize : 300,
			rootVisible : false,
			containerScroll : true,
			collapsible : true,
			autoScroll : false,
			store:menuStore
		});
		this.callParent(arguments);
	}
})