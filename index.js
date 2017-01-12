module.exports = {
  extend: 'apostrophe-module',
  name: 'styleguide',
  alias: 'styleguide',
  afterConstruct: function(self) {

    // Vendors first
    self.pushAsset('stylesheet', 'vendor/prism', { when: 'always' });
    self.pushAsset('script', 'vendor/prism', { when: 'always' });

    // Core
    self.pushAsset('stylesheet', 'styleguide', { when: 'always' });
    self.pushAsset('script', 'styleguide', { when: 'always' });
  }
};
