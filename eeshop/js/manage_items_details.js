// JavaScript Document
function valiItemsName(){
	$("#items_name").val($("#items_name").val().replace(/(^\s*)|(\s*$)/g,""));
	var itemsName = $("#items_name").val();
	if(itemsName==null || itemsName==""){
		$("#items_name").focus();
		return false;
	}else{
		return true;
	}
}



function valiItemsDescribe(){
	$("#items_describe").val($("#items_describe").val().replace(/(^\s*)|(\s*$)/g,""));
	var itemsDescribe = $("#items_describe").val();
	if(itemsDescribe==null || itemsDescribe==""){
		$("#items_describe").focus();
		return false;
	}else{
		return true;
	}
}



function valiSkuNum(){
	var skuNum = [];
	$(".stock-text.xd-input.primary.sku-num").each(function(index, element) {
		skuNum.push($(this).val());
    });
	for(var i=0;i<skuNum.length;i++){
		if(skuNum[i]==null||skuNum[i]==""){
			return false;
			break;
		}
	}
	return true;
}


function valiSkuPrice(){
	var skuPrice = [];
	$(".price-text.xd-input.primary.sku-price").each(function(index, element) {
		skuPrice.push($(this).val());
    });
	for(var i=0;i<skuPrice.length;i++){
		if(skuPrice[i]==null||skuPrice[i]==""){
			return false;
			break;
		}
	}
	return true;
}



function validateNewStyle(){
	$("#new_style").val($("#new_style").val().replace(/(^\s*)|(\s*$)/g,""));
	var newStyle = $("#new_style").val();
	if(newStyle==null || newStyle==""){
		return false;
	}else{
		return true;
	}
}


function validateNewSize(){
	$("#new_size").val($("#new_size").val().replace(/(^\s*)|(\s*$)/g,""));
	var newSize = $("#new_size").val();
	if(newSize==null || newSize==""){
		return false;
	}else{
		return true;
	}
}


function valiNewSkuNum(){
	var newSkuNum = [];
	$(".stock-text.xd-input.primary").each(function(index, element) {
		newSkuNum.push($(this).val());
    });
	for(var i=0;i<newSkuNum.length;i++){
		if(newSkuNum[i]==null||newSkuNum[i]==""){
			return false;
			break;
		}
	}
	return true;
}


function valiNewSkuPrice(){
	var newSkuPrice = [];
	$(".price-text.xd-input.primary").each(function(index, element) {
		newSkuPrice.push($(this).val());
    });
	for(var i=0;i<newSkuPrice.length;i++){
		if(newSkuPrice[i]==null||newSkuPrice[i]==""){
			return false;
			break;
		}
	}
	return true;
}



$(function(){
	$("#sku").delegate('tr>td>#delete_sku','click',function(){
		var obj = $(this);
		layer.confirm('确认删除该SKU？', {
			btn: ['确定','取消'] //按钮
		}, function(){
			obj.parent().parent().remove();
			layer.msg('SKU已删除！', {
				time: 1000,
			});
		}, function(){});
	});
})	



$(function(){
	$("#style_ul").delegate('.sku-add','click',function(){
		if(validateNewStyle()){
			var newStyle = $("#new_style").val();
			$("<li class='xd-tag'>"+newStyle+"</li>").insertBefore($("#add_style"));
			$("#new_style").val("");
		}
	});
})



$(function(){
	$("#size_ul").delegate('.sku-add','click',function(){
		if(validateNewSize()){
			var newSize = $("#new_size").val();
			$("<li class='xd-tag'>"+newSize+"</li>").insertBefore($("#add_size"));
			$("#new_size").val("");
		}
	})
})



$(function(){
	$("#size_ul,#style_ul").delegate('.xd-tag','click',function(){
		if($(this).hasClass("c")){
			$(this).removeClass("c");
		}else{
			$(this).addClass("c");
		}
		$("#new_sku_table>#new_sku").html("");
		var styleList = $("#style_ul>.xd-tag.c");
		var sizeList = $("#size_ul>.xd-tag.c");
		if(styleList.length>0&&sizeList.length>0){
			for(i=0;i<styleList.length;i++){
				for(j=0;j<sizeList.length;j++){
					$("#new_sku_table>#new_sku").append("<tr><td><span class='style-text'>"+styleList[i].innerHTML+"</span></td><td><span class='size-text'>"+sizeList[j].innerHTML+"</span></td><td><input type='text' class='stock-text xd-input primary' id='new_sku_num' value /></td><td><input type='text' class='price-text xd-input primary' id='new_sku_price' value /></td></tr>");
				}
			}
		}
	});
})


$(function(){
	$("#sku").delegate('tr>td>#sku_num','blur',function(){
		$(this).val($(this).val().replace(/(^\s*)|(\s*$)/g,""));
		var skuNum = $(this).val();
		var rskuNum = /^\d{1,5}$/;
		if(skuNum==null || skuNum==""){
			return false;
		}else if(!rskuNum.test(skuNum)){
			$(this).val(event.data.msg);
			$(this).focus();
			return false;
		}else{
			return true;
		}
	});
})


$(function(){
	$("#sku").delegate('tr>td>#sku_price','blur',function(){
		$(this).val($(this).val().replace(/(^\s*)|(\s*$)/g,""));
		var skuPrice = $(this).val();
		var rskuPrice =  /^\d{1,6}(\.\d{0,4})?$/;
		if(skuPrice==null || skuPrice==""){
			return false;
		}else if(!rskuPrice.test(skuPrice)){
			$(this).val("");
			$(this).focus();
			return false;
		}else{
			$(this).val(parseFloat($(this).val()).toFixed(2));
			return true;
		}
	});
})



$(function(){
	$("#new_sku").delegate('tr>td>#new_sku_num','blur',function(){
		$(this).val($(this).val().replace(/(^\s*)|(\s*$)/g,""));
		var skuNum = $(this).val();
		var rskuNum = /^\d{1,5}$/;
		if(skuNum==null || skuNum==""){
			return false;
		}else if(!rskuNum.test(skuNum)){
			$(this).val("");
			$(this).focus();
			return false;
		}else{
			return true;
		}
	});
})


$(function(){
	$("#new_sku").delegate('tr>td>#new_sku_price','blur',function(){
		$(this).val($(this).val().replace(/(^\s*)|(\s*$)/g,""));
		var skuPrice = $(this).val();
		var rskuPrice =  /^\d{1,6}(\.\d{0,4})?$/;
		if(skuPrice==null || skuPrice==""){
			return false;
		}else if(!rskuPrice.test(skuPrice)){
			$(this).val("");
			$(this).focus();
			return false;
		}else{
			$(this).val(parseFloat($(this).val()).toFixed(2));
			return true;
		}
	});
})


$(function(){
	$("#save_submit").on("click",function(){
		if(!valiItemsName()||!valiItemsDescribe()||!valiMaterial()||!valiLength()||!valiTypeversion()||!valiSchools()||!valiSeason()){
			layer.msg('请完善商品信息！', {
				time: 1000,
			});
		}else if(!valiSkuNum()||!valiSkuPrice()||!valiNewSkuNum()||!valiNewSkuPrice()){
			layer.msg('请完善SKU信息！', {
				time: 1000,
			});
		}
	})
})