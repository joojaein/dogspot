window.addEventListener("load", function(){

    var btnPageUpDown=dialogContent.querySelector(".review-spot-list img");			
    var textareaReviewContent = dialogContent.querySelector("textarea");
    var inputReviewTitle = dialogContent.querySelector(".review-report input");
    var ulSpotlist = dialogContent.querySelector(".review-spot-list ul");
    var inputSpot = dialogContent.querySelector(".review-spot-list input[type='text']");
    var btnReviewUpload=dialogContent.querySelector("input[value='리뷰등록']");
    var hashTag = dialogContent.querySelector(".text-hashtag");
    var readyHash=false;

    
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

        }else if(inputReviewTitle.value==null || inputReviewTitle.value==""){
            event.preventDefault();
            
        	alert("제목 미입력");
        }else if(textareaReviewContent.value==null || textareaReviewContent.value==""){
            event.preventDefault();

        	alert("내용 미입력");
        }else{
            closeModal();
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
            hashTag.innerText = "#해시태그 ";
        }else{
            hashTag.innerText = tempHash;
        }
    };
    
    textareaReviewContent.onkeyup = function(evt){
    	var key = evt.keyCode;
    	console.log(key);
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

});