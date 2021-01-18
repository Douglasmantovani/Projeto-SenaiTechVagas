using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class VerificacaoViewModel
    {

        [StringLength(9, MinimumLength = 9)]
        public string Rg { get; set; }

        [StringLength(11, MinimumLength = 11)]
        public string Cpf { get; set; }

        [StringLength(14, MinimumLength = 14)]
        public string Cnpj { get; set; }

        [StringLength(50, MinimumLength = 50)]
        public string NomeFantasia { get; set; }

        [StringLength(50, MinimumLength = 50)]
        public string RazaoSocial { get; set; }

        [StringLength(254, MinimumLength = 5)]
        public string Email { get; set; }

        [StringLength(11, MinimumLength = 11)]
        public string Telefone { get; set; }

        [StringLength(154, MinimumLength = 5)]
        public string LinkLinkedinCandidato { get; set; }
    }
}
