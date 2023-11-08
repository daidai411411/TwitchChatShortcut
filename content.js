document.addEventListener("keydown", function(event) {
	if (event.key == "c") {		
		let expand = document.querySelector("[aria-label='チャットを展開']");
		let collapse = document.querySelector("[aria-label='チャットを折りたたむ']");
		
		if (expand != null) {
			expand.click();
		}
		else if (collapse != null) {
			collapse.click();
		}
	}
});
