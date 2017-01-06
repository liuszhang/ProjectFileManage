/**
 * @author 赵亚一
 * @comment 
 * @date 2016-8-28 下午1:26:30
 */
Ext.define('KJXM.model.User', {
    extend: 'Ext.data.Model',
    fields: [
		{name: 'userid',  type: 'string'},
		{name: 'username',  type: 'string'},
		{name: 'userpwd',  type: 'string'},
		{name: 'usercrtdate',  type: 'string'},
		{name: 'userdept',  type: 'string'},
		{name: 'userrole',  type: 'string'},
		{name: 'userstatus',  type: 'string'}
    ]
});