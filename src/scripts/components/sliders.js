(function () {
	var slideIndex = 1;

	window.sliders = {
		slideIndex : 1,

		plusSlides(n) {
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
			this.showSlides(slideIndex += n);
		},
		currentSlide(n) {
			/*
			* Скрывает все слайды
			* Показывает 1 слайд активным
			* Показывает соседние слайды неактивными
			* @param {n} - slideIndex
			*/
			this.showSlides(slideIndex = n);
		},

		inactive() {
			/**
			 * Захват всех неактивных боковых блоков
			 * Задание классов для неактивных, чтоб сместить блоки друг к другу
			 * @param {}
			 */
			//var inactive = document.querySelectorAll('.rewiews-list__item--inactive');
			var inactive = {};
			inactive.push(slides[slideIndex - 1]);
			inactive.push(slides[slideIndex + 1]);


			for(let i = 0; i < slides.length; i++){
				slides[i].classList.remove('rewiew-left');
				slides[i].classList.remove('rewiew-right');
			}
			inactive[0].classList.add('rewiew-left');
			inactive[1].classList.add('rewiew-right');
		},

		showSlides(n) {
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

			this.dotsChange();

			this.inactive();

			return slideIndex;
		},
		dotsChange : function(){
			dots.forEach(function(item) {
				item.classList.remove('slider-rewiews__dot--active')
			});
			dots[slideIndex - 1].classList.add('slider-rewiews__dot--active');
		},
		showCountDOM : function(from, to){
			from.textContent = slideIndex;
			to.textContent = slides.length - OFF_SLIDES;
		},
		eventWatch : {
			next : function () {
				next.addEventListener('click', function () {
					/*
					 * Переключает на другой слайд
					 * @param {n} - сколько слайдов переключить и в какую сторону
					 */
					plusSlides(1);
				});
			},
			prev : function () {
				prev.addEventListener('click', function () {
					/*
					 * Переключает на другой слайд
					 * @param {n} - сколько слайдов переключить и в какую сторону
					 */
					plusSlides(-1);
				});
			},
			slides : function () {
				for(let i = 0; i < slides.length; i++){
					slides[i].addEventListener('click', () => {
						currentSlide(i);
					});
				}
			},
			dots : function () {
				dotsWrap.addEventListener('click', function (evt) {
					for (let i = 0; i < dots.length + 1; i++){
						if (evt.target.classList.contains('slider-rewiews__dot') && evt.target == dots[i - 1]){
							currentSlide(i);
						}
					}
				});
			}
		},
	};

})();