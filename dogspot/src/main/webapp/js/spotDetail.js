window.addEventListener("load", function(){
    var editDialog = document.querySelector("#spot-modify-modal");
    var imgDialog = document.querySelector("#img-modal");
    var dialogArr = [editDialog,imgDialog];

    //var main = document.querySelector("#detail-large-main");
    var main = document.querySelector("#img-arg");


    var modalImglist = document.querySelector(".modal-imgs");
    var modalImgs = document.querySelectorAll(".modal-imgs img");

    var imgs = document.querySelectorAll("#img-arg img");


    var modifyBtn = document.querySelector("#detail-sub input");
    var sendBtn = document.querySelector("#send-btn");
    var modalBack = document.querySelector(".modal-back");

    for(var i=0; i<modalImgs.length; i++){
        if(i!=0)
            modalImgs[i].src = imgs[i-1].src;
        else
            modalImgs[i].src = imgs[i].src;
    }

    modalImglist.addEventListener("click",function(e){
		if(e.target.nodeName != "IMG") return;
        modalImgs[0].src = e.target.src;

    },true);
    
    
    main.addEventListener("click", function (evt) {
        if (evt.target.nodeName != "IMG") return;
        console.log("evt:"+evt.target.src);
        for(var i=0; i<imgs.length;i++){
            //console.log(imgs[i].src);
            //console.log("evt:"+evt.target.src);
            if(imgs[i].src==evt.target.src){
                imgDialog.showModal();
                modalImgs[0].src = evt.target.src;
            }
        }
    });


    modifyBtn.onclick = function(evt){
        editDialog.showModal();
        modalBack.style.display = "unset";
    };

    sendBtn.onclick = function(evt){
        modalBack.style.display = "none";
    };

    var closeModal = function(){
        for(var i=0; i<dialogArr.length; i++){
            if(dialogArr[i].open){
                modalBack.style.display = "none";
                dialogArr[i].close();
                return;
            }
        }
    };

    imgDialog.addEventListener("click", function(evt){
        if(evt.target.nodeName!="IMG") return;
        if(evt.target.className!="modal-x") return;  
        closeModal();
    },true);

    editDialog.addEventListener("click", function(evt){
        if(evt.target.nodeName!="IMG") return;
        if(evt.target.className!="modal-x") return;     
        closeModal();
    }, true);
});

