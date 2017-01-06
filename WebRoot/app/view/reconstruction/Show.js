/**
 * @author 赵亚一
 * @comment 
 * @date 2016-8-13 上午11:27:44
 */
Ext.define('KJXM.view.reconstruction.Show', {
	extend : 'KJXM.view.reconstruction.WinObject',
	title:'定日县“4.25”各乡镇恢复重建资料',
	moduleFlag:'Reconstruction',
	moduleName:'重建项目',
	attachmentFlag:'ListTAttachmentServlet',
	//uploadFlag:'ModifyRAAttachmentServlet',
	initComponent:function(){
		var me=this;
		var getTitle=function(str){
			return '<tr><td colspan="6" style="padding: 7px 2px;text-align: center;font-size:16px;font-family: \'黑体\'; border:solid #000 1px;">'+str+'</td></tr>';
		};
		var getContent=function(){
			return ' style="text-align: center;font-size:12px;padding: 7px 2px; border:solid #000 1px;"';
		};
		var getContent3=function(){
			return ' style="text-align: center;font-size:12px;padding: 3px 2px; border:solid #000 1px;"';
		};
		var getContent3Row=function(){
			return ' style="text-align:left;font-size:12px;min-height:90px;text-indent:24px;"';
		};
		var barItems=[];
		barItems.push('->');
		barItems.push({
			text:'输出打印',
			handler : function() {
				//console.log(me.recordStr);
				//var rowHeight=20;
				var titleHtml='<html><head><link rel="stylesheet" type="text/css" href="css/print.css"></head><body>';
				titleHtml = titleHtml+ '<div width="700" style="padding:8px;text-align:center;border:0px none;font-size:24px;font-family: \'黑体\';">工程概况</div>';
				titleHtml = titleHtml+'<div align="center"><table border="0" bordercolor="#000000" cellspacing="0" width="650" style="border-collapse:collapse;font-size:16px;text-align:center;">';
				titleHtml = titleHtml+'<tr><td'+getContent()+'>项目名称</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('xmmc')+'</td><td'+getContent()+'>项目主管单位</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('xmzgdw')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td'+getContent()+'>建设地点</td><td colspan="5"'+getContent()+'>'+me.recordStr.get('cjdd')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td'+getContent()+'>项目类型</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('xmlx')+'</td><td'+getContent()+'>建设性质</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('jsxz')+'</td></tr>';
				titleHtml = titleHtml+getTitle('建设内容及规模');
				titleHtml = titleHtml+'<tr><td colspan="6"'+getContent3()+'><div'+getContent3Row()+'><p>'+me.recordStr.get('jsnrjgm')+'</p></div></td></tr>';
				titleHtml = titleHtml+getTitle('资金情况');
				titleHtml = titleHtml+'<tr><td'+getContent()+'>投资批复文号</td><td colspan="5"'+getContent()+'>'+me.recordStr.get('tzpfwh')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td'+getContent()+'>总投资（万元）</td><td colspan="5"'+getContent()+'>'+me.recordStr.get('ztz')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td'+getContent()+'>国家补助（万元）</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('gjbz')+'</td><td'+getContent()+'>本级财政配套（万元）</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('qzzc')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td'+getContent()+'>援藏配套资金（万元）</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('qzcjdk')+'</td><td'+getContent()+'>其他资金1（万元）</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('qtzj1')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td'+getContent()+'>其他资金2（万元）</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('qtzj2')+'</td><td'+getContent()+'>备注</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('bz')+'</td></tr>';
				titleHtml = titleHtml+getTitle('地勘单位');
				titleHtml = titleHtml+'<tr><td'+getContent()+'>单位名称</td><td colspan="5"'+getContent()+'>'+me.recordStr.get('sgdwmc')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td'+getContent()+'>负责人</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('sgfzr')+'</td><td'+getContent()+'>联系号码</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('sglxhm')+'</td></tr>';
				titleHtml = titleHtml+getTitle('设计单位');
				titleHtml = titleHtml+'<tr><td'+getContent()+'>单位名称</td><td colspan="5"'+getContent()+'>'+me.recordStr.get('sgdwmc')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td'+getContent()+'>负责人</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('sgfzr')+'</td><td'+getContent()+'>联系号码</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('sglxhm')+'</td></tr>';
				titleHtml = titleHtml+getTitle('施工单位情况');
				titleHtml = titleHtml+'<tr><td'+getContent()+'>单位名称</td><td colspan="5"'+getContent()+'>'+me.recordStr.get('sgdwmc')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td'+getContent()+'>负责人</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('sgfzr')+'</td><td'+getContent()+'>联系号码</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('sglxhm')+'</td></tr>';
				titleHtml = titleHtml+getTitle('监理单位情况');
				titleHtml = titleHtml+'<tr><td'+getContent()+'>单位名称</td><td colspan="5"'+getContent()+'>'+me.recordStr.get('jldwmc')+'</td></tr>';
				titleHtml = titleHtml+'<tr><td'+getContent()+'>负责人</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('jlfzr')+'</td><td'+getContent()+'>联系号码</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('jllxhm')+'</td></tr>';
				titleHtml = titleHtml+getTitle('进度情况');
				titleHtml = titleHtml+'<tr><td'+getContent()+'>开工时间</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('kgsjDate')+'</td><td'+getContent()+'>竣工时间</td><td colspan="2"'+getContent()+'>'+me.recordStr.get('sgsjDate')+'</td></tr>';
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