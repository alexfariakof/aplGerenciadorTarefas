using GerenciadorDeTarefas.BackEnd.DAO;
using GerenciadorDeTarefas.BackEnd.POCO;
using GerenciadorDeTarefas.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace GerenciadorDeTarefas.FrontEnd
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //String email = inputEmail.Value = "admin@admin";
            //String senha = inputSenha.Value = "admin";

            if (Page.Master.Session["usuario"] != null)
                divLogin.Visible = false;
            else
                divLogin.Visible = true;
        }

        protected void btnAcessar_Click(object sender, EventArgs e)
        {            
            String email = inputEmail.Value = "admin@admin";
            String senha  = inputSenha.Value = "admin";

            Usuario usuario = new Usuario { Email = email, Senha = senha };
            UsuarioDAO dao = new UsuarioDAO();
            if (!dao.IsLoginValido(usuario))
            {
                Page.ClientScript.RegisterClientScriptBlock(this.GetType(), "Alerta de Login Invalido", "<script>alert('E-mail ou Senha Inválida.');</script>");
            }
            else
            {                
                Page.Master.Session["usuario"] = dao.GetByEmailSenha(usuario);
                Response.Redirect("CadastroUsuario.aspx");
            }
        }
    }
}