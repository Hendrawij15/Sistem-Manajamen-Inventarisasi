import express from "express";
import {
  listBarang,
  getBarangbyId,
  tambahBarang,
  updateBarang,
  deleteBarang,
} from "../controllers/Barang.js";
import { verifyUser, admin } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/barang", verifyUser, admin, listBarang);
router.get("/barang/:id", verifyUser, admin, getBarangbyId);
router.post("/tambahbarang", verifyUser, admin, tambahBarang);
router.patch("/updatebarang/:id", verifyUser, admin, updateBarang);
router.delete("/deletebarang/:id", verifyUser, admin, deleteBarang);

export default router;
