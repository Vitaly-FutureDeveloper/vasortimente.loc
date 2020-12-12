(function () {

	window.tabaction = function(obj, i) {
		/**
		 * Компонент : src\scripts\components\tabaction.js
		 * ТАБЫ (движок): Замена отображения блока в зависимости от нажатой кнопки
		 * @param obj / {
		 *   buttons : [] - кнопки для нажатий,
		 *   blocks : [] - блоки на которые показываем в зависимости о номера нажатой кнопки,
		 *   active_class : string - задаваемый класс для активного блока для показа,
		 *   animation_class : string - задаваемый класс для активного блока для анимации,
		 * }
		 * @param i : number - номер нажатой кнопки из цикла с делегированием событий,
		 */
		obj.blocks.forEach((item) => item.classList.remove(obj.active_class));
		obj.blocks[i].classList.add(obj.active_class);
		if(obj.animation_class) {
			obj.blocks.forEach((item) => item.classList.remove(obj.animation_class));
			obj.blocks[i].classList.add(obj.animation_class);
		}
	};

})();