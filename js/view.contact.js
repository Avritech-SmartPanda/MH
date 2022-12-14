
(function ($) {

    'use strict';


    // No White Space
    $.validator.addMethod("noSpace", function (value, element) {
        if ($(element).attr('required')) {
            return value.search(/[a-z0-9]/i) == 0;
        }

        return true;
    }, 'Please fill this empty field.');

	/*
	Assign Custom Rules on Fields
	*/
    $.validator.addClassRules({
        'form-control': {
            noSpace: true
        }
    });

	/*
	Contact Form: Basic
	*/
    $('#contactForm').validate({
        submitHandler: function (form) {

            var $form = $(form),
                $messageSuccess = $('#contactSuccess'),
                $messageError = $('#contactError'),
                $submitButton = $(this.submitButton),
                $errorMessage = $('#mailErrorMessage'),
                submitButtonText = $submitButton.val();

            $submitButton.val($submitButton.data('loading-text') ? $submitButton.data('loading-text') : 'Loading...').attr('disabled', true);

            // Ajax Submit
            $.ajax({
                type: 'POST',
                url: $form.attr('action'),
                data: {
                    name: $form.find('#name').val(),
                    email: $form.find('#email').val(),
                    surname: $form.find('#surname').val(),  
                    subject: $form.find('#subject').val(),
                    message: $form.find('#message').val()
                }
            }).always(function (data, textStatus, jqXHR) {

                $errorMessage.empty().hide();

                if (data.response == 'success') {

                    $messageSuccess.removeClass('dnone');
                    $messageError.addClass('dnone');

                    // Reset Form
                    $form.find('.form-control')
                        .val('')
                        .blur()
                        .parent()
                        .removeClass('has-success')
                        .removeClass('has-danger')
                        .find('label.error')
                        .remove();

                    if (($messageSuccess.offset().top - 80) < $(window).scrollTop()) {
                        $('html, body').animate({
                            scrollTop: $messageSuccess.offset().top - 80
                        }, 300);
                    }

                    $form.find('.form-control').removeClass('error');

                    $submitButton.val(submitButtonText).attr('disabled', false);

                    return;

                } else if (data.response == 'error' && typeof data.errorMessage !== 'undefined') {
                    $errorMessage.html(data.errorMessage).show();
                } else {
                    $errorMessage.html(data.responseText).show();
                }

                $messageError.removeClass('dnone');
                $messageSuccess.addClass('dnone');

                if (($messageError.offset().top - 80) < $(window).scrollTop()) {
                    $('html, body').animate({
                        scrollTop: $messageError.offset().top - 80
                    }, 300);
                }

                $form.find('.has-success')
                    .removeClass('has-success');

                $submitButton.val(submitButtonText).attr('disabled', false);

            });
        }
    });
   

	

}).apply(this, [jQuery]);