(function () {
	const ACTIVE_CLASS = 'about__text--active';
	const ANIMATION_CLASS = 'tab-animation';
	const ACTIVE_BLOCK = 'scale__block--active';

	var buttonsWrap = document.querySelector('.scale');
	var buttons = document.querySelectorAll('.scale__button');
	var blocks = document.querySelectorAll('.about__text');

	buttonsWrap.addEventListener('click', onChangeTabs);

	function onChangeTabs(evt) {
		/**
		 * Обработчик с делегировнием событий: на блок с кнопками
		 * @param evt {} - event object
		 */
		for (let i = 0; i < buttons.length; i++) {
			if (evt.target.classList.contains('scale__button') && evt.target == buttons[i]){
				/*
				 * Компонент : src\scripts\components\tabaction.js
				 * ТАБЫ (движок): Замена отображения блока в зависимости от нажатой кнопки
				 * @param obj {
				 *   buttons : [] - кнопки для нажатий,
				 *   blocks : [] - блоки на которые показываем в зависимости о номера нажатой кнопки,
				 *   active_class : string - задаваемый класс для активного блока для показа,
				 *   animation_class : string - задаваемый класс для активного блока для анимации,
				 * }
				 * @param i : number - номер нажатой кнопки из цикла с делегированием событий,
				 */
				window.tabaction({
					buttons : buttons,
					blocks : blocks,
					active_class : ACTIVE_CLASS,
					animation_class : ANIMATION_CLASS,
				}, i);

				/*
				 * Меняет класс родителя кнопки на статус активный
				 * @param i : number - номер нажатой кнопки из цикла с делегированием событий,
				 */
				сhangeButton(i);
			}
		}
	}

	function сhangeButton(i){
		/**
		 * Меняет класс родителя кнопки на статус активный
		 * @param i : number - номер нажатой кнопки из цикла с делегированием событий,
		 */
		buttons.forEach((item) => item.parentNode.classList.remove(ACTIVE_BLOCK));
		buttons[i].parentNode.classList.add(ACTIVE_BLOCK);
	}



})();