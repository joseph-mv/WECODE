import { NextFunction, Request, Response } from "express";

export const googleAuthenticated = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
console.log(req.user)
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/');
  };