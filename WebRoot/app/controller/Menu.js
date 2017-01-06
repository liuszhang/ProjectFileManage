Ext.define('KJXM.controller.Menu', {
	extend : 'Ext.app.Controller',
	//views: ['kjgh.KjghglPanel'],
	init : function() {
		this.control({
			'treepanel#menu-panel' : {
				itemmousedown : this.loadMenu
			}
		})
	},
	loadMenu : function(selModel, record) {
		if (record.get('leaf')||record.get('id').length>6||record.get('id')=='cjxm') {
			var main = Ext.getCmp("content-panel");
			var panelId=record.get('id').length>6?record.get('id').substring(0,4):record.get('id');
			var tab = main.getComponent(panelId);
			//console.log("record id："+record.get('id')+"new panel id："+panelId);
			if (!tab) {
				var panel;
				var flag=0;
				switch(panelId){
				case 'mfcj' : panel = Ext.create('KJXM.view.housingreconstruction.HousingReconstructionPanel',{id:panelId,title:'民房重建一户一档：'+record.get('text'),dz:record.get('text')});break;
				case 'wxjg' : panel = Ext.create('KJXM.view.maintenanceandreinforcement.MaintenanceAndReinforcementPanel',{id:panelId,title:'维修加固一户一档：'+record.get('text'),dz:record.get('text')});break;
				case 'cjxm' : panel = Ext.create('KJXM.view.reconstruction.ReconstructionPanel',{id:panelId,title:'重建项目：'+record.get('text'),xmlx:record.get('text')});break;
				//case 'ssjhd' : window.open("upload/实施计划单.xls");break;
				case 'ssjhd' : panel = Ext.create('KJXM.view.plan.PlanPanel',{id:panelId,title:record.get('text')});break;
				case 'ssjhd2' : panel = Ext.create('KJXM.view.plan.PlanGridPanel',{id:panelId,title:record.get('text')});break;//废弃
				case 'xmgsbb' : panel = Ext.create('KJXM.view.publicity.PublicityReportingPanel',{id:panelId,title:record.get('text')});break;
				case 'xmgsd' : panel = Ext.create('KJXM.view.publicity.PublicityPanel',{id:panelId,title:record.get('text')});break;
				
				case 'yhgl' : panel = Ext.create('KJXM.view.user.UserPanel',{id:panelId,title:record.get('text')});break;
				//case 'yhgl' : panel = Ext.create('Ext.panel.Panel',{title : record.get('text'),closable : true,html:'对不起，本页面还未定义！'});break;
				default : panel = Ext.create('Ext.panel.Panel',{title : record.get('text'),closable : true,html:'对不起，本页面还未定义！'});
				};
				if(flag<1){
					tab = main.add(panel);
					main.setActiveTab(tab);
				}
				
			}else{
				var panel;
				switch(panelId){
				case 'mfcj' : tab.close();panel = Ext.create('KJXM.view.housingreconstruction.HousingReconstructionPanel',{id:panelId,title:'民房重建一户一档：'+record.get('text'),dz:record.get('text')});tab = main.add(panel);break;
				case 'wxjg' : tab.close();panel = Ext.create('KJXM.view.maintenanceandreinforcement.MaintenanceAndReinforcementPanel',{id:panelId,title:'维修加固一户一档：'+record.get('text'),dz:record.get('text')});tab = main.add(panel);break;
				case 'cjxm' : tab.close();panel = Ext.create('KJXM.view.reconstruction.ReconstructionPanel',{id:panelId,title:'重建项目：'+record.get('text'),xmlx:record.get('text')});tab = main.add(panel);break;
				default : ;
				};
				main.setActiveTab(tab);
			}
			
		}

	}

})