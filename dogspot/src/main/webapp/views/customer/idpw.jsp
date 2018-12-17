<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>DogSpot</title>
<script src="../../js/idpw.js"></script>
<link href="https://fonts.googleapis.com/css?family=Jua&amp;subset=korean" rel="stylesheet">
<link href="../../css/customer.css" type="text/css" rel="stylesheet" />
</head>
<body>
	<jsp:include page="../inc/header.jsp" />

	 <section id="body">
        <div class="center">
            <h1 class="hidden">바디</h1>
            <main>
                <img id="join-logo" src="/images/indexLogo.png"/><br/>
                <section id="idpw">                
                    <section id="idpw-id">
                        <div>아이디 찾기</div>
                        <input type="text" placeholder="이름"/><br/>
                        <input type="text" placeholder="이메일"/><br/>
                        <section class="answer-btn">
                                <span></span>
                                <input class="btn" type="button" value="찾기"/>
                        </section>         
                    </section>
                    <section id="idpw-pw">
                        <div for="">비밀번호 찾기</div>
                        <input type="text" placeholder="아이디"/><br/>
                        <input type="text" placeholder="이름"/><br/>
                        <input type="text" placeholder="이메일"/><br/>
                        <section id="idpw-pwq">
                            <div class="etc">나의 보물 1호는?</div>
                            <input type="text" placeholder="비밀번호 찾기 답변"/><br/>
                        </section>
                        <section class="answer-btn">
                            <span></span>
                            <input class="btn" type="button" value="찾기"/>
                        </section>
                    </section>
                </section>  


            </main>
        </div>
    </section>
	
	<jsp:include page="../inc/footer.jsp" />
	  
</body>

</html>