window.addEventListener("load", function() {


	var tbody = document.querySelector('tbody');
	var contents = tbody.querySelectorAll("tr[class='contents']");
	var count1 = 0;
	tbody.addEventListener("click", function(e) {
		
		if(e.target.classList.contains("title"))
		{
			var ple = e.target.parentNode;
			var ple2 = ple.nextSibling.nextSibling	
			for(var a=0; a<contents.length; a++){
				if (count1 == 0) 
				{
					//contents[a+1].style.display = "table-row";
					//e.target.classList.contains("title").nextSibling[0].style.display = "table-row";
					//alert(e.target.parentNode.nextSibling.className);
					
					//var ple2 = ple.nextSibling.nextSibling.nodeName;
					ple2.style.display = "table-row";
					//alert(ple2);
					console.log("open");
					count1++;
					return;
				} 
				else if (count1 == 1) 
				{
					ple2.style.display = "none";
					console.log("close");
					count1--;
					return;
				}
			}
			
		}
		if(e.target.classList.contains("delbtn")){
			 var request = new XMLHttpRequest();
			 request.open("post","")
		}
	});

});
