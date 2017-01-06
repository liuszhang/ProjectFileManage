Ext.onReady(function(){
Ext.getBody().on("keypress",function(e){
      var name = Ext.getDom("j_username").value;
      var pass = Ext.getDom("j_password").value;
      if(e.getKey() ==  Ext.EventObject.ENTER) {
      if(name==""||pass=="") {
     //Ext.Msg.alert("提示","请输入用户名和密码");
    	alert("请输入用户名和密码");    
    	}
      else {
    	//alert("test");
    	Ext.getDom("loginbutton").submit();
    }
    }

    });
});