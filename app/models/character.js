import Ember from 'ember';
const BASE_HP = 40;
const BASE_MANA = 30;

export default Ember.Object.extend({
  level: 1,
  strength: 10,
  int: 17,
  wisdom: 10,
  dexterity: 10,
  constitution: 17,
  charisma: 100,

  maxHealth: Ember.computed('level', 'constitution', function() {
    return BASE_HP + (this.get('constitution') * this.get('level'));
  }),

   maxMana: Ember.computed('level', 'int', function() {
    return BASE_MANA + (this.get('int') * this.get('level'));
  }),

  className: Ember.computed(function(){
    var classNames = ['wizard','warrior','bard','elf','valkyrie'];
    return classNames[Math.floor(Math.random()*classNames.length)];
  }),

  name: Ember.computed(function(){
    var names = ['Zultar', 'Zorky', 'Merlin'];
    return names[Math.floor(Math.random()*names.length)];
  })
});