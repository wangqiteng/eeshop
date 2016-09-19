// JavaScript Document
$(document).ready(function() {
	$("#uprovince").change(function(){

		switch($("#uprovince option:selected").text()){
			case "浙江":
				$("#ucity").append("<option value='杭州'>杭州</option>");
				$("#ucity").append("<option value='宁波'>宁波</option>");
				$("#ucity").append("<option value='温州'>温州</option>");
  				break;
			
			default:
				$("#ucity").empty();
				$("#ucity").append("<option>请选择城市</option>");
		}
	})
});
$(function(){
	$("#delete_addr").click(function(){
		var obj = $(this);
		layer.confirm('确认删除该地址？', {
			btn: ['确定','取消'] //按钮
		}, function(){
			obj.parent().parent().parent().remove();
			layer.msg('地址已删除！', {
				time: 1000,
			});
		}, function(){});
	})
})

// JavaScript Document
function validatePostcode(){
	$("#postcode").val($("#postcode").val().replace(/(^\s*)|(\s*$)/g,""));
	var postcode = $("#postcode").val();
	var rpostcode = /^\d{6}$/;
	if(postcode==null || postcode==""){
		$("#msg_postcode").html("请填写邮政编码");
		return false;
	}else if(!rpostcode.test(postcode)){
		$("#msg_postcode").html("请填写正确的邮政编码");
		return false;
	}else{
		$("#msg_postcode").html("");
		return true;
	}
}
function validateStreet(){
	var street = $("#street").val();
	if(street==null || street==""){
		$("#msg_street").html("请填写街道");
		return false;
	}else{
		$("#msg_street").html("");
		return true;
	}
}
function validateRname(){
	var rname = $("#rname").val();
	if(rname==null || rname==""){
		$("#msg_rname").html("请填写收件人姓名");
		return false;
	}else{
		$("#msg_rname").html("");
		return true;
	}
}
function validatePnum(){
	$("#pnum").val($("#pnum").val().replace(/(^\s*)|(\s*$)/g,""));
	var pnum = $("#pnum").val();
	var rpnum = /^1[3|4|5|7|8]\d{9}$/;
	if(pnum==null || pnum==""){
		$("#msg_pnum").html("请填写号码");
		return false;
	}else if(!rpnum.test(pnum)){
		$("#msg_pnum").html("请填写正确的号码");
		return false;
	}else{
		$("#msg_pnum").html("");
		return true;
	}
}
$(document).ready(function(e) {
	$("#addr_form").submit(function(){
		if(!validatePostcode()|!validateStreet()|!validateRname()|!validatePnum()){
			return false;
		}else if($("#province option:selected").val()=="" || $("#city option:selected").val()=="" || $("#area option:selected").val()==""){
			return false;
		}else{
			return true;
		}
	});
});


// JavaScript Document
//表单提交前获取上传文件的路径
function getPath(obj) { 
  if(obj) { 
      if (window.navigator.userAgent.indexOf("MSIE")>=1) { 
        obj.select(); 
        return document.selection.createRange().text; 
      } 
      else if(window.navigator.userAgent.indexOf("Firefox")>=1) { 
        if(obj.files) { 
          return obj.files.item(0).getAsDataURL(); 
        } 
        return obj.value; 
      }else if( navigator.userAgent.toLowerCase().indexOf('chrome') > -1 ){
            var f = obj.files[0]
            var src = window.URL.createObjectURL(f);  
            return src;
      }
      return obj.value; 
  } 
} 