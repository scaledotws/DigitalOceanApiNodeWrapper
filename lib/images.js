var config = require('../config/index').config;
var request = require('request-promise');

// list all the actions on do
exports.list = function() {
  return request
    .get(config.api_url + 'images', {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};
// list all the actions on do
exports.list_distributions = function() {
  return request
    .get(config.api_url + 'images?type=distribution', {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};
// list all the actions on do
exports.list_applications = function() {
  return request
    .get(config.api_url + 'images?type=applications', {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};
// list all the actions on do
exports.list_users = function() {
  return request
    .get(config.api_url + 'images?private=true', {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};
// retrive image by id or slug
exports.show = function(id) {
  return request
    .get(config.api_url + 'images/'+id, {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};

// retrive an existing domain
exports.delete = function(image) {
  return request
    .del(config.api_url + 'images/' + image, {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
}
// retrive a specific action object
exports.update = function(id, name) {
  return request
    .put({
      url: config.api_url + 'images/'+id,
      formData: '{ "name": "'+name+'"}',
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};
