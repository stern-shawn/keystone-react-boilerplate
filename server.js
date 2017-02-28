var keystone = require('keystone');
keystone.init({
  'name': 'My Project',

  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': ['public'],

  'views': 'templates/views',
  'view engine': 'pug',

  'auto update': true,
  'mongo': 'mongodb://mongo:27017',

  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': 'mycookie'

});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();
