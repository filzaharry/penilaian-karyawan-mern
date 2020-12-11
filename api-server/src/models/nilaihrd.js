const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nilaiHrdSchema = new Schema(
  {
    Alpa: {
      type: Number,
      //   required: true,
    },
    Izin: {
      type: Number,
      // required: true
    },
    Sakit: {
      type: Number,
      // required: true
    },
    Keterlambatan: {
      type: Number,
      // required: true
    },
    DatangSiang: {
      type: Number,
      // required: true
    },
    PulangCepat: {
      type: Number,
      // required: true
    },
    Hasil: {
      type: Number,
      // required: true
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("NilaiHrd", nilaiHrdSchema);
