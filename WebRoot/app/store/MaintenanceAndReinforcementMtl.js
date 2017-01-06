/**
 * @author 赵亚一
 * @comment 
 * @date 2016-7-8 下午11:32:23
 */
Ext.define('KJXM.store.MaintenanceAndReinforcementMtl',{
	extend: 'KJXM.store.KjObject',
	requires:'KJXM.model.HousingReconstructionImg',
	model:'KJXM.model.HousingReconstructionImg',
    storeId:'MaintenanceAndReinforcementMtl',
	//autoLoad:true,
	proxy: {
        type: 'ajax',
        url: 'findMaintenanceAndReinforcementMtl.action',
        //url: 'testhousingreconstructionimg.json',
        reader: {
            type: 'json',
            root: 'root',
            idProperty: 'name',
            totalProperty:'totalProperty'
        }
    }
})