$(function(){
    var couponTitle = getUrlParam('coupontitle')
    var couponId = getUrlParam('couponid')
    $(".tit").prepend(couponTitle)
    console.log(couponTitle)
    $.ajax({
        url:'http://127.0.0.1:3000/api/getcouponproduct',
        data:{couponid:couponId},
        success:function(data){
            var num=0;
            console.log(data)
            var html = template('mainTmp',data);
            $(".con ul").html(html)
            console.log($("ul li").length);
            $(".ulBox").click(function(){
                 num = $("ul li").index(this)
                console.log(num)
                var pic = template('boxTmp',data);
                $("#gallerySlider").html(pic);
                var width = $(window).width()*num;
                $("#gallerySlider").css("left",-width);
                $("#galleryOverlay").css('display','block');
                $("#galleryOverlay").attr('class','vis');
            })
            $("#gallerySlider").click(function(){
                $("#galleryOverlay").css('display','none');
                $("#galleryOverlay").removeAttr('class')

            })

            //上一张
            $("#prevArrow").click(function(){
                if(num>0){
                    num--;
                    var width = $(window).width()*num;
                    $("#gallerySlider").css("left",-width);
                    $("#galleryOverlay").css('display','block');
                    $("#galleryOverlay").attr('class','vis');
                }
            })


            //下一张
            $("#nextArrow").click(function(){
                if(num<$("ul li").length-1){
                    num++;
                    console.log(num)
                    var width = $(window).width()*num;
                    $("#gallerySlider").css("left",-width);
                    $("#galleryOverlay").css('display','block');
                    $("#galleryOverlay").attr('class','vis');
                }
            })
        }
    })





    $("#logo").click(function(){
        window.history.go(-1);
    })
    function getUrlParam(key) {
        // 获取参数
        var url = window.location.search;
        // 正则筛选地址栏
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        // 匹配目标参数
        var result = url.substr(1).match(reg);
        //返回参数值
        return result ? decodeURIComponent(result[2]) : null;
    }
})