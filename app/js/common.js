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


// reviews
	$('.reviews__item').eq(0).addClass('reviews__item--focus');
	var reviewsItemWidth = $('.reviews__item--focus').css('width').replace('px', '');
	var reviewsIndex = 0;
	var reviewsMaxIndex = $('.reviews__item').length - 1;

	$('.reviews__button--next').click(function() {
		if (reviewsIndex < reviewsMaxIndex) {
			reviewsIndex++;
			$('.reviews__list').css('left', (-reviewsIndex * reviewsItemWidth) + 'px')
			$('.reviews__item--focus').next().addClass('reviews__item--focus');
			$('.reviews__item--focus').eq(0).removeClass('reviews__item--focus');
		}
	});

	$('.reviews__button--prev').click(function() {
		if (reviewsIndex > 0) {
			reviewsIndex--;
			$('.reviews__list').css('left', (-reviewsIndex * reviewsItemWidth) + 'px')
			$('.reviews__item--focus').prev().addClass('reviews__item--focus');
			$('.reviews__item--focus').eq(1).removeClass('reviews__item--focus');
		}
	});



});
