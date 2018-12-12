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

				<main id="search-list" class="list-large-main">
				<h1 class="hidden">메인</h1>
				<div class="left top">
					<input type="text" name="search" class="big-data-search" />

				</div>

				<div class="left top bottom">
					<select name="local" class="select">
						<option value="">지역</option>
						<option value="서울">서울</option>
						<option value="대전">대전</option>
						<option value="경기">경기</option>
						<option value="부산">부산</option>
					</select> <select name="spot" class="select">
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
					</select> <input type="number" name="min-price" placeholder="최소가격" /> <span
						class="content">~</span> <input type="number" name="max-price"
						placeholder="최대가격" />
				</div>


				<div class="list">
					<div class="content-bold">53개의 검색결과</div>
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
				<div class="list">
					<div id="wid-front">
						<section class="top left">

							<div class="list top">
									<div class="rela">
										<img src="../../images/room1.png" class="img-list">
										<div id="favo" class="abso top">
											<input type="button" value="♡" class="favorite" />
										</div>
		
									</div>
									<div class="box">
										<div id="list-font-big">혜정이네 집</div>
										<div>
											<div id="list-font-small">
												<span><img src="../../images/house.png" class="icon">
												</span>인천시 계양구 계산새로
											</div>
										</div>
										<div id="list-font-small">10,000원~20,000원</div>
										<div class="right top" id="per">
											<img src="../../images/per.png" class="icon">
											<span>&nbsp;10</span>
										</div>
									</div>
		
								</div>
								<div class="list top">
									<div class="rela">
										<img src="../../images/room1.png" class="img-list">
										<div id="favo" class="abso top">
											<input type="button" value="♡" class="favorite" />
										</div>
		
									</div>
									<div class="box">
										<div id="list-font-big">혜정이네 집</div>
										<div>
											<div id="list-font-small">
												<span><img src="../../images/house.png" class="icon">
												</span>인천시 계양구 계산새로
											</div>
										</div>
										<div id="list-font-small">10,000원~20,000원</div>
										<div class="right top" id="per">
											<img src="../../images/per.png" class="icon">
											<span>&nbsp;10</span>
										</div>
									</div>
		
								</div>
								<div class="list top">
									<div class="rela">
										<img src="../../images/room1.png" class="img-list">
										<div id="favo" class="abso top">
											<input type="button" value="♡" class="favorite" />
										</div>
		
									</div>
									<div class="box">
										<div id="list-font-big">혜정이네 집</div>
										<div>
											<div id="list-font-small">
												<span><img src="../../images/house.png" class="icon">
												</span>인천시 계양구 계산새로
											</div>
										</div>
										<div id="list-font-small">10,000원~20,000원</div>
										<div class="right top" id="per">
											<img src="../../images/per.png" class="icon">
											<span>&nbsp;10</span>
										</div>
									</div>
		
								</div>


						</section>
					</div>
					<div id="wid-back abso">
						<div id="map" class="rela top"
							style="width: 600px; height: 600px;"></div>

					</div>
				</div>

				</main>
			</section>


		</div>
	</section>
	<jsp:include page="../inc/footer.jsp" />

</body>
</html>