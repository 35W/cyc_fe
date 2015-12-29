import Ember from 'ember';

export default Ember.LinkComponent.extend({
  init: function() {
    // console.log('here');
    // let routeName = this.container.lookup('router:main').get('currentRouteName');
    this._super(...arguments);
  },
  activeClass: '',
  classNames: ['sortable'],
  classNameBindings: ['isDesc:desc', 'isAsc:asc'],
  tagName: 'th',
  isDesc: Ember.computed('content.sort', function(){
    return this.get('content.sort').includes("-");
  })
});