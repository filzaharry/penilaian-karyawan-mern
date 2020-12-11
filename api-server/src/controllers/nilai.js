const { validationResult } = require("express-validator");
const nilaiSchema = require("../models/nilai");

exports.createNilai = (req, res, next) => {
  // handle dynamic error validation with condition
  const error = validationResult(req);

  if (!error.isEmpty()) {
    const err = new Error("Input nilai tidak sesuai");
    err.errorStatus = 400;
    err.data = error.array();
    throw err;
  }

  const periode = req.body.periode;
  const tglMulai = req.body.tglMulai;
  const tglSelesai = req.body.tglSelesai;
  const nilaiSpv = req.body.nilaiSpv;
  const nilaiHrd = req.body.nilaiHrd;
  const totalNilai = req.body.totalNilai;
  const status = req.body.status;

  const PostNilai = new nilaiSchema({
    periode,
    tglMulai,
    tglSelesai,
    nilaiSpv,
    nilaiHrd,
    totalNilai,
    status,
  });

  PostNilai.save()
    .then((result) => {
      res.status(201).json({
        message: "Berhasil Tambah Nilai",
        data: result,
      });
    })
    .catch((err) => {
      console.log("error di Nilai boss :", err);
    });
};

exports.getAllNilai = (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = req.query.perPage || 20;
  let totalItems;

  nilaiSchema
    .find()
    .countDocuments()
    .then((count) => {
      totalItems = count;
      return nilaiSchema
        .find()
        .skip((parseInt(currentPage) - 1) * parseInt(perPage))
        .limit(parseInt(perPage));
    })
    .then((result) => {
      res.status(200).json({
        message: "Berhasil Menampilkan data nilai",
        data: result,
        total_data: totalItems,
        per_page: parseInt(perPage),
        current_page: currentPage,
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getNilaiById = (req, res, next) => {
  const nilaiId = req.params.nilaiId;
  nilaiSchema
    .findById(nilaiId)
    .then((result) => {
      if (!result) {
        const error = new Error("nilai tidak ditemukan");
        error.errorStatus = 404;
        throw error;
      }
      res.status(200).json({
        message: "Berhasil Menampilkan data nilai melalui ID",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.updateNilai = (req, res, next) => {
  // handle dynamic error validation with condition
  const error = validationResult(req);

  if (!error.isEmpty()) {
    const err = new Error("Update data Nilai tidak sesuai");
    err.errorStatus = 400;
    err.data = error.array();
    throw err;
  }

  const periode = req.body.periode;
  const tglMulai = req.body.tglMulai;
  const tglSelesai = req.body.tglSelesai;
  const nilaiSpv = req.body.nilaiSpv;
  const nilaiHrd = req.body.nilaiHrd;
  const totalNilai = req.body.totalNilai;
  const status = req.body.status;

  nilaiSchema
    .findById(nilaiId)
    .then((nilai) => {
      if (!nilai) {
        const err = new Error("nilai tidak ditemukan");
        err.errorStatus = 404;
        throw err;
      }

      nilai.periode = periode;
      nilai.tglMulai = tglMulai;
      nilai.tglSelesai = tglSelesai;
      nilai.nilaiSpv = nilaiSpv;
      nilai.nilaiHrd = nilaiHrd;
      nilai.totalNilai = totalNilai;
      nilai.status = status;

      return nilai.save();
    })
    .then((result) => {
      res.status(200).json({
        message: "Update data nilai sukses !!!",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteNilai = (req, res, next) => {
  const nilaiId = req.params.nilaiId;
  nilaiSchema
    .findById(nilaiId)
    .then((nilai) => {
      if (!nilai) {
        const error = new Error("nilai tidak ditemukan");
        error.errorStatus = 404;
        throw error;
      }
      removeImage(nilai.image);
      return nilaiSchema.findByIdAndRemove(nilaiId);
    })
    .then((result) => {
      res.status(200).json({
        message: "Hapus data nilai berhasil",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};
