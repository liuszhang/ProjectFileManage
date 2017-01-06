/**
 * @author 赵亚一
 * @comment 
 * @date 2016-7-8 下午11:32:23
 */
Ext.define('KJXM.store.ReconstructionFunding',{
	extend: 'KJXM.store.KjObject',
	requires:'KJXM.model.ReconstructionFunding',
	model:'KJXM.model.ReconstructionFunding',
	//autoLoad:true,
	proxy: {
        type: 'ajax',
        url: 'findReconstructionFunding.action',
        //url: 'testhousingreconstruction.json',
        reader: {
            type: 'json',
            root: 'root',
            idProperty: 'id',
            totalProperty:'totalProperty'
        }
    }
})