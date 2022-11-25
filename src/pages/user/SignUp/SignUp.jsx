import { useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from "./signUp.module.css";
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
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

function SignUp() {
  const navigate= useNavigate();
  const [values, setValues] = useState({
    password: "",
    email:"",
    username:"",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

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
    navigate('/login/');
  };

  return (
    <>
      <img className="wave" src="images/wave-haikei (7).svg"/>
      <div className="container">
        <div className="img-login">
          <img src="images/audioos.svg" />
        </div>
        <div className="login-content">
          <form>
            <img src="images/logo.png" />
            <Typography
              variant="h2"
              fontSize="3em"
              fontWeight={500}
              align="center"
            >
              Registro
            </Typography>
            <FormControl sx={{  my:2 }} variant="filled" fullWidth>
              <InputLabel fullWidth>
                Email
              </InputLabel>
              <FilledInput
                value={values.email}
               
                id="input-with-icon-adornment"
                endAdornment={
                    
                      <InputAdornment >
                        <AlternateEmailIcon></AlternateEmailIcon>
                      </InputAdornment>
                    }
                    ></FilledInput>
            </FormControl>
            <FormControl sx={{  my:2 }} variant="filled" fullWidth>
              <InputLabel fullWidth>
                Nombre de usuario
              </InputLabel>
              <FilledInput
                value={values.username}
               
                id="input-with-icon-adornment"
                endAdornment={
                    
                      <InputAdornment edge="end">
                        <AccountCircleIcon />
                      </InputAdornment>
                    }
                    ></FilledInput>
                    </FormControl>

            <FormControl sx={{  my:2 }} variant="filled" fullWidth>
              <InputLabel fullWidth>
                Contraseña
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              /></FormControl>
              <FormControl sx={{  my:2 }} variant="filled" fullWidth>
              <InputLabel fullWidth>
                Confirmar Contraseña
              </InputLabel>
              <FilledInput
                id="filled"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button color="secondary" style={{ fontSize: '.75em'}} sx={ { marginLeft:22.3, marginRight:0 }} align='left' textSizeSmall
            onClick={handleClick}>¿Ya tienes una cuenta? Inicia Sesión</Button>
            <Button sx={{  my:2 }}variant="contained" color="primary" fullWidth type="submit">
              Registrar
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
export default SignUp;