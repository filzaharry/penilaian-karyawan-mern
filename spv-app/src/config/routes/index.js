import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ForgetPassword, Login, MainApp, Register, ResetPassword } from "../../pages";
import { Notifications } from "react-push-notification";

const Routes = () => {
  return (
    <Router>
      <Notifications />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/reset-password/:token" component={ResetPassword} />
          <Route path="/lupa-password" component={ForgetPassword} />
          <Route path="/" component={MainApp} />
        </Switch>
    </Router>
  );
};

export default Routes;
