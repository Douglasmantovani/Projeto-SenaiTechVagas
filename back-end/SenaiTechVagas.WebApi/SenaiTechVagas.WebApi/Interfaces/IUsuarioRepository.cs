using Microsoft.AspNetCore.Http;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Interfaces
{
     interface IUsuarioRepository
    {
        Usuario Login(string email, string senha);
        List<Curso> ListarCurso();
        bool CadastrarCandidato(CadastrarCandidatoViewModel NovoCandidato);
        bool CadastrarEmpresa(CadastrarEmpresaViewModel empresa);
        List<Vaga> ListarVagasEmGeral();
        string VerificarSeCredencialJaFoiCadastrada(VerificacaoViewModel vm);
        VagaCompletaViewModel BuscarVagaPeloId(int id);
        bool RecuperarSenha(RecuperarSenhaViewModel vm);
        bool AlterarSenhaUsuarioLogado(AlterarSenhaUsuarioLogadoViewModel vm,int idUsuario);
        List<Tecnologia> ListarTecnologia();
        List<Area> ListarAreas();
        string AlterarImagemPerfil(int idUsuario,IFormFile imagem);
        string Upload(IFormFile arquivo, string savingFolder);
    }
}
