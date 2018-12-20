<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>DogSpot</title>
        <link href="https://fonts.googleapis.com/css?family=Jua&amp;subset=korean" rel="stylesheet">
		<link href="../../css/spot.css" type="text/css" rel="stylesheet" />
        <link href="../../css/basicStyle.css" type="text/css" rel="stylesheet" />
        <link href="../../css/share.css" type="text/css" rel="stylesheet" />
		<script src="../../js/spotSize.js"></script>
		<script src="../../js/spotDetail.js"></script>
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
						<input type="button" value="저장 ☆" class="favorite abso" id="favo-detail" />
						<h1 class="hidden">장소 상세리스트</h1>
						<div class="list" id="img-arg">
							<div class="width-half rela" id="img1">
								<img src="../../images/room1.png" class="img-pos">
							</div>
	
							<div class="width-quarter">
								<div class="height-half" id="img2">
									<img src="../../images/room3.png" class="img-pos">
								</div>
								<div class="height-half" id="img3">
									<img src="../../images/room4.png" class="img-pos">
								</div>
							</div>
	
							<div class="width-quarter">
								<div class="height-half" id="img4">
									<img src="../../images/room5.png" class="img-pos">
								</div>
								<div class="height-half" id="img5">
									<img src="../../images/room6.png" class="img-pos">
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
							<div class="detail-id hidden">${spot.id}</div>
							<div class="detail-title">${spot.name}</div>

							<div class ="detail-sub">
								<span>최근 업데이트: </span>
								<span class="update-date">${spot.regDate}</span>
								<input type="button" name="modify" value="수정요청" class="empty-btn" />
							</div>
						</div>
						<div class="left content">
							<span class="content-bold">주소&nbsp;</span> 
							<span class="content detail-addr">${spot.addr}</span>
						</div>
						<div class="left content">
							<span class="content-bold">연락처&nbsp;</span> 
							<span class="content detail-phone">${spot.phone}</span>
						</div>

						<div class="left content">
							<span class="content-bold">영업시간&nbsp;</span> 
							<span class="content detail-time">${spot.time}</span>
							<span class="content detail-time-etc">${spot.time_etc}</span>
						</div>
						
						<div class="left content">
							<span class="content-bold">장소&nbsp;</span> <span class="content">
							
						
						<c:if test="${1==spot.themeid}">
	                      	<img src="../../images/cafe.png" class="detail-icon detail-theme">&nbsp;카페</span>
	                     </c:if>
	                     <c:if test="${2==spot.themeid}">
	                      	<img src="../../images/restaurant.png" class="detail-icon detail-theme">&nbsp;식당</span>
	                     </c:if>
	                     <c:if test="${3==spot.themeid}">
	                      	<img src="../../images/play.png" class="detail-icon detail-theme">&nbsp;놀이터</span>
	                     </c:if>
	                     <c:if test="${4==spot.themeid}">
	                      	<img src="../../images/house.png" class="detail-icon detail-theme">&nbsp;숙박</span>
	                     </c:if>
                      
						</div>
						
						<div class="left content">
							<span class="content-bold">장소분류&nbsp;</span> 
							<span class="content detail-theme_etc">${spot.theme_etc}</span>
						</div>

						<div class="left content">
							<span class="content-bold">입장가능&nbsp;</span> <span class="content">
							
								<c:if test="${'소'==spot.dogsize}">
			                      	<img src="../../images/smaill.png" class="detail-icon detail-dogsize">&nbsp;소형견&nbsp;</span>
			                     </c:if>
								
								<c:if test="${'소중'==spot.dogsize}">
			                      	<img src="../../images/small.png" class="detail-icon detail-dogsize">&nbsp;</span>
			                      	<img src="../../images/medium.png" class="detail-icon detail-dogsize">&nbsp;소형견, 중형견&nbsp;</span>
			                     </c:if>
								
								
								<c:if test="${'소중대'==spot.dogsize}">
			                      	<img src="../../images/small.png" class="detail-icon detail-dogsize">&nbsp;</span>
			                      	<img src="../../images/medium.png" class="detail-icon detail-dogsize">&nbsp;</span>
			                      	<img src="../../images/big.png" class="detail-icon detail-dogsize">&nbsp;소형견, 중형견, 대형견&nbsp;</span>
			                     </c:if>
							
								<span class="content detail-dogsize-etc">&nbsp;${spot.dogsize_etc}&nbsp;</span>
								<span class="content detail-dogweight-etc">&nbsp;${spot.dogweight_etc}</span>
						</div>

						<div class="left content">
							<span class="content-bold">가격&nbsp;</span> 
							<span class="content detail-minprice">${spot.price_min}</span>
							<span class="content">원&nbsp;~</span>
							<span class="content detail-maxprice">${spot.price_max}</span>
							<span class="content">원&nbsp;</span>
							<span class="content detail-price-etc">${spot.price_etc}</span>
						</div>

						<div class="left content">
							<span class="content-bold">URL&nbsp;</span> <span class="content"><a
								href="${spot.url}" class="detail-url">${spot.url}</a></span>
						</div>
						
						<div class="left content">
							<span class="content-bold">기타&nbsp;</span> 
							<span class="content detail-etc">${spot.etc}</span>
						</div>

						<div class="left">

							<span class="content-bold">지도</span>
							<div id="map" class="bottom" style="width: 100%; height: 600px;"></div>
						</div>
						
						
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

	<section class="modal-back">
		<h1 class="hidden">모달 백</h1>
	</section>
	<dialog id="img-modal" class="modal-img">
		<img class="modal-x" src="../../images/modal-x.png">
		<form method="dialog">
			<section class="modal-imgs">
				<h1 class="hidden">이미지리스트 모달</h1>
				<div><img src="../../images/room1.png" class="bigimg" id="modal-img1"></div>
				<div id="smallimg list">
					<img src="../../images/room2.png" class="smallimg" id="modal-img2">
					<img src="../../images/room3.png" class="smallimg" id="modal-img3">
					<img src="../../images/room4.png" class="smallimg" id="modal-img4">
					<img src="../../images/room5.png" class="smallimg" id="modal-img5">
					<img src="../../images/room6.png" class="smallimg" id="modal-img6">
				</div>
			</section>

		</form>
	</dialog>
	
	<dialog id="spot-modify-modal" class="modal">
		<form method="dialog">
			<img class="modal-x" src="../../images/modal-x.png">
			<section>
				<h1 class="hidden">수정요청 모달</h1>
				<div id="modal-title">수정 요청</div>
				<input type="text" id="modal-small-box" placeholder="제목" autocomplete="off" />
				<textarea placeholder="내용" id="modal-big-box" autocomplete="off" style="resize: none"></textarea>
				<input type="submit" id="send-btn" class="full-btn" value="보내기" />
			</section>

		</form>
	</dialog>

</body>
</html>