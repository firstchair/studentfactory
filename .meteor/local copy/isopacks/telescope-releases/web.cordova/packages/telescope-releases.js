(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope-releases/package-i18n.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
TAPi18n.packages["telescope-releases"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"}; // 1
                                                                                                                     // 2
// define package's translation function (proxy to the i18next)                                                      // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                     // 4
// define the package's templates registrar                                                                          // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope-releases");                                       // 6
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                                                     // 8
// Record the list of templates prior to package load                                                                // 9
var _ = Package.underscore._;                                                                                        // 10
non_package_templates = _.keys(Template);                                                                            // 11
                                                                                                                     // 12
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope-releases/lib/releases.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Releases = new Meteor.Collection('releases');                                                                        // 1
                                                                                                                     // 2
heroModules.push({                                                                                                   // 3
  template: 'currentRelease'                                                                                         // 4
});                                                                                                                  // 5
                                                                                                                     // 6
preloadSubscriptions.push('currentRelease');                                                                         // 7
                                                                                                                     // 8
Meteor.startup(function () {                                                                                         // 9
  Releases.allow({                                                                                                   // 10
    insert: isAdminById,                                                                                             // 11
    update: isAdminById,                                                                                             // 12
    remove: isAdminById                                                                                              // 13
  });                                                                                                                // 14
});                                                                                                                  // 15
                                                                                                                     // 16
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope-releases/lib/client/templates/template.current_release.js                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("currentRelease");                                                                              // 2
Template["currentRelease"] = new Template("Template.currentRelease", (function() {                                   // 3
  var view = this;                                                                                                   // 4
  return Spacebars.With(function() {                                                                                 // 5
    return Spacebars.call(view.lookup("currentRelease"));                                                            // 6
  }, function() {                                                                                                    // 7
    return [ "\n    ", HTML.DIV({                                                                                    // 8
      "class": "current-release grid-module grid banner"                                                             // 9
    }, "\n      ", HTML.H4({                                                                                         // 10
      "class": "banner-heading"                                                                                      // 11
    }, Blaze.View("lookup:_", function() {                                                                           // 12
      return Spacebars.mustache(view.lookup("_"), "telescope_has_been_updated");                                     // 13
    })), "\n      ", HTML.DIV({                                                                                      // 14
      "class": "markdown"                                                                                            // 15
    }, "\n        ", Spacebars.include(view.lookupTemplate("markdown"), function() {                                 // 16
      return Blaze.View("lookup:notes", function() {                                                                 // 17
        return Spacebars.mustache(view.lookup("notes"));                                                             // 18
      });                                                                                                            // 19
    }), "\n      "), "\n      ", HTML.A({                                                                            // 20
      href: "#",                                                                                                     // 21
      "class": "release-dismiss banner-dismiss"                                                                      // 22
    }, "×"), "\n    "), "\n  " ];                                                                                    // 23
  });                                                                                                                // 24
}));                                                                                                                 // 25
                                                                                                                     // 26
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope-releases/lib/client/templates/current_release.js                                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Meteor.startup(function () {                                                                                         // 1
                                                                                                                     // 2
  Template[getTemplate('currentRelease')].created = function () {                                                    // 3
    this.release = function () {                                                                                     // 4
      return Releases.find({read: false}).fetch()[0];                                                                // 5
    }                                                                                                                // 6
  };                                                                                                                 // 7
                                                                                                                     // 8
  Template[getTemplate('currentRelease')].helpers({                                                                  // 9
    currentRelease: function () {                                                                                    // 10
      return Template.instance().release();                                                                          // 11
    }                                                                                                                // 12
  });                                                                                                                // 13
                                                                                                                     // 14
  Template[getTemplate('currentRelease')].events({                                                                   // 15
    'click .release-dismiss': function (event, instance) {                                                           // 16
      event.preventDefault();                                                                                        // 17
      Releases.update(instance.release()._id, {$set: {read: true}});                                                 // 18
    }                                                                                                                // 19
  })                                                                                                                 // 20
                                                                                                                     // 21
});                                                                                                                  // 22
                                                                                                                     // 23
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope-releases/Users/lukasfeitsma/Documents/Studie/CMD/Jaar2/Blok4/Project-X/klussenbank/packages/te //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope-releases",                                                                             // 2
    namespace = "telescope-releases";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
// integrate the fallback language translations                                                                      // 8
translations = {};                                                                                                   // 9
translations[namespace] = {"telescope_has_been_updated":"Telescope has been updated."};                              // 10
TAPi18n._loadLangFileObject("en", translations);                                                                     // 11
var package_templates = _.difference(_.keys(Template), non_package_templates);                                       // 12
                                                                                                                     // 13
for (var i = 0; i < package_templates.length; i++) {                                                                 // 14
  var package_template = package_templates[i];                                                                       // 15
                                                                                                                     // 16
  registerI18nTemplate(package_template);                                                                            // 17
}                                                                                                                    // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
