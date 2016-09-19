// JavaScript Document
var part_parent = "女装";
var part_children;
function createManChildren(){
	$("#part_children>li").remove();
	$("#part_children").append("<li value='衬衫'><a>衬衫</a></li>");
	$("#part_children").append("<li value='Polo'><a>Polo</a></li>");
	$("#part_children").append("<li value='裤子'><a>裤子</a></li>");
	$("#part_children").append("<li value='T恤'><a>T恤</a></li>");
}

function createWomanChildren(){
	$("#part_children>li").remove();
	$("#part_children").append("<li value='背心'><a>背心</a></li>");
	$("#part_children").append("<li value='裙子'><a>裙子</a></li>");
	$("#part_children").append("<li value='裤子'><a>裤子</a></li>");
	$("#part_children").append("<li value='T恤'><a>T恤</a></li>");
}



$(function(){
	createWomanChildren();
	$("#part_parent>li").click(function(){
		$("#part_parent>.categories-current").removeClass("categories-current");
		$(this).addClass("categories-current");
		part_parent = $(this).attr('value');
		switch(part_parent){
			case "女装":
				createWomanChildren();
				break;
			case "男装":
				createManChildren();
				break;
		}
	});
})



$(function(){
	$("#part_children").delegate('li','click',function(){
		$("#part_children>.categories-current").removeClass("categories-current");
		$(this).addClass("categories-current");
		part_children = $(this).attr('value');
	});
})
