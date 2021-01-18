using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class Estagio
    {
        public int IdEstagio { get; set; }
        public DateTime DataCadastro { get; set; }

        [Required]
        public int PeriodoEstagio { get; set; }

        [Required]
        public int IdCandidato { get; set; }

        [Required]
        public int IdEmpresa { get; set; }

        public virtual Candidato IdCandidatoNavigation { get; set; }
        public virtual Empresa IdEmpresaNavigation { get; set; }
    }
}
