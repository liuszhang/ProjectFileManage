/**
 * @author 赵亚一
 * @comment 
 * @date 2016-8-13 下午02:20:18
 */
Ext.define('KJXM.view.reconstruction.SavePicName', {
	extend : 'KJXM.view.KjWindow',
	//layout:'fit',
	autoShow : true,
	autoScroll : true,
	modal : true,
	frame : true,
	relatedGrid:'cjxm',
	border : false,
	width:500,
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
	        	columnWidth:1,
	        	layout:'form',
	        	bodyPadding:'0 0 0 5',
	        	labelWidth: 30,
	        	defaultType: 'textfield',
	        	items:[{
	        		fieldLabel: '（1）',
	        		name:'name1'
	        	},{
	        		fieldLabel: '（2）',
	        		name:'name2'
	        	},{
	        		fieldLabel: '（3）',
	        		name:'name3'
	        	},{
	        		fieldLabel: '（4）',
	        		name:'name4'
	        	},{
	        		fieldLabel: '（5）',
	        		name:'name5'
	        	},{
	        		fieldLabel: '（6）',
	        		name:'name6'
	        	}]
	        }]
		}]
	}],
	buttons:[{
		text:'保存',
		handler : function() {
			var me=this;
			var fundingForm=this.up().up().down('form');
			var window=this.up('window');
			if(fundingForm.isValid()){
				var disabledFields = fundingForm.query('textfield');
				var paramStr={};
				for(dt in disabledFields){
					paramStr[disabledFields[dt].getName()]=disabledFields[dt].getValue();
				}	
				paramStr['reconstruction.xmmc']=window.xmmc;
				Ext.Ajax.request({
	                url:'saveImgName.action',
	                method:'post',
	                params:paramStr,
	                success:function(res,opt){
	                    var result = Ext.decode(res.responseText);
	                    if(result.success==true){
	                    	Ext.Msg.alert('提示',result.message);
	                    	me.up('window').close();
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
	}],
	initComponent:function(){
		var me=this;
		this.callParent(arguments);
		var fundingForm=me.down('form');
		var store=me.imgStore;
		var disabledFields = fundingForm.query('textfield');
		for(dt in disabledFields){
			var record = store.getAt(dt);
			disabledFields[dt].setValue(record.get('name'));
		}

	}
})