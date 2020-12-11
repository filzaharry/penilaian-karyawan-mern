// import express
const express = require("express");
// import bodyParser
const bodyParser = require("body-parser");
// import method express
const app = express();
// impor mongoose
const mongoose = require("mongoose");
// import multer (upload image handler)
const multer = require("multer");
// import path for __dirname
const path = require("path");
// import cors
const cors = require('cors');

const userRoutes = require("./src/routes/user");
const karyawanRoutes = require("./src/routes/karyawan");
const departemenRoutes = require("./src/routes/departemen");
const jabatanRoutes = require("./src/routes/jabatan");
const nilaiSpvRoutes = require("./src/routes/nilaispv");
// const nilaiHrdRoutes = require("./src/routes/nilaihrd");
const nilaiTotalRoutes = require("./src/routes/nilai");
// multer
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// middleware body-parser type JSON
app.use(bodyParser.json());
// middleware allow access folder images handler
app.use("/images", express.static(path.join(__dirname, "images")));
// middleware multer
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);

// handle CORS Origin
app.use(cors())
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   // res.header("Content-Type", "application/json");
//   next();
// });





// read routes as endpoints
app.use("/v1", userRoutes);

app.use("/v1/hrd", karyawanRoutes);
app.use("/v1/hrd", departemenRoutes);
app.use("/v1/hrd", jabatanRoutes);
// app.use("/v1/hrd", nilaiHrdRoutes);
app.use("/v1/hrd", nilaiTotalRoutes);

app.use("/v1/spv", nilaiSpvRoutes);

app.use((error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(
    "mongodb+srv://filzaharry:bismillah@cluster0.xsjca.mongodb.net/HRD-Aplus-DB?retryWrites=true&w=majority",
    // biar ga kena DeprecationWarning
    {   useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false, }
  )
  .then(() => {
    // port mongoose running localhost:4000
    app.listen(4000, () => console.log("Koneksi ke mongoose sukses gan!!!"));
  })
  .catch(() => console.log("error woyy:", error));
