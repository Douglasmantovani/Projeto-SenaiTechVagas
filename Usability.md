**Para uma melhor organização, vamos dividir em seções para cada parte individual da aplicação, isto é, banco de dados, back-end, front-end e mobile.** 

# Banco de Dados

### Recursos necessários

* [SQL Server](https://www.microsoft.compt-br/sql-server/sql-server-downloads "SQL Server")
* [SSMS](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15 "SQL Server Management Studio")

### Passo a passo

Abra os scripts [DDL](./data-base/DDL_TechVagas_DDL.sql "Consulta de criação do banco e de entidades") e [DML](./data-base/DML_TechVgas.sql "Consulta de inserção de dados nas entidades"), e execute-os, respectivamente.

# Back-end

### Recursos necessários

* [Visual Studio](https://visualstudio.microsoft.com/ "Visual Studio") com a carga de trabalho ASP.NET

### Passo a passo

Abra a pasta back-end, navegue até o [arquivo solução](./back-end/SenaiTechVagas.WebApi/SenaiTechVagas.WebApi.sln "Arquivo solução") e execute-o. Logo feito, mude as strings de conexão nos arquivos [context](back-end/SenaiTechVagas.WebApi/SenaiTechVagas.WebApi/Contexts/DbSenaiContext.cs "Arquivo de conexão com o banco."), [repositório do candidato](back-end/SenaiTechVagas.WebApi/SenaiTechVagas.WebApi/Repositories/CandidatoRepository.cs "Arquivo de repositório do candidato.") e [repositório da empresa](back-end/SenaiTechVagas.WebApi/SenaiTechVagas.WebApi/Repositories/EmpresaRepository.cs "Arquivo de repositório da empresa."). Tendo concluído as instruções anteriores, execute através do botão play.

# Front-end

### Recursos necessários

* [Node/NPM](https://nodejs.org/pt-br/ "Node e NPM")

### Passo a passo

Abra um terminal no caminho da pasta front-end do projeto, depois, execute `npm install` e, então, execute `npm start`. A aplicação abrirá no endereço http://localhost:3000/.

# Mobile

### Recursos necessários

* [Expo CLI](https://docs.expo.io/#quick-start "Interface de linha de comando do Expo")
* [App Expo, no seu dispositivo Android ou IOS (opcional)](https://docs.expo.io/get-started/installation/#2-expo-client-app-for-ios-and "Baixe os aplicativos do Expo para o seu sistema operacional móvel.")

### Passo a passo

Acreditamos que você seguiu os passos anteriores, caso contrário, baixe o Node e NPM, o link de download está indicado na parte de front-end. Para executar o projeto mobile, abra um terminal no caminho da pasta mobile do projeto e execute `npm install`, logo então, execute `expo start`. Realizado os passos, anteriormente, citados, abrirá, no navegador, o endereço http://localhost:19002/;

#### Executar no navegador

Selecione [Run in web browser](./ "Botão no painel do expo.") e, então, uma outra aba abrirá com o projeto executando.

#### Executar no celular

Caso você deseje uma simulação mais realista, recomendamos o uso do seu dispositivo móvel. A seguir, estará o passo a passo para que você possa rodar a nossa aplicação no sistema do seu dispositivo móvel.

##### Android

Após instalado o aplicativo Expo, abra-o, aperte no botão [Scan QR Code](./ "Escaneie o código QR") e escaneie o código QR que aparece na tela do seu computador. Feito isso, o aplicativo começará a iniciar.

##### IOS

Após instalado o aplicativo Expo, abra a câmera do seu dispositivo, escaneie o código QR que aparece na tela do seu computador. Feito isso, o aplicativo começará a iniciar.
