/**
 * @author 赵亚一
 * @comment 
 * @date 2014-9-25 上午10:53:22
 */
Ext.define('KJXM.controller.KjUtil', {
	statics : {
		//转换日期字符串
		convertToDate : function(v) {
			if (v==""||v == null) {
				return null;
			}
			var str = v.toString().substring(0, 10);
			//alert(str);
			return new Date(Date.parse(str.replace(/-/g, "/")));
		},
		convertDate : function(v, record) {
			if (v==""||v == null) {
				return null;
			}
			var str = v.substring(0, 10);
			//alert(str);
			return str.replace(/-/g, "/");
		}
	}
});