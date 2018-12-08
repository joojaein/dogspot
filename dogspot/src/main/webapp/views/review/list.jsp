<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
    <script src="../../js/review.js"></script>
    <title>DogSpot</title>
    <link href="https://fonts.googleapis.com/css?family=Jua&amp;subset=korean" rel="stylesheet">
    <link href="../../css/review.css" type="text/css" rel="stylesheet" />
</head>

<body>

    <header class="list">
        <h1><a href=""><img src="/images/logo.png" /></a></h1>

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

            <main>
                <section id="review-search">
                    <h1 class="hidden"> 검색폼</h1>
                    <input type="text">
                    <ul class="list">
                        <li><a href="">최신순</a></li>
                        <li><a href="">조회순</a></li>
                        <li><a href="">좋아요순</a></li>
                        <li><a href="">댓글순</a></li>
                    </ul>
                </section>

                <input class="btn" type="button" value="리뷰쓰기">

                <section id="review-list">
                    <h1 class="hidden">리뷰 리스트</h1>
                    <template id="review-list-ul-template">
                        <ul class="list review-ul">
                        </ul>
                    </template>
                    <template id="review-list-li-template">
                        <li>
                            <a class="review-mainImg" href="">
                                <img src="/images/reviewImg.png" />
                                <section class="review-list-hover">
                               
                                    <section class="hover-back"></section>

                                    <div>
                                        <dl class="list">
                                                <dt><img src="/images/likesImg.png"></dt>
                                                <dd class="good-int"></dd>     
                                        </dl>
                                        <dl class="list">
                                                <dt><img src="/images/commentsImg.png"></dt>
                                                <dd class="cmt-int"></dd>                                           
                                        </dl>
                                        <dl class="list">
                                            <dt><img src="/images/hitImg.png"></dt>
                                            <dd class="hit-int"></dd>
                                        </dl>
                                    </div>

                                    <section class="hover-parency"></section> 
                              
                            </section>
                        </a>
                                <div class="review-name text-overflow-ellipsis"></div>
                                <div class="review-title text-overflow-ellipsis"></div>
                            
                        </li>
                    </template>
                </section>
            </main>
        </div>
    </section>
    <footer>
        <section>
            <h1 class="hidden">푸터</h1>
        </section>
    </footer>

    <section id="modals">
        <h1 class="hidden">모달</h1>
        <section class="modal-back">
            <h1 class="hidden">모달 백</h1>
        </section>

        <dialog id="modal-review-detail" class="modal">
            <form method="dialog">
                <img class="modal-x" src="/images/modal-x.png">
                <section class="modal-section list">
                    <h1 class="hidden">디테일모달</h1>
                    <section class="review-detail-image">
                        <img src="/images/reviewImg.png">
                        <a href="">
                            <</a> <a href="">>
                        </a>
                    </section>
                    <section class="review-detail-contents">
                        <section class="review-top list">
                            <img src="/images/profile.png">
                            <div>dogstpot</div>
                            <ul class="list">
                                <input type="button" value="수정">
                                <input type="button" value="삭제">
                                <input type="button" value="...">
                            </ul>
                        </section>
                        <section class="review-center">
                            <hr class="review-hr" />
                            <div>가가카페</div>
                            <section class="review-report">
                                <div>
                                    제목
                                </div>
                                <p>
                                    내용내용123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
                                    내용내용123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
                                </p>
                            </section>
                            <div class="text-hashtag">#해시태그</div>
                            <template id="review-comment-template">
                                <section class="comments list">
                                    <div class="cmt-id"></div>
                                    <div class="cmt-content"></div>
                                    <div><a href="">수정</a></div>
                                    <div><a href="">삭제</a></div>
                                </section>
                            </template>
                        </section>
                        <hr class="review-hr">
                        <section class="review-bottom">
                            <dl class="review-rank review-rank-flex">
                                <dt><img src="/images/likesImg.png"></dt>
                                <dd>10</dd>
                                <dt><img src="/images/commentsImg.png"></dt>
                                <dd>10</dd>
                                <dt><img src="/images/hitImg.png"></dt>
                                <dd>10</dd>
                            </dl>
                            <div>2018년12월01일</div>
                            <hr class="review-hr">
                            <input placeholder="댓글 달기.." type="text">
                        </section>
                    </section>
                </section>
            </form>
        </dialog>

        <dialog id="modal-review-reg-img" class="modal">
            <form method="dialog">
                <img class="modal-x" src="/images/modal-x.png">
                <section class="modal-section">
                <h1 class="hidden">이미지등록모달</h1>
                    <section class="reg1-top">
                        <input style="display: hidden" type="file"/>
                        <img  class="btn" src="/images/monitorImg.png">
                        <div  class="btn">내 PC</div>
                        <input class="btn" type="button" value="올 리 기">
                        <hr>
                    </section>
                    <section class="list">
                        <section class="side-imgs">
                            <ul class="list reviewImg">
                                <li><img src="/images/regImg.png" /></li>
                                <li><img src="/images/regImg.png" /></li>
                                <li><img src="/images/regImg.png" /></li>
                            </ul>
                            <ul class="list reviewImg">
                                <li><img src="/images/regImg.png" /></li>
                                <li><img src="/images/regImg.png" /></li>
                                <li><img src="/images/regImg.png" /></li>
                            </ul>
                            <ul class="list reviewImg">
                                <li><img src="/images/regImg.png" /></li>
                                <li><img src="/images/regImg.png" /></li>
                                <li><img src="/images/regImg.png" /></li>
                            </ul>
                        </section>
                        <section class="title-img">
                            <img src="/images/regImg.png" />
                            <img src="/images/titleImg.png" />
                        </section>
                    </section>
                </section>
            </form>
        </dialog>

        <dialog id="modal-review-reg-report" class="modal">
            <form method="dialog">
                <img class="modal-x" src="/images/modal-x.png">
                <section class="modal-section list">
                    <h1 class="hidden">내용입력모달</h1>
                    <section class="review-detail-image">
                        <img src="/images/reviewImg.png">
                        <a href=""><</a> 
                        <a href="">></a>
                    </section>
                    <section class="review-detail-contents">
                        <section class="review-top list">
                            <img src="/images/profile.png">
                            <div>dogstpot</div>
                            <input class="btn" type="button" value="리뷰등록">
                        </section>
                        <section class="review-center">
                            <hr class="review-hr" />
                            <section class="review-spot-list">
                                <div>
                                    리뷰할 장소 선택 <img class="btn" src="/images/pageDownImg.png" /><br>
                                </div>
                            </section>
                            <hr class="review-hr" />
                            <section class="review-report">
                                <input placeholder="리뷰 제목" type="text"><br>
                                <textarea placeholder="리뷰 내용"></textarea>

                            </section>
                        </section>
                        <hr class="review-hr" />
                        <section class="review-bottom">
                            <div class="text-hashtag">#해시태그</div>
                        </section>
                    </section>
                </section>
            </form>
        </dialog>

        <dialog id="modal-review-reg-spot" class="modal">
            <form method="dialog">
                <img class="modal-x" src="/images/modal-x.png">
                <section class="modal-section list">
                    <h1 class="hidden">장소선택모달</h1>
                    <section class="review-detail-image">
                        <img src="/images/reviewImg.png">
                        <a href=""><</a> 
                        <a href="">></a>
                    </section>
                    <section class="review-detail-contents">
                        <section class="review-top list">
                            <img src="/images/profile.png">
                            <div>dogstpot</div>
                            <input class="btn" type="button" value="리뷰등록">
                        </section>
                        <section class="review-center">
                            <hr class="review-hr" />
                            <section class="review-spot-list">
                                <template id="review-spot-li-template">
                                    <li><a href=""></a></li>
                                </template>
                                <div>리뷰할 장소 선택
                                     <img class="btn" src="/images/pageUpImg.png" /><br>
                                </div>
                                <input placeholder="장소명" type="text">
                                <ul>
                                </ul>
                            </section>
                            <hr class="review-hr" />
                            <section class="review-report">
                                <input placeholder="리뷰 제목" type="text"><br>
                                <textarea placeholder="리뷰 내용"></textarea>
                            </section>
                        </section>
                        <hr class="review-hr" />
                        <section class="review-bottom">
                            <div class="text-hashtag">#해시태그</div>
                        </section>
                    </section>
                </section>
            </form>
        </dialog>
    </section>
</body>

</html>