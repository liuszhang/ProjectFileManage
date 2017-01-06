/**
 * @author 赵亚一
 * @comment 
 * @date 2016-8-28 下午1:26:30
 */
Ext.define('KJXM.model.Funding', {
    extend: 'Ext.data.Model',
    fields: [
		{name: 'xmmc',  type: 'string'},
		{name: 'je1',  type: 'string'},
		{name: 'zgck1',  type: 'string'},
		{name: 'gjbz1',  type: 'string'},
		{name: 'hzzc1',  type: 'string'},
		{name: 'bksj1',  type: 'string'},
		{name: 'bksj1Date',  type: 'string', convert:function(v, record) {
			var str =record.get('bksj1');
			if(str==null||str==""||str=="1900-01-01T00:00:00"){
				return '';
			}else{
				str = str.substring(0, 10);
				return str.replace(/-/g, "/");
			}
		}},
		{name: 'bz1',  type: 'string'},
		{name: 'je2',  type: 'string'},
		{name: 'zgck2',  type: 'string'},
		{name: 'gjbz2',  type: 'string'},
		{name: 'hzzc2',  type: 'string'},
		{name: 'bksj2',  type: 'string'},
		{name: 'bksj2Date',  type: 'string', convert:function(v, record) {
			var str =record.get('bksj2');
			if(str==null||str==""||str=="1900-01-01T00:00:00"){
				return '';
			}else{
				str = str.substring(0, 10);
				return str.replace(/-/g, "/");
			}
		}},
		{name: 'bz2',  type: 'string'},
		{name: 'je3',  type: 'string'},
		{name: 'zgck3',  type: 'string'},
		{name: 'gjbz3',  type: 'string'},
		{name: 'hzzc3',  type: 'string'},
		{name: 'bksj3',  type: 'string'},
		{name: 'bksj3Date',  type: 'string', convert:function(v, record) {
			var str =record.get('bksj3');
			if(str==null||str==""||str=="1900-01-01T00:00:00"){
				return '';
			}else{
				str = str.substring(0, 10);
				return str.replace(/-/g, "/");
			}
		}},
		{name: 'bz3',  type: 'string'},
		{name: 'je4',  type: 'string'},
		{name: 'zgck4',  type: 'string'},
		{name: 'gjbz4',  type: 'string'},
		{name: 'hzzc4',  type: 'string'},
		{name: 'bksj4',  type: 'string'},
		{name: 'bksj4Date',  type: 'string', convert:function(v, record) {
			var str =record.get('bksj4');
			if(str==null||str==""||str=="1900-01-01T00:00:00"){
				return '';
			}else{
				str = str.substring(0, 10);
				return str.replace(/-/g, "/");
			}
		}},
		{name: 'bz4',  type: 'string'}
    ]
});