import React, { Component } from 'react'
import { Gap } from "../../component";
import './departemen.scss'
import { connect } from "react-redux";
import { departemenDetailAction } from '../../config/actions/departemen';
import { Link } from 'react-router-dom';
import DepComp from './component';


class Detail extends Component {
  componentDidMount() {
    this.props.dispatch(departemenDetailAction(this.props.match.params.id));
  }

  render() {
    return (
      <div className="container-sm">
      <div className="col-sm-12">
      <Gap height={20} />
      <Link to="/departemen" className="btn btn-info">Kembali</Link>
      <Gap height={20} />
      <DepComp />
      <Gap height={20} />
      </div>
    </div>
    )
  }
}

export default connect()(Detail);
