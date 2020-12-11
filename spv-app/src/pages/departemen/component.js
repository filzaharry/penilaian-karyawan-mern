import React, { Fragment } from "react";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    getDepartemenDetail: state.departemen.getDepartemenDetail,
    errorDepartemenDetail: state.departemen.errorDepartemenDetail,
  };
};

const DepComp = (props) => {
  const history = useHistory();
  console.log("response detail Departemen coy: ", props.getDepartemenDetail);
  const responseAPI = props.getDepartemenDetail.data;

  return (
    <Fragment>
      {responseAPI ? (
        <Fragment>
          {" "}
          <h5 className="font-weight-bold">{responseAPI.nama_dep}</h5>
          <div class="employee">
            <div class="row">
              <div
                class="image-profile"
                onClick={() => history.push(`/karyawan/${responseAPI.karyawan._id}`)}
              >
                <img
                  src="https://vignette.wikia.nocookie.net/inoubattlewanichijoukeinonakade/images/a/a7/Chifuyu2.png/revision/latest/top-crop/width/220/height/220?cb=20141216015625"
                  alt="chifuyu"
                />
              </div>
              <div class="col-name">
                <p class="employee-name">Chifuyu Himeki</p>
                <p class="employee-jabatan">Staff</p>
              </div>
              <div class="col-time">
                <p class="employee-count">-33254733</p>
                <p class="employee-date">22 Des 2020</p>
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <div className="text-center">
          <Spinner type="grow" variant="warning" />
        </div>
      )}
    </Fragment>
  );
};

export default connect(mapStateToProps)(DepComp);
