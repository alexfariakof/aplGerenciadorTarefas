
using System.Collections.Generic;

namespace GerenciadorDeTarefas.BackEnd.DAO
{
    public interface IDAO<Ttipo>
    {
        List<Ttipo> GetAll();
        Ttipo GetById(int id);
        void Insert(Ttipo T);
        void Update(Ttipo T);
        void Delete(int id);
    }
}
