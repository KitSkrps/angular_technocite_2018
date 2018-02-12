const Movie = require('../models/movie');

module.exports = {
  method: 'DELETE',
  path: '/api/movies/{id}',
  handler: async (req, h) => {
    return Movie.findByIdAndRemove({id: req.params.id});
    return 'movie deleted';
  }
};
