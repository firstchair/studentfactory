(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope-kadira/package-i18n.js                                                                       //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
TAPi18n.packages["telescope-kadira"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"}; // 1
                                                                                                                   // 2
// define package's translation function (proxy to the i18next)                                                    // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                   // 4
                                                                                                                   // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope-kadira/lib/kadira-settings.js                                                                //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var kadiraAppIdProperty = {                                                                                        // 1
  propertyName: 'kadiraAppId',                                                                                     // 2
  propertyGroup: 'kadira',                                                                                         // 3
  propertySchema: {                                                                                                // 4
    type: String,                                                                                                  // 5
    optional: true,                                                                                                // 6
    autoform: {                                                                                                    // 7
      group: 'kadira'                                                                                              // 8
    }                                                                                                              // 9
  }                                                                                                                // 10
};                                                                                                                 // 11
Settings.addToSchema(kadiraAppIdProperty);                                                                         // 12
                                                                                                                   // 13
var kadiraAppSecretProperty = {                                                                                    // 14
  propertyName: 'kadiraAppSecret',                                                                                 // 15
  propertyGroup: 'kadira',                                                                                         // 16
  propertySchema: {                                                                                                // 17
    type: String,                                                                                                  // 18
    optional: true,                                                                                                // 19
    autoform: {                                                                                                    // 20
      group: 'kadira',                                                                                             // 21
      private: true                                                                                                // 22
    }                                                                                                              // 23
  }                                                                                                                // 24
};                                                                                                                 // 25
Settings.addToSchema(kadiraAppSecretProperty);                                                                     // 26
                                                                                                                   // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope-kadira/lib/server/kadira.js                                                                  //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Meteor.startup(function() {                                                                                        // 1
  if(!!Settings.get('kadiraAppId') && !!Settings.get('kadiraAppSecret')){                                          // 2
    Kadira.connect(Settings.get('kadiraAppId'), Settings.get('kadiraAppSecret'));                                  // 3
  }                                                                                                                // 4
});                                                                                                                // 5
                                                                                                                   // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope-kadira/Users/lukasfeitsma/Documents/Studie/CMD/Jaar2/Blok4/Project-X/klussenbank/packages/te //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope-kadira",                                                                             // 2
    namespace = "telescope-kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
// integrate the fallback language translations                                                                    // 8
translations = {};                                                                                                 // 9
translations[namespace] = {"kadiraAppId":"Kadira App ID","kadiraAppSecret":"Kadira App Secret"};                   // 10
TAPi18n._loadLangFileObject("en", translations);                                                                   // 11
                                                                                                                   // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
