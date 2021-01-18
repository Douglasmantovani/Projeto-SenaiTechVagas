using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class CadastrarEmpresaViewModel
    {
        [Required]
        [StringLength(65, MinimumLength = 5)]
        public string NomeReponsavel { get; set; }

        [Required]
        [StringLength(14, MinimumLength = 14)]
        public string Cnpj { get; set; }

        [Required]
        [StringLength(254, MinimumLength = 5)]
        public string EmailContato { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 5)]
        public string NomeFantasia { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 5)]
        public string RazaoSocial { get; set; }

        [Required]
        [StringLength(11, MinimumLength = 10)]
        public string Telefone { get; set; }

        public int NumFuncionario { get; set; }

        [StringLength(7)]
        public string NumCnae { get; set; }

        [Required]
        [StringLength(150, MinimumLength = 5)]
        public string Localidade { get; set; }

        [Required]
        [StringLength(2, MinimumLength = 2)]
        public string Estado { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 8)]
        public string Cep { get; set; }

        [Required]
        [StringLength(155,MinimumLength =5)]
        public string Logradouro { get; set; }

        [StringLength(255)]
        public string Complemento { get; set; }

        [StringLength(254, MinimumLength = 5)]
        [Required]
        public string Email { get; set; }

        [Required]
        [StringLength(15, MinimumLength = 9)]
        public string Senha { get; set; }

        [Required]
        [StringLength(30, MinimumLength = 5)]
        public string RespostaSeguranca { get; set; }

        [Required]
        [StringLength(130, MinimumLength = 5)]
        public string PerguntaSeguranca { get; set; }

        [StringLength(40, MinimumLength = 0)]
        public string CaminhoImagem { get; set; }
    }
}
