document.addEventListener("keydown", function(event) {
	if (event.key == "c") { // c キーが押されたならば
		// それぞれのボタンの要素を取得
		let expand = document.querySelector("[aria-label='チャットを展開']");
		let collapse = document.querySelector("[aria-label='チャットを折りたたむ']");
		
		// ボタンが存在すればクリックする
		if (expand != null) {
			expand.click();
		}
		else if (collapse != null) {
			collapse.click();
		}
	}
});
