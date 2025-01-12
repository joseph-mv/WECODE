
import express, { Application,Request, Response,NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import { errorHandler } from './middleware/errorHandler';
import logger from './utils/logger';
// import router from './routes/userRoutes';
import helmet from 'helmet';
import session from "express-session";
import passport from './config/passportConfig'
import { googleAuthenticated } from './middleware/isAuthenticated';
import router from './routes/authRotes';



// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app: Application = express();


// Middleware for session handling
app.use(
  session({
    secret: "WeCode", // Use a strong secret for production
    resave: false,
    saveUninitialized: true,
  })
);



// Middleware
app.use(express.json());
app.use(cors());
// Use Helmet for security
app.use(helmet());
app.use(logger);

// Initiate Google Authentication
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req: Request, res: Response) => {
    // Redirect user after successful login
    res.redirect(process.env.CLIENT_URL+'/dashboard');
  }
);


// Protected Route
app.get('/dashboard', googleAuthenticated, (req: Request, res: Response) => {
  res.send('<h1>Dashboard</h1><p>Welcome to your dashboard!</p>');
});

// Error Handler Middleware
app.use(errorHandler);
app.use(function (err:Error, req:Request, res:Response, next:NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.render("error");
  });

export default app;
