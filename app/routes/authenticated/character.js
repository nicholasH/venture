import Ember from 'ember';
import Character from 'venture/models/character';

export default Ember.Route.extend({
  model: function() {

    let charp = this.store.findAll('character');

    var prom = new Ember.RSVP.Promise((resolve,reject) =>{
       Ember.$.ajax('/character', {
          success: function(response) {
            resolve(alert("there are no chars"));
            },
          error: function(reason) {
              reject({error: "No chars found!"});
          }
      });


    });






    return new Ember.RSVP.Promise((resolve,reject) =>{
      return Ember.run.later(() => {
        charp.then(chars => {

          if(chars.get("length") > 0){
            resolve(charp);
            }
           else{
           reject(alert("there are no chars"));
        }
        });



      }, 2000);

    });





  }
});