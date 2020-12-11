import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Gap } from "../../components";
import { connect } from "react-redux";
import DetailContainer from "./Detail/Container";
import Card from "./Card/Container";
import TambahDepartemen from './Create/Container'

class Departemen extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Gap height={30} />
          <Switch>
            <Route path="/departemen" exact component={Card} />
            <Route path="/departemen/tambah-departemen" exact component={TambahDepartemen} />
            <Route path="/departemen/:id" exact component={DetailContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(Departemen);
