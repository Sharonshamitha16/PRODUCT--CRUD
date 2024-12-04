const express = require("express");
const router = express.Router()
const { create, update, read, deleted} = require('../controllers/controller')
router.post("/", create)
router.get("/", read)
router.put("/:id", update)
router.delete("/:id", deleted)

module.exports = router