// JavaScript Document
$(function(){
	$(".change").click(function(){
		$("#items_id").val("");
		$("#result").html("请输入商品编号，验证商品是否在架");
		$("#onsale_picture").attr("src","");
		if($(this).val()=="更换3"){
			$("#test").removeClass("hide");
			$("#upload_onsale").removeClass("hide");
			$("#operation").removeClass("hide");
			$("#msg_onsale").html("图片比例约为3:5，宽度不小于300");
		}else{
			$("#test").removeClass("hide");
			$("#upload_onsale").removeClass("hide");
			$("#operation").removeClass("hide");
			$("#msg_onsale").html("图片比例约为4:5，宽度不小于200");
		}
	})
})


$(function(){
	$("#test_items").click(function(){
		$("#result")
	})
})


$(function(){
	$("#cancel").click(function(){
		$("#test").addClass("hide");
		$("#upload_onsale").addClass("hide");
		$("#operation").addClass("hide");
	})
})



