var keystone = require('keystone'),
    Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List('Post', {
  map: {
    name: 'title',
  },
  autokey: {
    path: 'slug',
    from: 'title',
    unique: true,
  },
});

Post.add({
  title: {
    type: String,
    required: true,
  },
  state: {
    type: Types.Select,
    options: 'draft, published, archived',
    default: 'draft',
    index: true,
  },
  author: {
    type: Types.Relationship,
    ref: 'User',
    index: true,
  },
  publishedDate: {
    type: Types.Date,
    index: true,
    dependsOn: {
      state: 'published',
    },
  },
  image: {
    type: Types.CloudinaryImage,
    folder: 'keystoneBlog/posts/images/',
    allowedTypes: 'image/jpeg,image/svg+xml,image/png',
    autoCleanup : true,
  },
  content: {
    brief: {
      type: Types.Markdown,
      height: 150,
    },
    extended: {
      type: Types.Markdown,
      height: 400,
    },
  },
  // categories: { type: Types.Relationship, ref: 'PostCategory', many: true }
});

Post.schema.virtual('content.full').get(function () {
  return this.content.extended || this.content.brief;
});

Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Post.register();
