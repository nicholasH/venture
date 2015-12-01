import Ember from 'ember';
import Character from 'venture/models/character';

export default Ember.Route.extend({
  model: function() {

    let charp = this.store.findAll('character');





    return charp;





  }
});