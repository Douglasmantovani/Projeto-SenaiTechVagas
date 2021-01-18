using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authorization.Infrastructure;
using Microsoft.AspNetCore.Http;
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
    public class CandidatoController : ControllerBase
    {
        // Este controlador está na sequência CRUD -  Criar, Ler, Atualizar e Deletar

        private ICandidatoRepository _candidatoRepository { get; set; }

        public CandidatoController()
        {
            _candidatoRepository = new CandidatoRepository();
        }

       /// <summary>
       /// Método que atualiza informações do candidato.
       /// </summary>
       /// <param name="candidato">Objeto candidato</param>
       /// <returns>Retorna candidato com suas informações atualizadas.</returns>
        [Authorize(Roles="2")]
        [HttpPut("AtualizarCandidato")]
        public IActionResult AtualizarCandidato(Candidato candidato)
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                Candidato candidatoBuscado = _candidatoRepository.BuscarCandidatoPorIdUsuario(idUsuario);
                if (candidatoBuscado == null)
                    return BadRequest();

                if (_candidatoRepository.AtualizarCandidato(idUsuario, candidato))
                    return Ok();
                else
                    return BadRequest();
            }
            catch
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

        /// <summary>
        /// Método para Candidato se inscrever
        /// </summary>
        /// <param name="InscricaoNovo">Objeto InscricaoNovo</param>
        /// <returns>Retorna uma nova inscrição na vaga.</returns>
        [Authorize(Roles = "2")]
        [HttpPost("AdicionarInscricao")]
        public IActionResult AdicionarInscricao(Inscricao InscricaoNovo)
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                Candidato candidatoBuscado = _candidatoRepository.BuscarCandidatoPorIdUsuario(idUsuario);
                if (candidatoBuscado == null)
                    return BadRequest();

                if (_candidatoRepository.VerificarSeInscricaoExiste(InscricaoNovo.IdVaga, candidatoBuscado.IdCandidato))
                    return BadRequest("Inscricao ja existe");

                InscricaoNovo.IdCandidato = candidatoBuscado.IdCandidato;
                if (_candidatoRepository.SeInscrever(InscricaoNovo))
                    return Ok("Inscricao cadastrada com sucesso");
                else
                    return BadRequest("Não foi possivel cadastrar a inscricao");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Método de revogar a inscrição da vaga.
        /// </summary>
        /// <param name="idInscricao">Identificador Inscrição</param>
        /// <returns>Retonar uma revogação de inscrição.</returns>
        [Authorize(Roles = "2")]
        [HttpDelete("RevogarInscricao/{idInscricao}")]
        public IActionResult DeletarInscricao(int idInscricao)
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                Candidato candidatoBuscado = _candidatoRepository.BuscarCandidatoPorIdUsuario(idUsuario);
                if (candidatoBuscado == null)
                    return BadRequest();

                if (_candidatoRepository.RevogarInscricao(idInscricao,candidatoBuscado.IdCandidato))
                    return Ok("Inscricao deletada com sucesso");
                else
                    return BadRequest("Não foi possivel deletar o Inscricao");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Método que lista vagas em inscritas do candidatos.
        /// </summary>
        /// <returns>Retorna vagas em inscritas do candidato.</returns>
        [Authorize(Roles ="2")]
        [HttpGet("ListarVagasInscritas")]
        public IActionResult ListarVagasInscritas()
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                return Ok(_candidatoRepository.ListarInscricoes(idUsuario));
            }
            catch(Exception)
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

        /// <summary>
        /// Lista todas as vagas relacionadas a área do candidato
        /// </summary>
        /// <returns></returns>
        [Authorize(Roles = "2")]
        [HttpGet("ListarVagasPrincipal")]
        public IActionResult ListarVagasPrincipal()
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                Candidato c=_candidatoRepository.BuscarCandidatoPorIdUsuario(idUsuario);

                return Ok(_candidatoRepository.ListarVagasArea(c.IdCurso));
            }
            catch (Exception)
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

        /// <summary>
        /// Método que busca candidato.
        /// </summary>
        /// <returns>Retorna candidato buscado.</returns>
        [Authorize(Roles = "2")]
        [HttpGet("BuscarCandidatoPorId")]
        public IActionResult BuscarCandidatoPorId()
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                return Ok(_candidatoRepository.BuscarCandidatoPorIdUsuario(idUsuario));
            }
            catch (Exception)
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }
    }
}
