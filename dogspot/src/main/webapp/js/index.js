window.addEventListener("load", function(){

    var main = document.querySelector("main");
    var top6 = main.querySelector(".top6")
    var tmpTop6 = top6.querySelector("template");


    var bind_topSpot = function(topSpot){
       
    tempImg=topSpot.querySelector("img");
    tempLabel=topSpot.querySelector("label");
    
    tempImg.innerSrc="/images/reviewImg.png";
    tempLabel.innerText="서울";
    
    top6.append(topSpot);  
    }

    for(var i=0;i<6;i++){
        topSpot=document.importNode(tmpTop6.content, true);
        bind_topSpot(topSpot);
    }

});