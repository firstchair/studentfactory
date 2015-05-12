Template[getTemplate('postInfo')].helpers({
  pointsUnitDisplayText: function(){
    return this.upvotes == 1 ? i18n.t('point') : i18n.t('points');
  },
  getTemplate: function() {
    return getTemplate("postAuthor");
  }
  // ,
  // getProfileEmail: function(){
  //   return Meteor.user().emails[0].address;
  // }
});
