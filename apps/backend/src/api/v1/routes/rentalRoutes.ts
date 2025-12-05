import express, { Router } from "express"

import * as CONTROLLER from "../controllers/rentalControllers";
import { requireAuth } from "@clerk/express";
import { findOrCreateUser } from "../middleware/findOrCreateUser";
import * as USERCONTROLLER from "../controllers/userController"

const router: Router = express.Router();

router.get("/rentals", CONTROLLER.getAllRentals);

router.put("/rentals", requireAuth(), findOrCreateUser, CONTROLLER.updateStatus);

router.get("/rentals/history", requireAuth(), findOrCreateUser, USERCONTROLLER.getPreviousRentals)

export default router;