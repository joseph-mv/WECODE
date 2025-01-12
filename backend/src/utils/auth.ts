import passport from 'passport';
import { Profile } from 'passport-google-oauth20';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
// Environment Variables
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;

// Ensure required environment variables are set
if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET ) {
  throw new Error("Missing environment variables");
}
// Passport Strategy Configuration
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/callback',
    },
    (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: (error: any, user?: any) => void
    ) => {
      // Simulate saving user to the database
      console.log('User profile:', profile);
      return done(null, profile);
    }
  )
);