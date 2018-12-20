window.addEventListener("load", function() {
	var main = document.querySelector('main');
	var txttitle = document.querySelector("input[name='title']");
	var txtcontent = document.querySelector("textarea[name='content']");
	var editbtn = document.querySelector(".editbtn");
	
	main.addEventListener("click", function(e){
		var title = txttitle.value;
		var content = txtcontent.value;
		
		var id = editbtn.name;
		
		 	if(e.target.classList.contains("editbtn")){
			e.preventDefault();
			

			//alert("this is edit button!");
			console.log(title);
			console.log(content);
			 var request = new XMLHttpRequest();
		     request.open("POST","/member/qna/listedit",true);
			 request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			 request.onload = function(e){
				 var temp = request.responseText;
				 window.location.reload(true);
			 };
			 request.send("title="+title + "&content="+content + "&id="+id);

			
			
		}
	});
});
