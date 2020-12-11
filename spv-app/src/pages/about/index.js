import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Gap, Jumbotron } from "../../component";

const About = () => {
  return (
    <Fragment>
      <Jumbotron jumbotronTitle="Tentang Supervisor Mobile Web-App" />
      <div className="container m-2 mx-auto">
        <Gap height={5} />
        <p>
          Aplikasi yang dibuat untuk memudahkan <i>Supervisor</i> tiap
          Departemen dalam melakukan penilaian kinerja karyawan kontrak{" "}
          <i>outsourcing</i> pada PT. Aplus Pacific
        </p>
        <Gap height={5} />
        <p>
          Aplikasi ini pun dibuat untuk memenuhi tugas Laporan Skripsi yang
          dilaksanakan pada Universitas Raharja
        </p>
        <Gap height={20} />
        <Link to="/pengaturan" className="btn btn-info">
          Kembali ke Pengaturan
        </Link>
      </div>
    </Fragment>
  );
};

export default About;
