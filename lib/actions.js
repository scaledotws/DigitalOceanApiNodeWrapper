var config = require('../config/index').config;
var request = require('request-promise');


exports.list = function() {
  return request
    .get(config.api_url + 'actions', {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
}
