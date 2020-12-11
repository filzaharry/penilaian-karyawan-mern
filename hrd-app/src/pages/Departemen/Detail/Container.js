import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Gap } from "../../../components/atoms";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Detail from "./Component";
import { departemenDetailAction } from "../../../config/actions/departemen";
// import TableDepartemen from "../Table/Container";

class DetailContainer extends Component {
  componentDidMount() {
    this.props.dispatch(departemenDetailAction(this.props.match.params.id));
  }
  render() {
    return (
      <div className="container">
        <Link to="/departemen" className="btn btn-info">
          {" "}
          <FontAwesomeIcon icon={faArrowLeft} />
          Kembali ke Departemen
        </Link>
        <Gap height={20} />
        <Detail />
        {/* <TableDepartemen /> */}
      </div>
    );
  }
}

export default connect()(DetailContainer);
