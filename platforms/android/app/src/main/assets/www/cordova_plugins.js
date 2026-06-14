cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "gdevelop-cordova-plugin-screen-orientation.screenorientation",
      "file": "plugins/gdevelop-cordova-plugin-screen-orientation/www/screenorientation.js",
      "pluginId": "gdevelop-cordova-plugin-screen-orientation",
      "clobbers": [
        "cordova.plugins.screenorientation",
        "screen.orientation"
      ]
    },
    {
      "id": "@gdevelop/cordova-plugin-safariviewcontroller.SafariViewController",
      "file": "plugins/@gdevelop/cordova-plugin-safariviewcontroller/www/SafariViewController.js",
      "pluginId": "@gdevelop/cordova-plugin-safariviewcontroller",
      "clobbers": [
        "SafariViewController"
      ]
    }
  ];
  module.exports.metadata = {
    "es6-promise-plugin": "4.2.2",
    "gdevelop-cordova-plugin-screen-orientation": "3.0.4-patch.1",
    "@gdevelop/cordova-plugin-safariviewcontroller": "2.1.0"
  };
});