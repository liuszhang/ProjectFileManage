/**
 * @author 赵亚一
 * @comment 
 * @date 2016-7-8 下午11:32:23
 */
Ext.define('KJXM.store.ReconstructionFile',{
	extend: 'KJXM.store.KjObject',
	requires:'KJXM.model.HousingReconstructionImg',
	model:'KJXM.model.HousingReconstructionImg',
	//autoLoad:true,
	proxy: {
        type: 'ajax',
        url: 'findReconstructionMtl.action',
        //url: 'testhousingreconstructionfile.json',
        reader: {
            type: 'json',
            root: 'root',
            idProperty: 'name',
            totalProperty:'totalProperty'
        }
    }
})