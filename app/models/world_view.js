import DS from 'ember-data';

export default DS.Model.extend({
  
  x: DS.attr(),
  y: DS.attr(),
  width: DS.attr(),
  height: DS.attr(),
  tiles: DS.attr()
});