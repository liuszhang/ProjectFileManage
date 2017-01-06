/**
 * @author 赵亚一
 * @comment 
 * @date 2014-7-28 上午09:28:03
 */
Ext.define('KJXM.view.KjWindow', {
	extend : 'Ext.window.Window',
	moduleFlag:'undefined',//传递附件模块信息时会用到，首字母大写
	moduleName:'undefined',//模块中文名
	attachmentFlag:'undefined',//附件URL最后flag，传递附件模块信息时会用到
	uploadFlag:'undefined',
	constrainHeader : true,
	initAttachment:function(rwFlag){
		var me=this;
		me.down('form').add(Ext.create('Ext.form.FieldSet',{
			title : '附件信息',
			style: {
		        width: '95%',
		        marginBottom: '10px'
		    },
		    defaults: { 
				border : false
			},
			fieldDefaults:{
				labelWidth : 125
			},
			layout: 'column',
			items: [{
	        	columnWidth:.5,
	        	layout:'form',
	        	bodyPadding:'0 0 0 5',
	        	defaultType: 'textfield',
	        	items:[{
	        		xtype:'button',
	        		text:'附件管理',
	        		handler : function() {
	        			var idStr='edit'+me.moduleFlag+'Attachment';
	    				var panel = Ext.getCmp(idStr);
	    				//console.log("open window id："+idStr);
	    				if (!panel) {
	    					panel = Ext.create('KJXM.view.attachment.AttachmentWindow',{
	    						id:idStr,
	    						title : me.title,
	    						moduleFlag:me.moduleFlag,
	    						attachmentFlag:me.attachmentFlag,
	    						uploadFlag:me.uploadFlag,
	    						moduleName:me.moduleName,
	    						rwFlag:rwFlag?1:0
	    					});
	    				}
	    				//panel.show();
	    				panel.down('grid').getStore().load({
	    					params:{
	    						'admodule':me.moduleName,
	    						'id':me.down('form').getForm().getValues().id
	    					}
	    				});
	    				panel.show();
	    			}
	        	}]
	        }]
		}));
	}
})