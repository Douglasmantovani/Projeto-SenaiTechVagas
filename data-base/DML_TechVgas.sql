/*
MANTENHA A LÍNGUA - DO SEU SQL SERVER - EM PORTUGUÊS DO BRASIL


1. Comando para verificar a linguagem atual do SQL Server ↓
	Select @@langid, @@language

2.	Comando para verificar as linguagens disponíveis no SQL Server ↓
	EXEC sp_helplanguage

3. Comando para alterar a linguagem do usuário 'sa' para Português do Brasil ↓
	Exec sp_defaultlanguage 'sa', 'Português (Brasil)'
	Reconfigure

4. A senha criptografada é equivalente a 123123123

*/
USE Db_TechVagas
GO

--DML

INSERT INTO TipoUsuario (NomeTipoUsuario)
VALUES		('Administrador'),
			('Candidato'),
			('Empresa'),
			('Banido');
GO

INSERT INTO StatusInscricao (NomeStatusInscricao)
VALUES		('Aprovado'),
			('Em Andamento'),
			('Recusado');
GO

INSERT INTO Area (NomeArea)
VALUES		('Desenvolvimento'),
			('Redes'),
			('Multimídia');
GO

INSERT INTO TipoRegimePresencial(NomeTipoRegimePresencial)
VALUES		('Presencial'),
			('Semipresencial'),
			('Remoto');
GO

INSERT INTO Curso (NomeCurso, TipoCurso,IdArea)
VALUES		('Desenvolvimento de Sistemas - 1T - M', 'Técnico',1),
			('Desenvolvimento de Sistemas - 2T - M', 'Técnico',1),
			('Desenvolvimento de Sistemas - 3T - M', 'Técnico',1),
			('Desenvolvimento de Sistemas - 1T - T', 'Técnico',1),
			('Desenvolvimento de Sistemas - 2T - T', 'Técnico',1),
			('Desenvolvimento de Sistemas - 3T - T', 'Técnico',1),
			('Ex-aluno Desenvolvimento de Sistemas', 'Técnico',1),
			('Redes de Computadores - 1T - M', 'Técnico',2),
			('Redes de Computadores - 2T - M', 'Técnico',2),
			('Redes de Computadores - 3T - M', 'Técnico',2),
			('Redes de Computadores - 1T - T', 'Técnico',2),
			('Redes de Computadores - 2T - T', 'Técnico',2),
			('Redes de Computadores - 3T - T', 'Técnico',2),
			('Ex-aluno Redes de Computadores', 'Técnico',2),
			('Multimídia - 1T - M', 'Técnico',3),
			('Multimídia - 2T - M', 'Técnico',3),
			('Multimídia - 3T - M', 'Técnico',3),
			('Multimídia - 1T - T', 'Técnico',3),
			('Multimídia - 2T - T', 'Técnico',3),
			('Multimídia - 3T - T', 'Técnico',3),
			('Ex-aluno Multimídia', 'Técnico',3);
GO



INSERT INTO Tecnologia (NomeTecnologia)
VALUES		('Não definido'),
			('Vue.Js'),
			('Firebase'),
			('SQL Server'),
			('C'),
			('Entity framework'),
			('Windows Form'),
			('React Native'),
			('MVC'),
			('API'),
			('AWS Cloud'),
			('PHP'),
			('Java'),
			('Python'),
			('HTML'),
			('CSS'),
			('WordPress'),
			('Angular'),
			('Git'),
			('GitHub'),
			('Devops'),
			('Andriod'),
			('IOS'),
			('Figma'),
			('AdobeXD'),
			('RESTfull'),
			('Trello'),
			('PhotoShop'),
			('Node.Js'),
			('Bootstrap'),
			('jQuery'),
			('Ajax'),
			('MongoDB'),
			('TypeScript'),
			('Scrum'),
			('Redux'),
			('CSharp'),
			('C++'),
			('Flutter'),
			('ReactJs'),
			('Xamarin'),
			('JavaScript'),
			('Dart'),
			('Ruby'),
			('.NET');
GO

INSERT INTO Usuario (Email, Senha, IdTipoUsuario,PerguntaSeguranca,RespostaSeguranca)
VALUES('possarle@gmail.com', '932f3c1b56257ce8539ac269d7aab42550dacf8818d075f0bdf1990562aae3ef', 1,'Qual o nome do administrador','Roberto Possarle'),
('Senai@gmail.com', '932f3c1b56257ce8539ac269d7aab42550dacf8818d075f0bdf1990562aae3ef', 3,'Qual o nome do administrador','Roberto Possarle'),
('TechVagas@gmail.com', '932f3c1b56257ce8539ac269d7aab42550dacf8818d075f0bdf1990562aae3ef', 3,'Como se chama o seu cachorro','Trovão'),
('Alexia@gmail.com', '932f3c1b56257ce8539ac269d7aab42550dacf8818d075f0bdf1990562aae3ef', 2,'Como se chama o seu cachorro','Trovão'),
('Andre@gmail.com', '932f3c1b56257ce8539ac269d7aab42550dacf8818d075f0bdf1990562aae3ef', 2,'Como se chama o seu cachorro','Trovão'),
('Carlos@gmail.com', '932f3c1b56257ce8539ac269d7aab42550dacf8818d075f0bdf1990562aae3ef', 2,'Como se chama o seu cachorro','Trovão'),
('Douglas@gmail.com', '932f3c1b56257ce8539ac269d7aab42550dacf8818d075f0bdf1990562aae3ef', 2,'Como se chama o seu cachorro','Trovão'),
('Marcos@gmail.com', '932f3c1b56257ce8539ac269d7aab42550dacf8818d075f0bdf1990562aae3ef', 2,'Como se chama o seu cachorro','Trovão')
GO

INSERT INTO Empresa(NomeReponsavel,CNPJ,EmailContato,NomeFantasia,RazaoSocial,Telefone,NumFuncionario,NumCNAE,CEP,Logradouro,Complemento,Localidade,UF,IdUsuario)
VALUES('Jucelino','12312345672123','SenaiContato@gmail.com','SENAI Informatica','SENAI Informatica','12341111111','50','2342345','12345679','Rua Barão de Limeira','Perto da Folha de São Paulo','São Paulo','SP',2),
	  ('DevSquad','12312345672124','DevSquadContato@gmail.com','TechVagas','TechVagas','12341111112','50','1234567','12345679','Rua Barão de Limeira','Perto da Folha de São Paulo','São Paulo','SP',3)
GO

INSERT INTO Candidato(NomeCompleto,RG,CPF,Telefone,LinkLinkedinCandidato,IdCurso,IdUsuario)
VALUES('Alexia Melhado','123452345','12387624567','12341112345','Alexia/Linkedin.com',6,4),
('André Akira','123352345','12487664567','52341102345','André/Linkedin.com',6,5),
('Carlos Eduardo','123352245','12387664567','52371112345','Carlos/Linkedin.com',6,6),
('Douglas Mantovani','122652345','18487664567','52301112345','Douglas/Linkedin.com',6,7),
('Marcos Paulo','123352645','12487694567','52301872345','Marcos/Linkedin.com',6,8)
GO

INSERT INTO Vaga(TituloVaga,DescricaoVaga,DescricaoEmpresa,DescricaoBeneficio,DataPublicacao,DataExpiracao,Experiencia,TipoContrato,Salario,Localidade,Estado,CEP,Logradouro,IdTipoRegimePresencial,Complemento,IdEmpresa,IdArea)
VALUES('Desenvolvedor Full Stack','Será o responsavel por resolver os nossos problemas','Somos um grupo em uma curva grande de crescimento no mercado','você será o nosso funcionário','30-11-2020','30-12-2020','Pleno','CLT',2000,'São Paulo','SP','14875458','Rua Barão de Limeira',1,'Perto da folha',1,1),
('Técnico de Redes','Será o responsavel por resolver os nossos problemas','Somos um grupo em uma curva grande de crescimento no mercado','você será o nosso funcionário','30-11-2020','30-12-2020','Pleno','PJ',5000,'São Paulo','SP','14875458','Rua Barão de Limeira',2,'Perto da folha',1,1),
('Designer','Será o responsavel por estilizar nosso sistema','Somos um grupo em uma curva grande de crescimento no mercado','você será o nosso funcionário','30-11-2020','30-12-2020','Júnior','CLT',3000,'São Paulo','SP','14875458','Rua Barão de Limeira',3,'Perto da folha',1,1)
GO

INSERT INTO Estagio(DataCadastro,PeriodoEstagio,IdCandidato,IdEmpresa)
VALUES ('30-11-2020',12,1,1)
GO

INSERT INTO VagaTecnologia(IdVaga,IdTecnologia)
VALUES(1,6),
(2,11),
(3,2)
GO

INSERT INTO Inscricao(DataInscricao,IdCandidato,IdVaga,IdStatusInscricao)
VALUES('30-11-2020',1,1,2),
('30-11-2020',2,1,2),
('30-11-2020',3,1,2),
('30-11-2020',4,1,2)
GO

UPDATE Usuario SET CaminhoImagem='user.png' WHERE IdUsuario>0
GO