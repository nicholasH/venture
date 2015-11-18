import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {


  this.route('login',{path: '/'});
  this.route('logout');
  this.route('play', {path: '/play/:character'});
  this.route('authenticated' , function() {
    this.route('secretz');
    this.route('character');
    this.route('map');
    this.route('new-char');
  });
});

export default Router;