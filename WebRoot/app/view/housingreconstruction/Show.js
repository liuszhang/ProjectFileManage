/**
 * @author 赵亚一
 * @comment 
 * @date 2016-8-13 上午11:27:44
 */
Ext.define('KJXM.view.housingreconstruction.Show', {
	extend : 'KJXM.view.housingreconstruction.WinObject',
	title:'定日县“4.25”灾后民房重建一户一档资料',
	moduleFlag:'HousingReconstruction',
	moduleName:'民房重建',
	initComponent:function(){
		var me=this;
		var getTitle=function(str){
			return '<tr><td colspan="8" style="padding: 9px 2px;text-align: center;font-size:16px;font-family: \'黑体\'; border:solid #000 1px;">'+str+'</td></tr>';
		};
		var getContent=function(){
			return ' style="text-align: center;font-size:12px;padding: 9px 2px; border:solid #000 1px;"';
		};
		var getContent2Row=function(){
			return ' style="text-align: center;font-size:12px;padding: 1px; border:solid #000 1px;"';
		};
		var barItems=[];
		barItems.push('->');
		barItems.push({
			text:'输出打印',
			handler : function() {
				//console.log(me.recordStr);
				//var rowHeight=20;
				var titleHtml='<html><head><link rel="stylesheet" type="text/css" href="css/print.css"></head><body>';
				titleHtml = titleHtml+ '<div width="700" style="padding:8px;text-align:center;border:0px none;font-size:24px;font-family: \'黑体\';">基本情况</div>';
				titleHtml = titleHtml+'<div align="center"><table border="0" bordercolor="#000000" cellspacing="0" width="650" style="border-collapse:collapse;font-size:16px;text-align:center;">';
				titleHtml = titleHtml+'<tr border="0" rules="none"><td colspan="5" border="0" style=" border-top-style: none;font-size:12px;text-align:left;padding: 5px;">户编号：'+me.recordStr.get('hbh')+' </td><td colspan="3" border="0" style=" border-top-style: none;font-size:12px;text-align:right;padding: 5px;">受损程度：'+me.recordStr.get('sscd')+' </td></tr>';
				titleHtml = titleHtml+getTitle('地址情况');
				titleHtml = titleHtml+'<tr><td colspan="8"'+getContent()+'>西藏自治区日喀则市定日县<span style="text-decoration:underline;"> '+me.recordStr.get('xzmc')+' </span><span style="text-decoration:underline;"> '+me.recordStr.get('cm')+' </span><span style="text-decoration:underline;"> '+me.recordStr.get('zrcm')+' </span></td></tr>';
				titleHtml = titleHtml+getTitle('家庭情况');
				titleHtml = titleHtml+'<tr><td'+getContent()+'>户主姓名</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('hzxm')+'</td><td'+getContent()+'>身份证号码</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('sfzh')+'</td><td'+getContent()+'>家庭人数</td><td'+getContent()+'>'+me.recordStr.get('jtrs')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td'+getContent()+'>家庭劳力</td><td'+getContent()+'>'+me.recordStr.get('jtll')+'</td><td'+getContent()+'>党员数</td><td'+getContent()+'>'+me.recordStr.get('dys')+'</td><td'+getContent2Row()+'>牲畜<br />（头只匹）</td><td'+getContent()+'>'+me.recordStr.get('sc')+'</td><td'+getContent2Row()+'>耕地面积<br />（亩）</td><td'+getContent()+'>'+me.recordStr.get('gdmj')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td'+getContent()+'>家庭类型</td><td colspan="3"'+getContent()+'>'+me.recordStr.get('jtlx')+'</td><td'+getContent()+'>联系号码</td><td colspan="3"'+getContent()+'>'+me.recordStr.get('lxhm')+'</td></tr>';
				titleHtml = titleHtml+getTitle('重建情况');
				titleHtml = titleHtml+'<tr><td'+getContent()+'>重建类型</td><td colspan="3"'+getContent()+'>'+me.recordStr.get('cjlx')+'</td><td'+getContent()+'>重建户型</td><td colspan="3"'+getContent()+'>'+me.recordStr.get('cjhx')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td'+getContent()+'>重建地点</td><td colspan="3"'+getContent()+'>'+me.recordStr.get('cjdd')+'</td><td'+getContent()+'>重建房屋结构</td><td colspan="3"'+getContent()+'>'+me.recordStr.get('cjfwjg')+'</td></tr>';
				
				titleHtml = titleHtml+getTitle('施工单位情况');
				titleHtml = titleHtml+'<tr><td colspan="2"'+getContent()+'>施工队名称</td><td colspan="6"'+getContent()+'>'+me.recordStr.get('sgdwmc')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td colspan="2"'+getContent()+'>负责人</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('sgfzr')+'</td><td'+getContent()+'>联系号码</td><td colspan="3"'+getContent()+'>'+me.recordStr.get('sglxhm')+'</td></tr>';
				titleHtml = titleHtml+getTitle('监理单位情况');
				titleHtml = titleHtml+'<tr><td colspan="2"'+getContent()+'>监理单位名称</td><td colspan="6"'+getContent()+'>'+me.recordStr.get('jldwmc')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td colspan="2"'+getContent()+'>负责人</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('jlfzr')+'</td><td'+getContent()+'>联系号码</td><td colspan="3"'+getContent()+'>'+me.recordStr.get('jllxhm')+'</td></tr>';
				titleHtml = titleHtml+getTitle('进度情况');
				titleHtml = titleHtml+'<tr><td colspan="2"'+getContent()+'>工程阶段</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('gcjd')+'</td><td'+getContent()+'>是否已验收</td><td'+getContent()+'>'+me.recordStr.get('yys')+'</td><td'+getContent()+'>是否已竣工</td><td'+getContent()+'>'+me.recordStr.get('yjg')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td colspan="2"'+getContent()+'>列入计划年度</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('lrndjh')+'</td><td'+getContent()+'>开工时间</td><td'+getContent()+'>'+me.recordStr.get('kgsjDate')+'</td><td'+getContent()+'>竣工时间</td><td'+getContent()+'>'+me.recordStr.get('sgsjDate')+'</td></tr>';
				titleHtml = titleHtml+getTitle('资金情况');
				
				titleHtml = titleHtml+'<tr><td'+getContent()+'>总投资</td><td colspan="3"'+getContent()+'>'+me.recordStr.get('ztz')+'元</td><td'+getContent()+'>国家补助</td><td colspan="3"'+getContent()+'>'+me.recordStr.get('gjbz')+'元</td></tr>';
				titleHtml = titleHtml+'<tr><td'+getContent()+'>群众自筹</td><td colspan="7"'+getContent()+'>'+me.recordStr.get('qzzc')+'元（其中重建贷款'+me.recordStr.get('qzcjdk')+'元）</td></tr>';
				titleHtml = titleHtml+'<tr><td'+getContent()+'>本机财政自筹资金</td><td colspan="3"'+getContent()+'>'+me.recordStr.get('qtzj1')+'元</td><td'+getContent()+'>农牧三配套资金</td><td colspan="3"'+getContent()+'>'+me.recordStr.get('qtzj2')+'元</td></tr>';
				titleHtml = titleHtml+'<tr><td'+getContent()+'>棚户区改造资金</td><td colspan="3"'+getContent()+'>'+me.recordStr.get('qtzj3')+'元</td><td'+getContent()+'>其他资金</td><td colspan="3"'+getContent()+'>'+me.recordStr.get('qtzj4')+'元</td></tr>';
				titleHtml = titleHtml+'</table></div>';
				titleHtml = titleHtml+'</body></html>';
				//titleHtml = titleHtml+'</div>';
				var newwin = window.open("printer.html", "", "");
		  		newwin.document.write(titleHtml);
		  		newwin.document.location.reload();
		  		newwin.print();
		  		//newwin.close();
			}
		});
/*		barItems.push({
			text:'保存',
			itemId:'createSave'
		});*/
		var dock=[{
			xtype:'toolbar',
			dock:'bottom',
			ui: 'footer',
			items:barItems
		}];
		//me.dockedItems=dock;
		//console.log(me.items[0].items[0]);
		me.items[0].items[0].dockedItems=dock;
		
		this.callParent(arguments);
	}
})