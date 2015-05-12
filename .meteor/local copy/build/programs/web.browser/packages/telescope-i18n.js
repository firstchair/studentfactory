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
var Session = Package.session.Session;

/* Package-scope variables */
var i18n, setLanguage;

(function () {

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/telescope-i18n/i18n.js                                           //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
// do this better:                                                           // 1
setLanguage = function (language) {                                          // 2
  // Session.set('i18nReady', false);                                        // 3
  // console.log('i18n loading… '+language)                                  // 4
                                                                             // 5
  // moment                                                                  // 6
  Session.set('momentReady', false);                                         // 7
  // console.log('moment loading…')                                          // 8
  if (language.toLowerCase() === "en") {                                     // 9
    Session.set('momentReady', true);                                        // 10
  } else {                                                                   // 11
    $.getScript("//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/lang/" + language.toLowerCase() + ".js", function (result) {
      moment.locale(language);                                               // 13
      Session.set('momentReady', true);                                      // 14
      Session.set('momentLocale', language);                                 // 15
      // console.log('moment loaded!')                                       // 16
    });                                                                      // 17
  }                                                                          // 18
                                                                             // 19
  // TAPi18n                                                                 // 20
  Session.set("TAPi18nReady", false);                                        // 21
  // console.log('TAPi18n loading…')                                         // 22
  TAPi18n.setLanguage(language)                                              // 23
    .done(function () {                                                      // 24
      Session.set("TAPi18nReady", true);                                     // 25
      // console.log('TAPi18n loaded!')                                      // 26
    });                                                                      // 27
                                                                             // 28
  // T9n                                                                     // 29
  T9n.setLanguage(language);                                                 // 30
}                                                                            // 31
                                                                             // 32
i18n = {                                                                     // 33
  t: function (str, options) {                                               // 34
    if (Meteor.isServer) {                                                   // 35
      return TAPi18n.__(str, options, Settings.get('language', 'en'));       // 36
    } else {                                                                 // 37
      return TAPi18n.__(str, options);                                       // 38
    }                                                                        // 39
  }                                                                          // 40
};                                                                           // 41
                                                                             // 42
Meteor.startup(function () {                                                 // 43
                                                                             // 44
  if (Meteor.isClient) {                                                     // 45
                                                                             // 46
    // doesn't quite work yet                                                // 47
    // Tracker.autorun(function (c) {                                        // 48
    //   console.log('momentReady',Session.get('momentReady'))               // 49
    //   console.log('i18nReady',Session.get('i18nReady'))                   // 50
    //   var ready = Session.get('momentReady') && Session.get('i18nReady'); // 51
    //   if (ready) {                                                        // 52
    //     Session.set('i18nReady', true);                                   // 53
    //     Session.set('locale', language);                                  // 54
    //     console.log('i18n ready! '+language)                              // 55
    //   }                                                                   // 56
    // });                                                                   // 57
                                                                             // 58
    setLanguage(Settings.get('language', 'en'));                             // 59
  }                                                                          // 60
                                                                             // 61
});                                                                          // 62
                                                                             // 63
///////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope-i18n'] = {
  i18n: i18n,
  setLanguage: setLanguage
};

})();
