(function () {

	var slideIndex = 1;
	var prev = document.querySelector('.slider-rewiews__prev');
	var next = document.querySelector('.slider-rewiews__next');
	var slides = document.querySelectorAll('.rewiews-list__item');

	var from = document.querySelector('.slider-rewiews__from');
	var to = document.querySelector('.slider-rewiews__to');

	var dots = document.querySelectorAll('.slider-rewiews__dot');
	var dotsWrap = document.querySelector('.slider-rewiews__dots-down');

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
		slides.forEach((item) => item.classList.remove('rewiews-list__item--inactive'));

		slides[slideIndex].classList.remove('rewiews-list__item--none');

		slides[slideIndex].classList.add('rewiews-list__item--active');
		slides[slideIndex].classList.remove('rewiews-list__item--inactive');

		slides[slideIndex - 1].classList.remove('rewiews-list__item--none');
		slides[slideIndex - 1].classList.remove('rewiews-list__item--active');
		slides[slideIndex - 1].classList.add('rewiews-list__item--inactive');

		slides[slideIndex + 1].classList.remove('rewiews-list__item--none');
		slides[slideIndex + 1].classList.remove('rewiews-list__item--active');
		slides[slideIndex + 1].classList.add('rewiews-list__item--inactive');

		from.textContent = slideIndex;
		to.textContent = slides.length - 2;

		inactive();
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
	function currentSlide(n) {
		/*
		* Скрывает все слайды
		* Показывает 1 слайд активным
		* Показывает соседние слайды неактивными
		* @param {n} - slideIndex
		*/
		showSlides(slideIndex = n);
	}



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

	for(let i = 0; i < slides.length; i++){
		slides[i].addEventListener('click', () => {
			currentSlide(i);
		});
	}

	dots[0].classList.add('slider-rewiews__dot--active');
	dotsWrap.addEventListener('click', function (evt) {
		dots.forEach(function(item) {
			item.classList.remove('slider-rewiews__dot--active')
		});
		for (let i = 0; i < dots.length + 1; i++){
			if (evt.target.classList.contains('slider-rewiews__dot') && evt.target == dots[i - 1]){
				currentSlide(i);
				evt.target.classList.add('slider-rewiews__dot--active');
			}
		}
	});

//
	function inactive() {
		var inactive = document.querySelectorAll('.rewiews-list__item--inactive');

		for(let i = 0; i < slides.length; i++){
			slides[i].classList.remove('rewiew-left');
			slides[i].classList.remove('rewiew-right');
		}
		inactive[0].classList.add('rewiew-left');
		inactive[1].classList.add('rewiew-right');
	}
	inactive();


})();