(function () {

/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// packages/telescope-update-prompt/lib/client/update.js                               //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////
                                                                                       //
compareVersions = function (v1, v2) { // return true if v2 is newer than v1            // 1
  var v1Array = v1.split('.');                                                         // 2
  var v2Array = v2.split('.');                                                         // 3
  var isGreater = false;                                                               // 4
  // go through each segment of v2 and stop if we find one that's higher               // 5
  // than the equivalent segment of v1; else return false                              // 6
  v2Array.some( function (value, index) {                                              // 7
    if (parseInt(value) > parseInt(v1Array[index])) {                                  // 8
      // v2 segment > v1 segment                                                       // 9
      isGreater = true;                                                                // 10
      return true; // stop comparison                                                  // 11
    } else if (parseInt(value) < parseInt(v1Array[index])) {                           // 12
      // v2 segment < v1 segment                                                       // 13
      isGreater = false;                                                               // 14
      return true; // stop comparison                                                  // 15
    }                                                                                  // 16
    return false; // continue comparison as long as both values are equal              // 17
  });                                                                                  // 18
  return isGreater;                                                                    // 19
}                                                                                      // 20
                                                                                       // 21
Meteor.startup(function () {                                                           // 22
  Session.set('updateVersion', null);                                                  // 23
                                                                                       // 24
  Meteor.call('phoneHome', function (error, result) {                                  // 25
    // console.log(error)                                                              // 26
    // console.log(result)                                                             // 27
    if(result){                                                                        // 28
      var currentVersion = telescopeVersion;                                           // 29
      var newVersion = result.content;                                                 // 30
      var message = "";                                                                // 31
      if (compareVersions(currentVersion, newVersion)){                                // 32
        Session.set('updateVersion', newVersion);                                      // 33
      }                                                                                // 34
    }                                                                                  // 35
  });                                                                                  // 36
});                                                                                    // 37
                                                                                       // 38
heroModules.push({                                                                     // 39
  template: 'updateBanner'                                                             // 40
});                                                                                    // 41
/////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// packages/telescope-update-prompt/lib/client/templates/template.update_banner.js     //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////
                                                                                       //
                                                                                       // 1
Template.__checkName("updateBanner");                                                  // 2
Template["updateBanner"] = new Template("Template.updateBanner", (function() {         // 3
  var view = this;                                                                     // 4
  return Blaze.If(function() {                                                         // 5
    return Spacebars.call(view.lookup("showBanner"));                                  // 6
  }, function() {                                                                      // 7
    return [ "\n    ", HTML.DIV({                                                      // 8
      "class": "update-banner grid-module grid banner"                                 // 9
    }, "\n      ", HTML.H3({                                                           // 10
      "class": "update-version"                                                        // 11
    }, Blaze.View("lookup:version", function() {                                       // 12
      return Spacebars.mustache(view.lookup("version"));                               // 13
    })), "\n      ", HTML.DIV({                                                        // 14
      "class": "update-content"                                                        // 15
    }, "\n        ", HTML.H4({                                                         // 16
      "class": "update-prompt"                                                         // 17
    }, "A new version of Telescope is available."), "\n        ", HTML.P({             // 18
      "class": "update-message"                                                        // 19
    }, "\n          You have: ", Blaze.View("lookup:currentVersion", function() {      // 20
      return Spacebars.mustache(view.lookup("currentVersion"));                        // 21
    }), ". Note: this message is only displayed to admins. \n          ", HTML.A({     // 22
      href: "https://github.com/TelescopeJS/Telescope/blob/master/History.md",         // 23
      target: "_blank"                                                                 // 24
    }, "View changelog"), " | \n          ", HTML.A({                                  // 25
      href: "http://www.telesc.pe/docs/getting-started/updating/",                     // 26
      target: "_blank"                                                                 // 27
    }, "View update instructions"), "\n          "), "\n      "), "\n    "), "\n  " ]; // 28
  });                                                                                  // 29
}));                                                                                   // 30
                                                                                       // 31
/////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// packages/telescope-update-prompt/lib/client/templates/update_banner.js              //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////
                                                                                       //
Template[getTemplate('updateBanner')].helpers({                                        // 1
  showBanner: function () {                                                            // 2
    return Session.get('updateVersion');                                               // 3
  },                                                                                   // 4
  version: function () {                                                               // 5
    return Session.get('updateVersion');                                               // 6
  },                                                                                   // 7
  currentVersion: function () {                                                        // 8
    return telescopeVersion;                                                           // 9
  },                                                                                   // 10
  message: function () {                                                               // 11
    return Session.get('updateMessage');                                               // 12
  }                                                                                    // 13
});                                                                                    // 14
/////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
