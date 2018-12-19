window.addEventListener("load", function(){

	var dialogCommentComplain = modals.querySelector("#modal-comment-complain");
    var btnSend=dialogCommentComplain.querySelector(".send-btn");

    btnSend.onclick = function(evt){
        closeModal();
    } 
});