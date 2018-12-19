<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" trimDirectiveWhitespaces="false"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
	
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>DogSpot</title>
		<link href="https://fonts.googleapis.com/css?family=Jua&amp;subset=korean" rel="stylesheet">
		<link href="../css/index.css"  type="text/css" rel="stylesheet" />
	</head>

	<body>
		<jsp:include page="inc/header.jsp" />
	
		<section id="body">
			<div class="center">
				<h1 class="hidden">바디</h1>
				<main> <img src="images/indexLogo.png">
				<br />
				<input type="text">
				<section class="top6">
					<c:forEach var="spot" items="${list}">
						<a href=""> <!-- 스팟상세페이지로 이동 --> 
							<img src=""/>  <!-- 스팟 메인이미지 소스 -->
							<label>${spot.name}</label>
						</a> 
					</c:forEach>
				</section>
				</main>
			</div>
		</section>
		
		<jsp:include page="inc/footer.jsp" />
	
	</body>
</html>