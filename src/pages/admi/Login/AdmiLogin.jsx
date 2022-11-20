import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import "./loginadmi.css";

function AdmiLogin() {
  return (
    <>
      <img className="wave1" src="images/wave 11.png" />
      <div className="container1">
        <div className="img-login1">
          <img src="images/admi.svg" />
        </div>
        <div className="login-content1">
          <form>
            <img src="images/logo.png" />
            <h2 className="title1">Hola admi</h2>
            <div className="input-div one1">
              <div className="i1">
                <i className="fas fa-user1">
                  <PersonIcon />
                </i>
              </div>
              <div className="div1">
                <h5>Username</h5>
                <input type="text" className="input1" />
              </div>
            </div>
            <div className="input-div pass1">
              <div className="i1">
                <i className="fas fa-lock1">
                  <VisibilityOffIcon />
                </i>
              </div>
              <div classNmae="div1">
                <h5>Password</h5>
                <input type="password" className="input1" />
              </div>
            </div>
            <Link to="/home-admi">
              <input
                type="submit"
                className="buttonlogin1"
                value="Login"
              ></input>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
export default AdmiLogin;
