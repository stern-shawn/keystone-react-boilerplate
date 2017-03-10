var async = require('async'),
  keystone = require('keystone');

var Post = keystone.list('Post');

/**
 * List Posts, standard order with oldest first
 */
exports.fullList = function(req, res) {
  Post.model
  .find()
  .where('state', 'published')
  .exec(function(err, items) {
    if (err) return res.apiError('database error', err);

    res.apiResponse({
      posts: items,
    });
  });
}

/**
 * List Posts, in blog format with newest first
 */
exports.fullLatestList = function(req, res) {
  Post.model
    .find()
    .where('state', 'published')
    .sort('-publishedDate')
    .exec(function(err, items) {
      if (err) return res.apiError('database error', err);

      res.apiResponse({
        posts: items,
      });
    });
}

/**
 * Grab a 'page' worth of posts, paginated
 */
exports.paginatedList = function(req, res) {
  Post.paginate({
    page: req.params.page || 1,
    perPage: 10,
    maxPages: 10
  })
  .where('state', 'published')
  .sort('-publishedDate')
  .populate('author categories')
  .exec(function(err, items) {
    if (err) return res.apiError('database error', err);

    res.apiResponse({
      posts: items,
    });
  });
}

/**
 * Get Post by ID
 */
exports.getId = function(req, res) {
  Post.model
    .findById(req.params.id)
    .where('state', 'published')
    .exec(function(err, item) {
      if (err) return res.apiError('database error', err);
      if (!item) return res.apiError('not found');

      res.apiResponse({
        post: item,
      });
    });
}

/**
 * Get Post by slug
 */
exports.getSlug = function(req, res) {
  Post.model
    .findOne({
      state: 'published',
      slug: req.params.slug,
    })
    .exec(function (err, item) {
      if (err) return res.apiError('database error', err);
      if (!item) return res.apiError('not found');

      res.apiResponse({
        post: item,
      });
    });
}

/**
 * Create a Post
 */
// exports.create = function(req, res) {
//
//   var item = new Post.model(),
//     data = (req.method == 'POST') ? req.body : req.query;
//
//   item.getUpdateHandler(req).process(data, function(err) {
//
//     if (err) return res.apiError('error', err);
//
//     res.apiResponse({
//       post: item,
//     });
//
//   });
// }

/**
 * Get Post by ID
 */
// exports.update = function(req, res) {
//   Post.model.findById(req.params.id).exec(function(err, item) {
//
//     if (err) return res.apiError('database error', err);
//     if (!item) return res.apiError('not found');
//
//     var data = (req.method == 'POST') ? req.body : req.query;
//
//     item.getUpdateHandler(req).process(data, function(err) {
//
//       if (err) return res.apiError('create error', err);
//
//       res.apiResponse({
//         post: item,
//       });
//
//     });
//
//   });
// }

/**
 * Delete Post by ID
 */
// exports.remove = function(req, res) {
//   Post.model.findById(req.params.id).exec(function (err, item) {
//
//     if (err) return res.apiError('database error', err);
//     if (!item) return res.apiError('not found');
//
//     item.remove(function (err) {
//       if (err) return res.apiError('database error', err);
//
//       return res.apiResponse({
//         success: true,
//       });
//     });
//
//   });
// }
