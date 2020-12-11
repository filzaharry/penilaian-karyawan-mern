const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const nilaiController = require("../controllers/nilai");

router.post("/nilaihrd",nilaiController.createNilaiHrd);
router.get("/nilaihrd", nilaiController.getAllNilaiHrd);
router.get("/nilaihrd/:nilaihrdId", nilaiController.getNilaiHrdById);
router.put("/nilaihrd/:nilaihrdId", nilaiController.updateNilaiHrd);
router.delete("/nilaihrd/:nilaihrdId",nilaiController.deleteNilaiHrd);

module.exports = router;