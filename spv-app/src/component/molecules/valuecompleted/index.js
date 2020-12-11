import React from 'react'
import { useHistory } from "react-router-dom";
import { ThumbsIC } from '../../../assets';
import { Button, Gap } from "../../atoms";

const ValueCompleted = () => {
    const history = useHistory();
    return (
        <div className="container-sm text-center">
        <Gap height={50} />
      <div className="col-sm-12 mt-4 pt-4">
        <img src={ThumbsIC} alt="value-complete" style={{width: '100px'}} />
        <Gap height={20} />
        <h3>Penilaian Anda <br/> berhasil dikirim</h3>
        <p>
          Hasil Penilaian secara otomatis akan masuk ke dalam data HRD
        </p>
        <Gap height={10} />
        <Button
          onClick={() => history.push("/karyawan/:id/nilai")}
          className="btn btn-secondary btn-block"
          title="Edit Nilai"
        />
        <Button
          onClick={() => history.push("/karyawan")}
          className="btn btn-primary btn-block"
          title="Kembali ke Karyawan"
        />
      </div>
    </div>
    )
}

export default ValueCompleted
