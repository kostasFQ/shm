// const mongoose = require('mongoose');
// const User = mongoose.model('User');

exports.getUsers = (req, res) => {
  res.send('hello');
  /* User.find({}, (err, data) => {
      if(err) return console.log(err);
      res.json(data);
  }) */
};

exports.addNewUser = (req) => {
  console.log('add--->>>', req.body);
  /* if (req.body.email &&
      req.body.login &&
      req.body.password) {

      let userData = {
          email: req.body.email,
          login: req.body.login,
          password: req.body.password
      };

      User.create(userData, function (error, user) {
          if (error) {
              return next(error);
          } else {
              req.session.userId = user._id;
              return res.redirect('http://localhost:8080/reg');
          }
      });

}

/*if (req.body.enterLogin && req.body.enterPassword) {
      User.authenticate(req.body.enterLogin, req.body.enterPassword, function (error, user) {
          if (error || !user) {
              let err = new Error('Wrong email or password.');
              err.status = 401;
              return next(err);
          } else {
              console.log('entered -->>> ', req.body);
              req.session.userId = user._id;
              console.log('_id-->>> ', user._id);
              return res.redirect('/shops');
          }
      });
}

else {
      let err = new Error('All fields required.');
      err.status = 400;
      console.log('null');
      return next(err);
} */
};
