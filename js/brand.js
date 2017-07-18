$(function(){
    var brandtitleId = getUrlParam('brandtitleid');
    var tit = getUrlParam('tit')
    var str = tit.substr(0,tit.length-4)
    $(".hd h3").prepend(str);
    $.ajax({
        url:'http://127.0.0.1:3000/api/getbrand',
        data:{brandtitleid:brandtitleId},
        success:function(data){
            var html = template('title',data);
            $("#accordion").html(html);
        }
    })

    $.ajax({
        url:'http://127.0.0.1:3000/api/getbrandproductlist',
        data:{brandtitleid:brandtitleId},
        success:function(data){
            console.log(data);
            data.result = data.result.slice(0,4)
            var html = template("file",data);
            $(".recommon-list").html(html);
            var str =   '<div class=" right col-xs-4 col-sm-2 col-md-1">'+ data.result[0].productImg+ '</div>'+ '<div class=" left col-xs-8 col-sm-10 col-md-11">'+data.result[0].productName+'</div>';
            $(".box1").html(str);
        }
    })


    $.ajax({
        url:'http://127.0.0.1:3000/api/getproductcom',
        data:{productid:0},
        success:function(data){
            console.log(data);
            var html = template('newsTmp',data);
            $(".pllist").html(html)
        }
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