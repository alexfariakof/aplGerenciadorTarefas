<%@ Page Title="" Language="C#" MasterPageFile="~/Identidade.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="GerenciadorDeTarefas.FrontEnd.Login" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="js/Login.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <br />

    <div class="form-horizontal">
        <div class="container">
            <div class="control-group">
                <h2>Gerenciador de Tarefas</h2>
            </div>
            <div id="divLogin" runat="server">
                <div class="control-group">
                    <label class="control-label" for="inputEmail">E-mail</label>
                    <div class="controls">
                        <input id="inputEmail" type="email" placeholder="Digite o e-mail..." runat="server" required="required" maxlength="50" />
                        <span id="msgEmail" class="msgValidacao" style="color: red; visibility: hidden">Informe um email válido.</span>
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="inputSenha">Senha</label>
                    <div class="controls">
                        <input id="inputSenha" type="password" placeholder="Digite a senha..." runat="server" required="required" maxlength="10" />
                        <span id="msgSenha" class="msgValidacao" style="color: red; visibility: hidden">Senha Inválida.</span>
                    </div>
                </div>
                <div class="control-group">
                    <div class="controls">
                        <label class="checkbox">
                            <input type="checkbox" />Lembrar a minha senha</label>
                    </div>
                </div>
                <div class="control-group">
                    <div class="controls">
                        <asp:Button ID="btnAcessar" runat="server" Text="Acessar" CssClass="btn" OnClick="btnAcessar_Click" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
