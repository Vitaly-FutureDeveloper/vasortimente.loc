(function () {
	const ACTIVE_CLASS = 'about__text--active';
	const ANIMATION_CLASS = 'tab-animation';
	const ACTIVE_BLOCK = 'scale__block--active';
	var buttonsWrap = document.querySelector('.scale');
	var buttons = document.querySelectorAll('.scale__button');
	var blocks = document.querySelectorAll('.about__text');

	buttonsWrap.addEventListener('click', function (evt) {
		for (let i = 0; i < buttons.length; i++) {
			if (evt.target.classList.contains('scale__button') && evt.target == buttons[i]){
				window.tabaction(buttons, blocks, i, ACTIVE_CLASS, ANIMATION_CLASS);
				onChangeButton(i);
			}
		}
	});

	function onChangeButton(i){
		buttons.forEach((item) => item.parentNode.classList.remove(ACTIVE_BLOCK));
		buttons[i].parentNode.classList.add(ACTIVE_BLOCK);
	}



})();