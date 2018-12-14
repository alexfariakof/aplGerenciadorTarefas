using System;

namespace GerenciadorDeTarefas.BackEnd.POCO
{
    [Serializable]
    public class Usuario
    {
        public int Id { get; set; }
        public String Nome { get; set; }
        public String Email { get; set; }
        public int IdPermissao { get; set;  }
        public Permissao Permissao { get; set; }
        public String Senha { get; set; }
    }
}

