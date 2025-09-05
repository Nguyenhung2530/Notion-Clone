const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user.controller");
const { verifyToken, isAdmin } = require("../middlewares/auth");

router.get("/", verifyToken, userControllers.getUsers);

router.get("/:id", verifyToken, userControllers.getUser);

router.post("/", verifyToken, userControllers.createUser);

router.delete("/:id", verifyToken, userControllers.deleteUser);

router.put("/:id", verifyToken, isAdmin, userControllers.updateUser);

module.exports = router;
