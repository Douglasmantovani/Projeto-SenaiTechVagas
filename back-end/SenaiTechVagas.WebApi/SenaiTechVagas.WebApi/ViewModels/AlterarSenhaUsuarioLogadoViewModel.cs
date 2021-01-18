using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class AlterarSenhaUsuarioLogadoViewModel
    {
        [StringLength(15, MinimumLength = 9)]
        [Required]
        public string SenhaAtual { get; set; }

        [StringLength(15, MinimumLength = 9)]
        [Required]
        public string NovaSenha { get; set;}
    }
}
