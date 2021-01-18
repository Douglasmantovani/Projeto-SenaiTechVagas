using System;
using System.Collections.Generic;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class Tecnologia
    {
        public Tecnologia()
        {
            VagaTecnologia = new HashSet<VagaTecnologia>();
        }

        public int IdTecnologia { get; set; }
        public string NomeTecnologia { get; set; }

        public virtual ICollection<VagaTecnologia> VagaTecnologia { get; set; }
    }
}
