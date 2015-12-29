import Ember from 'ember';

export function sortQP(params) {
  let sort = params[0];
  let currentSort = params[1].get('sort');
  return sort === currentSort ? ("-"+sort) : sort;
}

export default Ember.Helper.helper(sortQP);
