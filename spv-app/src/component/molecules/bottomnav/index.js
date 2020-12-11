import React from "react";
import { useHistory } from "react-router-dom";
import {
  DashboardIC,
  KaryawanIC,
  SettingsIC,
} from "../../../assets";
import "./bottomnav.scss";

const BottomNav = () => {
  const history = useHistory();
  return (
    <section className="container bottom-nav fixed-bottom pt-3">
       
          <div className="row">
            
              <div className="col-4 text-center" onClick={()=> history.push('/')}>
                <img src={DashboardIC} className="pb-2 cta-button" alt="home" />
                <p className="cta-text text-center pt-2">Home</p>
              </div>
           
            
              <div className="col-4 text-center" onClick={()=> history.push('/karyawan')}>
                <img src={KaryawanIC} className="pb-2 cta-button" alt="info" />
                <p className="cta-text text-center pt-2">Karyawan</p>
              </div>
           
            
              <div className="col-4 text-center" onClick={()=> history.push('/pengaturan')}>
                <img src={SettingsIC} className="pb-2 cta-button" alt="pengaturan" />
                <p className="cta-text text-center pt-2">Pengaturan</p>
              </div>
           
      </div>
    </section>
  );
};

export default BottomNav;
