import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { Button, Gap, Wave } from "../../component";
import Axios from 'axios'
import swal from "sweetalert";
import addNotification from "react-push-notification";

const Register = () => {
  const history = useHistory();
  const[username, setUsername] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[error, setError] = useState('');

  const onChangeUsername =(e)=> {
    const value = e.target.value;
    setUsername(value);
    setError('')
  }
  const onChangeEmail =(e)=> {
    const value = e.target.value;
    setEmail(value);
    setError('')
  }
  const onChangePassword =(e)=> {
    const value = e.target.value;
    setPassword(value);
    setError('')
  }

  const RegisterClick = () => {
    const data = {
      username: username,
      email: email,
      password: password,
    };
    // console.log(data);
    Axios
      .post("http://localhost:4000/v1/register", data)
      .then((result) => {
        if (result) {
          if (result.data) {
            setUsername("");
            setEmail("");
            setPassword("");
            // setAlert(result.data.message);
            // setTimeout(() => {
            //   setAlert("");
            // }, 3000);
            swal(
              "Berhasil !",
              result.data.message,
              "success"
            );
            addNotification({
              title: "Registrasi Berhasil !!!",
              message: result.data.message,
              icon: "https://cdn.worldvectorlogo.com/logos/pwa-logo.svg",
              theme: "darkblue",
              native: true,
              duration: 30000, // when using native, your OS will handle theming.
            });
          }
        }
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };



  return (
    <section>
      <Wave />
      <div className="container">
        <div className="col-sm-12">
          {error && (
            <div className="alert alert-danger">
            <p>{error}</p>
          </div>

          )}
          <h3>Daftar User Baru</h3>
          <Gap height={20} />
          <div className="form-group">

            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Nama Pengguna"
              onChange={onChangeUsername}
            />
            <Gap height={20} />

            <label htmlFor="email">Alamat E-mail</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Masukkan Email"
              onChange={onChangeEmail}
            />
            <Gap height={20} />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Masukkan Password"
              onChange={onChangePassword}
            />
            
            <Gap height={40} />

            <Button
              onClick={RegisterClick}
              className="btn btn-primary btn-block"
              title="Daftar Baru"
            />
            <Gap height={10} />

            <Button
              onClick={() => history.push("/login")}
              className="btn btn-secondary btn-block"
              title="Kembali ke Login"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
