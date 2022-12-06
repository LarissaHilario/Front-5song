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
import { axiosInstance } from "../../../helpers/AxiosInstance";
import axios from "axios";


function Login() {

  const [showPassword, setShowPassword]= useState(false);
 
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword({
      showPassword: !showPassword,
    });
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

  const handleSubmit =() => {
    e.preventDefault();
    const { email, password } = e.target;
    
      axios.post('http://3.144.208.227:8080/login', {

        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      })
      .then(resp => {
        const { data } = resp;
        setTokens(data.token);
        dispatch(
          login({
            accessToken: data.token,
            status: resp.status,
          })
        );
      })
      .catch((err) => {
        console.log(err)
      });
  };

  

  return (
    <>
      <img className="wave" src="images/wave-haikei (7).svg" />
      <div className="container">
        <div className="img-login">
          <img src="images/audio (2).svg" />
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <img src="images/logo.png" />
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
            style={{ fontSize: '.75em'}} 
            sx={ { marginLeft:22.3, marginRight:0 }} 
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
export default Login;
