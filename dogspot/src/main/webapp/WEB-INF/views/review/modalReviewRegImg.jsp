<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<dialog id="modal-review-reg-img" class="modal">
	<form method="dialog">
		<img class="modal-x" src="/images/modal-x.png">
		<section class="modal-section">
			<h1 class="hidden">이미지등록모달</h1>
			<section class="reg1-top">
				<input style="display: none" type="file" /> 
				<div class="btn">
					<img class="btn" src="/images/monitorImg.png">
					내 PC</div>
				<input class="btn" type="button" value="올 리 기">
				<hr>
			</section>
			<section class="list">
				<section class="side-imgs">
					<ul class="list reviewImg">
						<li><img src="/images/regImg.png" /><img src="/images/titleImg.png" /></li>
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
				<!-- <section class="title-img">
					<img src="/images/regImg.png" /> <img src="/images/titleImg.png" />
				</section> -->
				<section class="dnd">
					<img src="/images/regImgs.png"/>
					<div>빠르게 사진 올리기 </div>
					<div>원하는 이미지를 이곳에 끌어다 놓으면 사진을 쉽게 올릴 수 있습니다.</div>
				</section>
			</section>
		</section>
	</form>
</dialog>