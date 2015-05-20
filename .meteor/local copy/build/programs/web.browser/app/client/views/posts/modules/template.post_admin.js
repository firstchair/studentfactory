(function(){
Template.__checkName("postAdmin");
Template["postAdmin"] = new Template("Template.postAdmin", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("isAdmin"));
  }, function() {
    return [ "\n    ", HTML.DIV({
      "class": "post-meta-item",
      "aria-live": "off"
    }, "\n      ", Blaze.If(function() {
      return Spacebars.call(view.lookup("showApprove"));
    }, function() {
      return [ "\n        | ", HTML.A({
        href: "#",
        "class": "approve-link goto-edit"
      }, Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "approve");
      })), "\n      " ];
    }), "\n      ", Blaze.If(function() {
      return Spacebars.call(view.lookup("showUnapprove"));
    }, function() {
      return [ "\n        | ", HTML.A({
        href: "#",
        "class": "unapprove-link goto-edit"
      }, Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "unapprove");
      })), "\n\n      " ];
    }), "\n", HTML.Comment('       | {{_ "score"}}: {{shortScore}}, {{_ "clicks"}}: {{clickCount}}, {{_ "views"}}: {{viewCount}} '), "\n\n    "), "\n  " ];
  });
}));

})();
