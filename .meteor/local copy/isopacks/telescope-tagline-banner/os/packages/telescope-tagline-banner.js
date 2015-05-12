(function () {

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// packages/telescope-tagline-banner/lib/tagline.js                    //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
postListTopModules.push({                                              // 1
  template: 'taglineBanner',                                           // 2
  order: 1                                                             // 3
});                                                                    // 4
                                                                       // 5
var showTaglineBanner = {                                              // 6
  propertyName: 'showTaglineBanner',                                   // 7
  propertySchema: {                                                    // 8
    type: Boolean,                                                     // 9
    optional: true,                                                    // 10
    label: 'Tagline banner',                                           // 11
    autoform: {                                                        // 12
      group: 'general',                                                // 13
      instructions: 'Show tagline on homepage.'                        // 14
    }                                                                  // 15
  }                                                                    // 16
};                                                                     // 17
Settings.addToSchema(showTaglineBanner);                               // 18
                                                                       // 19
/////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// packages/telescope-tagline-banner/package-i18n.js                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
TAPi18n.packages["telescope-tagline-banner"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};
                                                                       // 2
// define package's translation function (proxy to the i18next)        // 3
__ = TAPi18n._getPackageI18nextProxy("project");                       // 4
                                                                       // 5
/////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// packages/telescope-tagline-banner/Users/lukasfeitsma/Documents/Stud //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
var _ = Package.underscore._,                                          // 1
    package_name = "telescope-tagline-banner",                         // 2
    namespace = "telescope-tagline-banner";                            // 3
                                                                       // 4
if (package_name != "project") {                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;              // 6
}                                                                      // 7
// integrate the fallback language translations                        // 8
translations = {};                                                     // 9
translations[namespace] = {"showTaglineBanner":"Show Tagline Banner"}; // 10
TAPi18n._loadLangFileObject("en", translations);                       // 11
                                                                       // 12
/////////////////////////////////////////////////////////////////////////

}).call(this);
