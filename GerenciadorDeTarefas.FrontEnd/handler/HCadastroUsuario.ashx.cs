using GerenciadorDeTarefas.BackEnd.DAO;
using GerenciadorDeTarefas.BackEnd.POCO;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GerenciadorDeTarefas.FrontEnd.handler
{
    /// <summary>
    /// Summary description for HCadastroUsuario
    /// </summary>
    public class HCadastroUsuario : IHttpHandler
    {
        IDAO<Usuario> dao;
        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/json";
            if (context.Request.QueryString != null)
            {                
                System.IO.Stream body = context.Request.InputStream;
                System.Text.Encoding encoding = context.Request.ContentEncoding;
                System.IO.StreamReader reader = new System.IO.StreamReader(body, encoding);
                string json = reader.ReadToEnd();
                Usuario usuario = JsonConvert.DeserializeObject<Usuario>(json);
                dao = new UsuarioDAO();
                switch (context.Request.QueryString["method"])
                {
                    case "SalvarUsuario":
                        SalvarUsuario(usuario, context);
                        break;
                    case "AtualizarUsuario":
                        AtualizarUsuario(usuario, context);
                        break;
                    case "ExcluirUsuario":
                        ExcluirUsuario(usuario, context);
                        break;
                    case "GetUsuarioById":
                        GetUsuarioById(usuario.Id, context);
                        break;
                    default:
                        context.Response.Write(JsonConvert.SerializeObject(false));
                        break;
                }
            }            
            
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }

        private void GetUsuarioById(int id, HttpContext context)
        {            
            Usuario usuario = dao.GetById(id);
            context.Response.Write(JsonConvert.SerializeObject(usuario));
        }

        private void SalvarUsuario(Usuario usuario, HttpContext context)
        {           
            dao.Insert(usuario);
            var result = new { result = true, operacao = "Salvar"};
            context.Response.Write(JsonConvert.SerializeObject(result));
        }

        private void AtualizarUsuario(Usuario usuario, HttpContext context)
        {
            dao.Update(usuario);
            var result = new { result = true, operacao = "Atualizar" };
            context.Response.Write(JsonConvert.SerializeObject(result));
        }
        
        private void ExcluirUsuario(Usuario usuario, HttpContext context)
        {            
            dao.Delete(usuario.Id);
            var result = new { result = true, operacao = "Excluir" };
            context.Response.Write(JsonConvert.SerializeObject(result));
        }


    }
}