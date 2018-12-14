using GerenciadorDeTarefas.BackEnd.POCO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace GerenciadorDeTarefas.FrontEnd
{
    public partial class Identidade : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            VerificarPermissoes();
        }

        protected void btnSair_Click(object sender, EventArgs e)
        {
            Page.Master.Session.Clear();
            Response.Redirect("Login.aspx");
        }

        private void VerificarPermissoes()
        {
            Usuario usuario;
            if (Page.Master.Session["usuario"] != null)
            {
                usuario = (Usuario)Page.Master.Session["usuario"];

                if (usuario.Permissao.Id == 1 )
                    menuUsuario.Visible = true;

                menuTarefas.Visible = true;
                menuSair.Visible = true;


            }
        }

    }
}