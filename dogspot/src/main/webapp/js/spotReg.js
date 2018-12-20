window.addEventListener("load", function(){

	var dataAdd = document.querySelector(".data-add");
	var regBtn = document.querySelector(".reg-btn");
	var regName = document.querySelector(".reg-name");
	//var radioBtn = document.querySelectorAll('input[type="radio"]');
	var regTheme = document.querySelector(".reg-theme");
	var tmpRadio;
	var selectPhone = document.querySelector(".select");
	var regPhone = document.querySelector(".reg-phone");
	var regAddr = document.querySelector(".reg-addr");
	
	
	dataAdd.addEventListener("click",function(e){
		//console.log(e.target.nodeName);

		//alert(e.target.nodeName);
		if(e.target.nodeName != "INPUT" &&
		e.target.nodeName != "TEXTAREA" &&
		e.target.nodeName != "SELECT") return;
		
		//alert(e.target.id);
		if(e.target.type == "radio"){
			if(e.target.id=="cafe")
				tmpRadio=1;
			else if(e.target.id=="food")
				tmpRadio=2;
			else if(e.target.id=="play")
				tmpRadio=3;
			else if(e.target.id=="room")
				tmpRadio=4;
			
		}

	},true);
	

	regBtn.addEventListener("click",function(e){
		//console.log(e.target.nodeName);

		//alert("장소이름: "+regName.value);
		//alert("장소테마: "+tmpRadio);
		//alert("장소테마분류: "+regTheme.value);
		//alert("폰앞: "+selectPhone.value);
		//alert("폰뒤: "+regPhone.value);
		//alert("주소: "+regAddr.value);
		//e.preventDefault();
		setRegData();
		//e.stopPropagation();

	},true);
	
	var setRegData = function(e){
		
    	var request = new XMLHttpRequest(); 	
		request.open("POST", "../../admin-spot-reg", true); 
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		
		
		request.onload = function () {	
			
			
		}
		alert("장소이름: "+regName.value);
		alert("장소테마: "+tmpRadio);
		alert("폰앞: "+selectPhone.value);
		alert("폰뒤: "+regPhone.value);
		alert("주소: "+regAddr.value);
		request.send("spot-name="+regName.value+"&theme="+tmpRadio+"&addr="+regAddr.value
				+"&phone="+selectPhone.value+"&phone-two="+regPhone.value
		);
		
    };
	
	
	
});