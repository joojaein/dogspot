<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<link href="https://fonts.googleapis.com/css?family=Jua&amp;subset=korean" rel="stylesheet">
<link href="../../css/statistic.css" type="text/css" rel="stylesheet" />
<script src="../../js/chart.js"></script>
<script src="../../js/statistic.js"></script>
</head>
<body>
        <jsp:include page="../inc/header.jsp" />

        <section id="body">
                <div class="center">
                    <h1 class="hidden">바디</h1>
                    <section class="list">
                            <jsp:include page="aside.jsp" />

                        <main>
                            <div id="mypage-title">통계 관리</div>
                            <section id="chart-option">
                                <div>
                                    <input class="checkbox" type="checkbox" checked=true name="가입자수"> 가입자수
                                </div>
                                <div>
                                    <input class="checkbox" type="checkbox" checked=true name="방문자수"> 방문자수
                                </div>
                                <div>
                                    <input class="checkbox" type="checkbox" checked=true name="리뷰 등록수"> 리뷰
                                </div>
                                <div>
                                    <input class="checkbox" type="checkbox" checked=true name="댓글 등록수"> 댓글
                                </div>
                                <div>
                                    <input class="checkbox" type="checkbox" checked=true name="좋아요 등록수"> 좋아요
                                </div>
                                <div>
                                    <select>
                                        <option value="연도별">연도별</option>
                                        <option value="월별">월별</option>
                                        <option value="일별">일별</option>
                                    </select>
                                </div>
                                <div class="date-div">
                                    <input type="date" name="date_begin" value="2017-01-01">
                                </div>
                                ~
                                <div class="date-div">
                                    <input type="date" name="date_end" value="2018-10-30">
                                </div>
                            </section>
        
                            <section id="chart">
                                <div id="chart_div"></div>
                            </section>
                       
                            <section id="statistic-table">
                                <table border="1">
                                    <thead>
                                        <tr>
                                            <td>기간</td>
                                            <td>가입자수</td>
                                            <td>방문자수</td>
                                            <td>리뷰</td>
                                            <td>댓글</td>
                                            <td>좋아요</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>8월1일~8월31일</td>
                                            <td>10</td>
                                            <td>30</td>
                                            <td>10</td>
                                            <td>30</td>
                                            <td>40</td>
                                        </tr>
                                        <tr>
                                            <td>9월1일~9월31일</td>
                                            <td>12</td>
                                            <td>40</td>
                                            <td>15</td>
                                            <td>35</td>
                                            <td>20</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                        </main>
                    </section>
                </div>
            </section>

        <jsp:include page="../inc/footer.jsp" />

</body>
</html>