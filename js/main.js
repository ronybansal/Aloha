// Smooth Scroll
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
// Flickity Slider




//Flickity Options
$('.main-carousel').flickity({
 cellAlign: 'left',
 contain: true,
 freeScroll: true,
 wrapAround: true,
 autoPlay: true
});

// Email Alert //
$(function() {
		$('.wave').on('submit', 'form', function(event) {
			event.preventDefault();
			var $email = $('.input');

			if ( $email.val().length === 0 ) {
				alert('Please submit a valid email address.');
				$email.val('');
			} else {
				alert('Thanks for subscribing!');
			}
		});
	});
