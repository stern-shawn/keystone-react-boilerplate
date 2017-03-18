var async = require('async'),
  keystone = require('keystone');

var AboutPage = keystone.list('AboutPage');

/**
 * Get the About Page content
 */
exports.aboutContent = function(req, res) {
  AboutPage.model
  .find()
  .exec(function(err, items) {
    if (err) return res.apiError('database error', err);

    res.apiResponse({
      content: items,
    });
  });
}
