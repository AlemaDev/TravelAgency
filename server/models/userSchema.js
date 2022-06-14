import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    id: { type: String },
    userName: { type: String, required:  true },
    email: { type: String, required:  true },
    password: { type: String, required:  true },
});

const UserSchema = mongoose.model('User', userSchema);

export default UserSchema;