(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-search/lib/search.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// push "search" template to primaryNav                                                                                // 1
primaryNav.push({                                                                                                      // 2
  template: 'search',                                                                                                  // 3
  order: 100                                                                                                           // 4
});                                                                                                                    // 5
                                                                                                                       // 6
mobileNav.push({                                                                                                       // 7
  template: 'search',                                                                                                  // 8
  order: 1                                                                                                             // 9
});                                                                                                                    // 10
                                                                                                                       // 11
adminMenu.push({                                                                                                       // 12
  route: 'searchLogs',                                                                                                 // 13
  label: 'search_logs',                                                                                                // 14
  description: 'see_what_people_are_searching_for'                                                                     // 15
});                                                                                                                    // 16
                                                                                                                       // 17
registerElementColor('.search-field', 'secondaryContrastColor');                                                       // 18
                                                                                                                       // 19
Searches = new Meteor.Collection("searches", {                                                                         // 20
  schema: new SimpleSchema({                                                                                           // 21
    _id: {                                                                                                             // 22
      type: String,                                                                                                    // 23
      optional: true                                                                                                   // 24
    },                                                                                                                 // 25
    timestamp: {                                                                                                       // 26
      type: Date                                                                                                       // 27
    },                                                                                                                 // 28
    keyword: {                                                                                                         // 29
      type: String                                                                                                     // 30
    }                                                                                                                  // 31
  })                                                                                                                   // 32
});                                                                                                                    // 33
                                                                                                                       // 34
Meteor.startup(function() {                                                                                            // 35
  Searches.allow({                                                                                                     // 36
    update: isAdminById                                                                                                // 37
  , remove: isAdminById                                                                                                // 38
  });                                                                                                                  // 39
});                                                                                                                    // 40
                                                                                                                       // 41
// search post list parameters                                                                                         // 42
viewParameters.search = function (terms, baseParameters) {                                                             // 43
  // if query is empty, just return parameters that will result in an empty collection                                 // 44
  if(typeof terms.query === 'undefined' || !terms.query)                                                               // 45
    return {find:{_id: 0}}                                                                                             // 46
                                                                                                                       // 47
  var parameters = deepExtend(true, baseParameters, {                                                                  // 48
    find: {                                                                                                            // 49
      $or: [                                                                                                           // 50
        {title: {$regex: terms.query, $options: 'i'}},                                                                 // 51
        {url: {$regex: terms.query, $options: 'i'}},                                                                   // 52
        {body: {$regex: terms.query, $options: 'i'}}                                                                   // 53
      ]                                                                                                                // 54
    }                                                                                                                  // 55
  });                                                                                                                  // 56
  return parameters;                                                                                                   // 57
}                                                                                                                      // 58
                                                                                                                       // 59
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-search/package-i18n.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
TAPi18n.packages["telescope-search"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};     // 1
                                                                                                                       // 2
// define package's translation function (proxy to the i18next)                                                        // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                       // 4
// define the package's templates registrar                                                                            // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope-search");                                           // 6
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                                                       // 8
// Record the list of templates prior to package load                                                                  // 9
var _ = Package.underscore._;                                                                                          // 10
non_package_templates = _.keys(Template);                                                                              // 11
                                                                                                                       // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-search/lib/client/routes.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 1
                                                                                                                       // 2
  PostsSearchController = PostsListController.extend({                                                                 // 3
    view: 'search',                                                                                                    // 4
    showViewsNav: false,                                                                                               // 5
    getTitle: function() {                                                                                             // 6
      return i18n.t("Search") + ' - ' + Settings.get('title', "Telescope");                                            // 7
    },                                                                                                                 // 8
    getDescription: function() {                                                                                       // 9
      return Settings.get('description');                                                                              // 10
    },                                                                                                                 // 11
    onBeforeAction: function() {                                                                                       // 12
      var query = this.params.query;                                                                                   // 13
      if ('q' in query) {                                                                                              // 14
        // if search box has 'empty' class, that means user just deleted last character in search keyword              // 15
        // but router hasn't updated url, so params.query still has '?q=<LAST CHARACTER>'                              // 16
        // if we set searchQuery in this case, user will see last character pops up again unexpectedly                 // 17
        // so add this check to fix the bug. issue #825                                                                // 18
        if (!$('.search').hasClass('empty'))  {                                                                        // 19
          Session.set('searchQuery', query.q);                                                                         // 20
        }                                                                                                              // 21
        if (query.q) {                                                                                                 // 22
          Meteor.call('logSearch', query.q)                                                                            // 23
        }                                                                                                              // 24
      }                                                                                                                // 25
      this.next();                                                                                                     // 26
    }                                                                                                                  // 27
  });                                                                                                                  // 28
                                                                                                                       // 29
  Router.onBeforeAction(Router._filters.isAdmin, {only: ['logs']});                                                    // 30
                                                                                                                       // 31
  // Search                                                                                                            // 32
                                                                                                                       // 33
  Router.route('/search/:limit?', {                                                                                    // 34
    name: 'search',                                                                                                    // 35
    controller: PostsSearchController                                                                                  // 36
  });                                                                                                                  // 37
                                                                                                                       // 38
  // Search Logs                                                                                                       // 39
                                                                                                                       // 40
  Router.route('/logs/:limit?', {                                                                                      // 41
    controller: AdminController,                                                                                       // 42
    name: 'searchLogs',                                                                                                // 43
    waitOn: function () {                                                                                              // 44
      var limit = this.params.limit || 100;                                                                            // 45
      if(Meteor.isClient) {                                                                                            // 46
        Session.set('logsLimit', limit);                                                                               // 47
      }                                                                                                                // 48
      return Meteor.subscribe('searches', limit);                                                                      // 49
    },                                                                                                                 // 50
    data: function () {                                                                                                // 51
      return Searches.find({}, {sort: {timestamp: -1}});                                                               // 52
    },                                                                                                                 // 53
    fastRender: true                                                                                                   // 54
  });                                                                                                                  // 55
                                                                                                                       // 56
});                                                                                                                    // 57
                                                                                                                       // 58
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-search/lib/client/templates/template.search.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("search");                                                                                        // 2
Template["search"] = new Template("Template.search", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("canSearch"));                                                                   // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", HTML.DIV({                                                                                      // 8
      "class": function() {                                                                                            // 9
        return [ "search ", Spacebars.mustache(view.lookup("searchQueryEmpty")), " header-submodule" ];                // 10
      }                                                                                                                // 11
    }, "\n      ", HTML.INPUT({                                                                                        // 12
      id: "search",                                                                                                    // 13
      type: "search",                                                                                                  // 14
      "class": "search-field",                                                                                         // 15
      placeholder: function() {                                                                                        // 16
        return Spacebars.mustache(view.lookup("_"), "search");                                                         // 17
      },                                                                                                               // 18
      value: function() {                                                                                              // 19
        return Spacebars.mustache(view.lookup("searchQuery"));                                                         // 20
      }                                                                                                                // 21
    }), "\n    "), "\n  " ];                                                                                           // 22
  });                                                                                                                  // 23
}));                                                                                                                   // 24
                                                                                                                       // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-search/lib/client/templates/search.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// see: http://stackoverflow.com/questions/1909441/jquery-keyup-delay                                                  // 1
var delay = (function(){                                                                                               // 2
  var timer = 0;                                                                                                       // 3
  return function(callback, ms){                                                                                       // 4
    clearTimeout (timer);                                                                                              // 5
    timer = setTimeout(callback, ms);                                                                                  // 6
  };                                                                                                                   // 7
})();                                                                                                                  // 8
                                                                                                                       // 9
Meteor.startup(function () {                                                                                           // 10
                                                                                                                       // 11
  Template[getTemplate('search')].helpers({                                                                            // 12
    canSearch: function () {                                                                                           // 13
      return can.view(Meteor.user());                                                                                  // 14
    },                                                                                                                 // 15
    searchQuery: function () {                                                                                         // 16
      return Session.get("searchQuery");                                                                               // 17
    },                                                                                                                 // 18
    searchQueryEmpty: function () {                                                                                    // 19
      return !!Session.get("searchQuery") ? '' : 'empty';                                                              // 20
    }                                                                                                                  // 21
  });                                                                                                                  // 22
                                                                                                                       // 23
  Template[getTemplate('search')].events({                                                                             // 24
    'keyup .search-field, search .search-field': function(e){                                                          // 25
      e.preventDefault();                                                                                              // 26
      var val = $(e.target).val(),                                                                                     // 27
          $search = $('.search');                                                                                      // 28
      if (val === '') {                                                                                                // 29
        // if search field is empty, just do nothing and show an empty template                                        // 30
        $search.addClass('empty');                                                                                     // 31
        Session.set('searchQuery', '');                                                                                // 32
        Router.go('search', null, {replaceState: true});                                                               // 33
      } else {                                                                                                         // 34
        $search.removeClass('empty');                                                                                  // 35
        // if search field is not empty, add a delay to avoid firing new searches for every keystroke                  // 36
        delay(function(){                                                                                              // 37
          Session.set('searchQuery', val);                                                                             // 38
                                                                                                                       // 39
          // Update the querystring.                                                                                   // 40
          var opts = {query: {q: val}};                                                                                // 41
          // if we're already on the search page, do a replaceState. Otherwise,                                        // 42
          // just use the pushState default.                                                                           // 43
          if(Router.current().route.getName() === 'search') {                                                          // 44
            opts.replaceState = true;                                                                                  // 45
          }                                                                                                            // 46
          Router.go('search', null, opts);                                                                             // 47
                                                                                                                       // 48
        }, 700 );                                                                                                      // 49
      }                                                                                                                // 50
    }                                                                                                                  // 51
  });                                                                                                                  // 52
                                                                                                                       // 53
});                                                                                                                    // 54
                                                                                                                       // 55
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-search/lib/client/templates/template.search_logs.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("searchLogs");                                                                                    // 2
Template["searchLogs"] = new Template("Template.searchLogs", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw("<h2>Search Logs</h2>\n    "), HTML.TABLE("\n      ", HTML.THEAD("\n        ", HTML.TR("\n          ", HTML.TH("Keyword"), "\n          ", HTML.TH("Timestamp"), "\n        "), "\n      "), "\n      ", HTML.TBODY("\n      ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("."));                                                                           // 6
  }, function() {                                                                                                      // 7
    return [ "\n        ", Blaze.If(function() {                                                                       // 8
      return Spacebars.call(view.lookup("isNewDate"));                                                                 // 9
    }, function() {                                                                                                    // 10
      return [ "\n          ", HTML.TR({                                                                               // 11
        "class": "search-date-header"                                                                                  // 12
      }, "\n            ", HTML.TH({                                                                                   // 13
        colspan: "2"                                                                                                   // 14
      }, "\n              ", HTML.SPAN({                                                                               // 15
        "class": "search-date"                                                                                         // 16
      }, Blaze.View("lookup:getDate", function() {                                                                     // 17
        return Spacebars.mustache(view.lookup("getDate"));                                                             // 18
      })), "\n              ", HTML.SPAN({                                                                             // 19
        "class": "search-count"                                                                                        // 20
      }, Blaze.View("lookup:searchCount", function() {                                                                 // 21
        return Spacebars.mustache(view.lookup("searchCount"));                                                         // 22
      })), "\n            "), "\n          "), "\n        " ];                                                         // 23
    }), "\n        ", HTML.TR("\n          ", HTML.TD(Blaze.View("lookup:keyword", function() {                        // 24
      return Spacebars.mustache(view.lookup("keyword"));                                                               // 25
    })), "\n          ", HTML.TD(Blaze.View("lookup:getTime", function() {                                             // 26
      return Spacebars.mustache(view.lookup("getTime"));                                                               // 27
    })), "\n        "), "\n      " ];                                                                                  // 28
  }), "\n    "), "\n  "), "\n  ", HTML.DIV({                                                                           // 29
    "class": "grid more-button"                                                                                        // 30
  }, "\n    ", HTML.A({                                                                                                // 31
    "class": "more-link",                                                                                              // 32
    href: function() {                                                                                                 // 33
      return Spacebars.mustache(view.lookup("loadMoreUrl"));                                                           // 34
    }                                                                                                                  // 35
  }, Blaze.View("lookup:_", function() {                                                                               // 36
    return Spacebars.mustache(view.lookup("_"), "load_more");                                                          // 37
  })), "\n  ") ];                                                                                                      // 38
}));                                                                                                                   // 39
                                                                                                                       // 40
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-search/lib/client/templates/search_logs.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 1
  Template[getTemplate('searchLogs')].helpers({                                                                        // 2
    getTime: function () {                                                                                             // 3
      return moment(this.timestamp).format("HH:mm:ss");                                                                // 4
    },                                                                                                                 // 5
    getDate: function () {                                                                                             // 6
      currentDate = moment(this.timestamp).format("MMMM DD");                                                          // 7
      return currentDate;                                                                                              // 8
    },                                                                                                                 // 9
    searchCount: function () {                                                                                         // 10
      // TODO: doesn't work properly with "load more"                                                                  // 11
      var after = moment(this.timestamp).startOf('day').valueOf(),                                                     // 12
          before = moment(this.timestamp).endOf('day').valueOf();                                                      // 13
                                                                                                                       // 14
      return Searches.find({                                                                                           // 15
        timestamp: {                                                                                                   // 16
          $gte: after,                                                                                                 // 17
          $lt: before                                                                                                  // 18
        }                                                                                                              // 19
      }).count();                                                                                                      // 20
    },                                                                                                                 // 21
    isNewDate: function () {                                                                                           // 22
      return (typeof currentDate === 'undefined') ? true : (currentDate !== moment(this.timestamp).format("MMMM DD")); // 23
    },                                                                                                                 // 24
    loadMoreUrl: function() {                                                                                          // 25
      var count = parseInt(Session.get('logsLimit')) + 100;                                                            // 26
      return '/logs/' + count;                                                                                         // 27
    },                                                                                                                 // 28
  });                                                                                                                  // 29
});                                                                                                                    // 30
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-search/Users/lukasfeitsma/Documents/Studie/CMD/Jaar2/Blok4/Project-X/klussenbank/packages/telesc //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope-search",                                                                                 // 2
    namespace = "telescope-search";                                                                                    // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
var package_templates = _.difference(_.keys(Template), non_package_templates);                                         // 8
                                                                                                                       // 9
for (var i = 0; i < package_templates.length; i++) {                                                                   // 10
  var package_template = package_templates[i];                                                                         // 11
                                                                                                                       // 12
  registerI18nTemplate(package_template);                                                                              // 13
}                                                                                                                      // 14
                                                                                                                       // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-search/Users/lukasfeitsma/Documents/Studie/CMD/Jaar2/Blok4/Project-X/klussenbank/packages/telesc //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope-search",                                                                                 // 2
    namespace = "telescope-search";                                                                                    // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
// integrate the fallback language translations                                                                        // 8
translations = {};                                                                                                     // 9
translations[namespace] = {"load_more":"Laad meer","search":"Zoeken","search_logs":"Zoeklog","see_what_people_are_searching_for":"Zie waar gebruikers op zoeken."};
TAPi18n._loadLangFileObject("en", translations);                                                                       // 11
                                                                                                                       // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-search/Users/lukasfeitsma/Documents/Studie/CMD/Jaar2/Blok4/Project-X/klussenbank/packages/telesc //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope-search",                                                                                 // 2
    namespace = "telescope-search";                                                                                    // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-search/Users/lukasfeitsma/Documents/Studie/CMD/Jaar2/Blok4/Project-X/klussenbank/packages/telesc //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope-search",                                                                                 // 2
    namespace = "telescope-search";                                                                                    // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-search/Users/lukasfeitsma/Documents/Studie/CMD/Jaar2/Blok4/Project-X/klussenbank/packages/telesc //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope-search",                                                                                 // 2
    namespace = "telescope-search";                                                                                    // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope-search/Users/lukasfeitsma/Documents/Studie/CMD/Jaar2/Blok4/Project-X/klussenbank/packages/telesc //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope-search",                                                                                 // 2
    namespace = "telescope-search";                                                                                    // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
