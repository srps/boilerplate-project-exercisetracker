export default function makeExerciseDb({ ExerciseDb }) {
  return Object.freeze({
    findById,
    findByUserId,
    insert,
  });

  async function findById({ id }) {
    try {
      const exercise = await ExerciseDb.findById(id).select('-__v').exec();
      if (!exercise) { return null }
      return exercise
    } catch (err) {
      throw new Error(err);
    }
  }

  async function findByUserId({ userid, filter }) {
    try {
      const dateFrom = new Date( filter.from ? filter.from : 0 )
      const dateTo = new Date( filter.to ? filter.to : Date.now() )
      const exercises = await ExerciseDb.find({ userid })
        .where('date').gte(dateFrom).lte(dateTo)
        .limit(filter.limit)
        .select('-__v')
        .exec();
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