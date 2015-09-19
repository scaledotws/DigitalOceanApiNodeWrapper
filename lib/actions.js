var config = require('../config/index').config;
var request = require('request-promise');

// list all the actions on do
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
};

//retrive a specific action object
exports.show = function(action) {
  return request
    .get(config.api_url + 'actions/'+action, {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};
