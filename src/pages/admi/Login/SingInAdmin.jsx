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
      <img className="wave1" src="images/wave-admin.png" />
      <div className="container1">
        <div className="img-login1" id="img-admin">
          <img src="images/undraw_admin.svg" />
        </div>
        <div className="login-content1" >
          <form onSubmit={handleSubmit}>
            <img src="images/logo-admin.png"/>
            <Typography
              variant="h2"
              fontSize="2em"
              fontWeight={500}
              align="center"
            >
              Login Admin
            </Typography>
            <FormControl sx={{ my: 2 }} variant="filled" fullWidth>
              <InputLabel htmlFor="input-with-icon-adornment" color="fifth">
                Username
              </InputLabel>
              <FilledInput
                name="name"
                id="input-with-icon-adornment"
                color="fifth"
                endAdornment={
                  <InputAdornment edge="end" >
                    <AccountCircleIcon />
                  </InputAdornment>
                }
              ></FilledInput>
            </FormControl>
            <FormControl sx={{ my: 2 }} variant="filled" fullWidth>
              <InputLabel fullWidth color="fifth">Contrase??a</InputLabel>
              <FilledInput
                name="password"
                id="filled-adornment-password"
                color="fifth"
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
              color="fifth"
              style={{ fontSize: ".85em" }}
              sx={{ marginLeft: 32, marginRight: 0 }}
              align="left"
              textSizeSmall
              onClick={handleClick}
            >
              Regresar a login user
            </Button>
            <Button
              sx={{ my: 2 }}
              variant="contained"
              color="fifth"
              fullWidth
              type="submit"
            >
              Iniciar Sesi??n como admin
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
