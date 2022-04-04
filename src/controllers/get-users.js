export default function makeGetUsersController({ getUsers }) {
    return async function getUsersController() {
        try {
            const users = await getUsers()
            return {
                body: users,
            }
        } catch (err) {
            throw new Error(err.message);        
        }
    }
}