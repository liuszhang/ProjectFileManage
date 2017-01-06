Ext.define('KJXM.view.Viewport', {
	extend : 'Ext.Viewport',
	layout : 'fit',
	hideBorders : true,
	requires : [ 'KJXM.view.Header', 'KJXM.view.Menu', 'KJXM.view.TabPanel',
			'KJXM.view.South' ],
	initComponent : function() {
		Ext.apply(this, {
			items : [ {
				id : 'desk',
				layout : 'border',
				items : [ Ext.create('KJXM.view.Header'),
						Ext.create('KJXM.view.Menu'),
						Ext.create('KJXM.view.TabPanel'),
						Ext.create('KJXM.view.South') ]
			} ]
		});
		this.callParent(arguments);
	}
})