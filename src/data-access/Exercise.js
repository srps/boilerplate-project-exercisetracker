import mongoose from 'mongoose';
const ExerciseSchema = new mongoose.Schema({
    userid: { type: mongoose.ObjectId, required: true },
    description: { type: String, required: true },
    duration: Number,
    date: Date,
});

export const ExerciseDb = mongoose.model('Exercise', ExerciseSchema);