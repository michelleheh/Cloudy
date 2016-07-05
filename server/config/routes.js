const exampleController = require('../db/example/exampleController.js');
const passport = require('./passport.config.js');

module.exports = function (app, express) {
  // example get and post request
  app.get('/', (req, res) => {
    console.log(req.session.googleAuthToken)
    res.send('Hello World!')
  });
  app.get('/api/example', exampleController.findAll);
  app.post('/api/example', exampleController.addOne);

  /*google oAuth2*/
  app.get('/auth/google',   
    passport.authenticate('google', { scope: 
      ['profile', 'https://www.googleapis.com/auth/drive.metadata.readonly'] }
  ));
  app.get( '/auth/google/callback',   
    passport.authenticate( 'google', { 
    successRedirect: '/',
    failureRedirect: '/auth/google/failure'
  }));

};
