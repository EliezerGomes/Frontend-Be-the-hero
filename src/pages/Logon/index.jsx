import React from 'react';
import "./styles.css";
import herosImage from "../../img/pessoas.png";
import logoImg from "../../img/logo.svg";
import { FiLogIn } from "react-icons/fi"

export default function Logon(){
    return(
        <div className='logon-container'>
            <section className='form'>
                <img src={logoImg} alt="Be The Hero" />

                <form action="">
                    <h1>Faça seu logon</h1>

                    <input type="text" placeholder='Sua ID' />
                    <button className='button' type='submit'>Entrar</button>

                    <a className='backlink' href="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </a>
                </form>
            </section>

            <img src={herosImage} alt="Pessoas" />
        </div>
    );
}