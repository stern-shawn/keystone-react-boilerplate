// Enables setting environment variables based on local .env file
require('dotenv').config();

var keystone = require('keystone');

keystone.init({
  'name': 'My Project',

  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': ['public'],

  'views': 'templates/views',
  'view engine': 'pug',

  'auto update': true,
  'mongo': 'mongodb://localhost/my-project',
  'cloudinary config':  process.env.CLOUDINARY_URL || {
    cloud_name: 'my-cloud',
    api_key   : 'abc',
    api_secret: '123',
  },

  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': process.env.COOKIE_SECRET || 'changeme',
  'port': process.env.PORT || 3000,
});

require('./models');

// Look at env variables, production mode enables better performance
keystone.set('locals', {
  env: keystone.get('env'),
});

keystone.set('routes', require('./routes'));

keystone.start();
