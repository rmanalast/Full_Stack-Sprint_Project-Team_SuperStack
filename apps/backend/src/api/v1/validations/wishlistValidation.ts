import { Request, Response, NextFunction } from "express";

export function validateWishlist(req: Request, res: Response, next: NextFunction) {
  const { email, items } = req.body;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ error: "Email is required and must be a string." });
  }

  if (!Array.isArray(items)) {
    return res.status(400).json({ error: "Items must be an array of strings." });
  }

  next();
}