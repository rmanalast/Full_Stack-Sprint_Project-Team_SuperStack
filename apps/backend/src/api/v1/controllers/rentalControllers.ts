import { successResponse } from "../models/responseModel";
import { Request, Response, NextFunction } from "express";

import * as Services from "../services/rentalServices";
import { userRented } from "../services/userService";

/**
 * 
 * Controllers for Rentals 
 * 
 * -> Get All Terms 
 * 
 * 
 * -> Update Rental (This will be for if the item is )
 */


export const getAllRentals = async(
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        const rentals = await Services.fetchAllRentals()
        res.status(200).json(
            successResponse(rentals, "Rentals Retrieved")
        );
    } catch (error){
        next(error);
    }
};

export const updateStatus = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        if (!req.userId) throw new Error("User NOT FOUND");
        console.log("recieved")
        const rentals: number[] = req.body.rentals;

        await Promise.all(rentals.map(rental => 
            Services.updatedRental(Number(rental), true)
        ));

        await userRented(req.userId,rentals)

        res.status(200).json(
            successResponse("Rentals Updated")
        )
    }
    catch(error)
    {
        next(error)
    }
}