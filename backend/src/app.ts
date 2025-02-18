
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
import adminRouter from './routes/adminRouter'
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
    saveUninitialized: false,
    cookie: { secure: false,// Set to true if using HTTPS
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
     },
    
  })
);
app.use(passport.initialize());
app.use(passport.session());


// Middleware
app.use(express.json());
app.use(cors());

// app.use(
//   cors({
//     origin: process.env.CLIENT_URL, // Your React frontend URL
//     credentials: true, // Allow cookies to be sent
//   })
// );

const allowedOrigins = [
  process.env.CLIENT_URL,
  process.env.ADMIN_URL
];

app.use(cors({
  origin: function(origin, callback) {
    console.log('Request Origin:', origin); // Log the origin
    if (typeof origin === 'undefined' || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
}));
// Use Helmet for security
app.use(helmet());
app.use(logger);

// Initiate Google Authentication
app.get('/auth/google', passport.authenticate('google', { scope: [
  'profile',
  'email'
]
 }));

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req: Request, res: Response) => {
    req.session.save((err) => { // ✅ Force saving the session
      if (err) {
        console.error("Session Save Error:", err);
      }
      console.log("Session Saved:", req.session);
      res.redirect(`${process.env.CLIENT_URL}/dashboard`);
    });}
);

app.use('/user',userRouter );
app.use('/admin',adminRouter);

// Error Handler Middleware
app.use(errorHandler);
app.use(function (err:Error, req:Request, res:Response, next:NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.render("error");
  });

export default app;
