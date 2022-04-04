export default function makeGetUsers({ userDb }) {
  return async function getUsers() {
    try {
      const users = await userDb.find();
      const result = Object.values(users)
      console.log(typeof result)
      return result
    } catch (err) {
      throw new Error(err.message);
    }
  }
}