import { Form } from "@prisma/client";
import prisma from "../../../../prisma/client";

// FETCH all forms
export const getAllForms = async (): Promise<Form[]> => {
  return prisma.form.findMany();
};

// GET one form by ID
export const getFormById = async (id: number): Promise<Form | null> => {
  return prisma.form.findUnique({
    where: { id },
  });
};

// CREATE a new form
export const createForm = async (
  formData: {
    name: string;
    email: string;
    card: string;
    expiry: string;
    cve: string;
  },
  userId: string
): Promise<Form> => {
  const newForm: Form = await prisma.form.create({
    data: {
    ...formData,
    userId,
  },
  });

  return newForm;
};

// UPDATE a form by ID
export const updateForm = async (
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
    where: { id },
    data: formData,
  });

  return updatedForm;
};

// DELETE a form by ID
export const deleteForm = async (id: number): Promise<void> => {
  await prisma.form.delete({
    where: { id },
  });
};
