$(function(){
    $.ajax({
        url:'http://127.0.0.1:3000/api/getbaicaijiatitle',
        success:function(data){
            var html = template('ulTmp',data);
            $(".ct_top").html(html);
            $.ajax({
                url:'http://127.0.0.1:3000/api/getbaicaijiaproduct',
                data:{titleid:0},
                success:function(data) {
                    var html = template('recommenTmp', data);
                    $(".recommon-list").html(html);
                    console.log(data)
                }
            })
            $(".ct_top>li").click(function(){
                var titleId = $(this).attr('titleId');
                $.ajax({
                    url:'http://127.0.0.1:3000/api/getbaicaijiaproduct',
                    data:{titleid:titleId},
                    success:function(data){
                        console.log(data)
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