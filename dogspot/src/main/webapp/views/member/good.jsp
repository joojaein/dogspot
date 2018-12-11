<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>DogSpot</title>
        <link href="https://fonts.googleapis.com/css?family=Jua&amp;subset=korean" rel="stylesheet">
        <link href="../../css/mypageShare.css" type="text/css" rel="stylesheet" />
        <link href="../../css/basicStyle.css" type="text/css"rel="stylesheet" />
        <link href="../../css/commonAside.css" type="text/css"rel="stylesheet" />
        <link href="../../css/share.css" type="text/css"rel="stylesheet" />
    </head>
<body>
	<jsp:include page="../inc/header.jsp" />
	<section id="body">
		<div class="center">
			<h1 class="hidden">바디</h1>
			<section class="list">
				<aside>
					<h1 class="hidden">admin-menu</h1>
					<nav>
						<h1>
							<img src="../../images/profile.png">
						</h1>
						<div>관리자</div>

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
							<div id="boximg" class="mypage-click">
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
				<h1 class="hidden">메인</h1>
				<section class="data-menu">
					<h1 class="hidden">데이터 관리 목록</h1>
					<div id="mypage-title">좋아요</div>

				</section>


				<section class="top left rela" id="my-list">

					<div class="list top">
						<div class="rela">
							<img src="../../images/dog1.png" class="img-list">

						</div>
						<div class="box">
							<div id="list-font-big">가을 산책</div>

							<div id="list-font-small">기분이가 좋아요~~</div>
							<div class="top hashtag">
								<span>#멍스타그램</span> <span>#콧물맛</span>
							</div>
							<div class="top" id="per">
								<span><img src="../../images/house.png" class="icon abso"
									id=""> </span>
								<div class="abso" id="comm-icon">
									<img src="../../images/likesImg.png" class="icon"> <span>10&nbsp;&nbsp;&nbsp;&nbsp;</span>
									<span><img src="../../images/commentsImg.png"
										class="icon"></span> <span>10&nbsp;&nbsp;&nbsp;&nbsp;</span> <span><img
										src="../../images/hitImg.jpg" class="icon"></span> <span>10&nbsp;&nbsp;&nbsp;&nbsp;</span>
								</div>
							</div>
						</div>
					</div>

					<div class="list top">
						<div class="rela">
							<img src="../../images/dog1.png" class="img-list">

						</div>
						<div class="box">
							<div id="list-font-big">가을 산책</div>

							<div id="list-font-small">기분이가 좋아요~~</div>
							<div class="top hashtag">
								<span>#멍스타그램</span> <span>#콧물맛</span>
							</div>
							<div class="top" id="per">
								<span><img src="../../images/house.png" class="icon abso"
									id=""> </span>
								<div class="abso" id="comm-icon">
									<img src="../../images/likesImg.png" class="icon"> <span>10&nbsp;&nbsp;&nbsp;&nbsp;</span>
									<span><img src="../../images/commentsImg.png"
										class="icon"></span> <span>10&nbsp;&nbsp;&nbsp;&nbsp;</span> <span><img
										src="../../images/hitImg.jpg" class="icon"></span> <span>10&nbsp;&nbsp;&nbsp;&nbsp;</span>
								</div>
							</div>
						</div>
					</div>

					<div class="list top">
						<div class="rela">
							<img src="../../images/dog1.png" class="img-list">

						</div>
						<div class="box">
							<div id="list-font-big">가을 산책</div>

							<div id="list-font-small">기분이가 좋아요~~</div>
							<div class="top hashtag">
								<span>#멍스타그램</span> <span>#콧물맛</span>
							</div>
							<div class="top" id="per">
								<span><img src="../../images/house.png" class="icon abso"
									id=""> </span>
								<div class="abso" id="comm-icon">
									<img src="../../images/likesImg.png" class="icon"> <span>10&nbsp;&nbsp;&nbsp;&nbsp;</span>
									<span><img src="../../images/commentsImg.png"
										class="icon"></span> <span>10&nbsp;&nbsp;&nbsp;&nbsp;</span> <span><img
										src="../../images/hitImg.jpg" class="icon"></span> <span>10&nbsp;&nbsp;&nbsp;&nbsp;</span>
								</div>
							</div>
						</div>
					</div>

				</section>



				<nav class="page list">
					<div>
						<span><img src="../../images/back.png"></span>
					</div>
					<div>
						<ul class="list">
							<li><a href="">1</a></li>
							<li><a href="">2</a></li>
							<li><a href="">3</a></li>
						</ul>
					</div>
					<div>
						<span><img src="../../images/next.png"></span>

					</div>
				</nav>

				</main>
			</section>
		</div>
	</section>

	<jsp:include page="../inc/footer.jsp" />
</body>
</html>