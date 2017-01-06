Ext.define('KJXM.controller.Main', {
	extend : 'Ext.app.Controller',
	init : function() {
		this.control({
			'window button#createSave':{
				click : this.saveObject
			},
			'window button#editSave':{
				click : this.saveObject
			}
		})
	},
	//新建、维护window>>保存按钮
	saveObject : function(button) {
		var window=button.up('window');
		var tab=button.up().up();
		//console.log(tab);
		//console.log(window);
		var grid=Ext.getCmp(window.relatedGrid);
		//console.log("create handler:"+window.relatedGrid);
		var store=grid.getStore();
		var form = tab.down('form');
		var disabledFields = form.query('textfield');
		var paramStr={};
		for(dt in disabledFields){
			paramStr['housingReconstruction.'+disabledFields[dt].getName()]=disabledFields[dt].getValue();
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
                }else{
                	Ext.Msg.alert('提示',result.message);
                }
            },
            failure:function(res,opt){
                Ext.Msg.alert('提示','服务访问不成功');
            }
        });
	}
})