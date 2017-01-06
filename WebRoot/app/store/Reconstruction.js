/**
 * @author 赵亚一
 * @comment 
 * @date 2016-7-8 下午11:32:23
 */
Ext.define('KJXM.store.Reconstruction',{
	extend: 'KJXM.store.KjObject',
	requires:'KJXM.model.Reconstruction',
	model:'KJXM.model.Reconstruction',
	//autoLoad:true,
	proxy: {
        type: 'ajax',
        url: 'findReconstruction.action',
        //url: 'testhousingreconstruction.json',
        reader: {
            type: 'json',
            root: 'root',
            idProperty: 'id',
            totalProperty:'totalProperty'
        }
    }
})