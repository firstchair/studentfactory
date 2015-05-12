(function () {

/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// packages/telescope-search/lib/search.js                                             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////
                                                                                       //
// push "search" template to primaryNav                                                // 1
primaryNav.push({                                                                      // 2
  template: 'search',                                                                  // 3
  order: 100                                                                           // 4
});                                                                                    // 5
                                                                                       // 6
mobileNav.push({                                                                       // 7
  template: 'search',                                                                  // 8
  order: 1                                                                             // 9
});                                                                                    // 10
                                                                                       // 11
adminMenu.push({                                                                       // 12
  route: 'searchLogs',                                                                 // 13
  label: 'search_logs',                                                                // 14
  description: 'see_what_people_are_searching_for'                                     // 15
});                                                                                    // 16
                                                                                       // 17
registerElementColor('.search-field', 'secondaryContrastColor');                       // 18
                                                                                       // 19
Searches = new Meteor.Collection("searches", {                                         // 20
  schema: new SimpleSchema({                                                           // 21
    _id: {                                                                             // 22
      type: String,                                                                    // 23
      optional: true                                                                   // 24
    },                                                                                 // 25
    timestamp: {                                                                       // 26
      type: Date                                                                       // 27
    },                                                                                 // 28
    keyword: {                                                                         // 29
      type: String                                                                     // 30
    }                                                                                  // 31
  })                                                                                   // 32
});                                                                                    // 33
                                                                                       // 34
Meteor.startup(function() {                                                            // 35
  Searches.allow({                                                                     // 36
    update: isAdminById                                                                // 37
  , remove: isAdminById                                                                // 38
  });                                                                                  // 39
});                                                                                    // 40
                                                                                       // 41
// search post list parameters                                                         // 42
viewParameters.search = function (terms, baseParameters) {                             // 43
  // if query is empty, just return parameters that will result in an empty collection // 44
  if(typeof terms.query === 'undefined' || !terms.query)                               // 45
    return {find:{_id: 0}}                                                             // 46
                                                                                       // 47
  var parameters = deepExtend(true, baseParameters, {                                  // 48
    find: {                                                                            // 49
      $or: [                                                                           // 50
        {title: {$regex: terms.query, $options: 'i'}},                                 // 51
        {url: {$regex: terms.query, $options: 'i'}},                                   // 52
        {body: {$regex: terms.query, $options: 'i'}}                                   // 53
      ]                                                                                // 54
    }                                                                                  // 55
  });                                                                                  // 56
  return parameters;                                                                   // 57
}                                                                                      // 58
                                                                                       // 59
/////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// packages/telescope-search/lib/server/log_search.js                                  //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////
                                                                                       //
var logSearch = function (keyword) {                                                   // 1
  Searches.insert({                                                                    // 2
    timestamp: new Date(),                                                             // 3
    keyword: keyword                                                                   // 4
  });                                                                                  // 5
};                                                                                     // 6
                                                                                       // 7
Meteor.methods({                                                                       // 8
  logSearch: function (keyword) {                                                      // 9
    logSearch.call(this, keyword);                                                     // 10
  }                                                                                    // 11
});                                                                                    // 12
/////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// packages/telescope-search/lib/server/publications.js                                //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////
                                                                                       //
Meteor.publish('searches', function(limit) {                                           // 1
  var limit = typeof limit === undefined ? 20 : limit;                                 // 2
  if(isAdminById(this.userId)){                                                        // 3
   return Searches.find({}, {limit: limit, sort: {timestamp: -1}});                    // 4
  }                                                                                    // 5
  return [];                                                                           // 6
});                                                                                    // 7
/////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
