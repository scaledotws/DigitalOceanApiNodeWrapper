var config = require('../config/index').config;
var request = require('request-promise');

// list all the actions on do
exports.list = function() {
  return request
    .get(config.api_url + 'droplets', {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};

//retrive a specific action object
exports.show = function(id) {
  return request
    .get(config.api_url + 'droplets/'+id, {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};
//retrive a specific action object
exports.list_kernels = function(id) {
  return request
    .get(config.api_url + 'droplets/'+id+'/kernels', {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};
//retrive a specific action object
exports.list_snapshots = function(id) {
  return request
    .get(config.api_url + 'droplets/'+id+'/snapshots', {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};
//retrive a specific action object
exports.list_backups = function(id) {
  return request
    .get(config.api_url + 'droplets/'+id+'/backups', {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};
//retrive a specific action object
exports.list_actions = function(id) {
  return request
    .get(config.api_url + 'droplets/'+id+'/actions', {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};
//retrive a specific action object
exports.list_droplet_neighbors = function(id) {
  return request
    .get(config.api_url + 'droplets/'+id+'/neighbors', {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};
//retrive a specific action object
exports.list_all_neighbors = function() {
  return request
    .get(config.api_url + 'reports/droplet_neighbors', {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};
//retrive a specific action object
exports.list_upgrades = function() {
  return request
    .get(config.api_url + 'reports/droplet_upgrades', {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};
// retrive a specific action object
exports.create = function(action) {
  return request
    .post({
      url: config.api_url + 'droplets',
      formData: action,
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};
// retrive an existing domain
exports.delete = function(id) {
  return request
    .del(config.api_url + 'droplets/' + id, {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
}
