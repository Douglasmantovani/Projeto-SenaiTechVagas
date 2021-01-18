using System;
using System.Collections.Generic;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class Usuario
    {
        public int IdUsuario { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string CaminhoImagem { get; set; }
        public string PerguntaSeguranca { get; set; }
        public string RespostaSeguranca { get; set; }
        public int IdTipoUsuario { get; set; }

        public virtual TipoUsuario IdTipoUsuarioNavigation { get; set; }
        public virtual Candidato Candidato { get; set; }
        public virtual Empresa Empresa { get; set; }
    }
}
