using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SenaiTechVagas.WebApi.Domains
{
    public partial class Candidato
    {
        public Candidato()
        {
            Estagio = new HashSet<Estagio>();
            Inscricao = new HashSet<Inscricao>();
        }


        public int IdCandidato { get; set; }

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
        public int IdUsuario { get; set; }

        public virtual Curso IdCursoNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual ICollection<Estagio> Estagio { get; set; }
        public virtual ICollection<Inscricao> Inscricao { get; set; }
    }
}
