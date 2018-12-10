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
				<img id="join-logo" src="../images/indexLogo.png" />
				<br />
				<ul id="join-ul">
					<li class="list">
						<section class="join-label">
							<div>아이디</div>
						</section>
						<section class="list join-input-text">
							<input type="text"> <input class="btn" type="button"
								value="중복확인">
							<div class="empty"></div>
						</section>
					</li>
	
					<li class="list">
						<section class="join-label">
							<div>비밀번호</div>
						</section>
						<section class="list join-input-text">
							<input type="text">
							<div class="empty"></div>
						</section>
					</li>
	
					<li class="list">
						<section class="join-label">
							<div>비밀번호 재확인</div>
						</section>
						<section class="list join-input-text">
							<input type="text">
							<div class="empty"></div>
						</section>
					</li>
	
					<li class="list">
						<section class="join-label">
							<div>비밀번호 찾기 질문</div>
						</section>
						<section class="list join-input-text">
							<input type="text">
						</section>
					</li>
	
					<li class="list">
						<section class="join-label">
							<div>비밀번호 찾기 답변</div>
						</section>
						<section class="list join-input-text">
							<input type="text">
						</section>
					</li>
	
					<li class="list">
						<section class="join-label">
							<div>이름</div>
						</section>
						<section class="list join-input-text">
							<input type="text">
						</section>
					</li>
	
					<li class="list">
						<section class="join-label">
							<div>이메일</div>
						</section>
						<section class="list join-input-text">
							<input type="text">
						</section>
					</li>
	
              	   <li class="list addr-li">
						<section class="join-label">
							<div>주소</div>
						</section>
						<section class="list join-input-text">
							<input class="addr" type="text">
							<div>-</div>
							<input class="addr" type="text"> <input class="btn"
								type="button" value="우편번호검색">
							<div class="empty"></div>
						</section>
					</li>
	
					<li class="list">
						<section class="join-label"></section>
						<section class="list join-input-text">
							<input type="text" placeholder="기본 주소  ">
						</section>
					</li>
	
					<li class="list">
						<section class="join-label"></section>
						<section class="list join-input-text">
							<input type="text" placeholder="나머지 주소  ">
						</section>
					</li>
	
					<input class="btn joinbtn" type="button" value="가입하기">
				</ul>
			</main>
		</div>
	</section>
	
	<jsp:include page="../inc/footer.jsp" />
	  
</body>

</html>