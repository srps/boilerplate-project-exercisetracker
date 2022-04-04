export default function makePostUser({ userDb }) {
    // We'll get userInfo from controller
    return async function postUser(userInfo) {
        try {
            const existingUser = await userDb.findOne({ username: userInfo.username })
            if(!existingUser){
                const result = await userDb.insert({ username: userInfo.username }) 
              return result;
            }
            else {
                return existingUser;
            }
        }
        catch(err) {
            throw err;
        }
    }
}
