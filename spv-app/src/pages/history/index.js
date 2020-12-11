import React from "react";
import { Gap } from "../../component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const ValueHistory = () => {
  return (
    <div className="container">
      <Gap height={30} />
      <h3>Riwayat Penilaian</h3>
      <Gap height={30} />
      <div className="table-responsive-sm">
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">Tanggal</th>
              <th scope="col">Supervisor</th>
              <th scope="col">Departemen</th>
              <th scope="col">Karyawan</th>
              <th scope="col">Nilai</th>
              <th scope="col" colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12-12-2020</td>
              <td>Suhendar</td>
              <td>Spandeck</td>
              <td>Filza Harry</td>
              <td>10</td>
              <td className="button-small btn-info"><FontAwesomeIcon Icon={faCoffee} /></td>
              <td className="button-small btn-danger">Hapus</td>
            </tr>
            <tr>
              <td>12-12-2020</td>
              <td>Suhendar</td>
              <td>Spandeck</td>
              <td>Filza Harry</td>
              <td>10</td>
            </tr>
            <tr>
              <td>12-12-2020</td>
              <td>Suhendar</td>
              <td>Spandeck</td>
              <td>Filza Harry</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ValueHistory;
