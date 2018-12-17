<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원관리</title>
<link
	href="https://fonts.googleapis.com/css?family=Jua&amp;subset=korean"
	rel="stylesheet">
<link href="../../../css/adminpageMember.css" type="text/css"
	rel="stylesheet" />
<link href="../../../css/commonAside.css" type="text/css"
	rel="stylesheet" />
<link href="../../../css/basicStyle.css" type="text/css"
	rel="stylesheet" />
<link href="../../../css/commonAdminMypage.css" type="text/css"
	rel="stylesheet" />
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
				<main>
				<div id="mypage-title">회원관리</div>
				<div class="show-page-list">
					<ul class="list">
						<li><a href="">최신순</a></li>
						<li><a href="">조회순</a></li>
						<li><a href="">좋아요순</a></li>
						<li><a href="">댓글순</a></li>
					</ul>
					<div class="stopBtn">
						<a href=""><input type="submit" value="접수완료" /></a>
					</div>
				</div>
				<section>
					<table class="extable">
						<thead>
							<tr>
								<td>가입일</td>
								<td>최근로그인</td>
								<td>아이디</td>
								<td>리뷰수</td>
								<td>댓글수</td>
								<td>신고수</td>
								<td></td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>2018-11-25</td>
								<td>2018-11-26</td>
								<td>Newlec</td>
								<td>10</td>
								<td>100</td>
								<td>1</td>
								<td><input type="checkbox" /></td>
							</tr>
							<tr>
								<td>2018-11-25</td>
								<td>2018-10-30</td>
								<td>Gomgom25</td>
								<td>5</td>
								<td>30</td>
								<td>10</td>
								<td><input type="checkbox" /></td>
							</tr>
							<tr>
								<td>2018-11-05</td>
								<td>2018-11-15</td>
								<td>Narangga</td>
								<td>8</td>
								<td>5</td>
								<td>3</td>
								<td><input type="checkbox" /></td>
							</tr>
							<tr>
								<td>2018-10-06</td>
								<td>2018-10-25</td>
								<td>Yougiyo</td>
								<td>0</td>
								<td>38</td>
								<td>5</td>
								<td><input type="checkbox" /></td>
							</tr>
							<tr>
								<td>2018-09-30</td>
								<td>2018-09-13</td>
								<td>Breadcrumb</td>
								<td>15</td>
								<td>15</td>
								<td>4</td>
								<td><input type="checkbox" /></td>
							</tr>
							<tr>
								<td>2018-09-23</td>
								<td>2018-02-25</td>
								<td>Haejeong</td>
								<td>7</td>
								<td>3</td>
								<td>2</td>
								<td><input type="checkbox" /></td>
							</tr>
							<tr>
								<td>2018-09-22</td>
								<td>2018-07-15</td>
								<td>Jaein</td>
								<td>5</td>
								<td>9</td>
								<td>1</td>
								<td><input type="checkbox" /></td>
							</tr>
							<tr>
								<td>2018-09-20</td>
								<td>2018-11-21</td>
								<td>Inqyung</td>
								<td>1</td>
								<td>5</td>
								<td>1</td>
								<td><input type="checkbox" /></td>
							</tr>
							<tr>
								<td>2018-09-13</td>
								<td>2018-03-01</td>
								<td>Peripera</td>
								<td>3</td>
								<td>3</td>
								<td>3</td>
								<td><input type="checkbox" /></td>
							</tr>
							<tr>
								<td>2018-09-02</td>
								<td>2018-09-08</td>
								<td>Sinochoi</td>
								<td>9</td>
								<td>10</td>
								<td>2</td>
								<td><input type="checkbox" /></td>
							</tr>
							<tr>
								<td>2018-08-02</td>
								<td>2018-10-15</td>
								<td>goodoong</td>
								<td>15</td>
								<td>20</td>
								<td>2</td>
								<td><input type="checkbox" /></td>
							</tr>
							<tr>
								<td>2018-08-02</td>
								<td>2017-09-30</td>
								<td>nafla88</td>
								<td>20</td>
								<td>40</td>
								<td>8</td>
								<td><input type="checkbox" /></td>
							</tr>

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
		</div>
	</section>
	<footer>
		<section>
			<h1 class="hidden">푸터</h1>

		</section>
	</footer>
</body>

</html>