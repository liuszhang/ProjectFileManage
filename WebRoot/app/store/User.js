/**
 * @author 赵亚一
 * @comment 
 * @date 2016-7-8 下午11:32:23
 */
Ext.define('KJXM.store.User',{
	extend: 'KJXM.store.KjObject',
	requires:'KJXM.model.User',
	model:'KJXM.model.User',
	autoLoad:true,
	proxy: {
        type: 'ajax',
        url: 'getAllUsers.action',
        //url: 'testhousingreconstruction.json',
        reader: {
            type: 'json',
            root: 'root',
            idProperty: 'id',
            totalProperty:'totalProperty'
        }
    }
})