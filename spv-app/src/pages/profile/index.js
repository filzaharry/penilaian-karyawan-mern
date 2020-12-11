import React, { Component } from 'react'
import { Gap } from "../../component";
import ProfComp from "./ProfComp";
import './profile.scss'
import { connect } from "react-redux";
import { karyawanDetailAction } from '../../config/actions/karyawan';
import { Link } from 'react-router-dom';


class Profile extends Component {
  componentDidMount() {
    this.props.dispatch(karyawanDetailAction(this.props.match.params.id));
  }

  render() {
    return (
      <div className="container-sm">
      <div className="col-sm-12">
      <Gap height={20} />
      <Link to="/karyawan" className="btn btn-info">Kembali</Link>
      <Gap height={20} />
      <h5 className="font-weight-bold">Profile Karyawan</h5>
      <Gap height={20} />
      <ProfComp />
      <Gap height={20} />
      </div>
    </div>
    )
  }
}

export default connect()(Profile);
