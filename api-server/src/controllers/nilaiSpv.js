const { validationResult } = require("express-validator");
const nilaiSpvSchema = require("../models/nilaispv");

exports.createNilaiSpv = (req, res, next) => {
  // handle dynamic error validation with condition
  const error = validationResult(req);

  if (!error.isEmpty()) {
    const err = new Error("Input data nilaiSpv tidak sesuai");
    err.errorStatus = 400;
    err.data = error.array();
    throw err;
  }

  const hasilKerja = req.body.hasilKerja;
  const keterampilan = req.body.keterampilan;
  const tanggungJawab = req.body.tanggungJawab;
  const kerjasama = req.body.kerjasama;
  const disiplin = req.body.disiplin;
  const kerajinan = req.body.kerajinan;
  const ketelitian = req.body.ketelitian;
  const kejujuran = req.body.kejujuran;
  const loyalitas = req.body.loyalitas;
  const inisiatif = req.body.inisiatif;
  const question1 = req.body.question1;
  const question2 = req.body.question2;
  const question3 = req.body.question3;
  const question4 = req.body.question4;
  const question5 = req.body.question5;
  const totalNilai = hasilKerja+keterampilan;

  const PostNilaiSpv = new nilaiSpvSchema({
    hasilKerja: hasilKerja,
    keterampilan: keterampilan,
    tanggungJawab: tanggungJawab,
    kerjasama: kerjasama,
    disiplin: disiplin,
    kerajinan: kerajinan,
    ketelitian: ketelitian,
    kejujuran: kejujuran,
    loyalitas: loyalitas,
    inisiatif: inisiatif,
    question1: question1,
    question2: question2,
    question3: question3,
    question4: question4,
    question5: question5,
    totalNilai: totalNilai,
  });

  PostNilaiSpv.save()
    .then((result) => {
      res.status(201).json({
        message: "Berhasil Tambah NilaiSpv",
        data: result,
      });
    })
    .catch((err) => {
      console.log("error boss :", err);
    });
};

exports.getAllNilaiSpv = (req, res, next) => {

  nilaiSpvSchema
    .find()
    .then((result) => {
      res.status(200).json({
        message: "Berhasil Menampilkan data NilaiSpv",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getNilaiSpvById = (req, res, next) => {
  const nilaiSpvId = req.params.nilaiSpvId;
  nilaiSpvSchema
    .findById(nilaiSpvId)
    .then((result) => {
      if (!result) {
        const error = new Error("nilaiSpv tidak ditemukan");
        error.errorStatus = 404;
        throw error;
      }
      res.status(200).json({
        message: "Berhasil Menampilkan data nilaiSpv melalui ID",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.updateNilaiSpv = (req, res, next) => {
  // handle dynamic error validation with condition
  const error = validationResult(req);

  if (!error.isEmpty()) {
    const err = new Error("Update data nilaiSpv tidak sesuai");
    err.errorStatus = 400;
    err.data = error.array();
    throw err;
  }

  const hasilKerja = req.body.hasilKerja;
  const keterampilan = req.body.keterampilan;
  const tanggungJawab = req.body.tanggungJawab;
  const kerjasama = req.body.kerjasama;
  const disiplin = req.body.disiplin;
  const kerajinan = req.body.kerajinan;
  const ketelitian = req.body.ketelitian;
  const kejujuran = req.body.kejujuran;
  const loyalitas = req.body.loyalitas;
  const inisiatif = req.body.inisiatif;
  const question1 = req.body.question1;
  const question2 = req.body.question2;
  const question3 = req.body.question3;
  const question4 = req.body.question4;
  const question5 = req.body.question5;
  const totalNilai = req.body.totalNilai;
  // update from nilaiSpvId
  const nilaiSpvId = req.params.nilaiSpvId;

  nilaiSpvSchema
    .findById(nilaiSpvId)
    .then((nilaiSpv) => {
      if (!nilaiSpv) {
        const err = new Error("nilaiSpv tidak ditemukan");
        err.errorStatus = 404;
        throw err;
      }

      nilaiSpv.hasilKerja = hasilKerja;
      nilaiSpv.keterampilan = keterampilan;
      nilaiSpv.tanggungJawab = tanggungJawab;
      nilaiSpv.kerjasama = kerjasama;
      nilaiSpv.disiplin = disiplin;
      nilaiSpv.kerajinan = kerajinan;
      nilaiSpv.ketelitian = ketelitian;
      nilaiSpv.kejujuran = kejujuran;
      nilaiSpv.loyalitas = loyalitas;
      nilaiSpv.inisiatif = inisiatif;
      nilaiSpv.question1 = question1;
      nilaiSpv.question2 = question2;
      nilaiSpv.question3 = question3;
      nilaiSpv.question4 = question4;
      nilaiSpv.question5 = question5;
      nilaiSpv.totalNilai = totalNilai;

      return nilaiSpv.save();
    })
    .then((result) => {
      res.status(200).json({
        message: "Update data nilaiSpv sukses !!!",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteNilaiSpv = (req, res, next) => {
  const nilaiSpvId = req.params.nilaiSpvId;
  nilaiSpvSchema
    .findById(nilaiSpvId)
    .then((nilaiSpv) => {
      if (!nilaiSpv) {
        const error = new Error("nilaiSpv tidak ditemukan");
        error.errorStatus = 404;
        throw error;
      }
      return nilaiSpvSchema.findByIdAndRemove(nilaiSpvId);
    })
    .then((result) => {
      res.status(200).json({
        message: "Hapus data nilaiSpv berhasil",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};
