<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>DogSpot</title>
<link
	href="https://fonts.googleapis.com/css?family=Jua&amp;subset=korean"
	rel="stylesheet">
<link href="../../css/customer.css" type="text/css" rel="stylesheet" />
</head>
<body>
	<jsp:include page="../inc/header.jsp" />
	<section id="body">
		<div class="center">
			<h1 class="hidden">바디</h1>
			<main> 
				<img src="../images/indexLogo.png" />
				<br />
				<section id="login-input-text">
					<input type="text" placeholder="ID" /><br /> <input type="password"
						placeholder="PASSWORD" />
				</section>
	
				<input class="btn" type="button" value="로그인" />
				<br />
	
				<section id="login-input" class="list">
					<input class="chkbox" type="checkbox" checked="true" />
					<div>로그인 상태 유지</div>
				</section>
	
				<hr />
				<section id="login-input-etc">
					<input type="button" value="ID/PW 찾기" /> <input type="button"
						value="회원가입" />
				</section>
			</main>
		</div>
	</section>
	<jsp:include page="../inc/footer.jsp" />

</body>
</html>