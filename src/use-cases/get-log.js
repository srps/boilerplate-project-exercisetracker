export default function makeGetLog({ userDb, exerciseDb }) {
  return async function getLog({ userid }) {
    try {
      const existingUser = await userDb.findById({ id: userid });
      if (!existingUser) {
        throw new Error(`User ${userid} does not exist`)
      }
      const userExercises = await exerciseDb.findByUserId({ userid });
      console.log(`userEx: ${userExercises}`)
      const exerciseArray = Object.values(userExercises);
      const result = {
        username: existingUser.username,
        count: exerciseArray.length,
        _id: existingUser._id,
        log: exerciseArray,
      }
      return result;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}