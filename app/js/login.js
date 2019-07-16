$(function() {

	$('.section-login__button--submit').on('click', function(e) {
		e.preventDefault();
		var phone = $('.section-login__input[type="tel"]').val();
		if (phone) {
			$('.section-login__text').html('Мы отправили сообщение с кодом подтверждения на ваш номер<br>' + phone);
		}
	});

});