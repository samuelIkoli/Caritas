const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const WinnerSchema = new Schema({
    user_id: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }

});
// UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Winner', WinnerSchema);