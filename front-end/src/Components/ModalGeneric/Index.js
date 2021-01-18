import React from 'react';
import './style.css';

import Input from '../../Components/Input'

function AparecendoModal() {

    let idModalGeneric = document.getElementById("modalGeneric");
    if (idModalGeneric.classList == "filtro none") {
        idModalGeneric.classList.remove("none");
    }
}

function FechandoModal() {

    let idModalGeneric = document.getElementById("modalGeneric");
    if (idModalGeneric.classList == "filtro") {
        idModalGeneric.classList.add("none");
    }
}

function ModalGeneric(props) {
    return (
        <div>
            <div id="modalGeneric" className="filtro none">
                <div className="modalBox">
                    <p id="fecharGeneric" onClick={event => {
                event.preventDefault();
                FechandoModal()}}>X</p>
                    <h3>{props.titleModal}</h3>
                    <Input type="text" label="Titulo da Vaga"/>
                    <Input type="text" label="Salario"/>
                    <Input type="text" label="Estado"/>
                    <Input type="text" label="Cidade"/>
                    <Input type="text" label="CEP"/>
                    <Input type="text" label="Logradouro"/>
                    <Input type="text" label="Complemento"/>
                </div>
            </div>
            <button className="btnModalGeneric" onClick={event => {
                event.preventDefault();
                AparecendoModal();
            }}>{props.btnName}</button>
        </div>
    )
}

export default ModalGeneric;