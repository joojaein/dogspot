<%@page import="com.dogspot.web.entity.Question"%>
<%@page import="java.util.List"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>마이페이지 수정</title>
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
	<jsp:include page="../../inc/header.jsp" />
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
				</section>
				<section id="main-head">

					<div id="mypage-title">관리자 문의</div>

				</section>
				
					<form action="" method="post">
						<section class="regcontent">
							<div class="list">
								<div class="nameinput">제목</div>
								<div class="chginput">
									<input name="title" placeholder="${q.title }" />
								</div>
							</div>
							<div class="list">
								<div class="nameinput">내용</div>
								<div class="chginput2">
									<textarea name="content"  placeholder="${q.content}"></textarea>
								</div>
							</div>
						</section>
						<div class="askbtn">
							<input type="submit" value="문의하기" />
						</div>
					</form>
				
				</main>
			</section>
		</div>
	</section>


	<jsp:include page="../../inc/footer.jsp" />
</body>
</html>