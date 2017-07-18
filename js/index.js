$(function(){
    $.ajax({
        url:'http://127.0.0.1:3000/api/getindexmenu',
        data:{},
        success:function(data){
            var html = template('test',data);
            $('#menu').html(html);
            $("#menu .row>div:nth-child(8)").click(function(){
                $("#menu .row>div:nth-last-child(-n+4)").toggle(200);
            })
        }
    })



    $.ajax({
        url: "http://127.0.0.1:3000/api/getmoneyctrl",
        success: function(data) {
            console.log(data)
            var html = template('recommenTmp', data);
            $('.recommon-list').html(html);
        }
    })
})