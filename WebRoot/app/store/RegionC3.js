/**
 * @author 赵亚一
 * @comment 
 * @date 2016-7-8 下午11:32:23
 */
Ext.define('KJXM.store.RegionC3',{
	extend: 'KJXM.store.KjObject',
	requires:'KJXM.model.RegionCode',
	model:'KJXM.model.RegionCode',
	//autoLoad: true,
	proxy: {
        type: 'ajax',
        url: 'getRegionStore.action',
        reader: {
            type: 'json',
            root: 'root',
            idProperty: 'c3',
            totalProperty:'totalProperty'
        }
    }
    
})