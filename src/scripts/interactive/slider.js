(function () {
	/**
	 * Блок слайдеров
	 * */

	/* CSS-Классы элементов слайдера */
	//Скрытые слайды - Display: none;
	const SLIDE_NONE = 'rewiews-list__item--none';
	//Слайды по бокам - opacity: 0.5;
	const SLIDE_INACTIVE = 'rewiews-list__item--inactive';
	//Активный слайд - opacity: 1;
	const SLIDE_ACTIVE = 'rewiews-list__item--active';

	/*Данные для отображения*/
	//Кол-во лишних блоков в слайдере
	const OFF_SLIDES = 2;

	var slideIndex = 1;
	var prev = document.querySelector('.slider-rewiews__prev');
	var next = document.querySelector('.slider-rewiews__next');
	var slides = document.querySelectorAll('.rewiews-list__item');

	var from = document.querySelector('.slider-rewiews__from');
	var to = document.querySelector('.slider-rewiews__to');

	var dots = document.querySelectorAll('.slider-rewiews__dot');
	var dotsWrap = document.querySelector('.slider-rewiews__dots-down');

	function showSlides(n) {
		var loop = true;
		/**
		* Скрывает все слайды
		* Показывает 1 слайд активным
		* Показывает соседние слайды неактивными
		* @param {n} - slideIndex
		*/
		if(!loop) {
			if (n > slides.length - OFF_SLIDES)
				slideIndex = slides.length - OFF_SLIDES;
			if (n < 1)
				slideIndex = 1;
		} else {
			if (n > slides.length - OFF_SLIDES)
				slideIndex = 1;
			if (n < 1)
				slideIndex = slides.length - OFF_SLIDES;
		}

		slides.forEach((item) => item.classList.add(SLIDE_NONE));
		slides.forEach((item) => item.classList.remove(SLIDE_INACTIVE));

		slides[slideIndex].classList.remove(SLIDE_NONE);

		slides[slideIndex].classList.add(SLIDE_ACTIVE);
		slides[slideIndex].classList.remove(SLIDE_INACTIVE);

		slides[slideIndex - 1].classList.remove(SLIDE_NONE);
		slides[slideIndex - 1].classList.remove(SLIDE_ACTIVE);
		slides[slideIndex - 1].classList.add(SLIDE_INACTIVE);

		slides[slideIndex + 1].classList.remove(SLIDE_NONE);
		slides[slideIndex + 1].classList.remove(SLIDE_ACTIVE);
		slides[slideIndex + 1].classList.add(SLIDE_INACTIVE);

		from.textContent = slideIndex;
		to.textContent = slides.length - OFF_SLIDES;

		dots.forEach(function(item) {
			item.classList.remove('slider-rewiews__dot--active')
		});
		dots[slideIndex - 1].classList.add('slider-rewiews__dot--active');

		inactive();
	}
	//document.addEventListener('click', () => console.log(slideIndex));

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
		* @param {n} - сколько слайдов переключить и в какую сторону 1 или -1
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


	dotsWrap.addEventListener('click', function (evt) {
		for (let i = 0; i < dots.length + 1; i++){
			if (evt.target.classList.contains('slider-rewiews__dot') && evt.target == dots[i - 1]){
				currentSlide(i);
			}
		}
	});

//
	function inactive() {
		/**
		 * Захват всех неактивных боковых блоков
		 * Задание классов для неактивных, чтоб сместить блоки друг к другу
		 * @param {}
		 */
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