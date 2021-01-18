using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class ListarEstagiosViewModel
    {
         public int idEstagio { get; set; }
        public int PeriodoEstagio { get; set; }
        public string NomeCompleto { get; set; }
        public string NomeCurso { get; set; }
        public string RazaoSocial { get; set; }
        public string EmailCandidato { get; set; }
        public string Telefone { get; set; }
        public string NomeArea { get; set; }
        public int TempoEstagiado { get; set; }
        public string StatusEstagio { get; set; }
        public int IdUsuario { get; set; }
        public string CaminhoImagem { get; set; }
    }
}
