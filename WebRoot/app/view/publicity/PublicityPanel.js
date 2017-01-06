/**
 * @author 赵亚一
 * @comment 公示栏
 * @date 2016-8-27 上午03:24:52
 */
Ext.define('KJXM.view.publicity.PublicityPanel', {
	extend : 'Ext.panel.Panel',
	//title: '实施计划单',
    autoScroll : true,
    closable : true,
    items:[{
    	xtype: 'dataview',
    	height : 600,
    	itemSelector: 'tr.printcontent',
    	store:Ext.create('KJXM.store.Publicity'),
	    tpl: Ext.create('Ext.XTemplate',
	    		'<div>',
	    		'<table border="1" bordercolor="#000000" cellspacing="0" width="1500" style="border-collapse:collapse;font-size:14px;text-align:center;">',
	    			'<tr><th colspan="23" style="font-size:22px;text-align:center;padding: 10px;">',
	    				'<div>དིང་རི་རྫོང་༤﹒༢༥ས་ཡོམས་གེགས་རྗེས་སླར་གསོ་བསྐྱར་བསྐྲུན་རྣམ་གྲངས་སྤྱི་བསྒྲགས་སྒྲོམ་སྟེགས།</div>',
	    				'定日县4﹒25地震灾后恢复重建项目公示栏', 
	    			'</th></tr>',
	    			'<tr><td rowspan="2">序号</td><td rowspan="2">项目建设地点</td><td rowspan="2">项目内容</td><td rowspan="2">建设项目工程量</td><td rowspan="2">项目类型</td><td rowspan="2">总投资（万元）</td><td colspan="4">资金来源</td><td rowspan="2">概算批复投资额</td><td rowspan="2">建设单位</td><td rowspan="2">责任单位</td><td rowspan="2">环评单位</td><td rowspan="2">地勘单位</td><td rowspan="2">批准部门</td><td rowspan="2">设计单位</td><td rowspan="2">招标单位</td><td rowspan="2">施工队名称</td><td rowspan="2">监理单位</td><td rowspan="2">开工时间</td><td rowspan="2">竣工时间</td><td rowspan="2">备注</td></tr>',
	    			'<tr><td>中央财政补助资金</td><td>自筹资金（县级）</td><td>农牧民自筹</td><td>其他资金</td></tr>',
	    			'<tpl for=".">', 
		    			'<tr><td>{xh}</td><td>{jsdd}</td><td>{xmnr}</td><td>{jsxmgcl}</td><td>{xmlx}</td><td>{ztz}</td><td>{zyczbzzj}</td><td>{zczj}</td><td>{nmmzc}</td><td>{qtzj}</td><td>{gspftze}</td><td>{jsdw}</td><td>{zrdw}</td><td>{hpdw}</td><td>{dkdw}</td><td>{pzdw}</td><td>{sjdw}</td><td>{zbdw}</td><td>{sgdmc}</td><td>{jldw}</td><td>{kgdw}</td><td>{jgsj}</td><td>{bz}</td></tr>',
	    	        '</tpl>',
	    	    '</table>',
	    	    '</div>'
        )
    }],
	initComponent : function() {
		this.callParent(arguments);
	}
})