window.addEventListener("load", function() {

	var test = document.querySelector("#test");
	var element = document.querySelector("tr");

	var notices = [ {
		place:"산음자연휴양림",
		contents:"여기 진짜별루ㅋ가..",
		title: "신고 부탁드립니다.",
		condition: "접수완료",
		date:"2018.10.01"

	} ];

	var bind = function(tr, notice) {
		var txtplace = tr.querySelector('.place');
		var txtcontents = tr.querySelector('.contents');
		var txttitle = tr.querySelector('.title');
		var txtcondition = tr.querySelector('.condition');
		var txtdate = tr.querySelector('.date');

		txtplace.innerText = notice.place;
		txtcontents.innerText = notice.contents;
		txttitle.innerText = notice.title;
		txtcondition.innerText = notice.condition;
		txtdate.innerText = notice.date;

	};
	var template = test.querySelector(".row-template");
	var tbody = test.querySelector("tbody");

	for (var i = 0; i < 10; i++) {
		var tr = document.importNode(template.content, true);
		bind(tr, notices[0]);
		tbody.appendChild(tr);
		//var aa = tbody.querySelectorAll("tr[id='trhere']");

	}

	//var btnshow = tbody.querySelector("tr[id='trhere']");
	var tbody = document.querySelector('tbody');
	var contents = tbody.querySelectorAll("tr[class='contents']");
	var count1 = 0;
	tbody.addEventListener("click", function(e) {
		
		if(e.target.classList.contains("place"))
		{
			for(var a=0; a<contents.length; a++){
				if (count1 == 0) 
				{
					contents[a].style.display = "table-row";
					console.log("open");
					count1++;
					return;
				} 
				else if (count1 == 1) 
				{
					contents[a].style.display = "none";
					console.log("close");
					count1--;
					return;
				}
			}
			
		}
		


		/*var contents = tbody.querySelectorAll("tr[class='contents']");
		var count1 = 0;
		for (var j = 0; j < contents.length; j++) 
		{
			if (count1 == 0) 
			{
				contents[j].style.display = "table-row";
				console.log("open");
				count1++;
				return;
			} 
			else if (count1 == 1) 
			{
				contents[j].style.display = "none";
				console.log("close");
				count1--;
				return;
			}

		}*/
	

	});

});
