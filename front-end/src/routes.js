import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Banidos from "./Pages/ListaBanidos";
import BuscarVagas from "./Pages/BuscarVaga";
import CadastrarVaga from "./Pages/CadastrarVaga/Index";
import CadastroCandidato from "./Pages/CadastroCandidato";
import CadastroEmpresa from "./Pages/CadastroEmpresa";
import Colaboradores from "./Pages/CadastrarColaborador";
import Estagio from "./Pages/Estagio/Index";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Perfil from "./Pages/PerfilAdm";
import PerfilCandidato from "./Pages/PerfilCandidato";
import PerfilEmpresa from "./Pages/PerfilEmpresa";
import Sobre from "./Pages/Sobre";
import TesteDePesonalidade from "./Pages/TesteDePersonalidade/Index";
import VagasPublicadas from "./Pages/ListarVagasPublicadas/Index";
import VisualizarVagaCandidato from "./Pages/VisualizarVagaCandidato";
import VizualizarVagaEmpresa from "./Pages/VisualizarVagaEmpresa";
import ListarCandidatosInscritos from "./Pages/ListarCandidatosInscritosAdmin";
import DashboardInscricaoCandidato from "./Pages/DashbordInscricaoCandidato";
import CadastrarEstagiario from "./Pages/CadastrarEstagiario";
import Unauthorized from "./Pages/Unauthorized";
import VizualizarCandidatosAprovados from "./Pages/CandidatosAprovados";
import VisualizarEmpresaAdm from "./Pages/VisualizarEmpresaAdm";
import VisualizarCandidatoAdm from "./Pages/VisualizarCandidatoAdm";
import { parseJwt } from "./services/token";

function Routes() {
  const RotaPrivadaComum = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") !== null && parseJwt().Role === "2" ? (
          // Se sim, renderiza de acordo com a rota solicitada e permitida
          <Component {...props} />
        ) : (
          // Se não, redireciona para a página de login
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );

  const RotaPrivadaAdm = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") !== null && parseJwt().Role === "1" ? (
          // Se sim, renderiza de acordo com a rota solicitada e permitida
          <Component {...props} />
        ) : (
          // Se não, redireciona para a página de login
          <Redirect to={{ pathname: "/unauthorized" }} />
        )
      }
    />
  );

  const RotaPrivadaEmpresa = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") !== null && parseJwt().Role === "3" ? (
          // Se sim, renderiza de acordo com a rota solicitada e permitida
          <Component {...props} />
        ) : (
          // Se não, redireciona para a página de login
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );

  return (
    <Router>
      <Switch>
        <RotaPrivadaAdm path="/banidos" component={Banidos} />
        <RotaPrivadaEmpresa
          path="/candidatosAprovados"
          component={VizualizarCandidatosAprovados}
        />
        <RotaPrivadaComum path="/principal" component={BuscarVagas} />
        <RotaPrivadaEmpresa path="/cadastro/vaga" component={CadastrarVaga} />
        <RotaPrivadaAdm
          path="/PerfilEmpresaAdm"
          component={VisualizarEmpresaAdm}
        />
        <RotaPrivadaAdm
          path="/PerfilCandidatoAdm"
          component={VisualizarCandidatoAdm}
        />
        <RotaPrivadaAdm
          path="/cadastro/Estagio"
          component={CadastrarEstagiario}
        />
        <Route path="/cadastro" exact component={CadastroCandidato} />
        <Route path="/cadastro/empresa" component={CadastroEmpresa} />
        <RotaPrivadaAdm path="/colaboradores" component={Colaboradores} />
        <RotaPrivadaAdm path="/Estagio" component={Estagio} />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <RotaPrivadaAdm path="/perfil" component={Perfil} />
        <RotaPrivadaComum path="/perfilCandidato" component={PerfilCandidato} />
        <RotaPrivadaEmpresa path="/perfilEmpresa" component={PerfilEmpresa} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/TesteDePersonalidade" component={TesteDePesonalidade} />
        <RotaPrivadaEmpresa
          path="/VagasPublicadas"
          component={VagasPublicadas}
        />
        <RotaPrivadaComum
          path="/VisualizarVagaCandidato"
          component={VisualizarVagaCandidato}
        />
        <RotaPrivadaEmpresa
          path="/VagaEmpresa"
          component={VizualizarVagaEmpresa}
        />
        <RotaPrivadaAdm
          path="/VizualizarVagaAdmin"
          component={ListarCandidatosInscritos}
        />
        <RotaPrivadaComum
          path="/DashboardInscricaoCandidato"
          component={DashboardInscricaoCandidato}
        />
        <Route path="/unauthorized" component={Unauthorized} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
