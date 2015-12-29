import DS from 'ember-data';


export default DS.JSONAPISerializer.extend({
  normalizeResponse (store, primaryModelClass, payload, id, requestType) {
    if (payload && payload.page) {
      store._setMetadataFor( primaryModelClass.modelName, payload.page);
    }
    return this._super(...arguments);
  },

  keyForAttribute (attr, method) {
    return Ember.String.underscore(attr);
  }
});