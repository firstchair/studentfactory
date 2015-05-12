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
var Accounts = Package['accounts-base'].Accounts;
var LinkedIn = Package['pauli:linkedin'].LinkedIn;

(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/pauli:accounts-linkedin/linkedin_common.js                                                  //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
// v0.6.5                                                                                               // 1
Accounts.oauth.registerService('linkedin');                                                             // 2
                                                                                                        // 3
if (!Accounts.linkedin) {                                                                               // 4
  Accounts.linkedin = {};                                                                               // 5
}                                                                                                       // 6
                                                                                                        // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/pauli:accounts-linkedin/linkedin_client.js                                                  //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
// Meteor.loginWithLinkedin = function (options, callback) {                                            // 1
//   var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback); // 2
//   LinkedIn.requestCredential(options, credentialRequestCompleteCallback);                            // 3
// };                                                                                                   // 4
                                                                                                        // 5
  Meteor.loginWithLinkedIn = function(options, callback) {                                              // 6
    // support a callback without options                                                               // 7
    if (! callback && typeof options === "function") {                                                  // 8
      callback = options;                                                                               // 9
      options = null;                                                                                   // 10
    }                                                                                                   // 11
    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);  // 12
    LinkedIn.requestCredential(options, credentialRequestCompleteCallback);                             // 13
  };                                                                                                    // 14
                                                                                                        // 15
  // Make it work with 0.9.3                                                                            // 16
  Meteor.loginWithLinkedin = Meteor.loginWithLinkedIn;                                                  // 17
                                                                                                        // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['pauli:accounts-linkedin'] = {};

})();
