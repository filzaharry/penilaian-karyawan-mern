const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const nilaiController = require("../controllers/nilaiSpv");

router.post("/nilaispv",nilaiController.createNilaiSpv);
router.get("/nilaispv", nilaiController.getAllNilaiSpv);
router.get("/nilaispv/:nilaiSpvId", nilaiController.getNilaiSpvById);
router.put("/nilaispv/:nilaiSpvId", nilaiController.updateNilaiSpv);
router.delete("/nilaispv/:nilaiSpvId",nilaiController.deleteNilaiSpv);

module.exports = router;