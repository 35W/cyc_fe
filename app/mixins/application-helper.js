import Ember from 'ember';

export default Ember.Mixin.create({
  params_to_object: function( url ) {
    let parser = document.createElement('a');
    let searchObject = {};
    let queries, split, i;
    
    parser.href = url;
    
    queries = parser.search.replace(/^\?/, '').split('&');
    for( i = 0; i < queries.length; i++ ) {
      split = queries[i].split('=');
      searchObject[ decodeURI(split[0]) ] = split[1];
    }
    
    return searchObject;
  },
  
  page_num_from_link: function( url ) {
    let searchObject = this.params_to_object( url );
    return searchObject["page[number]"] || null;
  },
});