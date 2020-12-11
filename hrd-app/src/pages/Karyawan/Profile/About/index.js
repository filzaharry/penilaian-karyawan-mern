import React from "react";
import { connect } from "react-redux";
import { Spinner } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getKaryawanDetail: state.karyawan.getKaryawanDetail,
    errorKaryawanDetail: state.karyawan.errorKaryawanDetail,
  };
};

const About = (props) => {
  const responseAPI = props.getKaryawanDetail.data;
  return (
    <div>
      {responseAPI ? (
        <div className="container pt-4">
          <h5>Tentang Karyawan</h5>
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <td>Tempat Lahir</td>
                <td className="p-3 text-primary">
                  : {responseAPI.tempatLahir}
                </td>
              </tr>
              <tr>
                <td>Tanggal Lahir</td>
                <td className="p-3 text-primary">: {responseAPI.tglLahir}</td>
              </tr>
              <tr>
                <td>Jenis Kelamin</td>
                <td className="p-3 text-primary">: {responseAPI.gender}</td>
              </tr>
              <tr>
                <td>Agama</td>
                <td className="p-3 text-primary">: {responseAPI.agama}</td>
              </tr>
              <tr>
                <td>Alamat</td>
                <td className="p-3 text-primary" style={{ width: "300px" }}>
                  <p>
                    : {responseAPI.alamat}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center">
          <Spinner type="grow" variant="warning" />
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps)(About);
