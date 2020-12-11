import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    getFilterKaryawan: state.karyawan.getFilterKaryawan,
    errorFilterKaryawan: state.karyawan.errorFilterKaryawan,
  };
};

function Table(props) {
  console.log("ini console log dari component table:", props.getFilterKaryawan)
  const filter = props.getFilterKaryawan;
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nama Karyawan</th>
            <th scope="col">NIK</th>
            <th scope="col">Jabatan</th>
          </tr>
        </thead>
        <tbody>
          {filter &&
            filter.map((getFilterKaryawan) => (
              <tr>
                <td>{getFilterKaryawan.name}</td>
                <td>{getFilterKaryawan.nik}</td>
                <td>{getFilterKaryawan.jabatan}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default connect(mapStateToProps, null)(Table);
