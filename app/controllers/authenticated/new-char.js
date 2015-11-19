import Ember from 'ember';
import EmberValidations from 'ember-validations';


export default Ember.Controller.extend(EmberValidations,{
    validations: {
    'character.name': {
      presence: true,
      length: { minimum: 3 }
    }
  },

  character: Ember.computed.alias('model'),

  hasItems: Ember.computed.notEmpty('character.items'),

  _modifyStat: function(stat, amount){
    this.set('characters.firstObject.'+stat, this.get('characters.firstObject.'+stat)+amount);
  },

  actions: {

    randomizeCharacter: function(){
      var randomCharacter = this.get('randomCharacterGenerator').random();
      this.set('character',randomCharacter);

    },


    deleteCharacter: function(){
     this.get('character').deleteRecord();
     this.get('character').save().then(() =>{
        this.transtitionToToute('authenticated.character');
      });

    },


    removeItem: function(item){
      this.get('character.items').removeObject(item);
    },

    addItem: function() {
       var item = this.store.createRecord('item',
          {
          name: 'Sword of Life',
          weight: 4,
          constitutionBonus: 3
       });
      item.save();
       this.get('character.items').pushObject(item);
    },

    increaseStat: function(stat) {
      this._modifyStat(stat, 1);
    },

    decreaseStat: function(stat) {
      this._modifyStat(stat, -1);
    },

    changeName:function(){
      if(this.get("isValid")){
        var char = this.get('character');
        char.save();
      }


    },

    levelUp:function(){
      this.incrementProperty('character.level');
      this.send('showModal',{
        template: 'level-character',
        character: this.get('character'),
        pointsLeft:3
      });
    },


  },













});