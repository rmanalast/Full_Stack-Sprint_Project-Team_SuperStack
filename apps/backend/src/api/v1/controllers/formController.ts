import { Request, Response, NextFunction } from "express";
import * as formService from "../services/formServices";
import { successResponse } from "../models/responseModel";

// CREATE a new form record
export const createForm = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newForm = await formService.createForm(req.body);
    res.status(201).json(successResponse(newForm, "New Form created successfully"));
  } catch (error) {
    next(error);
  }
};

// GET all forms
export const getAllForms = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const forms = await formService.getAllForms();
    res.status(200).json(successResponse(forms, "Forms fetched successfully"));
  } catch (error) {
    next(error);
  }
};

// GET one form by ID
export const getFormById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const form = await formService.getFormById(Number.parseInt(req.params.id));
    res.status(200).json(successResponse(form, "Form fetched successfully"));
  } catch (error) {
    next(error);
  }
};

// UPDATE a form by ID.
export const updateForm = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const updatedForm = await formService.updateForm(
      Number.parseInt(req.params.id),
      req.body
    );
    res.status(200).json(successResponse(updatedForm, "Form updated successfully"));
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
    await formService.deleteForm(Number.parseInt(req.params.id));
    res.status(200).json(successResponse(null, "Form deleted successfully"));
  } catch (error) {
    next(error);
  }
};
