import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Spinner } from "reactstrap";
import "./detail.scss";

const mapStateToProps = (state) => {
  return {
    getDepartemenDetail: state.departemen.getDepartemenDetail,
    errorDepartemenDetail: state.departemen.errorDepartemenDetail,
  };
};

const Detail = (props) => {
  // console.log("response detail Departemen coy: ", props.getDepartemenDetail);
  const responseAPI = props.getDepartemenDetail.data;
  return (
    <div>
      {responseAPI ? (
        <Fragment>
          {" "}
          <div className="col">
            <img
              src={`http://localhost:4000/${responseAPI.image}`}
              className="img-thumbnail detail-departemen"
              alt="img-profile"
            />
            <div className="ml-2">
              <h1 className="display-4">Departemen : {responseAPI.nama_dep}</h1>
              <h4 className="text-muted font-small">Kategori :{responseAPI.kategori}</h4>
              <h4 className="text-muted font-small">Supervisor :{responseAPI.supervisor}</h4>
            </div>
          </div>
          <hr />
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

export default connect(mapStateToProps, null)(Detail);
