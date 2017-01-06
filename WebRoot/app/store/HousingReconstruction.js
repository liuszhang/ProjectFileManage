/**
 * @author 赵亚一
 * @comment 
 * @date 2016-7-8 下午11:32:23
 */
Ext.define('KJXM.store.HousingReconstruction', {
    extend: 'KJXM.store.KjObject',
    requires: 'KJXM.model.HousingReconstruction',
    model: 'KJXM.model.HousingReconstruction',
    //autoLoad:true,
    proxy: {
        type: 'ajax',
        url: 'findHousingReconstruction.action',
        //url: 'testhousingreconstruction.json',
        reader: {
            type: 'json',
            root: 'root',
            idProperty: 'id',
            totalProperty: 'totalProperty'
        }
    }
})