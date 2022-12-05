import { useState } from "react";
import { useMemo } from 'react';
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
import Alert from '@mui/material/Alert';
//import { checkingAuthentication } from "../../../store/slices/Auth/thunks";
//import { startGoogleSignIn,startLoginWithEmailPassword } from "../../../store/slices/Auth/thunks";

function Login() {

  const [showPassword, setShowPassword]= useState(false);
 
  const navigate = useNavigate();

  

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
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

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, password } = e.target;
    await axiosInstance
      .post('login/', {
        name: name.value,
        password: password.value,
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
      .catch(err=>console.log(err))
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
                name="name"
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
                type={showPassword.values ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword.values ? <Visibility /> : <VisibilityOff />}
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
