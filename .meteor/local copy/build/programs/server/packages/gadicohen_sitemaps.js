(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var WebApp = Package.webapp.WebApp;
var main = Package.webapp.main;
var WebAppInternals = Package.webapp.WebAppInternals;
var check = Package.check.check;
var Match = Package.check.Match;
var robots = Package['gadicohen:robots-txt'].robots;

/* Package-scope variables */
var sitemaps, k;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// packages/gadicohen:sitemaps/sitemaps.js                                             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////
                                                                                       //
/*                                                                                     // 1
 * http://en.wikipedia.org/wiki/Site_map                                               // 2
 * http://www.sitemaps.org/index.html                                                  // 3
 */                                                                                    // 4
                                                                                       // 5
sitemaps = {                                                                           // 6
  _list: {},                                                                           // 7
  _config: {                                                                           // 8
    rootUrl: undefined                                                                 // 9
  },                                                                                   // 10
  _configHooks: {}                                                                     // 11
};                                                                                     // 12
                                                                                       // 13
function configSet(key, value) {                                                       // 14
  if (sitemaps._configHooks[key])                                                      // 15
    sitemaps._configHooks[key](key, value, sitemaps._config[key]);                     // 16
  sitemaps._config[key] = value;                                                       // 17
}                                                                                      // 18
                                                                                       // 19
sitemaps.config = function(key, value) {                                               // 20
  if (!value && _.isObject(key)) {                                                     // 21
    for (k in key)                                                                     // 22
      configSet(k, key[k]);                                                            // 23
  } else {                                                                             // 24
    configSet(key, value);                                                             // 25
  }                                                                                    // 26
};                                                                                     // 27
                                                                                       // 28
if (typeof Number.lpad === "undefined") {                                              // 29
  Number.prototype.lpad = function(length) {                                           // 30
    "use strict";                                                                      // 31
    var str = this.toString();                                                         // 32
    while (str.length < length) {                                                      // 33
      str = "0" + str;                                                                 // 34
    }                                                                                  // 35
    return str;                                                                        // 36
  };                                                                                   // 37
}                                                                                      // 38
                                                                                       // 39
var urlStart = Meteor.absoluteUrl();                                                   // 40
                                                                                       // 41
sitemaps._configHooks.rootUrl = function(key, value) {                                 // 42
  urlStart = value || Meteor.absoluteUrl();                                            // 43
};                                                                                     // 44
                                                                                       // 45
var prepareUrl = sitemaps._prepareUrl = function(url) {                                // 46
  if (url.match(/^https?:\/\//))                                                       // 47
    return url;                                                                        // 48
  else {                                                                               // 49
    return urlStart + encodeURI(url.replace(/^\//, ''));                               // 50
  }                                                                                    // 51
};                                                                                     // 52
                                                                                       // 53
// TODO: 1) gzip, 2) sitemap index + other types + sitemap for old content             // 54
var Fiber = Npm.require('fibers');                                                     // 55
WebApp.connectHandlers.use(function(req, res, next) {                                  // 56
  new Fiber(function() {                                                               // 57
    "use strict";                                                                      // 58
    var out, pages, urls;                                                              // 59
                                                                                       // 60
    urls = _.keys(sitemaps._list);                                                     // 61
    if (!_.contains(urls, req.url))                                                    // 62
      return next();                                                                   // 63
                                                                                       // 64
    pages = sitemaps._list[req.url];                                                   // 65
    if (_.isFunction(pages))                                                           // 66
      pages = pages();                                                                 // 67
    else if (!_.isArray(pages))                                                        // 68
      throw new TypeError("sitemaps.add() expects an array or function");              // 69
                                                                                       // 70
    // The header is added later once we know which namespaces we need                 // 71
    out = '';                                                                          // 72
    var namespaces = {};                                                               // 73
                                                                                       // 74
    var w3cDateTimeTS, date;                                                           // 75
    _.each(pages, function(page) {                                                     // 76
                                                                                       // 77
      out += '  <url>\n'                                                               // 78
        + '    <loc>' + prepareUrl(page.page) + '</loc>\n';                            // 79
                                                                                       // 80
      if (page.lastmod) {                                                              // 81
        date = new Date(page.lastmod);                                                 // 82
        w3cDateTimeTS = date.getUTCFullYear() + '-'                                    // 83
          + (date.getUTCMonth()+1).lpad(2) + '-'                                       // 84
          + date.getUTCDate().lpad(2) + 'T'                                            // 85
          + date.getUTCHours().lpad(2) + ':'                                           // 86
          + date.getUTCMinutes().lpad(2) + ':'                                         // 87
          + date.getUTCSeconds().lpad(2) + '+00:00';                                   // 88
        out += '    <lastmod>' + w3cDateTimeTS + '</lastmod>\n';                       // 89
      }                                                                                // 90
                                                                                       // 91
      if (page.changefreq)                                                             // 92
        out += '    <changefreq>' + page.changefreq + '</changefreq>\n';               // 93
                                                                                       // 94
      if (page.priority)                                                               // 95
        out += '    <priority>' + page.priority + '</priority>\n';                     // 96
                                                                                       // 97
      if (page.xhtmlLinks) {                                                           // 98
        namespaces.xhtml = true;                                                       // 99
        if (!_.isArray(page.xhtmlLinks))                                               // 100
          page.xhtmlLinks = [page.xhtmlLinks];                                         // 101
        _.each(page.xhtmlLinks, function(link) {                                       // 102
          out += '    <xhtml:link \n';                                                 // 103
          if (link.href)                                                               // 104
            link.href = prepareUrl(link.href);                                         // 105
          for (var key in link)                                                        // 106
            out += '      ' + key + '="' + link[key] + '"\n';                          // 107
          out += '      />\n';                                                         // 108
        });                                                                            // 109
      }                                                                                // 110
                                                                                       // 111
      _.each(['image', 'video'], function(tag) {                                       // 112
        var tagS = tag+'s';                                                            // 113
        if (page[tagS]) {                                                              // 114
          namespaces[tag] = true;                                                      // 115
          if (!_.isArray(page[tagS]))                                                  // 116
            page[tagS] = [page[tagS]];                                                 // 117
                                                                                       // 118
          _.each(page[tagS], function(data) {                                          // 119
            out += '      <'+tag+':'+tag+'> \n';                                       // 120
                                                                                       // 121
            for (var key in data) {                                                    // 122
              if (key == 'loc' || key.match(/_loc$/))                                  // 123
                data[key] = prepareUrl(data[key]);                                     // 124
              out += '        <'+tag+':'+key+'>' + data[key] + '</'+tag+':'+key+'>\n'; // 125
            }                                                                          // 126
                                                                                       // 127
            out += '      </'+tag+':'+tag+'> \n';                                      // 128
          });                                                                          // 129
        }                                                                              // 130
      });                                                                              // 131
                                                                                       // 132
      out  += '   </url>\n\n';                                                         // 133
    });                                                                                // 134
                                                                                       // 135
    out += '</urlset>\n';                                                              // 136
                                                                                       // 137
    // We do this last so we know which namesapces to add                              // 138
    var header = '<?xml version="1.0" encoding="UTF-8"?>\n'                            // 139
      + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"';                 // 140
                                                                                       // 141
    if (namespaces.xhtml)                                                              // 142
      header += '\n  xmlns:xhtml="http://www.w3.org/1999/xhtml"';                      // 143
    if (namespaces.image)                                                              // 144
      header += '\n  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"';   // 145
    if (namespaces.video)                                                              // 146
      header += '\n  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"';   // 147
    header += '>\n';                                                                   // 148
                                                                                       // 149
    out = header + out;                                                                // 150
                                                                                       // 151
    res.writeHead(200, {'Content-Type': 'application/xml'});                           // 152
    res.end(out, 'utf8');                                                              // 153
    return;                                                                            // 154
  }).run();                                                                            // 155
});                                                                                    // 156
                                                                                       // 157
sitemaps.add = function(url, func) {                                                   // 158
  "use strict";                                                                        // 159
  check(url, String);                                                                  // 160
  if (url.charAt(0) !== '/')                                                           // 161
    url = '/' + url;                                                                   // 162
                                                                                       // 163
  sitemaps._list[url] = func;                                                          // 164
  robots.addLine('Sitemap: ' + prepareUrl(url));                                       // 165
};                                                                                     // 166
                                                                                       // 167
/*                                                                                     // 168
sitemaps.add('/sitemap.xml', function() {                                              // 169
  // 'page' is reqired                                                                 // 170
  // 'lastmod', 'changefreq', 'priority' are optional.                                 // 171
  return [                                                                             // 172
    { page: 'x', lastmod: new Date().getTime() },                                      // 173
    { page: 'y', lastmod: new Date().getTime(), changefreq: 'monthly' },               // 174
    { page: 'z', lastmod: new Date().getTime(), changefreq: 'monthly', priority: 0.8 } // 175
  ];                                                                                   // 176
});                                                                                    // 177
*/                                                                                     // 178
                                                                                       // 179
/////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['gadicohen:sitemaps'] = {
  sitemaps: sitemaps
};

})();

//# sourceMappingURL=gadicohen_sitemaps.js.map
