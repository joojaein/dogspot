<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>비밀번호 수정</title>
 <link href="https://fonts.googleapis.com/css?family=Jua&amp;subset=korean" rel="stylesheet">
<link href="../../../css/adminpageEdit.css" type="text/css"
	rel="stylesheet" />
<link href="../../../css/commonAside.css" type="text/css"
	rel="stylesheet" />
<link href="../../../css/basicStyle.css" type="text/css"
	rel="stylesheet" />
<link href="../../../css/commonAdminMypage.css" type="text/css"
	rel="stylesheet" />
</head>
</head>
<body>
        <header class="list">
   
		<div>
			<a href=""><img src="/images/logoImg.png" /></a>
		</div>

		
    
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
                        <h1  class="hidden">바디</h1>
                        <section class="list">                          
                        <aside>
                            
                            <h1 class="hidden">member-menu</h1>
                          
                            <nav>
                                <h1><img src="/images/testprofile.png"/></h1>
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
                                <div id="mypage-title">비밀번호 수정</div> 
                                <section class="adpassword">
                                    <div>비밀번호</div>
                                    <input type="text"/>
                                                        
                                    <div>비밀번호 확인</div>
                                    <input type="text"/>
                             
                                </section>
                                <section class="adeditbtn">
                                    <input type="submit" value="수정"/>
                                </section>

                        </main>
                </div>
        </section>
</body>
</html>