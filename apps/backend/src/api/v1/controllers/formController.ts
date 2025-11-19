import {Request,Response,NextFunction} from "express";
import * as formService from "../services/formService";
import {successResponse } from "../models/responseModel";
import {Form} from "@prisma/client";

// CREATE a new form record
export const createForm = async(
    req:Request,
    res:Response,
    next:NextFunction
): Promise<void> => {
    try {
        if(req.userId){
            const newForm: Form = await formService.createForm(
                req.userId,
                req.body
            );
            res.status(201).json(successResponse(newForm, "New Form created successfully"));
        } else {
            throw new Error("User not found");
        }
    } catch (error) {
        next(error);
    }
};

// GET all forms for a user 
export const getAllForms = async (
    req:Request,
    res:Response,
    next:NextFunction
): Promise<void> =>{
    try {
        if (req.userId){
            const forms: Form[] = await formService.getAllForms(req.userId);
            res.status(200).json(successResponse(forms,"Forms fetched successfully"));           
        }else {
            throw new Error("User not found");
        }
    }catch (error){
        next(error);
    }

};

// GET one form by ID
export const getFormById = async (
    req:Request,
    res:Response,
    next: NextFunction
): Promise<void> => {
    try{
        if(req.userId){
            const form: Form | null = await formService.getFormById(
                req.userId,
                Number.parseInt(req.params.id)
            );
            res.status(200).json(successResponse(form, "Form fetched succesfully"));
        } else {
            throw new Error("User not Found");
        }
        
    } catch (error){
    next(error);
    }
};

// UPDATE a form by ID
export const updateForm = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        if (req.userId) {
            const updatedForm: Form = await formService.updateForm(
                req.userId,
                Number.parseInt(req.params.id),
                req.body
            );
            res.status(200).json(successResponse(updatedForm, "Form updated successfully"));
        } else {
            throw new Error("User not found");
        }
    } catch (error) {
        next(error);
    }
};

// DELETE a form by ID
export const deleteForm = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        if (req.userId) {
            await formService.deleteForm(
                req.userId,
                Number.parseInt(req.params.id)
            );
            res.status(200).json(successResponse(null, "Form deleted successfully"));
        } else {
            throw new Error("User not found");
        }
    } catch (error) {
        next(error);
    }
};