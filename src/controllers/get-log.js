export default function makeGetLogController({ getLog }) {
    return async function getLogController(httpRequest) {
        try {
            const log = await getLog({
              userid: httpRequest.params._id,
            })
            return {
                body: {
                    ...log,
                }
            }
        } catch (err) {
            throw new Error(err.message);        
        }
    }
}