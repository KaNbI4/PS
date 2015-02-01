function slide() {
	var frame = $('.b-slider-slide__frame'),
		items = $('.b-slider-items .b-slider-item');

	frame.html( items.eq(0).clone(true) );	
	frame.find('.b-slider-item').removeClass('select');

	function init() {

		items.on('click', function() {

			if( !$(this).hasClass('select')) {
				$('.select').removeClass('select');	
				$(this).addClass('select');

				var copy = $(this).clone(true);
				frame.html(copy);
				frame.find('.b-slider-item').removeClass('select');
			} 

		});
	}	

	init();
}


function cut() {
	var p = $('.b-content-tech__item p');

	p.each(function() {
		if( $(this).height() > 32 ) {
			$(this).addClass('bigHeight')
		}
	});
}

$(document).ready(function() {
	slide();
	cut();
});