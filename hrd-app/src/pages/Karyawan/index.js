import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TableKaryawan from "./Table/Container";
import Profile from "./Profile/Container";
// import TambahKaryawan from "./Create/Container";
import EditKaryawan from "./Edit/Container";
import Nilai from "./Nilai/Container";
import CreateKaryawan from "./Create";

const Karyawan = () => {
  return (
    <Router>
        <div className="col pt-4">
          <Switch>
            <Route path="/karyawan/tambah-karyawan" component={CreateKaryawan}/>
            <Route path="/karyawan/profile/:id" component={Profile} />
            <Route path="/karyawan/edit/:id" component={EditKaryawan} />
            <Route path="/karyawan/profile/:id/nilai" component={Nilai} />
            <Route path="/karyawan"  component={TableKaryawan} />
          </Switch>
        </div>
    </Router>
  );
};

export default Karyawan;
