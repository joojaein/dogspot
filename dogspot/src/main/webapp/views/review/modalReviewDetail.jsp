<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<dialog id="modal-review-detail" class="modal">
	<form method="dialog">
		<img class="modal-x" src="/images/modal-x.png">
		<section class="modal-section list">
			<h1 class="hidden">디테일모달</h1>
			<section class="review-detail-image">
				<img src="/images/reviewImg.png"> <a href="">&lt;</a> <a href="">&gt;</a>
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
							<img class="btn good-true-icon hidden" src="/images/goodTrueIcon.png">
							<img class="btn good-false-icon" src="/images/goodFalseIcon.png">
						</dt>
						<dd>10</dd>
						<dt>
							<img src="/images/commentIcon.png">
						</dt>
						<dd>10</dd>
						<dt>
							<img src="/images/hitIcon.png">
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