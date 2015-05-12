(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/package-i18n.js                                                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
TAPi18n.packages["telescope-daily"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"}; // 1
                                                                                                                  // 2
// define package's translation function (proxy to the i18next)                                                   // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                  // 4
// define the package's templates registrar                                                                       // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope-daily");                                       // 6
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                                                  // 8
// Record the list of templates prior to package load                                                             // 9
var _ = Package.underscore._;                                                                                     // 10
non_package_templates = _.keys(Template);                                                                         // 11
                                                                                                                  // 12
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/lib/daily.js                                                                          //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
daysPerPage = 5;                                                                                                  // 1
                                                                                                                  // 2
viewsMenu.push({                                                                                                  // 3
  route: 'postsDaily',                                                                                            // 4
  label: 'daily',                                                                                                 // 5
  description: 'day_by_day_view'                                                                                  // 6
});                                                                                                               // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/lib/routes.js                                                                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var coreSubscriptions = new SubsManager({                                                                         // 1
  // cache recent 50 subscriptions                                                                                // 2
  cacheLimit: 50,                                                                                                 // 3
  // expire any subscription after 30 minutes                                                                     // 4
  expireIn: 30                                                                                                    // 5
});                                                                                                               // 6
                                                                                                                  // 7
PostsDailyController = RouteController.extend({                                                                   // 8
                                                                                                                  // 9
  onBeforeAction: function () {                                                                                   // 10
    this.render(getTemplate('postListTop'), {to: 'postListTop'});                                                 // 11
    this.next();                                                                                                  // 12
  },                                                                                                              // 13
                                                                                                                  // 14
  template: function() {                                                                                          // 15
    // use a function to make sure the template is evaluated *after* any template overrides                       // 16
    return getTemplate('postsDaily');                                                                             // 17
  },                                                                                                              // 18
                                                                                                                  // 19
  subscriptions: function () {                                                                                    // 20
    // this.days = this.params.days ? this.params.days : daysPerPage;                                             // 21
    // TODO: find a way to preload the first n posts of the first 5 days?                                         // 22
  },                                                                                                              // 23
                                                                                                                  // 24
  data: function () {                                                                                             // 25
    this.days = this.params.days ? this.params.days : daysPerPage;                                                // 26
    Session.set('postsDays', this.days);                                                                          // 27
    return {                                                                                                      // 28
      days: this.days                                                                                             // 29
    };                                                                                                            // 30
  },                                                                                                              // 31
                                                                                                                  // 32
  getTitle: function () {                                                                                         // 33
    return i18n.t('daily');                                                                                       // 34
  },                                                                                                              // 35
                                                                                                                  // 36
  getDescription: function () {                                                                                   // 37
    return i18n.t('day_by_day_view');                                                                             // 38
  },                                                                                                              // 39
                                                                                                                  // 40
  fastRender: true                                                                                                // 41
});                                                                                                               // 42
                                                                                                                  // 43
Meteor.startup(function () {                                                                                      // 44
                                                                                                                  // 45
  Router.route('/daily/:days?', {                                                                                 // 46
    name: 'postsDaily',                                                                                           // 47
    controller: PostsDailyController                                                                              // 48
  });                                                                                                             // 49
                                                                                                                  // 50
});                                                                                                               // 51
                                                                                                                  // 52
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/lib/client/templates/template.posts_daily.js                                          //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  // 1
Template.__checkName("postsDaily");                                                                               // 2
Template["postsDaily"] = new Template("Template.postsDaily", (function() {                                        // 3
  var view = this;                                                                                                // 4
  return HTML.DIV({                                                                                               // 5
    "class": "grid"                                                                                               // 6
  }, "\n    ", Blaze.Each(function() {                                                                            // 7
    return Spacebars.call(view.lookup("days"));                                                                   // 8
  }, function() {                                                                                                 // 9
    return [ "\n      ", Blaze._TemplateWith(function() {                                                         // 10
      return {                                                                                                    // 11
        template: Spacebars.call(view.lookup("before_day"))                                                       // 12
      };                                                                                                          // 13
    }, function() {                                                                                               // 14
      return Spacebars.include(function() {                                                                       // 15
        return Spacebars.call(Template.__dynamic);                                                                // 16
      });                                                                                                         // 17
    }), "\n      ", HTML.H2({                                                                                     // 18
      "class": "posts-day-heading"                                                                                // 19
    }, Blaze.View("lookup:formatDate", function() {                                                               // 20
      return Spacebars.mustache(view.lookup("formatDate"), view.lookup("date"), "dddd, MMMM Do YYYY");            // 21
    })), "\n\n      ", Blaze._TemplateWith(function() {                                                           // 22
      return {                                                                                                    // 23
        template: Spacebars.call(view.lookup("singleDay")),                                                       // 24
        data: Spacebars.call(view.lookup("context"))                                                              // 25
      };                                                                                                          // 26
    }, function() {                                                                                               // 27
      return Spacebars.include(function() {                                                                       // 28
        return Spacebars.call(Template.__dynamic);                                                                // 29
      });                                                                                                         // 30
    }), "\n\n      ", Blaze._TemplateWith(function() {                                                            // 31
      return {                                                                                                    // 32
        template: Spacebars.call(view.lookup("after_day"))                                                        // 33
      };                                                                                                          // 34
    }, function() {                                                                                               // 35
      return Spacebars.include(function() {                                                                       // 36
        return Spacebars.call(Template.__dynamic);                                                                // 37
      });                                                                                                         // 38
    }), "\n    " ];                                                                                               // 39
  }), "\n    ", HTML.A({                                                                                          // 40
    "class": "load-more-days-button grid-module",                                                                 // 41
    href: function() {                                                                                            // 42
      return Spacebars.mustache(view.lookup("loadMoreDaysUrl"));                                                  // 43
    }                                                                                                             // 44
  }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                // 45
    return Spacebars.mustache(view.lookup("_"), "load_next_days");                                                // 46
  }))), "\n  ");                                                                                                  // 47
}));                                                                                                              // 48
                                                                                                                  // 49
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/lib/client/templates/template.after_day.js                                            //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  // 1
Template.__checkName("afterDay");                                                                                 // 2
Template["afterDay"] = new Template("Template.afterDay", (function() {                                            // 3
  var view = this;                                                                                                // 4
  return "";                                                                                                      // 5
}));                                                                                                              // 6
                                                                                                                  // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/lib/client/templates/template.before_day.js                                           //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  // 1
Template.__checkName("beforeDay");                                                                                // 2
Template["beforeDay"] = new Template("Template.beforeDay", (function() {                                          // 3
  var view = this;                                                                                                // 4
  return "";                                                                                                      // 5
}));                                                                                                              // 6
                                                                                                                  // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/lib/client/templates/posts_daily.js                                                   //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.startup(function () {                                                                                      // 1
                                                                                                                  // 2
  Template[getTemplate('postsDaily')].helpers({                                                                   // 3
    days: function () {                                                                                           // 4
      var daysArray = [];                                                                                         // 5
      // var days = this.days;                                                                                    // 6
      var days = Session.get('postsDays');                                                                        // 7
      for (i = 0; i < days; i++) {                                                                                // 8
        daysArray.push({                                                                                          // 9
          date: moment().subtract(i, 'days').startOf('day').toDate(),                                             // 10
          index: i                                                                                                // 11
        });                                                                                                       // 12
      }                                                                                                           // 13
      return daysArray;                                                                                           // 14
    },                                                                                                            // 15
    before_day: function () {                                                                                     // 16
      return getTemplate('beforeDay');                                                                            // 17
    },                                                                                                            // 18
    singleDay: function () {                                                                                      // 19
      return getTemplate('singleDay');                                                                            // 20
    },                                                                                                            // 21
    context: function () {                                                                                        // 22
      var context = this;                                                                                         // 23
      context.showDateNav = false;                                                                                // 24
      return context;                                                                                             // 25
    },                                                                                                            // 26
    after_day: function () {                                                                                      // 27
      return getTemplate('afterDay');                                                                             // 28
    },                                                                                                            // 29
    loadMoreDaysUrl: function () {                                                                                // 30
      var count = parseInt(Session.get('postsDays')) + daysPerPage;                                               // 31
      return '/daily/' + count;                                                                                   // 32
    }                                                                                                             // 33
  });                                                                                                             // 34
                                                                                                                  // 35
});                                                                                                               // 36
                                                                                                                  // 37
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/Users/lukasfeitsma/Documents/Studie/CMD/Jaar2/Blok4/Project-X/klussenbank/packages/te //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope-daily",                                                                             // 2
    namespace = "telescope-daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
var package_templates = _.difference(_.keys(Template), non_package_templates);                                    // 8
                                                                                                                  // 9
for (var i = 0; i < package_templates.length; i++) {                                                              // 10
  var package_template = package_templates[i];                                                                    // 11
                                                                                                                  // 12
  registerI18nTemplate(package_template);                                                                         // 13
}                                                                                                                 // 14
                                                                                                                  // 15
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/Users/lukasfeitsma/Documents/Studie/CMD/Jaar2/Blok4/Project-X/klussenbank/packages/te //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope-daily",                                                                             // 2
    namespace = "telescope-daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
// integrate the fallback language translations                                                                   // 8
translations = {};                                                                                                // 9
translations[namespace] = {"daily":"Daily","day_by_day_view":"The most popular posts of each day.","load_next_days":"Load Next Days"};
TAPi18n._loadLangFileObject("en", translations);                                                                  // 11
                                                                                                                  // 12
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/Users/lukasfeitsma/Documents/Studie/CMD/Jaar2/Blok4/Project-X/klussenbank/packages/te //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope-daily",                                                                             // 2
    namespace = "telescope-daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/Users/lukasfeitsma/Documents/Studie/CMD/Jaar2/Blok4/Project-X/klussenbank/packages/te //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope-daily",                                                                             // 2
    namespace = "telescope-daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/Users/lukasfeitsma/Documents/Studie/CMD/Jaar2/Blok4/Project-X/klussenbank/packages/te //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope-daily",                                                                             // 2
    namespace = "telescope-daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-daily/Users/lukasfeitsma/Documents/Studie/CMD/Jaar2/Blok4/Project-X/klussenbank/packages/te //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope-daily",                                                                             // 2
    namespace = "telescope-daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
