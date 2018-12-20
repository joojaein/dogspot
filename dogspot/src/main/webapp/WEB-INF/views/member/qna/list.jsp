<%@page import="com.dogspot.web.entity.Question"%>
<%@page import="java.util.List"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>마이페이지 리스트</title>
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
 <script src="../../../js/mypage_list.js"></script>

 </head>
<body>
	 <jsp:include page ="../../inc/header.jsp" />
     


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
				<main id="test">
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
					<div class="writeBtn">
						<a href="reg"><input type="submit" value="글쓰기" /></a>
					</div>

				</section>
				<section>
			
                        <table id="table1">
                         <thead>
                            <td>제목</td>
                            <td>작성자</td>
                            <td>작성일</td>
                            <td></td>

                         </thead>
                        <tbody>
                         <%  %>
	                     <c:forEach var="q" items="${list}">
	                    
          				<form action="" method="post" > 
                            
								<tr class="trhere" value="test">
									
									<td class="title">${q.title}</td>
									<td class="writer">${q.regid}</td>
									<td class="regdate">${q.regdate}</td>					
								    <td class="qid" style="display: none">${q.id}</td><!-- class="hidden" -->
									<td class="etc">
									<%-- <input type="hidden" name="id" value="${q.id }" />  dataset-qid="${q.id}" --%>
									<a href="listedit?id=${q.id}"><input type="button" value="수정"/></a>
									<input type="submit" class="delbtn" name="delbtn" value="삭제" />
									</td>
								</tr>
							</form> 
	                        <tr class="contents"  style="display: none" >
	                     		<td class="detaile" colspan="4">
	                     		
	                     			<div class="detaile-etc list">
		                     			<div class="detaildiv">${q.regid}</div>
		                     			<div class="detaildiv">${q.regdate}</div>
	                     			</div>
	                     			<div class="detaile-title">${q.title}</div>
	                     		
	                     			<p>${q.content}</p>
	                     		</td>
	                     		
	                     	</tr>
	                        
	                       </c:forEach>
                     	<% %>
                     	
                        </tbody>
					</table>
				</section>
				<section>
					<div class="page_move">
						<div>
							<span><img src="/images/back.png" /></span>
						</div>
						<div>
							<ul class="list">
								<c:set var="page" value="1" />
		                      <c:if test="${not empty param.p}">
		                      	<c:set var="page" value="${param.p}" />
		                      </c:if>
		                      
		                     <c:forEach var="i" begin="1" end="3">
		                     
		                      <c:set var="cls" value="${i==page?'strong':''}"/>
		                      <li>
                     			<a href="?p=${i}" class="${cls}">${i}</a>
                     		  </li>
                     	 	</c:forEach>
							</ul>
						</div>
						<div>
							<span><img src="/images/next.png" /></span>
						</div>
					</div>
				</section>
				</main>

			</section>

		</div>
	</section>

		 <jsp:include page ="../../inc/footer.jsp" />

</body>

</html>