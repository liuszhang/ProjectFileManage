Ext.define('KJXM.store.Menus', {
	extend : 'Ext.data.TreeStore',
	proxy: {
        type: 'ajax',
        url: 'getMenuStore.action',
        reader:{
        	root:'root',
	    	type:'json'
	    }
    },
    fields : [
    	{name:'text'},
    	{name:'id'},
    	{name:'leaf'},
    ]
});