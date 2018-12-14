<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<dialog id="modal-review-reg-content" class="modal">
	<form method="dialog">
		<img class="modal-x" src="/images/modal-x.png">
		<section class="modal-section list">
			<h1 class="hidden">장소선택모달</h1>
			<section class="review-detail-image">
				<img src="/images/reviewImg.png"> <a href="">&lt;</a> <a href="">&gt;</a>
			</section>		
			<section class="review-detail-contents">
				<section class="review-top list">
					<img src="/images/profile.png">
					<div>dogstpot</div>
					<input class="btn" type="submit" value="리뷰등록">
				</section>
				
				
				<section class="review-center">
					<hr class="review-hr" />
					<section class="review-spot-list">
						<div>
							<label>리뷰할 장소 선택 </label><img class="btn" src="/images/pageDownImg.png" /><br>
						</div>
						<input class="hidden" placeholder="장소명" type="text">
						<ul class="hidden"> </ul>
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