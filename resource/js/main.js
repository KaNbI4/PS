function headerSlider() { 
	var slider =   document.querySelector('.b-header-slider'),
		 items =   slider.querySelectorAll('.b-header-slider__item'),
		    w1 =   400,
		    w2 =   192,
		    w3 =   140;   

	
	for (var i = items.length - 1; i >= 0; --i) {
		items[i].addEventListener('mouseenter', function(e) {
		
			e = e || window.e;
			var target = e.target || e.srcElement;

			if( target.getAttribute('class') !== 'b-header-slider__item') return;

			target.style.width = w1 + 'px';
			
			var p = target.parentNode;
			p.setAttribute('class', 'hover');

			var a = slider.getElementsByTagName('A');

			for(var i = 0; i < a.length; ++i) {
				if( !a[i].hasAttribute('class')) {

					a[i].firstChild.nextSibling.style.width = w3 + 'px';
				}
			}
		
			target.addEventListener('mouseleave', function() {
						
				this.style.width = 192 + 'px';
				
				var p = this.parentNode;
				p.removeAttribute('class');

				var a = slider.getElementsByTagName('A');

				for(var i = 0; i < a.length; ++i) {
					a[i].firstChild.nextSibling.style.width = w2 + 'px';
				}
			
			}, false);
		
		}, false);
	}


}

function contentSlider() {
	var slider = document.querySelector('.b-content-slider-wrap');

	
	
}

function imgClick() {
	var elem = document.querySelector('.b-news-item__img');

	function init() {
		elem.addEventListener('click', function(e) {
			e = e || window.e;
			var target    = e.target || e.srcElement,
				img,
				div       = document.createElement('div'),
				imgClose  = document.createElement('div');

			div.setAttribute('class', 'img-open');

			img = this.cloneNode(true);
			img.setAttribute('class', 'b-news-item__img_cc');
			imgClose.setAttribute('class', 'img-close')

			img.appendChild(imgClose);
			div.appendChild(img);
			document.body.appendChild(div);

			div.addEventListener('click', function() {
				document.body.removeChild(this);
			}, false);

			document.addEventListener('keydown', function(evt) {
				evt = evt || window.evt;	
				if( evt.which == '27') {
					document.body.removeChild(div);
				}

			}, false);

		}, false);
	}

	init();
}


document.addEventListener('DOMContentLoaded', function() {
	headerSlider();
	contentSlider();
	imgClick();
}, false);

