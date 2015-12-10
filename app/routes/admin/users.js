import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
export default Ember.Route.extend(AuthenticatedRouteMixin);

export default Ember.Route.extend({
//   beforeModel() {
//     console.log( "BeforeHome:model" )
//   },
//   

  queryParams: {
    page: {
      refreshModel: true
    }
  },

  model( params ) {
    //console.log( params )
    var users = this.store.query( 'user',  { page: { number: params.page } } );
    return users;
  },
  
  afterModel( model ) {
    model.set( "links", this.store._metadataFor( "user" ) )
  }
});