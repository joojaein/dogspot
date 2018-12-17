<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>마이페이지 등록</title>
<link
	href="https://fonts.googleapis.com/css?family=Jua&amp;subset=korean"
	rel="stylesheet">
<link href="../../../css/mypageQna.css" type="text/css" rel="stylesheet" />
<link href="../../../css/commonAside.css" type="text/css"
	rel="stylesheet" />
<link href="../../../css/basicStyle.css" type="text/css"
	rel="stylesheet" />
<link href="../../../css/commonAdminMypage.css" type="text/css"
	rel="stylesheet" />
</head>
<body>
	<header class="list">
		<div>
			<a href=""><img src="/images/logoImg.png" /></a>
		</div>

		<section class="list">
			<h1 class="hidden">헤더</h1>

			<nav id="mainmenu">
				<h1 class="hidden">mainmenu</h1>
				<ul class="list">
					<li><a href="">검색</a></li>
					<li><a href="">리뷰</a></li>
				</ul>
			</nav>

			<nav id="membermenu">
				<h1 class="hidden">membermenu</h1>
				<ul class="list">
					<li><a href="">마이페이지</a></li>
					<li><a href="">로그아웃</a></li>
				</ul>
			</nav>
		</section>
	</header>


	<section id="body">
		<div class="center">

			<h1 class="hidden">바디</h1>
			<section class="list">


				<aside>

					<h1 class="hidden">member-menu</h1>

					<nav>
						<h1>
							<img src="/images/testprofile.png" />
						</h1>
						<div>프로필</div>
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
							<div id="boximg">
								즐겨찾기
								<div>30</div>
							</div>
						</a> <a href="">
							<div id="boximg">
								리뷰
								<div>30</div>
							</div>
						</a> <a href="">
							<div id="boximg">
								좋아요
								<div>30</div>
							</div>
						</a> <a href="">
							<div id="boximg">
								댓글
								<div>30</div>
							</div>
						</a>
					</div>
				</section>
				<section id="main-head">

					<div id="mypage-title">관리자 문의</div>

				</section>
				<section class="regcontent">
					<div class="list">
						<div class="nameinput">제목</div>
						<div class="chginput">
							<input type="text" />
						</div>
					</div>
					<div class="list">
						<div class="nameinput">내용</div>
						<div class="chginput2">
							<textarea></textarea>
						</div>
					</div>
				</section>
				<div class="askbtn">
					<input type="submit" value="문의하기" />
				</div>
		</div>
		</main>


	</section>


	<footer>
		<section>
			<h1 class="hidden">푸터</h1>

		</section>
	</footer>
</body>
</html>