import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Jumbotron } from "../../component";
import { departemenAction } from "../../config/actions/departemen";
import './departemen.scss';

const mapStateToProps = (state) => {
  return {
    getDepartemenList: state.departemen.getDepartemenList,
    errorDepartemenList: state.departemen.errorDepartemenList,
  };
};

class Departemen extends Component {
  componentDidMount() {
    this.props.dispatch(departemenAction());
  }
  render() {
    const departemen = this.props.getDepartemenList.data;
    // console.log("departemen woy",this.props.getDepartemenList.data);
    return (
      <div className="text-center">
        <Jumbotron jumbotronTitle="Daftar Departemen PT. Aplus Pacific" />

        {departemen &&
          departemen.map((getDepartemenList, index) => (
            <Link key={index} to={`/departemen/${getDepartemenList._id}`} >
            <div className="mx-auto departemen">
              <div className="row">
                <div className="image-profile">
                  <img
                    src={`http://localhost:4000/${getDepartemenList.image}`}
                    alt={getDepartemenList.nama_dep}
                  />
                </div>
                <div className="col-name">
                  <p className="departemen-name">{getDepartemenList.nama_dep}</p>
                  <p className="departemen-supervisor">
                    {getDepartemenList.supervisor}
                  </p>
                </div>
              </div>
            </div>
            </Link>
          ))}
      </div>
    );
  }
}
export default connect(mapStateToProps)(Departemen);
