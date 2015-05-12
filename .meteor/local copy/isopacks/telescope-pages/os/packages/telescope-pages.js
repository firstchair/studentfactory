(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-pages/lib/pages.js                                                                        //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Pages = {};                                                                                                     // 1
                                                                                                                // 2
Pages.schema = new SimpleSchema({                                                                               // 3
  title: {                                                                                                      // 4
    type: String                                                                                                // 5
  },                                                                                                            // 6
  slug: {                                                                                                       // 7
    type: String,                                                                                               // 8
    optional: true                                                                                              // 9
  },                                                                                                            // 10
  content: {                                                                                                    // 11
    type: String,                                                                                               // 12
    autoform: {                                                                                                 // 13
      rows: 10                                                                                                  // 14
    }                                                                                                           // 15
  },                                                                                                            // 16
  order: {                                                                                                      // 17
    type: Number,                                                                                               // 18
    optional: true                                                                                              // 19
  }                                                                                                             // 20
});                                                                                                             // 21
                                                                                                                // 22
Pages.collection = new Meteor.Collection('pages');                                                              // 23
Pages.collection.attachSchema(Pages.schema);                                                                    // 24
                                                                                                                // 25
Pages.collection.before.insert(function (userId, doc) {                                                         // 26
  // if no slug has been provided, generate one                                                                 // 27
  if (!doc.slug)                                                                                                // 28
    doc.slug = slugify(doc.title);                                                                              // 29
});                                                                                                             // 30
                                                                                                                // 31
primaryNav.push({                                                                                               // 32
  template: "pagesMenu",                                                                                        // 33
  order: 5                                                                                                      // 34
});                                                                                                             // 35
                                                                                                                // 36
mobileNav.push({                                                                                                // 37
  template: 'pagesMenu',                                                                                        // 38
  order: 5                                                                                                      // 39
});                                                                                                             // 40
                                                                                                                // 41
Meteor.startup(function () {                                                                                    // 42
  Pages.collection.allow({                                                                                      // 43
    insert: isAdminById,                                                                                        // 44
    update: isAdminById,                                                                                        // 45
    remove: isAdminById                                                                                         // 46
  });                                                                                                           // 47
                                                                                                                // 48
  Meteor.methods({                                                                                              // 49
    insertPage: function(pageTitle, pageContent){                                                               // 50
      return Feeds.insert({title: pageTitle, content: pageContent});                                            // 51
    }                                                                                                           // 52
  });                                                                                                           // 53
});                                                                                                             // 54
                                                                                                                // 55
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-pages/lib/server/publications.js                                                          //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Meteor.publish('pages', function() {                                                                            // 1
  return Pages.collection.find({});                                                                             // 2
});                                                                                                             // 3
                                                                                                                // 4
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-pages/Users/lukasfeitsma/Documents/Studie/CMD/Jaar2/Blok4/Project-X/klussenbank/packages/ //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","cdn_path":null}); // 8
TAPi18n.languages_names["en"] = ["English","English"];                                                          // 9
// integrate the fallback language translations                                                                 // 10
translations = {};                                                                                              // 11
translations[namespace] = {"manage_static_pages":"Beheer statische pagina's"};                                  // 12
TAPi18n._loadLangFileObject("en", translations);                                                                // 13
                                                                                                                // 14
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
