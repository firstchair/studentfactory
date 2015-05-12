(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-module-share/lib/share.js                                                                  //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
postModules.push({                                                                                               // 1
  template: 'postShare',                                                                                         // 2
  order: 25                                                                                                      // 3
});                                                                                                              // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-module-share/lib/client/template.post_share.js                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("postShare");                                                                               // 2
Template["postShare"] = new Template("Template.postShare", (function() {                                         // 3
  var view = this;                                                                                               // 4
  return [ HTML.A({                                                                                              // 5
    href: "#",                                                                                                   // 6
    "class": "share-link action",                                                                                // 7
    title: function() {                                                                                          // 8
      return Spacebars.mustache(view.lookup("_"), "share");                                                      // 9
    }                                                                                                            // 10
  }, "\n    ", Blaze.View("lookup:icon", function() {                                                            // 11
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "share"));                                  // 12
  }), "\n  "), "\n  ", HTML.DIV({                                                                                // 13
    "class": "share-options hidden"                                                                              // 14
  }, "\n    ", HTML.A({                                                                                          // 15
    "class": "mt-facebook mt-share-inline-square-sm",                                                            // 16
    href: function() {                                                                                           // 17
      return [ "https://www.facebook.com/sharer/sharer.php?u=", Spacebars.mustache(view.lookup("sourceLink")) ]; // 18
    },                                                                                                           // 19
    target: "_blank"                                                                                             // 20
  }, Blaze.View("lookup:icon", function() {                                                                      // 21
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "facebook"));                               // 22
  })), "\n    ", HTML.A({                                                                                        // 23
    "class": "mt-twitter mt-share-inline-square-sm",                                                             // 24
    href: function() {                                                                                           // 25
      return [ "//twitter.com/intent/tweet?text=", Spacebars.mustache(view.lookup("title")), "&url=", Spacebars.mustache(view.lookup("sourceLink")), "&", Spacebars.mustache(view.lookup("viaTwitter")) ];
    },                                                                                                           // 27
    target: "_blank"                                                                                             // 28
  }, Blaze.View("lookup:icon", function() {                                                                      // 29
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "twitter"));                                // 30
  })), "\n    ", HTML.A({                                                                                        // 31
    "class": "mt-linkedin mt-share-inline-square-sm",                                                            // 32
    href: function() {                                                                                           // 33
      return [ "//www.linkedin.com/shareArticle?mini=true&url=", Spacebars.mustache(view.lookup("sourceLink")), HTML.CharRef({
        html: "&amp;",                                                                                           // 35
        str: "&"                                                                                                 // 36
      }), "summary=", Spacebars.mustache(view.lookup("title")) ];                                                // 37
    },                                                                                                           // 38
    target: "_blank"                                                                                             // 39
  }, Blaze.View("lookup:icon", function() {                                                                      // 40
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "linkedin"));                               // 41
  })), "\n    ", HTML.A({                                                                                        // 42
    "class": "mt-google mt-share-inline-square-sm",                                                              // 43
    href: function() {                                                                                           // 44
      return [ "https://plus.google.com/share?url=", Spacebars.mustache(view.lookup("sourceLink")) ];            // 45
    },                                                                                                           // 46
    target: "_blank"                                                                                             // 47
  }, Blaze.View("lookup:icon", function() {                                                                      // 48
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "googleplus"));                             // 49
  })), "\n  ") ];                                                                                                // 50
}));                                                                                                             // 51
                                                                                                                 // 52
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/telescope-module-share/lib/client/post_share.js                                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Meteor.startup(function () {                                                                                     // 1
  Template[getTemplate('postShare')].helpers({                                                                   // 2
    sourceLink: function(){                                                                                      // 3
      return !!this.url ? this.url : getSiteUrl() + "posts/"+this._id;                                           // 4
    },                                                                                                           // 5
    viaTwitter: function () {                                                                                    // 6
      return !!Settings.get('twitterAccount') ? 'via='+Settings.get('twitterAccount') : '';                      // 7
    }                                                                                                            // 8
  });                                                                                                            // 9
                                                                                                                 // 10
  Template[getTemplate('postShare')].events({                                                                    // 11
    'click .share-link': function(e){                                                                            // 12
      var $this = $(e.target).parents('.post-share').find('.share-link');                                        // 13
      var $share = $this.parents('.post-share').find('.share-options');                                          // 14
      e.preventDefault();                                                                                        // 15
      $('.share-link').not($this).removeClass("active");                                                         // 16
      $(".share-options").not($share).addClass("hidden");                                                        // 17
      $this.toggleClass("active");                                                                               // 18
      $share.toggleClass("hidden");                                                                              // 19
    }                                                                                                            // 20
  });                                                                                                            // 21
});                                                                                                              // 22
                                                                                                                 // 23
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
