$(document).ready(function() {

	// ANIMATE PAGE SCROLL
	$('#scrolldown').click(function() {
		$('html, body').animate({
			scrollTop: $('#start').offset().top
		});
		return false;
	});

	$('#contactlink').click(function() {
		$('html, body').animate({
			scrollTop: $('#contact').offset().top
		}, 1000);
		return false;
	});

	$('#scrollup a').click(function() {
		$('html, body').animate({
			scrollTop: $('#header').offset().top
		}, 1000);
		return false;
	});

	// LOAD FEATURES
	$('#loadmore a').click(function() {
		return false;
	})

	if ($('#features > div > div').css('float') === 'left') 
		{
			$('#loadmore a img').click(function() {
				$('html, body').animate({
					scrollTop: $('#features').offset().top
				});
			});
		} else {
			$('#loadmore a img').click(function() {
				$('html, body').animate({
					scrollTop: $('#features').offset().top
				}, 0);
			});
		}

	$('#loadmore a').on('click', '.g1', function() {
		$('.group1').fadeOut(function() {
			$('.group2').each(function(i) {
				$(this).delay(200*i).fadeIn();
			});
		}).finish();
		$(this).attr('class', 'g2');
	});

	$('#loadmore a').on('click', '.g2', function() {
		$('.group2').fadeOut(function() {
			$('.group3').each(function(i) {
				$(this).delay(200*i).fadeIn();
			});
		}).finish();
		$(this).attr('class', 'g3');
	});

	$('#loadmore a').on('click', '.g3', function() {
		$('.group3').fadeOut(function() {
			$('.group1').each(function(i) {
				$(this).delay(200*i).fadeIn();
			});
		}).finish();
		$(this).attr('class', 'g1');
	});

	// PLACEHOLDER FALLBACK
	$('[placeholder]').focus(function() {
	  var input = $(this);
	  if (input.val() == input.attr('placeholder')) {
		input.val('');
		input.removeClass('placeholder');
	  }
	}).blur(function() {
	  var input = $(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
		input.addClass('placeholder');
		input.val(input.attr('placeholder'));
	  }
	}).blur();
	$('[placeholder]').parents('form').submit(function() {
	  $(this).find('[placeholder]').each(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
		  input.val('');
		}
	  })
	});

	// CONTACT FORM VALIDATION
	$('#contactform').submit(function() {
		var name = $('#contactform input:eq(0)').val();
		var email = $('#contactform input:eq(1)').val();
		var phone = $('#contactform input:eq(2)').val();
		var company = $('#contactform input:eq(3)').val();
		var budget = $('#contactform select').val();
		var message = $('#contactform textarea').val();
		var dataString = 'name='+ name + '&email=' + email + '&phone=' + phone + '&company=' + company + '&budget=' + budget + '&message=' + message;

		if(name=='' || email=='' || message=='') {
			$('#alert span').html('Please fill in the required fields.');
			$('#alert').fadeIn().click(function() {
				$(this).fadeOut();
			});
		}
		else {
			$.ajax({
				type: 'POST',
				url: 'contact-form-handler.php',
				data: dataString,
				success: function(){
					$('#alert span').html('Thank you for your email! We will get back to you shortly.');
					$('#alert').fadeIn().click(function() {
						$(this).fadeOut();
					});
				}
			});
		}
		return false;
	});

});