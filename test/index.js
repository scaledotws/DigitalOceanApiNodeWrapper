var expect = require('chai').expect;
var account = require('../lib/account.js');
var actions = require('../lib/actions.js');
var domains = require('../lib/domains.js');
// Test the account
describe('Account', function() {
  describe('#show()', function () {
    it('should show the account', function (done) {
      account
        .show()
        .then(function(res){
          expect(res).to.have.property('account');
          expect(res.account).to.have.property('droplet_limit');
          expect(res.account).to.have.property('email');
          expect(res.account).to.have.property('uuid');
          expect(res.account).to.have.property('email_verified');
          expect(res.account).to.have.property('status');
          expect(res.account).to.have.property('status_message');
          done();
        })
        .catch(function(err){
          done(err);
        });
    });
  });
});

describe('Domains', function() {
  describe('#list()', function () {
    it('should list all the domains', function (done) {
      domains
        .list()
        .then(function(res){
          expect(res).to.have.property('domains');
          expect(res).to.have.property('links');
          expect(res).to.have.property('meta');
          expect(res.meta).to.have.property('total');
          done();
        })
        .catch(function(err){
          done(err);
        });
    });
  });
  describe('#create()', function () {
    it('should list all the domains', function (done) {
      domains
        .create({
            "type": "A",
            "name": "www.prova.com",
            "data": "10.10.10.10"
          })
        .then(function(res){
          expect(res).to.have.property('domain');
          expect(res.domain).to.have.property('name');
          expect(res.domain).to.have.property('ttl');
          expect(res.domain).to.have.property('zone_file');
          done();
        })
        .catch(function(err){
          done(err);
        });
    });
  });
  describe('#delete()', function () {
    it('should list all the domains', function (done) {
      domains
        .delete('www.prova.com')
        .then(function(res){
          expect(res).to.have.property('domain');
          expect(res.domain).to.have.property('name');
          expect(res.domain).to.have.property('ttl');
          expect(res.domain).to.have.property('zone_file');
          done();
        })
        .catch(function(err){
          done(err);
        });
    });
  });
});
