(function(){
Template.__checkName("hero");
Template["hero"] = new Template("Template.hero", (function() {
  var view = this;
  return [ Blaze.If(function() {
    return Spacebars.call(view.lookup("showHero"));
  }, function() {
    return [ "\n    ", Spacebars.With(function() {
      return Spacebars.call(view.lookup("heroData"));
    }, function() {
      return [ "\n    ", HTML.STYLE({
        type: "text/css"
      }, "\n      ", Blaze.View("lookup:extraCss", function() {
        return Spacebars.mustache(view.lookup("extraCss"));
      }), "\n    "), "\n    ", HTML.SECTION({
        "class": "hero",
        style: function() {
          return [ "background-image: url('", Spacebars.mustache(view.lookup("heroImage")), "')" ];
        }
      }, "\n      ", HTML.DIV({
        "class": "hero-inner"
      }, "\n        ", HTML.DIV({
        "class": "copy"
      }, "\n          ", HTML.H1(Blaze.View("lookup:title", function() {
        return Spacebars.mustache(view.lookup("title"));
      })), "\n          ", HTML.H3(Blaze.View("lookup:subheading", function() {
        return Spacebars.mustache(view.lookup("subheading"));
      })), "\n          ", Blaze.View("lookup:extraHtml", function() {
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("extraHtml")));
      }), "\n        "), "\n      "), "\n    "), "\n    " ];
    }), "\n  " ];
  }), "\n  ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isAdmin"));
  }, function() {
    return [ "\n    ", Spacebars.include(view.lookupTemplate("hero_config_overlay")), "\n  " ];
  }) ];
}));

Template.__checkName("hero_config_overlay");
Template["hero_config_overlay"] = new Template("Template.hero_config_overlay", (function() {
  var view = this;
  return HTML.DIV({
    "class": "hero-config"
  }, HTML.Raw('\n    <a class="hero-config-toggle" href="#">&#10094;</a>\n    <h4>Hero Settings</h4>\n    '), Blaze.If(function() {
    return Spacebars.call(view.templateInstance().subscriptionsReady());
  }, function() {
    return [ "\n      ", Blaze._TemplateWith(function() {
      return {
        collection: Spacebars.call("HeroSettings"),
        id: Spacebars.call("updateHeroForm"),
        type: Spacebars.call("update"),
        doc: Spacebars.call(view.lookup("heroSettings"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("autoForm"), function() {
        return [ "\n        ", HTML.DIV({
          "class": "hero-switch"
        }, "\n          ", HTML.LABEL({
          "class": "tgl"
        }, "\n            ", HTML.INPUT({
          id: "heroOn",
          type: "checkbox",
          "class": function() {
            return Spacebars.mustache(view.lookup("switchState"));
          }
        }), "\n            ", HTML.SPAN({
          "class": "tgl_body"
        }, "\n              ", HTML.SPAN({
          "class": "tgl_switch"
        }), "\n              ", HTML.SPAN({
          "class": "tgl_track"
        }, "\n                ", HTML.SPAN({
          "class": "tgl_bgd"
        }), "\n                ", HTML.SPAN({
          "class": "tgl_bgd tgl_bgd-on"
        }), "\n              "), "\n            "), "\n          "), "\n        "), "\n        ", Blaze._TemplateWith(function() {
          return {
            name: Spacebars.call("heroTitle"),
            label: Spacebars.call("Primary Heading")
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("afFormGroup"));
        }), "\n        ", Blaze._TemplateWith(function() {
          return {
            name: Spacebars.call("heroSubheading"),
            label: Spacebars.call("Secondary Heading")
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("afFormGroup"));
        }), "\n        ", Blaze._TemplateWith(function() {
          return {
            name: Spacebars.call("heroImage"),
            label: Spacebars.call("Background Image")
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("afFormGroup"));
        }), "\n        ", Blaze._TemplateWith(function() {
          return {
            name: Spacebars.call("extraHtml"),
            label: Spacebars.call("Extra HTML")
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("afFormGroup"));
        }), "\n        ", Blaze._TemplateWith(function() {
          return {
            name: Spacebars.call("extraCss"),
            label: Spacebars.call("Extra CSS")
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("afFormGroup"));
        }), "\n        ", HTML.BUTTON({
          type: "submit"
        }, "Save"), "\n      " ];
      });
    }), "\n    " ];
  }), "\n  ");
}));

})();
