export default function makePostExercise({ userDb, exerciseDb }) {
  // We'll get exerciseInfo from controller
  return async function postExercise(exerciseInfo) {
    try {
      const existingUser = await userDb.findById({ id: exerciseInfo.userid })
      if (!existingUser) {
        throw new Error(`User ${exerciseInfo.userid} not found`)
      }
      else {
        const exerciseDate = exerciseInfo.date ? exerciseInfo.date : new Date()
        const exercise = await exerciseDb.insert({
          userid: exerciseInfo.userid,
          description: exerciseInfo.description,
          duration: exerciseInfo.duration,
          date: exerciseDate
        })
        const result = {
          username: existingUser.username,
          description: exercise.description,
          duration: exercise.duration,
          date: exercise.date.toDateString(),
          _id: exercise.userid,
        }
        return result;
      }
    }
    catch (err) {
      throw err;
    }
  }
}
