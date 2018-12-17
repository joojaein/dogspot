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
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<!-- <script src="http://dmaps.daum.net/map_js_init/postcode.v2.js?autoload=false"></script>
 --><script src="../../js/post.js"></script>

</head>
<body>
	<div id="layer"></div>

	<jsp:include page="../inc/header.jsp" />

	<section id="body">
		<div class="center">
			<h1 class="hidden">바디</h1>
			<main> 
				<img id="join-logo" src="/images/indexLogo.png" />
				<br />
				<ul id="join-ul">
					<li class="list">
						<section class="join-label">
							<div>아이디</div>
						</section>
						<section class="list join-input-text half">
                            <input type="text" minlength="5" required="required" placeholder="5자이상"> 
                            <input class="btn" type="button" value="중복확인">
							<div class="empty"></div>
						</section>
					</li>
	
					<li class="list">
						<section class="join-label">
							<div>비밀번호</div>
						</section>
						<section class="list join-input-text">
							<input type="password" minlength="6" required="required" placeholder="6자이상 / 숫자,영문조합">
						</section>
					</li>
	
					<li class="list">
						<section class="join-label">
							<div>비밀번호 재확인</div>
						</section>
						<section class="list join-input-text">
							<input type="password" required="required" >
						</section>
					</li>
	
					<li class="list">
						<section class="join-label">
							<div>비밀번호 찾기 질문</div>
						</section>
						<section class="list join-input-text">
							<input type="text" required="required" >
						</section>
					</li>
	
					<li class="list">
						<section class="join-label">
							<div>비밀번호 찾기 답변</div>
						</section>
						<section class="list join-input-text">
							<input type="text" required="required" >
						</section>
					</li>
	
					<li class="list">
						<section class="join-label">
							<div>이름</div>
						</section>
						<section class="list join-input-text">
							<input type="text" required="required" >
						</section>
					</li>
	
					<li class="list">
						<section class="join-label">
							<div>이메일</div>
						</section>
						<section class="list join-input-text">
							<input type="email">
						</section>
					</li>
	
              	   <li class="list addr-li">
						<section class="join-label">
							<div>주소</div>
						</section>
						<section class="list join-input-text quarter">
							<input type="text" id="postCode">
							<input class="btn" type="button" value="우편번호검색">
							<div class="empty"></div>
						</section>
					</li>
	
					<li class="list">
						<section class="join-label"></section>
						<section class="list join-input-text">
							<input type="text" id="roadAddress" placeholder="기본 주소  ">
						</section>
					</li>
	
					<li class="list">
						<section class="join-label"></section>
						<section class="list join-input-text">
							<input type="text" id="detailAddress" placeholder="나머지 주소  ">
						</section>
					</li>
	
					<input class="btn joinbtn" type="submit" value="가입하기">
				</ul>
			</main>
		</div>
	</section>
	
	<jsp:include page="../inc/footer.jsp" />
	  
</body>

</html>