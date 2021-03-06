<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>마이페이지 수정</title>
<link
	href="https://fonts.googleapis.com/css?family=Jua&amp;subset=korean"
	rel="stylesheet">
<link href="../../css/mypageEdit.css" type="text/css"
	rel="stylesheet" />
<link href="../../css/commonAside.css" type="text/css"
	rel="stylesheet" />
<link href="../../css/basicStyle.css" type="text/css"
	rel="stylesheet" />
<link href="../../css/commonAdminMypage.css" type="text/css"
	rel="stylesheet" />
	
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script src="../../js/findpost.js"></script>
</head>
<body>

	

	<jsp:include page="../inc/header.jsp" />
	

	<section id="body">
		<div class="center">
				<h1 id="profile">
				<img src="/images/testprofile.png" />
				</h1>
				<div class=profilename>프로필</div>
			<h1 class="hidden">바디</h1>
			<section class="list">
				<aside>

					<h1 class="hidden">member-menu</h1>

					<nav>
		
						<ul>
							<li><a href="">즐겨찾기</a></li>
							<li><a href="">리뷰</a></li>
							<li><a href="">좋아요</a></li>
							<li><a href="">댓글</a></li>
							<li><a href="">최근 본 목록</a></li>
							<li><a href="">관리자 문의</a></li>
							<li><a href="">정보수정</a></li>

						</ul>
					</nav>
				</aside>
				<main>
				
				<section id="boxlist">
		
					<div class="list">
						<a href="">
							<div class="boximg">
								즐겨찾기
								<div>30</div>
							</div>
						</a> <a href="">
							<div class="boximg">
								리뷰
								<div>30</div>
							</div>
						</a> <a href="">
							<div class="boximg">
								좋아요
								<div>30</div>
							</div>
						</a> <a href="">
							<div class="boximg">
								댓글
								<div>30</div>
							</div>
						</a>
					</div>

					<!-- <ul class="list">
                        <a href=""><li id="boximg"><div>즐겨찾기</div></li></a>
                        <a href=""><li id="boximg"><div>리뷰</div></li></a>
                        <a href=""><li id="boximg"><div>좋아요</div></li></a>
                        <a href=""><li id="boximg"><div>댓글</div></li></a>
                    </ul> -->
				</section>
				<div id="layer"></div>
				<div id="mypage-title">정보 수정</div>
				<section class="mypassword">
					<div>비밀번호</div>
					<input type="text" />

					<div>비밀번호 확인</div>
					<input type="text" />
					<div>이메일</div>
					<input type="text" type="email" />
					<div>주소</div>
					<ul class="address">
						<li><input type="text" id="postCode"/></li>
						<!-- <li>-</li> -->
						<!-- <li class="noneaddress"><input type="text" /></li> -->
						<li class="searchaddress"><input class="btn" type="button" value="우편번호검색" /></li>
					</ul>
					<div class="placeholderalign">
						<input type="text" id="roadAddress" placeholder="기본주소" />
					</div>
					<div class="placeholderalign">
						<input type="text"  id="detailAddress" placeholder="나머지주소" />
					</div>
					<div class="eidtcomplbtn">
						<input type="submit" value="수정완료" />
					</div>
				</section>

				</main>

			</section>

		</div>
	</section>

	<jsp:include page="../inc/footer.jsp" />
</body>
</html>