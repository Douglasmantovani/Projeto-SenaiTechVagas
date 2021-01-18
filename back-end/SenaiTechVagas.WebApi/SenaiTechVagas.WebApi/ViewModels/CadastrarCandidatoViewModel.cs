using SenaiTechVagas.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class CadastrarCandidatoViewModel
    {

        [Required]
        [StringLength(65, MinimumLength = 5)]
        public string NomeCompleto { get; set; }

        [Required]
        [StringLength(9, MinimumLength = 9)]
        public string Rg { get; set; }

        [Required]
        [StringLength(11, MinimumLength = 11)]
        public string Cpf { get; set; }

        [Required]
        [StringLength(11, MinimumLength = 10)]
        public string Telefone { get; set; }

        [StringLength(150)]
        public string LinkLinkedinCandidato { get; set; }

        [Required]
        public int IdCurso { get; set; }

        [Required]
        [StringLength(254, MinimumLength = 5)]
        public string Email { get; set; }

        [Required]
        [StringLength(15, MinimumLength = 9)]
        public string Senha { get; set; }

        [Required]
        [StringLength(130, MinimumLength = 5)]
        public string PerguntaSeguranca { get; set; }

        [Required]
        [StringLength(30, MinimumLength = 5)]
        public string RespostaSeguranca { get; set; }

        [StringLength(40, MinimumLength = 0)]
        public string CaminhoImagem { get; set; }
    }
}
