import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'venture/tests/helpers/start-app';

module('Acceptance | characters', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /character', function(assert) {
  visit('/authenticated/character');

  andThen(function() {
    assert.equal(currentURL(), '/authenticated/character');
  });
});
