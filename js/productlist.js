
$(function(){
    var categoryId = getQueryString("categoryid") || 0;
    var category = getQueryString("category");
    console.log(categoryId)
    var flag=1;
    $.ajax({
        url: 'http://127.0.0.1:3000/api/getproductlist',
        data: {categoryid: categoryId},
        success: function (data) {
            console.log(data)
            var num = Math.ceil(data.totalCount / 10)
            var html = template('file', data);
            $(".recommon-list").html(html);


            $(".next a").click(function(){
                if(flag<num){
                    flag++;
                    $("#morepage").val(flag);
                    $.ajax({
                        url: 'http://127.0.0.1:3000/api/getproductlist',
                        data: {categoryid: categoryId, pageid: flag},
                        success: function (data) {
                            var html = template('file', data);
                            $(".recommon-list").html(html);
                        }
                    })
                }else{
                    alert("没有更多了");
                }
            })


            $(".previous a").click(function(){
                if(flag>1){
                    flag--;
                    $("#morepage").val(flag);
                    $.ajax({
                        url: 'http://127.0.0.1:3000/api/getproductlist',
                        data: {categoryid: categoryId, pageid: flag},
                        success: function (data) {
                            var html = template('file', data);
                            $(".recommon-list").html(html);
                        }
                    })
                }else{
                    alert("没有更多了");
                }
            })


            var str = [];
            for (i = 1; i <= num; i++) {
                str.push('<option value='+i+'>' + i + '</option>')
            }
            $("#morepage").html(str.join(""))


            $("#morepage").change(function () {
                var pageId = $(this).val()
                flag=pageId;
                $.ajax({
                    url: 'http://127.0.0.1:3000/api/getproductlist',
                    data: {categoryid: categoryId, pageid: pageId},
                    success: function (data) {
                        var html = template('file', data);
                        $(".recommon-list").html(html);
                    }
                })
            })

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
})