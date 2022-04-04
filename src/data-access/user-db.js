export default function makeUserDb({ UserDb }) {
  return Object.freeze({
    find,
    findById,
    findOne,
    insert,
  });

  async function find() {
    try {
      const users = await UserDb.find().select('-__v').exec();
      return users;
    } catch (err) {
      throw new Error(err);
    }
  }

  async function findById({ id }) {
    try {
      const user = await UserDb.findById(id).exec();
      if (!user) { return null }
      return {
        _id: user._id,
        username: user.username,
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async function findOne({ username }) {
    try {
      const user = await UserDb.findOne({ username }).exec();
      if (!user) { return null }
      return {
        _id: user._id,
        username: user.username,
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async function insert({ username }) {

    try {
      const user = new UserDb({ username });
      await user.save();
      return {
        _id: user._id,
        username: user.username,
      }
    } catch (err) {
      throw new Error(err)
    }
  }
}