import React from 'react';

import './stylemenu.css';


const BurguerMenu = () => {
    let menumobile = document.getElementById("burguer");
    let modalPrincipal = document.getElementById("modalPrincipal");
    let menuhidden = document.getElementById("menu-hide");

    if (modalPrincipal.classList == "modalPrincipal none") {
        modalPrincipal.classList.remove("none");
        menuhidden.classList.remove("none");
        // menumobile.classList.add("none");

        return false
    }
}

const FecharMenu = () => {
    let modalPrincipal = document.getElementById("modalPrincipal");
    let menuhidden = document.getElementById("menu-hide");

    if (modalPrincipal.classList == "modalPrincipal") {
        modalPrincipal.classList.add("none");
        menuhidden.classList.add("none");
        return false;
    }
}

export default function Svg () {
    return (
<svg className="navmobile none burguer" id="burguer" alt="Menu mobile - Clique para abrir" alt="Menu mobile - Clique para abrir" onClick={event => {
                    event.preventDefault();
                    BurguerMenu();
                }} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 341.333 341.333">
<g>
	<g>
		<rect y="277.333" width="341.333" height="42.667"/>
	</g>
</g>
<g>
	<g>
		<rect y="149.333" width="341.333" height="42.667"/>
	</g>
</g>
<g>
	<g>
		<rect y="21.333" width="341.333" height="42.667"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
    )
}