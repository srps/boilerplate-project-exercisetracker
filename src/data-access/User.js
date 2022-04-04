import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
});

export const UserDb = mongoose.model('User', UserSchema);