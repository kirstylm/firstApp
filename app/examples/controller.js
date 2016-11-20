import Ember from 'ember';

export default Ember.Controller.extend({
  showList: false,
  actions: {
    show: function() {
      this.set('showList', true);
    },
    hide: function() {
      this.set('showList', false);
    },
    createTodo: function() {
        var newTodo = this.store.createRecord('todo', {
            name: this.get('name'),
            createdAt: new Date().getTime()
        });
        newTodo.save();
    },
  },
  people: [{
    name:'Kirsty m',
    age: '1 July 1984',
    alias: 'cat lady',
    hometown: 'somerset west'
  }, {
    name:'Peter m',
    age: '2 Sept 1974',
    alias: 'dog lady',
    hometown: 'somerset west'
  }, {
    name:'Penny m',
    age: '1 March 1932',
    alias: 'bird lady',
    hometown: 'somerset west'
  }]
});
