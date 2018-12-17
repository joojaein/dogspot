<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>마이페이지 리스트</title>
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
<script src="../../../js/mypage_admin.js"></script>
</head>
<body>
	<header class="list">
		<div>
			<a href=""><a href=""><img src="/images/logoImg.png" /></a>
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
					<div class="writeBtn">
						<a href=""><input type="submit" value="글쓰기" /></a>
					</div>

				</section>
				<section>
					<table>
						<thead>
							<td>제목</td>
							<td>작성자</td>
							<td>작성일</td>
							<td></td>

						</thead>
						<tbody>
							<tr>
								<td onclick="btntitle()">문의드립니다</td>
								<td>dogspot</td>
								<td>2018.10.01</td>
								<td><a href=""><input type="submit" value="수정" /> </a> <input
									type="submit" value="삭제" /></td>
							</tr>
							<tr id="contents">
								<td colspan="4">
									<ul class="list contentsul">
										<li>문의드립니다에 정확한 제목이나와</li>
										<li>글의 작성자</li>
										<li>2018-12-12</li>
									</ul>
									<div>글의설명이 다 나올것이야</div>


								</td>
							</tr>
							<tr>
								<td>└ 답변 : 답변 드립니다</td>
								<td>dogspot</td>
								<td>2018.10.01</td>
								<td></td>
							</tr>
							<tr>
								<td>가격 문의드립니다.</td>
								<td>dogspot</td>
								<td>2018.10.01</td>
								<td><a href=""><input type="submit" value="수정" /> </a> <input
									type="submit" value="삭제" /></td>
							</tr>
							<tr>
								<td>└ 답변 : 답변 드립니다</td>
								<td>dogspot</td>
								<td>2018.10.01</td>
								<td></td>
							</tr>
							<tr>
								<td>가격 문의드립니다.</td>
								<td>dogspot</td>
								<td>2018.10.01</td>
								<td><a href=""><input type="submit" value="수정" /> </a> <input
									type="submit" value="삭제" /></td>
							</tr>
						</tbody>

						<tbody>

						</tbody>
					</table>
				</section>
				<section>
					<div class="page_move">
						<div>
							<span><img src="/images/back.png" /></span>
						</div>
						<div>
							<ul class="list">
								<li><a href="">1</a></li>
								<li><a href="">2</a></li>
								<li><a href="">3</a></li>
							</ul>
						</div>
						<div>
							<span><img src="/images/next.png" /></span>
						</div>
					</div>
				</section>
				</main>

			</section>

		</div>
	</section>

	<footer>
		<section>
			<h1 class="hidden">푸터</h1>

		</section>
	</footer>
</body>

</html>