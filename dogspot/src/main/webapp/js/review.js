window.addEventListener("load", function(){

	var modals = document.querySelector("#modals");
    var modalBack = modals.querySelector(".modal-back");

    var dialogDetail = modals.querySelector("#modal-review-detail");
    var dialogImg = modals.querySelector("#modal-review-reg-img");
    var dialogReport = modals.querySelector("#modal-review-reg-report");
    var dialogSpot = modals.querySelector("#modal-review-reg-spot");
    var dialogArr = [dialogDetail,dialogImg,dialogReport,dialogSpot];

    var reviewList=document.querySelector("#review-list");
    var reviewDetailCenter=document.querySelector("#modal-review-detail .review-center");
    var reviewSpotCenter=document.querySelector("#modal-review-reg-spot .review-center");

    var btnAddReview=document.querySelector("main>input");
    var btnUploadImg=dialogImg.querySelector(".reg1-top input[type='button']")
    var btnFileUpload=dialogImg.querySelector(".reg1-top img");
    var btnFile=dialogImg.querySelector(".reg1-top input[type='file']");
    var btnUppage=dialogSpot.querySelector(".review-spot-list img")
    var btnDownpage=dialogReport.querySelector(".review-spot-list img")

    var textareasReportReviewContent = dialogReport.querySelector("textarea");
    var inputReportReviewTitle = dialogReport.querySelector(".review-report input");
    var textareasSpotReviewContent = dialogSpot.querySelector("textarea");
    var inputSpotReviewTitle = dialogSpot.querySelector(".review-report input");
    var ulSpotlist = reviewSpotCenter.querySelector("ul");

    var tmpReviewDiv= reviewList.querySelector("#review-list-div-template");
    var tmpReviewComment = reviewDetailCenter.querySelector("#review-comment-template")
    var tmpReviewSpot = reviewSpotCenter.querySelector("#review-spot-li-template")

    var bind_reviewDiv = function(div){
        tempImg=div.querySelector(".review-mainImg");
        tempName=div.querySelector(".review-name");
        tempTitle=div.querySelector(".review-title");

        tempGoodInt=div.querySelector(".good-int");
        tempCommentInt=div.querySelector(".cmt-int");
        tempHitInt=div.querySelector(".hit-int");

        tempImg.innerSrc="/images/reviewImg.png";
        tempName.innerText="1가가카페";
        tempTitle.innerText="1가나다라마바사아자차하하하하하하하하";

        tempGoodInt.innerText="10";
        tempCommentInt.innerText="10";
        tempHitInt.innerText="10";

        reviewList.append(div)
    }

    for(var i=0;i<10; i++){
        div=document.importNode(tmpReviewDiv.content, true);
        bind_reviewDiv(div);
    }

    var bind_cmt = function(cmt){
        tempId = cmt.querySelector(".cmt-id");
        tempContent = cmt.querySelector(".cmt-content");
        tempId.innerText="아이디";
        tempContent.innerText="내용";
        reviewDetailCenter.append(cmt);  
    }

    for(var i=0;i<15;i++){
        cmt=document.importNode(tmpReviewComment.content, true);
        bind_cmt(cmt);
    }


    var bind_spot = function(spot){
        tempSpot = spot.querySelector("a");
        tempSpot.innerText="가가카페";
        
        ulSpotlist.append(spot);
    }

    for(var i=0; i<5; i++){
        spot=document.importNode(tmpReviewSpot.content, true);
        bind_spot(spot);
    }


    var closeModal = function(){
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
    

    reviewList.addEventListener("click", function (evt) {
        evt.preventDefault();
        if (evt.target.className != "hover-parency") return;
        modalBack.style.display = "unset";
        dialogDetail.showModal();
    }, true); 

    reviewList.addEventListener("mouseover", function (evt) {
        if (evt.target.nodeName == "IMG" ){
            var reviewDivs = reviewList.querySelectorAll(".review-div");
            for(var i=0; i<reviewDivs.length; i++){
                var tempImg = reviewDivs[i].querySelector("img");
                 if(tempImg==evt.target){
                     tempSection = reviewDivs[i].querySelector(".review-list-hover");
                     tempSection.style.display = "unset";    
                     console.log(i);
    
                 }else{
                    tempSection = reviewDivs[i].querySelector(".review-list-hover");
                    tempSection.style.display = "none";   
                    console.log(i+" else");
                 }

            }
        }     
    }, true);

    reviewList.addEventListener("mouseout", function (evt) {

        if (evt.target.className == "hover-parency" ){
            var reviewDivs = reviewList.querySelectorAll(".review-div");
            for(var i=0; i<reviewDivs.length; i++){
                
                tempImg = reviewDivs[i].querySelector(".hover-parency");
                 if(tempImg==evt.target){
                     tempSection = reviewDivs[i].querySelector(".review-list-hover");
                     tempSection.style.display = "none";        
                 }
            }
        }     
    }, true);   

    ulSpotlist.addEventListener("click", function(evt){
         if (evt.target.nodeName != "A" ) return;
         evt.preventDefault();
         closeModal();
         modalBack.style.display = "unset";
         dialogReport.showModal();
         textareasReportReviewContent.focus();

    }, true);



    btnAddReview.onclick = function(evt){
        modalBack.style.display = "unset";
        dialogImg.showModal();
    }

    btnFileUpload.onclick = function(){
        var evt = new MouseEvent("click", {
			"view":window,
			"bubbles":true,
			"cancelable":true
		});
		btnFile.dispatchEvent(evt);
    }

    btnUploadImg.onclick = function(evt){
        closeModal();
        modalBack.style.display = "unset";
        dialogReport.showModal();
    }

    btnUppage.onclick = function(evt){
        evt.preventDefault();
        closeModal();
        modalBack.style.display = "unset";
        dialogReport.showModal();
    }

    btnDownpage.onclick = function(evt){
        evt.preventDefault();
        closeModal();
        modalBack.style.display = "unset";
        dialogSpot.showModal();
    }
     
    textareasSpotReviewContent.onclick = function(evt){
        closeModal();
        modalBack.style.display = "unset";
        dialogReport.showModal();
        textareasReportReviewContent.focus();
    }



    inputSpotReviewTitle.onclick = function(evt){
        closeModal();
        modalBack.style.display = "unset";
        dialogReport.showModal();
        inputReportReviewTitle.focus();
    }
    
});