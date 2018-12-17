window.addEventListener("load", function(){

	modals = document.querySelector("#modals");
    modalBack = modals.querySelector(".modal-back");

    dialogDetail = modals.querySelector("#modal-review-detail");
    dialogImg = modals.querySelector("#modal-review-reg-img");
    dialogContent = modals.querySelector("#modal-review-reg-content");
    dialogReviewComplain = modals.querySelector("#modal-review-complain");
    dialogCommentComplain = modals.querySelector("#modal-comment-complain");
    
    dialogArr = [dialogDetail,dialogImg,dialogContent,dialogReviewComplain,dialogCommentComplain];
    
    closeModal = function(){
        for(var i=0; i<dialogArr.length; i++){
            if(dialogArr[i].open){
                modalBack.style.display = "none";
                dialogArr[i].close();
                return;
            }
        }
    }

    modals.addEventListener("click", function(evt){
        if(evt.target.nodeName!="IMG") return;
        if(evt.target.className!="modal-x") return;     
        closeModal();
    }, true);
    
});