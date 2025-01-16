import { NextFunction, Request, Response } from "express";

export const googleAuthenticated = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
console.log(req.user)
    if (req.isAuthenticated()) {
      console.log('googleAuthenticated')
      return next();
    }
    console.log('not googleAuthenticated')
    res.redirect('/');
  };