export default function makePostExerciseController({ postExercise }) {
  // We'll get exerciseInfo from controller
  return async function postExerciseController(httpRequest) {
    try {
      const exercise = await postExercise({
        userid: httpRequest.params._id,
        ...httpRequest.body
      });
      return { body: { ...exercise } };
    } catch (err) {
      throw err;
    }
  }
}
