import "./login.css";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Login() {

  const navigate = useNavigate();

  const handleClickRedux=()=>{
    navigate('/home');
  }

  const[name, setName]=useState('');
  const[password, setPassword]=useState('');

  const handleChangeName=(e)=>{
    setName(e.target.value);
  }

  const handleChangePassword=(e)=>{
      setPassword(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const option={
      method: 'POST',
      headers: {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
          name: name,
          password: password
      }) 
  }

    fetch('http://18.116.50.13:8080/user/login', option)
    .then(response=> response.json())
    .then( data=>data.success ? navigate("/home"):alert("Fallo"))
    .catch(err=>console.log(err))
  };

  
  return (
    <>
        <img className="wave" src="images/wave.png" />
        <div className="container">
          <div className="img-login">
            <img src="images/audio.svg" />
          </div>
          <div className="login-content">
            <form onSubmit={handleSubmit}>
              <img src="images/logo.png" />
              <h2 className="title">Hola de nuevo</h2>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user">
                    <PersonIcon />
                  </i>
                </div>
                <div className="div">
                  <input type="text" className="input" placeholder="Username"
                  onChange={handleChangeName} />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                  <i className="fas fa-lock">
                    <VisibilityOffIcon />
                  </i>
                </div>
                <div className="div">
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    onChange={handleChangePassword}
                  />
                </div>
              </div>
              <a className="link-login" onClick={handleClickRedux}>
                  ¿Eres un administrador? Inicia Sesión
              </a>
              <input type="submit" value="Login" className="buttonlogin"></input>
            </form>
          </div>
        </div>
    </>
  );
}
export default Login;
