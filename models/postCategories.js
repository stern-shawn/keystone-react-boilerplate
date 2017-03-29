var keystone = require('keystone'),
    Types = keystone.Field.Types;

/**
 * Model for post categories
 * ==========
 */

var PostCategory = new keystone.List('PostCategory', {
  autokey: { from: 'name', path: 'key', unique: true },
  label: 'Categories',
});

PostCategory.add({
  name: { type: String, required: true },
});

PostCategory.relationship({ ref: 'Post', refPath: 'categories' });

PostCategory.track = true;
PostCategory.register();
