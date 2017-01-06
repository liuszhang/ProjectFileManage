/**
 * @author 赵亚一
 * @comment 民房重建
 * @date 2016-7-8 下午11:13:02
 */
Ext.define('KJXM.model.HousingReconstruction', {
    extend: 'Ext.data.Model',
    fields: [
		{name: 'hbh',  type: 'string'},
		{name: 'xmmc',  type: 'string'},
		{name: 'dz',  type: 'string'},
		{name: 'xzmc',  type: 'string'},
		{name: 'cm',  type: 'string'},
		{name: 'zrcm',  type: 'string'},
		{name: 'hzxm',  type: 'string'},
		{name: 'sfzh',  type: 'string'},
		{name: 'jtrs',  type: 'int'},
		{name: 'jtll',  type: 'int'},
		{name: 'dys',  type: 'int'},
		{name: 'sc',  type: 'int'},
		{name: 'gdmj',  type: 'float'},
		{name: 'jtlx',  type: 'string'},
		{name: 'lxhm',  type: 'string'},
		{name: 'sscd',  type: 'string'},
		{name: 'cjlx',  type: 'string'},
		{name: 'cjhx',  type: 'string'},
		{name: 'cjdd',  type: 'string'},
		{name: 'cjfwjg',  type: 'string'},
		{name: 'sgdwmc',  type: 'string'},
		{name: 'sgfzr',  type: 'string'},
		{name: 'sglxhm',  type: 'string'},
		{name: 'jldwmc',  type: 'string'},
		{name: 'jlfzr',  type: 'string'},
		{name: 'jllxhm',  type: 'string'},
		{name: 'gcjd',  type: 'string'},
		{name: 'yys',  type: 'string'},
		{name: 'yjg',  type: 'string'},
		{name: 'lrndjh',  type: 'string'},
		{name: 'kgsj',  type: 'string'},
		{name: 'kgsjDate',  type: 'string', convert:function(value, record) {
			var str =record.get('kgsj');
			if(str==null||str==""||str=="1900-01-01T00:00:00"){
				return '';
			}else{
				str = str.substring(0, 7);
				return str.replace(/-/g, "/");
			}
		}},
		{name: 'sgsj',  type: 'string'},
		{name: 'sgsjDate',  type: 'string', convert:function(v, record) {
			var str =record.get('sgsj');
			if(str==null||str==""||str=="1900-01-01T00:00:00"){
				return '';
			}else{
				str = str.substring(0, 7);
				return str.replace(/-/g, "/");
			}
		}},
		{name: 'ztz',  type: 'float'},
		{name: 'gjbz',  type: 'float'},
		{name: 'qzzc',  type: 'float'},
		{name: 'qzcjdk',  type: 'float'},
		{name: 'qtzj1',  type: 'float'},
		{name: 'qtzj2',  type: 'float'},
		{name: 'qtzj3',  type: 'float'},
		{name: 'qtzj4',  type: 'float'}
    ]
});