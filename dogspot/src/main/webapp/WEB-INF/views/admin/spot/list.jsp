<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>DogSpot</title>
<link href="https://fonts.googleapis.com/css?family=Jua&amp;subset=korean" rel="stylesheet">
<link href="../../../css/adminSpot.css" type="text/css" rel="stylesheet" />
<link href="../../../css/basicStyle.css" type="text/css"rel="stylesheet" />
<link href="../../../css/commonAside.css" type="text/css"rel="stylesheet" />
<link href="../../../css/share.css" type="text/css"rel="stylesheet" />
</head>
<body>
	<jsp:include page="../../inc/header.jsp" />

	<section id="body">
		<div class="center">
			<h1 class="hidden">바디</h1>
			<section class="list">
				<aside>
					<h1 class="hidden">admin-menu</h1>
					<nav>
						<h1>
							<img src="../../../images/profile.png">
						</h1>
						<div>관리자</div>

						<ul>
							<li><a href="">통계 관리</a></li>
							<li><a href="" class="idx-page">데이터 관리</a></li>
							<li><a href="">회원 요청</a></li>
							<li><a href="">문의 관리</a></li>
							<li><a href="">회원 관리</a></li>
							<li><a href="">비밀번호 수정</a></li>

						</ul>
					</nav>

				</aside>


				<main>
				<h1 class="hidden">메인</h1>
				<section class="data-menu">
					<h1 class="hidden">데이터 관리 목록</h1>
					<div id="mypage-title">데이터 관리</div>

					<div class="data-func">
						<a href="/admin/spot/reg"><input type="text" name="search" class="data-search" /> <input
							type="button" name="insert" value="추가" class="empty-btn" /></a>
					</div>

				</section>


				<section class="data-list">
					<h1 class="hidden">장소 리스트</h1>
					<table>
						<thead>
							<tr>
								<th>지역</th>
								<th>장소명</th>
								<th>등록일</th>
								<th></th>
							</tr>

						</thead>

						<tbody>
							<tr>
								<td>서울</td>
								<td>가가카페</td>
								<td>2018.11.26</td>
								<td><input type="button" value="수정" /> <input
									type="button" value="삭제" /></td>
							</tr>
							<tr>
								<td>대전</td>
								<td>나나카페</td>
								<td>2018.11.26</td>
								<td><input type="button" value="수정" /> <input
									type="button" value="삭제" /></td>
							</tr>
							<tr>
								<td>경기</td>
								<td>다다호텔</td>
								<td>2018.11.26</td>
								<td><input type="button" value="수정" /> <input
									type="button" value="삭제" /></td>
							</tr>
							<tr>
								<td>제주</td>
								<td>라라식당</td>
								<td>2018.11.26</td>
								<td><input type="button" value="수정" /> <input
									type="button" value="삭제" /></td>
							</tr>

							<tr>
								<td>서울</td>
								<td>마마카페</td>
								<td>2018.11.26</td>
								<td><input type="button" value="수정" /> <input
									type="button" value="삭제" /></td>
							</tr>

							<tr>
								<td>부산</td>
								<td>바바펜션</td>
								<td>2018.11.26</td>
								<td><input type="button" value="수정" /> <input
									type="button" value="삭제" /></td>
							</tr>

							<tr>
								<td>강릉</td>
								<td>사사호텔</td>
								<td>2018.11.26</td>
								<td><input type="button" value="수정" /> <input
									type="button" value="삭제" /></td>
							</tr>
							<tr>
								<td>서울</td>
								<td>아아식당</td>
								<td>2018.11.26</td>
								<td><input type="button" value="수정" /> <input
									type="button" value="삭제" /></td>
							</tr>

							<tr>
								<td>충청북도</td>
								<td>자자호텔</td>
								<td>2018.11.26</td>
								<td><input type="button" value="수정" /> <input
									type="button" value="삭제" /></td>
							</tr>

						</tbody>
					</table>

				</section>



				<nav class="page list">
					<div>
						<span><img src="../../../images/back.png"></span>
					</div>
					<div>
						<ul class="list">
							<li><a href="">1</a></li>
							<li><a href="">2</a></li>
							<li><a href="">3</a></li>
						</ul>
					</div>
					<div>
						<span><img src="../../../images/next.png"></span>

					</div>
				</nav>

				</main>
			</section>
		</div>
	</section>

	<jsp:include page="../../inc/footer.jsp" />

</body>
</html>