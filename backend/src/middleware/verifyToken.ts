import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Extract token from header
  if (!token) {
    res.status(401).json({ message: "Access Denied. No token provided." });
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string); // Verify token
      req.user = decoded; // Attach decoded user data to request
      next();
    } catch (error) {
      res.status(403).json({ message: "Invalid or expired token." });
    }
  }
};
