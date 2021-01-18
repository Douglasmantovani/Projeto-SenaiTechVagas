using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using SenaiTechVagas.WebApi.Contexts;
using SenaiTechVagas.WebApi.Domains;
using SenaiTechVagas.WebApi.Interfaces;
using SenaiTechVagas.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Repositories
{

    public class EmpresaRepository : UsuarioRepository,IEmpresaRepository
    {
        string stringConexao = "Data Source=.\\SQLEXPRESS; Initial Catalog=Db_TechVagas;integrated Security=True";
 
        public bool AtualizarEmpresaPorIdCorpo(int idUsuario, Empresa EmpresaAtualizada)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Empresa empresaBuscada = ctx.Empresa.FirstOrDefault(e=>e.IdUsuario==idUsuario);
                    if (empresaBuscada == null)
                        return false;

                    if (empresaBuscada.NomeReponsavel != null)
                    {
                        empresaBuscada.NomeReponsavel = EmpresaAtualizada.NomeReponsavel;
                    }
                    if (EmpresaAtualizada.Cnpj != null)
                    {
                        empresaBuscada.Cnpj = EmpresaAtualizada.Cnpj.Trim();
                    }
                    if (EmpresaAtualizada.EmailContato != null)
                    {
                        empresaBuscada.EmailContato = EmpresaAtualizada.EmailContato.Trim();
                    }
                    if (EmpresaAtualizada.NomeFantasia != null)
                    {
                        empresaBuscada.NomeFantasia = EmpresaAtualizada.NomeFantasia;
                    }
                    if (EmpresaAtualizada.RazaoSocial != null)
                    {
                        empresaBuscada.RazaoSocial = EmpresaAtualizada.RazaoSocial;
                    }
                    if (EmpresaAtualizada.Telefone != null)
                    {
                        empresaBuscada.Telefone = EmpresaAtualizada.Telefone.Trim();
                    }
                    if (EmpresaAtualizada.NumFuncionario != empresaBuscada.NumFuncionario)
                    {
                        empresaBuscada.NumFuncionario = EmpresaAtualizada.NumFuncionario;
                    }
                    if (EmpresaAtualizada.NumCnae != null)
                    {
                        empresaBuscada.NumCnae = EmpresaAtualizada.NumCnae.Trim();
                    }
                    if (EmpresaAtualizada.Cep != null)
                    {
                        empresaBuscada.Cep = EmpresaAtualizada.Cep.Trim();
                    }
                    if (EmpresaAtualizada.Logradouro != null)
                    {
                        empresaBuscada.Logradouro = EmpresaAtualizada.Logradouro;
                    }
                    if (EmpresaAtualizada.Complemento != null)
                    {
                        empresaBuscada.Complemento = EmpresaAtualizada.Complemento;
                    }
                    if (EmpresaAtualizada.Localidade != null)
                    {
                        empresaBuscada.Localidade = EmpresaAtualizada.Localidade;
                    }
                    if (EmpresaAtualizada.Uf != null)
                    {
                        empresaBuscada.Uf = EmpresaAtualizada.Uf;
                    }

                    ctx.Update(empresaBuscada);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        public bool AdicionarVaga(Vaga vaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    vaga.DataExpiracao = DateTime.Now.AddDays(30);
                    vaga.DataPublicacao = DateTime.Now;
                    ctx.Add(vaga);
                    ctx.SaveChanges();
                    var VagaNova=ctx.Vaga.FirstOrDefault(v=>v==vaga);
                    AdicionarTecnologiaNaVaga(new VagaTecnologia { IdVaga=VagaNova.IdVaga,IdTecnologia=1});
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public bool AtualizarVaga(int idVaga, AtualizarVagaViewModel vaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Vaga vagaBuscada = ctx.Vaga.Find(idVaga);
                    if (vagaBuscada == null)
                        return false;

                    if (vaga.Cep != null)
                        vagaBuscada.Cep = vaga.Cep.Trim();

                    if (vaga.TituloVaga != null)
                        vagaBuscada.TituloVaga = vaga.TituloVaga.Trim();

                    if (vaga.idTipoPresenca != 0)
                        vagaBuscada.IdTipoRegimePresencial = vaga.idTipoPresenca;

                    if (vaga.Complemento != null)
                        vagaBuscada.Complemento = vaga.Complemento;

                    if (vaga.DescricaoBeneficio != null)
                        vagaBuscada.DescricaoBeneficio = vaga.DescricaoBeneficio;

                    if (vaga.DescricaoEmpresa != null)
                        vagaBuscada.DescricaoEmpresa = vaga.DescricaoEmpresa;

                    if (vaga.DescricaoVaga != null)
                        vagaBuscada.DescricaoVaga = vaga.DescricaoVaga;

                    if (vaga.Estado != null)
                        vagaBuscada.Estado = vaga.Estado;

                    if (vaga.Experiencia != null)
                        vagaBuscada.Experiencia = vaga.Experiencia;

                    if (vaga.Localidade != null)
                        vagaBuscada.Localidade = vaga.Localidade;

                    if (vaga.IdArea != vagaBuscada.IdArea&&vaga.IdArea!=0)
                        vagaBuscada.IdArea = vaga.IdArea;

                    if (vaga.Logradouro != null)
                        vagaBuscada.Logradouro = vaga.Logradouro;

                    if (vaga.Salario != 0)
                        vagaBuscada.Salario = vaga.Salario;

                    if (vaga.TipoContrato != null)
                        vagaBuscada.TipoContrato = vaga.TipoContrato;

                    ctx.Update(vagaBuscada);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    return false;
                }
            }
        }
        public bool DeletarVaga(int idVaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Vaga vagaBuscada = ctx.Vaga.Find(idVaga);
                    if (vagaBuscada == null)
                        return false;

                    List<Inscricao> BuscarInscricoes = ctx.Inscricao.Where(u => u.IdVaga == vagaBuscada.IdVaga).ToList();
                    for (int i = 0; i < BuscarInscricoes.Count; i++)
                    {
                        ctx.Remove(BuscarInscricoes[i]);
                        ctx.SaveChanges();
                    }
                    List<VagaTecnologia> VagaTecnologia = ctx.VagaTecnologia.Where(v => v.IdVaga == vagaBuscada.IdVaga).ToList();
                    for (int i = 0; i < VagaTecnologia.Count; i++)
                    {
                        ctx.Remove(VagaTecnologia[i]);
                        ctx.SaveChanges();
                    }
                    ctx.Remove(vagaBuscada);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }
        public bool VerificarSeTecnologiaFoiAdicionada(int idTecnologia, int idVaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    VagaTecnologia vaga = ctx.VagaTecnologia.FirstOrDefault(v => v.IdTecnologia == idTecnologia && v.IdVaga == idVaga);
                    if (vaga != null)
                        return true;

                    return false;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }
        public void ExpirarVaga()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    List<Vaga> VagasExpiradas = ctx.Vaga.Where(v => v.DataExpiracao >= DateTime.Now).ToList();
                    for(int i = 0; i < VagasExpiradas.Count; i++)
                    {
                        DeletarVaga(VagasExpiradas[i].IdVaga);
                    }
                    ctx.SaveChanges();
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                }
            }
        }
        public bool AdicionarTecnologiaNaVaga(VagaTecnologia vagaTecnologia)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    VagaTecnologia vaga = ctx.VagaTecnologia.FirstOrDefault(u => u.IdVaga == vagaTecnologia.IdVaga && u.IdTecnologia == 1);
                    if (vaga == null)
                    {
                        ctx.Add(vagaTecnologia);
                        ctx.SaveChanges();
                        return true;
                    }
                    else
                    {
                        ctx.Add(vagaTecnologia);
                        ctx.Remove(vaga);
                        ctx.SaveChanges();
                        return true;
                    }
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public bool RemoverTecnologiaDaVaga(VagaTecnologia vaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    var BuscandoVagaTecnologia = ctx.VagaTecnologia.FirstOrDefault(u => u == vaga);
                    if (BuscandoVagaTecnologia == null)
                        return false;

                    int Vaga = ctx.VagaTecnologia.Where(u => u.IdVaga == vaga.IdVaga).Count();
                    if (Vaga == 1)
                        return false;

                    ctx.Remove(BuscandoVagaTecnologia);
                    ctx.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }


        public bool AprovarCandidato(int idInscricao)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Inscricao inscricaoBuscada = ctx.Inscricao.Find(idInscricao);
                    if (inscricaoBuscada == null)
                        return false;
                    if (inscricaoBuscada.IdStatusInscricao == 2 && inscricaoBuscada.IdStatusInscricao != 3)
                    {
                        inscricaoBuscada.IdStatusInscricao = 1;
                        ctx.Update(inscricaoBuscada);
                        ctx.SaveChanges();
                        return true;
                    }
                    return false;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public bool ReprovarCandidato(int idInscricao)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Inscricao inscricaoBuscada = ctx.Inscricao.Find(idInscricao);
                    if (inscricaoBuscada == null)
                        return false;

                    if (inscricaoBuscada.IdStatusInscricao == 2 && inscricaoBuscada.IdStatusInscricao != 1)
                    {
                        inscricaoBuscada.IdStatusInscricao = 3;
                        ctx.Update(inscricaoBuscada);
                        ctx.SaveChanges();
                        return true;
                    }
                    return false;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public List<ListarVagasViewModel> ListarVagasDaEmpresa(int idEmpresa)
        {
            try
            {
                List<ListarVagasViewModel> listvagas = new List<ListarVagasViewModel>();

                // Declara a SqlConnection passando a string de conexão
                using (SqlConnection con = new SqlConnection(stringConexao))
                {
                    // Declara a instrução a ser executada
                    string querySelectAll =
                    "SELECT U.CaminhoImagem,v.DataExpiracao,trp.NomeTipoRegimePresencial,are.NomeArea,v.TituloVaga,e.RazaoSocial,v.IdVaga,t.NomeTecnologia,v.Experiencia,v.TipoContrato,v.Salario,v.Localidade FROM VagaTecnologia" +
                    " INNER JOIN Vaga v on v.IdVaga = VagaTecnologia.IdVaga" +
                    " INNER JOIN Tecnologia t on t.IdTecnologia = VagaTecnologia.IdTecnologia" +
                    " INNER JOIN Empresa e on e.IdEmpresa = v.IdEmpresa" +
                    " INNER JOIN Usuario U ON U.IdUsuario=e.IdUsuario" +
                    " INNER JOIN Area are on are.IdArea=v.IdArea" +
                    " INNER JOIN TipoRegimePresencial trp on trp.IdTipoRegimePresencial=v.IdTipoRegimePresencial" +
                    " WHERE e.IdEmpresa =@IDEmpresa";
                    con.Open();

                    // Declara o SqlDataReader para receber os dados do banco de dados
                    SqlDataReader rdr;

                    // Declara o SqlCommand passando o comando a ser executado e a conexão
                    using (SqlCommand cmd = new SqlCommand(querySelectAll, con))
                    {
                        cmd.Parameters.AddWithValue("@IDEmpresa", idEmpresa);
                        // Executa a query e armazena os dados no rdr
                        rdr = cmd.ExecuteReader();

                        // Enquanto houver registros para serem lidos no rdr, o laço se repete
                        while (rdr.Read())
                        {
                            bool teveAcao = false;

                            // Instancia um objeto jogo 
                            ListarVagasViewModel vm = new ListarVagasViewModel
                            {

                                // Atribui às propriedades os valores das colunas da tabela do banco
                                IdVaga = Convert.ToInt32(rdr["IdVaga"]),
                                Experiencia = rdr["Experiencia"].ToString(),
                                TipoContrato = rdr["TipoContrato"].ToString(),
                                CaminhoImagem = rdr["CaminhoImagem"].ToString(),
                                Localidade = rdr["Localidade"].ToString(),
                                Salario = Convert.ToDecimal(rdr["Salario"]),
                                RazaoSocial = rdr["RazaoSocial"].ToString(),
                                NomeArea = rdr["NomeArea"].ToString(),
                                TituloVaga = rdr["TituloVaga"].ToString(),
                                TipoPresenca = rdr["NomeTipoRegimePresencial"].ToString(),
                                DataExpiracao = Convert.ToDateTime(rdr["DataExpiracao"]).ToString("dd/MM/yyyy")
                            };
                            var NomeTecnologia = rdr["NomeTecnologia"].ToString();
                            vm.Tecnologias = new List<string>();

                            for (int i = 0; i < listvagas.Count; i++)
                            {
                                if (vm.IdVaga == listvagas[i].IdVaga)
                                {
                                    listvagas[i].Tecnologias.Add(NomeTecnologia);
                                    teveAcao = true;
                                }
                            }
                            if (teveAcao == true)
                                continue;
                            else vm.Tecnologias.Add(NomeTecnologia);
                            // Adiciona a vaga criada à lista de vagas
                            listvagas.Add(vm);
                        }
                    }
                }
                // Retorna a lista de vagas
                return listvagas;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public bool VerificarSeaVagaPertenceaEmpresa(int idEmpresa,int idVaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    Vaga vagaBuscada = ctx.Vaga.FirstOrDefault(a => a.IdEmpresa == idEmpresa&&a.IdVaga==idVaga);
                    if (vagaBuscada == null)
                        return true;

                    return false;
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }

        public List<Inscricao> ListarCandidatosInscritos(int idVaga)
        {
            using (DbSenaiContext ctx=new DbSenaiContext())
            { 
                try
                {
                     return ctx.Inscricao.Select(u =>
                    new Inscricao {IdVaga=u.IdVaga,IdStatusInscricao=u.IdStatusInscricao,IdInscricao=u.IdInscricao,IdCandidato=u.IdCandidato,IdCandidatoNavigation = 
                    new Candidato {NomeCompleto = u.IdCandidatoNavigation.NomeCompleto, Telefone = u.IdCandidatoNavigation.Telefone, IdCursoNavigation = 
                    new Curso { NomeCurso = u.IdCandidatoNavigation.IdCursoNavigation.NomeCurso },IdUsuarioNavigation=
                    new Usuario {CaminhoImagem=u.IdCandidatoNavigation.IdUsuarioNavigation.CaminhoImagem,Email=u.IdCandidatoNavigation.IdUsuarioNavigation.Email } } })
                    .Where(u=>u.IdStatusInscricao==2 &&u.IdVaga==idVaga).ToList();
                }
                catch (Exception)
                {
                return null;
                }
            }
        }
        public Empresa BuscarEmpresaPorIdUsuario(int idUsuario)
        {
            using(DbSenaiContext ctx=new DbSenaiContext())
            {
                try
                {
                    return ctx.Empresa.Select(u => new Empresa {IdEmpresa=u.IdEmpresa,IdUsuario=u.IdUsuario,NomeReponsavel=u.NomeReponsavel,Cnpj=u.Cnpj,
                    EmailContato=u.EmailContato,
                    NomeFantasia=u.NomeFantasia,
                    RazaoSocial=u.RazaoSocial,
                    Telefone=u.Telefone,
                    NumFuncionario=u.NumFuncionario,
                    NumCnae=u.NumCnae,
                    Cep=u.Cep,
                    Logradouro=u.Logradouro,Complemento=u.Complemento,
                    Localidade=u.Localidade,
                    Uf=u.Uf,
                    IdUsuarioNavigation=new Usuario { CaminhoImagem=u.IdUsuarioNavigation.CaminhoImagem}
                    })
                    .FirstOrDefault(u=>u.IdUsuario==idUsuario);
                }
                catch (Exception)
                {
                    return null;
                }
            }
        }

        public List<TipoRegimePresencial> ListarTipoPresenca()
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.TipoRegimePresencial.ToList();
                }
                catch (Exception)
                {
                    return null;
                }
            }
        }

        public List<Inscricao> ListarCandidatosAprovados(int idVaga)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                    return ctx.Inscricao.Select(u =>
                    new Inscricao
                    {
                        IdCandidato = u.IdCandidato,
                        IdInscricao = u.IdInscricao,
                        IdVaga=u.IdVaga,
                        IdStatusInscricao=u.IdStatusInscricao,
                        IdCandidatoNavigation =
                    new Candidato
                    {
                        NomeCompleto = u.IdCandidatoNavigation.NomeCompleto,
                        Telefone = u.IdCandidatoNavigation.Telefone,
                        IdCursoNavigation =
                    new Curso { NomeCurso = u.IdCandidatoNavigation.IdCursoNavigation.NomeCurso },
                        IdUsuarioNavigation =
                    new Usuario { CaminhoImagem = u.IdCandidatoNavigation.IdUsuarioNavigation.CaminhoImagem, Email = u.IdCandidatoNavigation.IdUsuarioNavigation.Email }
                    }
                    }).Where(u => u.IdStatusInscricao == 1&&u.IdVaga==idVaga).ToList();
                }
                catch (Exception)
                {
                    return null;
                }
            }
        }

        public List<Candidato> ListarCandidatosEstagiandoNaEmpresa(int idEmpresa)
        {
            using (DbSenaiContext ctx = new DbSenaiContext())
            {
                try
                {
                     List<Candidato> cList = new List<Candidato>();
                    var Estagios = ctx.Estagio.Where(u=>u.IdEmpresa==idEmpresa).ToList();
                    for (int i=0;i<Estagios.Count;i++)
                    {
                    var c = ctx.Candidato.Select(u =>new Candidato {IdCandidato=u.IdCandidato,Cpf=u.Cpf,Telefone=u.Telefone,NomeCompleto=u.NomeCompleto,IdUsuarioNavigation=new Usuario { CaminhoImagem=u.IdUsuarioNavigation.CaminhoImagem} }).FirstOrDefault(u=>u.IdCandidato==Estagios[i].IdCandidato);
                        cList.Add(c);
                    }
                    return cList;
                }
                catch (Exception )
                {
                    return null;
                }
            }
        }
    }
}
