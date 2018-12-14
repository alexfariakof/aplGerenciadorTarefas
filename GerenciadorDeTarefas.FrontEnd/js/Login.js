$(document).ready(function () {
    regiterValidators();
});

function regiterValidators() {
    ContentPlaceHolder1_inputEmail
    ContentPlaceHolder1_inputSenha

    $('#ContentPlaceHolder1_inputEmail').on('input', function () {
        var input = $(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email = re.test(input.val());
        if (is_email) { input.removeClass("invalid").addClass("valid"); }
        else { input.removeClass("valid").addClass("invalid"); }
    });

    $('#ContentPlaceHolder1_inputSenha').keyup(function (event) {
        var input = $(this);
        var message = $(this).val();
        if (message) { input.removeClass("invalid").addClass("valid"); }
        else { input.removeClass("valid").addClass("invalid"); }
    });

}

function isFormValid() {
    var element;
    var valid;
    var retorno = false;

    element = $('#ContentPlaceHolder1_inputEmail');
    valid = element.hasClass("valid");
    if (!valid) {
        $("#msgEmail").css('visibility', 'visible');
        return false;
    }
    else {
        $("#msgEmail").css('visibility', 'hidden');
    }

    element = $('#ContentPlaceHolder1_inputSenha');
    valid = element.hasClass("valid");
    if (!valid) {
        $("#msgSenha").css('visibility', 'visible');
        return false;
    }
    else {
        $("#msgSenha").css('visibility', 'hidden');
    }

    return true;
}