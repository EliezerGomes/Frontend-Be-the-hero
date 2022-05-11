import React from 'react';
import './styles.css';
import logoImg from "../../img/logo.svg";
import { FiArrowLeft } from "react-icons/fi"

export default function Register(){
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    
                    <a className='backlink' href="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para Logon
                    </a>
                </section>

                <form action="">
                    <input type="text" placeholder='Nome da ONG'/>
                    <input type="email" placeholder='E-mail'/>
                    <input type="text" placeholder='Whatsapp'/>

                    <div className="input-group">
                        <input type="text" placeholder='Cidade' />
                        <input type="text" placeholder='UF' style={{ width: 80 }} />
                    </div>

                    <button type='submit' className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}