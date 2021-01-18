using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class VagaCompletaViewModel
    {
        public string TituloVaga { get; set; }
        public int IdVaga { get; set; }
        public int IdArea { get; set; }
        public string Experiencia { get; set; }
        public string NomeArea { get; set; }
        public string TipoPresenca { get; set; }
        public string RazaoSocial { get; set; }
        public string TipoContrato { get; set; }
        public decimal Salario { get; set; }
        public string Localidade { get; set; }
        public string DescricaoVaga { get; set; }
        public string DescricaoEmpresa { get; set; }
        public string DescricaoBeneficio { get; set; }
        public string Estado { get; set; }
        public string Cep { get; set; }
        public string Logradouro { get; set; }
        public string Complemento { get; set; }
        public string CaminhoImagem { get; set; }
        public List<string> Tecnologias { get; set; }
    }
}
