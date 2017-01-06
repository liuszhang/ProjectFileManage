/**
 * 多文件上传组件 
 * for extjs4.0
 * @author caizhiping
 * @since 2012-11-15
 */
Ext.define('KJXM.view.upload.UploadWindow',{
	extend : 'KJXM.view.KjWindow',
	alias : 'widget.uploadpanel',
	autoShow : true,
	autoScroll : true,
	modal : true,
	frame : true,
	relatedGrid:'wxjg',
	fileModel:'',
	xmmc:'',
	lx:'',
	border : false,
	width:900,
	width : 700,
	height : 300,
	initComponent:function(){
		var me=this;
		//me.items=[uploadPanel];
		this.callParent(arguments);
		
		var uploadPanel=Ext.create('KJXM.view.upload.UploadPanel',{
		    autoShow : true,
		    fileNumLimit:me.fileNumLimit,
		    addFileBtnText : '选择文件...',  
		    uploadBtnText : '上传',  
		    removeBtnText : '移除所有',  
		    cancelBtnText : '取消上传',  
		    file_size_limit : 10000,//MB  
		    post_params: {
                "model" : me.fileModel,
                "xmmc":me.xmmc,
                "lx":me.lx
            },
		    upload_url : 'fileDataImp.action'  
		});
		me.add(uploadPanel);
		me.on('close',function(panel , eOpts ){
			uploadPanel.close();
		},this);
	}
});