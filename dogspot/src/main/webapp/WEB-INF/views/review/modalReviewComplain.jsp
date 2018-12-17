<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<dialog id="modal-review-complain" class="modal complain-modal">
	<form method="dialog">
		<img class="complain-modal-x" src="/images/modal-x.png">
		<section class="modal-section">
			<h1 class="hidden">리뷰신고</h1>
			<div class="modal-title">리뷰 신고</div>
				<input type="text" class="modal-small-box" placeholder="제목" />
				<textarea placeholder="내용" class="modal-big-box" style="resize: none"></textarea>
				<input type="submit" class="send-btn" value="보내기" />
		</section>
	</form>
</dialog>