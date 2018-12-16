window.addEventListener("load", function(){

	modals = document.querySelector("#modals");
    modalBack = modals.querySelector(".modal-back");

    dialogDetail = modals.querySelector("#modal-review-detail");
    dialogImg = modals.querySelector("#modal-review-reg-img");
    dialogContent = modals.querySelector("#modal-review-reg-content");
    dialogArr = [dialogDetail,dialogImg,dialogContent];
    
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