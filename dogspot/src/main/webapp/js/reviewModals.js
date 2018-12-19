window.addEventListener("load",
		function() {

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

			dialogArr = [ dialogDetail, dialogImg, dialogContent,
					dialogReviewComplain, dialogCommentComplain ];

			closeModal = function() {
				for (var i = 0; i < dialogArr.length; i++) {
					if (dialogArr[i].open) {
						modalBack.style.display = "none";
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
				modalBack.style.display = "unset";
				dialogDetail.showModal();
			}

			showDialogImg = function() {
				modalBack.style.display = "unset";
				dialogImg.showModal();
			}

			showDialogContent = function() {
				modalBack.style.display = "unset";
				dialogContent.showModal();
			}

			showDialogReviewComplain = function() {
				modalBack.style.display = "unset";
				dialogReviewComplain.showModal();
			}

			showDialogCommentComplain = function() {
				modalBack.style.display = "unset";
				dialogCommentComplain.showModal();
			}

		});