using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class RecuperarSenhaViewModel
    {
        [Required]
        [StringLength(254, MinimumLength = 5)]
        public string Email { get; set; }

        [Required]
        [StringLength(230, MinimumLength = 5)]
        public string Pergunta { get; set; }

        [Required]
        [StringLength(30, MinimumLength = 5)]
        public string Resposta { get; set; }

        [Required]
        [StringLength(15, MinimumLength = 9)]
        public string NovaSenha { get; set; }
    }
}
