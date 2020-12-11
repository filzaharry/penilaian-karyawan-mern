import React, { Component } from "react";
import Table from "./Component";
import { connect } from "react-redux";
import { karyawanFilterDepartemenAction } from "../../../config/actions/karyawan";

class TableDepartemen extends Component {
  componentDidMount() {
    this.props.dispatch(karyawanFilterDepartemenAction());
  }
  render() {
    return (
      <div>
        <Table />
      </div>
    );
  }
}
export default connect()(TableDepartemen);
