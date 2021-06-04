const articlesController = {
  index(request, response) {
    // here we query the db
    response.send({})
    // response.status(204).send({}) 
    // to send a different respond status
  } 
}

module.exports = articlesController