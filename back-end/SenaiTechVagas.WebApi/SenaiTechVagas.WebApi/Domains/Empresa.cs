using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class Empresa
    {
        public Empresa()
        {
            Estagio = new HashSet<Estagio>();
            Vaga = new HashSet<Vaga>();
        }

        public int IdEmpresa { get; set; }

        [StringLength(65, MinimumLength = 5)]
        [Required]
        public string NomeReponsavel { get; set; }

        [StringLength(14, MinimumLength = 14)]
        [Required]
        public string Cnpj { get; set; }

        [StringLength(254, MinimumLength = 5)]
        [Required]
        public string EmailContato { get; set; }

        [StringLength(50, MinimumLength = 5)]
        [Required]
        public string NomeFantasia { get; set; }

        public string RazaoSocial { get; set; }

        [StringLength(11, MinimumLength = 10)]
        [Required]
        public string Telefone { get; set; }
        public int NumFuncionario { get; set; }

        [StringLength(7)]
        [Required]
        public string NumCnae { get; set; }

        [StringLength(8, MinimumLength = 8)]
        [Required]
        public string Cep { get; set; }

        [StringLength(150, MinimumLength = 5)]
        [Required]
        public string Logradouro { get; set; }

        [StringLength(255)]
        public string Complemento { get; set; }

        [StringLength(150, MinimumLength = 5)]
        [Required]
        public string Localidade { get; set; }

        [StringLength(2, MinimumLength = 2)]
        [Required]
        public string Uf { get; set; }
        public int IdUsuario { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual ICollection<Estagio> Estagio { get; set; }
        public virtual ICollection<Vaga> Vaga { get; set; }
    }
}
