window.addEventListener("load", function(){

	
	function Enter_Check(){
		
        // 엔터키의 코드는 13입니다.
		if(event.keyCode == 13){
			alert("눌렀어!!");  // 실행할 이벤트
    	}
	}
	
	 /*-------------- spot-list js 처리 및 무한스크롤  ----------------*/
	var SpotList= document.querySelector(".list-add");
	var tmpSpotList= document.querySelector(".spot-list-template");
	var inputSearch = document.querySelector("input[name='search']");
	var inputLocal = document.querySelector("select[name='local']");
	var inputTheme = document.querySelector("select[name='theme']");
	var inputSize = document.querySelector("select[name='size']");
	var inputMinPrice = document.querySelector("input[name='min-price']");
	var inputMaxPrice = document.querySelector("input[name='max-price']");
	
	var minsArr = [];
	var maxsArr = [];
	var addrsArr = [];
	var themesArr = [];
	
	var tog = document.querySelector("#tog");
	var flag=1;
	
	
	var main = document.querySelector("#wid-front");
    var favoBtns = document.querySelector(".favorite");
    var input = document.querySelector("#wid-front input");
    
	var bind_spotList = function(tmp,spotData){
		var theme_img;	
		tmpMainImg=tmp.querySelector(".img-list");
        tmpTitle=tmp.querySelector(".list-title");
        tmpTheme=tmp.querySelector(".list-theme");
        tmpAddr=tmp.querySelector(".list-addr");
        tmpMin=tmp.querySelector(".list-min");
        tmpMax=tmp.querySelector(".list-max");
        tmpSize=tmp.querySelector(".list-size");
        tmpSizeImg1=tmp.querySelector(".list-size-img1");
        tmpSizeImg2=tmp.querySelector(".list-size-img2");
        tmpSizeImg3=tmp.querySelector(".list-size-img3");
        tmpReview=tmp.querySelector(".list-review");
        tmpLink=tmp.querySelector(".detail-link");
       
        if(spotData.themeid==1)
        	theme_img = "/images/cafe.png";
        if(spotData.themeid==2)
        	theme_img = "/images/restaurant.png";
        if(spotData.themeid==3)
        	theme_img = "/images/play.png";
        if(spotData.themeid==4)
        	theme_img = "/images/house.png";
        
        
        if(spotData.dogsize=="소"){
        	 tmpSizeImg1.src="/images/small.png";
        	 tmpSizeImg2.classList.add("hidden");
        	 tmpSizeImg3.classList.add("hidden");
        }
        
        if(spotData.dogsize=="소중"){
        	tmpSizeImg1.src="/images/small.png";
        	tmpSizeImg2.src="/images/medium.png";
        	tmpSizeImg3.classList.add("hidden");
        }
        
        if(spotData.dogsize=="소중대"){
          	tmpSizeImg1.src="/images/small.png";
          	tmpSizeImg2.src="/images/medium.png";
          	tmpSizeImg3.src="/images/big.png";
         }
       
        
        tmpMainImg.src="/images/room6.png";
        tmpTitle.innerText=spotData.name;
        tmpTitle.href= "detail?id="+spotData.id;
        tmpTheme.src=theme_img;
        tmpAddr.innerText=spotData.addr;
        tmpMin.innerText=spotData.price_min;
        tmpMax.innerText=spotData.price_max;
        tmpSize.innerText=spotData.dogsize;
       
        tmpReview.innerText = "8";
        tmpLink="spot/detail";
        //tmpLink.innerText=spotData.name;
        
        SpotList.append(tmp);
    };
    
    inputSearch.onkeydown = function() {
        if (event.keyCode == 13) {
        	SpotList.innerHTML="";
        	sendSpotList();
        }
    };
    
    var sendSpotList = function(){
    	var request = new XMLHttpRequest(); 	
		request.open("POST", "../spot-filter", true); 
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
		var search = inputSearch.value;
		var local = inputLocal.value;
		var theme = inputTheme.value;
		var size = inputSize.value;
		var min_price = inputMinPrice.value;
		var max_price = inputMaxPrice.value;
		
		request.onload = function () {	
			
			var spotFilterList = JSON.parse(request.responseText);
			var testCnt = SpotList.querySelectorAll(".list-div").length;
	
			var max = spotFilterList.length;
			if(max>testCnt+10) max = testCnt+10;
		
		   
		    main.addEventListener("click",function(e){
		    	if(e.target.nodeName != "INPUT") return;
		    	
		    	if(e.target.value != "★"){
		    		e.target.value = "★";
		    		e.target.style.color = "#ffb617";
                    return;
                }
                else{
                	e.target.value = "☆";
                	e.target.style.color = "black";
                }
		    },true);
			

			for(var i=testCnt; i<max; i++){
    	        var tmp=document.importNode(tmpSpotList.content, true);
    	        bind_spotList(tmp,spotFilterList[i]);
    	        minsArr.push(spotFilterList[i].price_min);
    	        maxsArr.push(spotFilterList[i].price_max);
    	        addrsArr.push(spotFilterList[i].addr);
    	        themesArr.push(spotFilterList[i].themeid);
    	       
	    	}
			radio(minsArr,maxsArr,addrsArr,themesArr);
		}
				
		request.send("search="+search+"&local="+local+
				"&theme="+theme+"&size="+size+
				"&min-price="+min_price+"&max-price="+max_price);
		
		minsArr = [];
		maxsArr = [];
		addrsArr = [];
		themesArr = [];
    };

    sendSpotList();
    
    function getCurrentScrollPercentage(){
	    var scrolled_value = window.scrollY
	    var viewport_height = window.innerHeight;
		var doc_TotalHeight = document.body.clientHeight;
		  return (scrolled_value + viewport_height) / doc_TotalHeight * 100
	}
    document.addEventListener("scroll", function(){
    	var currentScrollPercentage = getCurrentScrollPercentage();
    	var testCnt = SpotList.querySelectorAll(".list-div").length;
    	if(currentScrollPercentage >= 98){
    		sendSpotList();
    	}
    });
	
    /*------------------------------*/
   
	function radio(minsArr,maxsArr,addrsArr,themesArr){
		//draw_map(1,mins,maxs,addrs);
		draw_map(1,minsArr,maxsArr,addrsArr,themesArr);
		tog.onclick = function(e){
			if(e.target.nodeName!="INPUT") return;
			//alert(e.target.id);
			if(e.target.id == "max-pri")
				draw_map(2,minsArr,maxsArr,addrsArr,themesArr);
				//draw_map(2,mins,maxs,addrs);
			
			else if(e.target.id == "min-pri")
				draw_map(1,minsArr,maxsArr,addrsArr,themesArr);
				//draw_map(1,mins,maxs,addrs);
		};
	}
	
	
	/* ----------------------------------- */

	/*var main = document.querySelector("#wid-front");
    var favoBtns = document.querySelectorAll(".favorite");
    var input = document.querySelector("#wid-front input");

    main.addEventListener("click",function(e){
    	if(e.target.nodeName != "INPUT") return;
    	
    	
    	for(var i=0; i<favoBtns.length;i++){
            if(e.target.id==favoBtns[i].id){
                if(favoBtns[i].value != "★"){
                    favoBtns[i].value = "★";
                    favoBtns[i].style.color = "#ffb617";
                    return;
                }
                else{
                    favoBtns[i].value = "☆";
                    favoBtns[i].style.color = "black";
                }
            }

        }
    },true);*/
	

});




function draw_map(flag,mins,maxs,addrs,themesArr){

    
    
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };  
   
    // 지도를 생성합니다    
    var map = new daum.maps.Map(mapContainer, mapOption); 
    
    var center_x = 0;
    var center_y = 0;
    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new daum.maps.services.Geocoder();
    // 주소로 좌표를 검색합니다
    var markersPos = [];
    var len = addrs.length;
    
    var cnt = 0;
    var level;
   
    addrs.forEach(function(addr) {
    	 
    	 //geocoder.addressSearch(addr,callback);
    	
        geocoder.addressSearch(addr, function(result, status) {
        	
            // 정상적으로 검색이 완료됐으면 
        	
            if (status === daum.maps.services.Status.OK) {
                var coords = new daum.maps.LatLng(result[0].y, result[0].x);
                
                markersPos.push(coords);

                // var marker = new daum.maps.Marker({
                //         map: map,
                //         position: pos[i]
                // });
                center_x += coords.getLng();
                center_y += coords.getLat();


                // // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new daum.maps.Marker({
                    map: map,
                    position: coords
                });
                
                
                var theme_img;
                if(themesArr[addr_cnt(addr,addrs)]==1)
                	theme_img = "/images/cafe.png";
                if(themesArr[addr_cnt(addr,addrs)]==2)
                	theme_img = "/images/restaurant.png";
                if(themesArr[addr_cnt(addr,addrs)]==3)
                	theme_img = "/images/play.png";
                if(themesArr[addr_cnt(addr,addrs)]==4)
                	theme_img = "/images/house.png";
                
                if(flag==1){
	                var content_min = '<div style="width:80px;text-align:center;padding:6px;font-size:13px; \
	                	;background:white;border-radius:15px;border:black solid 1px;margin-bottom:100px;">'
	                	+'<span>'+'<img src="'+theme_img+'" width="25px">'+'</span>'
	                	+'<span>&nbsp;'+mins[addr_cnt(addr,addrs)]+'</span>'
	                	'</div>';
	                
	                var customOverlay = new daum.maps.CustomOverlay({
	                    position: coords,
	                    content: content_min
	                });
                }
                
                else if(flag==2){
	                var content_max = '<div style="width:80px;text-align:center;padding:6px;font-size:13px; \
	                	;background:white;border-radius:15px;border:black solid 1px;margin-bottom:100px;">'
	                	+'<span>'+'<img src="'+theme_img+'" width="25px">'+'</span>'
	                	+'<span>&nbsp;'+maxs[addr_cnt(addr,addrs)]+'</span>'
	                	'</div>';
	                
	                var customOverlay = new daum.maps.CustomOverlay({
	                    position: coords,
	                    content: content_max
	                });
                }

                // 커스텀 오버레이를 지도에 표시합니다
                customOverlay.setMap(map);
                
               /* if(flag==1){
               
                // 인포윈도우로 장소에 대한 설명을 표시합니다
                 var infowindow = new daum.maps.InfoWindow({
                     content: '<div style="width:180px;text-align:center;padding:6px; 0;">'+mins[addr_cnt(addr,addrs)]+'</div>'
                     
                 });
                }
                
                else if(flag==2){
                	// 인포윈도우로 장소에 대한 설명을 표시합니다
                    var infowindow = new daum.maps.InfoWindow({
                        content: '<div style="width:180px;text-align:center;padding:6px 0;">'+maxs[addr_cnt(addr,addrs)]+'</div>'
                    });
                }
                
                infowindow.open(map, marker);*/
                cnt++;
                if(len == cnt){
                	center_x /= len;
                    center_y /= len;

                    console.log(center_x+","+center_y);
                    map.setCenter(new daum.maps.LatLng(center_y, center_x));
                    
                    //0,1:20m 2:30m 3:50m 4:100m 5:250m 6:500m 7:1000m 8:2000m 9:4000m 
                    //10:8000m 11:16000m 12:32000m 13:64000m 14:128000m
                    
                    //미터단위 계산
                    var dis = maxDistance(center_y, center_x, markersPos, len);
                    //var dis = calcDistance(markersPos[0].getLat(), markersPos[0].getLng(), markersPos[1].getLat(), markersPos[1].getLng());
                    console.log(dis);
                    if(dis<500) level=5;
                    else if(dis<1500) level=6;
                    else if(dis<3000) level=7;
                    else if(dis<6000) level=8;
                    else if(dis<12000) level=9;
                    else if(dis<24000) level=10;
                    else if(dis<60000) level=11;
                    else if(dis<100000) level=12;
                    else if(dis<200000) level=13;
                    else level=14;
                    
                    map.setLevel(level);


                }
                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                //map.setCenter(coords);
                
                // // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);
            } 
        
        }); 

    });
    
   
}
function addr_cnt(addr,addrs){
	for(var i=0; i<addrs.length;i++){
     	if(addr==addrs[i]){
     		cnt=i;
         	//console.log(addr);
         }
     }
	return cnt;
}



function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}

function calcDistance(lat1, lon1, lat2, lon2) {
    var EARTH_R, Rad, radLat1, radLat2, radDist;
    var distance, ret;
    
    EARTH_R = 6371000.0;
    Rad = Math.PI / 180;
    radLat1 = Rad * lat1;
    radLat2 = Rad * lat2;
    radDist = Rad * (lon1-lon2);
    
    distance = Math.sin(radLat1) * Math.sin(radLat2);
    distance = distance + Math.cos(radLat1) * Math.cos(radLat2)
    * Math.cos(radDist);
    ret = EARTH_R * Math.acos(distance);
    
    var rtn = Math.round(Math.round(ret) / 1000);
    
    if (rtn <= 0) {
    rtn = Math.round(ret) + "m";
    } else {
    rtn = rtn + "km";
    }
    
    //return rtn;
    return Math.round(ret);
}

function maxDistance(lat, lng, position, len){
	var max = 0;
	
	for(var i=0; i<len; i++){
		var tmp = calcDistance(lat, lng, position[i].getLat(), position[i].getLng());
		if(max<tmp)
			max=tmp;
	}
	return max;
}