window.addEventListener("load", function(){

	var dialogImg = modals.querySelector("#modal-review-reg-img");

    var btnImgUpload=dialogImg.querySelector(".reg1-top input[type='button']");
    //var btnFileUpload=dialogImg.querySelector(".reg1-top div");
    var basicImgSrc = "/images/regImg.png";
    
    /*
    btnFileUpload.onclick = function(){
        var evt = new MouseEvent("click", {
			"view":window,
			"bubbles":true,
			"cancelable":true
		});
        var btnFile=dialogImg.querySelector(".reg1-top input[type='file']");
		btnFile.dispatchEvent(evt);
    }*/

    btnImgUpload.onclick = function(evt){
    	
    	var tempArr = [];
    	for(var i =0; i<fileArr.length; i++){
    		tempArr.push(fileArr[i].name);
    	}
    	btnImgUpload.value = tempArr;
    	console.log(btnImgUpload.value);
    	
        closeModal();
        showDialogContent();
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
});







