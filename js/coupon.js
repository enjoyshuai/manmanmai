$(function(){


    $("#logo").click(function(){
        window.history.go(-1);
    })
    $.ajax({
        url:'http://127.0.0.1:3000/api/getcoupon',
        success:function(data){
            console.log(data)
            var html = template('mainTmp',data);
            $(".ulBox").html(html);
        }
    })
})