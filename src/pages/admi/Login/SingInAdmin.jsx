import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./loginadmi.css";
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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Alert from "@mui/material/Alert";

function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    password: "",
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
    navigate("/login");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, password } = event.target;
    const option = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        password: password.value,
      }),
    };

    fetch("http://3.137.200.76:8080/user/login", option)
      .then((response) => response.json())
      .then((data) => (data.success ? navigate("/home-admin") : alert("error")))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <img className="wave1" src="images/wave 11.png" />x
      <div className="container1">
        <div className="img-login">
          <img src="images/admi.svg" />
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <img src="images/logo.png" />
            <Typography
              variant="h2"
              fontSize="2em"
              fontWeight={500}
              align="center"
            >
              Login Admin
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
                type={values.showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button
              color="secondary"
              style={{ fontSize: ".75em" }}
              sx={{ marginLeft: 22.3, marginRight: 0 }}
              align="left"
              textSizeSmall
              onClick={handleClick}
            >
              Regresar a login user
            </Button>
            <Button
              sx={{ my: 2 }}
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
            >
              Iniciar Sesión como admin
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
