using System;
using System.Collections.Generic;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class Area
    {
        public Area()
        {
            Curso = new HashSet<Curso>();
            Vaga = new HashSet<Vaga>();
        }

        public int IdArea { get; set; }
        public string NomeArea { get; set; }

        public virtual ICollection<Curso> Curso { get; set; }
        public virtual ICollection<Vaga> Vaga { get; set; }
    }
}
