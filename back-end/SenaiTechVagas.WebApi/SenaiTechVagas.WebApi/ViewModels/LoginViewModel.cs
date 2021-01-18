using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.ViewModels
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Informe o e-mail")]
        [StringLength(254, MinimumLength = 5, ErrorMessage = "O email deve ter deve ter entre 10 e 235 caracteres")]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required(ErrorMessage = "Informe a senha")]
        [StringLength(15,MinimumLength =9,ErrorMessage = "A senha deve ter entre 10 e 20 caracteres")]
        [DataType(DataType.Password)]
        public string Senha { get; set; }
    }
}
