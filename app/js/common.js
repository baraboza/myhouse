$(function() {

$('input[type=tel]').mask('+7 (999) 999-99-99');

// header
	$('.header__toggle-menu').click(function() {
		$(this).toggleClass('toggle-menu--active');
		$("html,body").toggleClass("overflow-hidden");
		$('.header').toggleClass('header--open');
		if (window.matchMedia("(min-width: 768px)").matches) {
			$('.header__menu-tablet').fadeToggle();
		} else {
			$('.header__menu-mobile').fadeToggle();
		}
	});


// range
	$('.range input').each(function(index, element) {
		var min = $(element).attr('min');
		var max = $(element).attr('max');
		var length = max - min;
		$(element).parent().find('.range__fill').css('width', (($(element).val() - min) / length) * 100 + '%');
		$(element).parent().find('.range__value').html($(element).val());
	});

	$('.range input').on('input', function() {
		var min = $(this).attr('min');
		var max = $(this).attr('max');
		var length = max - min;
		$(this).parent().find('.range__fill').css('width', (($(this).val() - min) / length) * 100 + '%');
		$(this).parent().find('.range__value').html($(this).val());
	});


// section-reviews
	$('.section-reviews__list').slick({
		prevArrow: $('.section-reviews__arrow--prev'),
		nextArrow: $('.section-reviews__arrow--next'),
		infinite: false,
		dots: true,
		dotsClass: 'section-reviews__dots'
	});


// section-how
	$('.section-how__tab').click(function() {
		$('.section-how__tab--active').prop('disabled', false).removeClass('section-how__tab--active');
		$(this).prop('disabled', true).addClass('section-how__tab--active');
		$('.section-how__item').fadeOut(0);
		$('.section-how__item').eq($('.section-how__tab').index($(this))).fadeIn();
	});

	$('.section-how__button').click(function() {
		$('.section-how__modal').fadeIn();
		$("html,body").addClass("overflow-hidden");
	});


// section-questions
	$('.section-questions__question').click(function() {
		$(this).next().fadeToggle();
		$(this).find('.section-questions__arrow').toggleClass('section-questions__arrow--active');
	});


// scroll-form & scroll-button
	$(window).scroll(function() {
		if($(this).scrollTop() >= 1000) {
			$('.scroll-form').addClass('scroll-form--visible');
			$('.scroll-button').addClass('scroll-button--visible');
		}
		else{
			$('.scroll-form').removeClass('scroll-form--visible');
			$('.scroll-button').removeClass('scroll-button--visible');
		}
	});


// modal
	$('.modal__close').click(function() {
		$('.modal').fadeOut();
		$("html,body").removeClass("overflow-hidden");
	});


// account-popup
	$('.account-popup__close').click(function() {
		$(this).parent().fadeOut();
	});


// page-dry-clean
	$('.page-dry-clean .section-services__grid-item').click(function(e) {
		e.preventDefault();
		var index = $('.page-dry-clean .section-services__grid-item').index($(this));
		$('.section-services__modal').eq(index).fadeIn();
		$("html,body").addClass("overflow-hidden");
	});

});
