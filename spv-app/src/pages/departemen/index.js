import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Departemen from './list'
import Detail from './container'
import { connect } from "react-redux";
import EmpComponent from "../employee/component";
import { departemenAction } from "../../config/actions/departemen";

class Routes extends Component {
  componentDidMount() {
    this.props.dispatch(departemenAction());
  }
  componentDidUpdate() {
    this.props.dispatch(departemenAction());
  }
  render() {
    return (
      <Router>
          <Switch>
            <Route path="/departemen/:id/karyawan" component={EmpComponent} />
            <Route path="/departemen/:id" exact component={Detail} />
            <Route path="/departemen" exact component={Departemen} />
          </Switch>
      </Router>
    );
  }
}

export default connect()(Routes);
