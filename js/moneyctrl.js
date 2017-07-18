$(function(){
    var flag=1;
    $.ajax({
        url:'http://127.0.0.1:3000/api/getmoneyctrl',
        success:function(data){
            var html = template('recommenTmp',data);
            var num = Math.ceil(data.totalCount / 10)
            $(".recommon-list").html(html);
            $(".next a").click(function(){
                if(flag<num){
                    flag++;
                    $("#morepage").val(flag);
                    $.ajax({
                        url: 'http://127.0.0.1:3000/api/getmoneyctrl',
                        data: {pageid: flag},
                        success: function (data) {
                            var html = template('recommenTmp', data);
                            $(".recommon-list").html(html);
                        }
                    })
                }else{
                    alert("没有更多了");
                }
            })


            $(".previous a").click(function(){
                console.log(flag)
                if(flag>1){
                    flag--;
                    $("#morepage").val(flag);
                    $.ajax({
                        url: 'http://127.0.0.1:3000/api/getmoneyctrl',
                        data: {pageid: flag},
                        success: function (data) {
                            var html = template('recommenTmp', data);
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
                var pageId = $(this).val();
                flag=pageId;
                console.log(flag)
                $.ajax({
                    url: 'http://127.0.0.1:3000/api/getmoneyctrl',
                    data: {pageid: pageId},
                    success: function (data) {
                        var html = template('recommenTmp', data);
                        $(".recommon-list").html(html);
                    }
                })
            })
        }
    })


    $("#logo").click(function(){
        window.history.go(-1);
    })
})