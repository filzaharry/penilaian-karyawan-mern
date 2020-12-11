import React from "react";
import { HelpSupportIC } from "../../assets";
import { Gap } from "../../component";

const Help = () => {
  return (
    <div className="container">
      <Gap height={20} />
      <div className="row mx-auto">
        <img src={HelpSupportIC} alt="support" style={{ maxWidth: "150px" }} />
        <h3 className="mt-4 ml-4">
          Bantuan <br /> Aplikasi
        </h3>
      </div>
      <div className="container">
        <Gap height={30} />
        <h5 className="font-weight-bold">Cara Melihat List Departemen</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
        <Gap height={30} />
        <h5 className="font-weight-bold">Cara Melihat List Karyawan</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
        <Gap height={30} />
        <h5 className="font-weight-bold">Cara Melihat Profil Karyawan</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
        <Gap height={30} />
        <h5 className="font-weight-bold">Cara Melakukan Penilaian Karyawan</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
        <Gap height={30} />
        <h5 className="font-weight-bold">Cara Melihat Riwayat Penilaian</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
      </div>
    </div>
  );
};

export default Help;
