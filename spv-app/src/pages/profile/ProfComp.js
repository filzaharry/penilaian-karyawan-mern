import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Gap } from "../../component";
import { Spinner } from "react-bootstrap";

const mapStateToProps = (state) => {
  return {
    getKaryawanDetail: state.karyawan.getKaryawanDetail,
    errorKaryawanDetail: state.karyawan.errorKaryawanDetail,
  };
};

const ProfileKaryawan = (props) => {
  const history = useHistory();
  // console.log("response dari ProfileKaryawan coy: ", props.getKaryawanDetail);
  const responseAPI = props.getKaryawanDetail.data;

  return (
    <div>
      {responseAPI ? (
        <Fragment>
          {" "}
          <div className="text-center">
            <img
              src={`http://localhost:4000/${responseAPI.image}`}
              className="img-thumbnail rounded-circle"
              alt="employee"
              width={80}
            />
          </div>
          <Gap height={20} />
          <h3 className="text-center">{responseAPI.name}</h3>
          <Gap height={20} />
          <div className="mx-auto">
            <table className="table table-sm table-borderless">
              <tbody>
                <tr>
                  <td style={{maxWidth: '200px', width: "150px"}}>NIK</td>
                  <td>:</td>
                  <td>{responseAPI.nik}</td>
                </tr>
                <tr>
                  <td style={{maxWidth: '200px', width: "150px"}}>Jabatan</td>
                  <td>:</td>
                  <td>{responseAPI.jabatan}</td>
                </tr>
                <tr>
                  <td style={{maxWidth: '200px', width: "150px"}}>Departemen</td>
                  <td>:</td>
                  <td>{responseAPI.departemen.nama_dep}</td>
                </tr>
                <tr>
                  <td style={{maxWidth: '200px', width: "150px"}}>Masa Kontrak</td>
                  <td>:</td>
                  <td>{responseAPI.kontrak}</td>
                </tr>
                <tr>
                  <td style={{maxWidth: '200px', width: "150px"}}>Mulai Kontrak</td>
                  <td>:</td>
                  <td>{responseAPI.tglMulai}</td>
                </tr>
                <tr>
                  <td style={{maxWidth: '200px', width: "150px"}}>Akhir Kontrak</td>
                  <td>:</td>
                  <td>{responseAPI.tglSelesai}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Button
            className="btn btn-primary btn-block"
            title="Nilai Karyawan"
            onClick={()=> history.push(`/karyawan/${responseAPI._id}/nilai`)}
          />
        </Fragment>
      ) : (
        <div className="text-center">
          <Spinner type="grow" variant="warning" />
        </div>
      )}
      {/* <Switch>
        <Route path={`${path}/nilai`}>
          <TableNilai />
        </Route>
      </Switch> */}
    </div>
  );
};

export default connect(mapStateToProps, null)(ProfileKaryawan);
