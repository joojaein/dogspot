window.addEventListener("load", function(){

    /*var main = document.querySelector("#wid-front");
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
                    favoBtns[i].style.color = "#ffb617";
                    //favoBtns[i].style.backgroundColor = "black";
                    return;
                }
                else{
                    favoBtns[i].value = "☆";
                    favoBtns[i].style.color = "black";
                    //favoBtns[i].style.backgroundColor = "white";
                }
            }

        }

    },true);*/
	
    /*------------------------------*/
    
	var tog = document.querySelector("#tog");
	var flag=1;

	draw_map(1);
	tog.onclick = function(e){
		if(e.target.nodeName!="INPUT") return;
		//alert(e.target.id);
		if(e.target.id == "max-pri")
			draw_map(2);
		
		else if(e.target.id == "min-pri")
			draw_map(1);
		
	};
	
	
	 /*-------------- spot-list js 처리 및 무한스크롤  ----------------*/
	var SpotList= document.querySelector(".list-add");
	var tmpSpotList= document.querySelector(".spot-list-template");
	
	
	var bind_spotList = function(tmp,notice){
		tmpMainImg=tmp.querySelector(".img-list");
        tmpTitle=tmp.querySelector(".list-title");
        tmpTheme=tmp.querySelector(".list-theme");
        tmpAddr=tmp.querySelector(".list-addr");
        tmpMin=tmp.querySelector(".list-min");
        tmpMax=tmp.querySelector(".list-max");
        tmpSize=tmp.querySelector(".list-size");
        tmpSizeImg=tmp.querySelector(".list-size-img");
        tmpReview=tmp.querySelector(".list-review");
        
        tmpMainImg.src="/images/room6.png";
        tmpTitle.innerText="제주도지롱~~~~";
        tmpTheme.src="/images/cafe.png";
        tmpAddr.innerText="제주도 서귀포시";
        tmpMin.innerText="67000";
        tmpMax.innerText="78000";
        tmpSize.innerText="대형견";
        tmpSizeImg.src="/images/big.png";
        tmpReview.innerText = "8";
        
        //input.dataset.id = cnt++;
        
        SpotList.append(tmp);
    };

	for(var i=0;i<10; i++){
        tmp=document.importNode(tmpSpotList.content, true);
        bind_spotList(tmp);
    }
	
	function getCurrentScrollPercentage(){
	    var scrolled_value = window.scrollY
	    var viewport_height = window.innerHeight;
		var doc_TotalHeight = document.body.clientHeight;
		  return (scrolled_value + viewport_height) / doc_TotalHeight * 100
	}
    
    document.addEventListener("scroll", function(){
    	var currentScrollPercentage = getCurrentScrollPercentage();
    	var testCnt = SpotList.querySelectorAll(".list-div").length;
    	console.log(currentScrollPercentage  + " / "+ testCnt);

    	if(currentScrollPercentage >= 100){
    		  for(var i=0;i<10; i++){
				   tmp=document.importNode(tmpSpotList.content, true);
			       bind_spotList(tmp);
    		   }
    	}
    });
	
	
	/* ----------------------------------- */

	var main = document.querySelector("#wid-front");
    var favoBtns = document.querySelectorAll(".favorite");
    var input = document.querySelector("#wid-front input");
    //alert(input.value);
    //alert(input.dataset.id);
	
    for(var i=0; i<favoBtns.length; i++){
    	//input.dataset.id = cnt++;
    }
    
    main.addEventListener("click",function(e){
    	if(e.target.nodeName != "INPUT") return;
    	
    	
    	for(var i=0; i<favoBtns.length;i++){
            if(e.target.id==favoBtns[i].id){
                if(favoBtns[i].value != "★"){
                    favoBtns[i].value = "★";
                    favoBtns[i].style.color = "#ffb617";
                    //favoBtns[i].style.backgroundColor = "black";
                    return;
                }
                else{
                    favoBtns[i].value = "☆";
                    favoBtns[i].style.color = "black";
                    //favoBtns[i].style.backgroundColor = "white";
                }
            }

        }
    	
    	
    	/*if(e.target.classList.contains("favorite")){
    		for(var i=0; favoBtns.length; i++){
    	    	alert(favoBtns[i].nodeName);
    	    }
    		var id = e.target.dataset.id;
    		var notice = null;
    		alert(id);
    	}*/
    	
    },true);
    
    
	

});




function draw_map(flag){


    var mins = ["1","2","3","4","5"];
  
    var maxs = ["10","20","30","40","50"];
  
    var addrs = ["서울시 동대문구 답십리로","서울시 광진구 군자로","서울시 마포구","인천시 계양구 계산새로","서울시 성동구 성수일로"];
  
    var info = [
    	{id:1, address:"서울시 동대문구 답십리로",minprice:"1",maxprice:"10"},
    	{id:2, address:"인천시 계양구 계산새로",minprice:"2",maxprice:"20"},
    	{id:3, address:"서울시 마포구",minprice:"3",maxprice:"30"}
    ];
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
    
    var callback = function(result, status) {
    	
        // 정상적으로 검색이 완료됐으면 
    	//console.log("00."+cnt+","+addr);
        if (status === daum.maps.services.Status.OK) {
        	//console.log("01."+cnt+","+addr);
            var coords = new daum.maps.LatLng(result[0].y, result[0].x);

            markersPos.push(coords);
            //alert(markersPos.length);

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
            //if(addrs[cnt])
            
            //console.log("1."+cnt+","+addr);
            if(flag==1){
            	
            
            // 인포윈도우로 장소에 대한 설명을 표시합니다
             var infowindow = new daum.maps.InfoWindow({
                 content: '<div style="width:180px;text-align:center;padding:6px 0;">'+mins[cnt]+'</div>'
             });
            }
            else if(flag==2){
            	// 인포윈도우로 장소에 대한 설명을 표시합니다
                var infowindow = new daum.maps.InfoWindow({
                    content: '<div style="width:180px;text-align:center;padding:6px 0;">'+maxs[cnt]+'</div>'
                });
            }
            //console.log("2."+cnt+","+addr);
            
            infowindow.open(map, marker);
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
        
    };
    
   

    addrs.forEach(function(addr) {
    	 
    	 //geocoder.addressSearch(addr,callback);
    	 
    	//console.log(addr);
    		
    	
        geocoder.addressSearch(addr, function(result, status) {
        	
            // 정상적으로 검색이 완료됐으면 
        	//console.log("00."+cnt+","+addr);
        	
            if (status === daum.maps.services.Status.OK) {
            	//console.log("01."+cnt+","+addr);
                var coords = new daum.maps.LatLng(result[0].y, result[0].x);
                for(var i=0; i<addrs.length;i++){
                 	if(addr==addrs[i]){
                 		cnt=i;
                     	console.log(addr);
                     }
                 }
                markersPos.push(coords);
                //alert(markersPos.length);

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
                //if(addrs[cnt])
                
                //console.log("1."+cnt+","+addr);
             	
                //console.log("dsfdsfsdfsdf: "+addr+"dfdsf:"+addrs[cnt]);
               
                
                if(flag==1){
               
                // 인포윈도우로 장소에 대한 설명을 표시합니다
                 var infowindow = new daum.maps.InfoWindow({
                     content: '<div style="width:180px;text-align:center;padding:6px 0;">'+mins[cnt]+'</div>'
                 });
                }
                
                else if(flag==2){
                	// 인포윈도우로 장소에 대한 설명을 표시합니다
                    var infowindow = new daum.maps.InfoWindow({
                        content: '<div style="width:180px;text-align:center;padding:6px 0;">'+maxs[cnt]+'</div>'
                    });
                }
                
                
                //console.log("2."+cnt+","+addr);
                
                infowindow.open(map, marker);
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

