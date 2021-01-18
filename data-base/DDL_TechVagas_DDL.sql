CREATE DATABASE Db_TechVagas;
GO

--DDL
USE Db_TechVagas;
GO

CREATE TABLE TipoUsuario (
	IdTipoUsuario   INT PRIMARY KEY IDENTITY,
	NomeTipoUsuario VARCHAR (35) NOT NULL UNIQUE
);
GO

CREATE TABLE TipoRegimePresencial(
IdTipoRegimePresencial INT PRIMARY KEY IDENTITY,
NomeTipoRegimePresencial VARCHAR(40)
);
GO

CREATE TABLE Area(
	IdArea INT PRIMARY KEY IDENTITY,
	NomeArea VARCHAR(35)NOT NULL UNIQUE
);
GO

CREATE TABLE Curso (
	IdCurso	  INT PRIMARY KEY IDENTITY,
	NomeCurso VARCHAR (100) NOT NULL UNIQUE,
	TipoCurso VARCHAR (30) NOT NULL,
	IdArea INT FOREIGN KEY REFERENCES Area(IdArea)NOT NULL
);
GO

CREATE TABLE StatusInscricao (
	IdStatusInscricao   INT PRIMARY KEY IDENTITY,
	NomeStatusInscricao VARCHAR (30) NOT NULL UNIQUE
);
GO

CREATE TABLE Tecnologia (
	IdTecnologia   INT PRIMARY KEY IDENTITY,
	NomeTecnologia VARCHAR (40) UNIQUE NOT NULL
);
GO

CREATE TABLE Usuario (
	IdUsuario	  INT PRIMARY KEY IDENTITY,
	Email		  VARCHAR (254) NOT NULL UNIQUE,
	Senha		  VARCHAR (100) NOT NULL,
	CaminhoImagem VARCHAR(40),
	PerguntaSeguranca VARCHAR(130) NOT NULL,
	RespostaSeguranca VARCHAR (35) NOT NULL,
	IdTipoUsuario INT FOREIGN KEY REFERENCES TipoUsuario (IdTipoUsuario) NOT NULL
); 
GO

CREATE TABLE Empresa (
	IdEmpresa	   INT PRIMARY KEY IDENTITY,
	NomeReponsavel VARCHAR (65) NOT NULL,
	CNPJ		   CHAR (14) NOT NULL UNIQUE,
	EmailContato   VARCHAR (254) NOT NULL,
	NomeFantasia   VARCHAR (50) NOT NULL UNIQUE,
	RazaoSocial    VARCHAR (50) NOT NULL UNIQUE,
	Telefone	   VARCHAR (11) NOT NULL,
	NumFuncionario INT NOT NULL,
	NumCNAE		   VARCHAR (7),
	CEP			   VARCHAR (8) NOT NULL,
	Logradouro	   VARCHAR (150) NOT NULL,
	Complemento	   VARCHAR (255),
	Localidade	   VARCHAR (150) NOT NULL,
	UF			   VARCHAR (2) NOT NULL,
	IdUsuario	   INT FOREIGN KEY REFERENCES Usuario (IdUsuario)NOT NULL UNIQUE
);
GO

CREATE TABLE Candidato (
	IdCandidato			  INT PRIMARY KEY IDENTITY,
	NomeCompleto		  VARCHAR (65) NOT NULL,
	RG					  CHAR (9) NOT NULL,
	CPF					  CHAR (11) NOT NULL UNIQUE,
	Telefone			  VARCHAR (11) NOT NULL UNIQUE,
	LinkLinkedinCandidato VARCHAR (150),
	IdCurso				  INT FOREIGN KEY REFERENCES Curso (IdCurso),
	IdUsuario			  INT FOREIGN KEY REFERENCES Usuario (IdUsuario) NOT NULL UNIQUE,
);
GO


CREATE TABLE Vaga (
	IdVaga			   INT PRIMARY KEY IDENTITY,
	TituloVaga         VARCHAR(50) NOT NULL,
	DescricaoVaga	   VARCHAR (750) NOT NULL,
	DescricaoEmpresa   VARCHAR (750) NOT NULL,
	DescricaoBeneficio VARCHAR (750) NOT NULL,
	DataPublicacao	   DATE NOT NULL,
	DataExpiracao	   DATE NOT NULL,
	Experiencia		   VARCHAR (50) NOT NULL,
	TipoContrato	   VARCHAR (50) NOT NULL,
	Salario			   DECIMAL NOT NULL,
	Localidade		   VARCHAR (255) NOT NULL,
	Estado			   VARCHAR (2) NOT NULL,
	CEP				   CHAR (8) NOT NULL,
	Logradouro		   VARCHAR (150) NOT NULL,
	IdTipoRegimePresencial INT FOREIGN  KEY REFERENCES TipoRegimePresencial(IdTipoRegimePresencial)NOT NULL,
	Complemento		   VARCHAR (255),
	IdEmpresa		   INT FOREIGN KEY REFERENCES Empresa (IdEmpresa)NOT NULL,
	IdArea		       INT FOREIGN KEY REFERENCES Area (IdArea)NOT NULL
);
GO

CREATE TABLE Estagio (
	IdEstagio	 INT PRIMARY KEY IDENTITY,
	DataCadastro DATETIME NOT NULL,
	PeriodoEstagio INT NOT NULL,
	IdCandidato  INT FOREIGN KEY REFERENCES Candidato (IdCandidato),
	IdEmpresa	 INT FOREIGN KEY REFERENCES Empresa (IdEmpresa)
);
GO

CREATE TABLE Inscricao (
	IdInscricao		  INT PRIMARY KEY IDENTITY,
	DataInscricao	  DATETIME NOT NULL,
	IdCandidato		  INT FOREIGN KEY REFERENCES Candidato (IdCandidato),
	IdVaga			  INT FOREIGN KEY REFERENCES Vaga (IdVaga),
	IdStatusInscricao INT FOREIGN KEY REFERENCES StatusInscricao (IdStatusInscricao)
);
GO

CREATE TABLE VagaTecnologia (
	 IdTecnologia INT FOREIGN KEY REFERENCES Tecnologia (IdTecnologia),
	 IdVaga		  INT FOREIGN KEY REFERENCES Vaga (IdVaga),
	 CONSTRAINT IdVagaTecnologia PRIMARY KEY (IdTecnologia, IdVaga)
);
GO


--Execute estas duas linhas caso queira deletar o banco de dados
USE MASTER
DROP DATABASE Db_TechVagas