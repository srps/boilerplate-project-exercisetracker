import makeGetLog from "../use-cases/get-log.js";
import makeGetUsers from "../use-cases/get-users.js";
import makePostUser from "../use-cases/post-user.js";
import makePostExercise from "../use-cases/post-exercise.js";

import makeGetLogController from './get-log.js';
import makeGetUsersController from './get-users.js';
import makePostExerciseController from './post-exercise.js';
import makePostUserController from './post-user.js';

import { userDb, exerciseDb } from "../data-access/index.js";

const getLog = makeGetLog({ userDb, exerciseDb });
const getUsers = makeGetUsers({ userDb });
const postExercise = makePostExercise({ userDb, exerciseDb });
const postUser = makePostUser({ userDb });

const getLogController = makeGetLogController({ getLog });
const getUsersController = makeGetUsersController({ getUsers });
const postExerciseController = makePostExerciseController({ postExercise });
const postUserController = makePostUserController({ postUser });

const exerciseServices = Object.freeze({
    getLogController,
    getUsersController,
    postExerciseController,
    postUserController
})

export default exerciseServices
export { getLogController, getUsersController, postExerciseController, postUserController }