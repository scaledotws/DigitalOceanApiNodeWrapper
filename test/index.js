var expect = require('chai').expect;
var account = require('../lib/account.js');
var actions = require('../lib/actions.js');
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

describe('Actions', function() {
  describe('#list()', function () {
    it('should list all the actions', function (done) {
      actions
        .list()
        .then(function(res){
          expect(res).to.have.property('actions');
          expect(res.actions[0]).to.have.property('id');
          expect(res.actions[0]).to.have.property('status');
          expect(res.actions[0]).to.have.property('type');
          expect(res.actions[0]).to.have.property('started_at');
          expect(res.actions[0]).to.have.property('completed_at');
          expect(res.actions[0]).to.have.property('resource_id');

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
  describe('#show()', function () {
    it('should show an action', function (done) {
      actions
        .list()
        .then(function(action_list){
          actions
            .show(action_list.actions[0].id)
            .then(function(res){
              expect(res).to.have.property('action');
              expect(res.action).to.have.property('id');
              expect(res.action).to.have.property('status');
              expect(res.action).to.have.property('type');
              expect(res.action).to.have.property('started_at');
              expect(res.action).to.have.property('completed_at');
              expect(res.action).to.have.property('resource_id');

              done();
            })
            .catch(function(err){
              done(err);
            });
        });
      });
  });
});
