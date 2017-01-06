/**
 * @author 赵亚一
 * @comment 
 * @date 2016-8-13 下午01:40:31
 */
Ext.define('KJXM.view.user.Create', {
	extend : 'KJXM.view.user.WinObject',
	//title : '新建',
	saveAjaxUrl:'addUser.action',
	buttons:[{
		text:'保存',
		handler:function(button) {
			var window=button.up('window');
			var tab=button.up().up();
			//console.log(tab);
			//console.log(window);
			var grid=Ext.getCmp(window.relatedGrid);
			//console.log("create handler:"+window.relatedGrid);
			var store=grid.getStore();
			var form = tab.down('form');
			if(form.isValid()){
				var disabledFields = form.query('textfield');
				var paramStr={};
				for(dt in disabledFields){
					paramStr['user.'+disabledFields[dt].getName()]=disabledFields[dt].getValue();
				}					
				Ext.Ajax.request({
		            url:window.saveAjaxUrl,
		            method:'post',
		            params:paramStr,
		            success:function(res,opt){
		                var result = Ext.decode(res.responseText);
		                if(result.success==true){
		                	Ext.Msg.alert("提示",result.message);
		            		store.reload();
		            		window.close();
		                }else{
		                	Ext.Msg.alert('提示',result.message);
		                }
		            },
		            failure:function(res,opt){
		                Ext.Msg.alert('提示','服务访问不成功');
		            }
		        });
			}
			
		}
	},{
		text:'取消',
		handler:function() {
			this.up('window').close();
		}
	}],
	initComponent:function(){
		this.callParent(arguments);
	}
})