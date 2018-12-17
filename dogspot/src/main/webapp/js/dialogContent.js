window.addEventListener("load", function(){

    var btnPageUpDown=dialogContent.querySelector(".review-spot-list img");			
    var textareaReviewContent = dialogContent.querySelector("textarea");
    var inputReviewTitle = dialogContent.querySelector(".review-report input");
    var ulSpotlist = dialogContent.querySelector(".review-spot-list ul");
    var inputSpot = dialogContent.querySelector(".review-spot-list input[type='text']");
    var btnReviewUpload=dialogContent.querySelector("input[value='리뷰등록']");
    var hashTag = dialogContent.querySelector(".text-hashtag");
    var readyHash=false;

    var bind_spot = function(spot){
    	var tempSpot = spot.querySelector("a");
        tempSpot.innerText="가가카페";
        ulSpotlist.append(spot);
    };

    for(var i=0; i<5; i++){
        var a = document.createElement("a");
        var li = document.createElement("li");
        a.href="";
        li.appendChild(a);
        bind_spot(li);
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
         label.innerText=evt.target.innerText;

    }, true);

   
    btnPageUpDown.onclick = function(evt){
        evt.preventDefault();
        var imgName = evt.target.src;
        if(imgName.indexOf("Down")>=0){
        	imgName=imgName.replace("Down","Up");
            ulSpotlist.classList.remove("hidden");
            inputSpot.classList.remove("hidden");
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
    
    btnReviewUpload.onclick = function(){
        closeModal();
    }; 
});