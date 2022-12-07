import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  FormControl,
  FilledInput,
  InputLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { login } from "../../../store/slices/authSlice";
import { setTokens } from "../../../helpers/auth";
import axios from "axios";
import './login.css'
import { addUser } from "../../../store/slices/userSlice";

function Login() {

  const [showPassword, setShowPassword]= useState(false);
 
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    navigate("/signUp");
  };

  const handleClickAdmin = () => {
    navigate("/sing-in-admin");
  };
  


  const dispatch = useDispatch();
  const [token, setToken]=useState();

  const obtainInfoUser = (token) => {
    token = "Bearer " + token;
    console.log(token);
    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        email: email,
      }),
    };

    fetch("http://3.143.235.62:8080/user/login", requestOptions)
      .then((response) => response.json())
      .then((res => { res!=null? navigate("/home"):alert("alert")
      
  }))

  };
  const [email,setEmail]=useState()
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const [email,password]=event.target
    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    };

    fetch("http://3.143.235.62:8080/user/login/token-generated", requestOptions)
      .then((response) => response.json())
      .then((res) => {
        setToken(res.token)
        setTokens(res.token)
        setEmail(email.value)
    console.log(token);
  })
    if (token != null) {
      obtainInfoUser(token);
    }
  };

  return (
    <>
      <img className="wave" src="images/wave-haikei (7).svg" />
      <div className="container">
        <div className="img-Login">
          <img src="images/audio (2).svg" />
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <img src="images/logo-user.png" id="logo-user" />
            <Typography
              variant="h2"
              fontSize="3em"
              fontWeight={500}
              align="center"
            >
              Inicia Sesión
            </Typography>
            <FormControl sx={{ my: 2 }} variant="filled" fullWidth>
              <InputLabel htmlFor="input-with-icon-adornment">
                Username
              </InputLabel>
              <FilledInput
                name="email"
                id="input-with-icon-adornment"
                endAdornment={
                  <InputAdornment edge="end">
                    <AccountCircleIcon />
                  </InputAdornment>
                }
              ></FilledInput>
            </FormControl>
            <FormControl sx={{ my: 2 }} variant="filled" fullWidth>
              <InputLabel fullWidth>Contraseña</InputLabel>
              <FilledInput
                name="password"
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button color="secondary" 
            style={{ fontSize: '.79em'}} 
            sx={ { marginLeft:18, marginRight:0 }} 
            align='left' textSizeSmall
            onClick={handleClick}>¿No tienes una cuenta? Regístrate aquí</Button>
            <Button    sx={{  my:2 }}variant="contained" color="primary" fullWidth type="submit">
              Iniciar Sesión
            </Button>
           
          </form>
        </div>
      </div>
    </>
  );
}
export default Login
