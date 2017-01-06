/**
 * @author 赵亚一
 * @comment 
 * @date 2016-8-13 上午11:27:44
 */
Ext.define('KJXM.view.housingreconstruction.Show', {
	extend : 'KJXM.view.housingreconstruction.WinObject',
	title:'定日县“4.25”各乡镇恢复民房重建资料',
	moduleFlag:'HousingReconstruction',
	moduleName:'民房重建',
	attachmentFlag:'ListTAttachmentServlet',
	//uploadFlag:'ModifyRAAttachmentServlet',
	initComponent:function(){
		var me=this;
		
		var barItems=[];
		barItems.push('->');
		barItems.push({
			text:'输出打印',
			handler : function() {
				console.log(me.recordStr);
				//var rowHeight=20;
				var titleHtml='<html><head><link rel="stylesheet" type="text/css" href="css/print.css"></head><body>';
				titleHtml = titleHtml+ '<div width="800" style="text-align:center;border:0px none;font-size:24px;font-family: "黑体";">基本情况</div>';
				titleHtml = titleHtml+'<div align="center"><table border="1" bordercolor="#000000" cellspacing="0" width="800" style="border-collapse:collapse;font-size:16px;text-align:center;">';
				titleHtml = titleHtml+'<tr border="0" rules="none"><td colspan="8" border="0" style="font-size:12px;text-align:left;padding: 5px;">户编号：</td></tr>';
				titleHtml = titleHtml+'<tr><td colspan="8" class="printtitle">地址情况</td></tr>';
				titleHtml = titleHtml+'<tr  class="printcontent"><td colspan="8">西藏自治区日喀则市定日县<span style="text-decoration:underline;"> '+me.recordStr.get('xzmc')+' </span>乡（镇）<span style="text-decoration:underline;"> '+me.recordStr.get('cm')+' </span>村<span style="text-decoration:underline;"> '+me.recordStr.get('zrcm')+' </span>自然村</td></tr>';
				titleHtml = titleHtml+'<tr><td colspan="8" class="printtitle">家庭情况</td></tr>';
				titleHtml = titleHtml+'<tr class="printcontent"><td>户主姓名</td><td colspan="2">'+me.recordStr.get('hzxm')+'</td><td>身份证号码</td><td colspan="2">'+me.recordStr.get('sfzh')+'</td><td>家庭人数</td><td>'+me.recordStr.get('jtrs')+'</td></tr>';
				titleHtml = titleHtml+'<tr class="printcontent"><td>家庭劳力</td><td>'+me.recordStr.get('jtll')+'</td><td>党员数</td><td>'+me.recordStr.get('dys')+'</td><td>牲畜（头只匹）</td><td>'+me.recordStr.get('sc')+'</td><td>耕地面积（亩）</td><td>'+me.recordStr.get('gdmj')+'</td></tr>';
				titleHtml = titleHtml+'<tr class="printcontent"><td>家庭类型</td><td colspan="3">'+me.recordStr.get('jtlx')+'</td><td>联系号码</td><td colspan="3">'+me.recordStr.get('lxhm')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td colspan="8" class="printtitle">重建情况</td></tr>';
				titleHtml = titleHtml+'<tr class="printcontent"><td>重建类型</td><td colspan="3">'+me.recordStr.get('cjlx')+'</td><td>重建户型</td><td colspan="3">'+me.recordStr.get('cjhx')+'</td></tr>';
				titleHtml = titleHtml+'<tr class="printcontent"><td>重建地点</td><td colspan="3">'+me.recordStr.get('cjdd')+'</td><td>重建房屋结构</td><td colspan="3">'+me.recordStr.get('cjfwjg')+'</td></tr>';
				
				titleHtml = titleHtml+'<tr><td colspan="8" class="printtitle">施工单位情况</td></tr>';
				titleHtml = titleHtml+'<tr class="printcontent"><td colspan="2">施工队名称</td><td colspan="6">'+me.recordStr.get('sgdwmc')+'</td></tr>';
				titleHtml = titleHtml+'<tr class="printcontent"><td colspan="2">负责人</td><td colspan="2">'+me.recordStr.get('sgfzr')+'</td><td>联系号码</td><td colspan="3">'+me.recordStr.get('sglxhm')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td colspan="8" class="printtitle">监理单位情况</td></tr>';
				titleHtml = titleHtml+'<tr class="printcontent"><td colspan="2">监理单位名称</td><td colspan="6">'+me.recordStr.get('jldwmc')+'</td></tr>';
				titleHtml = titleHtml+'<tr class="printcontent"><td colspan="2">负责人</td><td colspan="2">'+me.recordStr.get('jlfzr')+'</td><td>联系号码</td><td colspan="3">'+me.recordStr.get('jllxhm')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td colspan="8" class="printtitle">进度情况</td></tr>';
				titleHtml = titleHtml+'<tr class="printcontent"><td colspan="2">工程阶段</td><td colspan="2">'+me.recordStr.get('gcjd')+'</td><td>是否已验收</td><td>'+me.recordStr.get('yys')+'</td><td>是否已竣工</td><td>'+me.recordStr.get('yjg')+'</td></tr>';
				titleHtml = titleHtml+'<tr class="printcontent"><td colspan="2">列入计划年度</td><td colspan="2">'+me.recordStr.get('lrndjh')+'</td><td>开工时间</td><td>'+me.recordStr.get('kgsj')+'</td><td>竣工时间</td><td>'+me.recordStr.get('sgsj')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td colspan="8" class="printtitle">资金情况</td></tr>';
				
				titleHtml = titleHtml+'<tr class="printcontent"><td>总投资</td><td colspan="3">'+me.recordStr.get('ztz')+'元</td><td>国家补助</td><td colspan="3">'+me.recordStr.get('gjbz')+'元</td></tr>';
				titleHtml = titleHtml+'<tr class="printcontent"><td>群众自筹</td><td colspan="4">'+me.recordStr.get('qzzc')+'元（其中重建贷款'+me.recordStr.get('qzcjdk')+'元）</td><td>其他资金</td><td colspan="2">'+me.recordStr.get('qtzj1')+'元</td></tr>';
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