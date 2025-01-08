const logoutService = require('./logout.services');

function logout(req, res) {
    if (req.session) {
        
        req.session.destroy(err => {
          if (err) {
            console.error('Error destroying session:', err);
            return res.status(500).send('Could not log out.');
          }
          
          res.clearCookie('connect.sid');
       
          res.redirect('/admin/login');
        });
      } else {
    
        res.redirect('/admin/login');
      }
}


module.exports = {
    logout,
};