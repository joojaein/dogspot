window.addEventListener("load", function(){
	var dialogReviewComplain = modals.querySelector("#modal-review-complain");
    var btnSend=dialogReviewComplain.querySelector(".send-btn");

    btnSend.onclick = function(evt){
        closeModal();
    } 
});