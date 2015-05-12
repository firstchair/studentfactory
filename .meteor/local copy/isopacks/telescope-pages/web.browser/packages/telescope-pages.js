(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-pages/lib/pages.js                                                                        //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Pages = {};                                                                                                     // 1
                                                                                                                // 2
Pages.schema = new SimpleSchema({                                                                               // 3
  title: {                                                                                                      // 4
    type: String                                                                                                // 5
  },                                                                                                            // 6
  slug: {                                                                                                       // 7
    type: String,                                                                                               // 8
    optional: true                                                                                              // 9
  },                                                                                                            // 10
  content: {                                                                                                    // 11
    type: String,                                                                                               // 12
    autoform: {                                                                                                 // 13
      rows: 10                                                                                                  // 14
    }                                                                                                           // 15
  },                                                                                                            // 16
  order: {                                                                                                      // 17
    type: Number,                                                                                               // 18
    optional: true                                                                                              // 19
  }                                                                                                             // 20
});                                                                                                             // 21
                                                                                                                // 22
Pages.collection = new Meteor.Collection('pages');                                                              // 23
Pages.collection.attachSchema(Pages.schema);                                                                    // 24
                                                                                                                // 25
Pages.collection.before.insert(function (userId, doc) {                                                         // 26
  // if no slug has been provided, generate one                                                                 // 27
  if (!doc.slug)                                                                                                // 28
    doc.slug = slugify(doc.title);                                                                              // 29
});                                                                                                             // 30
                                                                                                                // 31
primaryNav.push({                                                                                               // 32
  template: "pagesMenu",                                                                                        // 33
  order: 5                                                                                                      // 34
});                                                                                                             // 35
                                                                                                                // 36
mobileNav.push({                                                                                                // 37
  template: 'pagesMenu',                                                                                        // 38
  order: 5                                                                                                      // 39
});                                                                                                             // 40
                                                                                                                // 41
Meteor.startup(function () {                                                                                    // 42
  Pages.collection.allow({                                                                                      // 43
    insert: isAdminById,                                                                                        // 44
    update: isAdminById,                                                                                        // 45
    remove: isAdminById                                                                                         // 46
  });                                                                                                           // 47
                                                                                                                // 48
  Meteor.methods({                                                                                              // 49
    insertPage: function(pageTitle, pageContent){                                                               // 50
      return Feeds.insert({title: pageTitle, content: pageContent});                                            // 51
    }                                                                                                           // 52
  });                                                                                                           // 53
});                                                                                                             // 54
                                                                                                                // 55
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-pages/lib/client/routes.js                                                                //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
adminMenu.push({                                                                                                // 1
  route: 'pages',                                                                                               // 2
  label: 'Pages',                                                                                               // 3
  description: 'manage_static_pages'                                                                            // 4
});                                                                                                             // 5
                                                                                                                // 6
preloadSubscriptions.push('pages');                                                                             // 7
                                                                                                                // 8
PageController = RouteController.extend({                                                                       // 9
  getTitle: function () {                                                                                       // 10
    return Pages.collection.findOne({slug: this.params.slug}).title;                                            // 11
  },                                                                                                            // 12
  data: function () {                                                                                           // 13
    return Pages.collection.findOne({slug: this.params.slug});                                                  // 14
  }                                                                                                             // 15
});                                                                                                             // 16
                                                                                                                // 17
Meteor.startup(function () {                                                                                    // 18
                                                                                                                // 19
  Router.onBeforeAction(Router._filters.isAdmin, {only: ['pages']});                                            // 20
                                                                                                                // 21
  Router.route('/page/:slug', {                                                                                 // 22
    name: 'page',                                                                                               // 23
    controller: PageController                                                                                  // 24
  });                                                                                                           // 25
                                                                                                                // 26
  Router.route('/pages', {                                                                                      // 27
    name: 'pages',                                                                                              // 28
    controller: AdminController                                                                                 // 29
  });                                                                                                           // 30
                                                                                                                // 31
});                                                                                                             // 32
                                                                                                                // 33
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-pages/lib/client/templates/template.page.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
                                                                                                                // 1
Template.__checkName("page");                                                                                   // 2
Template["page"] = new Template("Template.page", (function() {                                                  // 3
  var view = this;                                                                                              // 4
  return [ HTML.H2({                                                                                            // 5
    "class": "page-title"                                                                                       // 6
  }, Blaze.View("lookup:title", function() {                                                                    // 7
    return Spacebars.mustache(view.lookup("title"));                                                            // 8
  })), "\n  ", HTML.DIV({                                                                                       // 9
    "class": "page-body markdown",                                                                              // 10
    "aria-live": "polite"                                                                                       // 11
  }, "\n    ", Spacebars.include(view.lookupTemplate("markdown"), function() {                                  // 12
    return Blaze.View("lookup:content", function() {                                                            // 13
      return Spacebars.mustache(view.lookup("content"));                                                        // 14
    });                                                                                                         // 15
  }), "\n  ") ];                                                                                                // 16
}));                                                                                                            // 17
                                                                                                                // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-pages/lib/client/templates/page.js                                                        //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
                                                                                                                // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-pages/lib/client/templates/template.page_item.js                                          //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
                                                                                                                // 1
Template.__checkName("pageItem");                                                                               // 2
Template["pageItem"] = new Template("Template.pageItem", (function() {                                          // 3
  var view = this;                                                                                              // 4
  return HTML.DIV({                                                                                             // 5
    "class": "form-module"                                                                                      // 6
  }, "\n    ", Blaze._TemplateWith(function() {                                                                 // 7
    return {                                                                                                    // 8
      collection: Spacebars.call("Pages.collection"),                                                           // 9
      id: Spacebars.call(view.lookup("formId")),                                                                // 10
      type: Spacebars.call("update"),                                                                           // 11
      doc: Spacebars.call(view.lookup(".")),                                                                    // 12
      "label-class": Spacebars.call("control-label"),                                                           // 13
      "input-col-class": Spacebars.call("controls"),                                                            // 14
      template: Spacebars.call("bootstrap-horizontal")                                                          // 15
    };                                                                                                          // 16
  }, function() {                                                                                               // 17
    return Spacebars.include(view.lookupTemplate("quickForm"));                                                 // 18
  }), HTML.Raw('\n    <a href="#" class="delete-link">Delete</a>\n  '));                                        // 19
}));                                                                                                            // 20
                                                                                                                // 21
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-pages/lib/client/templates/page_item.js                                                   //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Meteor.startup(function () {                                                                                    // 1
  Template[getTemplate('pageItem')].helpers({                                                                   // 2
    formId: function () {                                                                                       // 3
      return 'updatePage-'+ this._id                                                                            // 4
    }                                                                                                           // 5
  });                                                                                                           // 6
                                                                                                                // 7
  Template[getTemplate('pageItem')].events({                                                                    // 8
    'click .delete-link': function(e, instance){                                                                // 9
      e.preventDefault();                                                                                       // 10
      if (confirm("Delete page?")) {                                                                            // 11
        Pages.collection.remove(instance.data._id);                                                             // 12
      }                                                                                                         // 13
    }                                                                                                           // 14
  });                                                                                                           // 15
});                                                                                                             // 16
                                                                                                                // 17
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-pages/lib/client/templates/template.pages.js                                              //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
                                                                                                                // 1
Template.__checkName("pages");                                                                                  // 2
Template["pages"] = new Template("Template.pages", (function() {                                                // 3
  var view = this;                                                                                              // 4
  return [ HTML.DIV({                                                                                           // 5
    "class": "form-well add-page"                                                                               // 6
  }, "\n    ", HTML.Raw("<h3>Add new page:</h3>"), "\n    ", Blaze._TemplateWith(function() {                   // 7
    return {                                                                                                    // 8
      collection: Spacebars.call("Pages.collection"),                                                           // 9
      id: Spacebars.call("insertPageForm"),                                                                     // 10
      type: Spacebars.call("insert"),                                                                           // 11
      "label-class": Spacebars.call("control-label"),                                                           // 12
      "input-col-class": Spacebars.call("controls"),                                                            // 13
      template: Spacebars.call("bootstrap-horizontal")                                                          // 14
    };                                                                                                          // 15
  }, function() {                                                                                               // 16
    return Spacebars.include(view.lookupTemplate("quickForm"));                                                 // 17
  }), "\n  "), "\n  ", Blaze.Each(function() {                                                                  // 18
    return Spacebars.call(view.lookup("pages"));                                                                // 19
  }, function() {                                                                                               // 20
    return [ "\n    ", Blaze._TemplateWith(function() {                                                         // 21
      return {                                                                                                  // 22
        template: Spacebars.call(view.lookup("pageItem"))                                                       // 23
      };                                                                                                        // 24
    }, function() {                                                                                             // 25
      return Spacebars.include(function() {                                                                     // 26
        return Spacebars.call(Template.__dynamic);                                                              // 27
      });                                                                                                       // 28
    }), "\n  " ];                                                                                               // 29
  }) ];                                                                                                         // 30
}));                                                                                                            // 31
                                                                                                                // 32
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-pages/lib/client/templates/pages.js                                                       //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Meteor.startup(function () {                                                                                    // 1
  Template[getTemplate('pages')].helpers({                                                                      // 2
    pages: function(){                                                                                          // 3
      return Pages.collection.find({}, {sort: {order: 1}});                                                     // 4
    },                                                                                                          // 5
    pageItem: function () {                                                                                     // 6
      return getTemplate('pageItem');                                                                           // 7
    }                                                                                                           // 8
  });                                                                                                           // 9
});                                                                                                             // 10
                                                                                                                // 11
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-pages/lib/client/templates/template.pages_menu.js                                         //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
                                                                                                                // 1
Template.__checkName("pagesMenu");                                                                              // 2
Template["pagesMenu"] = new Template("Template.pagesMenu", (function() {                                        // 3
  var view = this;                                                                                              // 4
  return Blaze.If(function() {                                                                                  // 5
    return Spacebars.call(view.lookup("hasPages"));                                                             // 6
  }, function() {                                                                                               // 7
    return [ "\n    ", HTML.DIV({                                                                               // 8
      "class": "header-submodule pages-menu"                                                                    // 9
    }, "\n      ", Blaze.Each(function() {                                                                      // 10
      return Spacebars.call(view.lookup("pages"));                                                              // 11
    }, function() {                                                                                             // 12
      return [ "\n        ", HTML.A({                                                                           // 13
        href: function() {                                                                                      // 14
          return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                      // 15
            route: "page"                                                                                       // 16
          }));                                                                                                  // 17
        }                                                                                                       // 18
      }, Blaze.View("lookup:title", function() {                                                                // 19
        return Spacebars.mustache(view.lookup("title"));                                                        // 20
      })), "\n      " ];                                                                                        // 21
    }), "\n    "), "\n  " ];                                                                                    // 22
  });                                                                                                           // 23
}));                                                                                                            // 24
                                                                                                                // 25
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-pages/lib/client/templates/pages_menu.js                                                  //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Template[getTemplate("pagesMenu")].helpers({                                                                    // 1
  hasPages: function () {                                                                                       // 2
    return Pages.collection.find().count()                                                                      // 3
  },                                                                                                            // 4
  pages: function () {                                                                                          // 5
    return Pages.collection.find();                                                                             // 6
  }                                                                                                             // 7
})                                                                                                              // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope-pages/Users/lukasfeitsma/Documents/Studie/CMD/Jaar2/Blok4/Project-X/klussenbank/packages/ //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","cdn_path":null}); // 8
TAPi18n.languages_names["en"] = ["English","English"];                                                          // 9
// integrate the fallback language translations                                                                 // 10
translations = {};                                                                                              // 11
translations[namespace] = {"manage_static_pages":"Beheer statische pagina's"};                                  // 12
TAPi18n._loadLangFileObject("en", translations);                                                                // 13
                                                                                                                // 14
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
