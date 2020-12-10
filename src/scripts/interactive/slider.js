(function () {

	var slideIndex = 1;
	var prev = document.querySelector('.slider-rewiews__prev');
	var next = document.querySelector('.slider-rewiews__next');
	var slides = document.querySelectorAll('.rewiews-list__item');
	var from = document.querySelector('.slider-rewiews__from');
	var to = document.querySelector('.slider-rewiews__to');

	function showSlides(n) {
		/**
		* Скрывает все слайды
		* Показывает 1 слайд активным
		* Показывает соседние слайды неактивными
		* @param {n} - slideIndex
		*/
		if(n > slides.length)
			slideIndex = 1;
		if(n < 1)
			slideIndex = slides.length - 2;

		slides.forEach((item) => item.classList.add('rewiews-list__item--none'));

		slides[slideIndex].classList.remove('rewiews-list__item--none');

		slides[slideIndex].classList.add('rewiews-list__item--active');

		slides[slideIndex - 1].classList.remove('rewiews-list__item--none');
		slides[slideIndex - 1].classList.remove('rewiews-list__item--active');

		slides[slideIndex + 1].classList.remove('rewiews-list__item--none');
		slides[slideIndex + 1].classList.remove('rewiews-list__item--active');

		from.textContent = slideIndex;
		to.textContent = slides.length - 2;
	}

	/*
	* Скрывает все слайды
	* Показывает 1 слайд активным
	* Показывает соседние слайды неактивными
	* @param {n} - slideIndex
	*/
	showSlides(slideIndex);

	function plusSlides(n) {
		/**
		* Переключает на другой слайд
		* @param {n} - сколько слайдов переключить и в какую сторону
		*/

		/*
		* Скрывает все слайды
		* Показывает 1 слайд активным
		* Показывает соседние слайды неактивными
		* @param {n} - slideIndex
		*/
		showSlides(slideIndex += n);
	}
	/* Код для доработки
	function currentSlide(n) {
		/*
		* Скрывает все слайды
		* Показывает 1 слайд активным
		* Показывает соседние слайды неактивными
		* @param {n} - slideIndex
		*/
	//	showSlides(slideIndex = n);
//	}

	prev.addEventListener('click', function () {
		/*
		 * Переключает на другой слайд
		 * @param {n} - сколько слайдов переключить и в какую сторону
		 */
		plusSlides(-1);
	});
	next.addEventListener('click', function () {
		/*
		 * Переключает на другой слайд
		 * @param {n} - сколько слайдов переключить и в какую сторону
		 */
		plusSlides(1);
	});

})();