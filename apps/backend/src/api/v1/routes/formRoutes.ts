import express,{Router} from "express";
import {validateRequest} from "../middleware/validate";
import {
    postFormSchema,
    getFormByIdSchema,
    deleteFormSchema
} from "../validations/formCartValidation";
import * as formController from "../controllers/formController.ts";
import {findOrCreateUser} from "../middleware/findOrCreateUser";
import {requireAuth} from "@clerk/express";

const router: Router = express.Router();

// Routes for Contact Form (user data persistence).

// GET all form for user
router.get(
    "/forms",
    findOrCreateUser,
    formController.getAllForms
);

// GET one form by ID
router.get(
    "/forms/:id",
    findOrCreateUser,
    validateRequest(getFormByIdSchema),
    formController.getFormById
);

//POST new form
router.post(
    "/forms",
    requireAuth(),
    validateRequest(postFormSchema),
    formController.createForm  
);

// PUT update form by ID 
router.put(
    "/forms/:id",
    requireAuth(),
    validateRequest(postFormSchema),
    formController.updateForm
);

//DELETE form by ID
router.delete(
    "/forms/:id",
    requireAuth(),
    validateRequest(deleteFormSchema),
    formController.deleteForm
);

export default router;
