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
                    favoBtns[i].style.color = "yellow";
                    return;
                }
                else{
                    favoBtns[i].value = "☆";
                    favoBtns[i].style.color = "black";
                }
            }

        }

    },true);

    var min1 = document.querySelector("#min1");
    var min2 = document.querySelector("#min2");
    var min3 = document.querySelector("#min3");
    var min4 = document.querySelector("#min4");
    var min5 = document.querySelector("#min5");
    var mins = [min1,min2,min3,min4,min5];
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

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new daum.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다

    addrs.forEach(function(addr, index) {
    geocoder.addressSearch(addr.innerText, function(result, status) {

        // 정상적으로 검색이 완료됐으면 
        if (status === daum.maps.services.Status.OK) {

            var coords = new daum.maps.LatLng(result[0].y, result[0].x);
            //var pos = new Array();
            //pos[i] = new daum.maps.LatLng(result[0].y, result[0].x);

            //console.log(i+":"+pos[i]);
            // var positions = [
            //  s   {
            //         latlng: new daum.maps.LatLng(33.450705, 126.570677)
            //     },
            //     {
            //         latlng: new daum.maps.LatLng(33.450936, 126.569477)
            //     },
            //     {
            //         latlng: new daum.maps.LatLng(33.450879, 126.569940)
            //     },
            //     {
            //         latlng: new daum.maps.LatLng(33.451393, 126.570738)
            //     }
            // ];


            // var marker = new daum.maps.Marker({
            //         map: map,
            //         position: pos[i]
            // });


            // // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new daum.maps.Marker({
                map: map,
                position: coords
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            // var infowindow = new daum.maps.InfoWindow({
            //     content: '<div style="width:150px;text-align:center;padding:6px 0;">'+mins[i].innerText+'</div>'
            // });
            //infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);

         
            // // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);
        } 
    
    }); 

    });
    
    // var markerPosition  = new daum.maps.LatLng(33.450701, 126.570667); 

    // 마커를 생성합니다
    // var marker = new daum.maps.Marker({
    //     position: markerPosition
    // });

    // // 마커가 지도 위에 표시되도록 설정합니다
    // marker.setMap(map);

    

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

