const passport = require('passport');

exports.googleAuth = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

exports.googleAuthCallback = (req, res, next) => {
  passport.authenticate('google', {
    failureRedirect: '/',
    session: true,
  })(req, res, () => {
    // Only called on successful auth
    res.redirect('http://localhost:3000/dashboard'); // Or wherever you want to redirect
  });
};


exports.logout = (req, res) => {
  req.logout(function(err) {
    if (err) { return res.status(500).send("Error logging out"); }
    res.redirect('/');
  });
};

