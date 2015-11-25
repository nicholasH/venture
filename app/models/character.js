import Ember from 'ember';
import DS from 'ember-data';
const BASE_HP = 40;
const BASE_MANA = 30;

export default DS.Model.extend({
  level: DS.attr('number',{defaultValue: 1}),
  strength: DS.attr('number',{defaultValue: 1}),
  int: DS.attr('number',{defaultValue: 1}),
  wisdom: DS.attr('number',{defaultValue: 1}),
  dexterity: DS.attr('number',{defaultValue: 1}),
  constitution: DS.attr('number',{defaultValue: 1}),
  charisma: DS.attr('number',{defaultValue: 1}),

  x: DS.attr('number',{defaultValue: 0}),
  y: DS.attr('number',{defaultValue: 0}),


  statPointsToSpend: DS.attr('number',{defaultValue: 20}),

  maxHealth: Ember.computed('level', 'constitution', function() {
    return BASE_HP + (this.get('constitution') * this.get('level'));
  }),

   maxMana: Ember.computed('level', 'int', function() {
    return BASE_MANA + (this.get('int') * this.get('level'));
  }),

  charaterClass: DS.attr('String',{defaultValue: function(){
    var classNames = ['wizard','warrior','bard','elf','valkyrie'];
    return classNames[Math.floor(Math.random()*classNames.length)];
  }}),



   name: DS.attr('String',{defaultValue: function(){
    var names = ['Zultar', 'Zorky', 'Merlin'];
    return names[Math.floor(Math.random()*names.length)];
  }}),

  items: DS.hasMany('items',{async: true}),

  itemWeights: Ember.computed.mapBy('items','weight'),
  itemWeight: Ember.computed.sum('itemWeights'),
  hampered: Ember.computed('itemWeight','maxWeight', function(){
     return this.get('itemWeight') > this.get('maxWeight');
  }),
  maxWeight: Ember.computed('strength', function() {
     return this.get('strength') * 5;
  }),

  itemConstitutionBonuses: Ember.computed.mapBy('items','constitutionBonus'),
  constitutionBonus: Ember.computed.sum('itemConstitutionBonuses'),
  effectiveConstitution: Ember.computed('constitutionBonus','constitution', function() {
    return this.get('constitution') + this.get('constitutionBonus');
  }),


  world_veiw: DS.belongsTo('world_view',{async: true}),






});