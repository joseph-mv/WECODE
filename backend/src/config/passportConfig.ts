import passport from 'passport';
import { Profile, Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
import userModel from '../models/userModel';

dotenv.config(); // Load environment variables

// Environment Variables
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;
const GOOGLE_CALLBACK_URL=process.env.GOOGLE_CALLBACK_URL
// Ensure required environment variables are set
if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
  throw new Error('Missing Google OAuth environment variables');
}

// Configure Passport Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: (error: any, user?: any) => void
    ) => {
      try {
        
        // Check if the user exists in the database
        const existingUser = await userModel.findOne({ googleId: profile.id });
        if (existingUser) {
          // If the user exists, return it
          return done(null, existingUser);
        }

        // If the user does not exist, create a new one
        const newUser = new userModel({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails?.[0].value, // Use the first email from the profile
          avatar: profile.photos?.[0].value, // Use the first photo from the profile
        });
        const savedUser = await newUser.save();

        return done(null, savedUser);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// Serialize user to session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from session
passport.deserializeUser((user: Express.User, done) => {
  done(null, user);
});

export default passport;
