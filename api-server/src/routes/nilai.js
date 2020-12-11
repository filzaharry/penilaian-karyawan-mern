const express = require("express");
const router = express.Router();
const nilaiController = require("../controllers/nilai");

router.post("/nilai",nilaiController.createNilai);
router.get("/nilai", nilaiController.getAllNilai);
router.get("/nilai/:nilaiId", nilaiController.getNilaiById);
router.put("/nilai/:nilaiId", nilaiController.updateNilai);
router.delete("/nilai/:nilaiId",nilaiController.deleteNilai);

module.exports = router;