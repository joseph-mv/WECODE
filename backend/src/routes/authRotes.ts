import express, { Request, Response } from 'express';
import passport from 'passport';

const router = express.Router();

// Initiate Google Authentication
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google Callback Route
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req: Request, res: Response) => {
    res.send('<h1>Authentication Successful!</h1><a href="/logout">Logout</a>');
  }
);

export default router;
