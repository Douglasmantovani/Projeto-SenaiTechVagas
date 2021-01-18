using System;
using System.Collections.Generic;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class Vaga
    {
        public Vaga()
        {
            Inscricao = new HashSet<Inscricao>();
            VagaTecnologia = new HashSet<VagaTecnologia>();
        }

        public int IdVaga { get; set; }
        public string TituloVaga { get; set; }
        public string DescricaoVaga { get; set; }
        public string DescricaoEmpresa { get; set; }
        public string DescricaoBeneficio { get; set; }
        public DateTime DataPublicacao { get; set; }
        public DateTime DataExpiracao { get; set; }
        public string Experiencia { get; set; }
        public string TipoContrato { get; set; }
        public decimal Salario { get; set; }
        public string Localidade { get; set; }
        public string Estado { get; set; }
        public string Cep { get; set; }
        public string Logradouro { get; set; }
        public int IdTipoRegimePresencial { get; set; }
        public string Complemento { get; set; }
        public int IdEmpresa { get; set; }
        public int IdArea { get; set; }

        public virtual Area IdAreaNavigation { get; set; }
        public virtual Empresa IdEmpresaNavigation { get; set; }
        public virtual TipoRegimePresencial IdTipoRegimePresencialNavigation { get; set; }
        public virtual ICollection<Inscricao> Inscricao { get; set; }
        public virtual ICollection<VagaTecnologia> VagaTecnologia { get; set; }
    }
}
