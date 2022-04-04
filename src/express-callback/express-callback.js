export default function makeExpressCallback(controller) {
  return (req, res) => {
    const httpRequest = {
      body: req.body,
      params: req.params,
      query: req.query
    }
    controller(httpRequest)
      .then(({ body }) => {
        typeof body === Array ? res.body : res.json(body)
      })
      .catch(err => {
        console.log(`EC Error:- ${err}`);
        res.status(500).send({ error: err.message })
      });
  }
}
