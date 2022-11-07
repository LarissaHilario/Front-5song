import React, {  useState } from 'react';
import '../assets/styles/login.css'
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom';
import Home from './Home';
import Registro from './Registro';
class Login extends React.Component {
    render() {
    return (
        <form>
            <div className='logo-Conteiner'>
            <img src={logo} className="logo"/>
            <h2>Hola de nuevo</h2>
            </div>
            
            <div className="input-wrapper">
                <label htmlFor="email">Correo</label>
                <input type="text" placeholder='Email' className='txtBox'/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="email">Contraseña</label>
                <input type="text" placeholder='Contraseña' className='txtBox'/>
            </div>
            <div className="input-wrapper">
                <label className='lblCheck'>Recuérdame</label>
                <input type="checkbox" className="checkBox"/>
            </div>
            <button className='button'><Link to={'/Home'}>Iniciar</Link> </button>
            <div className='link'>
            <h4>¿No tienes una cuenta?</h4>
            <Link to={'/Registro'}>Registrate</Link>
            </div>
        </form>
    )
    }
}
export default Login;