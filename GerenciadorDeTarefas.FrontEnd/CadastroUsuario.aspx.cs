using GerenciadorDeTarefas.BackEnd.DAO;
using GerenciadorDeTarefas.BackEnd.POCO;
using System;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace GerenciadorDeTarefas.FrontEnd
{
    public partial class CadastroUsuario : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            PreencherGridView();
        }

        private void PreencherGridView()
        {
            IDAO<Usuario> dao = new UsuarioDAO();
            grdUsuario.DataSource = dao.GetAll();
            grdUsuario.DataBind();
        }

        protected void grdUsuario_RowCreated(object sender, GridViewRowEventArgs e)
        {
            e.Row.CssClass = "row";
            if (e.Row.RowType == DataControlRowType.DataRow)
                e.Row.Cells[0].CssClass = "col-sm-4";            
        }

        protected void grdUsuario_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                e.Row.Cells[4].Text = "<a href=#ex1 rel=modal:open onclick=RegisterBtnAltualizarOnClick('" + e.Row.Cells[0].Text + "') > Atualizar </ a>";
                e.Row.Attributes.Add("id", "usuario" + e.Row.Cells[0].Text);
                e.Row.Cells[4].Text = "<a href=#ex1 rel=modal:open onclick=RegisterBtnAltualizarOnClick('" + e.Row.Cells[0].Text + "') > Atualizar </ a>";
                e.Row.Cells[5].Text = "<a href=#ex1 rel=modal:open onclick=RegisterBtnExcluirOnClick('" + e.Row.Cells[0].Text  +"') > Excluir </ a>";

               

            }
        }
    }
}