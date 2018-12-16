window.addEventListener("load", function(){

    var reviewDetailCenter=dialogDetail.querySelector(".review-center");
    var btnUpdateReview = dialogDetail.querySelector("input[value='수정']");
    var btnDelReview = dialogDetail.querySelector("input[value='삭제']");
    var btnEtcReview = dialogDetail.querySelector("input[value='...']");
    var btnGoodTrueIcon = dialogDetail.querySelector(".good-true-icon")
    var btnGoodFalseIcon = dialogDetail.querySelector(".good-false-icon")
    
    var tmpReviewComment = reviewDetailCenter.querySelector("#review-comment-template");
    
    var bind_cmt = function(cmt){
        var tempId = cmt.querySelector(".cmt-id");
        var tempContent = cmt.querySelector(".cmt-content");
        tempId.innerText="아이디";
        tempContent.innerText="내용";
        reviewDetailCenter.append(cmt);  
    };

    for(var i=0;i<15;i++){
        var cmt=document.importNode(tmpReviewComment.content, true);
        bind_cmt(cmt);
    }

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
            if(btnEtcColor==255){
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
                
            }else{
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
        }, 50);
    };
 
});