// JavaScript Document
$(function(){
    $(".delete-favorite").click(function(){
        var obj = $(this);
        layer.confirm('取消收藏？', {
            btn: ['确定','取消'] //按钮
        }, function(){
            obj.parent().parent().parent().parent().remove();
            layer.msg('已取消收藏！', {
                time: 1000,
            });
        }, function(){});
    })
})