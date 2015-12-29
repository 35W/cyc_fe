import Ember from 'ember';

export default Ember.Component.extend({
  currentPage: Ember.computed.alias('content.page.number'),
  totalPages: Ember.computed.alias('content.page.pages'),
  nextPage: Ember.computed.alias('content.page.nextPage'),
  prevPage: Ember.computed.alias('content.page.prevPage'),
  perPage: Ember.computed.alias('content.page.perPage'),


  pages: Ember.computed('currentPage', 'totalPages', function(){
    let currentPage = this.get('currentPage')
      , totalPages = this.get('totalPages')
      , maxShownPages = 10
      ;

    let variation1HalfSize = Math.ceil(maxShownPages / 2);
    if (currentPage > variation1HalfSize && currentPage <= (totalPages - variation1HalfSize)) {
      return this.pagesVariation2(currentPage, totalPages, maxShownPages);
    }else{
      return this.pagesVariation1(currentPage, totalPages, maxShownPages);
    }
  }),

  pagesVariation1(currentPage, totalPages, maxShownPages){
    let pages = []
      , nPagesShown = Math.min(maxShownPages, totalPages)
      ;

    // add the first half of numbers
    for (let i = 1; i <= Math.ceil(nPagesShown / 2); i++) {
      pages.push({ number: i, isCurrent: i == currentPage });
    }

    // add ellipsis if necessary
    if (nPagesShown < totalPages) {
      pages.push({ellipsis: true});
    }

    // add the last half of numbers
    let start = ( totalPages - Math.ceil(nPagesShown / 2) ) + 1;
    for (let i = start; i <= totalPages; i++) {
      pages.push({ number: i, isCurrent: i == currentPage });
    }

    return pages;
  },


  pagesVariation2(currentPage, totalPages, maxShownPages){
    let pages = [{number: 1}, {ellipsis: true}];
      ;

    let start = currentPage - ( Math.ceil((maxShownPages - 2) / 2) - 1 );
    let end = currentPage + Math.ceil((maxShownPages - 2) / 2);
    for (let i = start; i < end; i++) {
      pages.push({ number: i, isCurrent: i == currentPage });
    }

    pages = pages.concat([{ellipsis: true}, {number: totalPages}]);

    return pages;
  },

  // Got a situation where the pagination focus style on the a tag
  // ( set up in the tw bootstrap css ) connected to the link don't go
  // away after a rerender
  didRender(){ this.$(".pagination li a").blur(); }
});