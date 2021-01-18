using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Interfaces
{
    interface IEmpresaRepository
    {
        bool AtualizarEmpresaPorIdCorpo(int idUsuario, Empresa EmpresaAtualizada);
        bool AtualizarVaga(int idVaga, AtualizarVagaViewModel vaga);
        bool AdicionarVaga(Vaga vaga);
        bool AdicionarTecnologiaNaVaga(VagaTecnologia vagaTecnologia);
        bool DeletarVaga(int idVaga);
        void ExpirarVaga();
        bool RemoverTecnologiaDaVaga(VagaTecnologia vaga);
        bool AprovarCandidato(int idInscricao);
        bool ReprovarCandidato(int idInscricao);
        List<ListarVagasViewModel> ListarVagasDaEmpresa(int idEmpresa);
        List<Inscricao> ListarCandidatosInscritos(int idVaga);
        List<Inscricao> ListarCandidatosAprovados(int idVaga);
        Empresa BuscarEmpresaPorIdUsuario(int idUsuario);
        List<Candidato> ListarCandidatosEstagiandoNaEmpresa(int idEmpresa);
        List<TipoRegimePresencial> ListarTipoPresenca();
        /*------------VERIFICAÇÕES INICIO-------------*/
        bool VerificarSeaVagaPertenceaEmpresa(int idEmpresa, int idVaga);
        bool VerificarSeTecnologiaFoiAdicionada(int idTecnologia, int idVaga);
        /*------------VERIFICAÇÕES FIM------------------*/
    }
}
