import makeUserDb from './user-db.js';
import makeExerciseDb from './exercise-db.js';
import { UserDb } from './User.js';
import { ExerciseDb } from './Exercise.js';

const userDb = makeUserDb({ UserDb });
const exerciseDb = makeExerciseDb({ ExerciseDb });

const dbAccess = Object.freeze({
    userDb,
    exerciseDb
})

export default dbAccess;
export { userDb, exerciseDb }