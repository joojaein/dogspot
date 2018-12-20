window.addEventListener("load", function() {


	var tbody = document.querySelector('tbody');
	var contents = tbody.querySelectorAll("tr[class='contents']");
	var count1 = 0;
	//var txtid = tbody.querySelector("td[class='qid']");

	
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
	        e.preventDefault();

	        var qid=0;
	        
	        var tr = tbody.querySelectorAll("tr");
	        for(var i=0; i<tr.length; i++){
	        	if(tr[i].querySelector(".delbtn") == e.target){
	        		var td = tr[i].querySelector("td[class='qid']");
	        		qid = td.innerText;
	        		console.log(qid);
	        		break;
	        	}else{
	        		console.log(qid);
	        	}
	        }
	        console.log(qid);
	        var btns = tbody.querySelectorAll(".delbtn");
	        
			
			//alert(qid);
			 var request = new XMLHttpRequest();
		     request.open("POST","/member/qna/list-delete",true);
			 request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			 
			 request.onload = function(e){
				 var temp = request.responseText;
				 window.location.reload(true);
			 };
			 
			 request.send("id="+qid);
			 
		};
/*		
		if(e.target.classList.contains("editbtn")){
			
			//console.log("getget");
			e.preventDefault();
			var qid=0;
	        
	        var tr = tbody.querySelectorAll("tr");
	        for(var i=0; i<tr.length; i++){
	        	
	        	if(tr[i].querySelector(".editbtn") == e.target)
	        	{
	        		var td = tr[i].querySelector("td[class='qid']");
	        		qid = td.innerText;
	        		console.log(qid);
	        		break;
	        	}else
	        	{
	        		console.log(qid);
	        	}
	        	
	        }
	        var ebtns = tbody.querySelectorAll(".editbtn");
	        console.log(ebtns);
	        var request = new XMLHttpRequest();
	        request.open("GET","/member/qna/listedit?id="+qid,true);
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			
			request.send();
		};*/
	});
});
