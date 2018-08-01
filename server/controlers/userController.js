const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = (req, res, next) => {
	if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
}

exports.sing_in = (req, res) => {
	console.log('sing-->>', req.body)
	User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;
    if (!user) {
      res.status(401).json({ message: 'Authentication failed. User not found.' });
    } else if (user) {
      if (!user.comparePassword(req.body.password)) {
        res.status(401).json({ message: 'Authentication failed. Wrong password.' });
      } else {
        return res.json({token: jwt.sign({ email: user.email, name: user.name, _id: user._id}, 'RESTFULAPIs')});
      }
    }
  });

}

exports.register = function(req, res) {
	var newUser = new User(req.body);
  newUser.save(function(err, user) {
    if (err) {
      req.flash('info', 'messss');
      return res.status(400).json({ error: 'err' });
    } else {
			user.password = undefined;
      return res.json(user);
		}
  });
};
