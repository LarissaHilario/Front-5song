import styles from './login.module.css'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

const Login1 = () => {
    return (
        <div className={styles.container}>
            <div>
                <img className={styles.wave} src="images/wave-haikei (2).svg" />
            </div>
            <div className={styles.formulario}>
                <div className={styles.imgLogin}>
                    <img src="images/audio.svg" />
                </div>
                <div className={styles.imgLogo}>
                    <img src="images/logo.png" />
                </div>
                <div className={styles.logincontent}>
                    <form>
                        <div className={styles.title}>
                            <h1>Hola de nuevo</h1>
                        </div>
                        <div class={styles.group}>
                            <input required="" type="text" className={styles.input}/>
                                <span className={styles.highlight}></span>
                                <span className={styles.bar}></span>
                                <label>Email</label>
                                <br></br>
                            
                        </div>
                    </form>
                </div>
            </div>
            </div>
            )
}

            export default Login1