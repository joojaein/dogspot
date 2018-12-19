<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
    <script src="../../js/reviewModals.js"></script>
    <script src="../../js/review.js"></script>
    <script src="../../js/dialogDetail.js"></script>
    <script src="../../js/dialogImg.js"></script>
    <script src="../../js/dialogContent.js"></script>
    <script src="../../js/dialogReviewComplain.js"></script>
    <script src="../../js/dialogCommentComplain.js"></script>
    
    <title>DogSpot</title>
    <link href="https://fonts.googleapis.com/css?family=Jua&amp;subset=korean" rel="stylesheet">
    <link href="../../css/review.css" type="text/css" rel="stylesheet" />
</head>

<body>

	<jsp:include page="../inc/header.jsp" />
	
	<section id="body">
		<div class="center">
			<h1 class="hidden">바디</h1>

			<main>
			<section id="review-search">
				<h1 class="hidden">검색폼</h1>
				<input type="text">
				<ul class="list">
					<li><a href="">최신순</a></li>
					<li><a href="">조회순</a></li>
					<li><a href="">좋아요순</a></li>
					<li><a href="">댓글순</a></li>
				</ul>
			</section>

			<input class="btn text-white btn-indigo" type="button" value="리뷰쓰기">

			<section id="review-list">
				<h1 class="hidden">리뷰 리스트</h1>

				<template id="review-list-div-template">
				<div class="review-div">
					<a class="review-mainImg" href=""> 
						<img class="review-img" src="/images/reviewImg.png" />
						<section class="review-list-hover hidden">
	
							<section class="hover-back"></section>
	
							<div class="text-white">
								<dl class="list">
									<dt>
										<img class="good-true-icon hidden" src="/images/goodTrueIcon.png">
										<img class="good-false-icon" src="/images/goodFalseIcon.png">
									</dt>
									<dd class="good-int"></dd>
								</dl>
								<dl class="list">
									<dt>
										<img src="/images/commentIcon.png">
									</dt>
									<dd class="cmt-int"></dd>
								</dl>
								<dl class="list">
									<dt>
										<img src="/images/hitIcon.png">
									</dt>
									<dd class="hit-int"></dd>
								</dl>
							</div>
	
							<section class="hover-parency"></section>
	
						</section>
						</a>
					<div class="review-name text-overflow-ellipsis"></div>
					<div class="review-title text-overflow-ellipsis"></div>
				</div>
				</template>
			</section>
			</main>
		</div>
	</section>

	<jsp:include page="../inc/footer.jsp" />

	<section id="modals">
		<h1 class="hidden">모달</h1>
		<section class="modal-back">
			<h1 class="hidden">모달 백</h1>
		</section>
		<jsp:include page="modalReviewDetail.jsp" />
		<jsp:include page="modalReviewRegImg.jsp" />
		<jsp:include page="modalReviewRegContent.jsp" />	
		<jsp:include page="modalReviewComplain.jsp" />	
		<jsp:include page="modalCommentComplain.jsp" />	
	</section>
	
</body>

</html>