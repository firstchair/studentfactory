(function () {

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope-subscribe-to-posts/package-i18n.js                                      //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
TAPi18n.packages["telescope-subscribe-to-posts"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};
                                                                                              // 2
// define package's translation function (proxy to the i18next)                               // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                              // 4
                                                                                              // 5
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope-subscribe-to-posts/lib/subscribe-to-posts.js                            //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
threadModules.push(                                                                           // 1
  {                                                                                           // 2
    template: 'postSubscribe',                                                                // 3
    order: 10                                                                                 // 4
  }                                                                                           // 5
);                                                                                            // 6
                                                                                              // 7
addToPostSchema.push(                                                                         // 8
  {                                                                                           // 9
    propertyName: 'subscribers',                                                              // 10
    propertySchema: {                                                                         // 11
      type: [String],                                                                         // 12
      optional: true,                                                                         // 13
      autoform: {                                                                             // 14
        omit: true                                                                            // 15
      }                                                                                       // 16
    }                                                                                         // 17
  }                                                                                           // 18
);                                                                                            // 19
                                                                                              // 20
addToPostSchema.push(                                                                         // 21
  {                                                                                           // 22
    propertyName: 'subscriberCount',                                                          // 23
    propertySchema: {                                                                         // 24
      type: Number,                                                                           // 25
      optional: true,                                                                         // 26
      autoform: {                                                                             // 27
        omit: true                                                                            // 28
      }                                                                                       // 29
    }                                                                                         // 30
  }                                                                                           // 31
);                                                                                            // 32
                                                                                              // 33
userProfileEdit.push(                                                                         // 34
  {                                                                                           // 35
    template: 'userSubscribedPosts',                                                          // 36
    order: 5                                                                                  // 37
  }                                                                                           // 38
);                                                                                            // 39
                                                                                              // 40
viewParameters.userSubscribedPosts = function (terms) {                                       // 41
  var user = Meteor.users.findOne(terms.userId),                                              // 42
      postsIds = [];                                                                          // 43
                                                                                              // 44
  if (user.subscribedItems && user.subscribedItems.Posts)                                     // 45
    postsIds = _.pluck(user.subscribedItems.Posts, "itemId");                                 // 46
                                                                                              // 47
  return {                                                                                    // 48
    find: {_id: {$in: postsIds}},                                                             // 49
    options: {limit: 5, sort: {postedAt: -1}}                                                 // 50
  };                                                                                          // 51
}                                                                                             // 52
                                                                                              // 53
var hasSubscribedItem = function (item, user) {                                               // 54
  return item.subscribers && item.subscribers.indexOf(user._id) != -1;                        // 55
};                                                                                            // 56
                                                                                              // 57
var addSubscribedItem = function (userId, item, collection) {                                 // 58
  var field = 'subscribedItems.' + collection;                                                // 59
  var add = {};                                                                               // 60
  add[field] = item;                                                                          // 61
  Meteor.users.update({_id: userId}, {                                                        // 62
    $addToSet: add                                                                            // 63
  });                                                                                         // 64
};                                                                                            // 65
                                                                                              // 66
var removeSubscribedItem = function (userId, itemId, collection) {                            // 67
  var field = 'subscribedItems.' + collection;                                                // 68
  var remove = {};                                                                            // 69
  remove[field] = {itemId: itemId};                                                           // 70
  Meteor.users.update({_id: userId}, {                                                        // 71
    $pull: remove                                                                             // 72
  });                                                                                         // 73
};                                                                                            // 74
                                                                                              // 75
subscribeItem = function (collection, itemId, user) {                                         // 76
  var item = collection.findOne(itemId),                                                      // 77
      collectionName = collection._name.slice(0,1).toUpperCase() + collection._name.slice(1); // 78
                                                                                              // 79
  if (!user || !item || hasSubscribedItem(item, user))                                        // 80
    return false;                                                                             // 81
                                                                                              // 82
  // author can't subscribe item                                                              // 83
  if (item.userId && item.userId === user._id)                                                // 84
    return false                                                                              // 85
                                                                                              // 86
  // Subscribe                                                                                // 87
  var result = collection.update({_id: itemId, subscribers: { $ne: user._id }}, {             // 88
    $addToSet: {subscribers: user._id},                                                       // 89
    $inc: {subscriberCount: 1}                                                                // 90
  });                                                                                         // 91
                                                                                              // 92
  if (result > 0) {                                                                           // 93
    // Add item to list of subscribed items                                                   // 94
    var obj = {                                                                               // 95
      itemId: item._id,                                                                       // 96
      subscribedAt: new Date()                                                                // 97
    };                                                                                        // 98
    addSubscribedItem(user._id, obj, collectionName);                                         // 99
  }                                                                                           // 100
                                                                                              // 101
  return true;                                                                                // 102
};                                                                                            // 103
                                                                                              // 104
unsubscribeItem = function (collection, itemId, user) {                                       // 105
  var user = Meteor.user(),                                                                   // 106
      item = collection.findOne(itemId),                                                      // 107
      collectionName = collection._name.slice(0,1).toUpperCase()+collection._name.slice(1);   // 108
                                                                                              // 109
  if (!user || !item  || !hasSubscribedItem(item, user))                                      // 110
    return false;                                                                             // 111
                                                                                              // 112
  // Unsubscribe                                                                              // 113
  var result = collection.update({_id: itemId, subscribers: user._id }, {                     // 114
    $pull: {subscribers: user._id},                                                           // 115
    $inc: {subscriberCount: -1}                                                               // 116
  });                                                                                         // 117
                                                                                              // 118
  if (result > 0) {                                                                           // 119
    // Remove item from list of subscribed items                                              // 120
    removeSubscribedItem(user._id, itemId, collectionName);                                   // 121
  }                                                                                           // 122
  return true;                                                                                // 123
};                                                                                            // 124
                                                                                              // 125
Meteor.methods({                                                                              // 126
  subscribePost: function(postId) {                                                           // 127
    return subscribeItem.call(this, Posts, postId, Meteor.user());                            // 128
  },                                                                                          // 129
  unsubscribePost: function(postId) {                                                         // 130
    return unsubscribeItem.call(this, Posts, postId, Meteor.user());                          // 131
  }                                                                                           // 132
});                                                                                           // 133
                                                                                              // 134
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope-subscribe-to-posts/lib/server/publications.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
Meteor.publish('userSubscribedPosts', function(terms) {                                       // 1
  var parameters = getPostsParameters(terms);                                                 // 2
  var posts = Posts.find(parameters.find, parameters.options);                                // 3
  return posts;                                                                               // 4
});                                                                                           // 5
                                                                                              // 6
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope-subscribe-to-posts/Users/lukasfeitsma/Documents/Studie/CMD/Jaar2/Blok4/ //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "telescope-subscribe-to-posts",                                            // 2
    namespace = "telescope-subscribe-to-posts";                                               // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
// integrate the fallback language translations                                               // 8
translations = {};                                                                            // 9
translations[namespace] = {"subscribed_posts":"Projecten die jij volgt","subscribe_to_thread":"Volg project","unsubscribe_from_thread":"Ontvolg dit project"};
TAPi18n._loadLangFileObject("en", translations);                                              // 11
                                                                                              // 12
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
