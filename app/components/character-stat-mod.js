import Ember from 'ember';

export default Ember.Component.extend({

tagName: 'tr',

  actions:{
    increaseStat: function(){
      this.set('stat',this.get('stat')+1);
    },
    decreaseStat: function(){
      this.set('stat',this.get('stat')-1);
    },

  }
});