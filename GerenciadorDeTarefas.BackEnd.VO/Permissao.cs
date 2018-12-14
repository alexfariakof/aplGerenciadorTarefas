using System;

namespace GerenciadorDeTarefas.BackEnd.POCO
{
    public class Permissao
    {
        public int Id { get; set; }
        public String Tipo { get; set; }

        public override string ToString()
        {
            return Tipo;
        }
    }
}
