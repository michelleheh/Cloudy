const oAuthConfig = require('./oAuth.config.js');

const passport = require( 'passport' );
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new GoogleStrategy({
    clientID: oAuthConfig.google.clientID,
    clientSecret: oAuthConfig.google.clientSecret,
    callbackURL: oAuthConfig.google.callbackURL,
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
    request.session.googleAuthToken = accessToken;
    console.log('--> accessToken', accessToken);
    return done(null, profile);
  }
));

module.exports = passport;