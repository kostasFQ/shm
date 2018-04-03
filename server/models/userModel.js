const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    login : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},

});

UserSchema.statics.authenticate = function (login, password, callback) {
    User.findOne({ login: login })
        .exec(function (err, user) {
            if (err) { return callback(err) }
            else if (!user) {
                let err = new Error('User not found.');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, user.password, function (err, result) {
                if (result === true) { return callback(null, user); }
                else { return callback(); }
            })
        });
};


UserSchema.pre('save', function (next) {
    let user = this;
    bcrypt.hash(user.password, 10, function (err, hash){
        if (err) { return next(err); }
        user.password = hash;
        next();
    })
});

const User = mongoose.model('User', UserSchema);

