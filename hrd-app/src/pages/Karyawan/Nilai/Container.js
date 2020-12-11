import React, { Component } from "react";
import { nilaiAction } from "../../../config/actions/nilai";
import TableNilai from "./Component";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Gap } from "../../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";

class NilaiContainer extends Component {
  componentDidMount() {
    this.props.dispatch(nilaiAction(this.props.match.params.id));
  }
  render() {
    return (
      <div>
        <Link to="/karyawan" className="btn btn-info">
          {" "}
          <FontAwesomeIcon icon={faArrowLeft} /> Kembali ke Karyawan
        </Link>
        <Gap height={20} />
        <h2>Daftar Nilai</h2>
        <h5 className="text-muted">
          Selama Periode Kontrak Berlangsung Nilai akan terdata di sini
        </h5>
        <Gap height={20} />
        <Link to="/karyawan" className="btn btn-primary">
          {" "}
          <FontAwesomeIcon icon={faCheck} /> Tambah Nilai
        </Link>
        <Gap height={40} />
        <TableNilai />
      </div>
    );
  }
}
export default connect()(NilaiContainer);
