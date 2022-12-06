import '../assets/styles/login.css'
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom';
import Login from './Login';
import React, { useState } from 'react';

function Registro() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUsername = (e) => setUsername(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleSubmit = () => {
        const option = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                username: username,
                password: password
            })
        }
        fetch('http://3.12.108.156:8080/user', option)
            .then(response => response.json())
            .then(data => data.status ?
                alert('Registro Exitoso') : alert('Ha ocurrido un error'))
            .catch(err => console.log(err))
    }
    return (
        <form >
            <div className='logo-Conteiner'>
                <img src={logo} className="logo" />
                <h2>Hola de nuevo</h2>
            </div>
            <div class="input-wrapper">
                <label for="email" >Correo</label>
                <input type="text" value={email} onChange={handleChangeEmail} placeholder='Email' className='txtBox' />
            </div>

            <div class="input-wrapper">
                <label for="user">Nombre de usuario</label>
                <input type="text" value={username} onChange={handleChangeUsername} placeholder='User Name' className='txtBox' />
            </div>

            <div class="input-wrapper">
                <label for="email">Contraseña</label>
                <input type="text" value={password} onChange={handleChangePassword} placeholder='Confirmar contraseña' className='txtBox' />
            </div>

            <div>
                <p>Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookies.</p>
            </div>

            <button className='button' onClick={handleSubmit}><Link to={<Login />}>Registrarse</Link> </button>
            <div className='link'>
                <p>¿Tienes una cuenta?</p>
                <Link to={<Login />}>Inicia sesion</Link>
            </div>
        </form>
    )
}
export default Registro;
