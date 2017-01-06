Ext.define('KJXM.view.South', {
	extend : 'Ext.Toolbar',
	initComponent : function() {
		Ext.apply(this, {
			id : "bottom",
			// frame:true,
			region : "south",
			height : 23,
			items : [ "成都米顶科技有限公司制作", '->', "版本：3.4" ]
		});
		this.callParent(arguments);
	}
})