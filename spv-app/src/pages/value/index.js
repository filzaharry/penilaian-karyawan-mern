import React from "react";
import { FormPenilaian, Gap } from "../../component";
import "./value.scss";

const ValueOfEmployee = () => {
  return (
    <div className="container-sm">
      <div className="col-sm-12 mt-4">
        <h5 className="font-weight-bold">Form Penilaian</h5>
        <Gap height={30} />
        <FormPenilaian />
        </div>
      </div>
  );
};

export default ValueOfEmployee;
