const config = require('./env.json');

var keystone = require('keystone');

keystone.init({
  'name': 'My Project',

  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': ['public'],

  'views': 'templates/views',
  'view engine': 'pug',

  'auto update': true,
  'mongo': config.MONGODB_REMOTE || 'mongodb://localhost/my-project',
  'cloudinary config':  config.CLOUDINARY_URL || {
    cloud_name: 'my-cloud',
    api_key   : 'abc',
    api_secret: '123',
  },

  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': config.COOKIE_SECRET || 'changeme',
  'port': config.PORT || 3000,
});

require('./models');

// Look at env variables, production mode enables better performance
keystone.set('locals', {
  env: keystone.get('env'),
});

// Expose base url of this site so that we can autogenerate social sharing/SEO
// content relative to this site
keystone.set('baseUrl', (keystone.get('env') == 'production') ? 'https://kipscrazyblog.com/' : 'http://localhost:3000/');

keystone.set('routes', require('./routes'));

keystone.start();
