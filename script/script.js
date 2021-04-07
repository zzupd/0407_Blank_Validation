$(function(){

    $("button").click(function(){
        var blankChk = $("#blankChk").val();
        if (blankChk.trim() == "") {

            $("#blankChkArea>span").text(" * 공백안됨, 필수!");

            $("#blankChk").val("").focus();
            // 동일선택자에 메서드를 여러개 사용하여
            // 마치 체인처럼 연결되었다고하여
            // 메서드 체인(chain)이라고 부름.
        } else {

            $("#blankChkArea>span").text("");
        }
    });

});
