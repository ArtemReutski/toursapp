const JwtStrategy = require('passport-jwt').Strategy;
const ExctractJwt = require('passport-jwt').ExctractJwt;
const User = require('../models/user');
const config = require('../config/database');

module.exports = function (passport) {
    let opts = {};
    opts.jwtFromRequest = ExctractJwt.fromAuthHeader();
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.getUserById(jwt_payload._id, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);                
            }
        });
    }));
}