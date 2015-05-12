(function(){Template[getTemplate('post_page')].helpers({
  post_item: function () {
    return getTemplate('post_item');
  },
  post_body: function () {
    return getTemplate('post_body');
  },
  comment_form: function () {
    return getTemplate('comment_form');
  },
  comment_list: function () {
    return getTemplate('comment_list');
  }
});

Template[getTemplate('post_page')].rendered = function(){
  $('body').scrollTop(0);
};


Template[getTemplate('post_body')].helpers({
  pointsUnitDisplayText: function(){
    return this.upvotes == 1 ? i18n.t('point') : i18n.t('points');
  },
  getTemplate: function() {
    return getTemplate("postAuthor");
  },
  ProjectEmail: function(){
    return Meteor.user().emails[0].address;
  }
});

})();
