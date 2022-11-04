import '../assets/styles/login.css'
import logo from '../assets/img/logo.png'

function Login() {

    const handleSubmit = (e) => {
        e.preventDefault(); //no reinicie la pagina
    }

    return (
        <form>
            <div className='logo-Conteiner'>
            <img src={logo} className="logo"/>
            <h2>Hola de nuevo</h2>
            </div>
            
            <div class="input-wrapper">
                <label for="email">Correo</label>
                <input type="text" placeholder='Email' className='txtBox'/>
            </div>
            <div class="input-wrapper">
                <label for="email">Contraseña</label>
                <input type="text" placeholder='Contraseña' className='txtBox'/>
            </div>
            <div class="input-wrapper">
                <label className='lblCheck'>Recuérdame</label>
                <input type="checkbox" className="checkBox"/>
            </div>
            <button className='button' onClick={handleSubmit}>Iniciar</button>
            <div className='link'>
            <h4>¿No tienes una cuenta?</h4>
            <h4>Registrate</h4>
            </div>
        </form>
    )

}
export default Login;