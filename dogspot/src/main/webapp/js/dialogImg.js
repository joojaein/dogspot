window.addEventListener("load", function(){

    var btnImgUpload=dialogImg.querySelector(".reg1-top input[type='button']");
    var btnFileUpload=dialogImg.querySelector(".reg1-top div");
  
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
});