using GerenciadorDeTarefas.BackEnd.DAO;
using GerenciadorDeTarefas.BackEnd.POCO;
using Newtonsoft.Json;
using System.Web;

namespace GerenciadorDeTarefas.FrontEnd.handler
{
    public class HCadastroTarefas : IHttpHandler
    {
        IDAO<Tarefa> dao;

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/json";
            if (context.Request.QueryString != null)
            {
                System.IO.Stream body = context.Request.InputStream;
                System.Text.Encoding encoding = context.Request.ContentEncoding;
                System.IO.StreamReader reader = new System.IO.StreamReader(body, encoding);
                string json = reader.ReadToEnd();
                Tarefa tarefa = JsonConvert.DeserializeObject<Tarefa>(json);
                dao = new TarefaDAO();

                switch (context.Request.QueryString["method"])
                {
                    case "SalvarTarefa":
                        SalvarTarefa(tarefa, context);
                        break;
                    case "AtualizarTarefa":
                        AtualizarTarefa(tarefa, context);
                        break;
                    case "ExcluirTarefa":
                        ExcluirTarefa(tarefa, context);
                        break;
                    case "GetTarefaById":
                        GetTarefaById(tarefa.Id, context);
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

        private void GetTarefaById(int id, HttpContext context)
        {
            Tarefa tarefa = dao.GetById(id);
            context.Response.Write(JsonConvert.SerializeObject(tarefa));
        }

        private void SalvarTarefa(Tarefa tarefa, HttpContext context)
        {
            dao.Insert(tarefa);
            var result = new { result = true, operacao = "Salvar" };
            context.Response.Write(JsonConvert.SerializeObject(result));
        }

        private void AtualizarTarefa(Tarefa tarefa, HttpContext context)
        {
            dao.Update(tarefa);
            var result = new { result = true, operacao = "Atualizar" };
            context.Response.Write(JsonConvert.SerializeObject(result));
        }

        private void ExcluirTarefa(Tarefa tarefa, HttpContext context)
        {
            dao.Delete(tarefa.Id);
            var result = new { result = true, operacao = "Excluir" };
            context.Response.Write(JsonConvert.SerializeObject(result));
        }
    }
}