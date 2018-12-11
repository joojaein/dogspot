<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>DogSpot</title>
        <link href="https://fonts.googleapis.com/css?family=Jua&amp;subset=korean" rel="stylesheet">
        <link href="../../css/spot.css" type="text/css" rel="stylesheet" />
        <link href="../../css/basicStyle.css" type="text/css" rel="stylesheet" />
        <link href="../../css/share.css" type="text/css" rel="stylesheet" />
        <script src="../../js/spot.js"></script>
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=65ee4b1a2ddf7bd055b10893e94709bc&libraries=services"></script>
        <meta charset="utf-8"/>
</head>
<body>
<jsp:include page="../inc/header.jsp" />
	<section id="body">

		<div class="center">

			<h1 class="hidden">바디</h1>
			<section class="list">

				<main id="detail-large-main">
				<h1 class="hidden">메인</h1>
				<section>
					<h1 class="hidden">장소 상세리스트</h1>
					<div class="list" id="img-arg">
						<div class="width-half rela">
							<img src="../../images/room1.png" id="img-pos"
								class="width-full height-full abso">
						</div>

						<div class="width-quarter">
							<div class="height-half">
								<img src="../../images/room1.png" id="img-pos"
									class="width-full height-full">
							</div>
							<div class="height-half">
								<img src="../../images/room1.png" id="img-pos"
									class="width-full height-full">
							</div>
						</div>

						<div class="width-quarter">
							<div class="height-half">
								<img src="../../images/room1.png" id="img-pos"
									class="width-full height-full">
							</div>
							<div class="height-half">
								<img src="../../images/room1.png" id="img-pos"
									class="width-full height-full">
							</div>
						</div>

					</div>


					<!-- <div class="list" id="img-arg">
                            <div class="width-half">
                                <img src="../images/room1.png" class="width-full height-full" >
                            </div>

                            <div class="width-quarter">
                                <div class="height-half">
                                    <img src="../images/room1.png" class="width-full height-full" >
                                </div>
                                <div class="height-half">
                                    <img src="../images/room1.png" class="width-full height-full" >
                                </div>
                            </div>

                            <div class="width-quarter">
                                <div class="height-half">
                                   <img src="../images/room2.png" class="width-full height-full" >
                                </div>
                                <div class="height-half">
                                   <img src="../images/room2.png" class="width-full height-full" >
                                </div>
                            </div>

                        </div>  -->

					<section class="spot-detail height-full" id="spot-info">
						<div class="list">
							<div id="detail-title">혜정이네 집</div>

							<div id="detail-sub">
								<span>최근 업데이트: 2018.09.21</span> <input type="button"
									name="modify" value="수정요청" class="empty-btn" />
							</div>
						</div>
						<div class="left content">
							<span class="content-bold">주소&nbsp;</span> <span class="content">인천시
								계양구 계산새로</span>
						</div>
						<div class="left content">
							<span class="content-bold">연락처&nbsp;</span> <span class="content">010-XXXX-XXXX</span>
						</div>

						<div class="left content">
							<span class="content-bold">영업시간&nbsp;</span> <span
								class="content">00:00~23:59</span>
						</div>

						<div class="left content">
							<span class="content-bold">장소&nbsp;</span> <span class="content"><img
								src="../../images/cafe.png" class="detail-icon">&nbsp;카페</span>
						</div>

						<div class="left content">
							<span class="content-bold">입장가능&nbsp;</span> <span
								class="content"><img src="../../images/small.png"
								class="detail-icon">&nbsp;소형견</span>
						</div>

						<div class="left content">
							<span class="content-bold">가격&nbsp;</span> <span class="content">10,000원~20,000원</span>
						</div>

						<div class="left content">
							<span class="content-bold">URL&nbsp;</span> <span class="content"><a
								href="https://www.hyejeong.com">https://www.hyejeong.com</a></span>
						</div>

						<div class="left">

							<span class="content-bold">지도</span>
							<div id="map" class="bottom" style="width: 100%; height: 600px;"></div>
						</div>
						<!-- <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=65ee4b1a2ddf7bd055b10893e94709bc"></script>
                            <script>
                                var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
                                    mapOption = { 
                                        center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                                        level: 3 // 지도의 확대 레벨
                                    };
                            
                                // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
                                var map = new daum.maps.Map(mapContainer, mapOption); 
                            </script> -->

						<div class="left">
							<span class="content-bold">작성된 리뷰 13개</span>

						</div>
						<hr />

						<div class="left list rela">
							<div>
								<img src="../../images/profile.png" id="profile">
							</div>
							<div>
								<span class="content-bold block">OㅡO24u</span> <span
									class="block">2018.09.12</span>
							</div>
							<div class="abso" id="comment-icon">
								<img src="../../images/likesImg.png" class="icon"> <span>10&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span><img src="../../images/commentsImg.png" class="icon"></span>
								<span>10&nbsp;&nbsp;&nbsp;&nbsp;</span> <span><img
									src="../../images/hitImg.jpg" class="icon"></span> <span>10&nbsp;&nbsp;&nbsp;&nbsp;</span>
							</div>
						</div>
						<div class="left">
							<span class="review-title">휴양림 저렴하게 잘 다녀왔네요</span>
						</div>

						<div class="left">
							<span>다른 펜션들에 비해 저렴한 것 같기도 하고.. 생각보다 관리도 잘 되어 있구요~ 아가들하고
								자연에서 힐링 잘 하고 왔습니다~ </span>
						</div>
						<div class="left">
							<span class="hashtag">#힐링</span>
						</div>

						<hr size="1px" />


						<div class="left list rela">
							<div>
								<img src="../../images/profile.png" id="profile">
							</div>
							<div>
								<span class="content-bold block">OㅡO24u</span> <span
									class="block">2018.09.12</span>
							</div>
							<div class="abso" id="comment-icon">
								<img src="../../images/likesImg.png" class="icon"> <span>10&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span><img src="../../images/commentsImg.png" class="icon"></span>
								<span>10&nbsp;&nbsp;&nbsp;&nbsp;</span> <span><img
									src="../../images/hitImg.jpg" class="icon"></span> <span>10&nbsp;&nbsp;&nbsp;&nbsp;</span>
							</div>
						</div>
						<div class="left">
							<span class="review-title">휴양림 저렴하게 잘 다녀왔네요</span>
						</div>

						<div class="left">
							<span>다른 펜션들에 비해 저렴한 것 같기도 하고.. 생각보다 관리도 잘 되어 있구요~ 아가들하고
								자연에서 힐링 잘 하고 왔습니다~ </span>
						</div>
						<div class="left">
							<span class="hashtag">#힐링</span>
						</div>

						<hr size="1px" />


					</section>

				</section>

				</main>
			</section>


		</div>
	</section>
	<jsp:include page="../inc/footer.jsp" />

</body>
</html>