/**
 * @author 赵亚一
 * @comment 
 * @date 2016-8-13 上午11:27:44
 */
Ext.define('KJXM.view.maintenanceandreinforcement.Show', {
	extend : 'KJXM.view.maintenanceandreinforcement.WinObject',
	title:'定日县4.25地震灾后维修加固民房一户一档',
	moduleFlag:'MaintenanceAndReinforcement',
	moduleName:'维修加固',
	attachmentFlag:'ListTAttachmentServlet',
	//uploadFlag:'ModifyRAAttachmentServlet',
	initComponent:function(){
		var me=this;
		var barItems=[];
		barItems.push('->');
		barItems.push({
			text:'输出打印',
			handler : function() {
				//console.log(me.recordStr.get('sscd'));
				//var rowHeight=20;
				var titleHtml='<html><head><link rel="stylesheet" type="text/css" href="css/print.css"></head><body>';
				titleHtml = titleHtml+ '<div width="800" style="text-align:center;border:0px none;font-size:20px;font-family: \'黑体\';">定日县4.25地震灾后维修加固民房一户一档</div>';
				titleHtml = titleHtml+'<div align="center"><table border="1" bordercolor="#000000" cellspacing="0" width="800" style="border-collapse:collapse;font-size:14px;text-align:center;">';
				titleHtml = titleHtml+'<tr border="0" rules="none"><td colspan="8" border="0" style="font-size:14px;text-align:left;padding: 5px;">编制单位：定日县协格尔镇人民政府</td><td colspan="3" border="0" style="padding: 5px;">受损程度：'+me.recordStr.get('sscd')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td rowspan="2" style="font-size:14px;text-align:center;padding: 5px;">地址</td><td rowspan="2" colspan="2" style="padding: 5px;">定日县</td><td colspan="3">乡（镇）</td><td colspan="2">行政村</td><td colspan="2">自然村</td><td>门牌号</td></tr>';
				titleHtml = titleHtml+'<tr><td colspan="3">'+me.recordStr.get('xz')+'</td><td colspan="2">'+me.recordStr.get('xzc')+'</td><td colspan="2">'+me.recordStr.get('zrc')+'</td><td>'+me.recordStr.get('mph')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td rowspan="2" style="padding: 5px;">户主信息</td><td>户主姓名</td><td colspan="4">身份证号码</td><td>联系号码</td><td rowspan="2" style="font-size:14px;text-align:center;padding: 5px;">家庭信息</td><td>家庭人口</td><td>劳动力</td><td>是否低保户</td></tr>';
				titleHtml = titleHtml+'<tr><td>'+me.recordStr.get('hzxm')+'</td><td colspan="4">'+me.recordStr.get('sfzh')+'</td><td>'+me.recordStr.get('lxhm')+'</td><td>'+me.recordStr.get('jtrk')+'</td><td>'+me.recordStr.get('ldl')+'</td><td>'+me.recordStr.get('sfdbh')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td rowspan="2" style="padding: 5px;">房屋基本信息</td><td>建造年代</td><td colspan="2">房屋结构</td><td>层数</td><td rowspan="3">受损情况</td><td colspan="2">建筑面积</td><td colspan="2">是否安居工程</td><td>国家补助资金</td></tr>';
				titleHtml = titleHtml+'<tr><td>'+me.recordStr.get('jznd')+'</td><td colspan="2">'+me.recordStr.get('fwjg')+'</td><td>'+me.recordStr.get('cs')+'</td><td colspan="2">'+me.recordStr.get('jzmj')+'</td><td colspan="2">'+me.recordStr.get('sfajgc')+'</td><td>'+me.recordStr.get('gjbzzj')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td rowspan="3" style="padding: 5px;">震后房屋受损情况</td><td>是否结构受损</td><td colspan="2">是否非承重构件受损</td><td>是否地基沉降</td><td rowspan="3" colspan="5">震后房屋受损图片'+me.recordStr.get('zhfwsszp')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td rowspan="2">'+me.recordStr.get('sfjgss')+'</td><td rowspan="2" colspan="2">'+me.recordStr.get('sffczgjss')+'</td><td rowspan="2">'+me.recordStr.get('sfdjcj')+'</td><td rowspan="2">'+me.recordStr.get('ssqk')+'</td></tr>';
				titleHtml = titleHtml+'<tr></tr>';
				titleHtml = titleHtml+'<tr><td rowspan="2" style="padding: 5px;">震后（维修加固）情况</td><td colspan="5">维修情况描述及验收情况</td><td rowspan="2" colspan="5">维修过程图片'+me.recordStr.get('wxgctp')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td colspan="5">'+me.recordStr.get('wxqkmsjysqk')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td rowspan="3" style="padding: 5px;">资金拨付情况</td><td>预付款拨付比例（%）</td><td>'+me.recordStr.get('yfkbfbl')+'</td><td colspan="2">预付款拨付金额（元）</td><td>'+me.recordStr.get('yfkbfje')+'</td><td rowspan="3" colspan="5">验收通过后的图片'+me.recordStr.get('ystghdtp')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td>验收结算金额（元）</td><td>'+me.recordStr.get('ysjsje')+'</td><td colspan="2">领款人</td><td>'+me.recordStr.get('lkr')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td>结余资金（元）</td><td>'+me.recordStr.get('jyzj')+'</td><td colspan="2">经办人</td><td>'+me.recordStr.get('jbr')+'</td></tr>';
				titleHtml = titleHtml+'</table></div>';
				titleHtml = titleHtml+'</body></html>';
				
				var newwin = window.open("printer.html", "", "");
		  		newwin.document.write(titleHtml);
		  		newwin.document.location.reload();
		  		newwin.print();
		  		//newwin.close();
			}
		});
		var dock=[{
			xtype:'toolbar',
			dock:'bottom',
			ui: 'footer',
			items:barItems
		}];
		//me.dockedItems=dock;
		me.items[0].items[0].dockedItems=dock;
		this.callParent(arguments);
	}
})