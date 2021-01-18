USE Db_TechVagas
GO

--DQL

SELECT * FROM TipoUsuario
GO

SELECT * FROM StatusInscricao
GO

SELECT * FROM Tecnologia
GO

SELECT * FROM Usuario
GO

SELECT * FROM Area
GO

SELECT * FROM Curso
GO

SELECT * FROM TipoRegimePresencial
GO

SELECT * FROM Empresa
GO

SELECT * FROM Candidato
GO

SELECT * FROM Inscricao
GO

SELECT * FROM Vaga
GO

SELECT * FROM VagaTecnologia
GO

SELECT * FROM Estagio
GO

--Lista so os atributos necessarios
SELECT  v.IdVaga,NomeTecnologia,v.Experiencia, TipoContrato, Salario,RazaoSocial,v.Localidade FROM VagaTecnologia      
INNER JOIN Tecnologia ON Tecnologia.IdTecnologia=VagaTecnologia.IdTecnologia
INNER JOIN Vaga v ON v.IdVaga=VagaTecnologia.IdVaga 
INNER JOIN Empresa ON Empresa.IdEmpresa=v.IdEmpresa
GO

--Lista todos os atributos da vaga...
SELECT * FROM VagaTecnologia
INNER JOIN Vaga ON Vaga.IdVaga=VagaTecnologia.IdVaga
INNER JOIN Tecnologia ON Tecnologia.IdTecnologia=VagaTecnologia.IdTecnologia
INNER JOIN Empresa ON Empresa.IdEmpresa=Vaga.IdEmpresa
GO


SELECT inscri.DataInscricao,trp.NomeTipoRegimePresencial,inscri.IdInscricao,are.NomeArea,v.TituloVaga,e.RazaoSocial,v.IdVaga,t.NomeTecnologia,v.Experiencia,v.TipoContrato,v.Salario,v.Localidade FROM VagaTecnologia
                             INNER JOIN Vaga v on v.IdVaga = VagaTecnologia.IdVaga
                             INNER JOIN Tecnologia t on t.IdTecnologia = VagaTecnologia.IdTecnologia
                             INNER JOIN Empresa e on e.IdEmpresa = v.IdEmpresa
                             INNER JOIN Area are on are.IdArea=v.IdArea
                             INNER JOIN Inscricao inscri on inscri.IdVaga=v.IdVaga
                             INNER JOIN TipoRegimePresencial trp on trp.IdTipoRegimePresencial=v.IdTipoRegimePresencial
                             WHERE v.IdVaga =1 AND inscri.IdInscricao=4