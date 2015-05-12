(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-rss/lib/server/rss.js                                                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var RSS = Npm.require('rss');                                                                                     // 1
                                                                                                                  // 2
var getMeta = function(url) {                                                                                     // 3
  var siteUrl = Settings.get('siteUrl', Meteor.absoluteUrl());                                                    // 4
  return {                                                                                                        // 5
    title: Settings.get('title'),                                                                                 // 6
    description: Settings.get('tagline'),                                                                         // 7
    feed_url: siteUrl+url,                                                                                        // 8
    site_url: siteUrl,                                                                                            // 9
    image_url: siteUrl+'img/favicon.png',                                                                         // 10
  };                                                                                                              // 11
};                                                                                                                // 12
                                                                                                                  // 13
servePostRSS = function(view, url) {                                                                              // 14
  var feed = new RSS(getMeta(url));                                                                               // 15
                                                                                                                  // 16
  var params = getPostsParameters({view: view, limit: 20});                                                       // 17
  delete params['options']['sort']['sticky'];                                                                     // 18
                                                                                                                  // 19
  Posts.find(params.find, params.options).forEach(function(post) {                                                // 20
    var description = !!post.body ? post.body+'</br></br>' : '';                                                  // 21
    feed.item({                                                                                                   // 22
     title: post.title,                                                                                           // 23
     description: description+'<a href="'+getPostUrl(post._id)+'">Discuss</a>',                                   // 24
     author: post.author,                                                                                         // 25
     date: post.postedAt,                                                                                         // 26
     url: getPostLink(post),                                                                                      // 27
     guid: post._id                                                                                               // 28
    });                                                                                                           // 29
  });                                                                                                             // 30
                                                                                                                  // 31
  return feed.xml();                                                                                              // 32
};                                                                                                                // 33
                                                                                                                  // 34
serveCommentRSS = function() {                                                                                    // 35
  var feed = new RSS(getMeta(Router.path('rss_comments')));                                                       // 36
                                                                                                                  // 37
  Comments.find({isDeleted: {$ne: true}}, {sort: {postedAt: -1}, limit: 20}).forEach(function(comment) {          // 38
    post = Posts.findOne(comment.postId);                                                                         // 39
    feed.item({                                                                                                   // 40
     title: 'Comment on '+post.title,                                                                             // 41
     description: comment.body+'</br></br>'+'<a href="'+getPostCommentUrl(post._id, comment._id)+'">Discuss</a>', // 42
     author: comment.author,                                                                                      // 43
     date: comment.postedAt,                                                                                      // 44
     url: getCommentUrl(comment._id),                                                                             // 45
     guid: comment._id                                                                                            // 46
    });                                                                                                           // 47
  });                                                                                                             // 48
                                                                                                                  // 49
  return feed.xml();                                                                                              // 50
};                                                                                                                // 51
                                                                                                                  // 52
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope-rss/lib/server/routes.js                                                                    //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.startup(function () {                                                                                      // 1
                                                                                                                  // 2
    // New Post RSS                                                                                               // 3
                                                                                                                  // 4
    Router.route('/feed.xml', function () {                                                                       // 5
      this.response.write(servePostRSS('new', 'feed.xml'));                                                       // 6
      this.response.end();                                                                                        // 7
    }, {                                                                                                          // 8
      name: 'feed',                                                                                               // 9
      where: 'server'                                                                                             // 10
    });                                                                                                           // 11
                                                                                                                  // 12
    // New Post RSS                                                                                               // 13
                                                                                                                  // 14
    Router.route('/rss/posts/new.xml', function () {                                                              // 15
      this.response.write(servePostRSS('top', 'rss/posts/new.xml'));                                              // 16
      this.response.end();                                                                                        // 17
    }, {                                                                                                          // 18
      name: 'rss_posts_new',                                                                                      // 19
      where: 'server'                                                                                             // 20
    });                                                                                                           // 21
                                                                                                                  // 22
    // Top Post RSS                                                                                               // 23
                                                                                                                  // 24
    Router.route('/rss/posts/top.xml', function () {                                                              // 25
      this.response.write(servePostRSS('top', 'rss/posts/top.xml'));                                              // 26
      this.response.end();                                                                                        // 27
    }, {                                                                                                          // 28
      name: 'rss_posts_top',                                                                                      // 29
      where: 'server'                                                                                             // 30
    });                                                                                                           // 31
                                                                                                                  // 32
    // Best Post RSS                                                                                              // 33
                                                                                                                  // 34
    Router.route('/rss/posts/best.xml', function () {                                                             // 35
      this.response.write(servePostRSS('best', 'rss/posts/best.xml'));                                            // 36
      this.response.end();                                                                                        // 37
    }, {                                                                                                          // 38
      name: 'rss_posts_best',                                                                                     // 39
      where: 'server'                                                                                             // 40
    });                                                                                                           // 41
                                                                                                                  // 42
    // Comment RSS                                                                                                // 43
                                                                                                                  // 44
    Router.route('/rss/comments.xml', function() {                                                                // 45
      this.response.write(serveCommentRSS());                                                                     // 46
      this.response.end();                                                                                        // 47
    }, {                                                                                                          // 48
      name: 'rss_comments',                                                                                       // 49
      where: 'server'                                                                                             // 50
    });                                                                                                           // 51
                                                                                                                  // 52
});                                                                                                               // 53
                                                                                                                  // 54
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
