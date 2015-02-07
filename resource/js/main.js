function headerSlider() {

	var slider = document.querySelector('.b-header-slider'),
		items  = slider.querySelectorAll('.b-header-slider__item'),
		w1 = 400,
		w2 = 192,
		w3 = 140;

	
	for (var i = items.length - 1; i >= 0; i--) {
		items[i].addEventListener('mouseenter', function(e) {
		
			e = e || window.e;
			var target = e.target || e.srcElement;

			if( target.getAttribute('class') !== 'b-header-slider__item') return;

			target.style.width = w1 + 'px';

			var p = target.parentNode.parentNode;
			
			if( p.hasChildNodes()) {
				var c = p.childNodes;

				for(var i = c.length - 1; i >= 0; i--) {

					var cc = c[i].childNodes;

					for(var i = cc.length - 1; i >= 0; i--) {
						if( cc[i].hasAttribute('class') === 'b-header-slider__item') {
							cc[i].style.width = w3 + 'px';
						}
						console.log(cc[i]);
					}

				}

				
			}

		
			target.addEventListener('mouseleave', function(ev) {
						
				ev = ev || window.ev;
				var target = ev.target || ev.srcElement;	

				this.style.width = 192 + 'px';
		
			}, false);
		
		}, false);
	}

}


var d1 = new Date();
document.body.onload = function() {
	headerSlider();
};
var d2 = new Date();
console.log(d2 - d1);
