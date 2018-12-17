<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>장소수정</title>
<link
	href="https://fonts.googleapis.com/css?family=Jua&amp;subset=korean"
	rel="stylesheet">
<link href="../../../css/adminpageRequest.css" type="text/css"
	rel="stylesheet" />
<link href="../../../css/commonAside.css" type="text/css"
	rel="stylesheet" />
<link href="../../../css/basicStyle.css" type="text/css"
	rel="stylesheet" />
<link href="../../../css/commonAdminMypage.css" type="text/css"
	rel="stylesheet" />
	<script src="../../../js/spot_complain.js"></script>

</head>
<body>
	<header class="list">
		<div><a href=""><img src="/images/logoImg.png" /></a></div>
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
							<li><a href="">통계관리</a></li>
							<li><a href="">데이터관리</a></li>
							<li><a href="">회원요청</a></li>
							<li><a href="">문의관리</a></li>
							<li><a href="">회원관리</a></li>
							<li><a href="">정보수정</a></li>

						</ul>
					</nav>
				</aside>
				<main id="test">
				<div id="mypage-title">회원 요청</div>
				<div class="detail-page-list">
					<ul class="list">
						<li class="herepage">장소수정</li>
						<li>리뷰신고</li>
						<li>댓글신고</li>
					</ul>
					<div class="editBtn">
						<a href=""><input type="submit" value="수정완료" /></a>
					</div>
				</div>
				<section>
				<template class="row-template">
					<tr class="trhere">
						<td class="place"></td>
						<td class="title"></td>
						<td class="writer"></td>
						<td class="condition"></td>
						<td class="date"></td>
						<td><input type="checkbox"></td>
					</tr>
					<tr class="contents" style="display: none">
						<!-- style="display: none" -->
						<td class="detail" colspan="6">123</td>
					</tr>
					</template>
					<table class="extable">
						<thead>
							<tr>
								<td>장소</td>
								<td>댓글내용</td>
								<td>신고제목</td>
								<td>상태</td>
								<td>작성일</td>
								<td></td>
							</tr>
						</thead>
						<tbody>
							<!-- <tr>
								<td onclick="btntitle()">산음자연휴양림</td>
								<td>여기 진짜별루ㅋ가..</td>
								<td>신고 부탁드립니다.</td>
								<td>접수완료</td>
								<td>2018.10.01</td>
								<td><input type="text" placeholder="1" /></td>
							</tr>
							<tr id="contents">
								<td colspan="6">
									<ul class="list contentsul">
										<li>문의드립니다에 정확한 제목이나와</li>
										<li>글의 작성자</li>
										<li>2018-12-12</li>
									</ul>
									<div>글의설명이 다 나올것이야</div>
								</td>
							</tr>
							<tr>
								<td>보라매 공원 운동장</td>
								<td>매너없는 견주만…</td>
								<td>편파적인 리뷰인…</td>
								<td>접수완료</td>
								<td>2018.10.01</td>
								<td><input type="text" placeholder="5" /></td>
							</tr>
							<tr>
								<td>코코밸리</td>
								<td>조식 우웩~~~태...</td>
								<td>신고요 ㅡㅡ</td>
								<td>접수완료</td>
								<td>2018.10.30</td>
								<td><input type="text" placeholder="1" /></td>
							</tr>
							<tr>
								<td>모던몽 애견팬션</td>
								<td>너….무…….ㄷ….더….</td>
								<td>너무 악의적이네요</td>
								<td>접수전</td>
								<td>2018.11.01</td>
								<td><input type="text" placeholder="4" /></td>
							</tr>
							<tr>
								<td>익선동 멍스카페</td>
								<td>여기 주인 청소안…</td>
								<td>신고합니다</td>
								<td>접수전</td>
								<td>2018.11.15</td>
								<td><input type="text" placeholder="2" /></td>
							</tr> -->
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