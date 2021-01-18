using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using SenaiTechVagas.WebApi.Repositories;
using SenaiTechVagas.WebApi.Utils;
using SenaiTechVagas.WebApi.ViewModels;

namespace SenaiTechVagas.WebApi.Controllers
{
    [Produces("application/json")]

    [Route("api/[controller]")]

    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private IUsuarioRepository usuarioRepository { get; set; }

        public UsuarioController()
        {
            usuarioRepository = new UsuarioRepository();
        }
   
        /// <summary>
        /// Método que adiciona um novo candidato.
        /// </summary>
        /// <param name="NovoCandidato"></param>
        /// <returns></returns>
        [HttpPost("Candidato")]
        public IActionResult CadastrarCandidato(CadastrarCandidatoViewModel NovoCandidato)
        {
            try
            {
                VerificacaoViewModel vm = new VerificacaoViewModel()
                {
                    Email = NovoCandidato.Email,
                    Rg = NovoCandidato.Email,
                    Cpf = NovoCandidato.Cpf,
                    Telefone = NovoCandidato.Telefone,
                    LinkLinkedinCandidato= NovoCandidato.LinkLinkedinCandidato
                };
                if (NovoCandidato.CaminhoImagem == null|| NovoCandidato.CaminhoImagem.Length<=2)
                    NovoCandidato.CaminhoImagem = "user.png";

                var Response = usuarioRepository.VerificarSeCredencialJaFoiCadastrada(vm);
                if (Response == null)
                {
                    NovoCandidato.Senha = Crypter.Criptografador(NovoCandidato.Senha);
                    if(usuarioRepository.CadastrarCandidato(NovoCandidato))
                        return Ok("Novo candidato inserido com sucesso!");
                    else
                        return BadRequest("Um erro ocorreu ao receber a sua requisição.");
                }
                else
                    return BadRequest(Response);
            }
            catch (Exception )
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

       /// <summary>
       /// Método que adiciona uma nova empresa
       /// </summary>
       /// <param name="empresa">Objeto nova empresa</param>
       /// <returns>Retorna uma empresa cadastrada</returns>
        [HttpPost("Empresa")]
        public IActionResult CadastrarEmpresa(CadastrarEmpresaViewModel empresa)
        {
            try
            {
                if (empresa.CaminhoImagem == null || empresa.CaminhoImagem.Length <= 2)
                    empresa.CaminhoImagem = "Teste.webp";
                VerificacaoViewModel vm = new VerificacaoViewModel()
                {
                    Email = empresa.Email,
                    RazaoSocial = empresa.RazaoSocial,
                    NomeFantasia=empresa.NomeFantasia,
                    Cnpj=empresa.Cnpj
                };
                var Response = usuarioRepository.VerificarSeCredencialJaFoiCadastrada(vm);
                if (Response == null)
                {
                    empresa.Senha = Crypter.Criptografador(empresa.Senha);
                    if (usuarioRepository.CadastrarEmpresa(empresa))
                        return Ok("Nova empresa cadastrada com sucesso!");
                    else
                        return BadRequest("Um erro ocorreu e nao foi possivel efetuar o cadastro.");
                }
                else
                    return BadRequest(Response);
            }
            catch (Exception e)
            {
                return BadRequest("Uma exceção ocorreu. Tente novamente.");
            }
        }

        /// <summary>
        /// Altera a senha do usuario logado no perfil
        /// </summary>
        /// <param name="vm"></param>
        /// <returns></returns>
        [Authorize]
        [HttpPut("AlterarSenha")]
        public IActionResult AlterarSenha(AlterarSenhaUsuarioLogadoViewModel vm)
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                if (usuarioRepository.AlterarSenhaUsuarioLogado(vm,idUsuario))
                {
                    return Ok("Senha alterada");
                }
                else
                {
                    return BadRequest("Não foi possivel alterar a senha");
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Método que recupera senha
        /// </summary>
        /// <param name="vm">objeto recuoerar senha</param>
        /// <returns>Retorna a senha recuperada</returns>
        [HttpPut("RecuperarSenha")]
        public IActionResult RecuperarSenha(RecuperarSenhaViewModel vm)
        {
            try
            { 
                if (usuarioRepository.RecuperarSenha(vm))
                {
                    return Ok("Senha alterada");
                }
                else
                {
                    return BadRequest("Não foi possivel alterar a senha");
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Métedo que lista Vagas publicadas.
        /// </summary>
        /// <returns>Retorna vagas publicadas</returns>
        [Authorize]
        [HttpGet("ListarTodasAsVagas")]
        public IActionResult ListarVagasEmGeral()
        {
            try
            {
                return Ok(usuarioRepository.ListarVagasEmGeral());
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Método que lista área.
        /// </summary>
        /// <returns>Retorna lista de área cadastradas</returns>
        [Authorize]
        [HttpGet("ListarArea")]
        public IActionResult ListarArea()
        {
            try
            {
                return Ok(usuarioRepository.ListarAreas());
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Método que busca Vaga
        /// </summary>
        /// <param name="idVaga">Identificador Vaga</param>
        /// <returns>REtorna Vaga buscada.</returns>
        [Authorize]
        [HttpGet("BuscarPorId/{idVaga}")]
        public IActionResult BuscarVagaPeloId(int idVaga)
        {
            try
            {
                return Ok(usuarioRepository.BuscarVagaPeloId(idVaga));
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Método que lista tecnologia cadastrados
        /// </summary>
        /// <returns>Retorna tecnogias.</returns>
        [Authorize]
        [HttpGet("ListarTecnologia")]
        public IActionResult ListarTecnologia()
        {
            try
            {
                return Ok(usuarioRepository.ListarTecnologia());
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Método que lista cursos cadastrados
        /// </summary>
        /// <returns>Retorna cursos cadastrados.</returns>
        [HttpGet("ListarCurso")]
        public IActionResult ListarCurso()
        {
            try
            {
                return Ok(usuarioRepository.ListarCurso());
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }


        /// <summary>
        /// Método que altera a imagem
        /// </summary>
        /// <param name="e">objeto imagem</param>
        /// <returns>Retorna uma nova imagem selecionada</returns>
        [Authorize]
        [HttpPut("AlterarImagem")]
        public IActionResult AlterarImagemPerfil([FromForm] string e)
        {
            try
            {
                var idUsuario = Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                var arquivo = Request.Form.Files[0];
                var NomeArquivo = arquivo.FileName;
                string Extensao = NomeArquivo.Split('.')[1].Trim();
                if (Extensao == "jpg" || Extensao == "png" || Extensao == "webp" || Extensao == "jpeg" || Extensao == "svg" || Extensao == "jfif")
                {
                    var a = usuarioRepository.AlterarImagemPerfil(idUsuario, arquivo);
                    return Ok(a);
                }
                return BadRequest("Não foi possivel atualizar");
            }
            catch (Exception)
            {
                return BadRequest(e);
            }
        }

        /// <summary>
        /// Método que armazena as imagens que o ususario seleciona na hora do cadastro
        /// </summary>
        /// <param name="e"></param>
        /// <returns></returns>
        [HttpPost("Image")]
        public IActionResult Post([FromForm] string e)
        {
            try
            {
                var arquivo = Request.Form.Files[0];

                var NomeArquivo = arquivo.FileName;
                string Extensao = NomeArquivo.Split('.')[1].Trim();
                if (Extensao == "jpg" || Extensao == "png" || Extensao == "webp" || Extensao == "jpeg" || Extensao == "svg" || Extensao == "jfif" ||Extensao == "tiff")
                {
                    var Imagem = usuarioRepository.Upload(arquivo, "ImageBackUp");
                    return Ok(Imagem);
                }
                return BadRequest("Este formato não é aceito");
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
