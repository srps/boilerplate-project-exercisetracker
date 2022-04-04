export default function makeExerciseDb({ ExerciseDb }) {
  return Object.freeze({
    findById,
    findByUserId,
    insert,
  });

  async function findById({ id }) {
    try {
      const exercise = await ExerciseDb.findById(id).exec();
      if (!exercise) { return null }
      return exercise
    } catch (err) {
      throw new Error(err);
    }
  }

  async function findByUserId({ userid }) {
    try {
      const exercises = await ExerciseDb.find({ userid }).exec();
      if (!exercises) { return null }
      return exercises
    } catch (err) {
      throw new Error(err);
    }
  }

  async function insert({ userid, description, duration, date }) {
    try {
      const exercise = new ExerciseDb({ userid, description, duration, date });
      await exercise.save();
      return {
        _id: exercise._id,
        userid: exercise.userid,
        description: exercise.description,
        duration: exercise.duration,
        date: exercise.date,
      }
    } catch (err) {
      throw new Error(err)
    }
  }
}