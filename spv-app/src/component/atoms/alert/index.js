import React from "react";
import { Link } from "react-router-dom";

const Alert = (props) => {
  return (
    <div>
      <div className={props.className} role="alert">
        {props.alertTitle}
        <Link to={props.to}> {props.alertLink}</Link>
      </div>
    </div>
  );
};

export default Alert;
