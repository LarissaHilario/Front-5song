import './login.css'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
function Login() {

    const handleSubmit = (e) => {
        e.preventDefault(); //no reinicie la pagina
    }

    return (
    <>
            <img className="wave" src="images/wave.png"/>
            <img className='wave' src='images/wave.svg'/>
                <div className="container">
                    <div className="img-login">
                        <img src="images/audio.svg"/>
                    </div>
                    <div className="login-content">
                        <form>
                            <img src="images/logo.png"/>
                                <h2 className="title">Hola de nuevo</h2>
                                <div className="input-div one">
                                    <div className="i">
                                        <i className='fas fa-user'>
                                            <PersonIcon/>
                                        </i>
                                    </div>
                                    <div class="div">
                                        <h5>Username</h5>
                                        <input type="text" class="input"/>
                                    </div>
                                </div>
                                <div class="input-div pass">
                                    <div class="i">
                                        <i class="fas fa-lock">
                                            <VisibilityOffIcon/>
                                        </i>
                                    </div>
                                    <div class="div">
                                        <h5>Password</h5>
                                        <input type="password" class="input"/>
                                    </div>
                                </div>
                                <a className='link-login' to='/registro'>¿No tienes una cuenta? Regístrate</a>
                                <Link to='/home'>
                                    <input type="submit" className="buttonlogin" value="Login">
                                    </input></Link>
                        </form>
                    </div>
                    </div>
                    </>
                )

}
                export default Login;