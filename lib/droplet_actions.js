var config = require('../config/index').config;
var request = require('request-promise');

// disable backups on a particular existing droplet

function action(id, type) {
  return request
    .post({
      url: config.api_url + 'droplets/'+id+'/actions',
      formData: '{"type": "'+type+'"}',
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
}

// disable backups on a particular droplet
exports.disable_backups = function(id) {
  return action(id, 'disable_backups');
};

// send reboot on a particular droplet
exports.reboot = function(id) {
  return action(id, 'reboot');
};

// send power_cycle on a particular droplet
exports.power_cycle = function(id) {
  return action(id, 'power_cycle');
};

// send shutdown a particular droplet
exports.shutdown = function(id) {
  return action(id, 'shutdown');
};

// disable backups on a particular droplet
exports.power_off = function(id) {
  return action(id, 'power_off');
};

// disable backups on a particular droplet
exports.power_on = function(id) {
  return action(id, 'power_on');
};

// disable backups on a particular droplet
exports.password_reset = function(id) {
  return action(id, 'password_reset');
};

// disable backups on a particular droplet
exports.enable_ipv6 = function(id) {
  return action(id, 'enable_ipv6');
};

// disable backups on a particular droplet
exports.upgrade = function(id) {
  return action(id, 'upgrade');
};

// disable backups on a particular droplet
exports.enable_private_networing = function(id) {
  return action(id, 'enable_private_networing');
};

// disable backups on a particular droplet
exports.restore = function(id, image) {
  return request
    .post({
      url: config.api_url + 'droplets/'+id+'/actions',
      formData: '{"type": "restore", "image": "'+image+'"}',
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};

// disable backups on a particular droplet
exports.rebuild = function(id, image) {
  return request
    .post({
      url: config.api_url + 'droplets/'+id+'/actions',
      formData: '{"type": "rebuild", "image": "'+image+'"}',
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};

// disable backups on a particular droplet
exports.rename = function(id, name) {
  return request
    .post({
      url: config.api_url + 'droplets/'+id+'/actions',
      formData: '{"type": "rename", "name": "'+name+'"}',
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};

// disable backups on a particular droplet
exports.snapshot = function(id, name) {
  return request
    .post({
      url: config.api_url + 'droplets/'+id+'/actions',
      formData: '{"type": "snapshot", "name": "'+name+'"}',
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};

// disable backups on a particular droplet
exports.change_kernel = function(id, name) {
  return request
    .post({
      url: config.api_url + 'droplets/'+id+'/actions',
      formData: '{"type": "change_kernel", "kernel": "'+name+'"}',
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};

// disable backups on a particular droplet
exports.resize = function(id, size) {
  return request
    .post({
      url: config.api_url + 'droplets/'+id+'/actions',
      formData: '{"type": "resize", "disk": "true", "size": "'+size+'"}',
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};

//retrive a specific action object
exports.retrive_action = function(id, action_id) {
  return request
    .get(config.api_url + 'droplets/'+id+'/actions/'+action_id, {
      'auth' : {
        'bearer' : config.api_key
      }
    })
    .then(function(data){
      return JSON.parse(data);
    });
};
