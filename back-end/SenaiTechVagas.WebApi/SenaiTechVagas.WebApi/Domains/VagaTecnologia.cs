using System;
using System.Collections.Generic;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class VagaTecnologia
    {
        public int IdTecnologia { get; set; }
        public int IdVaga { get; set; }

        public virtual Tecnologia IdTecnologiaNavigation { get; set; }
        public virtual Vaga IdVagaNavigation { get; set; }
    }
}
