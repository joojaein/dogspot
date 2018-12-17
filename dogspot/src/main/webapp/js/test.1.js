function draw_map(flag){


    var mins = ["1","2","3","4","5"];
  
    var maxs = ["10","20","30","40","50"];
  
    var addrs = ["서울시 동대문구 답십리로","서울시 광진구 군자로","서울시 마포구","인천시 계양구 계산새로","서울시 성동구 성수일로"];
    
    /*var info = [
    	{id:1, address:"서울시 동대문구 답십리로",minprice:"10000",maxprice:"15000"}
    ];*/


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
        geocoder.addressSearch(addr, function(result, status) {
        	
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
                //if(addrs[cnt])
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