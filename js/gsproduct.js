$(function(){
    $("#logo").click(function(){
        window.history.go(-1);
    })

    var shopId=0;
    var areaId=0;
    //页面一开始加载就发送个ajax请求
    $.ajax({
        url:'http://127.0.0.1:3000/api/getgsshop',
        success:function(data){
            var html = template('shopTmp',data);
            $(".ulBox2").html(html);
            $(".ulBox2").css('display','none');
        }
    })
    $.ajax({
        url:'http://127.0.0.1:3000/api/getgsshoparea',
        success:function(data){
            var html = template('areaTmp',data);
            $(".popprice").html(html);
            $(".popprice").css('display','none');
        }
    })
    $.ajax({
        url:'http://127.0.0.1:3000/api/getgsproduct',
        data:{shopid:shopId,areaid:areaId},
        success:function(data){
            var html = template('bdTmp',data);
            $("#container").html(html);
            console.log($(window).width());
            $(".pic img").width($(".pic").width());
            $(".pic img").height($(".pic").width());
            $(window).resize(function(){
                $(".pic img").width($(".pic").width());
                $(".pic img").height($(".pic").width());
            })
        }
    })








    var flag =true;
    var flag1=true;
    $(".ulBox1 li").click(function(){

        var num = $(".ulBox1 li").index(this);
        if(num===0){
            $($(".glyphicon")[1]).removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom');
            flag1=true
            if(flag){
                $(".glyphicon:first").removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top');
            }
            if(!flag){
                $(".glyphicon:first").removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom');
                flag=true
            }else{
                flag=false
            }

            $.ajax({
                url:'http://127.0.0.1:3000/api/getgsshop',
                success:function(data){
                    var html = template('shopTmp',data);
                    $(".ulBox2").html(html);
                    $(".ulBox2").toggle()
                    $(".popprice").css('display','none');
                    $(".ulBox2 li").click(function(){
                        shopId = $(this).attr('data-shopid');
                        $.ajax({
                            url:'http://127.0.0.1:3000/api/getgsproduct',
                            data:{shopid:shopId,areaid:areaId},
                            success:function(data){
                                var html = template('bdTmp',data);
                                $("#container").html(html);
                                $(".pic img").width($(".pic").width());
                                $(".pic img").height($(".pic").height());
                            }
                        })
                    })
                }
            })
        }
        if(num ===1){
            $(".glyphicon:first").removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom');
            flag=true;
            if(flag1){
                $($(".glyphicon")[1]).removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top');
            }
            if(!flag1){
                $($(".glyphicon")[1]).removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom');
                flag1=true
            }else{
                flag1=false
            }
            $.ajax({
                url:'http://127.0.0.1:3000/api/getgsshoparea',
                success:function(data){
                    var html = template('areaTmp',data);
                    $(".popprice").html(html);
                    $(".popprice").toggle();
                    $(".ulBox2").css('display','none');
                    $(".popprice li").click(function(){
                        areaId = $(this).attr('data-areaid')
                        $.ajax({
                            url:'http://127.0.0.1:3000/api/getgsproduct',
                            data:{shopid:shopId,areaid:areaId},
                            success:function(data){
                                var html = template('bdTmp',data);
                                $("#container").html(html);
                                $(".pic img").width($(".pic").width());
                                $(".pic img").height($(".pic").height());
                            }
                        })
                    })
                }
            })
        }
    })
})