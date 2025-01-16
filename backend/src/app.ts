
import express, { Application,Request, Response,NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import { errorHandler } from './middleware/errorHandler';
import logger from './utils/logger';
import helmet from 'helmet';
import session from "express-session";
import passport from './config/passportConfig'
import userRouter from './routes/userRouter';

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
    cookie: { secure: false },// Set to true if using HTTPS
    
  })
);
app.use(passport.initialize());
app.use(passport.session());


// Middleware
app.use(express.json());
app.use(cors());

app.use(
  cors({
    origin: process.env.CLIENT_URL, // Your React frontend URL
    credentials: true, // Allow cookies to be sent
  })
);
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
    res.redirect(process.env.CLIENT_URL+`/dashboard?user=${JSON.stringify(req.user)}`);
  }
);

app.use('/user',userRouter );

// Error Handler Middleware
app.use(errorHandler);
app.use(function (err:Error, req:Request, res:Response, next:NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.render("error");
  });

export default app;
