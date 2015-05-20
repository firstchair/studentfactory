(function(){
Template.__checkName("post_detail");
Template["post_detail"] = new Template("Template.post_detail", (function() {
  var view = this;
  return HTML.DIV({
    "class": function() {
      return [ "post ", Blaze.If(function() {
        return Spacebars.call(view.lookup("sticky"));
      }, function() {
        return "sticky";
      }), " ", Spacebars.mustache(view.lookup("inactiveClass")), " ", Spacebars.mustache(view.lookup("postClass")) ];
    },
    id: function() {
      return Spacebars.mustache(view.lookup("_id"));
    }
  }, "\n      ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("postModules"));
  }, function() {
    return [ "\n        ", HTML.DIV({
      "class": function() {
        return Spacebars.mustache(view.lookup("moduleClass"));
      }
    }, "\n          ", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(view.lookup("getTemplate")),
        data: Spacebars.call(view.lookup(".."))
      };
    }, function() {
      return Spacebars.include(function() {
        return Spacebars.call(Template.__dynamic);
      });
    }), "\n        "), "\n      " ];
  }), "\n  ");
}));

})();
