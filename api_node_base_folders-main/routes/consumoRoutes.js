const express = require("express");
const router = express.Router();
const consumoController = require("../controller/consumoController");

router.get("/", consumoController.getAllConsumos);
router.get("/:id", consumoController.getConsumo);
router.post("/add", consumoController.addConsumo);
router.post("/remove/:id", consumoController.removeConsumo);
router.put("/update/:id", consumoController.updateConsumo);


module.exports = router;