(function(){
Template.__checkName("postAvatars");
Template["postAvatars"] = new Template("Template.postAvatars", (function() {
  var view = this;
  return [ HTML.DIV({
    "aria-hidden": "true",
    "aria-live": "off"
  }, "\n     ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("profileUrl"), view.lookup("userId"));
    },
    "class": "avatar-link avatar-small author-avatar"
  }, "\n      ", Blaze._TemplateWith(function() {
    return {
      userId: Spacebars.call(view.lookup("userId")),
      shape: Spacebars.call("circle")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("avatar"));
  }), "\n    "), "\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("commenters"));
  }, function() {
    return [ "\n      ", HTML.DIV({
      "class": "post-commenters"
    }, "\n      ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("commenters"));
    }, function() {
      return [ "\n        ", HTML.A({
        href: function() {
          return Spacebars.mustache(view.lookup("profileUrl"), view.lookup("."));
        },
        "class": "avatar-link avatar-small commenter-avatar"
      }, "\n          ", Blaze._TemplateWith(function() {
        return {
          userId: Spacebars.call(view.lookup(".")),
          shape: Spacebars.call("circle")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("avatar"));
      }), "\n        "), "\n      " ];
    }), "\n      "), "\n    " ];
  }), "\n  "), "\n  ", HTML.DIV({
    "class": "datums"
  }, "\n   ", HTML.SPAN({
    "class": "startdatum"
  }, HTML.Raw('<i class="fa fa-clock-o"></i>'), " Start datum: ", Blaze.View("lookup:formatDate", function() {
    return Spacebars.mustache(view.lookup("formatDate"), view.lookup("start"), "DD.MM.YYYY");
  })), "\n    ", HTML.SPAN({
    "class": "einddatum"
  }, HTML.Raw('<i class="fa fa-clock-o"></i>'), " Eind datum: ", Blaze.View("lookup:formatDate", function() {
    return Spacebars.mustache(view.lookup("formatDate"), view.lookup("end"), "DD.MM.YYYY");
  })), "\n    ") ];
}));

})();