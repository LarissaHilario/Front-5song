import './login.css'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';


function Login() {
    
    return (
    <>
            <img className="wave" src="images/wave.png"/>
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
                                    <div className="div">
                                        <h5>Username</h5>
                                        <input type="text" className="input"/>
                                    </div>
                                </div>
                                <div className="input-div pass">
                                    <div className="i">
                                        <i className="fas fa-lock">
                                            <VisibilityOffIcon/>
                                        </i>
                                    </div>
                                    <div className="div">
                                        <h5>Password</h5>
                                        <input type="password" className="input"/>
                                    </div>
                                </div>
                                <Link to='/login-admi'><a className='link-login'>¿Eres un administrador? Inicia Sesión</a></Link>
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