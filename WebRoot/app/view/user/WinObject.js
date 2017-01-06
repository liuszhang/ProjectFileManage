/**
 * @author 赵亚一
 * @comment 
 * @date 2016-8-13 下午02:20:18
 */
Ext.define('KJXM.view.user.WinObject', {
	extend : 'KJXM.view.KjWindow',
	//layout:'fit',
	autoShow : true,
	autoScroll : true,
	modal : true,
	frame : true,
	relatedGrid:'yhgl',
	border : false,
	width:700,
	items:[{
		xtype:'form',
		bodyPadding:5,
		items:[{
			layout: 'column',
			border:false,
			defaults: { 
				border : false
			},
	        items: [{
	        	columnWidth:.5,
	        	layout:'form',
	        	labelWidth: 30,
	        	defaultType: 'textfield',
	        	items:[{
	        		fieldLabel: '用户ID（帐号）',
	        		allowBlank:false,
	        		name:'userid'
	        	},{// 新密码
		        	   inputType: 'password',
		               name:'userpwd',
		               fieldLabel:'密码',
		               allowBlank:false,
		               maxLength: 20
		        },{// 确认密码
		        	   inputType: 'password',
		               fieldLabel:'确认密码',
		               allowBlank:false,
		               maxLength: 20,
		               validator:function(value){
		               		if(value==this.previousSibling().value){
		               			return true
		               		}else{
		               			return '两次输入密码不一致';
		               		}
		               		
		               
		               }
	            },{
	        		fieldLabel: '用户名',
	        		allowBlank:false,
	        		name:'username'
	        	},{
	        		fieldLabel: '组织',
	        		value:'定日县-重建办',
	        		allowBlank:false,
	        		name:'userdept'
	        	},{
	        		xtype : "combo",
					forceSelection : true,
					triggerAction : 'all',
					store : new Ext.data.SimpleStore({
						fields : [ 'value', 'text' ],
						data : [[ '录入员', '录入员' ]]
					}),
					displayField : 'text',
					valueField : 'value',
					mode : 'local',
					emptyText : '请选择',
	        		fieldLabel: '用户角色',
	        		readOnly:true,
	        		value:'录入员',
	        		name:'userrole'
	        	}]
	        },{
	        	columnWidth:.5,
	        	layout:'form',
	        	bodyPadding:'0 5 0 5',
	        	labelWidth: 30,
	        	defaultType: 'label',
	        	items:[{
	        		padding : 2,
	        		cls:'x-form-item-label',
	        		text: '例如：zhangchao'
	        	},{
	        		padding : 2,
	        		cls:'x-form-item-label',
	        		text: '请输入密码'
	        	},{
	        		padding : 2,
	        		cls:'x-form-item-label',
	        		text: '请再次输入密码'
	        	},{
	        		padding : 2,
	        		cls:'x-form-item-label',
	        		text: '例如：张超'
	        	},{
	        		padding : 2,
	        		cls:'x-form-item-label',
	        		text: '例如：定日县协格尔镇白坝村-XX办'
	        	},{
	        		padding : 2,
	        		cls:'x-form-item-label',
	        		text: '录入员具备录入权限'
	        	}]
	        }]
		}]
    }]
})