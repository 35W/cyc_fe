import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  tokenEndpoint: 'http://localhost:3000/v1/signin',
  
  restore(data) {
    //console.log( data.token )
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },
  
  authenticate(options) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: this.tokenEndpoint,
        type: "POST",
        data: JSON.stringify({
          email: options.identification,
          password: options.password
          }),
        contentType: 'application/json;charset=utf-8',
        dataType: 'json'
        }).then(function(response) {
          //console.log( response )
          Ember.run(function() {
            resolve({
              token: response.auth_token,
              user: response.user
            });
          });
        }, function(xhr, status, error) {
          var response = xhr.responseJSON;
          Ember.run(function() {
            reject(response);
          });
        });
    });
  },
  
  invalidate(data) {
    //console.log( data )
    return Ember.RSVP.resolve();
  }
});