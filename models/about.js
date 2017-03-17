var keystone = require('keystone'),
    Types = keystone.Field.Types;

/**
 * About Page Model, hacky version of singleton until support is released in full
 * Keystone 4.0...
 * ==========
 */

var AboutPage = new keystone.List('AboutPage', {
  map: {
    name: 'title',
  },
  autokey: {
    path: 'slug',
    from: 'title',
    unique: true,
  },
  nocreate: true,
  nodelete: true,
});

AboutPage.add({
  title: {
    type: String,
    required: true,
    default: 'About Page'
  },
  heroImage: {
    type: Types.CloudinaryImage,
    folder: 'keystoneBlog/about/image/',
    allowedTypes: 'image/jpeg,image/svg+xml,image/png',
    autoCleanup : true,
  },
  content: {
    extended: {
      type: Types.Markdown,
      height: 400,
    },
  },
});

AboutPage.defaultColumns = 'title';
AboutPage.register();
