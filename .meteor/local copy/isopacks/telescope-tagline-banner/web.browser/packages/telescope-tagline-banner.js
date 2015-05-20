(function () {

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// packages/telescope-tagline-banner/lib/tagline.js                                  //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
postListTopModules.push({                                                            // 1
  template: 'taglineBanner',                                                         // 2
  order: 1                                                                           // 3
});                                                                                  // 4
                                                                                     // 5
var showTaglineBanner = {                                                            // 6
  propertyName: 'showTaglineBanner',                                                 // 7
  propertySchema: {                                                                  // 8
    type: Boolean,                                                                   // 9
    optional: true,                                                                  // 10
    label: 'Tagline banner',                                                         // 11
    autoform: {                                                                      // 12
      group: 'general',                                                              // 13
      instructions: 'Show tagline on homepage.'                                      // 14
    }                                                                                // 15
  }                                                                                  // 16
};                                                                                   // 17
Settings.addToSchema(showTaglineBanner);                                             // 18
                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// packages/telescope-tagline-banner/package-i18n.js                                 //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
TAPi18n.packages["telescope-tagline-banner"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};
                                                                                     // 2
// define package's translation function (proxy to the i18next)                      // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                     // 4
// define the package's templates registrar                                          // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope-tagline-banner"); // 6
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                     // 8
// Record the list of templates prior to package load                                // 9
var _ = Package.underscore._;                                                        // 10
non_package_templates = _.keys(Template);                                            // 11
                                                                                     // 12
///////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// packages/telescope-tagline-banner/lib/client/templates/template.tagline_banner.js //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
                                                                                     // 1
Template.__checkName("taglineBanner");                                               // 2
Template["taglineBanner"] = new Template("Template.taglineBanner", (function() {     // 3
  var view = this;                                                                   // 4
  return Blaze.If(function() {                                                       // 5
    return Spacebars.call(view.lookup("showTaglineBanner"));                         // 6
  }, function() {                                                                    // 7
    return [ "\n    ", HTML.H3({                                                     // 8
      "class": "grid tagline"                                                        // 9
    }, HTML.SPAN(Blaze.View("lookup:getSetting", function() {                        // 10
      return Spacebars.mustache(view.lookup("getSetting"), "tagline");               // 11
    }))), "\n  " ];                                                                  // 12
  });                                                                                // 13
}));                                                                                 // 14
                                                                                     // 15
///////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// packages/telescope-tagline-banner/lib/client/templates/tagline_banner.js          //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
Template[getTemplate('taglineBanner')].helpers({                                     // 1
  showTaglineBanner: function () {                                                   // 2
    return !!Settings.get('tagline') && !!Settings.get('showTaglineBanner');         // 3
  }                                                                                  // 4
});                                                                                  // 5
                                                                                     // 6
                                                                                     // 7
///////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// packages/telescope-tagline-banner/Users/lukasfeitsma/Documents/Studie/CMD/Jaar2/B //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
var _ = Package.underscore._,                                                        // 1
    package_name = "telescope-tagline-banner",                                       // 2
    namespace = "telescope-tagline-banner";                                          // 3
                                                                                     // 4
if (package_name != "project") {                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                            // 6
}                                                                                    // 7
// integrate the fallback language translations                                      // 8
translations = {};                                                                   // 9
translations[namespace] = {"showTaglineBanner":"Show Tagline Banner"};               // 10
TAPi18n._loadLangFileObject("en", translations);                                     // 11
var package_templates = _.difference(_.keys(Template), non_package_templates);       // 12
                                                                                     // 13
for (var i = 0; i < package_templates.length; i++) {                                 // 14
  var package_template = package_templates[i];                                       // 15
                                                                                     // 16
  registerI18nTemplate(package_template);                                            // 17
}                                                                                    // 18
                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////

}).call(this);
