/**
 * @author 赵亚一
 * @comment 
 * @date 2016-7-8 下午11:32:23
 */
Ext.define('KJXM.store.ReconstructionImg',{
	extend: 'KJXM.store.KjObject',
	requires:'KJXM.model.HousingReconstructionImg',
	model:'KJXM.model.HousingReconstructionImg',
    storeId:'ReconstructionImg',
	//autoLoad:true,
	proxy: {
        type: 'ajax',
        url: 'findReconstructionImg.action',
        //url: 'testhousingreconstructionimg.json',
        reader: {
            type: 'json',
            root: 'root',
            idProperty: 'name',
            totalProperty:'totalProperty'
        }
    }
})