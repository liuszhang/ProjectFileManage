/**
 * @author 赵亚一
 * @comment 计划单
 * @date 2016-8-27 上午02:24:31
 */
Ext.define('KJXM.view.plan.PlanPanel', {
	extend : 'Ext.panel.Panel',
	//title: '实施计划单',
    autoScroll : true,
    closable : true,
    items:[{
    	xtype: 'dataview',
    	height : 1200,
    	itemSelector: 'tr.printcontent',
    	store:Ext.create('KJXM.store.PlanSummary'),
	    tpl: Ext.create('Ext.XTemplate',
	    		'<div width="1200"><table border="1" bordercolor="#000000" cellspacing="0" width="3800" style="border-collapse:collapse;font-size:14px;text-align:center;">',
	    			'<tr><th colspan="34" style="font-size:24px;text-align:center;padding: 10px;">',
	    				'西藏日喀则市定日县“4·25”地震灾区灾后恢复重建项目进展情况汇总表<br><span style="font-size:12px;float:left;padding: 2px;">填表单位:定日县人民政府</span><span style="font-size:12px;float:right;padding: 2px;">单位:万元</span>',  
	    			'</th></tr>',
	    			'<tr><td>序号</td><td>项目名称</td><td>主要建设内容及规模</td><td>总投资</td><td colspan="3">资金来源</td><td>结余或超额资金</td><td>概算批复投资</td><td>当月累计完成投资</td><td>累计完成固定资产投资</td><td width="80">当月财务支出</td><td>累计财务支出</td><td colspan="8">前期工作</td><td>实施方案批复</td><td>项目可研批复文号</td><td>项目初设概算批复</td><td width="80">防雷审查合格书</td><td>消防审查合格书</td><td>建设工程规划许可证</td><td>施工图审查合格书</td><td width="80">中标通知书</td><td width="80">施工许可证</td><td width="80">现阶段进度</td><td width="80">开工时间</td><td width="80">竣工时间</td><td>备注</td></tr>',
	    			'<tr><td></td><td></td><td></td><td></td><td>中央财政补助资金</td><td>自筹资金（县级自筹）</td><td>其他自筹（农牧民自筹）</td><td></td><td></td><td></td><td></td><td></td><td></td><td>环评文号</td><td>规划选址意见书</td><td>土地预审（申请)文号</td><td>节能登记文号</td><td>社会风险评估文号</td><td width="100">可研单位</td><td width="100">初设单位</td><td width="100">地勘单位</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>',
	    			'<tpl for=".">', 
		    			'<tr><td>{plans1}</td><td>{plans2}</td><td>{plans3}</td><td>{plans4}</td><td>{plans5}</td><td>{plans6}</td><td>{plans7}</td><td>{plans8}</td><td>{plans9}</td><td>{plans10}</td><td>{plans11}</td><td>{plans12}</td><td>{plans13}</td><td>{plans14}</td><td>{plans15}</td><td>{plans16}</td><td>{plans17}</td><td>{plans18}</td><td>{plans19}</td><td>{plans20}</td><td>{plans21}</td><td>{plans22}</td><td>{plans23}</td><td>{plans24}</td><td>{plans25}</td><td>{plans26}</td><td>{plans27}</td><td>{plans28}</td><td>{plans29}</td><td>{plans30}</td><td>{plans31}</td><td>{plans32}</td><td>{plans33}</td><td>{plans34}</td></tr>',
	    	        '</tpl>',
	    	    '</table></div>'
        )
    }],
	initComponent : function() {
		this.callParent(arguments);
	}
})