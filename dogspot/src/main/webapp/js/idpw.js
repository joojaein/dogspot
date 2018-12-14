window.addEventListener("load", function(){

    var main = document.querySelector("main");
    var idpwId = main.querySelector("#idpw-id")
    var idpwPw = main.querySelector("#idpw-pw")

    var btnId = idpwId.querySelector(".answer-btn input");

    var btnPw = idpwPw.querySelector(".answer-btn input");
    var scPwq = idpwPw.querySelector("#idpw-pwq");


    btnId.onclick = function(){
        var ansId = idpwId.querySelector(".answer-btn span");
        ansId.innerText="아이디 : dogspot";
    };

    btnPw.onclick = function(){
        if(scPwq.style.display==''){
            scPwq.style.display='block';
        }
        else{
            var ansPw = idpwPw.querySelector(".answer-btn span");
            ansPw.innerText="비밀번호 : dogspot";
        }
    };

});