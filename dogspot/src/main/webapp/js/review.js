window.addEventListener("load", function(){
    
	var reviewSearch = document.querySelector("#review-search");
	var inputSearch = reviewSearch.querySelector("input[type='text']");
	var ulSearch = reviewSearch.querySelector("ul");
	var aSearch = ulSearch.querySelectorAll("a");
	
    var reviewList=document.querySelector("#review-list");
    var tmpReviewDiv= reviewList.querySelector("#review-list-div-template");    
    var btnAddReview=document.querySelector("main>input");
    
    var bind_reviewDiv = function(div, reviewData){
        var tempImg=div.querySelector(".review-mainImg");
        var tempName=div.querySelector(".review-name");
        var tempTitle=div.querySelector(".review-title");

        var tempGoodInt=div.querySelector(".good-int");
        var tempCommentInt=div.querySelector(".cmt-int");
        var tempHitInt=div.querySelector(".hit-int");

        tempImg.innerSrc="/images/reviewImg.png";
        tempName.innerText=reviewData.name;
        tempTitle.innerText=reviewData.title;

        tempGoodInt.innerText=reviewData.good;
        tempCommentInt.innerText=reviewData.cmt;
        tempHitInt.innerText=reviewData.hit;

        reviewList.append(div);
    };
    
    var setReviewList = function(){    	
		var request = new XMLHttpRequest(); 	
		request.open("POST", "../review-filter", true); 
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		
		var query = inputSearch.value;
		var filter = 1;		
		for (var i = 0; i < aSearch.length; i++) {
			if(aSearch[i].classList.contains("text-indigo")){
                filter = i+1;
            }
		}
					
		request.onload = function () {	
		
			var reviewFilterList = JSON.parse(request.responseText);
			var reviewDivCnt = reviewList.querySelectorAll(".review-div").length;

			var max = reviewFilterList.length;
			if(max>reviewDivCnt+40) max = reviewDivCnt+40;	

			for(var i=reviewDivCnt; i<max; i++){
	    	        var div=document.importNode(tmpReviewDiv.content, true);
	    	        bind_reviewDiv(div,reviewFilterList[i]);
	    	}	    	
		}
		
		request.send("query="+query+"&filter="+filter);
    };
    
    setReviewList();
    
    inputSearch.onkeydown = function() {
        if (event.keyCode == 13) {
        	reviewList.innerHTML="";
    	    setReviewList();
        }
    };
    
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
    	    setReviewList();
    	}
    });
    
    ulSearch.addEventListener("click", function (evt) {
        evt.preventDefault();
        if (evt.target.nodeName != "A") return;
        if(evt.target.className != "btn") return;

        for(var i=0; i<aSearch.length; i++){
            aSearch[i].classList.remove("text-indigo");
        }
        evt.target.classList.add("text-indigo");
    	reviewList.innerHTML="";
        setReviewList();

    }, true); 
    

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