<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>관리자페이지 리스트</title>
<link
	href="https://fonts.googleapis.com/css?family=Jua&amp;subset=korean"
	rel="stylesheet">
<link href="../../../css/adminpageQna.css" type="text/css"
	rel="stylesheet" />
<link href="../../../css/commonAside.css" type="text/css"
	rel="stylesheet" />
<link href="../../../css/basicStyle.css" type="text/css"
	rel="stylesheet" />
<link href="../../../css/commonAdminMypage.css" type="text/css"
	rel="stylesheet" />

<script src="../../../js/admin_list.js"></script>
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
            <h1 class="hidden">바디</h1>
            <section class="list">
                <aside>

                    <h1 class="hidden">member-menu</h1>

                    <nav>
                        <h1><img src="/images/testprofile.png" /></h1>
                        <div>프로필</div>
                        <ul>
                            <li><a href="">통계관리</a></li>
                            <li><a href="" class="idx-page">데이터관리</a></li>
                            <li><a href="">회원요청</a></li>
                            <li><a href="">문의관리</a></li>
                            <li><a href="">회원관리</a></li>
                            <li><a href="">정보수정</a></li>

                        </ul>
                        
                    </nav>
                </aside>
               <main id="test">
                    <div id="mypage-title">문의 관리</div>
                    <div id="answerbtn"><input type="submit" value="답변하기" /></div>
                    <section>
                        <template class="row-template">
                            <tr class="trhere">
                                <td class="title"></td>
                                <td class="id"></td>
                                <td class="date"></td>
                                <td class="etc">
                                    <a href=""><input type="submit" value="수정" /> </a>
                                    <input type="submit" value="삭제" />
                                </td>
                            </tr>
							<tr class="contents"  style="display: none" ><!-- style="display: none" -->
								<td class="detail"  colspan="4">123</td>
							</tr>
						</template>
                        <!-- <template class="colspan-td">
                        	<tr id="contents" style="display:none">
                                <td colspan="4">
                                    123
                                </td>                        
                            </tr>
                        </template> -->
                        <table id="table1">
                         <thead>
                            <td>제목</td>
                            <td>작성자</td>
                            <td>작성일</td>
                            <td></td>

                         </thead>
                        <tbody>
                            <!-- <tr>
                                <td onclick="btntitle()">문의드립니다</td>
                                <td>dogspot</td>
                                <td>2018.10.01</td>
                                <td>
                                    <a href=""><input type="submit" value="수정" /> </a>
                                    <input type="submit" value="삭제" />
                                </td>
                            </tr>
                            <tr id="contents" style="display:none">
                                <td colspan="4">
                                    123
                                </td>
                        
                            </tr>
                            <tr>
                                <td>└ 답변 : 답변 드립니다 </td>
                                <td>dogspot</td>
                                <td>2018.10.01</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>가격 문의드립니다.</td>
                                <td>dogspot</td>
                                <td>2018.10.01</td>
                                <td>
                                    <a href=""><input type="submit" value="수정" /> </a>
                                    <input type="submit" value="삭제" />
                                </td>
                            </tr>
                            <tr>
                                <td>└ 답변 : 답변 드립니다</td>
                                <td>dogspot</td>
                                <td>2018.10.01</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>가격 문의드립니다.
                                </td>
                                <td>dogspot</td>
                                <td>2018.10.01</td>
                                <td>
                                    <a href=""><input type="submit" value="수정" /> </a>
                                    <input type="submit" value="삭제" />
                                </td>
                            </tr> -->
                        </tbody>
                        </table>

                    </section>
                    <section>
                        <div class="page_move">
                            <div><span><img src="/images/back.png" /></span></div>
                            <div>
                                <ul class="list">
                                    <li><a href="">1</a></li>
                                    <li><a href="">2</a></li>
                                    <li><a href="">3</a></li>
                                </ul>
                            </div>
                            <div><span><img src="/images/next.png" /></span></div>
                        </div>
                    </section>
                </main>
        </div>
    </section>
    <footer>
        <section>
            <h1 class="hidden">푸터</h1>

        </section>
    </footer>
</body>

</html>