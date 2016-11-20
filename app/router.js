import Ember from 'ember';
import config from './config/environment';

// const Router = Ember.Router.extend({
//   location: config.locationType,
//   rootURL: config.rootURL
// });
var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', {
    path: '/'
  });
  this.route('examples');
});

export default Router;
