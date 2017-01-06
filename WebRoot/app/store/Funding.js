/**
 * @author 赵亚一
 * @comment 
 * @date 2016-7-8 下午11:32:23
 */
Ext.define('KJXM.store.Funding',{
	extend: 'KJXM.store.KjObject',
	requires:'KJXM.model.Funding',
	model:'KJXM.model.Funding',
	//autoLoad:true,
	proxy: {
        type: 'ajax',
        url: 'findFunding.action',
        //url: 'testhousingreconstruction.json',
        reader: {
            type: 'json',
            root: 'root',
            idProperty: 'id',
            totalProperty:'totalProperty'
        }
    }
})