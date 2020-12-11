import React from "react";
import { connect } from "react-redux";
import { Spinner } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getKaryawanDetail: state.karyawan.getKaryawanDetail,
    errorKaryawanDetail: state.karyawan.errorKaryawanDetail,
  };
};

const Jobs = (props) => {
  const responseAPI = props.getKaryawanDetail.data;
  return (
    <div>
      {responseAPI ? (
        <div className="container pt-4">
          <h5>Informasi Pekerjaan</h5>

          <table className="text-dark">
            <thead></thead>
            <tbody>
              <tr>
                <td>NIK</td>
                <td className="p-3 text-primary">: {responseAPI.nik}</td>
              </tr>
              <tr>
                <td>Tanggal Masuk</td>
                <td className="p-3 text-primary">: {responseAPI.tglMulai}</td>
              </tr>
              <tr>
                <td>Jabatan</td>
                <td className="p-3 text-primary">: {responseAPI.jabatan}</td>
              </tr>
              <tr>
                <td>Masa Kontrak</td>
                <td className="p-3 text-primary">: {responseAPI.kontrak}</td>
              </tr>
              <tr>
                <td>Mulai Kontrak</td>
                <td className="p-3 text-primary">: {responseAPI.tglMulai}</td>
              </tr>
              <tr>
                <td>Habis Kontrak</td>
                <td className="p-3 text-primary">: {responseAPI.tglSelesai}</td>
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

export default connect(mapStateToProps)(Jobs);
