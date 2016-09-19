$(document).ready(function () {
    $("#top").load("top.html");
});

$(document).ready(function () {
    $("#foot").load("footer.html");
});
<!-- 对综合销量等导航按钮点击事件-->
$(document).ready(function () {
    $("#sales_volume").click(function () {
        $(this).css("color","red");
        $("#zonghe").removeAttr("style");
        $("#sale_price").removeAttr("style");
    });

    $("#zonghe").click(function () {
        $(this).css("color","red");
        $("#sales_volume").removeAttr("style");
        $("#sale_price").removeAttr("style");
    });

    $("#sale_price").click(function () {
        $(this).css("color","red");
        $("#zonghe").removeAttr("style");
        $("#sales_volume").removeAttr("style");
    });
});

$(document).ready(function () {
    $("#M_size").click(function () {
        $(this).attr("class","btn btn-default active");
        $("#L_size").attr("class","btn btn-default");
        $("#XL_size").attr("class","btn btn-default");
    });

    $("#L_size").click(function () {
        $(this).attr("class","btn btn-default active");
        $("#M_size").attr("class","btn btn-default");
        $("#XL_size").attr("class","btn btn-default");
    });
    $("#XL_size").click(function () {
        $(this).attr("class","btn btn-default active");
        $("#L_size").attr("class","btn btn-default");
        $("#M_size").attr("class","btn btn-default");
    });
});


$(document).ready(function(){
//获得文本框对象
    var t = $("#text_box");
//初始化数量为1,并失效减
    $('#min').attr('disabled',true);
    //数量增加操作
    $("#add").click(function(){
        t.val(parseInt(t.val())+1)
        if (parseInt(t.val())!=1){
            $('#min').attr('disabled',false);
        }

    })
    //数量减少操作
    $("#min").click(function(){
        t.val(parseInt(t.val())-1);
        if (parseInt(t.val())==1){
            $('#min').attr('disabled',true);
        }
    })
});