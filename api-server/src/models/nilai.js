const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const nilaiSchema = new Schema(
  {
    periode: {
      type: Number,
      // required: true,
    },
    tglMulai: {
      type: Date,
      // required: true
    },
    tglSelesai: {
      type: Date,
      // required: true
    },
    nilaiSpv: {
      type: ObjectId,
      ref: "Hrd",
    },
    nilaiHrd: {
      type: ObjectId,
      ref: "Spv",
    },
    totalNilai: {
      type: Number,
      // required: true
    },
    status: {
      type: String,
      // required: true
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Nilai", nilaiSchema);
