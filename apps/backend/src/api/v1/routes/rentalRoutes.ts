import express, { Router } from "express"

import * as CONTROLLER from "../controllers/rentalControllers";

const router: Router = express.Router();

router.get("/rentals", CONTROLLER.getAllRentals);

router.put("/rentals", CONTROLLER.updateStatus);

export default router;