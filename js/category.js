/**
 * Created by Administrator on 2017/7/9.
 */
$(function(){
    var titleid;
    $.ajax({
        url:'http://127.0.0.1:3000/api/getcategorytitle',
        success:function(data){
            var html = template('title',data);
            $("#accordion").html(html)
            $("#main .panel-title>a").click(function(e){
                titleid = $(this).attr('data-titleid')
                //$(this).css({"background-image":"url(images/arrow2.gif)"})
                console.log(titleid)
                $.ajax({
                    url:'http://127.0.0.1:3000/api/getcategory',
                    data:{titleid:titleid},
                    success:function(data){
                        console.log(data)
                        var panelBody = $(e.target).parent().parent().parent().find(".panel-collapse").find('.panel-body');
                        var html = template('table',data);
                        panelBody.html(html);
                    }
                })
            })
        }
    })

})