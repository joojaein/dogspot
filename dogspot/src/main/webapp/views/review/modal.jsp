<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
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
				<img src="/images/reviewImg.png"> <a href=""> <</a> <a href="">>
				</a>
			</section>
			<section class="review-detail-contents">
				<section class="review-top list">
					<img src="/images/profile.png">
					<div>dogstpot</div>
					<ul class="list">
						<input class="btn" type="button" value="수정">
						<input class="btn" type="button" value="삭제">
						<input class="btn" type="button" value="...">
					</ul>
				</section>
				<section class="review-center">
					<hr class="review-hr" />
					<div>가가카페</div>
					<section class="review-report">
						<div>제목</div>
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
						<div>
							<a href="">수정</a>
						</div>
						<div>
							<a href="">삭제</a>
						</div>
					</section>
					</template>
				</section>
				<hr class="review-hr">
				<section class="review-bottom">
					<dl class="review-rank review-rank-flex">
						<dt>
							<img src="/images/likesImg.png">
						</dt>
						<dd>10</dd>
						<dt>
							<img src="/images/commentsImg.png">
						</dt>
						<dd>10</dd>
						<dt>
							<img src="/images/hitImg.png">
						</dt>
						<dd>10</dd>
					</dl>
					<div>2018년12월01일</div>
					<hr class="review-hr">
                    <input type="text" placeholder="댓글 달기..">
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
				<input style="display: hidden" type="file" /> <img class="btn"
					src="/images/monitorImg.png">
				<div class="btn">내 PC</div>
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
					<img src="/images/regImg.png" /> <img src="/images/titleImg.png" />
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
				<img src="/imafges/reviewImg.png"> <a href=""><</a> <a href="">></a>
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
				<img src="/images/reviewImg.png"> <a href=""><</a> <a href="">></a>
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
						<div>
							리뷰할 장소 선택 <img class="btn" src="/images/pageUpImg.png" /><br>
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