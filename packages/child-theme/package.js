Package.describe({
  summary: "child-theme for custom css",
  version: '0.1.0',
  name: "child-theme"
});

Package.onUse(function (api) {

  api.use(['fourseven:scss', 'telescope-theme-hubble'], ['client']);

  api.addFiles([
    'lib/client/child.scss',
    ], ['client']);

});