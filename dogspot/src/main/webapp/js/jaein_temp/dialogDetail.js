window.addEventListener("load", function(){
	var dialogDetail = modals.querySelector("#modal-review-detail");
    var reviewDetailTop=dialogDetail.querySelector(".review-top");
    var reviewDetailCenter=dialogDetail.querySelector(".review-center");
    var reviewDetailBottom=dialogDetail.querySelector(".review-bottom");
    var btnUpdateReview = reviewDetailTop.querySelector("input[value='수정']");
    var btnDelReview = reviewDetailTop.querySelector("input[value='삭제']");
    var btnComplainReview = reviewDetailTop.querySelector("input[value='신고']");
    var btnEtcReview = reviewDetailTop.querySelector("input[value='...']");
    var btnGoodTrueIcon = reviewDetailBottom.querySelector(".good-true-icon")
    var btnGoodFalseIcon = reviewDetailBottom.querySelector(".good-false-icon")
    var inputComment = reviewDetailBottom.querySelector("input")

    
    var tmpReviewComment = reviewDetailCenter.querySelector("#review-comment-template");
    
    var setReviewTopBtn = function(){
    	//if 내가 쓴 리뷰이라면 btnComplainReview 를 히든 처리
    	//else btnUpdateReview, btnDelReview 을 히든 처리
    	
    	btnUpdateReview.classList.add("hidden");
    	//btnComplainReview.classList.add("hidden");
    };
    setReviewTopBtn();
    
    reviewDetailTop.addEventListener("click", function(evt){
    	//리뷰!!!!!
        if(evt.target.nodeName !="INPUT") return;

        if(evt.target.value == "수정"){
        	closeModal();
        	showDialogImg();
        }
        else if(evt.target.value == "삭제"){
        	var bool = confirm("정말 삭제하시겠습니까?");
        	if(bool){
        		alert("삭제");
        	}else{
        		alert("취소");
        	}
        }
        else if(evt.target.value == "신고"){
        	closeModal();
        	showDialogReviewComplain();
        }
   }, true);

    var setCmtBtn = function(cmt){
    	//if 내가 쓴 댓글이라면 btnComplainReview 를 히든 처리
    	//else btnUpdateReview, btnDelReview 을 히든 처리
    	
    	var tempUpdate = cmt.querySelector("input[value='수정']");
    	var tempDel = cmt.querySelector("input[value='삭제']");
        var tempComplain = cmt.querySelector("input[value='신고']");
        
       //tempUpdate.classList.add("hidden");
    };
    
    var bind_cmt = function(cmt){
        var tempId = cmt.querySelector(".cmt-id");
        var tempContent = cmt.querySelector(".cmt-content");
        tempId.innerText="아이디";
        tempContent.innerText="내용";
        setCmtBtn(cmt);
        reviewDetailCenter.append(cmt);  
    };
    
    for(var i=0;i<15;i++){
        var cmt=document.importNode(tmpReviewComment.content, true);
        bind_cmt(cmt);
    }
    
    reviewDetailCenter.addEventListener("click", function(evt){
    	//댓글!!!!!!!
        if(evt.target.nodeName !="INPUT") return;

        if(evt.target.value == "수정"){
        	inputComment.focus();
        }
        else if(evt.target.value == "삭제"){
        	var bool = confirm("정말 삭제하시겠습니까?");
        	if(bool){
        		alert("삭제");
        	}else{
        		alert("취소");
        	}
        }
        else if(evt.target.value == "신고"){
        	closeModal();
        	showDialogCommentComplain();
        }
   }, true);

    btnGoodTrueIcon.onclick = function(){
        btnGoodTrueIcon.classList.add("hidden");
        btnGoodFalseIcon.classList.remove("hidden");
    };

    btnGoodFalseIcon.onclick = function(){
        btnGoodFalseIcon.classList.add("hidden");
        btnGoodTrueIcon.classList.remove("hidden");
    };

    var btnSpeed=40;
    var btnEtcColor = 255;
    var moveUpdateBtnInter;
    
    btnEtcReview.onclick = function(evt){
        var color = window.getComputedStyle(btnEtcReview,null).getPropertyValue('background-color'); 
        if(color=="rgb(191, 191, 191)"){
            btnEtcReview.style.backgroundColor = "rgb(255,255,255)";
            btnEtcColor=255;
            moveUpdateBtn();
        }else{
            btnEtcReview.style.backgroundColor = "rgb(191, 191, 191)";
            btnEtcColor=191;
            moveUpdateBtn();
        }
    }

    function moveUpdateBtn(){  	
    	
		moveUpdateBtnInter = setInterval(function(){        
        var btnUpdateClassList = btnUpdateReview.classList.value;
        var isUpdateBtnHiddened = btnUpdateClassList.indexOf("hidden")>=0;
            
        if(btnEtcColor==255){
            if(isUpdateBtnHiddened){
                var complainRightStr = window.getComputedStyle(btnComplainReview,null).getPropertyValue('right'); 
                var complainRight=JSON.parse(complainRightStr.substring(0,complainRightStr.indexOf("p")));       
                
                complainRight=complainRight-btnSpeed/2;
                if(complainRight<=0){
                    complainRight=0;
                }
                btnComplainReview.style.right=complainRight+"px";
                
                if(complainRight==0)
                    clearInterval(moveUpdateBtnInter);
            }
            else{
                var updateRightStr = window.getComputedStyle(btnUpdateReview,null).getPropertyValue('right'); 
                var updateRight=JSON.parse(updateRightStr.substring(0,updateRightStr.indexOf("p")));             
                
                var delRightStr = window.getComputedStyle(btnDelReview,null).getPropertyValue('right'); 
                var delRight=JSON.parse(delRightStr.substring(0,delRightStr.indexOf("p")));
                
                if(delRight>0){
                    delRight=delRight-btnSpeed;
                    if(delRight<=0)
                        delRight=0;
                    btnDelReview.style.right=delRight+"px";
                }else{
                    updateRight=updateRight-btnSpeed;
                    if(updateRight<=0){
                        updateRight=0;
                    }
                    btnUpdateReview.style.right=updateRight+"px";
                }
                
                if(updateRight==0)
                    clearInterval(moveUpdateBtnInter);
            }
            
        }
        else{
            if(isUpdateBtnHiddened){
                var complainRightStr = window.getComputedStyle(btnComplainReview,null).getPropertyValue('right'); 
                var complainRight=JSON.parse(complainRightStr.substring(0,complainRightStr.indexOf("p")));   
                complainRight=complainRight+btnSpeed/2;
                if(complainRight>=50){
                    complainRight=50;
                }
                btnComplainReview.style.right=complainRight+"px";
                if(complainRight==50)
                clearInterval(moveUpdateBtnInter);
            }
            else{
                var updateRightStr = window.getComputedStyle(btnUpdateReview,null).getPropertyValue('right'); 
                var updateRight=JSON.parse(updateRightStr.substring(0,updateRightStr.indexOf("p")));

                var delRightStr = window.getComputedStyle(btnDelReview,null).getPropertyValue('right'); 
                var delRight=JSON.parse(delRightStr.substring(0,delRightStr.indexOf("p")));

                if(updateRight<90){
                    updateRight=updateRight+btnSpeed;
                    if(updateRight>=90)
                        updateRight=90;
                    btnUpdateReview.style.right=updateRight+"px";
                }else{
                    delRight=delRight+btnSpeed;
                    if(delRight>=50){
                        delRight=50;
                    }
                    btnDelReview.style.right=delRight+"px";
                }
                
                if(delRight==50)
                    clearInterval(moveUpdateBtnInter);
            }
        }}, 50);
    };
 
});