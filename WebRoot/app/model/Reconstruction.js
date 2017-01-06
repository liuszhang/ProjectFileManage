/**
 * @author 赵亚一
 * @comment 重建
 * @date 2016-7-8 下午11:13:02
 */
Ext.define('KJXM.model.Reconstruction', {
    extend: 'Ext.data.Model',
    fields: [
		{name: 'id',  type: 'int'},
		{name: 'xmmc',  type: 'string'},
		{name: 'cjdd',  type: 'string'},
		{name: 'xmlx',  type: 'string'},
		{name: 'jsxz',  type: 'string'},
		{name: 'jsnrjgm',  type: 'string'},
		{name: 'xmzgdw',  type: 'string'},
		{name: 'dkdwmc',  type: 'string'},
		{name: 'dkfzr',  type: 'string'},
		{name: 'dklxhm',  type: 'string'},
		{name: 'sjdwmc',  type: 'string'},
		{name: 'sjfzr',  type: 'string'},
		{name: 'sjlxhm',  type: 'string'},
		{name: 'sgdwmc',  type: 'string'},
		{name: 'sgfzr',  type: 'string'},
		{name: 'sglxhm',  type: 'string'},
		{name: 'jldwmc',  type: 'string'},
		{name: 'jlfzr',  type: 'string'},
		{name: 'jllxhm',  type: 'string'},
		{name: 'kgsj',  type: 'string'},
		{name: 'kgsjDate',  type: 'string', convert:function(v, record) {
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
		{name: 'tzpfwh',  type: 'string'},
		{name: 'ztz',  type: 'float'},
		{name: 'gjbz',  type: 'float'},
		{name: 'qzzc',  type: 'float'},
		{name: 'qzcjdk',  type: 'float'},
		{name: 'qtzj1',  type: 'float'},
		{name: 'qtzj2',  type: 'float'},
		{name: 'bz',  type: 'string'}
    ]
});