import { Response } from "express";
import { Request } from "express";

export const verifyUsername = async (
  req: Request,
  res: Response,
  next: () => void
) => {
  let { username } = req.body;
  if (!username) {
    return res.status(400).json({ message: "The username cannot be empty" });
  }

  const usernameRemoveSpaces = username.replace(/\s/g, "");

  if (usernameRemoveSpaces.length < 3) {
    return res
      .status(400)
      .json({ message: "The username field must contain 3 characters" });
  }

  next();
};
