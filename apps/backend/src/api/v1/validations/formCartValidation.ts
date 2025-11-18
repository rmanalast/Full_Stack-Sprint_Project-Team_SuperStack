import Joi, { ObjectSchema } from "joi";

// Schema for getting a form by ID
export const getFormByIdSchema: ObjectSchema = Joi.object({
    id: Joi.string().required().messages({
        "any.required": "Form Id is required",
        "string.empty": "Form Id cannot be empty"
    }),
    userId: Joi.string().optional()
});

// Schema for creating/updatiing a form
export const postFormSchema: ObjectSchema = Joi.object({
    name:Joi.string().required().min(3).messages({
        "any.required": "Name is required",
        "string.empty": "Name cannot be empty",
        "string.min": "Name must be at least 3 characters"
    }),
    email: Joi.string().email().required().messages({
        "any.required": "Email is required",
        "string.empty": "Email cannot be empty",
        "string.email": "Email must be valid"
    }),
    card: Joi.string().required().min(10).messages({
        "any.required": "Card number is required",
        "string.empty": "Card number cannot be empty",
        "string.min": "Card number must be at least 10 digits"
    }),
    expiry: Joi.string().required().min(4).messages({
        "any.required": "Expiry date is required",
        "string.empty": "Expiry date cannot be empty",
        "string.min": "Expiry must be at least 4 characters"
    }),
    cve: Joi.string().required().min(3).messages({
        "any.required": "CVE is required",
        "string.empty": "CVE cannot be empty",
        "string.min": "CVE must be at least 3 digits"
    }),
    id: Joi.string().optional()

});

// Schema for deleting a form by ID
export const deleteFormSchema: ObjectSchema = Joi.object({
    id: Joi.string().required().messages({
        "any.required": "Form Id is required",
        "string.empty": "Form Id cannot be empty"
    }),
});