var keystone = require('keystone'),
  AboutPage = keystone.list('AboutPage');

// Seed an inital about page since users cannot create/delete them
exports = module.exports = function(done) {
  new AboutPage.model({
    title: 'About Page',
  }).save(done);

};
