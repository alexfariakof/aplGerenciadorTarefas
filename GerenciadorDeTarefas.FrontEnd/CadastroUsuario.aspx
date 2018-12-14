<%@ Page Title="" Language="C#" MasterPageFile="~/Identidade.Master" AutoEventWireup="true" CodeBehind="CadastroUsuario.aspx.cs" Inherits="GerenciadorDeTarefas.FrontEnd.CadastroUsuario" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="js/jquery.modal.min.js"></script>
    <link href="js/jquery.modal.min.css" rel="stylesheet" />
    <script src="js/CadastroUsuario.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="form-horizontal">
        <div class="container">
            <div class="control-group">
                <h2>Cadastro de Usuários</h2>
                <br />
            </div>
            <div class="control-group">
                <a href="#ex1" class="btn" rel="modal:open" onclick="RegisterBtnSalvarOnClick()">Incluir novo Usuário</a>
                <a href="#ex1" class="btn" rel="modal:open" onclick="__doPostBack('Reload', '');">Atualizar dados do Usuário.</a>
            </div>
            <div class="control-group">
                <div class="controls">
                    <asp:GridView ID="grdUsuario" runat="server" OnRowCreated="grdUsuario_RowCreated" AutoGenerateColumns="False" GridLines="Horizontal" OnRowDataBound="grdUsuario_RowDataBound">
                        <Columns>
                            <asp:BoundField DataField="Id" HeaderText="Código" />
                            <asp:BoundField DataField="Nome" HeaderText="Nome" />
                            <asp:BoundField DataField="Email" HeaderText="Email" />
                            <asp:BoundField DataField="Permissao" HeaderText="Permissão" />
                            <asp:BoundField DataField="Id" />
                            <asp:BoundField DataField="Id" />
                        </Columns>
                    </asp:GridView>
                </div>
            </div>
        </div>
    </div>
    <div id="ex1" class="modal">
        <div class="control-group">
            <label class="control-label" for="inputNome">Nome</label>
            <div class="controls">
                <input id="inputNome" placeholder="Digite seu Nome ..." runat="server" required="required" maxlength="50" />
                <span id="msgNome" class="msgValidacao" style="color: red; visibility: hidden">Informe seu nome.</span>
            </div>
        </div>
        <div class="control-group">
            <label class="control-label" for="inputEmail">E-mail</label>
            <div class="controls">
                <asp:TextBox ID="inputEmail" placeholder="Digite o e-mail..." runat="server" type="email" required="required" MaxLength="50" />
                <span id="msgEmail" class="msgValidacao" style="color: red; visibility: hidden">Informe um email válido.</span>
            </div>
        </div>
        <div class="control-group">
            <label class="control-label" for="inputPermissao">Permissão</label>
            <div class="controls">
                <asp:DropDownList ID="dropPermissao" runat="server" placeholder="Escolha o Tipo de Permissao...">
                    <asp:ListItem Value="1">Administrador</asp:ListItem>
                    <asp:ListItem Value="2" Selected="True">Usuário Básico</asp:ListItem>
                </asp:DropDownList>
            </div>
        </div>
        <div class="control-group divSenha">
            <label class="control-label" for="inputSenha">Senha</label>
            <div class="controls">
                <asp:TextBox ID="inputSenha" type="password" placeholder="Digite a senha..." runat="server" required="required" MaxLength="10"></asp:TextBox>
                <span id="msgSenha" class="msgValidacao" style="color: red; visibility: hidden">Senha Inválida.</span>
            </div>
        </div>
        <div class="control-group divSenha">
            <label class="control-label" for="inputConfirmaSenha">Senha</label>
            <div class="controls">
                <asp:TextBox ID="inputConfirmaSenha" type="password" placeholder="Confirme a senha..." runat="server" required="required" MaxLength="10"></asp:TextBox>
                <span id="msgConfirmaSenha" class="msgValidacao" style="color: red; visibility: hidden">Senha Inválida.</span>
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <asp:Button ID="btnSalvar" runat="server" Text="Confirmar" CssClass="btn" />
            </div>
        </div>
    </div>
</asp:Content>
