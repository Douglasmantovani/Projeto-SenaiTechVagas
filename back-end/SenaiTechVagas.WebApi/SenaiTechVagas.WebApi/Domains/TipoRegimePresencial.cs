using System;
using System.Collections.Generic;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class TipoRegimePresencial
    {
        public TipoRegimePresencial()
        {
            Vaga = new HashSet<Vaga>();
        }

        public int IdTipoRegimePresencial { get; set; }
        public string NomeTipoRegimePresencial { get; set; }

        public virtual ICollection<Vaga> Vaga { get; set; }
    }
}
