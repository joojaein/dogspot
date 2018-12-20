<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>DogSpot</title>
        <link href="https://fonts.googleapis.com/css?family=Jua&amp;subset=korean" rel="stylesheet">
        <link href="../../css/spot.css" type="text/css" rel="stylesheet" />
        <link href="../../css/basicStyle.css" type="text/css" rel="stylesheet" />
        <link href="../../css/share.css" type="text/css" rel="stylesheet" />
		<!-- <script src="../../js/spot.js"></script> -->
		<script src="../../js/spotList.js"></script>
		<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=65ee4b1a2ddf7bd055b10893e94709bc&libraries=services"></script>
		<!-- <script type="text/javascript" src="http://code.jquery.com/jquery-2.1.0.min.js"></script> -->
        <meta charset="utf-8"/>
        
</head>
<body>
<jsp:include page="../inc/header.jsp" />
	<section id="body">
		<div class="center">
			<h1 class="hidden">바디</h1>

			<section class="list">

				<main id="search-list" class="list-large-main">
				<h1 class="hidden">메인</h1>
				<form name="filter-box"> <!-- method="post" -->
				<div class="left top">
					<!--  <input type="text" name="search" class="big-data-search" id="enter" onkeydown="JavaScript:Enter_Check();" />-->
					<input type="text" name="search" class="big-data-search" id="enter" autocomplete="off"
					 onkeydown="javascript:if(event.keyCode==13) form.submit();" />

				</div>

				<div class="left top bottom" id="filter">
					<select name="local" class="select">
						<option value="">지역</option>
						<option value="서울">서울</option>
						<option value="대전">대전</option>
						<option value="경기">경기</option>
						<option value="부산">부산</option>
						<option value="강원">강원</option>
						<option value="제주">제주</option>
						<option value="인천">인천</option>
						<option value="전라">전라</option>
						<option value="경상">경상</option>
						<option value="충청">충청</option>
					</select> <select name="theme" class="select">
						<option value="">장소</option>
						<option value="숙박">숙박</option>
						<option value="카페">카페</option>
						<option value="식당">식당</option>
						<option value="놀이터">놀이터</option>
					</select> <select name="size" class="select">
						<option value="">견크기</option>
						<option value="소형견">소형견</option>
						<option value="중형견">중형견</option>
						<option value="대형견">대형견</option>
					</select> <input type="text" name="min-price" placeholder="최소가격" /> <span
						class="content">~</span> <input type="text" name="max-price"
						placeholder="최대가격" />
				</div>
				</form>


				<div class="list">
					<!-- <div class="content-bold">${fn:length(list)} 개의 검색결과</div> -->
					<div class="content-bold list-length"></div>
					<fieldset class="right" id="tog">
						<input type="radio" id="min-pri" name="price" value="min-price"
							checked> <label>최소가격&nbsp;&nbsp;&nbsp;</label> <input
							type="radio" id="max-pri" name="price" value="max-price">
						<label>최대가격</label>
					</fieldset>
					<!-- <span id="tog">
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </span>  -->

				</div>
				<div class="list" id="spot-main">
					<div id="wid-front">
						<section class="top left list-add">
						 <template class="spot-list-template"> 
						
							 <div class="list top list-div">
									<div class="rela">
										<img src="../../images/room1.png" class="img-list">
										<div class="abso top favo">
											<input type="button" value="☆" class="favorite" />
										</div>
		
									</div>
									
									<div class="box">
									
										<div class="list-font-big"><a href="detail" class="list-font-big list-title detail-link">제목</a></div>
									
										<div>
											<div class="list-font-small">
												<span><img src="../../images/house.png" class="icon list-theme">
												</span><span class="list-addr">주소</span>
											</div>
										</div>
										<div class="list-font-small">
											<span class="list-min">최소가격</span>
											<span>~</span>
											<span class="list-max">최대가격</span>
										</div>
										<div class="list-font-small">
											<span><img src="../../images/small.png" class="detail-icon list-size-img1"></span>
											<span><img src="../../images/small.png" class="detail-icon list-size-img2"></span>
											<span><img src="../../images/small.png" class="detail-icon list-size-img3"></span>
											<span class="dog-size list-size">&nbsp;사이즈</span>
										</div>

										<div class="right per">
											<img src="../../images/reviewIcon.jpg" class="icon">
											<span class="list-review">&nbsp;리뷰갯수 </span>
										</div>
										
									</div>
									
								</div>
							
						
						<!--<c:forEach var="n" items="${list}">
							<div class="list top list-div">
									<div class="rela">
										<img src="../../images/room1.png" class="img-list">
										<div class="abso top favo">
											<input type="button" value="☆" class="favorite" data-id="1" />
										</div>
		
									</div>
									
									<div class="box">
									
										<div class="list-font-big list-title">${n.name}</div>
									
										<div>
											<div class="list-font-small">
												<span><img src="../../images/house.png" class="icon list-theme">
												</span><span class="list-addr">${n.addr}</span>
											</div>
										</div>
										<div class="list-font-small">
											<span class="list-min">${n.price_min}</span>
											<span>~</span>
											<span class="list-max">${n.price_max}</span>
										</div>
										<div class="list-font-small">
											<span><img src="../../images/small.png" class="detail-icon list-size-img"></span>
											<span><img src="../../images/medium.png" class="detail-icon list-size-img"></span>
											<span><img src="../../images/big.png" class="detail-icon list-size-img"></span>

											<span class="dog-size list-size">&nbsp;${n.dogsize}</span>
										</div>

										<div class="right per">
											<img src="../../images/reviewIcon.jpg" class="icon">
											<span class="list-review">&nbsp;jjj</span>
										</div>
										
									</div>
									
								</div>
							</c:forEach>-->
							</template>
							<!-- 
							
								<div class="list top">
									<div class="rela">
										<img src="../../images/room1.png" class="img-list">
										<div class="abso top favo">
											<input type="button" value="☆" class="favorite" id="favo1" />
										</div>
		
									</div>
									<div class="box">
										<div class="list-font-big" id="list-title">혜정이네 집입니다^^</div>
										<div>
											<div class="list-font-small">
												<span><img src="../../images/house.png" class="icon" id="list-theme">
												</span><span id="addr1">서울시 광진구 능동로</span>
											</div>
										</div>
										<div class="list-font-small">
											<span id="min1">10,000원</span>
											<span>~</span>
											<span id="max1">20,000원</span>
										</div>
										<div class="list-font-small">
											<span><img src="../../images/small.png" class="detail-icon" id="list-size-img"></span>
											<span class="dog-size" id="list-size">&nbsp;소형견</span>
										</div>

										<div class="right per">
											<img src="../../images/reviewIcon.jpg" class="icon">
											<span id="list-review">&nbsp;10</span>
										</div>
									</div>
								</div>
							
								<div class="list top">
									<div class="rela">
										<img src="../../images/room1.png" class="img-list">
										<div class="abso top favo">
											<input type="button" value="☆" class="favorite" id="favo2" />
										</div>
		
									</div>
									<div class="box">
										<div class="list-font-big">인경이네 집</div>
										<div>
											<div class="list-font-small">
												<span><img src="../../images/house.png" class="icon">
												</span><span id="addr2">서울시 동대문구 답십리로</span>
											</div>
										</div>
										<div class="list-font-small">
											<span id="min2">20,000원</span>
											<span>~</span>
											<span id="max2">30,000원</span>
										</div>
										<div class="list-font-small"><img src="" class="detail-icon">&nbsp;</div>

										<div class="right per">
											<img src="../../images/per.png" class="icon">
											<span>&nbsp;10</span>
										</div>
									</div>
		
								</div>
								<div class="list top">
									<div class="rela">
										<img src="../../images/room1.png" class="img-list">
										<div class="abso top favo">
											<input type="button" value="☆" class="favorite" id="favo3" />
										</div>
		
									</div>
									<div class="box">
										<div class="list-font-big">재인이네 집입니다~~~</div>
										<div>
											<div class="list-font-small">
												<span><img src="../../images/house.png" class="icon">
												</span><span id="addr3">서울시 광진구 군자로</span>
											</div>
										</div>
										<div class="list-font-small">
											<span id="min3">15,000원</span>
											<span>~</span>
											<span id="max3">25,000원</span>
										</div>
										<div class="list-font-small">
											<span><img src="../../images/small.png" class="detail-icon"></span>
											<span class="dog-size">&nbsp;소형견</span>
										</div>

										<div class="right per">
											<img src="../../images/per.png" class="icon">
											<span>&nbsp;10</span>
										</div>
									</div>
		
								</div>

								<div class="list top">
									<div class="rela">
										<img src="../../images/room1.png" class="img-list">
										<div class="abso top favo">
											<input type="button" value="☆" class="favorite" id="favo4" />
										</div>
		
									</div>
									<div class="box">
										<div class="list-font-big">혜정이네 집입니다^^</div>
										<div>
											<div class="list-font-small">
												<span><img src="../../images/house.png" class="icon">
												</span><span id="addr4">경기도 안성시</span>
											</div>
										</div>
										<div class="list-font-small">
											<span id="min4">18,000원</span>
											<span>~</span>
											<span id="max4">28,000원</span>
										</div>
										<div class="list-font-small">
											<span><img src="../../images/small.png" class="detail-icon"></span>
											<span class="dog-size">&nbsp;소형견</span>
										</div>

										<div class="right per">
											<img src="../../images/per.png" class="icon">
											<span>&nbsp;10</span>
										</div>
									</div>
		
								</div>

								<div class="list top">
									<div class="rela">
										<img src="../../images/room1.png" class="img-list">
										<div class="abso top favo">
											<input type="button" value="☆" class="favorite" id="favo5" />
										</div>
		
									</div>
									<div class="box">
										<div class="list-font-big">혜정이네 집입니다^^</div>
										<div>
											<div class="list-font-small">
												<span><img src="../../images/house.png" class="icon">
												</span><span id="addr5">서울시 성동구 성수일로</span>
											</div>
										</div>
										<div class="list-font-small">
											<span id="min5">14,000원</span>
											<span>~</span>
											<span id="max5">24,000원</span>
										</div>
										<div class="list-font-small">
											<span><img src="../../images/small.png" class="detail-icon"></span>
											<span class="dog-size">&nbsp;소형견</span>
										</div>

										<div class="right per">
											<img src="../../images/per.png" class="icon">
											<span>&nbsp;10</span>
										</div>
									</div>
								</div>
						
								 -->

						</section>
					</div>
					<div class="wid-back">
						<div id="map" class="top"
							style="width: 600px; height: 450px;"></div>

					</div>
				</div>

				</main>
			</section>


		</div>
	</section>
	<jsp:include page="../inc/footer.jsp" />

</body>
</html>