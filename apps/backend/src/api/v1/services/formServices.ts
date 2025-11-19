import { Form } from "@prisma/client";
import prisma from "../../../../prisma/client";

// FETCH all forms for a user
export const getAllForms = async (userId: string): Promise<Form[]> => {
    return prisma.form.findMany({
        where: { userId }
    });
};

// GET one form by ID
export const getFormById = async (userId: string, id: number): Promise<Form | null> => {
    const form = await prisma.form.findUnique({
        where: { id },
    });

    // Ensure the form belongs to the user
    if (!form || form.userId !== userId) {
        return null;
    }
    return form;
};

// CREATE a new form
export const createForm = async (
    userId: string,
    formData: {
        name: string;
        email: string;
        card: string;
        expiry: string;
        cve: string;
    }
): Promise<Form> => {
    const newForm: Form = await prisma.form.create({
        data: {
            ...formData,
            userId
        }
    });

    return newForm;
};

// UPDATE a form by ID
export const updateForm = async (
    userId: string,
    id: number,
    formData: {
        name?: string;
        email?: string;
        card?: string;
        expiry?: string;
        cve?: string;
    }
): Promise<Form> => {
    const updatedForm = await prisma.form.update({
        where: {
            id
        },
        data: {
            ...formData,
            userId
        }
    });

    return updatedForm;
};

// DELETE a form by ID
export const deleteForm = async (userId: string, id: number): Promise<void> => {
    // ensure the form belongs to the user before deleting
    const form = await prisma.form.findUnique({ where: { id } });
    if (!form || form.userId !== userId) {
        throw new Error("Form not found or unauthorized");
    }

    await prisma.form.delete({
        where: { id }
    });
};
