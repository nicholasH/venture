import Ember from 'ember';
import Character from 'venture/models/character';

export default Ember.Route.extend({
  model: function() {

    return this.store.findAll('character');
  }
});