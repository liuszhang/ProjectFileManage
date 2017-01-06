/**
 * @author 赵亚一
 * @comment 
 * @date 2016-7-8 下午11:32:23
 */
Ext.define('KJXM.store.MaintenanceAndReinforcement',{
	extend: 'KJXM.store.KjObject',
	requires:'KJXM.model.MaintenanceAndReinforcement',
	model:'KJXM.model.MaintenanceAndReinforcement',
	//autoLoad:true,
	proxy: {
        type: 'ajax',
        url: 'findMaintenanceAndReinforcement.action',
        //url: 'testmaintenanceandreinforcement.json',
        //url: 'testhousingreconstruction.json',
        reader: {
            type: 'json',
            root: 'root',
            idProperty: 'id',
            totalProperty:'totalProperty'
        }
    }
})