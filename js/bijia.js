$(function(){
    var productid = getQueryString('productid');
    $.ajax({
        url:'http://127.0.0.1:3000/api/getproduct',
        data:{productid:productid},
        success:function(data){
            console.log(data)
            var html = template('info',data);
            $("#main").html(html);
        }
    })
    $.ajax({
        url:'http://127.0.0.1:3000/api/getproductcom',
        data:{productid:productid},
        success:function(data){
            console.log(data)
            var html = template('pinjia',data);
            $(".content").html(html);
        }
    })





    function getQueryString(name)
    {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }
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