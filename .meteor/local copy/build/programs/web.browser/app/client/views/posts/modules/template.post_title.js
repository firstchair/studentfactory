(function(){
Template.__checkName("postTitle");
Template["postTitle"] = new Template("Template.postTitle", (function() {
  var view = this;
  return [ HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("postLink"));
    },
    "class": "post-title",
    target: function() {
      return Spacebars.mustache(view.lookup("postTarget"));
    }
  }, Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })), "\n	", HTML.SPAN({
    "class": "post-shortdescription"
  }, Blaze.View("lookup:shortdescription", function() {
    return Spacebars.mustache(view.lookup("shortdescription"));
  })) ];
}));

})();
