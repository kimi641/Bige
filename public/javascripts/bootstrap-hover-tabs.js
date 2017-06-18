/**
 * Created by Administrator on 2017/6/18.
 */
(function ($) {
    $(document).ready(function (e) {
        $(".tab_block .ry dl dd:eq(0)").css({"width":"324px"});
        $(".tab_block .ry dl dt").hover(
            function(){
                $(".tab_block .ry dl dd").stop().animate({"width":0}, 'queue: false');
                $(this).next().stop().animate({"width":"324px"},'queue: false')
            })

        $(".tab_block").mouseleave(function(){
            $(".tab_block .ry dl dd").stop().animate({"width":0},'queue: false');
            $(".tab_block .ry dl dd:eq(0)").stop().animate({"width":"324px"},'queue: false');
        });

        $(".tab_block .tab_tit span:eq(0)").click(function(){
            $(".tab_block .tab_tit span").removeClass("current");
            $(this).addClass("current");
            $(".tab_block .zr").hide();
            $(".tab_block .ry").show();
        })
        $(".tab_block .tab_tit span:eq(1)").click(function(){
            $(".tab_block .tab_tit span").removeClass("current");
            $(this).addClass("current");
            $(".tab_block .ry").hide();
            $(".tab_block .zr").show();
        })
        $(".map .map0").hover(function(){
            $(".map .map0").find("span").hide();
            $(this).find("span").show();
        },function(){
            $(".map .map0").find("span").hide();
        })

        $(".news_block .news .box ul li").click(function(){
            $(".news_block .news .box ul li").removeClass("current");
            $(this).addClass("current");
            var dangqian = $(".news_block .news .box ol li").eq($(".news_block .news .box ul li").index(this));
            $(".news_block .news .box ol li").removeClass("current");
            dangqian.addClass("current");
            var dangqian2 = $(".news_content ul li").eq($(".news_block .news .box ul li").index(this));
            $(".news_content ul li").removeClass("current");
            dangqian2.addClass("current");
        })

        $(".news_bg").click(function(){
            $(this).hide();
            $(".news_content").hide();
        })

        $(".news_block .news .box ol li").click(function(){
            $(".news_bg").show();
            $(".news_content").show();
        })

        $(".news_content,.news_block .news .box ul,.news_block .news .box ol").mouseenter(function () {
            $.fn.fullpage.setAllowScrolling(false);
        }).mouseleave(function () {
            $.fn.fullpage.setAllowScrolling(true);
        })

    });


    function processLowerIENavigate()
    {
        var isIE = document.all ? 1 : 0;
        if (isIE == 1)
        {
            if(navigator.userAgent.indexOf("MSIE7.0") > 0 || navigator.userAgent.indexOf("MSIE 8.0") > 0)
            {
                //  var doc=document;
                var link=document_createElement_x_x_x("link");
                link.setAttribute("rel", "stylesheet");
                link.setAttribute("type", "text/css");
                link.setAttribute("id", "size-stylesheet");
                link.setAttribute("href", "");

                var heads = document.getElementsByTagName_r("head");
                if(heads.length)
                    heads[0].a(link);
                else
                    document.documentElement.a(link);

                document.write("")
                document.write("")

            }
        }
    }
    var lowerIE8 = processLowerIENavigate();
    function adjustStyle(width) {
        width = parseInt(width);
        if (width < 902) {
    //alert("<900");
    //alert(width);
            $("#size-stylesheet").attr("href", "navigateLowerIE8.css");
        } else {
            // alert(">900");
            //alert(width);
            $("#size-stylesheet").attr("href", "");
        }
    }

    $(function() {
        adjustStyle($(this).width());
        $(window).resize(function() {
            adjustStyle($(this).width());
        });
    });

})(jQuery);