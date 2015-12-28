import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    per_page: {
      refreshModel: true
    }
  },

  model(params) {
    // console.log("admin.users", params)
    return this.store.query( 'user', params );
  },

  afterModel( model ) {
    model.set( 'page', Ember.Object.create(this.store._metadataFor( 'user' )) );
  }
});