$(function(){
    var obj = {};
    var flag=1
    $.ajax({
        url:'http://127.0.0.1:3000/api/getinlanddiscount',
        success:function(data){
            console.log(data)
            var arr=
            {
                result:data.result
            };
            var indexArr = {
                'result':arr.result.splice(0,10)
            }
            var html = template('count',indexArr);
            $("#main").html(html);
            $(document).scroll(function(){
                var height = $(document).scrollTop();
                if( height>800*flag){
                    if(arr.result.length<1){
                        return;
                    }
                    var arrAppend = {
                        result:arr.result.splice(0,10)
                    }
                    var appendDom = template('count',arrAppend);
                    $("#main").append(appendDom);
                    flag++
                    console.log(1)
                }
            })
        }
    })


    $("#logo").click(function(){
        window.history.go(-1);
    })
})