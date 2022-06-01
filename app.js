const express = require('express');
const passport = require('passport');
const passportHttp = require('passport-http');

passport.use(new passportHttp.BasicStrategy(
  function(username, password, done) {
    if (username === 'user' && password == 'pass') {
      return done(null, true);
    } else {
      return done(null, false);
    }
  }
));

const app = express();
app.set("view engine", "ejs");
app.get('/', 
  passport.authenticate('basic', { session: false, }),
   (req, res) => {
  res.render("index", {content:"Success"});
});

app.listen(3000, (err, res) => {
  console.log('server is launched');
});