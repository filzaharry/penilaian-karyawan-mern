import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Jumbotron } from "../../component";
import './employee.scss';

const mapStateToProps = (state) => {
  return {
    getKaryawanList: state.karyawan.getKaryawanList,
    errorKaryawanList: state.karyawan.errorKaryawanList,
  };
};

class EmpComponent extends Component {
  render() {
    const employee = this.props.getKaryawanList.data;
    // console.log(this.props.getKaryawanList.data)
    return (
      <div className="text-center">
        <Jumbotron jumbotronTitle="Daftar Karyawan Kontrak Outsourcing" />

        {employee &&
          employee.map((getKaryawanList, index) => (  
            <Link key={index} to={`/karyawan/${getKaryawanList._id}`} >
              <div class="employee">
                <div class="row">
                    <div class="image-profile">
                      <img src={`http://localhost:4000/${getKaryawanList.image}`} alt={getKaryawanList.name}/>
                    </div>
                    <div class="col-name">
                      <p class="employee-name">{getKaryawanList.name}</p>
                      <p class="employee-jabatan">{getKaryawanList.jabatan}</p>
                    </div>
                    <div class="col-time">
                      <p class="employee-count">-33254733</p>
                      <p class="employee-date">22 Des 2020</p>
                    </div>    
                </div>
              </div>
            </Link>
          ))}
      </div>
    );
  }
}
export default connect(mapStateToProps)(EmpComponent);
