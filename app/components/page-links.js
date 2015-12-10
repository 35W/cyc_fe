import ApplicationHelper from 'cyc_fe/mixins/application-helper';

const PageLinksComponent = Ember.Component.extend( ApplicationHelper, {
  
  next: Ember.computed('params.[]', function(){
    let links = this.get('params').links
    
    if( !Ember.isEmpty( links.next ) ){
      return this.page_num_from_link( links.next );
    } else {
      return null;
    }
  }),
  
  prev: Ember.computed('params.[]', function(){
    let links = this.get('params').links
    
    if( !Ember.isEmpty( links.prev ) ){
      return this.page_num_from_link( links.prev );
    } else {
      return null;
    }
  })
  
});

PageLinksComponent.reopenClass({
  positionalParams: 'params'
});

export default PageLinksComponent;