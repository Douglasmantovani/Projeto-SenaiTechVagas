using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using SenaiTechVagas.WebApi.Repositories;
using SenaiTechVagas.WebApi.ViewModels;

namespace SenaiTechVagas.WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class EmpresaController : ControllerBase
    {
        private IEmpresaRepository _empresaIRepository { get; set; }

        public EmpresaController()
        {
            _empresaIRepository = new EmpresaRepository();
        }

        /// <summary>
        /// Método que expira a vaga
        /// </summary>
        [HttpGet("ExpirarVagas")]
        public void ExpirarVaga()
        {
            try
            {
                _empresaIRepository.ExpirarVaga();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        /// <summary>
        /// Métedo que atualiza todas as informações Empresa.
        /// </summary>
        /// <param name="empresa">Objeto nova empresa</param>
        /// <returns>Retorna uma empresa com as informações atualizadas</returns>
        //[Authorize(Roles="3")]
        [HttpPut("AtualizarEmpresa")]
        public IActionResult AtualizarEmpresa( Empresa empresa)
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                return Ok(_empresaIRepository.AtualizarEmpresaPorIdCorpo(idUsuario, empresa));
            }
            catch(Exception)
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }
        /// <summary>
        /// Método que adiciona uma nova vaga
        /// </summary>
        /// <param name="VagaNovo">Objeto nova vaga</param>
        /// <returns>Retorna uma nova vaga cadastrada</returns>
        [Authorize(Roles = "3")]
        [HttpPost("AdicionarVaga")]
        public IActionResult AdicionarVaga(Vaga VagaNovo)
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                Empresa empresa = _empresaIRepository.BuscarEmpresaPorIdUsuario(idUsuario);
                if (empresa == null)
                    return BadRequest();

                VagaNovo.IdEmpresa = empresa.IdEmpresa;
                if (_empresaIRepository.AdicionarVaga(VagaNovo))
                    return Ok("Vaga cadastrado com sucesso");
                else
                    return BadRequest("Não foi possivel cadastrar a vaga,verifique se as informaçoes foram preenchidas corretamente");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        /// <summary>
        /// Método que lista candidatos estagiando
        /// </summary>
        /// <returns>Retorna uma lista de candidatos estagiando</returns>
        [Authorize(Roles = "3")]
        [HttpGet("ListarCandidatosEstagiando")]
        public IActionResult ListarCandidatosEstagiando()
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                Empresa empresa = _empresaIRepository.BuscarEmpresaPorIdUsuario(idUsuario);
                if (empresa == null)
                    return BadRequest();

                    return Ok(_empresaIRepository.ListarCandidatosEstagiandoNaEmpresa(empresa.IdEmpresa));
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        /// <summary>
        /// Adiciona uma tecnologia a vaga
        /// </summary>
        /// <param name="vagaTecnologia"></param>
        /// <returns></returns>
        [Authorize(Roles = "3")]
        [HttpPost("AdicionarTecnologiaNaVaga")]
        public IActionResult AdicionarTecnologia(VagaTecnologia vagaTecnologia)
        {
            try
            {
                if (_empresaIRepository.VerificarSeTecnologiaFoiAdicionada(vagaTecnologia.IdTecnologia, vagaTecnologia.IdVaga))
                    return BadRequest("Essa tecnologia ja foi adicionada");

                if (_empresaIRepository.AdicionarTecnologiaNaVaga(vagaTecnologia))
                    return Ok("Tecnologia adicionada com sucesso");
                else
                    return BadRequest("Não foi possivel cadastrar a tecnologia");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        /// <summary>
        /// Método que remove vaga que a empresa publicou
        /// </summary>
        /// <param name="idVaga">Identificador de vaga</param>
        /// <returns>Remove a vaga</returns>    
        [Authorize(Roles = "3")]
        [HttpDelete("DeletarVagaEmpresa/{idVaga}")]
        public IActionResult DeletarVaga(int idVaga)
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                Empresa empresa = _empresaIRepository.BuscarEmpresaPorIdUsuario(idUsuario);
                if (empresa == null)
                    return BadRequest();

                if (_empresaIRepository.VerificarSeaVagaPertenceaEmpresa(empresa.IdEmpresa, idVaga))
                    return BadRequest("Essa vaga não pertece a sua empresa");

                if (_empresaIRepository.DeletarVaga(idVaga))
                    return Ok("Vaga deletada com sucesso");
                else
                    return BadRequest("Não foi possivel cadastrar a Vaga");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        
        /// <summary>
        /// Método que aprova um candidato na vaga da empresa
        /// </summary>
        /// <param name="idInscricao">Identificador da inscrição</param>
        /// <returns>Retorna um candidato aprovado na vaga</returns>
        [Authorize(Roles = "3")]
        [HttpPut("Aprovar/{idInscricao}")]
        public IActionResult AprovarCandidato(int idInscricao)
        {
            try
            {
                if (_empresaIRepository.AprovarCandidato(idInscricao))
                    return Ok("Candidato aprovado");
                else
                    return BadRequest("Erro ao aprovar esse candidato");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        /// <summary>
        /// Método que reprova candidato na vaga inscrita
        /// </summary>
        /// <param name="idInscricao">Identificador de inscrição</param>
        /// <returns>Retorna um candidato reprovado</returns>
        [Authorize(Roles = "3")]
        [HttpPut("Reprovar/{idInscricao}")]
        public IActionResult ReprovarCandidato(int idInscricao)
        {
            try
            {
                //Verificacao se a inscricao pertence a empresa
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                Empresa empresa = _empresaIRepository.BuscarEmpresaPorIdUsuario(idUsuario);
                if (empresa == null)
                    return BadRequest();

                if (_empresaIRepository.ReprovarCandidato(idInscricao))
                    return Ok("Candidato reprovado");
                else
                    return BadRequest("Erro ao reprovar esse candidato");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        /// <summary>
        /// Método que lista vagas que a empresa publicou
        /// </summary>
        /// <returns>Retorna lista de vagas publicadas</returns>
        [Authorize(Roles = "3")]
        [HttpGet("ListarVagasPublicadas")]
        public IActionResult ListarVagas()
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                Empresa empresa = _empresaIRepository.BuscarEmpresaPorIdUsuario(idUsuario);
                if (empresa == null)
                    return BadRequest();

                return Ok(_empresaIRepository.ListarVagasDaEmpresa(empresa.IdEmpresa));
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }


        /// <summary>
        /// Método que lista tipo de presença
        /// </summary>
        /// <returns>Retorna uma lista de presença</returns>
        [Authorize(Roles = "3")]
        [HttpGet("ListarTipoPresenca")]
        public IActionResult ListaTipoRegimePresencial()
        {
            try
            {
                return Ok(_empresaIRepository.ListarTipoPresenca());
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Lista todos os candidatos naquela vaga em especifico
        /// </summary>
        /// <param name="idVaga"></param>
        /// <returns></returns>
        [Authorize(Roles ="3")]
        [HttpGet("ListarCandidatosInscritos/{idVaga}")]
        public IActionResult ListarCandidatosInscritos(int idVaga)
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                Empresa empresa = _empresaIRepository.BuscarEmpresaPorIdUsuario(idUsuario);
                if (empresa == null)
                    return BadRequest();

                if (_empresaIRepository.VerificarSeaVagaPertenceaEmpresa(empresa.IdEmpresa, idVaga))
                    return BadRequest("Essa vaga não pertece a sua empresa");

                return Ok(_empresaIRepository.ListarCandidatosInscritos(idVaga));
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        /// <summary>
        ///Método que atualiza vaga publicada
        /// </summary>
        /// <param name="idVaga">Identificador da vaga</param>
        /// <param name="Vaga">Objeto vaga</param>
        /// <returns>Retorna uma vaga atualizada</returns>
        [Authorize(Roles = "3")]
        [HttpPut("AtualizarVagaEmpresa/{idVaga}")]
        public IActionResult AtualizarVaga(int idVaga,AtualizarVagaViewModel Vaga)
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                Empresa empresa = _empresaIRepository.BuscarEmpresaPorIdUsuario(idUsuario);
                if (empresa == null)
                    return BadRequest();

                if (_empresaIRepository.VerificarSeaVagaPertenceaEmpresa(empresa.IdEmpresa, idVaga))
                    return BadRequest("Essa vaga não pertece a sua empresa");

                if (_empresaIRepository.AtualizarVaga(idVaga, Vaga))
                    return Ok("Vaga atualizada com sucesso");
                else
                    return BadRequest("Não foi possivel atualizar");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        /// <summary>
        /// Método que lista candidatos aprovados na vaga
        /// </summary>
        /// <param name="idVaga">Identificador da vaga</param>
        /// <returns>Retorna lista de candidatos aprovados</returns>
        [Authorize(Roles = "3")]
        [HttpGet("ListarCandidatosAprovados/{idVaga}")]
        public IActionResult ListarCandidatoAprovados(int idVaga)
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                Empresa empresa = _empresaIRepository.BuscarEmpresaPorIdUsuario(idUsuario);
                if (empresa == null)
                    return BadRequest();

                if (_empresaIRepository.VerificarSeaVagaPertenceaEmpresa(empresa.IdEmpresa,idVaga))
                    return BadRequest("Essa vaga não pertece a sua empresa");

                return Ok(_empresaIRepository.ListarCandidatosAprovados(idVaga));
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        /// <summary>
        /// Método que remove tecnologia adicionada na vaga
        /// </summary>
        /// <param name="vaga">Identificador da vaga</param>
        /// <returns>Retorna uma vaga sem a tecnologia removida</returns>
        [Authorize(Roles = "3")]
        [HttpDelete("DeletarTecnologiaDaVaga")]
        public IActionResult DeletarVagaTecnologia(VagaTecnologia vaga)
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                Empresa empresa = _empresaIRepository.BuscarEmpresaPorIdUsuario(idUsuario);
                if (empresa == null)
                    return BadRequest();

                if (_empresaIRepository.VerificarSeaVagaPertenceaEmpresa(empresa.IdEmpresa,vaga.IdVaga))
                    return BadRequest("Essa vaga não pertece a sua empresa");

                if (_empresaIRepository.RemoverTecnologiaDaVaga(vaga))
                    return Ok("Tecnologia removida da vaga com sucesso");
                else
                    return BadRequest("Não foi possivel remover a tecnologia");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Método que busca empresa pelo seu identificador
        /// </summary>
        /// <returns>Retorna uma empresa buscada</returns>
        [Authorize(Roles = "3")]
        [HttpGet("BuscarEmpresaPorId")]
        public IActionResult BuscarCandidatoPorId()
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                return Ok(_empresaIRepository.BuscarEmpresaPorIdUsuario(idUsuario));
            }
            catch (Exception)
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }
    }
}