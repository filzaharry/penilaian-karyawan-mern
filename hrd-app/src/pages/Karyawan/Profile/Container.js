import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Gap } from "../../../components/atoms";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { karyawanDetailAction } from "../../../config/actions/karyawan";
import ProfileKaryawan from "./Component";

class Profile extends Component {
  componentDidMount() {
    this.props.dispatch(karyawanDetailAction(this.props.match.params.id));
  }
  render() {
    return (
      <div className="container">
        <Link to="/karyawan" className="btn btn-info"> <FontAwesomeIcon icon={faArrowLeft} />Kembali ke Karyawan</Link>
        <Gap height={20} />
        <ProfileKaryawan />
      </div>
    );
  }
}

export default connect()(Profile);
