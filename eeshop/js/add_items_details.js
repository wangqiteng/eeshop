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


function validateNewLabel(){
	$("#new_label").val($("#new_label").val().replace(/(^\s*)|(\s*$)/g,""));
	var newLabel = $("#new_label").val();
	if(newLabel==null || newLabel==""){
		return false;
	}else{
		return true;
	}
}


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


function valiMaterial(){
	var material = $("#material option:selected").text();
	if(material=="选择"){
		$("#material").focus();
		return false;
	}else{
		return true;
	}
}

function valiLength(){
	var length = $("#length option:selected").text();
	if(length=="选择"){
		$("#length").focus();
		return false;
	}else{
		return true;
	}
}


function valiTypeversion(){
	var typeversion = $("#typeversion option:selected").text();
	if(typeversion=="选择"){
		$("#typeversion").focus();
		return false;
	}else{
		return true;
	}
}


function valiSchools(){
	var schools = $("#schools option:selected").text();
	if(schools=="选择"){
		$("#schools").focus();
		return false;
	}else{
		return true;
	}
}


function valiSeason(){
	var season = $("#season option:selected").text();
	if(season=="选择"){
		$("#season").focus();
		return false;
	}else{
		return true;
	}
}

$(function(){
	$("#label_ul").delegate('.action','click',function(){
		if(validateNewLabel()){
			var newLabel = $("#new_label").val();
			$("<li class='label_li'><span>"+newLabel+"</span><a href='javascript:;' class='close-btn'>×</a></li>").insertBefore($("#add_label"));
			$("#new_label").val("");
			if($("#label_ul>li").length==8){
				$("#label_ul>.action").remove();
			}
		}
	})
})



$(function(){
	$("#label_ul").delegate('.label_li>a','click',function(){
		$(this).parent().remove();
		var li_length = $("#label_ul>li").not(".action").length;
		if(li_length==6){
			$("#label_ul").append("<li class='action' id='add_label'><input class='goods-tag-name xd-input primary' id='new_label' placeholder='请输入标签名称' /><a class='add-btn' id='add_new_label'>添加</a></li>");
		}
	});
})


$(function(){
	$("#upload_main_picture").change(function(){
		var url = getPath(this);
		var image1=new Image();
		image1.src=url;
		image1.onload=function(){
        	image1.onload=null;
			var imgWidth=image1.width;
			var imgHeight=image1.height;
			var proportion=imgWidth/imgHeight;
			if(imgWidth<=640){
				layer.msg('图片宽度过小！');
			}else if(proportion<6/19||proportion>19/6){
				layer.msg('图片比例不符合要求！');
			}else{
				$("#main_picture").attr("src",url);
				$('.cover-images>ul').removeClass('hide');
			}	
		}
	})
})



$(function(){
	$("#delete_main_picture").click(function(){
		$('.cover-images>ul').addClass('hide')
	})
})



$(function(){
	$("#style_ul").delegate('.sku-add','click',function(){
		if(validateNewStyle()){
			var newStyle = $("#new_style").val();
			$("<li class='xd-tag'>"+newStyle+"</li>").insertBefore($("#add_style"));
			$("#new_style").val("");
		}
	})
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
	})
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
	})
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
	})
})



$(function(){
	$("#upload_wear_picture").change(function(){
		var url = getPath(this);
		var image1=new Image();
		image1.src=url;
		image1.onload=function(){
        	image1.onload=null;
			var imgWidth=image1.width;
			var imgHeight=image1.height;
			var proportion=imgWidth/imgHeight;
			if(imgWidth<=640){
				layer.msg('图片宽度过小！');
			}else if(proportion<6/19||proportion>19/6){
				layer.msg('图片比例不符合要求！');
			}else{
				$("#wear_picture").append("<li><div class='item'><img src="+url+"><div class='operate-mask'><div class='action'><a href='javascript:;' id='delete_wear_picture'>删除</a></div></div></div></li>");
			}	
		}
	})
})



$(function(){
	$("#wear_picture").delegate('li>.item>.operate-mask>.action>#delete_wear_picture','click',function(){
		$(this).parent().parent().parent().parent().remove();
	})
})


$(function(){
	$("#save_submit").on("click",function(){
		if(!valiItemsName()||!valiItemsDescribe()||!valiMaterial()||!valiLength()||!valiTypeversion()||!valiSchools()||!valiSeason()){
			layer.msg('请完善商品信息！', {
				time: 1000,
			});
		}else if(!valiNewSkuNum()||!valiNewSkuPrice()){
			layer.msg('请完善SKU信息！', {
				time: 1000,
			});
		}
	})
})