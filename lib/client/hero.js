
// Add the hero template as the first hero module
heroModules.unshift({
  template: 'hero'
});


Template[getTemplate('hero')].helpers({
  showHero: function () {
    // Routes to include the hero on
    var heroRoutes = [
      'posts_default',
      'posts_top',
      'posts_best',
      'posts_new',
      'posts_digest',
      'postsDaily'
    ];

    // Current route
    var route = Router.current().route.getName();

    if (getHeroSetting('heroOn')) {
      // Check if we should display the hero on this route
      for (i in heroRoutes) {
        if (heroRoutes[i] === route) {
          Session.set('showHero', true);
          return true;
        }
      }
    }
    Session.set('showHero', false);
    return false;
  },

  heroData: function() {
    var s = HeroSettings.findOne();
    return {
      title: s.heroTitle,
      subheading: s.heroSubheading,
      extraHtml: s.extraHtml,
      extraCss: s.extraCss,
      heroImage: s.heroImage
    };
  }
});





/*
*  CodeMirror inputs
*/

var initCodeMirror = function(t) {
  // Grab the HTML and CSS fields
  var html = t.find("textarea[data-schema-key='extraHtml']");
  var css = t.find("textarea[data-schema-key='extraCss']");

  // Init CodeMirror
  CodeMirror.fromTextArea(html, {
    lineNumbers: false,
    mode: "htmlmixed"
  });
  CodeMirror.fromTextArea(css, {
    lineNumbers: false,
    mode: "css"
  });
};

Template[getTemplate('hero_config_overlay')].rendered = function () {
  var self = this;

  self.autorun(function() {
    var isReady = Template.instance().subscriptionsReady();
    if (isReady) {
      Meteor.setTimeout(function() {
        initCodeMirror(self);
      }, 500); // Give Autoform 500ms to render
    }
  });
};

AutoForm.hooks({
  updateHeroForm: {
    onSuccess: function() {
      var self = this;
      Meteor.setTimeout(function() {
        initCodeMirror(self.template);
      }, 50); // Give input 50ms to re-render after submit
    }
  }
});
