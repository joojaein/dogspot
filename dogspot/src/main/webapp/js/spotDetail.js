window.addEventListener("load", function(){
    var editDialog = document.querySelector("#spot-modify-modal");
    var imgDialog = document.querySelector("#img-modal");
    var dialogArr = [editDialog,imgDialog];

    //var main = document.querySelector("#detail-large-main");
    var main = document.querySelector("#img-arg");


    var modalImglist = document.querySelector(".modal-imgs");
    var modalImgs = document.querySelectorAll(".modal-imgs img");

    var imgs = document.querySelectorAll("#img-arg img");


    var modifyBtn = document.querySelector("#detail-sub input");
    var sendBtn = document.querySelector("#send-btn");
    var modalBack = document.querySelector(".modal-back");

    for(var i=0; i<modalImgs.length; i++){
        if(i!=0)
            modalImgs[i].src = imgs[i-1].src;
        else
            modalImgs[i].src = imgs[i].src;
    }

    modalImglist.addEventListener("click",function(e){
		if(e.target.nodeName != "IMG") return;
        modalImgs[0].src = e.target.src;

    },true);
    
    
    main.addEventListener("click", function (evt) {
        if (evt.target.nodeName != "IMG") return;
        console.log("evt:"+evt.target.src);
        for(var i=0; i<imgs.length;i++){
            //console.log(imgs[i].src);
            //console.log("evt:"+evt.target.src);
            if(imgs[i].src==evt.target.src){
                imgDialog.showModal();
                modalBack.style.display = "unset";
                modalImgs[0].src = evt.target.src;
            }
        }
    });


    modifyBtn.onclick = function(evt){
        editDialog.showModal();
        modalBack.style.display = "unset";
    };

    sendBtn.onclick = function(evt){
        modalBack.style.display = "none";
    };

    var closeModal = function(){
        for(var i=0; i<dialogArr.length; i++){
            if(dialogArr[i].open){
                modalBack.style.display = "none";
                dialogArr[i].close();
                return;
            }
        }
    };

    imgDialog.addEventListener("click", function(evt){
        if(evt.target.nodeName!="IMG") return;
        if(evt.target.className!="modal-x") return;  
        closeModal();
    },true);

    editDialog.addEventListener("click", function(evt){
        if(evt.target.nodeName!="IMG") return;
        if(evt.target.className!="modal-x") return;     
        closeModal();
    }, true);

    var favoBtn = document.querySelector("#favo-detail");

    // favoBtn.addEventListener("click", function(evt){
    //     alert(evt.target.nodeName);
    // },true);

    favoBtn.onclick = function(evt){
        
        if(evt.target.value != "★"){
            evt.target.value = "★";
            favoBtn.style.color = "#ffb617";
            favoBtn.style.fontSize = "24px";
            return;
        }
        evt.target.value = "저장 ☆";
        favoBtn.style.color = "black";
        favoBtn.style.fontSize = "20px";
    };

});

window.addEventListener("load", function(){
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
    geocoder.addressSearch('인천시 계양구 계산새로', function(result, status) {

        // 정상적으로 검색이 완료됐으면 
        if (status === daum.maps.services.Status.OK) {

            var coords = new daum.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new daum.maps.Marker({
                map: map,
                position: coords
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            var infowindow = new daum.maps.InfoWindow({
                content: '<div style="width:150px;text-align:center;padding:6px 0;">혜정이네 집</div>'
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
        } 
    });    
 
});


