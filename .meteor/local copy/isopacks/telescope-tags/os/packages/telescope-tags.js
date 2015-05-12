(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/lib/categories.js                                                                     //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// category schema                                                                                               // 1
categorySchema = new SimpleSchema({                                                                              // 2
  name: {                                                                                                        // 3
    type: String                                                                                                 // 4
  },                                                                                                             // 5
  description: {                                                                                                 // 6
    type: String,                                                                                                // 7
    optional: true,                                                                                              // 8
    autoform: {                                                                                                  // 9
      rows: 3                                                                                                    // 10
    }                                                                                                            // 11
  },                                                                                                             // 12
  order: {                                                                                                       // 13
    type: Number,                                                                                                // 14
    optional: true                                                                                               // 15
  },                                                                                                             // 16
  slug: {                                                                                                        // 17
    type: String,                                                                                                // 18
    optional: true                                                                                               // 19
  },                                                                                                             // 20
  image: {                                                                                                       // 21
    type: String,                                                                                                // 22
    optional: true                                                                                               // 23
  }                                                                                                              // 24
});                                                                                                              // 25
                                                                                                                 // 26
Categories = new Meteor.Collection("categories");                                                                // 27
Categories.attachSchema(categorySchema);                                                                         // 28
                                                                                                                 // 29
Categories.before.insert(function (userId, doc) {                                                                // 30
  // if no slug has been provided, generate one                                                                  // 31
  if (!doc.slug)                                                                                                 // 32
    doc.slug = slugify(doc.name);                                                                                // 33
});                                                                                                              // 34
                                                                                                                 // 35
// category post list parameters                                                                                 // 36
viewParameters.category = function (terms) {                                                                     // 37
  var categoryId = Categories.findOne({slug: terms.category})._id;                                               // 38
  return {                                                                                                       // 39
    find: {'categories': {$in: [categoryId]}} ,                                                                  // 40
    options: {sort: {sticky: -1, score: -1}} // for now categories views default to the "top" view               // 41
  };                                                                                                             // 42
}                                                                                                                // 43
                                                                                                                 // 44
Meteor.startup(function () {                                                                                     // 45
  Categories.allow({                                                                                             // 46
    insert: isAdminById,                                                                                         // 47
    update: isAdminById,                                                                                         // 48
    remove: isAdminById                                                                                          // 49
  });                                                                                                            // 50
});                                                                                                              // 51
                                                                                                                 // 52
getPostCategories = function (post) {                                                                            // 53
  return !!post.categories ? Categories.find({_id: {$in: post.categories}}).fetch() : [];                        // 54
}                                                                                                                // 55
                                                                                                                 // 56
getCategoryUrl = function(slug){                                                                                 // 57
  return getSiteUrl()+'category/'+slug;                                                                          // 58
};                                                                                                               // 59
                                                                                                                 // 60
// add callback that adds categories CSS classes                                                                 // 61
postClassCallbacks.push(function (post, postClass){                                                              // 62
  var classArray = _.map(getPostCategories(post), function (category){return "category-"+category.slug});        // 63
  return postClass + " " + classArray.join(' ');                                                                 // 64
});                                                                                                              // 65
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/lib/custom_fields.js                                                                  //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
addToPostSchema.push(                                                                                            // 1
  {                                                                                                              // 2
    propertyName: 'categories',                                                                                  // 3
    propertySchema: {                                                                                            // 4
      type: [String],                                                                                            // 5
      optional: true,                                                                                            // 6
      editable: true,                                                                                            // 7
      autoform: {                                                                                                // 8
        editable: true,                                                                                          // 9
        noselect: true,                                                                                          // 10
        options: function () {                                                                                   // 11
          var categories = Categories.find().map(function (category) {                                           // 12
            return {                                                                                             // 13
              value: category._id,                                                                               // 14
              label: category.name                                                                               // 15
            }                                                                                                    // 16
          });                                                                                                    // 17
          return categories;                                                                                     // 18
        }                                                                                                        // 19
      }                                                                                                          // 20
    }                                                                                                            // 21
  }                                                                                                              // 22
);                                                                                                               // 23
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/lib/hooks.js                                                                          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
adminMenu.push({                                                                                                 // 1
  route: 'categories',                                                                                           // 2
  label: 'Categories',                                                                                           // 3
  description: 'add_and_remove_categories'                                                                       // 4
});                                                                                                              // 5
                                                                                                                 // 6
// push "categories" modules to postHeading                                                                      // 7
postHeading.push({                                                                                               // 8
  template: 'postCategories',                                                                                    // 9
  order: 30                                                                                                      // 10
});                                                                                                              // 11
                                                                                                                 // 12
// push "categoriesMenu" template to primaryNav                                                                  // 13
primaryNav.push({                                                                                                // 14
  template: 'categoriesMenu',                                                                                    // 15
  order: 50                                                                                                      // 16
});                                                                                                              // 17
                                                                                                                 // 18
mobileNav.push({                                                                                                 // 19
  template: 'categoriesMenu',                                                                                    // 20
  order: 10                                                                                                      // 21
});                                                                                                              // 22
                                                                                                                 // 23
// we want to wait until categories are all loaded to load the rest of the app                                   // 24
preloadSubscriptions.push('categories');                                                                         // 25
                                                                                                                 // 26
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/package-i18n.js                                                                       //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
TAPi18n.packages["telescope-tags"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"}; // 1
                                                                                                                 // 2
// define package's translation function (proxy to the i18next)                                                  // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                 // 4
                                                                                                                 // 5
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/lib/server/publications.js                                                            //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Meteor.publish('categories', function() {                                                                        // 1
  if(can.viewById(this.userId)){                                                                                 // 2
    return Categories.find();                                                                                    // 3
  }                                                                                                              // 4
  return [];                                                                                                     // 5
});                                                                                                              // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/lib/server/hooks.js                                                                   //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// make sure all categories in the post.categories array exist in the db                                         // 1
var checkCategories = function (post) {                                                                          // 2
                                                                                                                 // 3
  // if there are not categories, stop here                                                                      // 4
  if (!post.categories || post.categories.length === 0) {                                                        // 5
    return;                                                                                                      // 6
  }                                                                                                              // 7
                                                                                                                 // 8
  // check how many of the categories given also exist in the db                                                 // 9
  var categoryCount = Categories.find({_id: {$in: post.categories}}).count();                                    // 10
                                                                                                                 // 11
  if (post.categories.length !== categoryCount) {                                                                // 12
    throw new Meteor.Error('invalid_category', i18n.t('invalid_category'));                                      // 13
  }                                                                                                              // 14
};                                                                                                               // 15
                                                                                                                 // 16
postSubmitMethodCallbacks.push(function (post) {                                                                 // 17
  checkCategories(post);                                                                                         // 18
                                                                                                                 // 19
  return post;                                                                                                   // 20
});                                                                                                              // 21
                                                                                                                 // 22
postEditMethodCallbacks.push(function (updateObject) {                                                           // 23
  var post = updateObject.$set;                                                                                  // 24
  checkCategories(post);                                                                                         // 25
                                                                                                                 // 26
  return updateObject;                                                                                           // 27
});                                                                                                              // 28
                                                                                                                 // 29
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-tags/Users/lukasfeitsma/Documents/Studie/CMD/Jaar2/Blok4/Project-X/klussenbank/packages/te //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _ = Package.underscore._,                                                                                    // 1
    package_name = "telescope-tags",                                                                             // 2
    namespace = "telescope-tags";                                                                                // 3
                                                                                                                 // 4
if (package_name != "project") {                                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                        // 6
}                                                                                                                // 7
// integrate the fallback language translations                                                                  // 8
translations = {};                                                                                               // 9
translations[namespace] = {"categories":"Categoriën","add_and_remove_categories":"Voeg toe en verwijderen categoriën.","all_categories":"Alle categoriën","invalid_category":"Sorry, dit is geen geldige categorie."};
TAPi18n._loadLangFileObject("en", translations);                                                                 // 11
                                                                                                                 // 12
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
