var config = require('../config/index').config;
var request = require('request-promise');


exports.show = function() {
  return request
    .get(config.api_url + 'account', {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
}
