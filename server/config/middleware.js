const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require( 'passport' );
const cookieParser = require('cookie-parser');

module.exports = function (app, express) {
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // serve static asset at '/'
  app.use(express.static(__dirname + '/../../client'));
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());
};