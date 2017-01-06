Ext.define('KJXM.view.Header', {
	extend : 'Ext.Component',
	initComponent : function() {
		Ext.applyIf(this, {
			xtype : 'box',
			region : 'north',
			autoLoad:{url:'page/header.jsp',scripts:true,nocache:true},
			height : 70
		});
		this.callParent(arguments);
	}
});