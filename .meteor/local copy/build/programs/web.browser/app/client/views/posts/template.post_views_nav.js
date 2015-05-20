(function(){
Template.__checkName("postViewsNav");
Template["postViewsNav"] = new Template("Template.postViewsNav", (function() {
  var view = this;
  return [ HTML.Raw("<!--   {{#if showNav}} -->\n    "), HTML.DIV({
    "class": "posts-list-views grid-module"
  }, "\n      ", Blaze._TemplateWith(function() {
    return {
      menuName: Spacebars.call("view"),
      menuItems: Spacebars.call(view.lookup("menuItems")),
      mode: Spacebars.call("list")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("menuComponent"));
  }), "\n    "), HTML.Raw("\n<!--   {{/if}} -->") ];
}));

})();
