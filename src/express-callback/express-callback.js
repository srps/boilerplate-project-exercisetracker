export default function makeExpressCallback(controller) {
    return (req, res) => {
      const httpRequest = {
          body: req.body,
          params: req.params
      }
      console.log(httpRequest)
      controller(httpRequest)
        .then(({ body }) => {
          console.log(typeof body)
          typeof body === Array ? res.body : res.json(body)
        })
        .catch(err => {
          console.log(`EC Error:- ${err}`);
          if (err.message.match('Invalid URL')) {
            res.status(200).send({error: err.message})
          } else {
            res.status(500).send({error: err.message})  
          }
        });
      }
}
