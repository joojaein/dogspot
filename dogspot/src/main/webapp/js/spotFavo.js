window.addEventListener("load", function(){

    var main = document.querySelector("#my-list");
    var favoBtns = document.querySelectorAll(".favorite");

   
    main.addEventListener("click",function(evt){
        if(evt.target.nodeName != "INPUT") return;
        //console.log(evt.target.nodeName);
        //alert(evt.target.id);
        //alert("favo"+favoBtns[0].id);

        for(var i=0; i<favoBtns.length;i++){
            if(evt.target.id==favoBtns[i].id){
                if(favoBtns[i].value != "★"){
                    favoBtns[i].value = "★";
                    favoBtns[i].style.color = "yellow";
                    return;
                }
                else{
                    favoBtns[i].value = "☆";
                    favoBtns[i].style.color = "black";
                }
            }

        }

    },true);
 

});

