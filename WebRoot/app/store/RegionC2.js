/**
 * @author 赵亚一
 * @comment 
 * @date 2016-7-8 下午11:32:23
 */
Ext.define('KJXM.store.RegionC2',{
	extend: 'KJXM.store.KjObject',
	requires:'KJXM.model.RegionCode',
	model:'KJXM.model.RegionCode',
	proxy: {
        type: 'ajax',
        url: 'getRegionStore.action',
        reader: {
            type: 'json',
            root: 'root',
            idProperty: 'c2',
            totalProperty:'totalProperty'
        }
    },
    autoLoad: true
})