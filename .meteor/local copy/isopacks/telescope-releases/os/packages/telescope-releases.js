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
                                                                                                                     // 5
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
// packages/telescope-releases/lib/server/publications.js                                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Meteor.publish('currentRelease', function() {                                                                        // 1
  if(isAdminById(this.userId)){                                                                                      // 2
    return Releases.find({}, {sort: {createdAt: -1}, limit: 1});                                                     // 3
  }                                                                                                                  // 4
  return [];                                                                                                         // 5
});                                                                                                                  // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope-releases/lib/server/import_releases.js                                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
importRelease = function (number) {                                                                                  // 1
  var releaseNotes = Assets.getText("releases/" + number + ".md");                                                   // 2
                                                                                                                     // 3
  if (!Releases.findOne({number: number})) {                                                                         // 4
                                                                                                                     // 5
    release = {                                                                                                      // 6
      number: number,                                                                                                // 7
      notes: releaseNotes,                                                                                           // 8
      createdAt: new Date(),                                                                                         // 9
      read: false                                                                                                    // 10
    }                                                                                                                // 11
    Releases.insert(release);                                                                                        // 12
                                                                                                                     // 13
  } else {                                                                                                           // 14
                                                                                                                     // 15
    // if release note already exists, update its content in case it's been updated                                  // 16
    Releases.update({number: number}, {$set: {notes: releaseNotes}})                                                 // 17
                                                                                                                     // 18
  }                                                                                                                  // 19
};                                                                                                                   // 20
                                                                                                                     // 21
Meteor.startup(function () {                                                                                         // 22
                                                                                                                     // 23
  importRelease('0.11.0');                                                                                           // 24
  importRelease('0.11.1');                                                                                           // 25
  importRelease('0.12.0');                                                                                           // 26
  importRelease('0.13.0');                                                                                           // 27
  importRelease('0.14.0');                                                                                           // 28
  importRelease('0.14.1');                                                                                           // 29
  importRelease('0.14.2');                                                                                           // 30
  importRelease('0.14.3');                                                                                           // 31
  importRelease('0.15.0');                                                                                           // 32
  importRelease('0.15.1');                                                                                           // 33
                                                                                                                     // 34
  // if this is before the first run, mark all release notes as read to avoid showing them                           // 35
  if (!Events.findOne({name: 'firstRun'})) {                                                                         // 36
    var r = Releases.update({}, {$set: {read: true}}, {multi: true});                                                // 37
  }                                                                                                                  // 38
                                                                                                                     // 39
});                                                                                                                  // 40
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
                                                                                                                     // 12
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
