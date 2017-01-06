/**
 * @author 赵亚一
 * @comment 
 * @date 2016-8-28 下午1:26:30
 */
Ext.define('KJXM.model.RegionCode', {
    extend: 'Ext.data.Model',
    fields: [
		{name: 'id',  type: 'int'},
		{name: 'c1',  type: 'string'},
		{name: 'c2',  type: 'string'},
		{name: 'c3',  type: 'string'},
		{name: 'code',  type: 'string'}
    ]
});