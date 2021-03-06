window.addEventListener("load",function() {

		staticData=[];
		
		var modals = document.querySelector("#modals");
		var modalBack = modals.querySelector(".modal-back");

		var dialogDetail = modals.querySelector("#modal-review-detail");
		var dialogImg = modals.querySelector("#modal-review-reg-img");
		var dialogContent = modals
				.querySelector("#modal-review-reg-content");
		var dialogReviewComplain = modals
				.querySelector("#modal-review-complain");
		var dialogCommentComplain = modals
				.querySelector("#modal-comment-complain");

		var dialogArr = [ dialogDetail, dialogImg, dialogContent,
				dialogReviewComplain, dialogCommentComplain ];
		
		closeModal = function() {
			for (var i = 0; i < dialogArr.length; i++) {
				if (dialogArr[i].open) {
					dialogArr[i].close();
					return;
				}
			}
		}

		modals.addEventListener("click", function(evt) {
			if (evt.target.nodeName != "IMG")
				return;
			if (evt.target.className != "modal-x")
				return;
			closeModal();
		}, true);

		document.onkeydown = function(evt) {
			if (event.keyCode === 27) {
				evt.preventDefault();
			}
		}

		showDialogDetail = function() {
			dialogDetail.showModal();
		}

		showDialogImg = function() {
			dialogImg.showModal();
		}

		showDialogContent = function() {
			dialogContent.showModal();
		}

		showDialogReviewComplain = function() {
			dialogReviewComplain.showModal();
		}

		showDialogCommentComplain = function() {
			dialogCommentComplain.showModal();
		}

});