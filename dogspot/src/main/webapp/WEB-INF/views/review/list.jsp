<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html>
<html>

	<head>
	
		<script src="../../js/reviewCombine.js"></script>
		<!-- 
		<script src="../../js/reviewModals.js"></script>
		<script src="../../js/review.js"></script>
		<script src="../../js/dialogDetail.js"></script>
		<script src="../../js/dialogImg.js"></script>
		<script src="../../js/dialogContent.js"></script>
		<script src="../../js/dialogReviewComplain.js"></script>
		<script src="../../js/dialogCommentComplain.js"></script> -->
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
					
					<c:set var="filter" value="1"/>
					
					<c:if test="${not empty param.f}">
						<c:set var="filter" value="${param.f}"/>
					</c:if>
					
					<ul class="list">
<%-- 						<c:forEach var="i" begin="1" end="4">
							<c:set var="cls" value="${i==filter? 'text-indigo':''}"/>
							<c:if test="${i==1}">
								<li><a href="?f=1" class="${cls}">최신순</a></li>
							</c:if>
							<c:if test="${i==2}">
								<li><a href="?f=2" class="${cls}">조회순</a></li>
							</c:if>
							<c:if test="${i==3}">
								<li><a href="?f=3" class="${cls}">좋아요순</a></li>
							</c:if>
							<c:if test="${i==4}">
								<li><a href="?f=4" class="${cls}">댓글순</a></li>
							</c:if>
						</c:forEach> --%>
						
						<li><a class="btn text-indigo">최신순</a></li>
						<li><a class="btn">조회순</a></li>
						<li><a class="btn">좋아요순</a></li>
						<li><a class="btn">댓글순</a></li>
						
					</ul>
					
					
				</section>
	
				<input class="btn text-white btn-indigo" type="button" value="리뷰쓰기">
	
				<section id="review-list">
					<h1 class="hidden">리뷰 리스트</h1>
	
					<template id="review-list-div-template">
					<div class="review-div">
						<div class="hiddenId hidden"></div>
						<a class="review-mainImg" href=""> 
							<img class="review-img"/>
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
					
					
					<%-- <c:forEach var="review" items="${list}">
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
					</c:forEach> --%>
					
					
				</section>
				</main>
			</div>
		</section>
	
		<jsp:include page="../inc/footer.jsp" />
	
		<section id="modals">
			<h1 class="hidden">모달</h1>
			<jsp:include page="modalReviewDetail.jsp" />
			<jsp:include page="modalReviewRegImg.jsp" />
			<jsp:include page="modalReviewRegContent.jsp" />	
			<jsp:include page="modalReviewComplain.jsp" />	
			<jsp:include page="modalCommentComplain.jsp" />	
		</section>
		
	</body>

</html>