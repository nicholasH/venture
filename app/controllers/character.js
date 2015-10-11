import Ember from 'ember';
import Item from '../models/item';

export default Ember.Controller.extend({
  characters: Ember.computed.alias('model'),
  character: Ember.computed.alias('characters.firstObject'),

  hasItems: Ember.computed.notEmpty('character.items'),

  _modifyStat: function(stat, amount){
    this.set('characters.firstObject.'+stat, this.get('characters.firstObject.'+stat)+amount);
  },

  actions: {

    changeCharacter: function(newCharacter){
      this.set('character',newCharacter);



    },

    deleteCharacter: function(character){

    character.deleteRecord();
    character.save();


    },


    addCharacter: function(){
    var char = this.store.createRecord('character');
    char.save();
    this.set('character',char);
    },

    removeItem: function(item){
      this.get('character.items').removeObject(item);
    },

    addItem: function() {
      this.get('character.items').pushObject(Item.createRandom());
    },

    increaseStat: function(stat) {
      this._modifyStat(stat, 1);
    },


    decreaseStat: function(stat) {
      this._modifyStat(stat, -1);
    },
  }
});