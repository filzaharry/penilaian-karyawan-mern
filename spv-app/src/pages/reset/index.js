import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { ResetIC } from "../../assets";
import axios from "axios";
import { Button, Gap, Wave } from "../../component";

const ResetPassword = (props) => {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [alert, setAlert] = useState("");

  const changePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!value) {
      setErrorPassword("Password Tidak Boleh Kosong");
    } else {
      setErrorPassword("");
    }
  };

  const changeConfirmPassword = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (!value) {
      setErrorConfirmPassword("Konfirmasi Password Tidak Boleh Kosong");
    } else if (password !== value) {
      setErrorConfirmPassword("Password Tidak Sesuai");
    } else {
      setErrorConfirmPassword("");
    }
  };

  const updatePassword = () => {
    const data = {
      password: password,
      token: props.match.params.token,
    };
      // console.log(props.match.params.token);
    axios.put("http://localhost:4000/v1/resetpassword", data).then((res) => {
      // console.log(res);
      if (res) {
        setPassword("");
        setConfirmPassword("");
        setAlert("Password Berhasil diUbah");
        setTimeout(() => {
            setAlert('')
        }, 3000);
      }
    });
  };

  return (
    <Fragment>
      <Wave />
      <div className="container-fluid">
        <div className="col-sm-12 col-lg-8 mx-auto text-center">
            {alert && (
              <div className="alert alert-success">
                <p>{alert}</p>
              </div>
            )}
            <img src={ResetIC} alt="reset" style={{maxWidth: "100px"}} />
            <Gap height={30} />
            <h3 className="text-info">Reset Password</h3>
            <p className="text-muted small">Dengan melakukan perubahan pada password, maka password sebelumnya berganti menjadi password saat ini, periksa kembali sebelum menyimpan</p>
            <Gap height={20} />
            <input
            className="form-control"
              type="password"
              label="Password Baru"
              placeholder="Masukkan Password Baru"
              value={password}
              onChange={changePassword}
            />
            {errorPassword && (
              <p className="mt-2 text-danger text-left">{errorPassword}</p>
            )}
            <Gap height={10} />
            <input
            className="form-control"
              type="password"
              label="Ulangi Password"
              placeholder="Ulangi Password Baru"
              value={confirmPassword}
              onChange={changeConfirmPassword}
            />
            {errorConfirmPassword && (
              <p className="mt-2 text-danger text-left">{errorConfirmPassword}</p>
            )}
            <Gap height={40} />
              <Button title="Simpan" onClick={updatePassword} />
              <Gap height={10} />
              <Button
                className="btn btn-secondary text-light btn-block"
                title="Kembali ke Login"
                onClick={() => history.push("/login")}
              />
          </div>
        </div>
    </Fragment>
  );
};

export default ResetPassword;
