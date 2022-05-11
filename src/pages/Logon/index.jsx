import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'
import "./styles.css";
import herosImage from "../../img/pessoas.png";
import logoImg from "../../img/logo.svg";
import { FiLogIn } from "react-icons/fi"
import api from "../../services/api"

export default function Logon(){

    const [id, setId] = useState('')

    const navigate = useNavigate()

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('session', { id })

            let oId = localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)

            console.log(oId)

            navigate('/profile')
        } catch (error) {
            alert("Falha ao fazer login")
        }
    }

    return(
        <div className='logon-container'>
            <section className='form'>
                <img src={logoImg} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input type="text" placeholder='Sua ID' value={id} onChange={e => setId(e.target.value)}/>
                    <button className='button' type='submit'>Entrar</button>

                    <Link className='backlink' to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={herosImage} alt="Pessoas" />
        </div>
    );
}