//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var postStatuses = Package['telescope-base'].postStatuses;
var STATUS_PENDING = Package['telescope-base'].STATUS_PENDING;
var STATUS_APPROVED = Package['telescope-base'].STATUS_APPROVED;
var STATUS_REJECTED = Package['telescope-base'].STATUS_REJECTED;
var adminMenu = Package['telescope-base'].adminMenu;
var viewsMenu = Package['telescope-base'].viewsMenu;
var userMenu = Package['telescope-base'].userMenu;
var addToPostSchema = Package['telescope-base'].addToPostSchema;
var addToCommentsSchema = Package['telescope-base'].addToCommentsSchema;
var addToSettingsSchema = Package['telescope-base'].addToSettingsSchema;
var addToUserSchema = Package['telescope-base'].addToUserSchema;
var registerPostProperty = Package['telescope-base'].registerPostProperty;
var registerCommentProperty = Package['telescope-base'].registerCommentProperty;
var registerSetting = Package['telescope-base'].registerSetting;
var registerUserProperty = Package['telescope-base'].registerUserProperty;
var preloadSubscriptions = Package['telescope-base'].preloadSubscriptions;
var primaryNav = Package['telescope-base'].primaryNav;
var secondaryNav = Package['telescope-base'].secondaryNav;
var mobileNav = Package['telescope-base'].mobileNav;
var viewParameters = Package['telescope-base'].viewParameters;
var footerModules = Package['telescope-base'].footerModules;
var heroModules = Package['telescope-base'].heroModules;
var threadModules = Package['telescope-base'].threadModules;
var postListTopModules = Package['telescope-base'].postListTopModules;
var postModules = Package['telescope-base'].postModules;
var postThumbnail = Package['telescope-base'].postThumbnail;
var postHeading = Package['telescope-base'].postHeading;
var postMeta = Package['telescope-base'].postMeta;
var postClassCallbacks = Package['telescope-base'].postClassCallbacks;
var postSubmitRenderedCallbacks = Package['telescope-base'].postSubmitRenderedCallbacks;
var postSubmitClientCallbacks = Package['telescope-base'].postSubmitClientCallbacks;
var postSubmitMethodCallbacks = Package['telescope-base'].postSubmitMethodCallbacks;
var postAfterSubmitMethodCallbacks = Package['telescope-base'].postAfterSubmitMethodCallbacks;
var postApproveCallbacks = Package['telescope-base'].postApproveCallbacks;
var postEditRenderedCallbacks = Package['telescope-base'].postEditRenderedCallbacks;
var postEditClientCallbacks = Package['telescope-base'].postEditClientCallbacks;
var postEditMethodCallbacks = Package['telescope-base'].postEditMethodCallbacks;
var postAfterEditMethodCallbacks = Package['telescope-base'].postAfterEditMethodCallbacks;
var commentClassCallbacks = Package['telescope-base'].commentClassCallbacks;
var commentSubmitRenderedCallbacks = Package['telescope-base'].commentSubmitRenderedCallbacks;
var commentSubmitClientCallbacks = Package['telescope-base'].commentSubmitClientCallbacks;
var commentSubmitMethodCallbacks = Package['telescope-base'].commentSubmitMethodCallbacks;
var commentAfterSubmitMethodCallbacks = Package['telescope-base'].commentAfterSubmitMethodCallbacks;
var commentEditRenderedCallbacks = Package['telescope-base'].commentEditRenderedCallbacks;
var commentEditClientCallbacks = Package['telescope-base'].commentEditClientCallbacks;
var commentEditMethodCallbacks = Package['telescope-base'].commentEditMethodCallbacks;
var commentAfterEditMethodCallbacks = Package['telescope-base'].commentAfterEditMethodCallbacks;
var upvoteCallbacks = Package['telescope-base'].upvoteCallbacks;
var downvoteCallbacks = Package['telescope-base'].downvoteCallbacks;
var cancelUpvoteCallbacks = Package['telescope-base'].cancelUpvoteCallbacks;
var cancelDownvoteCallbacks = Package['telescope-base'].cancelDownvoteCallbacks;
var upvoteMethodCallbacks = Package['telescope-base'].upvoteMethodCallbacks;
var downvoteMethodCallbacks = Package['telescope-base'].downvoteMethodCallbacks;
var cancelUpvoteMethodCallbacks = Package['telescope-base'].cancelUpvoteMethodCallbacks;
var cancelDownvoteMethodCallbacks = Package['telescope-base'].cancelDownvoteMethodCallbacks;
var userEditRenderedCallbacks = Package['telescope-base'].userEditRenderedCallbacks;
var userEditClientCallbacks = Package['telescope-base'].userEditClientCallbacks;
var userProfileCompleteChecks = Package['telescope-base'].userProfileCompleteChecks;
var userProfileDisplay = Package['telescope-base'].userProfileDisplay;
var userProfileEdit = Package['telescope-base'].userProfileEdit;
var userCreatedCallbacks = Package['telescope-base'].userCreatedCallbacks;
var getTemplate = Package['telescope-base'].getTemplate;
var templates = Package['telescope-base'].templates;
var getIcon = Package['telescope-base'].getIcon;
var icons = Package['telescope-base'].icons;
var colorTable = Package['telescope-base'].colorTable;
var registerElementColor = Package['telescope-base'].registerElementColor;
var themeSettings = Package['telescope-base'].themeSettings;
var getVotePower = Package['telescope-base'].getVotePower;
var deepExtend = Package['telescope-lib'].deepExtend;
var camelToDash = Package['telescope-lib'].camelToDash;
var dashToCamel = Package['telescope-lib'].dashToCamel;
var camelCaseify = Package['telescope-lib'].camelCaseify;
var removeSetting = Package['telescope-lib'].removeSetting;
var getThemeSetting = Package['telescope-lib'].getThemeSetting;
var getSiteUrl = Package['telescope-lib'].getSiteUrl;
var trimWords = Package['telescope-lib'].trimWords;
var can = Package['telescope-lib'].can;
var _ = Package.underscore._;
var capitalise = Package['telescope-lib'].capitalise;
var i18n = Package['telescope-i18n'].i18n;
var setLanguage = Package['telescope-i18n'].setLanguage;
var moment = Package['momentjs:moment'].moment;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Template = Package.templating.Template;
var Iron = Package['iron:core'].Iron;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var deleteDummyContent, __, registerI18nTemplate, registerTemplate, non_package_templates, translations;

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


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-getting-started'] = {
  deleteDummyContent: deleteDummyContent
};

})();