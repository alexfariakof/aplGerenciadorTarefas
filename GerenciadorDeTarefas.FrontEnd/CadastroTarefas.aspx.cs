using GerenciadorDeTarefas.BackEnd.DAO;
using GerenciadorDeTarefas.BackEnd.POCO;
using System;
using System.Web.UI.WebControls;

namespace GerenciadorDeTarefas.FrontEnd
{
    public partial class CadastroTarefas : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            PreencherGridView();
        }

        private void PreencherGridView()
        {
            IDAO<Tarefa> dao = new TarefaDAO();
            grdTarefa.DataSource = dao.GetAll();
            grdTarefa.DataBind();
        }

        protected void grdTarefa_RowCreated(object sender, GridViewRowEventArgs e)
        {
            e.Row.CssClass = "row";
            if (e.Row.RowType == DataControlRowType.DataRow)
                e.Row.Cells[0].CssClass = "col-sm-4";
        }

        protected void btnPesquisar_Click(object sender, EventArgs e)
        {
            TarefaDAO dao = new TarefaDAO();
            grdTarefa.DataSource = dao.FindByTitulo(inputPesquisar.Text);
            grdTarefa.DataBind();

        }

        protected void grdTarefa_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                e.Row.Attributes.Add("id", "tarefa" + e.Row.Cells[0].Text);
                e.Row.Cells[2].Text = "<a href=#ex1 rel=modal:open onclick=RegisterBtnAltualizarOnClick('" + e.Row.Cells[0].Text + "') > Atualizar </ a>";
                e.Row.Cells[3].Text = "<a href=#ex1 rel=modal:open onclick=RegisterBtnExcluirOnClick('" + e.Row.Cells[0].Text + "') > Excluir </ a>";
            }
        }
    }
}