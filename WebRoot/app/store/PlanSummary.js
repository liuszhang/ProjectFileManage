/**
 * @author 赵亚一
 * @comment 
 * @date 2016-7-8 下午11:32:23
 */
Ext.define('KJXM.store.PlanSummary',{
	extend: 'KJXM.store.KjObject',
	requires:'KJXM.model.PlanSummary',
	model:'KJXM.model.PlanSummary',
	autoLoad:true,
	proxy: {
        type: 'ajax',
        url: 'planSummaryExlDataDisplay.action',
        //url: 'testhousingreconstruction.json',
        reader: {
            type: 'json',
            root: 'root',
            idProperty: 'id',
            totalProperty:'totalProperty'
        }
    }
})