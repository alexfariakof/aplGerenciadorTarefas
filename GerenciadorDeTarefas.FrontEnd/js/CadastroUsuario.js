$(document).ready(function () {
    regiterValidators();
});


function RegisterBtnSalvarOnClick() {
    ClearForm();
    $(".divSenha").css('visibility', 'visible');

    $('#ContentPlaceHolder1_btnSalvar').unbind('click');
    $('#ContentPlaceHolder1_btnSalvar').bind("click", function () { btnSalvarOnClick(); } );
}

function RegisterBtnAltualizarOnClick(id) {
    ClearForm();
    $('#ContentPlaceHolder1_inputNome').addClass("valid");
    $('#ContentPlaceHolder1_inputEmail').addClass("valid");
    $('#ContentPlaceHolder1_inputSenha').addClass("valid");
    $('#ContentPlaceHolder1_inputConfirmaSenha').addClass("valid");
    $('#ContentPlaceHolder1_btnSalvar').unbind('click');
    $(".divSenha").css('visibility', 'visible');


    var jsonUsuario = {
        "Id": id,
    };

    $.ajax({
        type: "POST",
        url: "handler/HCadastroUsuario.ashx?method=GetUsuarioById",
        data: JSON.stringify(jsonUsuario),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#ContentPlaceHolder1_inputNome').val(data.Nome);
            $('#ContentPlaceHolder1_inputEmail').val(data.Email);
            $('#ContentPlaceHolder1_dropPermissao').val(data.IdPermissao);
            $('#ContentPlaceHolder1_inputSenha').val(data.Senha);
            $('#ContentPlaceHolder1_inputConfirmaSenha').val(data.Senha);

            $('#ContentPlaceHolder1_btnSalvar').bind( "click", function () { btnAtualizarOnClick(id); });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus);
        }
    });
}


function RegisterBtnExcluirOnClick(id) {
    ClearForm();
    $('#ContentPlaceHolder1_btnSalvar').unbind('click');
    $(".divSenha").css('visibility', 'hidden');

    var jsonUsuario = {
        "Id": id,
    };

    $.ajax({
        type: "POST",
        url: "handler/HCadastroUsuario.ashx?method=GetUsuarioById",
        data: JSON.stringify(jsonUsuario),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#ContentPlaceHolder1_inputNome').val(data.Nome);
            $('#ContentPlaceHolder1_inputEmail').val(data.Email);
            $('#ContentPlaceHolder1_dropPermissao').val(data.IdPermissao);


            $('#ContentPlaceHolder1_btnSalvar').bind( "click", function () { btnExcluirOnClick(id); });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus);
        }
    });

    
}



function btnSalvarOnClick() {

    if (!isFormValid())
        return;

        var jsonUsuario = {
            "Nome": $('#ContentPlaceHolder1_inputNome').val(),
            "Email": $('#ContentPlaceHolder1_inputEmail').val(),
            "IdPermissao": $('#ContentPlaceHolder1_dropPermissao').val(),
            "Senha": $('#ContentPlaceHolder1_inputSenha').val()
        };

        $.ajax({
            type: "POST",
            url: "handler/HCadastroUsuario.ashx?method=SalvarUsuario",
            data: JSON.stringify(jsonUsuario),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                __doPostBack('Reload', '');
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(textStatus);
            }

        });
    
}

function btnAtualizarOnClick(id) {
    if (!isFormValid())
        return;

    if (confirm('Deseja atualizar os dados')) {
        var jsonUsuario = {
            "Id": id,
            "Nome": $('#ContentPlaceHolder1_inputNome').val(),
            "Email": $('#ContentPlaceHolder1_inputEmail').val(),
            "IdPermissao": $('#ContentPlaceHolder1_dropPermissao').val(),
            "Senha": $('#ContentPlaceHolder1_inputSenha').val()
        };

        $.ajax({
            type: "POST",
            url: "handler/HCadastroUsuario.ashx?method=AtualizarUsuario",
            data: JSON.stringify(jsonUsuario),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                $('#usuario' + id).css("background-color", "yellow");
                $('#usuario' + id).css("text-decoration", "line-through");
                $.modal.close();
                //__doPostBack('Reload', '');
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(textStatus);
            }

        });
    }    
}


function btnExcluirOnClick(id) {
    if (confirm('Deseja excluir os dados')) {
        var jsonUsuario = {
            "Id": id,
        };


        $.ajax({
            type: "POST",
            url: "handler/HCadastroUsuario.ashx?method=ExcluirUsuario",
            data: JSON.stringify(jsonUsuario),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                $('#usuario' + id).css("background-color", "red");
                $('#usuario' + id).css("text-decoration", "line-through");
                $.modal.close();
                //__doPostBack('Reload', '');
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(textStatus);
            }

        });
    }
}

function regiterValidators() {
    $('#ContentPlaceHolder1_inputEmail').on('input', function () {
        var input = $(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email = re.test(input.val());
        if (is_email) { input.removeClass("invalid").addClass("valid"); }
        else { input.removeClass("valid").addClass("invalid"); }
    });


    $('#ContentPlaceHolder1_inputNome').keyup(function (event) {
        var input = $(this);
        var message = $(this).val();
        if (message) { input.removeClass("invalid").addClass("valid"); }
        else { input.removeClass("valid").addClass("invalid"); }
    });

    $('#ContentPlaceHolder1_inputSenha').keyup(function (event) {
        var input = $(this);
        var message = $(this).val();
        if (message) { input.removeClass("invalid").addClass("valid"); }
        else { input.removeClass("valid").addClass("invalid"); }
    });

    $('#ContentPlaceHolder1_inputConfirmaSenha').keyup(function (event) {
        var input = $(this);
        var message = $(this).val();
        
        if ($('#ContentPlaceHolder1_inputSenha').val() == $('#ContentPlaceHolder1_inputConfirmaSenha').val())
        { input.removeClass("invalid").addClass("valid"); }
        else { input.removeClass("valid").addClass("invalid"); }
    });

}

function ClearForm() {
    $('#ContentPlaceHolder1_inputNome').val('').removeClass();
    $('#ContentPlaceHolder1_inputEmail').val('').removeClass();
    $('#ContentPlaceHolder1_dropPermissao').val(1).removeClass();
    $('#ContentPlaceHolder1_inputSenha').val('').removeClass();
    $('#ContentPlaceHolder1_inputConfirmaSenha').val('').removeClass();
    $(".msgValidacao").css('visibility', 'hidden');
}

function isFormValid() {
    var element;
    var valid;
    var retorno = false;
    element = $('#ContentPlaceHolder1_inputNome');
    valid = element.hasClass("valid");
    if (!valid) {
        $("#msgNome").css('visibility', 'visible');
        return false;
    }
    else {
        $("#msgNome").css('visibility', 'hidden');
    }

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


    element = $('#ContentPlaceHolder1_inputConfirmaSenha');
    valid = element.hasClass("valid");
    if (!valid) {
        $("#msgConfirmaSenha").css('visibility', 'visible');
        return false;
    }
    else {
        $("#msgConfirmaSenha").css('visibility', 'hidden');
    }
    return true;
}
