function slide() {
	console.log('load');

	var left   = document.querySelector('.left'),
		right  = document.querySelector('.right'),
		slider = document.querySelector('.b-ring-slider'),
		items  = document.querySelectorAll('.b-ring__item').length;



		function animate(slider, sign, start, end) {
			var left = 0,
				step = 21;

			function move() {

				left += step;

				if(sign == 'min') {
					
					slider.style.marginLeft = parseInt(window.getComputedStyle(slider, null).getPropertyValue('margin-left')) - step + 'px';
				} else {
					slider.style.marginLeft = parseInt(window.getComputedStyle(slider, null).getPropertyValue('margin-left')) + step + 'px';
				}

				if( left == 945) {
					clearInterval(timer);
				}
			}

			var timer = setInterval(move, 30);
		}

	function init() {
		var start = 0,
			end = -1890,
			shift = 945;
			

		right.addEventListener('click', function() {

			if( parseInt(window.getComputedStyle(slider, null).getPropertyValue('margin-left')) != end){

				animate(slider, 'min', start, end);

			} else {
				slider.style.marginLeft = start + 'px';
			}

		},false);	

		left.addEventListener('click', function() {
		
			if( parseInt(window.getComputedStyle(slider, null).getPropertyValue('margin-left')) != start){

				animate(slider, 'plus');

			} else {
				slider.style.marginLeft = start + 'px';
			}

		}, false);	
	}

	init();
}

document.body.onload = function (e) {
	slide();
}
