var passport = require('passport');
var url = require('url');
var GoogleStrategy = require('passport-google-auth').Strategy;
var config = require('../config');
var users = require('../../app/controllers/users.server.controller');

module.exports = function() {
  console.log(config.google);
  passport.use(new GoogleStrategy({
    clientId: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackURL,
    passReqToCallback: true
  },
  function(req, refreshToken, profile, done) {

    
    var providerData = profile._json;
//    providerData.accessToken = accessToken;
    providerData.refreshToken = refreshToken;

    console.log(profile);

    var providerUserProfile = {
      name: profile.displayName,
//      email: profile.emails[0].value,
//      username: profile.username,
      provider: 'google',
      providerId: profile.id,
      providerData: providerData
    };

    users.saveOAuthUserProfile(req, providerUserProfile, done);
  }));
};
