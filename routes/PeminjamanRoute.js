import express from "express";
import {
  listPeminjaman,
  getPeminjamanbyId,
  tambahPeminjaman,
  updatePeminjaman,
  deletePeminjaman,
} from "../controllers/Peminjaman.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/peminjaman", verifyUser, listPeminjaman);
router.get("/peminjaman/:id", verifyUser, getPeminjamanbyId);
router.post("/peminjaman", verifyUser, tambahPeminjaman);
router.patch("/updatepeminjaman/:id", verifyUser, updatePeminjaman);
router.delete("/deletepeminjaman/:id", verifyUser, deletePeminjaman);

export default router;
