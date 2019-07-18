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


// select
	$('.select select').selectric();


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
	$('.page--dry-clean .section-services__grid-item').click(function(e) {
		e.preventDefault();
		var index = $('.page--dry-clean .section-services__grid-item').index($(this));
		$('.section-services__modal').eq(index).fadeIn();
		$("html,body").addClass("overflow-hidden");
	});


// calc-flat
	var calcFlatType = 'support';
	var calcFlatIndex = 0;
	var calcFlatValues = {
		'support': [
			1990, 2280, 2520, 2760, 2940, 3120, 3300, 3630, 3960, 4290, 4620, 4950, 5280, 5610, 5940, 6270, 6600, 6930, 7260, 7590, 7920, 8250, 8580, 8910, 9240, 9570, 9900, 10230, 10560, 10890, 11220, 11550, 11880, 12210, 12540, 12870, 13200
		],
		'general': [
			6990, 7690, 8490, 9450, 9890, 10290, 10790, 11190, 12290, 12690, 13390, 13990, 14890, 15790, 16690, 17590, 18490, 19390, 20290, 21190, 22090, 22990, 23890, 24790, 25690, 26590, 27490, 28390, 29290, 30190, 31090, 31990, 32890, 33790, 34690, 35590, 36490
		]
	}

	$('.calc-flat__range').on('input', function() {
		calcFlatIndex = $(this).val()/10 - 4;
		$(this).parents('.calc-flat').find('.calc-flat__value').html(calcFlatValues[calcFlatType][calcFlatIndex]);
	});

	$('.calc-flat__type').change(function() {
		calcFlatType = $(this).val();
		$(this).parents('.calc-flat').find('.calc-flat__value').html(calcFlatValues[calcFlatType][calcFlatIndex]);
	});

// calc-window
	var calcWindowType;
	var calcWindowIndex = 0;
	var calcWindowValues = {
		'solid-one': [
			990, 1190, 1390, 1590, 1890, 2090, 2290, 2490, 2690, 2990, 3190, 3290, 3480, 3670, 3860, 4050, 4240, 4430, 4620, 4810, 5000, 5190, 5380, 5570, 5760, 5950, 6140, 6330, 6520, 6710, 6900, 7090, 7280, 7470, 7660, 7850, 8040
		],
		'solid-two': [
			1590, 1890, 2190, 2490, 2890, 3190, 3490, 3890, 4190, 4490, 4790, 4990, 5280, 5570, 5860, 6150, 6440, 6730, 7020, 7310, 7600, 7890, 8180, 8470, 8760, 9050, 9340, 9630, 9920, 10210, 10500, 10790, 11080, 11370, 11660, 11950, 12240
		],
		'double-two': [
			2490, 2990, 3490, 3990, 4690, 5090, 5590, 6190, 6690, 7190, 7690, 7990, 8450, 8910, 9370, 9830, 10290, 10750, 11210, 11670, 12130, 12590
		]
	}

	$('.calc-window__range').on('input', function() {
		calcWindowIndex = $(this).val()/10 - 4;
		$(this).parents('.calc-window').find('.calc-window__value').html(calcWindowValues[calcWindowType][calcWindowIndex]);
	});

	$('.calc-window__type').change(function() {
		calcWindowType = $(this).val();

		var max = (calcWindowValues[calcWindowType].length + 3) * 10;
		var form = $(this).parents('.calc-window');
		var range = form.find('.calc-window__range');
		range.prop('max', max);
		
		var min = range.attr('min');
		var max = range.attr('max');
		var length = max - min;
		form.find('.range__fill').css('width', ((range.val() - min) / length) * 100 + '%');
		form.find('.range__value').html(range.val());

		if (calcWindowIndex > calcWindowValues[calcWindowType].length - 1) {
			calcWindowIndex = calcWindowValues[calcWindowType].length - 1;
		}

		form.find('.calc-window__value').html(calcWindowValues[calcWindowType][calcWindowIndex]);
	});


// calc-dry
	var calcDryType;
	var calcDryValues = {
		'serv1': 100,
		'serv2': 500,
		'serv3': 2150,
		'serv4': 1200,
		'serv5': 600,
		'serv6': 800,
		'serv7': 800,
		'serv8': 1600,
		'serv9': 790,
		'serv10': 1290,
		'serv11': 600,
		'serv12': 950,
		'serv13': 950,
		'serv14': 170,
		'serv15': 270,
		'serv16': 290,
		'serv17': 490,
		'serv18': 300,
		'serv19': 500,
		'serv20': 950,
		'serv21': 1800,
		'serv22': 220,
		'serv23': 240,
		'serv24': 300,
		'serv25': 250,
		'serv26': 250,
		'serv27': 200,
		'serv28': 500,
		'serv29': 140,
		'serv30': 180,
		'serv31': 700,
		'serv32': 800,
		'serv33': 950,
		'serv34': 950,
		'serv35': 1500,
		'serv36': 1950,
		'serv37': 500,
		'serv38': 800,
		'serv39': 950,
		'serv40': 2000,
		'serv41': 900,
		'serv42': 1200,
		'serv43': 500,
		'serv44': 100,
		'serv45': 500,
		'serv46': 180,
		'serv47': 250,
		'serv48': 400,
		'serv49': 250,
		'serv50': 1500,
		'serv51': 200
	}

	$('.calc-dry__type').change(function() {
		calcDryType = $(this).val();
		$(this).parents('.calc-dry').find('.calc-dry__value').html(calcDryValues[calcDryType]);
	});


//	ajax-form


	$('.send-ajax').submit(function(e) {
		var form = $(this);
		form.find('button[type="submit"]').prop('disabled', true);
		$.ajax({
			url: 'php/send.php',
			type: "POST",
			dataType: "html", 
			data: $(this).serialize(),  
			success: function(response) { 
				alert('Заявка успешно отправлена');
				form.find('input[type="tel"]').val('');
			},
			error: function(response) {
				alert('Произошла ошибка, заявка не отправлена');
			}
		});
		form.find('button[type="submit"]').prop('disabled', false);
		return false;
	});


});
