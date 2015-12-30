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
    let queryParams = {
      'page[number]': params.page, 'page[size]': params.per_page,
      sort: params.sort
    };
    return this.store.query( 'user', queryParams );
  },

  afterModel (model) {
    let queryParams = this.paramsFor( this.routeName );
    model.set( 'sort', queryParams.sort );
  }
});