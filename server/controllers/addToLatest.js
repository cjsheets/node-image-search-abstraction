var Latest              = require('../models').Latest;
var mongoose            = require('mongoose');
    mongoose.Promise    = require('bluebird');
var debug               = require('debug')('controller:addQueryToDb');

/* -----------------------------------|
 *|  Using Rails-like standard naming convention for endpoints.
 *|  GET     /api/searchs    ->  index
 */

// Creates a new Search in the DB
module.exports = function(response) {
  return Latest.create({
    term: response.queries.request[0].searchTerms,
    date : new Date()
  })
}
