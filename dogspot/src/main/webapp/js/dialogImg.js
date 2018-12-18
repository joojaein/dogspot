window.addEventListener("load", function(){

    var btnImgUpload=dialogImg.querySelector(".reg1-top input[type='button']");
    var btnFileUpload=dialogImg.querySelector(".reg1-top div");
    var basicImgSrc = "/images/regImg.png";
    var sideImgs = dialogImg.querySelector(".side-imgs");
    var imgs = sideImgs.querySelectorAll("li img:first-child");
    
    btnFileUpload.onclick = function(){
        var evt = new MouseEvent("click", {
			"view":window,
			"bubbles":true,
			"cancelable":true
		});
        var btnFile=dialogImg.querySelector(".reg1-top input[type='file']");
		btnFile.dispatchEvent(evt);
    }

    btnImgUpload.onclick = function(evt){
        closeModal();
        modalBack.style.display = "unset";
        dialogContent.showModal();
    } 
    
    
    
    /////////////////////////////fileUpload//////////////////////////////////
    var dndSc = dialogImg.querySelector(".dnd-parency");
    var msgDiv = dialogImg.querySelector(".msg");
    var explanationDiv = dialogImg.querySelector(".explanation");
    var fileArr = [];
    
    dndSc.ondragenter = function(evt){
		evt.preventDefault();
		evt.stopPropagation();
		
		var valid =  evt.dataTransfer.types
					&& evt.dataTransfer.types.indexOf("Files") >=0 ;
		if(!valid){
			msgDiv.classList.add("text-red");
			msgDiv.innerText = "유효한 파일 형식이 아닙니다.";
			explanationDiv.classList.add("hidden");
		}		
		
	};
    
	dndSc.ondragleave = function(evt){
		evt.preventDefault();
		evt.stopPropagation();

		msgDiv.classList.remove("text-red");
		msgDiv.innerText = "빠르게 사진 올리기";
		explanationDiv.classList.remove("hidden");
	};
	
	dndSc.ondragover = function(evt){
		evt.preventDefault();
		evt.stopPropagation();
	};
	
	
	dndSc.ondrop = function(evt){
		
		evt.preventDefault();
		evt.stopPropagation();
		
		msgDiv.classList.remove("text-red");
		msgDiv.innerText = "빠르게 사진 올리기";
		explanationDiv.classList.remove("hidden");
		

		var valid = evt.dataTransfer.types
					&& evt.dataTransfer.types.indexOf("Files") >=0;
		if(!valid) return;
		
		var files = evt.dataTransfer.files;
		var excess =[]; 
		
		
		var request = new XMLHttpRequest();
		
		request.onload = function () {
			//fetchFileList();
		};
		

		for (var i = 0; i < files.length; i++) {
			if(files[i].size > 10*1024*1024)
			{
				msgDiv.classList.add("text-red");
				msgDiv.innerText = "10MB 이상은 전송할 수 없습니다.";
				explanationDiv.classList.add("hidden");
				excess.push(i);		
			}else{
				fileArr.push(files[i])
				var fd = new FormData();
				fd.append("file", files[i]);
				request.open("POST", "../../upload", false);
				request.onload = function () {
					 for(var i=0; i<imgs.length; i++){
						if(imgs[i].src=="http://localhost/images/regImg.png"){
							
							console.log(request.responseText);
							imgs[i].src="/upload/"+request.responseText;
							break;
							
							}
					 }
				//request.responseText;
				};
				request.send(fd);
			}
		}
		
		if(excess.length>0){
			setTimeout(function(){ //1회용
				msgDiv.classList.remove("text-red");
				msgDiv.innerText = "빠르게 사진 올리기";
				explanationDiv.classList.remove("hidden");
			}, 1000); 
		}
		
		

		
		
//		var bindFileList = function(){
//			fileList.innerHTML="";
//
//			for(var i=0; i<files.length; i++){
//				fileList.innerHTML +=
//				"<li class='file folder'> \
//					<span>"+files[i].fileName+"</span> \
//				</li>";
//			}	
//		};
	

	};
    
});















/*window.addEventListener("load", function(){

	var ex13 = document.querySelector("#ex13");
	var fileList = ex13.querySelector(".file-list");
	var status = ex13.querySelector(".status");
	
	var files = [];
	
	var bindFileList = function(){
		fileList.innerHTML="";

		for(var i=0; i<files.length; i++){
			fileList.innerHTML +=
			"<li class='file folder'> \
				<span>"+files[i].fileName+"</span> \
			</li>";
		}	
	};
	
	var fetchFileList = function(){
		var request = new XMLHttpRequest();
		request.open("GET", "../file-list", true);
		request.onload = function (evt) {
			files = JSON.parse(request.responseText);
			bindFileList();
			for(var i=0; i<files.length; i++){
				fileList.innerHTML +=
				"<li class='file folder'> \
					<span>"+files[i].fileName+"</span> \
				</li>";
			}		
		};
		request.send();
	};
	fetchFileList();


	var span = status.querySelector("span");
	fileList.ondragenter = function(evt){
		//이유 : 각 핸들러는 preventDefault()를 호출해 추가적인 이벤트(터치이벤트나 포인터이벤트)가 일어나지 않도록 합니다.
		evt.preventDefault();
		evt.stopPropagation();

		status.classList.remove("hidden");
		var valid =  evt.dataTransfer.types.indexOf("Files") >=0 ;
		
		status.classList.remove("notice");

		
		if(!valid){
			//span.innerText = "유효한 파일 형식이 아닙니다.";
			status.classList.add("notice");
		}
		
		
		for(var key in evt.dataTransfer){
			console.log("enter : " + key);
		}
		for(var key in evt.dataTransfer.types){
			console.log(key);
		}
		console.log("evt.dataTransfer.types[0] : "+evt.dataTransfer.types[0]);
		console.log("evt.dataTransfer.types[1] : "+evt.dataTransfer.types[1]);
		
		var valid = null ||  "aa" || 0 || false;
		유효한 값을 찾아냄 (여기서는 "aa"만 유효한 값으로 취급함 , 만약 0 대신 1이상의 숫자가 들어오면 그것도 유효한 값으로 취급)
		var valid = evt.dataTransfer != null
					&& evt.dataTransfer != undefined
					&& evt.dataTransfer.types != null
					&& evt.dataTransfer.types != undefined
					&& evt.dataTransfer.types.indexOf("Files") >= 0;		
		var valid = evt.dataTransfer 
					&& evt.dataTransfer.types
					&& evt.dataTransfer.types.indexOf("Files") >=0 ;
		console.log(valid);
		
		
	}

	fileList.ondragover = function(evt){
		evt.preventDefault();
		evt.stopPropagation();

		for(var key in evt.dataTransfer){
			//console.log("over" + key);
		}
	};

	fileList.ondragleave = function(evt){
		evt.preventDefault();
		evt.stopPropagation();

		status.classList.add("hidden");
	};
	
	fileList.ondrop = function(evt){

		evt.preventDefault();
		evt.stopPropagation();
		
		var valid = evt.dataTransfer.types
					&& evt.dataTransfer.types.indexOf("Files") >=0;

		if(!valid) return;
		
		var files = evt.dataTransfer.files;
		
		if(files[0].size > 200*1024*1024){
			alert("10MB 이상은 전송할 수 없습니다.")
		}
		
		var fd = new FormData();
		fd.append("file", files[0]);

//		var list = [{"ext":"png","fileName":"c01503.png","size":"2715","type":"image/png","createDate":"2018-12-13 16:51:52"},{"ext":"png","fileName":"hp.png","size":"5636","type":"image/png","createDate":"2018-12-14 15:11:15"}];
//		alert("test : "+list[0].fileName);
		
		var request = new XMLHttpRequest();
		request.open("POST", "../upload", true);
		
		request.onload = function () {
			fetchFileList();
		};
		
		request.upload.onprogress = function(evt){
			console.log("evt.lengthComputable : "+evt.lengthComputable);
			console.log("evt.loaded : " +evt.loaded);
			console.log("evt.total : "+evt.total);
			if (evt.lengthComputable) {
			    var percentComplete = Math.round(evt.loaded / evt.total * 100);
			    console.log(percentComplete+"%");
			    // ...
			  } else {
			    // Unable to compute progress information since the total size is unknown
			  }
		};
		
		request.send(fd); 
	};
});*/