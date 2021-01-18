using SenaiTechVagas.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class ListarVagasViewModel
    {
        public string TituloVaga { get; set; }
        public string CaminhoImagem { get; set; }
        public int IdVaga { get; set; }
        public string Experiencia { get; set; }
        public string NomeArea { get; set; }
        public string TipoContrato { get; set; }
        public decimal Salario { get; set; }
        public string Localidade { get; set; }
        public string RazaoSocial { get; set; }
        public List<string> Tecnologias { get; set; }
        public int IdInscricao { get; set; }
        public string TipoPresenca { get; set; }
        public string DataExpiracao { get; set; }
        public string DataInscricao { get; set; }
    }
}
