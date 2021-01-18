using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Interfaces
{
    interface IAdministradorRepository
    {
        bool CadastrarArea(Area area);
        Candidato BuscarCandidatoPorIdUsuarioAdm(int idUsuario);
        List<ListarVagasViewModel> ListarVagasDaEmpresaAdm(int idEmpresa);
        bool AtualizarArea(int idArea, Area area);
        bool CadastrarCurso(Curso curso);
        Empresa BuscarEmpresaPorIdUsuarioAdm(int idUsuario);
        bool AtualizarCurso(int id, Curso curso);
        List<ListarEstagiosViewModel> ListarEstagios();
        string CadastrarEstagio(Estagio estagio);
        bool DeletarEstagioPorId(int idEstagio);
        bool DeletarUsuarioBanido(int idUsuario);
        bool AtualizarEstagio(int idEstagio,int estagioAtualizado);
        int [] ContadorCadastros();
        List<TipoUsuario> ListarTipoUsuario();
        bool CadastrarTipoUsuario(TipoUsuario tipoUsuario);
        bool AtualizarTipoUsuario(int id, TipoUsuario tipoUsuario);
        List<StatusInscricao> ListarStatusInscricao();
        bool CadastrarStatusInscricao(StatusInscricao statusInscricao);
        bool AtualizarStatusInscricao(int id, StatusInscricao status);
        bool CadastrarTecnologia(Tecnologia tecnologia);
        bool AtualizarTecnologia(int id, Tecnologia tecnologia);
        List<Candidato> ListarCandidatos();
        bool DeletarCandidato(int IdUsuario);
        bool DeletarInscricao(int idInscricao);
        List<Empresa> ListarEmpresa();
        bool DeletarEmpresaPorId(int idUsuario);
        bool DeletarVagaEmpresa(int idVaga);
        bool BanirUsuario(int id);
        bool DesbanirUsuario(int id);
        List<Usuario>ListaDebanidos();
        bool CadastrarAdministardor(Usuario usuario);
        bool DeletarAdministrador(int id);
        List<Usuario> ListarAdministradores();
        bool VerificarSeExiste(int idCandidato);
        bool AlterarSenhaDoUsuario(string email, string NovaSenha);
        List<Inscricao> ListarCandidatosInscritosEmpresa(int idVaga);
        List<Usuario> ListarEmailsCandidato();
        List<Empresa> ListarNomeEmpresas();
        bool AdicionarTipoPresenca(TipoRegimePresencial trp);
        bool AtualizarTipoPresenca(int id,TipoRegimePresencial trp);
        string BuscarImagemPerfilAdm(int idAms);
        List<ListarVagasViewModel> ListarInscricoes(int idUsuario);
    }
}
