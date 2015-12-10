import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if( !Ember.isEmpty( payload.links ) ){
      store._setMetadataFor( primaryModelClass.modelName, payload.links )
    }
    return this._super(store, primaryModelClass, payload, id, requestType)
  },
});