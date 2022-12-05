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
    passwordConfirm:"",
    email: "",
    username: "",
    showPassword: false,
    showPasswordConfirm: false
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

  const handleClickShowPasswordCofirm = () => {
    setValues({
      ...values,
      showPasswordConfirm: !values.showPasswordConfirm,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClick = () => {
    navigate('/login');
  };
  
  const submit=(option)=>{
    fetch('http://18.116.50.13:8080/user', option)
    .then(response=> response.json())
    .then( data=>data.success ? navigate("/login"):alert("error"))
    .catch(err=>console.log(err))
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
          name: values.name,
          email: values.email,
          password: values.password
      }) 

      (values.password===values.passwordConfirm)?  submit(option):console.log("error")
  }


  };

  return (
    <>
      <img className="wave" src="images/wave-haikei (7).svg"/>
      <div className="container">
        <div className="img-login">
          <img src="images/audioos.svg"/>
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
              Registro
            </Typography>
            <FormControl sx={{  my:2 }} variant="filled" fullWidth>
              <InputLabel htmlFor="input-with-icon-adornment-up">
                Email
              </InputLabel>
              <FilledInput
                email='email'
                id="input-with-icon-adornment-up"
                endAdornment={
                    
                      <InputAdornment >
                        <AlternateEmailIcon></AlternateEmailIcon>
                      </InputAdornment>
                    }
                    ></FilledInput>
            </FormControl>
            <FormControl sx={{  my:2 }} variant="filled" fullWidth>
              <InputLabel htmlFor="input-with-icon-adornment-name"  fullWidth>
                Nombre de usuario
              </InputLabel>
              <FilledInput
                username='username'
               
                id="input-with-icon-adornment-name"
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
                type={values.showPasswordConfirm ? "text" : "password"}
                value={values.passwordConfirm}
                onChange={handleChange("passwordConfirm")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPasswordCofirm}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
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