import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  ShoudBeAdmin,
  ShoudBeLogedIn,
} from "../controllers/test.controller.js";
const router = express.Router();

router.get("/should-be-logged-in", verifyToken, ShoudBeLogedIn);

router.get("/should-be-admin", ShoudBeAdmin);

export default router;
