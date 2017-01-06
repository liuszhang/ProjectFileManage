/**
 * @author 赵亚一
 * @comment 
 * @date 2016-8-14 上午11:35:38
 */

Ext.define('KJXM.model.HousingReconstructionImg', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'name',  type: 'string'},
        {name: 'img',   type: 'string'},
        {name: 'person', type: 'string'},
        {name: 'result',  type: 'string'}
    ]
});