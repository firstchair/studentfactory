(function(){
Template.__checkName("post_profile");
Template["post_profile"] = new Template("Template.post_profile", (function() {
  var view = this;
  return [ HTML.Raw("<br>\n"), HTML.DIV({
    "class": "post-wrapper"
  }, "\n  ", HTML.DIV({
    "class": "post-body"
  }, "\n        ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("profileUrl"), view.lookup("."));
    },
    "class": "avatar"
  }, "\n          ", Blaze._TemplateWith(function() {
    return {
      userId: Spacebars.call(view.lookup(".")),
      shape: Spacebars.call("circle")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("avatar"));
  }), "\n        "), "\n        ", HTML.A({
    "class": "post-author",
    href: function() {
      return Spacebars.mustache(view.lookup("profileUrl"), view.lookup("userId"));
    }
  }, Blaze.View("lookup:displayName", function() {
    return Spacebars.mustache(view.lookup("displayName"), view.lookup("userId"));
  })), "\n        ", HTML.UL("\n         	", HTML.Raw('<li><i class="fa fa-facebook"></i></li>'), "\n	", HTML.Raw('<li><i class="fa fa-linkedin"></i></li>'), "\n	", HTML.Raw('<li><i class="fa fa-google-plus"></i></li>'), "\n	", HTML.LI(HTML.Raw('<i class="fa fa-envelope-o"></i>'), " ", Blaze.View("lookup:email", function() {
    return Spacebars.mustache(view.lookup("email"));
  })), "\n	", HTML.Raw('<li><i class="fa fa-mobile"></i></li>'), "\n	  "), "\n    ", HTML.DIV({
    "class": "datums"
  }, "\n     ", HTML.P({
    "class": "startdatum"
  }, HTML.Raw('<i class="fa fa-clock-o"></i>'), " Start datum: ", Blaze.View("lookup:formatDate", function() {
    return Spacebars.mustache(view.lookup("formatDate"), view.lookup("start"), "DD.MM.YYYY");
  })), "\n      ", HTML.P({
    "class": "einddatum"
  }, HTML.Raw('<i class="fa fa-clock-o"></i>'), " Eind datum: ", Blaze.View("lookup:formatDate", function() {
    return Spacebars.mustache(view.lookup("formatDate"), view.lookup("end"), "DD.MM.YYYY");
  })), "\n      "), "\n	  "), "\n\n	", Blaze.If(function() {
    return Spacebars.call(view.lookup("isLoggedIn"));
  }, function() {
    return [ "\n  ", HTML.A({
      "class": "comment-submit-button btn btn-primary btn-submit",
      href: function() {
        return [ "mailto:", Spacebars.mustache(view.lookup("email")), "?subject=Project aanmelding&body=Deze aanvraag is verzonden via de CMD Klussenbank&cc=", Spacebars.mustache(view.lookup("ProjectEmail")), "\n  " ];
      }
    }, "Ik wil deze klus!"), "\n  " ];
  }, function() {
    return [ "\n  ", HTML.BUTTON({
      type: "button",
      onclick: "window.location.href='/sign-in'",
      "class": "btn btn-default"
    }, "Log in om te reageren op deze klus"), "\n  " ];
  }), "\n\n\n") ];
}));

})();
