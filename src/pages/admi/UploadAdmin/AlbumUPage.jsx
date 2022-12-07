import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./signUp.module.css";
import {
  Button,
  Typography,
  InputAdornment,
  FormControl,
  FilledInput,
  InputLabel,
} from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

function AlbumUPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    description: "",
    duration: "",
    artist: ""
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };






  const handleSubmit = (event) => {
    event.preventDefault();

    const option = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    }
      fetch("http://18.116.50.13:8080/user", option)
      .then((response) => response.json())
      .then((data) => (data.success ? navigate("/login") : alert("error")))
      .catch((err) => console.log(err))


  };

  return (
    <>
      <div className="container">
        <div className="content">
          <form onSubmit={handleSubmit}>
            <img src="images/logo.png" />
            <Typography
              variant="h2"
              fontSize="3em"
              fontWeight={500}
              align="center"
            >
              name
            </Typography>
            <FormControl sx={{ my: 2 }} variant="filled" fullWidth>
              <InputLabel fullWidth>Name</InputLabel>
              <FilledInput
                value={values.email}
                type={"email"}
                onChange={handleChange("email")}
                id="input-with-icon-adornment"
                endAdornment={
                  <InputAdornment>
                    <AlternateEmailIcon></AlternateEmailIcon>
                  </InputAdornment>
                }
              ></FilledInput>
            </FormControl>
            <Button
              sx={{ my: 2 }}
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
            >
              Subir cancion
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
export default AlbumUPage;
