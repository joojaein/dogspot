<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>DogSpot</title>
<link href="https://fonts.googleapis.com/css?family=Jua&amp;subset=korean" rel="stylesheet">
<link href="../../../css/adminSpot.css" type="text/css" rel="stylesheet" />
<link href="../../../css/basicStyle.css" type="text/css" rel="stylesheet" />
<link href="../../../css/commonAside.css" type="text/css" rel="stylesheet" />
<link href="../../../css/share.css" type="text/css"rel="stylesheet" />
<!-- <script src="../../../js/spotReg.js"></script> -->
<!-- <script src="http://dmaps.daum.net/map_js_init/postcode.v2.js??autoload=false"></script> -->
</head>
<body>
	<jsp:include page="../../inc/header.jsp" />
	<section id="body">
		<div class="center">
			<h1 class="hidden">바디</h1>
			<section class="list">
				<aside>
					<h1 class="hidden">admin-menu</h1>
					<nav>
						<h1>
							<img src="../../../images/profile.png">
						</h1>
						<div>관리자</div>

						<ul>
							<li><a href="">통계 관리</a></li>
							<li><a href="">데이터 관리</a></li>
							<li><a href="">회원 요청</a></li>
							<li><a href="">문의 관리</a></li>
							<li><a href="">회원 관리</a></li>
							<li><a href="">비밀번호 수정</a></li>

						</ul>
					</nav>

				</aside>


				<main>
				<h1 class="hidden">메인</h1>
				<section class="data-menu">
					<h1 class="hidden">데이터 관리 추가 페이지</h1>
					<div id="mypage-title">데이터 관리</div>

					<div class="data-add">
						<div class="data-title">Spot</div>
						<ul>
							<li class="list"><span class="width-front">장소명</span> <span
								class="width-back"><input type="text" name="spot-name" />
									<span>카페</span> <input type="checkbox" name="cafe" /> <span>식당</span>
									<input type="checkbox" name="food" /> <span>숙박</span> <input
									type="checkbox" name="room" /> <span>놀이터</span> <input
									type="checkbox" name="play" /> <input type="text"
									name="spot-theme" placeholder="상세분류" /> </span></li>


							<li class="list"><span class="width-front">연락처</span> <span
								class="width-back"><select name="phone" class="select">
										<option value="010">010</option>
										<option value="02">02</option>
										<option value="031">031</option>
										<option value="031">032</option>
										<option value="070">070</option>
								</select> <input type="text" name="phone-two"
									placeholder=" '-' 빼고 입력해주세요" /></span></li>

							<li class="list"><span class="width-front">주소</span> <span
								class="width-back"><input type="text" name="addr"
									class="input-big" />
									<!-- <input type="button" name="addr-btn" value="주소검색" class="full-btn" id="addr-btn" /></span>	 -->
								</li>

							<!-- <li class="list">
								<div class="left-addr">
									<span class="right-addr">상세주소</span> <span><input
										type="text" name="addr-detail" class="input-big" /></span>
								</div>
							</li> -->
							<li class="list"><span class="width-front">영업시간</span>
								<div class="width-back">
									<input type="text" name="open" class="input-small"
										placeholder="open" /> <input type="text" name="close"
										class="input-small" placeholder="close" />
									<textarea class="short-area" name="time-etc"
										style="resize: none" placeholder="기타"></textarea>
								</div></li>

							<li class="list"><span class="width-front">가격대</span> <span
								class="width-back"> <input type="text" name="min-price"
								class="input-small" placeholder="최저가격" /> <input type="text"
									name="max-price" class="input-small" placeholder="최고가격" /> <textarea
										class="short-area" name="price-etc" style="resize: none"
										placeholder="기타"></textarea>
							</span></li>


							<li class="list">
								<div class="left-url">
									<span class="right-url">URL</span> <span><input
										type="text" name="url" class="input-big" /></span>
								</div>

							</li>

							<li class="list"><span class="width-front">사진첨부</span> <span
								class="width-back"><textarea id="img-area"
										style="resize: none"></textarea> <input type="file" name="img" /></span>

							</li>

							<div class="data-title">Pet</div>

							<li class="list"><span class="width-front">견크기</span> <span
								class="width-back"> <span>소형견</span> <input
									type="checkbox" name="small" /> <span>중형견</span> <input
									type="checkbox" name="medium" /> <span>대형견</span> <input
									type="checkbox" name="big" /> <textarea class="short-area"
										name="size-etc" style="resize: none" placeholder="기타"></textarea></span>
							</li>

							<li class="list"><span class="width-front">견체중</span> <span
								class="width-back"> <input type="text" name="min-weight"
								class="input-small" placeholder="최저무게" /> <input type="text"
									name="max-weight" class="input-small" placeholder="최고무게" /> <textarea
										class="short-area" name="weight-etc" style="resize: none"
										placeholder="기타"></textarea></span></li>

							<li>
								<div class="data-title">Etc</div>
								<div>
									<textarea class="long-area" style="resize: none"
										placeholder="기타 내용 입력해주세요"></textarea>
								</div>
							</li>

						</ul>


						<div id="reg-btn">
							<input type="submit" name="reg-btn" value="등록" class="full-btn" />
						</div>

						<!-- <input type="text" name="search"  />
                            <input type="button" name="addr" value="주소검색" class="btn" /> -->
					</div>

				</section>

				</main>
			</section>


		</div>
	</section>

	<jsp:include page="../../inc/footer.jsp" />

</body>
</html>