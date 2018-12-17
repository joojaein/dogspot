window.addEventListener("load", function(){
    
    var reviewList=document.querySelector("#review-list");
    var tmpReviewDiv= reviewList.querySelector("#review-list-div-template");    
    var btnAddReview=document.querySelector("main>input");
       
    var bind_reviewDiv = function(div){
        var tempImg=div.querySelector(".review-mainImg");
        var tempName=div.querySelector(".review-name");
        var tempTitle=div.querySelector(".review-title");

        var tempGoodInt=div.querySelector(".good-int");
        var tempCommentInt=div.querySelector(".cmt-int");
        var tempHitInt=div.querySelector(".hit-int");

        tempImg.innerSrc="/images/reviewImg.png";
        tempName.innerText="1가가카페";
        tempTitle.innerText="1가나다라마바사아자차하하하하하하하하";

        tempGoodInt.innerText="10";
        tempCommentInt.innerText="10";
        tempHitInt.innerText="10";

        reviewList.append(div);
    };
    
    for(var i=0;i<40; i++){
        var div=document.importNode(tmpReviewDiv.content, true);
        bind_reviewDiv(div);
    }
    
	function getCurrentScrollPercentage(){
	    var scrolled_value = window.scrollY
	    var viewport_height = window.innerHeight;
		var doc_TotalHeight = document.body.clientHeight;
		  return (scrolled_value + viewport_height) / doc_TotalHeight * 100
	};
    
    document.addEventListener("scroll", function(){
    	var currentScrollPercentage = getCurrentScrollPercentage();
    	var testCnt = reviewList.querySelectorAll(".review-div").length;
    	
    	if(currentScrollPercentage >= 98){
    		  for(var i=0;i<40; i++){
    		        div=document.importNode(tmpReviewDiv.content, true);
    		        bind_reviewDiv(div);
    		   }
    	}
    });
    
    reviewList.addEventListener("mouseover", function (evt) {
        if (evt.target.nodeName == "IMG" ){
            var reviewDivs = reviewList.querySelectorAll(".review-div");
            for(var i=0; i<reviewDivs.length; i++){
                var tempImg = reviewDivs[i].querySelector(".review-img");
                 if(tempImg==evt.target){
                     tempSection = reviewDivs[i].querySelector(".review-list-hover");
                     tempSection.classList.remove("hidden");
                 }else{
                    tempSection = reviewDivs[i].querySelector(".review-list-hover");
                    tempSection.classList.add("hidden");
                   }
            }
        }     
    }, true);

    reviewList.addEventListener("mouseout", function (evt) {
    	if(evt.target.className == "hover-parency"){
        	var reviewDivs = reviewList.querySelectorAll(".review-div");

    		for(var i=0; i<reviewDivs.length; i++){               
            	tempSection = reviewDivs[i].querySelector(".review-list-hover");
                tempSection.classList.add("hidden");
            }
    	} 	
        event.stopPropagation();
    }, true);   
    
    reviewList.addEventListener("click", function (evt) {
        evt.preventDefault();
        if (evt.target.className != "hover-parency") return;
        modalBack.style.display = "unset";
        dialogDetail.showModal();
    }, true); 
    
    btnAddReview.onclick = function(evt){
        modalBack.style.display = "unset";
        dialogImg.showModal();
    };
});