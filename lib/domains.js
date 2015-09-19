var config = require('../config/index').config;
var request = require('request-promise');

// list all the actions on do
exports.list = function() {
  return request
    .get(config.api_url + 'domains', {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};
// show the domain
exports.show = function(domain) {
  return request
    .get(config.api_url + 'domains/'+domain, {
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
      url: config.api_url + 'domains',
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
exports.delete = function(domain) {
  return request
    .del(config.api_url + 'domains/' + domain, {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
}
// show the domain records
exports.list_records = function(domain) {
  return request
    .get(config.api_url + 'domains/'+domain+'/records', {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};
// show a specific domain record
exports.list_records = function(domain, record_id) {
  return request
    .get(config.api_url + 'domains/'+domain+'/records/'+record_id, {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};
// retrive a specific action object
exports.update_record = function(domain_name, record_id, payload) {
  return request
    .put({
      url: config.api_url + 'domains/'+domain_name+'/records/'+record_id,
      formData: payload,
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};
// retrive an existing domain
exports.delete_record = function(domain, record_id) {
  return request
    .del(config.api_url + 'domains/' + domain + '/records/' + record_id , {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
}
