import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', { path: '/login' } );
  this.route('home', { path: '/home' } );
  
  this.route('admin', function() {
    this.route('users');
  });
});

export default Router;
