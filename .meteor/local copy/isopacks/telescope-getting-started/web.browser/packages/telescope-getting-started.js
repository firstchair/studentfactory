(function () {

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope-getting-started/package-i18n.js                                 //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
TAPi18n.packages["telescope-getting-started"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};
                                                                                      // 2
// define package's translation function (proxy to the i18next)                       // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                      // 4
// define the package's templates registrar                                           // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope-getting-started"); // 6
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                      // 8
// Record the list of templates prior to package load                                 // 9
var _ = Package.underscore._;                                                         // 10
non_package_templates = _.keys(Template);                                             // 11
                                                                                      // 12
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope-getting-started/lib/getting_started.js                          //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
addToPostSchema.push(                                                                 // 1
  {                                                                                   // 2
    propertyName: 'dummySlug',                                                        // 3
    propertySchema: {                                                                 // 4
      type: String,                                                                   // 5
      optional: true,                                                                 // 6
      autoform: {                                                                     // 7
        omit: true                                                                    // 8
      }                                                                               // 9
    }                                                                                 // 10
  }                                                                                   // 11
);                                                                                    // 12
                                                                                      // 13
addToPostSchema.push(                                                                 // 14
  {                                                                                   // 15
    propertyName: 'isDummy',                                                          // 16
    propertySchema: {                                                                 // 17
      type: Boolean,                                                                  // 18
      optional: true,                                                                 // 19
      autoform: {                                                                     // 20
        omit: true                                                                    // 21
      }                                                                               // 22
    }                                                                                 // 23
  }                                                                                   // 24
);                                                                                    // 25
                                                                                      // 26
addToCommentsSchema.push(                                                             // 27
  {                                                                                   // 28
    propertyName: 'isDummy',                                                          // 29
    propertySchema: {                                                                 // 30
      type: Boolean,                                                                  // 31
      optional: true,                                                                 // 32
      autoform: {                                                                     // 33
        omit: true                                                                    // 34
      }                                                                               // 35
    }                                                                                 // 36
  }                                                                                   // 37
);                                                                                    // 38
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope-getting-started/Users/lukasfeitsma/Documents/Studie/CMD/Jaar2/B //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope-getting-started",                                       // 2
    namespace = "telescope-getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
// integrate the fallback language translations                                       // 8
translations = {};                                                                    // 9
translations[namespace] = {"translation_key":"translation string"};                   // 10
TAPi18n._loadLangFileObject("en", translations);                                      // 11
var package_templates = _.difference(_.keys(Template), non_package_templates);        // 12
                                                                                      // 13
for (var i = 0; i < package_templates.length; i++) {                                  // 14
  var package_template = package_templates[i];                                        // 15
                                                                                      // 16
  registerI18nTemplate(package_template);                                             // 17
}                                                                                     // 18
                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
