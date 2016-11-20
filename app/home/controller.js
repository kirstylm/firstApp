import Ember from 'ember';

export default Ember.Controller.extend({
  content: 'this is some',
  h1: 'jumbotron',
  body: 'container',
  spLogo: 'https://www.ostraining.com/cdn/images/logo/sitepoint_logo_small.jpg',
  responsive: 'img-responsive',

  actions: {
    createTodo: function() {
        var newTodo = this.store.createRecord('todo', {
            name: this.get('name'),
            createdAt: new Date().getTime()
        });
        newTodo.save();
    }
}
});
