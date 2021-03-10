$(function(){

    $("button#tabBtn1").click(function(){
            /* 번튼 모양 변경 */

        $("button").css({
            "border":"none",
            "top":"0px"

        });

        $(this).css({
            "border":"1px solid #aaa",
            "border-bottom":"none",
            "top":"1px"
        });


            /* 내용 변경 */
        $("div#tabContents1").css({"display":"block"});
        $("div#tabContents2").css({"display":"none"});
    });

    $("button#tabBtn2").click(function(){
            /* 버튼 모양 변경 */

        $("button").css({
            "border":"none",
            "top":"0px"

        });

        $(this).css({
            "border":"1px solid #aaa",
            "border-bottom":"none",
            "top":"1px"
        });

            /* 내용 변경 */
        $("div#tabContents1").css({"display":"none"});
        $("div#tabContents2").css({"display":"block"});
    });
});
