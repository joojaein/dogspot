<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<dialog id="modal-review-detail" class="modal">
	<form method="dialog">
		<img class="modal-x" src="/images/modal-x.png">
		<section class="modal-section list">
		<input type="hidden" name="reviewId">
			<h1 class="hidden">디테일모달</h1>
			<section class="review-detail-image">
				<img> <a class="left-a" href="">&lt;</a> <a class="right-a" href="">&gt;</a>
			</section>
			<section class="review-detail-contents">
				<section class="review-top list">
					<img src="/images/profile.png">
					<div id="regId">dogstpot</div>
					<ul class="list">
						<input class="btn" type="button" value="수정">
						<input class="btn" type="button" value="삭제">
						<input class="btn" type="button" value="...">
					</ul>
				</section>
				<section class="review-center">
					<hr class="review-hr" />
					<div id="name"></div>
					<section class="review-report">
						<div id="title"></div>
						<p id="content"></p>
					</section>
					<div class="text-hashtag"></div>
					<template id="review-comment-template">
					<section class="comments list">
						<div class="cmt-id"></div>
						<div class="cmt-content"></div>
						<input class="btn text-gray" type="button" value="수정">
						<input class="btn text-gray" type="button" value="삭제">
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
						<dd class="good"></dd>
						<dt>
							<img src="/images/commentIcon.png">
						</dt>
						<dd class="cmt"></dd>
						<dt>
							<img src="/images/hitIcon.png">
						</dt>
						<dd class="hit"></dd>
					</dl>
					<div id="regdate"></div>
					<hr class="review-hr">
                    <input type="text" placeholder="댓글 달기..">
				</section>
			</section>
		</section>
	</form>
</dialog>