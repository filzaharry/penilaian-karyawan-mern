const mongoose = require("mongoose");
// schema untuk menentukan sebuah model
const { ObjectId } = mongoose.Schema;

const departemenSchema = new mongoose.Schema({
    image: {
      type: String,
      // required: true,
    },
    nama_dep: {
      type: String,
      // required: true,
    },
    supervisor: {
      type: Object,
      // required: true,
    },
    kategori: {
      type: String,
      // required: true,
    },
    karyawanId: [{
        type: ObjectId,
        ref: "Karyawan",
    }]
});

module.exports = mongoose.model("Departemen", departemenSchema);
