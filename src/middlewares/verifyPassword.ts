import { Response } from "express";
import { Request } from "express";

export const verifyPassword = async (
  req: Request,
  res: Response,
  next: () => void
) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: "The password cannot be empty" });
  }
  const passwordRemoveSpaces = password.replace(/\s/g, "");

  if (passwordRemoveSpaces.length < 8) {
    return res
      .status(400)
      .json({ message: "The password field must contain 8 characters" });
  }

  next();
};
