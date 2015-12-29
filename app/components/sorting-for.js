import Ember from 'ember';

let SortForComponent = Ember.LinkComponent.extend({
  activeClass: '',
  classNames: ['sortable'],
  classNameBindings: ['isDesc:desc', 'isAsc:asc'],
  tagName: 'th',

  init() {
    this.set('params', [this.container.lookup('router:main').get('currentRouteName')]);
    this._super(...arguments);
  },

  willRender() {
    let currentSort = this.get('content.sort')
      , column = this.get('column')
      , targetSort = (currentSort === column ? ("-"+column) : column)
      ;

    this._super(...arguments);

    this.set('queryParams', {values: {page: 1, sort: targetSort}})
  },

  isDesc: Ember.computed('content.sort', function(){
    let sort = this.get('content.sort')
      , activeColumn = sort.replace('-', '')
      , isActiveColumn = this.get('column') === activeColumn
      ;
    return isActiveColumn && sort.includes("-");
  }),

  isAsc: Ember.computed('content.sort', function(){
    let sort = this.get('content.sort')
      , activeColumn = sort.replace('-', '')
      , isActiveColumn = this.get('column') === activeColumn
      ;
    return isActiveColumn && !sort.includes("-");
  })
});

SortForComponent.reopenClass({
  positionalParams: ['column', 'content']
});

export default SortForComponent;