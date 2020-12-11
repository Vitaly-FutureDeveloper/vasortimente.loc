(function () {
	var isScrolling = false;

	window.trottle = function (onFunction) {
		/**
		* //Троттлинг для событий, например скролл
		* @param {function} рабочая функция
		*/
		if (!isScrolling){
			window.requestAnimationFrame(function () {
				onFunction();
				isScrolling = false;
			});
		}
		isScrolling = true;
	};


})();