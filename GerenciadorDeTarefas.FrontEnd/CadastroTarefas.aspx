<%@ Page Title="" Language="C#" MasterPageFile="~/Identidade.Master" AutoEventWireup="true" CodeBehind="CadastroTarefas.aspx.cs" Inherits="GerenciadorDeTarefas.FrontEnd.CadastroTarefas" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="js/jquery.modal.min.js"></script>
    <link href="js/jquery.modal.min.css" rel="stylesheet" />
    <script src="js/CadastroTarefas.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="form-horizontal">

        <div class="container">
            <div class="control-group">
                <h2>Cadastro de Tarefas</h2>
                <br />
            </div>
            <div class="control-group">
                    <a href="#ex1" class="btn" rel="modal:open" onclick="RegisterBtnSalvarOnClick()">Incluir nova Tarefa</a>
                    <a href="#ex1" class="btn" rel="modal:open" onclick="__doPostBack('Reload', '');">Atualizar dados do Usuário.</a>
            </div>
            <div class="control-group">
                <div class="controls">
                    <asp:TextBox ID="inputPesquisar" placeholder="Digite para pesquisar..." runat="server"></asp:TextBox>
                    <a href="#" runat="server" onserverclick="btnPesquisar_Click"><span class="glyphicon">
                        <img src="bootstrap/img/glyphicons-search.png" /></span>Pesquisar</a>
                    <asp:GridView ID="grdTarefa" runat="server" AutoGenerateColumns="False" GridLines="Horizontal" OnRowCreated="grdTarefa_RowCreated" OnRowDataBound="grdTarefa_RowDataBound">
                        <Columns>
                            <asp:BoundField DataField="Id" HeaderText="Código" />
                            <asp:BoundField DataField="Titulo" HeaderText="Tarefa" />
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
            <label class="control-label" for="inputTarefa">Tarefa</label>
            <div class="controls">
                <asp:TextBox ID="inputTarefa" placeholder="Digite a tarefa..." runat="server" required="required" MaxLength="100" />
                <span id="msgTarefa" class="msgValidacao" style="color: red; visibility: hidden">Informe uma tarefa.</span>
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <asp:Button ID="btnSalvar" runat="server" Text="Confirmar" CssClass="btn" />
            </div>
        </div>
    </div>
    <div class="controls">
    </div>
    <br />
    </div>
</asp:Content>
