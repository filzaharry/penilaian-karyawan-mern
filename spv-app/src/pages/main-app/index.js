import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Employee from "../employee";
import Home from "../home";
import Settings from "../settings";
import BottomNav from "../../component/molecules/bottomnav";
import Departemen from "../departemen";
import ValueHistory from "../history";
import { Gap } from "../../component";
import Help from "../help";

const MainApp = () => {
  const token = localStorage.getItem('token')
  if(!token){
    return <Redirect to="/login" />
  }
  return (
    <Router>
      <BottomNav />
        <Switch>
          <Route path="/karyawan" component={Employee} />
          <Route path="/departemen" component={Departemen} />
          <Route path="/riwayat-nilai" component={ValueHistory} />
          <Route path="/pengaturan" component={Settings} />
          <Route path="/bantuan" component={Help} />
          <Route path="/" component={Home} />
        </Switch>
      <Gap height={100} />
    </Router>
  );
};

export default MainApp;
