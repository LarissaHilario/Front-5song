import '../assets/styles/login.css'
import logo from '../assets/img/logo.png'

function Registro(){

    const handleSubmit = (e) => {
        e.preventDefault(); //no reinicie la pagina
    }
    return(
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
            <label for="email">Contraseña</label>
            <input type="text" placeholder='Confirmar contraseña' className='txtBox'/>
        </div>

        <div>
        <p>Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookies.</p>
        </div>

        <button className='button' onClick={handleSubmit}>Registrarse</button>
        <div className='link'>
            <p>¿No tienes una cuenta?</p>
            <p>Registrate</p>
            </div>
    </form>
    )
}
export default Registro;