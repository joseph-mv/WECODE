import { NextFunction, Request, Response } from "express";

export const googleAuthenticated = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/');
  };