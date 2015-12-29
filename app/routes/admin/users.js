import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    per_page: {
      refreshModel: true
    },
    sort: {
      refreshModel: true
    }
  },

  model (params) {
    return this.store.query( 'user', params );
  },

  afterModel (model) {
    let queryParams = this.paramsFor( this.routeName );
    model.setProperties({
      sort: queryParams.sort
    })
    model.set( 'page', Ember.Object.create(this.store._metadataFor( 'user' )) );
  }
});