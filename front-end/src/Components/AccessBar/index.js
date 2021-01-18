import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';



export default function AccessBar() {
    return(
        <section className="barra">
            <div className="flex between">
                <div className="flex">
                    <p className="links"><Link to="#menu" aria-label="Tecla de acesso para navegar no menu - alt + 1" accessKey="1" className="topbar"><b>1</b> Menu</Link></p>
                    <p className="links"><Link to="#conteudo" aria-label="Tecla de acesso para conteúdo - alt + 2" accessKey="2" className="topbar"><b>2</b> Conteúdo</Link></p>
                    <p className="links"><Link to="#bar" aria-label="Tecla de acesso para menu de acessibilidade - alt + A" accessKey="A" className="topbar" id="btnbar1"><b>A</b> Menu de acessibilidade</Link></p>
                </div>

                <div className="flex">
                    <p className="links"><a href="https://www.facebook.com/senaiinformatica" aria-label="Facebook do SENAI Informática" className="topbar fa fa-facebook-f topicon" target="_black"></a></p>
                    <p className="links"><a href="https://twitter.com/senaiinfo" aria-label="Twitter do SENAI Informática" className="topbar fa fa-twitter topicon" target="_black"></a></p>
                    <p className="links"><a href="https://www.instagram.com/senai_info/" aria-label="Instagram do SENAI Informática" className="topbar fa fa-instagram topicon" target="_black"></a></p>
                    <p className="links"><a href="https://www.youtube.com/channel/UCIrKFzk1K-eOQ70NOsm587A" aria-label="Facebook do SENAI Informática" className="topbar fa fa-youtube topicon" target="_black"></a></p>
                    <p className="links"><a href="https://twitter.com/senaiinfo" aria-label="Linkedin do SENAI Informática" className="topbar fa fa-linkedin topicon" target="_black"></a></p>
                    <p className="links"><a href="https://github.com/senai-desenvolvimento" aria-label="Guitihub do SENAI Informática Desenvolvimento" className="topbar fa fa-github topicon" target="_black"></a></p>
                </div>
            </div>
        </section>
    );
}