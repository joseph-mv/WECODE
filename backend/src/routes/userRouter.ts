import express, { Request, Response } from 'express';
import { googleAuthenticated } from '../middleware/isAuthenticated';

const router = express.Router();

router.get('/dashboard', googleAuthenticated, (req: Request, res: Response) => {
  console.log(req.user)
  res.send(req.user);
});

router.get('/logout', (req, res) => {
  req.logout(() => {
    res.json()
  });
});

export default router