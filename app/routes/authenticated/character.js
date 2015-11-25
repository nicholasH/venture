import Ember from 'ember';
import Character from 'venture/models/character';

export default Ember.Route.extend({
  model: function() {

    let charp = this.store.findAll('character');





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