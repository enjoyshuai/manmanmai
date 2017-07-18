$(function(){
    $("#logo").click(function(){
        window.history.go(-1);
    })




    $.ajax({
        url:'http://127.0.0.1:3000/api/getsitenav',
        success:function(data){
            console.log(data)
            var html = template('linkTmp',data);
            $(".link").html(html);
            //data = data.result;
            //var arr=[];
            //for(var i=0;i<data.length;i++){
            //    arr.push('<a href='+data[i].navHref+'>'+
            //        '<img src='+data[i].navImg+' alt=""/>'+
            //        data[i].navTitle+
            //        '</a>')
            //}
            //console.log(arr)
            //$(".link").html(arr.join(""))
        }
    })
})