import { NextFunction, Request, Response } from "express";

import * as SERVICES from "../services/userService"
import { successResponse } from "../models/responseModel";

export const getPreviousRentals = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        if (!req.userId) {
            res.status(401).json({ message: "Unauthorized: userId missing" });
            return;
        }
        const history = await SERVICES.UserRentals(req.userId)
        res.status(200).json(
            successResponse(history, "Rental History Retrieved")
        );
    } catch (error){
        next(error);
    }
};