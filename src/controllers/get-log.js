export default function makeGetLogController({ getLog }) {
    return async function getLogController(httpRequest) {
        try {
            const log = await getLog({
              userid: httpRequest.params._id,
              filter: {
                from: httpRequest.query.from,
                to: httpRequest.query.to,
                limit: httpRequest.query.limit
              }
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