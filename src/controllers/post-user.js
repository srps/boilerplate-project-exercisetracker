export default function makePostUserController({ postUser }) {
  // We'll get userInfo from controller
  return async function postUserController(httpRequest) {
    try {
      const user = await postUser({ username: httpRequest.body.username });
      return { body: { ...user } };
    } catch (err) {
      throw err;
    }
  }
}
