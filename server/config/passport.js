const passport = require("passport");
const User = require("../model/user.model");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser((user, done) => {
 done(null,user.id)
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await User.findOne({ googleID: profile.id });
        
        if (user) {
          return done(null, user);
        }

        if (!profile.emails[0].verified) {
          return done("email not verified", null);
        }

        const newuser = new User({
          googleID: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
        });

        const saveUser = newuser.save();

        return saveUser.then((userinfo)=>done(null,userinfo))
      } catch (err) {
        done(err, null);
      }
    }
  )
);
