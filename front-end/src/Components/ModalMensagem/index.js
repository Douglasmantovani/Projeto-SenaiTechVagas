import React from "react";
import "./style.css";

function ModalMensagem(props) {
  return (
    <div>
      <div className="peliculaComponent"></div>
      <div className="ModalComponent">
        <div id="Fechar" className="Fecchar"></div>
        <h3>{props.mensagem}</h3>
        <div id="btOk" className="BotaoOk">
          <button className="BtOk">Ok</button>
        </div>
      </div>
    </div>
  );
}

export default ModalMensagem;
