import React, { Fragment, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Button, Gap, Wave } from "../../component";
import { Logo } from "../../assets";
import addNotification from "react-push-notification";
import swal from "sweetalert";
import Axios from "axios";
import "./login.scss";

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");


  const ChangeUsername = (e) => {
    // console.log(e.target.value);
    const value = e.target.value;
    setUsername(value);
    setError("");
  };
  const ChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setError("");
  };

  const submitLogin = () => {
    const data = {
      username: username,
      password: password,
    };
    Axios
      .post("http://localhost:4000/v1/login", data)
      .then((result) => {
        if (result) {
          localStorage.setItem("token", result.data.token);
          setRedirect(true);
          swal("Selamat Datang !", result.data.message, "success");
          addNotification({
            title: "Selamat Datang Kembali !!!",
            message: result.data.message,
            icon: "https://cdn.worldvectorlogo.com/logos/pwa-logo.svg",
            theme: "darkblue",
            native: true,
            duration: 30000,
          });
        }
        // console.log(result.data.token);
      })
      .catch((e) => {
        // console.log(e.response.data.message);
        setError(e.response.data.message);
      });
  };


  return (
    <Fragment>
    {redirect && <Redirect to="/" />}

    <div className="section">
      <Wave />
      <div className="container">
        <div className="col-sm-12 ">
          <img src={Logo} alt="logo" width={200} />
          <Gap height={40} />
          {error && (
          <div className="alert alert-danger">
            <p>{error}</p>
          </div>
        )}

          <h3>Selamat Datang</h3>
          <p>Silahkan Login untuk masuk</p>
          <Gap height={20} />
          <div className="form-group">
            <label htmlFor="email">Alamat Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Contoh: example@gmail.com"
              onChange={ChangeUsername}
            />
            <Gap height={20} />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="password"
              onChange={ChangePassword}
            />
            <small className="form-text text-muted">
              Lupa Password ? <Link to="/lupa-password">Klik disini</Link>
            </small>
            <Gap height={40} />
            <Button
              onClick={submitLogin}
              title="Login"
            />
            <Gap height={10} />
            <Button
              onClick={() => history.push("/register")}
              className="btn btn-secondary btn-block"
              title="Daftar"
            />
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default Login;
