import Ember from 'ember';

export default Ember.Component.extend({

tagName: 'tr',

  hasPointsLeft: Ember.computed.gt('pointsLeft',0),

  actions:{
    increaseStat: function(){
      this.decrementProperty('pointsLeft');
      this.set('stat',this.get('stat')+1);
    },
    decreaseStat: function(){
      this.incrementProperty('pointsLeft');
      this.set('stat',this.get('stat')-1);
    },

  }
});