const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const LocalStrategy = require('passport-local');
const flash = require('connect-flash');

require('./models/indexModels.js');

const shopsController = require('./controlers/shopsController.js');
const userController = require('./controlers/userController');

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({ secret: 'work hard' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err,user){
        err
            ? done(err)
            : done(null,user);
    });
});

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));








app.get('/shops', shopsController.getAllShops);
app.post('/shops', shopsController.postNewShop);

app.get('/user', userController.getUsers);
//app.post('/sign', userController.addNewUser);


app.post('/enter',
    passport.authenticate('local', { successRedirect: '/shops',
        failureRedirect: '/user',
        failureFlash: true })
);

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});





app.use(function (req, res, next) {
    res.status(404).send('Page not found!!');
});

app.use(function (err, req, res, next) {
    res.status(500).json(err);
});

const server = app.listen(process.env.PORT || 8080, () => {
    console.log('Server running on port ',process.env.PORT || 8080 )
});
