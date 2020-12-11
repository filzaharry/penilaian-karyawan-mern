import React, { Fragment } from "react";
import { Gap } from "../../../components";
import About from "./About";
import Jobs from "./Jobs";
import "./profile.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Spinner } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getKaryawanDetail: state.karyawan.getKaryawanDetail,
    errorKaryawanDetail: state.karyawan.errorKaryawanDetail,
  };
};

const ProfileKaryawan = (props) => {
  console.log("response dari ProfileKaryawan coy: ", props.getKaryawanDetail);
  const responseAPI = props.getKaryawanDetail.data;

  return (
    <div>
      {responseAPI ? (
        <Fragment>
          {" "}
          <div className="row">
            <div className="col-sm col-lg-4">
              <img
                src={`http://localhost:4000/${responseAPI.image}`}
                className="img-thumbnail profile-karyawan"
                alt="img-profile"
              />
            </div>
            <div className="col-sm col-lg-8">
              <h1>{responseAPI.name}</h1>
              <h5>
                {responseAPI.jabatan} {responseAPI.departemen.nama_dep}
              </h5>
              <p className="font-italic">{responseAPI.nik}</p>
              <div className="container">
                <div className="row">
                  <Link
                    to="/karyawan/tambahkaryawan"
                    className="btn btn-primary"
                  >
                    Cetak Profil
                  </Link>
                  <Gap width={5} />
                  <Link
                    to={`/karyawan/profile/${responseAPI.id}/nilai`}
                    className="btn btn-success"
                  >
                    Lihat Nilai
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <About />
            <Jobs />
            <div className="col pt-4">
              <h5>Dokumen Tersimpan</h5>
              <button
                className="btn btn-primary mr-3"
                onClick={() => {
                  window.location.href = `${responseAPI.porto}`;
                  return null;
                }}
              >
                Portofolio
              </button>
              <button
                className="btn btn-primary mr-3"
                onClick={() => {
                  window.location.href = `${responseAPI.cv}`;
                  return null;
                }}
              >
                Curiculum Vitae
              </button>
            </div>
          </div>
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
