$(function() {

$('input[type=tel]').mask('+7 (999) 999-9999');

// header
	$('.header__toggle-menu').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('toggle-menu--active');
		// $('.header-footer__mobile').fadeToggle();
		// $("html,body").toggleClass("overflow-hidden");
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


// section-questions
	$('.section-questions__question').click(function() {
		$(this).next().fadeToggle();
		$(this).find('.section-questions__arrow').toggleClass('section-questions__arrow--active');
	});

});
