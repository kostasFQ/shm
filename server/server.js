const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const session = require('express-session');

require('./models/indexModels.js');

const shopsController = require('./controlers/shopsController.js');
const userController = require('./controlers/userController');

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
}));

app.get('/shops', shopsController.getAllShops);
app.post('/shops', shopsController.postNewShop);


app.get('/user', userController.getUsers);
app.post('/user', userController.addNewUser);

app.get('/log', (req, res) => {
    res.send('Welcome!')
} );


app.use(function (req, res, next) {
    res.status(404).send('Page not found!!');
});

app.use(function (err, req, res, next) {
    res.status(500).json(err);
});

const server = app.listen(process.env.PORT || 8080, () => {
    console.log('Server running on port ',process.env.PORT || 8080 )
});


/*
Занусси, [30.03.18 13:46]
const mongoose = require('mongoose');
const passport = require('passport');
const User = mongoose.model('User');

const types = require('../constants/types.js');
const messages = require('../constants/messages.js');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
    const select = {
        phone: 1,
        profile: 1,
        role: 1,
    };
    try {
        const user = await User.findById(id, select).lean();
        return done(null, user);
    } catch (error) {
        return done(error);
    }

});

const Strategy = require('passport-local').Strategy;
passport.use(
    new Strategy(
        { usernameField: 'phone' },
        async function(phone, password, done) {
            try {
                const phoneString = phone ? phone.toLowerCase().trim() : phone;
                const user = await User.findOne({ phone: phoneString });

                if (!user) {
                    return done(null, false, {
                        status: 'ERROR',
                        type: types.UNKNOWN_USER,
                        message: messages[types.UNKNOWN_USER],
                    });
                }

                if (!user.checkPassword(password)) {
                    return done(null, false, {
                        status: 'ERROR',
                        type: types.PASSWORD_ERROR,
                        message: messages[types.PASSWORD_ERROR],
                    });
                }

                return done(null, user);

            } catch (error) {
                return done(error);
            }

        }
    )
);

exports.passport = passport;

Занусси, [30.03.18 13:47]
// index.js
app.use(passport.initialize());
app.use(passport.session());

Занусси, [30.03.18 13:47]
// routes.js
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.post(
    '/login',
    redirectIfLoggedIn,
    wrapAsync(async function(req, res, next) {
        return passport.authenticate('local', { badRequestMessage: 'Укажите данные для входа' }, async function(error, user, status) {
            if (error) throw error;
            if (!user) return res.json(status);
            if (user) {
                return req.logIn(user, function(err) {
                    if (err) return next(err);
                    return next();
                });
            }
        })(req, res, next)
    }),
    wrapAsync(authenticateUserResponse)
);*/