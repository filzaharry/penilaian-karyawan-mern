import React from "react";
import Saran from "./saran";
import Kategori from "./kategori";
import { Gap } from "../../atoms";
import { Link } from "react-router-dom";

const formPenilaian = () => {
  return (
    <div>
      <p className="font-weight-bold">KATEGORI</p>
      <div className="col-sm-12 pb-4">
        <Kategori kategori="Hasil Kerja / Kualitas Kerja" />
        <Kategori kategori="Keterampilan Kerja" />
        <Kategori kategori="Tanggung Jawab" />
        <Kategori kategori="Kerjasama dengan Rekan Kerja" />
        <Kategori kategori="Kedisiplinan" />
        <Kategori kategori="Kerajinan" />
        <Kategori kategori="Ketelitian" />
        <Kategori kategori="Kejujuran" />
        <Kategori kategori="Loyalitas" />
        <Kategori kategori="Inisiatif/Prakarsa & Kreatif" />
      </div>

      <hr className="bg-dark" />

      <p className="font-weight-bold">PERTANYAAN</p>
      <div className="col-sm-12">
        <Saran saran="Apakah Tugas dan Tanggung Jawab sekarang dirasakan terlalu banyak/berat ? Jelaskan" />
        <Saran saran="Apakah Tugas dan Tanggung Jawab sekarang dapat ditambahkan atau ditingkatkan ? Jelaskan" />
        <Saran saran="Ide dan saran untuk perbaikan departemen masing-masing agar efisian seperti mengurangi biaya rutin yang tidak perlu ?" />
        <Saran saran="Bagaimana meningkatkan Koordinasi dan Komunikasi antar rekan kerja agar hasil kerja dapat optimal ?" />
        <Saran saran="Saran dari Manager Departemen yang bersangkutan :" />
      </div>

      <div className="form-check ml-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="confirmAccount"
        />
        <label className="form-check-label font-s" for="confirmAccount">
          <small>Rekomendasikan Karyawan untuk Perpanjang Masa Kontrak</small>
        </label>
      </div>
      <hr className="bg-dark" />
      <div className="form-check ml-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="confirmValue"
        />
        <label className="form-check-label font-s" for="confirmValue">
          <small>
            Dengan ini saya membuat penilaian dengan sebenar-benarnya.
            <span className="text-primary">
              Periksa kembali penilaian Anda sebelum menekan tombol Kirim
            </span>
          </small>
        </label>
      </div>
      <div className="container row pt-4 mx-auto">
        <Link
          className="btn btn-secondary"
          style={{ width: "120px" }}
          to="/karyawan"
        >
          Batal
        </Link>
        <Link
          className="btn btn-primary ml-auto"
          style={{ width: "120px" }}
          to="/karyawan/terkirim"
        >
          Kirim
        </Link>
      </div>
      <Gap height={50} />
    </div>
  );
};

export default formPenilaian;
