import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    //The user id is the name
    user_id: { 
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;