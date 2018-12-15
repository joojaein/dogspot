window.addEventListener("load", function(){

    var main = document.querySelector("#wid-front");
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

    },true);
    
    
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
	
	 /*------------------------------*/
    
        
    

});




window.onscroll = function(e) {
    //var main = document.querySelector("#wid-front");
    //var main = document.querySelector("#spot-main");
    var list = document.querySelector("#list-add");
    var body = document.querySelector("body");

    //console.log("innerHeight: "+window.innerHeight);
    //console.log("scrollY: "+window.scrollY);
    //console.log("document: "+document.body.offsetHeight);
    //console.log("document-scrollY: "+(document.body.offsetHeight-window.scrollY));

    //if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    if((document.body.offsetHeight-window.scrollY)<=window.innerHeight){
        // for (var i = 0; i < 20; i++) {
        //     var item = document.createElement('li');
        //     item.innerText = 'Item ' + nextItem++;
        //     listElm.appendChild(item);
        //   }
        //for (var i = 0; i < 10; i++) {
        //body.appendChild(list);
        //}
        //alert("you're at the bottom of the page");
    }
};
function draw_map(flag){


    var min1 = document.querySelector("#min1");
    var min2 = document.querySelector("#min2");
    var min3 = document.querySelector("#min3");
    var min4 = document.querySelector("#min4");
    var min5 = document.querySelector("#min5");
    var mins = [min1,min2,min3,min4,min5];
    
    var max1 = document.querySelector("#max1");
    var max2 = document.querySelector("#max2");
    var max3 = document.querySelector("#max3");
    var max4 = document.querySelector("#max4");
    var max5 = document.querySelector("#max5");
    var maxs = [max1,max2,max3,max4,max5];
    
    var addr1 = document.querySelector("#addr1");
    var addr2 = document.querySelector("#addr2");
    var addr3 = document.querySelector("#addr3");
    var addr4 = document.querySelector("#addr4");
    var addr5 = document.querySelector("#addr5");
    var addrs = [addr1,addr2,addr3,addr4,addr5];
    //var min1 = $("#min1").text();
    //var addr1 = $("#addr1").text();

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
    addrs.forEach(function(addr, index) {
        geocoder.addressSearch(addr.innerText, function(result, status) {
        
            // 정상적으로 검색이 완료됐으면 
            if (status === daum.maps.services.Status.OK) {
            
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
                
                if(flag==1){
                	
                
                // 인포윈도우로 장소에 대한 설명을 표시합니다
                 var infowindow = new daum.maps.InfoWindow({
                     content: '<div style="width:180px;text-align:center;padding:6px 0;">'+mins[cnt].innerText+'</div>'
                 });
                }
                else if(flag==2){
                	// 인포윈도우로 장소에 대한 설명을 표시합니다
                    var infowindow = new daum.maps.InfoWindow({
                        content: '<div style="width:180px;text-align:center;padding:6px 0;">'+maxs[cnt].innerText+'</div>'
                    });
                }
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

