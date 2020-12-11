import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { EmployeeIC, ChecklistIC, HelpIC, DepartemendIC } from "../../assets";
import { Alert } from "../../component/atoms";
import { Card, Jumbotron } from "../../component/molecules";

const Home = () => {
  const[alert, setAlert] = useState('')
  const history = useHistory();

  const updateKaryawan = () => {

  }


  return (
    <Fragment>
      <Jumbotron jumbotronTitle="Selamat Datang, Supervisor" />
      <section class="container">
        <div class="row justify-content-center" onChange={updateKaryawan}>
          <div class="border-bottom pb-4 col-12 section-2">
            {alert && (
              <Alert
              alertTitle="Karyawan atas nama Filza Harry telah ditambahkan pada Departemen Produksi - Spandeck/Bondeck"
              className="alert alert-success"
              alertLink="- Lihat Profile Karyawan"
              to="/profile"
            />
            )}
            <Alert
              alertTitle="Lakukan Penilaian Karyawan sebelum tanggal 15"
              className="alert alert-warning"
              alertLink="- Lihat Daftar Karyawan"
              to="/karyawan"
            />

            <div className="container cta-home">
              <div className="row text-center ">
                <Card icon={DepartemendIC} text="Departemen" onClick={() => history.push('/departemen')}/>
                <Card icon={EmployeeIC} text="Karyawan" onClick={() => history.push('/karyawan')}/>
                <Card icon={ChecklistIC} text="Riwayat Nilai" onClick={() => history.push('/riwayat-nilai')}/>
                <Card icon={HelpIC} text="Bantuan" onClick={() => history.push('/bantuan')}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
