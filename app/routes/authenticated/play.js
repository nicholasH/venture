import Ember from 'ember';

export default Ember.Route.extend({


  map: Ember.inject.service(),
  model: function(params) {
    return this.store.find('character',params.character).then( chars => {

      return this.store.query('world-view', { character_id: chars.get('id')}).then((worldViews) => {
       this.get('map').addToWorldView(worldViews.get('firstObject'));

        return chars;
      });
    });
  },

  serialize: function(model){
  return {character: model.get('id')};
}

});