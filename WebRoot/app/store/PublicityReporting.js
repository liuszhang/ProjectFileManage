/**
 * @author 赵亚一
 * @comment 
 * @date 2016-7-8 下午11:32:23
 */
Ext.define('KJXM.store.PublicityReporting',{
	extend: 'KJXM.store.KjObject',
	requires:'KJXM.model.Publicity',
	model:'KJXM.model.Publicity',
	autoLoad:true,
	proxy: {
        type: 'ajax',
        url: 'publicityReporting.action',
        //url: 'testhousingreconstruction.json',
        reader: {
            type: 'json',
            root: 'root',
            idProperty: 'id',
            totalProperty:'totalProperty'
        }
    }
})