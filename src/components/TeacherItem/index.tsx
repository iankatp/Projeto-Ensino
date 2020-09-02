import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/62669283?s=460&v=4" alt="Ianka Tenório" />
                <div>
                    <strong>Ianka Tenório</strong>
                    <span>Desenvolvimento Web</span>
                </div>

            </header>
            
            <p>
            TI
            <br /> <br />
            Desenvolvimento Web e Mobile com a Stack JavaScript mais completa.
            </p>
        

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 120,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Entrar em contato" />
                    Entrar em contatp
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;