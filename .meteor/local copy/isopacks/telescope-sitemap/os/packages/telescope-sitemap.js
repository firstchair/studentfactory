(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/telescope-sitemap/lib/server/sitemaps.js                                              //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
Meteor.startup(function() {                                                                       // 1
  /*                                                                                              // 2
   * Sitemap                                                                                      // 3
   */                                                                                             // 4
  sitemaps.add("/sitemap.xml", function() {                                                       // 5
    var _getLatest = function(viewParamKey, terms) {                                              // 6
      var params = getPostsParameters(                                                            // 7
        viewParameters[viewParamKey.toLowerCase()](terms)                                         // 8
      );                                                                                          // 9
      var post = Posts.findOne(params.find, {                                                     // 10
        'fields': {'postedAt': 1},                                                                // 11
        'sort': params.options.sort                                                               // 12
      });                                                                                         // 13
      return post ? post.postedAt : null;                                                         // 14
    };                                                                                            // 15
                                                                                                  // 16
    // Posts list pages                                                                           // 17
    var paths = [                                                                                 // 18
      {page: "/", lastmod: _getLatest(Settings.get("defaultView", "top")), changefreq: "hourly"}, // 19
      {page: "/top", lastmod: _getLatest("top"), changefreq: "hourly"},                           // 20
      {page: "/new", lastmod: _getLatest("new"), changefreq: "hourly"},                           // 21
      {page: "/best", lastmod: _getLatest("best"), changefreq: "daily"},                          // 22
    ];                                                                                            // 23
                                                                                                  // 24
    // Categories (if telescope-tags is included)                                                 // 25
    if (typeof Categories !== "undefined") {                                                      // 26
      Categories.find({}, {fields: {"slug": 1}}).forEach(function(category) {                     // 27
        var lastMod = _getLatest("category", {category: category.slug});                          // 28
        if (lastMod) {                                                                            // 29
          paths.push({                                                                            // 30
            page: "/category/" + category.slug,                                                   // 31
            lastmod: lastMod,                                                                     // 32
            changefreq: "hourly"                                                                  // 33
          })                                                                                      // 34
        }                                                                                         // 35
      });                                                                                         // 36
    }                                                                                             // 37
                                                                                                  // 38
    // Individual post pages: include 100 latest in each of "top", "new", and                     // 39
    // "best". Aggregate them to avoid duplication.                                               // 40
    var postPages = {};                                                                           // 41
    _.each(["top", "new", "best"], function(key) {                                                // 42
      var siteUrl = getSiteUrl();                                                                 // 43
      var params = getPostsParameters(viewParameters[key]());                                     // 44
      var posts = Posts.find(params.find, {                                                       // 45
        fields: {postedAt: 1, title: 1, _id: 1},                                                  // 46
        limit: 100,                                                                               // 47
        sort: params.options.sort                                                                 // 48
      });                                                                                         // 49
      posts.forEach(function(post) {                                                              // 50
        var url = getPostPageUrl(post).replace(siteUrl, "");                                      // 51
        postPages[url] = {page: url, lastmod: post.postedAt, changefreq: "daily"};                // 52
      });                                                                                         // 53
    });                                                                                           // 54
                                                                                                  // 55
    paths = paths.concat(_.values(postPages));                                                    // 56
    paths = _.reject(paths, function(p) { return p.lastmod === null });                           // 57
    return paths;                                                                                 // 58
  });                                                                                             // 59
});                                                                                               // 60
                                                                                                  // 61
////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
