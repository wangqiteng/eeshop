// JavaScript Document
function selectAll(obj){
	var arrChk = $("input[name='check_this']");
	if(obj.checked){
		for(var i =0;i<arrChk.length;i++){
			arrChk[i].checked = true;
		}
	}else{
		for(var j =0;j<arrChk.length;j++){
			arrChk[j].checked = false;
		}
	}
}


$(function(){
	$("#items_id").blur(function(){
		$(this).val($(this).val().replace(/(^\s*)|(\s*$)/g,""));
		var itemsId = $(this).val();
		var ritemsId = /^\d{4}$/;
		if(itemsId==null || itemsId==""){
		}else if(!ritemsId.test(itemsId)){
			$(this).val("");
			$(this).focus();
		}
	});
})



$(function(){
	$("#price_start").blur(function(){
		$(this).val($(this).val().replace(/(^\s*)|(\s*$)/g,""));
		var priceStart = $(this).val();
		var rpriceStart =  /^\d{1,6}(\.\d{0,4})?$/;
		if(priceStart==null || priceStart==""){
		}else if(!rpriceStart.test(priceStart)){
			$(this).val("");
			$(this).focus();
		}else{
			$(this).val(parseFloat($(this).val()).toFixed(2));
		}
	});
})


$(function(){
	$("#price_end").blur(function(){
		$(this).val($(this).val().replace(/(^\s*)|(\s*$)/g,""));
		var priceEnd = $(this).val();
		var rpriceEnd =  /^\d{1,6}(\.\d{0,4})?$/;
		if(priceEnd==null || priceEnd==""){
		}else if(!rpriceEnd.test(priceEnd)){
			$(this).val("");
			$(this).focus();
		}else{
			$(this).val(parseFloat($(this).val()).toFixed(2));
		}
	});
})



$(function(){
	$("#empty").click(function(){
		$("#items_name,#items_id,#price_start,#price_end").val("");
	});
})



$(function(){
	$("#items").delegate('tr>td>#delete_items','click',function(){
		var obj = $(this);
		layer.confirm('确认下架该商品？', {
			btn: ['确定','取消'] //按钮
		}, function(){
			obj.parent().parent().remove();
			layer.msg('该商品已下架！', {
				time: 1000,
			});
		}, function(){});
	});
})


$(function(){
	$("#delete_some_items").click(function(){
		var itemsList = $("input:checkbox[name='check_this']:checked");
		if(itemsList.length==0){
			layer.msg('请选择商品！', {
				time: 1000,
			});
		}else{
			layer.confirm('确认下架？', {
				btn: ['确定','取消'] //按钮
			}, function(){
				$("input:checkbox[name='check_this']:checked").each(function() {
                	$(this).parent().parent().remove();
           		});
				layer.msg('已下架！', {
					time: 1000,
				});
			}, function(){});
		}
	})
})


$(function(){
	$(".digg").delegate(".page","click",function(){
		var oldPage = $(".digg>.current").html();
		$(".digg>.current").replaceWith("<a href='#?page="+oldPage+"' class='page'>"+oldPage+"</a>");
		var newPage = $(this).html();
		var previousPage = parseInt(newPage)-1;
		$(this).replaceWith("<span class='current'>"+newPage+"</span>");
		if(newPage!=1){
			$(".digg>.disabled").replaceWith("<a href='#?page="+previousPage+"' id='previous_page'>&lt;</a>")
		}else{
			$(".digg>#previous_page").replaceWith("<span class='disabled'>&lt; </span>")
		}
	})
})


$(function(){
	$(".digg").delegate("#previous_page","click",function(){
		var oldPage  = $(".digg>.current").html();
		var newPage =  parseInt(oldPage)-1;
		var obj = $(".digg>.current");
		$(".digg>.current").prev(".page").replaceWith("<span class='current'>"+newPage+"</span>");
		if(parseInt(oldPage)==2){
			$(this).replaceWith("<span class='disabled'>&lt; </span>");
		}
		obj.replaceWith("<a href='#?page="+oldPage+"' class='page'>"+oldPage+"</a>");
	})
})