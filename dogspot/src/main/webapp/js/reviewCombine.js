window.addEventListener("load",function() {

		///////////////////////reviewModals///////////////////////////////////////////////////////////
		var modals = document.querySelector("#modals");
		var modalBack = modals.querySelector(".modal-back");

		var dialogDetail = modals.querySelector("#modal-review-detail");
		var dialogImg = modals.querySelector("#modal-review-reg-img");
		var dialogContent = modals.querySelector("#modal-review-reg-content");
		var dialogReviewComplain = modals.querySelector("#modal-review-complain");
		var dialogCommentComplain = modals.querySelector("#modal-comment-complain");

		var dialogArr = [ dialogDetail, dialogImg, dialogContent,
				dialogReviewComplain, dialogCommentComplain ];
	    //---------------------------------------------------------------------------------------
	
		var closeModal = function() {
			for (var i = 0; i < dialogArr.length; i++) {
				if (dialogArr[i].open) {
					dialogArr[i].close();
					return;
				}
			}
		}
		
		var showModal = function(dialog){
			closeModal();
			dialog.showModal();
		}

		modals.addEventListener("click", function(evt) {
			if (evt.target.nodeName != "IMG")
				return;
			

			if (evt.target.className.indexOf("modal-x")<0)
				return;

			closeModal();
		}, true);

		document.onkeydown = function(evt) {
			if (event.keyCode === 27) {
				evt.preventDefault();
			}
		}
		
		///////////////////////review///////////////////////////////////////////////////////////

		var reviewSearch = document.querySelector("#review-search");
		var inputSearch = reviewSearch.querySelector("input[type='text']");
		var ulSearch = reviewSearch.querySelector("ul");
		var aSearch = ulSearch.querySelectorAll("a");
		
	    var reviewList=document.querySelector("#review-list");
	    var tmpReviewDiv= reviewList.querySelector("#review-list-div-template");    
	    var btnAddReview=document.querySelector("main>input");
	    //---------------------------------------------------------------------------------------
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
	        showModal(dialogDetail);
	    }, true); 
	    
	    btnAddReview.onclick = function(evt){
	        showModal(dialogImg);
	    };
	    
		///////////////////////datail///////////////////////////////////////////////////////////
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
	    //---------------------------------------------------------------------------------------

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
	        	showModal(dialogImg);
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
	        	showModal(dialogReviewComplain);
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
	        	showModal(dialogCommentComplain);
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

	    
		///////////////////////img///////////////////////////////////////////////////////////
	    var btnImgUpload=dialogImg.querySelector(".reg1-top input[type='button']");
	    var basicImgSrc = "/images/regImg.png";
	    //---------------------------------------------------------------------------------------		

	    btnImgUpload.onclick = function(evt){
	    	
	    	var tempArr = [];
	    	for(var i =0; i<fileArr.length; i++){
	    		tempArr.push(fileArr[i].name);
	    	}
	    	showModal(dialogContent)
	    } 
	    /////////////////////////////fileUpload//////////////////////////////////
	    var fileArr = [];
	    
	    var dndSc = dialogImg.querySelector(".dnd-parency");
	    var dndImg = dialogImg.querySelector(".dnd img");
	    var msgDiv = dialogImg.querySelector(".msg");
	    var explanationDiv = dialogImg.querySelector(".explanation");
	    
	    var sideImgSc = dialogImg.querySelector(".side-imgs");
	    var imgLi = sideImgSc.querySelectorAll("li");
	    
	    var delSrc = "/images/delImg.png";
	    var regSrc = "/images/regImgs.png";
	    
	    var clickImgIndex = -1;
	    //-----------------------------------------------------------------------
	    sideImgSc.onmousedown = function(evt){
	    	
	    	var imgs = sideImgSc.querySelectorAll("li img");
	    	
	    	for(var i =0; i< imgs.length; i++){
	    		if(imgs[i] == evt.target){
	    			dndImg.src = delSrc;	
	    			msgDiv.classList.add("text-red");
	    			msgDiv.innerText = "이곳에 사진을 끌어다 놓으면 목록에서 제거됩니다.";
	    			explanationDiv.classList.add("hidden");
	    			clickImgIndex=i;
	    			break;
	    		}
	    	}		
		};

		document.onmouseup = function(evt){
			clickImgIndex=-1;
		};
		
	    sideImgSc.onmouseup = function(evt){
			dndImg.src = regSrc;	
			msgDiv.classList.remove("text-red");
			msgDiv.innerText = "빠르게 사진 올리기";
			explanationDiv.classList.remove("hidden");
	    };
	    
	    dndSc.ondragenter = function(evt){
			evt.preventDefault();
			evt.stopPropagation();
			
			if(evt.dataTransfer.types.length<1) return;
			
			if(evt.dataTransfer.types.indexOf("Files") <0){
				if(evt.dataTransfer.types.indexOf("text/plain") >=0 
						&& evt.dataTransfer.types.indexOf("text/uri-list") >=0
						&& evt.dataTransfer.types.indexOf("text/html") >=0)
				{
	    			dndImg.src = delSrc;	
	    			msgDiv.classList.add("text-red");
	    			msgDiv.innerText = "이곳에 사진을 끌어다 놓으면 목록에서 제거됩니다.";
	    			explanationDiv.classList.add("hidden");
				}else{
					dndImg.src = regSrc;	
					msgDiv.classList.add("text-red");
					msgDiv.innerText = "유효한 파일 형식이 아닙니다.";
					explanationDiv.classList.add("hidden");
				}
			}
		};
	    
		dndSc.ondragleave = function(evt){
			evt.preventDefault();
			evt.stopPropagation();

			dndImg.src = regSrc;	
			msgDiv.classList.remove("text-red");
			msgDiv.innerText = "빠르게 사진 올리기";
			explanationDiv.classList.remove("hidden");
		};
		
		dndSc.ondragover = function(evt){
			evt.preventDefault();
			evt.stopPropagation();
		};
		
		sideImgSc.ondragover = function(evt){
			evt.preventDefault();
			evt.stopPropagation();
		};
		
		
		sideImgSc.ondrop = function(evt){
			evt.preventDefault();
			evt.stopPropagation();
			
			dndImg.src = regSrc;	
			msgDiv.classList.remove("text-red");
			msgDiv.innerText = "빠르게 사진 올리기";
			explanationDiv.classList.remove("hidden");
			
			if(clickImgIndex!=-1){
				
				var begin = imgLi[clickImgIndex].querySelector("img");
				var end = evt.target;
		    	
				if(evt.target.nodeName=="LI"){//자리 밀리기
					var tempSrc = begin.src;
					for(var i=clickImgIndex; i<imgLi.length-1; i++){
						if(imgLi[i+1].querySelector("img") !=null){
							var now = imgLi[i].querySelector("img");
							var next = imgLi[i+1].querySelector("img")
							now.src = next.src;
						}else{        
							var now = imgLi[i].querySelector("img");
							now.src = tempSrc;

							break;
						}
					}

				}else if(evt.target.nodeName=="IMG"){//사진 바꾸기
					var tempSrc = begin.src;
					begin.src=end.src;
					end.src=tempSrc;
				}	
			}	
		};
		
		dndSc.ondrop = function(evt){
			evt.preventDefault();
			evt.stopPropagation();

			dndImg.src = regSrc;	
			msgDiv.classList.remove("text-red");
			msgDiv.innerText = "빠르게 사진 올리기";
			explanationDiv.classList.remove("hidden");
			
			if(evt.dataTransfer.types.length<1) return;
			
			if(evt.dataTransfer.types.indexOf("Files") >=0){//등록할 사진을 올려놓음
			
				var files = evt.dataTransfer.files;
				var excessMb = false;
				var excessCnt = false;
				
				var request = new XMLHttpRequest();		

				for (var i = 0; i < files.length; i++) {
					if(files[i].size > 10*1024*1024)
					{
						dndImg.src = regSrc;	
						msgDiv.classList.add("text-red");
						msgDiv.innerText = "10MB 이상은 전송할 수 없습니다.";
						explanationDiv.classList.add("hidden");
						excessMb = true;	
					}else{
						if(fileArr.length<9){
							fileArr.push(files[i])
							var fd = new FormData();
							fd.append("file", files[i]);
							request.open("POST", "../../upload", false);
							request.onload = function () {
								
								for(var i=0; i<imgLi.length; i++){
									if(imgLi[i].querySelector("img")==null){
										var tempImg = document.createElement("img");
										tempImg.src = "/upload/"+request.responseText;
										imgLi[i].append(tempImg);
										break;
									}
								}
							};
							request.send(fd);
						}else{
							dndImg.src = regSrc;	
							msgDiv.classList.add("text-red");
							msgDiv.innerText = "최대 9장의 사진까지 등록 가능합니다.";
							explanationDiv.classList.add("hidden");
							excessCnt=true;
						}
					}
				}
				
				if(excessMb || excessCnt) {
					setTimeout(function(){ //1회용
						dndImg.src = regSrc;	
						msgDiv.classList.remove("text-red");
						msgDiv.innerText = "빠르게 사진 올리기";
						explanationDiv.classList.remove("hidden");
					}, 1000); 
				}
			
			}else if(evt.dataTransfer.types.indexOf("text/plain") >=0 
					&& evt.dataTransfer.types.indexOf("text/uri-list") >=0
					&& evt.dataTransfer.types.indexOf("text/html") >=0){ //삭제할 사진을 올려놓음
				if(clickImgIndex!=-1){
					for(var i=clickImgIndex; i<imgLi.length-1; i++){
						if(imgLi[i+1].querySelector("img") !=null){
							var now = imgLi[i].querySelector("img");
							var next = imgLi[i+1].querySelector("img")
							now.src = next.src;
						}else{        
							var now = imgLi[i].querySelector("img");
							imgLi[i].removeChild(now);
							
							break;
						}
					}
				}
			}
		};
	    
		///////////////////////content///////////////////////////////////////////////////////////
	    var btnPageUpDown=dialogContent.querySelector(".review-spot-list img");			
	    var textareaReviewContent = dialogContent.querySelector("textarea");
	    var inputReviewTitle = dialogContent.querySelector(".review-report input");
	    var ulSpotlist = dialogContent.querySelector(".review-spot-list ul");
	    var inputSpot = dialogContent.querySelector(".review-spot-list input[type='text']");
	    var btnReviewUpload=dialogContent.querySelector(".review-top .btn");
	    var hashTag = dialogContent.querySelector(".text-hashtag");
	    var readyHash=false;
	    //---------------------------------------------------------------------------------------
	    
	    inputSpot.onkeydown = function() {
	        if (event.keyCode === 13) {
	            event.preventDefault();
	        }
	    };
	    
	    var bind_spot = function(spot, id, name, addr){
	    	var tempSpot = spot.querySelector("a");
	        tempSpot.innerText=name +" : " + addr;
	        tempSpot.value=id;
	        ulSpotlist.append(spot);
	    };

	    inputSpot.onkeyup = function(evt){	
	        var label = dialogContent.querySelector(".review-spot-list label");
	        label.classList.remove("text-red");

			if(inputSpot.value < '가') return;
			if(inputSpot.value== 13) return; 
			
			var request = new XMLHttpRequest(); 
			
			request.open("POST", "../review-spot-search", true); 
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
			
			request.onload = function () {	
				ulSpotlist.innerHTML="";

				var spotList = JSON.parse(request.responseText);
				for(var i=0; i< spotList.length; i++){
					var a = document.createElement("a");
			        var li = document.createElement("li");
			        a.href="";
			        li.classList.add("text-overflow-ellipsis");
			        li.appendChild(a);
			        bind_spot(li, spotList[i].id, spotList[i].name, spotList[i].addr);
			     }
				
			}
			request.send("keywords=" + inputSpot.value);		
	    };
	    
	    btnReviewUpload.onclick = function(){
	        var label = dialogContent.querySelector(".review-spot-list label");
	        if(label.value==undefined){ //리뷰할 장소 미선택
	            event.preventDefault();
	            label.classList.add("text-red")
	            var imgName = btnPageUpDown.src;
	            if(imgName.indexOf("Down")>=0){
	               imgName=imgName.replace("Down","Up");
	                ulSpotlist.classList.remove("hidden");
	                inputSpot.classList.remove("hidden");
	                inputSpot.focus();
	            }
	            btnPageUpDown.src=imgName;
	        }else if(inputReviewTitle.value==null || inputReviewTitle.value==""){
	            event.preventDefault();
	            inputReviewTitle.classList.add("placeholderred-red");
	            inputReviewTitle.focus();
	        }else if(textareaReviewContent.value==null || textareaReviewContent.value==""){
	            event.preventDefault();
	            textareaReviewContent.classList.add("placeholderred-red");
	            textareaReviewContent.focus();
	        }else{
			    closeModal();
	        	textareaReviewContent.value = textareaReviewContent.value+" ";
				setHashTag();

				var request = new XMLHttpRequest(); 
				
				request.open("POST", "../review-insert", true); 
				request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
				
				request.send("id=" + label.value+
				    "&title="+inputReviewTitle.value+
				    "&content="+textareaReviewContent.value+
				    "&hashtag="+hashTag.innerText);      
			   }
	    }; 
   
	    ulSpotlist.addEventListener("click", function(evt){
	         if (evt.target.nodeName != "A" ) return;
	         evt.preventDefault();
	         var imgName = btnPageUpDown.src;
	         if(imgName.indexOf("Up")>=0){
	         	imgName=imgName.replace("Up","Down");
	             btnPageUpDown.src=imgName;
	         }

	         ulSpotlist.classList.add("hidden");
	         inputSpot.classList.add("hidden");
	         inputReviewTitle.focus();

	         var label = dialogContent.querySelector(".review-spot-list label");
	         var tempText = evt.target.innerText;
	         label.innerText = " "+tempText.substring(0,tempText.indexOf(":"));
	         label.value = evt.target.value;

	    }, true);
	   
	    btnPageUpDown.onclick = function(evt){
	        evt.preventDefault();
	        var imgName = evt.target.src;
	        if(imgName.indexOf("Down")>=0){
	        	imgName=imgName.replace("Down","Up");
	            ulSpotlist.classList.remove("hidden");
	            inputSpot.classList.remove("hidden");
	            inputSpot.focus();
	        }else{
	        	imgName=imgName.replace("Up","Down");
	            ulSpotlist.classList.add("hidden");
	            inputSpot.classList.add("hidden");
	        }
	        btnPageUpDown.src=imgName;
	    }

	    inputReviewTitle.onclick = function(evt){
	        var imgName = btnPageUpDown.src;
	        if(imgName.indexOf("Up")>=0){
	        	imgName=imgName.replace("Up","Down");
	            btnPageUpDown.src=imgName;
	            }

	        ulSpotlist.classList.add("hidden");
	        inputSpot.classList.add("hidden");
	    }
	    
	    textareaReviewContent.onclick = function(evt){
	        var imgName = btnPageUpDown.src;
	        if(imgName.indexOf("Up")>=0){
	    	imgName=imgName.replace("Up","Down");
	        btnPageUpDown.src=imgName;
	        }

	       ulSpotlist.classList.add("hidden");
	       inputSpot.classList.add("hidden");
	    }
	    
	    
	    var setHashTag = function(){
	        var tempText = textareaReviewContent.value;
	        var tempHash="";
	        while(true){
	            var tempBegin = tempText.indexOf("#");
	            if(tempBegin<0) break;
	            
	            tempText = tempText.substring(tempBegin);            
	            var tempEnd = tempText.indexOf(" ");
	            if(tempEnd<0) break;

	            tempHash+=tempText.substring(0, tempEnd)+" ";
	            tempText = tempText.substring(tempEnd);
	        }

	        if(tempHash==""){
	            hashTag.innerText = "#";
	        }else{
	            hashTag.innerText = tempHash;
	        }
	    };
	    
	    textareaReviewContent.onkeyup = function(evt){
	    	var key = evt.keyCode;
	    	var temp="";
	    	if(key==51){ //'#'
	    		if(readyHash){
	                textareaReviewContent.value = textareaReviewContent.value.substring(0,textareaReviewContent.value.length-1);
	                textareaReviewContent.value +=" #";
	    			setHashTag();
	    		}
	    		readyHash=true;
	    	}
	    	else if(key==32 && readyHash==true){//' '
				setHashTag();
	    		readyHash=false;
	        }
	    	else if(key==13 && readyHash==true){
	    		textareaReviewContent.value = textareaReviewContent.value.substring(0,textareaReviewContent.value.length-1);
	            textareaReviewContent.value +=" \n";
	 			setHashTag();
	    	}
	    	else if(key ==8){ //backspace
				setHashTag();
	    	}
	    }; 
	    
		///////////////////////review-complain///////////////////////////////////////////////////////////
	    var btnSend=dialogReviewComplain.querySelector(".send-btn");
	    //---------------------------------------------------------------------------------------
	    btnSend.onclick = function(evt){
	        closeModal();
	    } 

	    
		///////////////////////cmt-complain///////////////////////////////////////////////////////////
	    var btnSend=dialogCommentComplain.querySelector(".send-btn");
	    //---------------------------------------------------------------------------------------
	    btnSend.onclick = function(evt){
	        closeModal();
	    } 
	   

});