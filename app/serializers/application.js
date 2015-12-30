import DS from 'ember-data';


export default DS.JSONAPISerializer.extend({
  keyForAttribute (attr, method) {
    return Ember.String.underscore(attr);
  }
});