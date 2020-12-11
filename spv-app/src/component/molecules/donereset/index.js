import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Gap } from "../../atoms";

const DoneReset = () => {
  const history = useHistory();
  return (
    <div className="container-sm text-center">
        <Gap height={100} />
      <div className="col-sm-12 mt-4 pt-4">
        <h3>Password telah <br/> berhasil direset</h3>
        <p>
          Silahkan cek inbox email Anda, kemudian login ulang dengan password
          yang ada di inbox
        </p>
        <Gap height={10} />
        <Button
          onClick={() => history.push("/login")}
          className="btn btn-secondary btn-block"
          title="Kembali ke Login"
        />
      </div>
    </div>
  );
};

export default DoneReset;
