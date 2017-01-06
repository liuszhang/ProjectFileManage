Ext.define('KJXM.view.TabPanel', {
	extend : 'Ext.tab.Panel',
	initComponent : function() {
		Ext.apply(this, {
			id : 'content-panel',
			region : 'center',
			defaults : {
				autoScroll : true/*,
				bodyPadding : 10*/
			},
			activeTab : 0,
			border : false,
			// plain: true,
			items : [ {
				id : 'HomePage',
				title : '首页',
				iconCls : 'home',
				bodyStyle: {background:'url(images/main/tab1.jpg)' },
				//layout : 'fit',
				autoLoad:{url:'page/maintab.jsp',scripts:true,nocache:true}		
			}]
		});
		this.callParent(arguments);
	}
})