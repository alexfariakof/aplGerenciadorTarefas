$(document).ready(function () {
    regiterValidators();
});


function RegisterBtnSalvarOnClick() {
    ClearForm();
    $('#ContentPlaceHolder1_btnSalvar').unbind('click');
    $('#ContentPlaceHolder1_btnSalvar').bind("click", function () { btnSalvarOnClick(); });
}

function RegisterBtnAltualizarOnClick(id) {
    ClearForm();
    $('#ContentPlaceHolder1_inputTarefa').addClass("valid");
    $('#ContentPlaceHolder1_btnSalvar').unbind('click');



    var jsonTarefa = {
        "Id": id,
    };

    $.ajax({
        type: "POST",
        url: "handler/HCadastroTarefas.ashx?method=GetTarefaById",
        data: JSON.stringify(jsonTarefa),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#ContentPlaceHolder1_inputTarefa').val(data.Titulo);

            $('#ContentPlaceHolder1_btnSalvar').bind("click", function () { btnAtualizarOnClick(id); });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus);
        }
    });
}


function RegisterBtnExcluirOnClick(id) {
    ClearForm();
    $('#ContentPlaceHolder1_btnSalvar').unbind('click');

    var jsonTarefa = {
        "Id": id,
    };

    $.ajax({
        type: "POST",
        url: "handler/HCadastroTarefas.ashx?method=GetTarefaById",
        data: JSON.stringify(jsonTarefa),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#ContentPlaceHolder1_inputTarefa').val(data.Titulo);
            
            $('#ContentPlaceHolder1_btnSalvar').bind("click", function () { btnExcluirOnClick(id); });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus);
        }
    });
}

function btnSalvarOnClick() {

    if (!isFormValid())
        return;

    var jsonTarefa = {
        "Titulo": $('#ContentPlaceHolder1_inputTarefa').val(),
    };

    $.ajax({
        type: "POST",
        url: "handler/HCadastroTarefas.ashx?method=SalvarTarefa",
        data: JSON.stringify(jsonTarefa),
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
        var jsonTarefa = {
            "Id": id,
            "Titulo": $('#ContentPlaceHolder1_inputTarefa').val(),
        };

        $.ajax({
            type: "POST",
            url: "handler/HCadastroTarefas.ashx?method=AtualizarTarefa",
            data: JSON.stringify(jsonTarefa),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                $('#tarefa' + id).css("background-color", "yellow");
                $('#tarefa' + id).css("text-decoration", "line-through");
                $.modal.close();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(textStatus);
            }

        });
    }
}

function btnExcluirOnClick(id) {
    if (confirm('Deseja Excluir os dados')) {
        var jsonTarefa = {
            "Id": id,
        };
        
        $.ajax({
            type: "POST",
            url: "handler/HCadastroTarefas.ashx?method=ExcluirTarefa",
            data: JSON.stringify(jsonTarefa),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                $('#tarefa' + id).css("background-color", "red");
                $('#tarefa' + id).css("text-decoration", "line-through");
                $.modal.close();                
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(textStatus);
            }

        });
    }
}

function regiterValidators() {
    
    $('#ContentPlaceHolder1_inputTarefa').keyup(function (event) {
        var input = $(this);
        var message = $(this).val();
        if (message) { input.removeClass("invalid").addClass("valid"); }
        else { input.removeClass("valid").addClass("invalid"); }
    });

}

function ClearForm() {
    $('#ContentPlaceHolder1_inputTarefa').val('').removeClass();
    $(".msgValidacao").css('visibility', 'hidden');
}

function isFormValid() {
    var element;
    var valid;
    var retorno = false;
    element = $('#ContentPlaceHolder1_inputTarefa');
    valid = element.hasClass("valid");
    if (!valid) {
        $("#msgTarefa").css('visibility', 'visible');
        return false;
    }
    else {
        $("#msgTarefa").css('visibility', 'hidden');
    }

    return true;
}