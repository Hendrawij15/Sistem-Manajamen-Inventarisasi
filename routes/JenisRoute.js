import express from "express";
import {
  listJenis,
  getJenisbyId,
  tambahJenis,
  updateJenis,
  deleteJenis,
} from "../controllers/Jenis.js";
import { admin, verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/jenis", verifyUser, admin, listJenis);
router.get("/jenis/:id", verifyUser, admin, getJenisbyId);
router.post("/tambahjenis", verifyUser, admin, tambahJenis);
router.patch("/jenis/:id", verifyUser, admin, updateJenis);
router.delete("/jenis/:id", verifyUser, admin, deleteJenis);

export default router;
