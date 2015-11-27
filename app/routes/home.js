import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
export default Ember.Route.extend(AuthenticatedRouteMixin);

// export default Ember.Route.extend({
//   beforeModel() {
//     console.log( "BeforeHome:model" )
//   },
//   
//   model() {
//     console.log( "Home:model" )
//   },
//   
//   afterModel() {
//     console.log( "AfterHome:model" )
//   }
// });