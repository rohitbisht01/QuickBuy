const express = require("express");
const {
  authUser,
  registerUser,
  logoutUser,
  getUsers,
  getUserProfile,
  updateUserProfile,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { protect, admin } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", registerUser);
router.post("/", protect, admin, getUsers);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);
router.get("/:id", protect, admin, getUserById);
router.put("/:id", protect, admin, updateUser);
router.delete("/:id", protect, admin, deleteUser);

module.exports = router;
