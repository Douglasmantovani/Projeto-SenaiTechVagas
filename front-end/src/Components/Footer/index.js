import React from 'react';

import './style.css';

export default function Footer(){
    return (
        <footer className="between">
            <div>
                <p>SENAI - TechVagas - Desenvolvido por DevSquad</p>
                <p>Copyright 2020 © Todos os direitos reservados.</p>
            </div>
         <div>
           <p className="text-end">ESCOLA SENAI DE INFORMÁTICA</p>
           <p className="text-end">Al. Barão de Limeira, 539 - Santa Cecília - São Paulo/SP - CEP 01202-001</p>
           <p className="text-end">Telefone: (11) 3273-5000 |E-mail:informatica@sp.senai.br</p>
         </div>
       </footer>
    );
}