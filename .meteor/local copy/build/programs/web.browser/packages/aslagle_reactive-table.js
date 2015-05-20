//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Template = Package.templating.Template;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var _ = Package.underscore._;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var i18n = Package['anti:i18n'].i18n;
var Mongo = Package.mongo.Mongo;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var ReactiveTable, getFilterQuery, dependOnFilters, getFilterStrings, getFilterFields;

(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aslagle:reactive-table/lib/template.reactive_table.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
                                                                                                                // 1
Template.__checkName("reactiveTable");                                                                          // 2
Template["reactiveTable"] = new Template("Template.reactiveTable", (function() {                                // 3
  var view = this;                                                                                              // 4
  return Spacebars.With(function() {                                                                            // 5
    return Spacebars.call(view.lookup("context"));                                                              // 6
  }, function() {                                                                                               // 7
    return [ "\n  ", Blaze.If(function() {                                                                      // 8
      return Spacebars.call(view.lookup("ready"));                                                              // 9
    }, function() {                                                                                             // 10
      return [ "\n    ", HTML.DIV({                                                                             // 11
        "class": "clearfix"                                                                                     // 12
      }, "\n      ", HTML.DIV({                                                                                 // 13
        "class": "reactive-table-options col-sm-8 pull-right"                                                   // 14
      }, "\n        ", Blaze.If(function() {                                                                    // 15
        return Spacebars.call(view.lookup("showFilter"));                                                       // 16
      }, function() {                                                                                           // 17
        return [ "\n          ", HTML.DIV({                                                                     // 18
          "class": "reactive-table-filter form-group col-sm-8 pull-right"                                       // 19
        }, "\n            ", Blaze._TemplateWith(function() {                                                   // 20
          return {                                                                                              // 21
            id: Spacebars.call(view.lookup("getFilterId")),                                                     // 22
            useFontAwesome: Spacebars.call(view.lookup("useFontAwesome"))                                       // 23
          };                                                                                                    // 24
        }, function() {                                                                                         // 25
          return Spacebars.include(view.lookupTemplate("reactiveTableFilter"));                                 // 26
        }), "\n          "), "\n        " ];                                                                    // 27
      }), "\n        ", Blaze.If(function() {                                                                   // 28
        return Spacebars.call(view.lookup("showColumnToggles"));                                                // 29
      }, function() {                                                                                           // 30
        return [ "\n          ", HTML.DIV({                                                                     // 31
          "class": "reactive-table-columns-dropdown col-sm-4 pull-right"                                        // 32
        }, "\n            ", HTML.BUTTON({                                                                      // 33
          "class": "btn btn-default dropdown-toggle",                                                           // 34
          id: function() {                                                                                      // 35
            return [ "reactive-table-add-column-", Spacebars.mustache(view.lookup("id")) ];                     // 36
          },                                                                                                    // 37
          "data-toggle": "dropdown"                                                                             // 38
        }, "\n              ", Blaze.View("lookup:i18n", function() {                                           // 39
          return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.columns");                              // 40
        }), "\n            "), "\n            ", HTML.UL({                                                      // 41
          "class": "dropdown-menu dropdown-menu-right",                                                         // 42
          role: "menu",                                                                                         // 43
          "aria-labelledby": function() {                                                                       // 44
            return [ "reactive-table-add-column-", Spacebars.mustache(view.lookup("id")) ];                     // 45
          }                                                                                                     // 46
        }, "\n              ", Blaze.Each(function() {                                                          // 47
          return Spacebars.call(view.lookup("fields"));                                                         // 48
        }, function() {                                                                                         // 49
          return [ "\n                ", Blaze.Unless(function() {                                              // 50
            return Spacebars.call(view.lookup("hideToggle"));                                                   // 51
          }, function() {                                                                                       // 52
            return [ "\n                  ", HTML.LI({                                                          // 53
              role: "presentation"                                                                              // 54
            }, HTML.A({                                                                                         // 55
              role: "menuitem",                                                                                 // 56
              tabindex: "-1",                                                                                   // 57
              "data-target": "#"                                                                                // 58
            }, "\n                    ", HTML.LABEL("\n                      ", Blaze.If(function() {           // 59
              return Spacebars.call(view.lookup("isVisible"));                                                  // 60
            }, function() {                                                                                     // 61
              return [ "\n                        ", HTML.INPUT({                                               // 62
                type: "checkbox",                                                                               // 63
                checked: "",                                                                                    // 64
                "data-fieldid": function() {                                                                    // 65
                  return Spacebars.mustache(view.lookup("fieldId"));                                            // 66
                }                                                                                               // 67
              }), "\n                      " ];                                                                 // 68
            }, function() {                                                                                     // 69
              return [ "\n                        ", HTML.INPUT({                                               // 70
                type: "checkbox",                                                                               // 71
                "data-fieldid": function() {                                                                    // 72
                  return Spacebars.mustache(view.lookup("fieldId"));                                            // 73
                }                                                                                               // 74
              }), "\n                      " ];                                                                 // 75
            }), "\n                      ", Blaze.If(function() {                                               // 76
              return Spacebars.call(view.lookup("labelIsTemplate"));                                            // 77
            }, function() {                                                                                     // 78
              return Spacebars.With(function() {                                                                // 79
                return Spacebars.call(view.lookup("labelData"));                                                // 80
              }, function() {                                                                                   // 81
                return Spacebars.include(function() {                                                           // 82
                  return Spacebars.call(Spacebars.dot(view.lookup(".."), "label"));                             // 83
                });                                                                                             // 84
              });                                                                                               // 85
            }, function() {                                                                                     // 86
              return Blaze.View("lookup:getLabel", function() {                                                 // 87
                return Spacebars.mustache(view.lookup("getLabel"));                                             // 88
              });                                                                                               // 89
            }), "\n                    "), "\n                  ")), "\n                " ];                    // 90
          }), "\n              " ];                                                                             // 91
        }), "\n            "), "\n          "), "\n        " ];                                                 // 92
      }), "\n      "), "\n    "), "\n    ", Blaze.Unless(function() {                                           // 93
        return Spacebars.call(view.lookup("noData"));                                                           // 94
      }, function() {                                                                                           // 95
        return [ "\n      ", HTML.TABLE({                                                                       // 96
          id: function() {                                                                                      // 97
            return Spacebars.mustache(view.lookup("id"));                                                       // 98
          },                                                                                                    // 99
          "class": function() {                                                                                 // 100
            return [ Spacebars.mustache(view.lookup("class")), " reactive-table" ];                             // 101
          }                                                                                                     // 102
        }, "\n        ", HTML.THEAD("\n          ", HTML.TR("\n            ", Blaze.Each(function() {           // 103
          return Spacebars.call(view.lookup("fields"));                                                         // 104
        }, function() {                                                                                         // 105
          return [ "\n              ", Blaze.If(function() {                                                    // 106
            return Spacebars.call(view.lookup("isVisible"));                                                    // 107
          }, function() {                                                                                       // 108
            return [ "\n                ", Blaze.If(function() {                                                // 109
              return Spacebars.call(view.lookup("isSortKey"));                                                  // 110
            }, function() {                                                                                     // 111
              return [ "\n                  ", HTML.TH({                                                        // 112
                "class": function() {                                                                           // 113
                  return [ "sortable ", Spacebars.mustache(view.lookup("getHeaderClass")) ];                    // 114
                },                                                                                              // 115
                fieldid: function() {                                                                           // 116
                  return Spacebars.mustache(view.lookup("getFieldFieldId"));                                    // 117
                }                                                                                               // 118
              }, "\n                    ", Blaze.If(function() {                                                // 119
                return Spacebars.call(view.lookup("labelIsTemplate"));                                          // 120
              }, function() {                                                                                   // 121
                return Spacebars.With(function() {                                                              // 122
                  return Spacebars.call(view.lookup("labelData"));                                              // 123
                }, function() {                                                                                 // 124
                  return Spacebars.include(function() {                                                         // 125
                    return Spacebars.call(Spacebars.dot(view.lookup(".."), "label"));                           // 126
                  });                                                                                           // 127
                });                                                                                             // 128
              }, function() {                                                                                   // 129
                return Blaze.View("lookup:getLabel", function() {                                               // 130
                  return Spacebars.mustache(view.lookup("getLabel"));                                           // 131
                });                                                                                             // 132
              }), HTML.CharRef({                                                                                // 133
                html: "&nbsp;",                                                                                 // 134
                str: " "                                                                                        // 135
              }), HTML.CharRef({                                                                                // 136
                html: "&nbsp;",                                                                                 // 137
                str: " "                                                                                        // 138
              }), "\n                    ", Blaze.If(function() {                                               // 139
                return Spacebars.call(view.lookup("isAscending"));                                              // 140
              }, function() {                                                                                   // 141
                return [ "\n                      ", Blaze.If(function() {                                      // 142
                  return Spacebars.call(Spacebars.dot(view.lookup(".."), "useFontAwesome"));                    // 143
                }, function() {                                                                                 // 144
                  return [ "\n                        ", HTML.I({                                               // 145
                    "class": "fa fa-sort-asc"                                                                   // 146
                  }), "\n                      " ];                                                             // 147
                }, function() {                                                                                 // 148
                  return [ "\n                        ", HTML.CharRef({                                         // 149
                    html: "&#x25B2;",                                                                           // 150
                    str: "▲"                                                                                    // 151
                  }), "\n                      " ];                                                             // 152
                }), "\n                    " ];                                                                 // 153
              }, function() {                                                                                   // 154
                return [ "\n                      ", Blaze.If(function() {                                      // 155
                  return Spacebars.call(Spacebars.dot(view.lookup(".."), "useFontAwesome"));                    // 156
                }, function() {                                                                                 // 157
                  return [ "\n                        ", HTML.I({                                               // 158
                    "class": "fa fa-sort-desc"                                                                  // 159
                  }), "\n                      " ];                                                             // 160
                }, function() {                                                                                 // 161
                  return [ "\n                        ", HTML.CharRef({                                         // 162
                    html: "&#x25BC;",                                                                           // 163
                    str: "▼"                                                                                    // 164
                  }), "\n                      " ];                                                             // 165
                }), "\n                    " ];                                                                 // 166
              }), "\n                  "), "\n                " ];                                              // 167
            }, function() {                                                                                     // 168
              return [ "\n                  ", Blaze.If(function() {                                            // 169
                return Spacebars.call(view.lookup("isSortable"));                                               // 170
              }, function() {                                                                                   // 171
                return [ "\n                    ", HTML.TH({                                                    // 172
                  "class": function() {                                                                         // 173
                    return [ Spacebars.mustache(view.lookup("getHeaderClass")), " sortable" ];                  // 174
                  },                                                                                            // 175
                  fieldid: function() {                                                                         // 176
                    return Spacebars.mustache(view.lookup("getFieldFieldId"));                                  // 177
                  }                                                                                             // 178
                }, Blaze.If(function() {                                                                        // 179
                  return Spacebars.call(view.lookup("labelIsTemplate"));                                        // 180
                }, function() {                                                                                 // 181
                  return Spacebars.With(function() {                                                            // 182
                    return Spacebars.call(view.lookup("labelData"));                                            // 183
                  }, function() {                                                                               // 184
                    return Spacebars.include(function() {                                                       // 185
                      return Spacebars.call(Spacebars.dot(view.lookup(".."), "label"));                         // 186
                    });                                                                                         // 187
                  });                                                                                           // 188
                }, function() {                                                                                 // 189
                  return Blaze.View("lookup:getLabel", function() {                                             // 190
                    return Spacebars.mustache(view.lookup("getLabel"));                                         // 191
                  });                                                                                           // 192
                })), "\n                  " ];                                                                  // 193
              }, function() {                                                                                   // 194
                return [ "\n                    ", HTML.TH({                                                    // 195
                  "class": function() {                                                                         // 196
                    return Spacebars.mustache(view.lookup("getHeaderClass"));                                   // 197
                  },                                                                                            // 198
                  fieldid: function() {                                                                         // 199
                    return Spacebars.mustache(view.lookup("getFieldFieldId"));                                  // 200
                  }                                                                                             // 201
                }, Blaze.If(function() {                                                                        // 202
                  return Spacebars.call(view.lookup("labelIsTemplate"));                                        // 203
                }, function() {                                                                                 // 204
                  return Spacebars.With(function() {                                                            // 205
                    return Spacebars.call(view.lookup("labelData"));                                            // 206
                  }, function() {                                                                               // 207
                    return Spacebars.include(function() {                                                       // 208
                      return Spacebars.call(Spacebars.dot(view.lookup(".."), "label"));                         // 209
                    });                                                                                         // 210
                  });                                                                                           // 211
                }, function() {                                                                                 // 212
                  return Blaze.View("lookup:getLabel", function() {                                             // 213
                    return Spacebars.mustache(view.lookup("getLabel"));                                         // 214
                  });                                                                                           // 215
                })), "\n                  " ];                                                                  // 216
              }), "\n                " ];                                                                       // 217
            }), "\n              " ];                                                                           // 218
          }), "\n            " ];                                                                               // 219
        }), "\n          "), "\n        "), "\n        ", HTML.TBODY("\n          ", Blaze.Each(function() {    // 220
          return Spacebars.call(view.lookup("sortedRows"));                                                     // 221
        }, function() {                                                                                         // 222
          return [ "\n            ", HTML.TR({                                                                  // 223
            "class": function() {                                                                               // 224
              return Spacebars.mustache(Spacebars.dot(view.lookup(".."), "rowClass"), view.lookup("."));        // 225
            }                                                                                                   // 226
          }, "\n              ", Blaze.Each(function() {                                                        // 227
            return Spacebars.call(Spacebars.dot(view.lookup(".."), "fields"));                                  // 228
          }, function() {                                                                                       // 229
            return [ "\n                ", Blaze.If(function() {                                                // 230
              return Spacebars.call(view.lookup("isVisible"));                                                  // 231
            }, function() {                                                                                     // 232
              return [ "\n                  ", HTML.TD({                                                        // 233
                "class": function() {                                                                           // 234
                  return Spacebars.mustache(view.lookup("getCellClass"), view.lookup(".."));                    // 235
                }                                                                                               // 236
              }, Blaze.If(function() {                                                                          // 237
                return Spacebars.call(view.lookup("tmpl"));                                                     // 238
              }, function() {                                                                                   // 239
                return Spacebars.With(function() {                                                              // 240
                  return Spacebars.call(view.lookup(".."));                                                     // 241
                }, function() {                                                                                 // 242
                  return Spacebars.include(function() {                                                         // 243
                    return Spacebars.call(Spacebars.dot(view.lookup(".."), "tmpl"));                            // 244
                  });                                                                                           // 245
                });                                                                                             // 246
              }, function() {                                                                                   // 247
                return Blaze.View("lookup:getField", function() {                                               // 248
                  return Spacebars.mustache(view.lookup("getField"), view.lookup(".."));                        // 249
                });                                                                                             // 250
              })), "\n                " ];                                                                      // 251
            }), "\n              " ];                                                                           // 252
          }), "\n            "), "\n          " ];                                                              // 253
        }), "\n        "), "\n      "), "\n      ", Blaze.If(function() {                                       // 254
          return Spacebars.call(view.lookup("showNavigation"));                                                 // 255
        }, function() {                                                                                         // 256
          return [ "\n        ", HTML.DIV({                                                                     // 257
            "class": "reactive-table-navigation"                                                                // 258
          }, "\n          ", Blaze.If(function() {                                                              // 259
            return Spacebars.call(view.lookup("showNavigationRowsPerPage"));                                    // 260
          }, function() {                                                                                       // 261
            return [ "\n            ", HTML.DIV({                                                               // 262
              "class": "form-inline form-group rows-per-page"                                                   // 263
            }, "\n              ", HTML.LABEL(Blaze.View("lookup:i18n", function() {                            // 264
              return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.show");                             // 265
            }), HTML.CharRef({                                                                                  // 266
              html: "&nbsp;",                                                                                   // 267
              str: " "                                                                                          // 268
            }), HTML.INPUT({                                                                                    // 269
              "class": "form-control",                                                                          // 270
              type: "text",                                                                                     // 271
              value: function() {                                                                               // 272
                return Spacebars.mustache(view.lookup("getRowsPerPage"));                                       // 273
              }                                                                                                 // 274
            }), HTML.CharRef({                                                                                  // 275
              html: "&nbsp;",                                                                                   // 276
              str: " "                                                                                          // 277
            }), Blaze.View("lookup:i18n", function() {                                                          // 278
              return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.rowsPerPage");                      // 279
            })), "\n            "), "\n          " ];                                                           // 280
          }), "\n          ", HTML.DIV({                                                                        // 281
            "class": "form-inline form-group page-number"                                                       // 282
          }, "\n            ", Blaze.If(function() {                                                            // 283
            return Spacebars.call(view.lookup("isntFirstPage"));                                                // 284
          }, function() {                                                                                       // 285
            return [ "\n              ", HTML.LABEL({                                                           // 286
              "class": "previous-page"                                                                          // 287
            }, HTML.CharRef({                                                                                   // 288
              html: "&lt;",                                                                                     // 289
              str: "<"                                                                                          // 290
            })), HTML.CharRef({                                                                                 // 291
              html: "&nbsp;",                                                                                   // 292
              str: " "                                                                                          // 293
            }), HTML.CharRef({                                                                                  // 294
              html: "&nbsp;",                                                                                   // 295
              str: " "                                                                                          // 296
            }), "\n            " ];                                                                             // 297
          }), "\n            ", HTML.LABEL(Blaze.View("lookup:i18n", function() {                               // 298
            return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.page");                               // 299
          }), HTML.CharRef({                                                                                    // 300
            html: "&nbsp;",                                                                                     // 301
            str: " "                                                                                            // 302
          }), HTML.INPUT({                                                                                      // 303
            "class": "form-control",                                                                            // 304
            type: "text",                                                                                       // 305
            value: function() {                                                                                 // 306
              return Spacebars.mustache(view.lookup("getCurrentPage"));                                         // 307
            }                                                                                                   // 308
          }), HTML.CharRef({                                                                                    // 309
            html: "&nbsp;",                                                                                     // 310
            str: " "                                                                                            // 311
          }), Blaze.View("lookup:i18n", function() {                                                            // 312
            return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.of");                                 // 313
          }), " ", Blaze.View("lookup:getPageCount", function() {                                               // 314
            return Spacebars.mustache(view.lookup("getPageCount"));                                             // 315
          })), "\n            ", Blaze.If(function() {                                                          // 316
            return Spacebars.call(view.lookup("isntLastPage"));                                                 // 317
          }, function() {                                                                                       // 318
            return [ "\n              ", HTML.LABEL({                                                           // 319
              "class": "next-page"                                                                              // 320
            }, HTML.CharRef({                                                                                   // 321
              html: "&nbsp;",                                                                                   // 322
              str: " "                                                                                          // 323
            }), HTML.CharRef({                                                                                  // 324
              html: "&nbsp;",                                                                                   // 325
              str: " "                                                                                          // 326
            }), HTML.CharRef({                                                                                  // 327
              html: "&gt;",                                                                                     // 328
              str: ">"                                                                                          // 329
            })), "\n            " ];                                                                            // 330
          }), "\n          "), "\n        "), "\n      " ];                                                     // 331
        }), "\n    " ];                                                                                         // 332
      }, function() {                                                                                           // 333
        return [ "\n      ", Spacebars.include(view.lookupTemplate("noDataTmpl")), "\n    " ];                  // 334
      }), "\n  " ];                                                                                             // 335
    }), "\n  " ];                                                                                               // 336
  });                                                                                                           // 337
}));                                                                                                            // 338
                                                                                                                // 339
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aslagle:reactive-table/lib/template.filter.js                                                       //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
                                                                                                                // 1
Template.__checkName("reactiveTableFilter");                                                                    // 2
Template["reactiveTableFilter"] = new Template("Template.reactiveTableFilter", (function() {                    // 3
  var view = this;                                                                                              // 4
  return HTML.DIV({                                                                                             // 5
    id: function() {                                                                                            // 6
      return Spacebars.mustache(view.lookup("id"));                                                             // 7
    },                                                                                                          // 8
    "class": function() {                                                                                       // 9
      return Spacebars.mustache(view.lookup("class"));                                                          // 10
    }                                                                                                           // 11
  }, "\n    ", HTML.SPAN({                                                                                      // 12
    "class": "input-group-addon"                                                                                // 13
  }, "\n      ", Blaze.If(function() {                                                                          // 14
    return Spacebars.call(view.lookup("useFontAwesome"));                                                       // 15
  }, function() {                                                                                               // 16
    return [ "\n        ", HTML.I({                                                                             // 17
      "class": "fa fa-filter"                                                                                   // 18
    }), "\n      " ];                                                                                           // 19
  }, function() {                                                                                               // 20
    return [ "\n        ", Blaze.If(function() {                                                                // 21
      return Spacebars.call(view.lookup("label"));                                                              // 22
    }, function() {                                                                                             // 23
      return [ "\n          ", HTML.SPAN(Blaze.View("lookup:label", function() {                                // 24
        return Spacebars.mustache(view.lookup("label"));                                                        // 25
      })), "\n        " ];                                                                                      // 26
    }, function() {                                                                                             // 27
      return [ "\n          ", Blaze.View("lookup:i18n", function() {                                           // 28
        return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.filter");                                 // 29
      }), "\n        " ];                                                                                       // 30
    }), "\n      " ];                                                                                           // 31
  }), "\n    "), "\n    ", Blaze.If(function() {                                                                // 32
    return Spacebars.call(view.lookup("useFontAwesome"));                                                       // 33
  }, function() {                                                                                               // 34
    return [ "\n      ", Blaze.If(function() {                                                                  // 35
      return Spacebars.call(view.lookup("label"));                                                              // 36
    }, function() {                                                                                             // 37
      return [ "\n        ", HTML.INPUT({                                                                       // 38
        "class": "reactive-table-input form-control",                                                           // 39
        type: "text",                                                                                           // 40
        value: function() {                                                                                     // 41
          return Spacebars.mustache(view.lookup("filter"));                                                     // 42
        },                                                                                                      // 43
        placeholder: function() {                                                                               // 44
          return Spacebars.mustache(view.lookup("label"));                                                      // 45
        }                                                                                                       // 46
      }), "\n      " ];                                                                                         // 47
    }, function() {                                                                                             // 48
      return [ "\n        ", HTML.INPUT({                                                                       // 49
        "class": "reactive-table-input form-control",                                                           // 50
        type: "text",                                                                                           // 51
        value: function() {                                                                                     // 52
          return Spacebars.mustache(view.lookup("filter"));                                                     // 53
        },                                                                                                      // 54
        placeholder: function() {                                                                               // 55
          return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.filter");                               // 56
        }                                                                                                       // 57
      }), "\n      " ];                                                                                         // 58
    }), "\n    " ];                                                                                             // 59
  }, function() {                                                                                               // 60
    return [ "\n      ", HTML.INPUT({                                                                           // 61
      "class": "reactive-table-input form-control",                                                             // 62
      type: "text",                                                                                             // 63
      value: function() {                                                                                       // 64
        return Spacebars.mustache(view.lookup("filter"));                                                       // 65
      }                                                                                                         // 66
    }), "\n    " ];                                                                                             // 67
  }), "\n  ");                                                                                                  // 68
}));                                                                                                            // 69
                                                                                                                // 70
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aslagle:reactive-table/lib/reactive_table_i18n.js                                                   //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
i18n.map('en', {                                                                                                // 1
    reactiveTable: {                                                                                            // 2
        filter: 'Filter',                                                                                       // 3
        columns: 'Columns',                                                                                     // 4
        show: 'Show',                                                                                           // 5
        rowsPerPage: 'rows per page',                                                                           // 6
        page: 'Page',                                                                                           // 7
        of: 'of'                                                                                                // 8
    }                                                                                                           // 9
});                                                                                                             // 10
                                                                                                                // 11
i18n.map('fr', {                                                                                                // 12
    reactiveTable: {                                                                                            // 13
        filter: 'Filtre',                                                                                       // 14
        columns: 'Colonnes',                                                                                    // 15
        show: 'Voir',                                                                                           // 16
        rowsPerPage: 'lignes par page',                                                                         // 17
        page: 'page',                                                                                           // 18
        of: 'sur'                                                                                               // 19
    }                                                                                                           // 20
});                                                                                                             // 21
                                                                                                                // 22
i18n.map('ru', {                                                                                                // 23
    reactiveTable: {                                                                                            // 24
        filter: 'Фильтр',                                                                                       // 25
        columns: 'Колонка',                                                                                     // 26
        show: 'Показать',                                                                                       // 27
        rowsPerPage: 'линий на странице',                                                                       // 28
        page: 'Страница',                                                                                       // 29
        of: 'из'                                                                                                // 30
    }                                                                                                           // 31
});                                                                                                             // 32
                                                                                                                // 33
i18n.map('es', {                                                                                                // 34
    reactiveTable: {                                                                                            // 35
        filter: 'Filtro',                                                                                       // 36
        columns: 'Columnas',                                                                                    // 37
        show:   'Mostrar',                                                                                      // 38
        rowsPerPage: 'filas por página',                                                                        // 39
        page: 'Página',                                                                                         // 40
        of: 'de'                                                                                                // 41
    }                                                                                                           // 42
});                                                                                                             // 43
                                                                                                                // 44
i18n.map('nl', {                                                                                                // 45
    reactiveTable: {                                                                                            // 46
        filter: 'Filter',                                                                                       // 47
        show:   'Toon',                                                                                         // 48
        rowsPerPage: 'regels per pagina',                                                                       // 49
        page: 'Pagina',                                                                                         // 50
        of: 'van'                                                                                               // 51
    }                                                                                                           // 52
});                                                                                                             // 53
                                                                                                                // 54
i18n.map('pt-br', {                                                                                             // 55
    reactiveTable: {                                                                                            // 56
        filter: 'Filtro',                                                                                       // 57
        show: 'Mostrar',                                                                                        // 58
        rowsPerPage: 'linhas por página',                                                                       // 59
        page: 'Página',                                                                                         // 60
        of: 'de'                                                                                                // 61
    }                                                                                                           // 62
});                                                                                                             // 63
                                                                                                                // 64
i18n.map('it', {                                                                                                // 65
    reactiveTable: {                                                                                            // 66
        filter: 'Filtra',                                                                                       // 67
        show: 'Mostra',                                                                                         // 68
        rowsPerPage: 'righe per pagina',                                                                        // 69
        page: 'Pagina',                                                                                         // 70
        of: 'di'                                                                                                // 71
    }                                                                                                           // 72
});                                                                                                             // 73
                                                                                                                // 74
i18n.map('sv', {                                                                                                // 75
    reactiveTable: {                                                                                            // 76
        filter: 'Filter',                                                                                       // 77
        show: 'Visa',                                                                                           // 78
        rowsPerPage: 'rader per sida',                                                                          // 79
        page: 'Sida',                                                                                           // 80
        of: 'av'                                                                                                // 81
    }                                                                                                           // 82
});                                                                                                             // 83
                                                                                                                // 84
i18n.map('ua', {                                                                                                // 85
    reactiveTable: {                                                                                            // 86
        filter: 'Фільтр',                                                                                       // 87
        show: 'Показати',                                                                                       // 88
        rowsPerPage: 'рядків на сторінці',                                                                      // 89
        page: 'Сторінка',                                                                                       // 90
        of: 'з'                                                                                                 // 91
    }                                                                                                           // 92
});                                                                                                             // 93
                                                                                                                // 94
i18n.map('tr', {                                                                                                // 95
    reactiveTable: {                                                                                            // 96
        filter: 'Süz',                                                                                          // 97
        columns: 'Sütunlar',                                                                                    // 98
        show: 'Sayfa başına',                                                                                   // 99
        rowsPerPage: 'satır göster',                                                                            // 100
        page: 'Sayfa',                                                                                          // 101
        of: ' / '                                                                                               // 102
    }                                                                                                           // 103
});                                                                                                             // 104
                                                                                                                // 105
i18n.map('sk', {                                                                                                // 106
    reactiveTable: {                                                                                            // 107
        filter: 'Filter',                                                                                       // 108
        show: 'Zobraz',                                                                                         // 109
        rowsPerPage: 'riadkov na stranu',                                                                       // 110
        page: 'Strana',                                                                                         // 111
        of: 'z'                                                                                                 // 112
    }                                                                                                           // 113
});                                                                                                             // 114
                                                                                                                // 115
i18n.map('cs', {                                                                                                // 116
    reactiveTable: {                                                                                            // 117
        filter: 'Filter',                                                                                       // 118
        show: 'Zobraz',                                                                                         // 119
        rowsPerPage: 'řádků na stranu',                                                                         // 120
        page: 'Strana',                                                                                         // 121
        of: 'z'                                                                                                 // 122
    }                                                                                                           // 123
});                                                                                                             // 124
                                                                                                                // 125
i18n.map('he', {                                                                                                // 126
    reactiveTable: {                                                                                            // 127
        filter: 'פילטר',                                                                                        // 128
        show: 'הצג',                                                                                            // 129
        rowsPerPage: 'שורות לעמוד',                                                                             // 130
        page: 'עמוד',                                                                                           // 131
        of: 'מתוך'                                                                                              // 132
    }                                                                                                           // 133
});                                                                                                             // 134
                                                                                                                // 135
i18n.map('de', {                                                                                                // 136
    reactiveTable: {                                                                                            // 137
        filter: 'Filter',                                                                                       // 138
        columns: 'Spalten',                                                                                     // 139
        show: 'Zeige',                                                                                          // 140
        rowsPerPage: 'Zeilen pro Seite',                                                                        // 141
        page: 'Seite',                                                                                          // 142
        of: 'von'                                                                                               // 143
    }                                                                                                           // 144
});                                                                                                             // 145
                                                                                                                // 146
i18n.map('fi', {                                                                                                // 147
    reactiveTable: {                                                                                            // 148
        filter: 'Suodata',                                                                                      // 149
        show: 'Näytä',                                                                                          // 150
        rowsPerPage: 'riviä sivulla',                                                                           // 151
        page: 'Sivu',                                                                                           // 152
        of: ' / '                                                                                               // 153
    }                                                                                                           // 154
});                                                                                                             // 155
                                                                                                                // 156
i18n.map('no', {                                                                                                // 157
    reactiveTable: {                                                                                            // 158
        filter: 'Filter',                                                                                       // 159
        show: 'Vis',                                                                                            // 160
        rowsPerPage: 'rader per side',                                                                          // 161
        page: 'Side',                                                                                           // 162
        of: 'av'                                                                                                // 163
    }                                                                                                           // 164
});                                                                                                             // 165
                                                                                                                // 166
i18n.map('pl', {                                                                                                // 167
    reactiveTable: {                                                                                            // 168
        filter: 'Szukaj',                                                                                       // 169
        columns: 'Kolumny',                                                                                     // 170
        show: 'Pokaż',                                                                                          // 171
        rowsPerPage: 'pozycji na stronie',                                                                      // 172
        page: 'Strona',                                                                                         // 173
        of: 'z'                                                                                                 // 174
    }                                                                                                           // 175
});                                                                                                             // 176
                                                                                                                // 177
i18n.map('hr', {                                                                                                // 178
    reactiveTable: {                                                                                            // 179
        filter: 'Filter',                                                                                       // 180
        columns: 'Stupci',                                                                                      // 181
        show: 'Prikaži',                                                                                        // 182
        rowsPerPage: 'redova po stranici',                                                                      // 183
        page: 'Stranica',                                                                                       // 184
        of: 'od'                                                                                                // 185
    }                                                                                                           // 186
});                                                                                                             // 187
                                                                                                                // 188
i18n.map('is', {                                                                                                // 189
    reactiveTable: {                                                                                            // 190
        filter: 'Sía',                                                                                          // 191
        columns: 'Dálkar',                                                                                      // 192
        show: 'Sýna',                                                                                           // 193
        rowsPerPage: 'raðir á síðu',                                                                            // 194
        page: 'Síða',                                                                                           // 195
        of: 'af'                                                                                                // 196
    }                                                                                                           // 197
});                                                                                                             // 198
                                                                                                                // 199
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aslagle:reactive-table/lib/reactive_table.js                                                        //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var ReactiveTableCounts = new Mongo.Collection("reactive-table-counts");                                        // 1
                                                                                                                // 2
var get = function(obj, field) {                                                                                // 3
  var keys = field.split('.');                                                                                  // 4
  var value = obj;                                                                                              // 5
                                                                                                                // 6
  _.each(keys, function (key) {                                                                                 // 7
      if (_.isObject(value) && _.isFunction(value[key])) {                                                      // 8
          value = value[key]();                                                                                 // 9
      } else if (_.isObject(value) && !_.isUndefined(value[key])) {                                             // 10
          value = value[key];                                                                                   // 11
      } else {                                                                                                  // 12
          value = null;                                                                                         // 13
      }                                                                                                         // 14
  });                                                                                                           // 15
                                                                                                                // 16
  return value;                                                                                                 // 17
};                                                                                                              // 18
                                                                                                                // 19
var updateHandle = function (set_context) {                                                                     // 20
    var context = set_context;                                                                                  // 21
    if (context.server) {                                                                                       // 22
        var newHandle;                                                                                          // 23
                                                                                                                // 24
        // Could use the table id, but this way we can wait to change the                                       // 25
        // page until the new data is ready, so it doesn't move around                                          // 26
        // while rows are added and removed                                                                     // 27
        var publicationId = _.uniqueId();                                                                       // 28
        var newPublishedRows = new Mongo.Collection('reactive-table-rows-' + publicationId);                    // 29
        context.nextPublicationId.set(publicationId);                                                           // 30
                                                                                                                // 31
        var rowsPerPage = context.rowsPerPage.get();                                                            // 32
        var currentPage = context.currentPage.get();                                                            // 33
        var currentIndex = currentPage * rowsPerPage;                                                           // 34
                                                                                                                // 35
        var options = {                                                                                         // 36
            skip: currentIndex,                                                                                 // 37
            limit: rowsPerPage                                                                                  // 38
        };                                                                                                      // 39
        var sortQuery = {};                                                                                     // 40
                                                                                                                // 41
        var currentSortField = _.findWhere(context.fields, {fieldId: context.sortKey.get()});                   // 42
        if (currentSortField) {                                                                                 // 43
            sortQuery[currentSortField.key] = context.sortDirection.get();                                      // 44
        }                                                                                                       // 45
        options.sort = sortQuery;                                                                               // 46
        var filters = context.filters.get();                                                                    // 47
                                                                                                                // 48
        var onReady = function () {                                                                             // 49
            if (publicationId === context.nextPublicationId.get()) {                                            // 50
                context.ready.set(true);                                                                        // 51
                context.publicationId.set(publicationId);                                                       // 52
                context.publishedRows = newPublishedRows;                                                       // 53
                var oldHandle = context.handle;                                                                 // 54
                context.handle = newHandle;                                                                     // 55
                                                                                                                // 56
                if (oldHandle) {                                                                                // 57
                    oldHandle.stop();                                                                           // 58
                }                                                                                               // 59
            } else {                                                                                            // 60
                // another handle was created after this one                                                    // 61
                newHandle.stop();                                                                               // 62
            }                                                                                                   // 63
        };                                                                                                      // 64
        var onError = function (error) {                                                                        // 65
            console.log("ReactiveTable subscription error: " + error);                                          // 66
        };                                                                                                      // 67
        newHandle = Meteor.subscribe(                                                                           // 68
            "reactive-table-" + context.collection,                                                             // 69
            publicationId,                                                                                      // 70
            getFilterStrings(filters),                                                                          // 71
            getFilterFields(filters, context.fields),                                                           // 72
            options,                                                                                            // 73
            context.rowsPerPage.get(),                                                                          // 74
            {onReady: onReady, onError: onError}                                                                // 75
        );                                                                                                      // 76
    }                                                                                                           // 77
};                                                                                                              // 78
                                                                                                                // 79
                                                                                                                // 80
var getDefaultFalseSetting = function (key, templateData) {                                                     // 81
    if (!_.isUndefined(templateData[key]) &&                                                                    // 82
        templateData[key]) {                                                                                    // 83
        return true;                                                                                            // 84
    }                                                                                                           // 85
    if (!_.isUndefined(templateData.settings) &&                                                                // 86
        !_.isUndefined(templateData.settings[key]) &&                                                           // 87
        templateData.settings[key]) {                                                                           // 88
        return true;                                                                                            // 89
    }                                                                                                           // 90
    return false;                                                                                               // 91
};                                                                                                              // 92
                                                                                                                // 93
var getDefaultTrueSetting = function (key, templateData) {                                                      // 94
    if (!_.isUndefined(templateData[key]) &&                                                                    // 95
        !templateData[key]) {                                                                                   // 96
        return false;                                                                                           // 97
    }                                                                                                           // 98
    if (!_.isUndefined(templateData.settings) &&                                                                // 99
        !_.isUndefined(templateData.settings[key]) &&                                                           // 100
        !templateData.settings[key]) {                                                                          // 101
        return false;                                                                                           // 102
    }                                                                                                           // 103
    return true;                                                                                                // 104
};                                                                                                              // 105
                                                                                                                // 106
                                                                                                                // 107
                                                                                                                // 108
var setup = function () {                                                                                       // 109
    var context = {};                                                                                           // 110
    var oldContext = this.context || {};                                                                        // 111
    context.templateData = this.data;                                                                           // 112
    this.data.settings = this.data.settings || {};                                                              // 113
    var collection = this.data.collection || this.data.settings.collection || this.data;                        // 114
                                                                                                                // 115
    if (!(collection instanceof Mongo.Collection)) {                                                            // 116
        if (_.isArray(collection)) {                                                                            // 117
            // collection is an array                                                                           // 118
            // create a new collection from the data                                                            // 119
            var data = collection;                                                                              // 120
            collection = new Mongo.Collection(null);                                                            // 121
            _.each(data, function (doc) {                                                                       // 122
                collection.insert(doc);                                                                         // 123
            });                                                                                                 // 124
        } else if (_.isFunction(collection.fetch)) {                                                            // 125
            // collection is a cursor                                                                           // 126
            // create a new collection that will reactively update                                              // 127
            var cursor = collection;                                                                            // 128
            collection = new Mongo.Collection(null);                                                            // 129
                                                                                                                // 130
            // copy over transforms from collection-helper package                                              // 131
            collection._transform = cursor._transform;                                                          // 132
            collection._name = cursor.collection._name;                                                         // 133
                                                                                                                // 134
            var addedCallback = function (doc) {                                                                // 135
                collection.insert(doc);                                                                         // 136
            };                                                                                                  // 137
            var changedCallback = function (doc, oldDoc) {                                                      // 138
                collection.update(oldDoc._id, doc);                                                             // 139
            };                                                                                                  // 140
            var removedCallback = function (oldDoc) {                                                           // 141
                collection.remove(oldDoc._id);                                                                  // 142
            };                                                                                                  // 143
            cursor.observe({added: addedCallback, changed: changedCallback, removed: removedCallback});         // 144
        } else if (_.isString(collection)) {                                                                    // 145
            // server side publication                                                                          // 146
            context.server = true;                                                                              // 147
            context.publicationId = new ReactiveVar();                                                          // 148
            context.nextPublicationId = new ReactiveVar();                                                      // 149
            context.publishedRows = new Mongo.Collection(null);                                                 // 150
        } else {                                                                                                // 151
            console.error("reactiveTable error: argument is not an instance of Mongo.Collection, a cursor, or an array");
            collection = new Mongo.Collection(null);                                                            // 153
        }                                                                                                       // 154
    }                                                                                                           // 155
    context.collection = collection;                                                                            // 156
                                                                                                                // 157
    var fields = this.data.fields || this.data.settings.fields || {};                                           // 158
    if (_.keys(fields).length < 1 ||                                                                            // 159
        (_.keys(fields).length === 1 &&                                                                         // 160
         _.keys(fields)[0] === 'hash')) {                                                                       // 161
        fields = _.without(_.keys(collection.findOne() || {}), '_id');                                          // 162
    }                                                                                                           // 163
                                                                                                                // 164
    var fieldIdsArePresentAndUnique = function (fields) {                                                       // 165
        var uniqueFieldIds = _.chain(fields)                                                                    // 166
            .filter(function (field) {                                                                          // 167
                return !_.isUndefined(field.fieldId)                                                            // 168
            })                                                                                                  // 169
            .map(function (field) {                                                                             // 170
                return field.fieldId;                                                                           // 171
            })                                                                                                  // 172
            .uniq()                                                                                             // 173
            .value();                                                                                           // 174
        return uniqueFieldIds.length === fields.length;                                                         // 175
    };                                                                                                          // 176
                                                                                                                // 177
    // If at least one field specifies a fieldId, all fields must specify a                                     // 178
    // fieldId with a unique value                                                                              // 179
    if (_.find(fields, function (field) {                                                                       // 180
        return !_.isUndefined(field.fieldId)                                                                    // 181
        }) && !fieldIdsArePresentAndUnique(fields)) {                                                           // 182
        console.error("reactiveTable error: all fields must have a unique-valued fieldId if at least one has a fieldId attribute");
        fields = [];                                                                                            // 184
    }                                                                                                           // 185
                                                                                                                // 186
    var sortKey = null;                                                                                         // 187
    var sortDirection = 1;                                                                                      // 188
                                                                                                                // 189
    var normalizeField = function (field) {                                                                     // 190
        if (typeof field === 'string') {                                                                        // 191
            return {key: field, label: field};                                                                  // 192
        } else {                                                                                                // 193
            return field;                                                                                       // 194
        }                                                                                                       // 195
    };                                                                                                          // 196
                                                                                                                // 197
    var parseField = function (field, i) {                                                                      // 198
        var normalizedField = normalizeField(field);                                                            // 199
        if (!_.has(normalizedField, 'fieldId')) {                                                               // 200
            // Default fieldId to index in fields array if not present                                          // 201
            normalizedField.fieldId = i.toString();                                                             // 202
        }                                                                                                       // 203
        if (normalizedField.sort) {                                                                             // 204
            sortKey = normalizedField.fieldId;                                                                  // 205
            if (normalizedField.sort === 'desc' || normalizedField.sort === 'descending'  || normalizedField.sort === -1) {
                sortDirection = -1;                                                                             // 207
            }                                                                                                   // 208
        }                                                                                                       // 209
        return normalizedField;                                                                                 // 210
    };                                                                                                          // 211
                                                                                                                // 212
    fields = _.map(fields, parseField);                                                                         // 213
    if (!sortKey) {                                                                                             // 214
        // Default to sort of first column                                                                      // 215
        sortKey = (fields[0]) ? fields[0].fieldId : null;                                                       // 216
    }                                                                                                           // 217
    context.fields = fields;                                                                                    // 218
    context.sortKey = !_.isUndefined(oldContext.sortKey) ? oldContext.sortKey : new ReactiveVar(sortKey);       // 219
    context.sortDirection = !_.isUndefined(oldContext.sortDirection) ? oldContext.sortDirection : new ReactiveVar(sortDirection);
                                                                                                                // 221
    var visibleFields = [];                                                                                     // 222
    _.each(fields, function (field, i) {                                                                        // 223
        visibleFields.push({fieldId:field.fieldId, isVisible: getDefaultFieldVisibility(field)});               // 224
    });                                                                                                         // 225
    context.visibleFields = (!_.isUndefined(oldContext.visibleFields) && !_.isEmpty(oldContext.visibleFields)) ? oldContext.visibleFields : new ReactiveVar(visibleFields);
                                                                                                                // 227
                                                                                                                // 228
    var rowClass = this.data.rowClass || this.data.settings.rowClass || function() {return '';};                // 229
    if (typeof rowClass === 'string') {                                                                         // 230
        var tmp = rowClass;                                                                                     // 231
        rowClass = function(obj) { return tmp; };                                                               // 232
    }                                                                                                           // 233
    context.rowClass = rowClass;                                                                                // 234
                                                                                                                // 235
    context.class = this.data.class || this.data.settings.class || 'table table-striped table-hover col-sm-12'; // 236
    context.id = this.data.id || this.data.settings.id || _.uniqueId('reactive-table-');                        // 237
                                                                                                                // 238
    context.showNavigation = this.data.showNavigation || this.data.settings.showNavigation || 'always';         // 239
    context.showNavigationRowsPerPage = getDefaultTrueSetting('showNavigationRowsPerPage', this.data);          // 240
                                                                                                                // 241
    var rowsPerPage;                                                                                            // 242
    if (!_.isUndefined(oldContext.rowsPerPage)) {                                                               // 243
        rowsPerPage = oldContext.rowsPerPage;                                                                   // 244
    } else if (this.data.rowsPerPage && this.data.rowsPerPage instanceof ReactiveVar) {                         // 245
        rowsPerPage = this.data.rowsPerPage;                                                                    // 246
    } else if (this.data.settings.rowsPerPage && this.data.settings.rowsPerPage instanceof ReactiveVar) {       // 247
        rowsPerPage = this.data.settings.rowsPerPage;                                                           // 248
    } else {                                                                                                    // 249
        rowsPerPage = new ReactiveVar(this.data.rowsPerPage || this.data.settings.rowsPerPage || 10);           // 250
    }                                                                                                           // 251
    context.rowsPerPage = rowsPerPage;                                                                          // 252
                                                                                                                // 253
    var currentPage;                                                                                            // 254
    if (!_.isUndefined(oldContext.currentPage)) {                                                               // 255
        currentPage = oldContext.currentPage;                                                                   // 256
    } else if (this.data.currentPage && this.data.currentPage instanceof ReactiveVar) {                         // 257
        currentPage = this.data.currentPage;                                                                    // 258
    } else if (this.data.settings.currentPage && this.data.settings.currentPage instanceof ReactiveVar) {       // 259
        currentPage = this.data.settings.currentPage;                                                           // 260
    } else {                                                                                                    // 261
        currentPage = new ReactiveVar(0);                                                                       // 262
    }                                                                                                           // 263
    context.currentPage = currentPage;                                                                          // 264
                                                                                                                // 265
    var filters = this.data.filters || this.data.settings.filters || [];                                        // 266
    if (_.isEmpty(filters)) {                                                                                   // 267
      context.showFilter = getDefaultTrueSetting('showFilter', this.data);                                      // 268
    } else {                                                                                                    // 269
      context.showFilter = getDefaultFalseSetting('showFilter', this.data);                                     // 270
    }                                                                                                           // 271
    if (context.showFilter) {                                                                                   // 272
      filters.push(context.id + '-filter');                                                                     // 273
    }                                                                                                           // 274
    context.filters = new ReactiveVar(filters);                                                                 // 275
                                                                                                                // 276
    dependOnFilters(context.filters.get(), function () {                                                        // 277
      if (context.reactiveTableSetup) {                                                                         // 278
        context.currentPage.set(0);                                                                             // 279
        updateHandle(context);                                                                                  // 280
      }                                                                                                         // 281
    });                                                                                                         // 282
                                                                                                                // 283
    context.showColumnToggles = getDefaultFalseSetting('showColumnToggles', this.data);                         // 284
                                                                                                                // 285
    if (_.isUndefined(this.data.useFontAwesome)) {                                                              // 286
        if (!_.isUndefined(this.data.settings.useFontAwesome)) {                                                // 287
            context.useFontAwesome = this.data.settings.useFontAwesome;                                         // 288
        } else if (!_.isUndefined(Package['fortawesome:fontawesome'])) {                                        // 289
            context.useFontAwesome = true;                                                                      // 290
        } else {                                                                                                // 291
            context.useFontAwesome = false;                                                                     // 292
        }                                                                                                       // 293
    } else {                                                                                                    // 294
        context.useFontAwesome = this.data.useFontAwesome;                                                      // 295
    }                                                                                                           // 296
    context.noDataTmpl = this.data.noDataTmpl || this.data.settings.noDataTmpl;                                 // 297
    context.enableRegex = getDefaultFalseSetting('enableRegex', this.data);                                     // 298
                                                                                                                // 299
    context.ready = new ReactiveVar(true);                                                                      // 300
                                                                                                                // 301
    if (context.server) {                                                                                       // 302
        context.ready.set(false);                                                                               // 303
        updateHandle(context);                                                                                  // 304
    }                                                                                                           // 305
                                                                                                                // 306
    context.reactiveTableSetup = true;                                                                          // 307
                                                                                                                // 308
    this.context = context;                                                                                     // 309
};                                                                                                              // 310
                                                                                                                // 311
var getDefaultFieldVisibility = function (field) {                                                              // 312
    if (field.isVisible && field.isVisible instanceof ReactiveVar) {                                            // 313
        return field.isVisible;                                                                                 // 314
    }                                                                                                           // 315
    return new ReactiveVar(!field.hidden || (_.isFunction(field.hidden) && !field.hidden()));                   // 316
}                                                                                                               // 317
                                                                                                                // 318
var getPageCount = function () {                                                                                // 319
    var count;                                                                                                  // 320
    var rowsPerPage = this.rowsPerPage.get();                                                                   // 321
    if (this.server) {                                                                                          // 322
        count = ReactiveTableCounts.findOne(this.publicationId.get());                                          // 323
        return Math.ceil((count ? count.count : 0) / rowsPerPage);                                              // 324
    } else {                                                                                                    // 325
        var filterQuery = getFilterQuery(getFilterStrings(this.filters.get()), getFilterFields(this.filters.get(), this.fields), {enableRegex: this.enableRegex});
        count = this.collection.find(filterQuery).count();                                                      // 327
        return Math.ceil(count / rowsPerPage);                                                                  // 328
    }                                                                                                           // 329
};                                                                                                              // 330
                                                                                                                // 331
var getUpdateHandleForTemplate = function (template_instance) {                                                 // 332
    if (!template_instance.updateHandle) {                                                                      // 333
        template_instance.updateHandle = _.debounce(updateHandle, 200);                                         // 334
    }                                                                                                           // 335
    return template_instance.updateHandle;                                                                      // 336
};                                                                                                              // 337
                                                                                                                // 338
Template.reactiveTable.helpers({                                                                                // 339
                                                                                                                // 340
    'context': function () {                                                                                    // 341
        if (!Template.instance().context ||                                                                     // 342
            !_.isEqual(this, Template.instance().context.templateData)) {                                       // 343
            setup.call(Template.instance());                                                                    // 344
        }                                                                                                       // 345
        return Template.instance().context;                                                                     // 346
    },                                                                                                          // 347
                                                                                                                // 348
    'ready' : function () {                                                                                     // 349
        return this.ready.get();                                                                                // 350
    },                                                                                                          // 351
                                                                                                                // 352
    'getFilterId': function () {                                                                                // 353
        return this.id + '-filter';                                                                             // 354
    },                                                                                                          // 355
                                                                                                                // 356
    'getField': function (object) {                                                                             // 357
        var fn = this.fn || function (value) { return value; };                                                 // 358
        var key = this.key || this;                                                                             // 359
        var value = get(object, key);                                                                           // 360
        return fn(value, object);                                                                               // 361
    },                                                                                                          // 362
                                                                                                                // 363
    'getFieldIndex': function () {                                                                              // 364
        return _.indexOf(Template.parentData(1).fields, this);                                                  // 365
    },                                                                                                          // 366
                                                                                                                // 367
    'getFieldFieldId': function () {                                                                            // 368
        return this.fieldId;                                                                                    // 369
    },                                                                                                          // 370
                                                                                                                // 371
    'getKey': function () {                                                                                     // 372
        return this.key || this;                                                                                // 373
    },                                                                                                          // 374
                                                                                                                // 375
    'getHeaderClass': function () {                                                                             // 376
        if (_.isUndefined(this.headerClass)) {                                                                  // 377
            return this.key;                                                                                    // 378
        }                                                                                                       // 379
        var css;                                                                                                // 380
        if (_.isFunction(this.headerClass)) {                                                                   // 381
            css = this.headerClass();                                                                           // 382
        } else {                                                                                                // 383
            css = this.headerClass;                                                                             // 384
        }                                                                                                       // 385
        return css;                                                                                             // 386
    },                                                                                                          // 387
                                                                                                                // 388
    'getCellClass': function (object) {                                                                         // 389
        if (_.isUndefined(this.cellClass)) {                                                                    // 390
            return this.key;                                                                                    // 391
        }                                                                                                       // 392
        var css;                                                                                                // 393
        if (_.isFunction(this.cellClass)) {                                                                     // 394
            var value = get(object, this.key);                                                                  // 395
            css = this.cellClass(value, object);                                                                // 396
        } else {                                                                                                // 397
            css = this.cellClass;                                                                               // 398
        }                                                                                                       // 399
        return css;                                                                                             // 400
    },                                                                                                          // 401
                                                                                                                // 402
    'labelIsTemplate': function () {                                                                            // 403
        return this.label && _.isObject(this.label) && this.label instanceof Blaze.Template;                    // 404
    },                                                                                                          // 405
                                                                                                                // 406
    'getLabel': function () {                                                                                   // 407
        return _.isString(this.label) ? this.label : this.label();                                              // 408
    },                                                                                                          // 409
                                                                                                                // 410
    'isSortKey': function () {                                                                                  // 411
        var parentData = Template.parentData(1);                                                                // 412
        return parentData.sortKey.get() === this.fieldId;                                                       // 413
    },                                                                                                          // 414
                                                                                                                // 415
    'isSortable': function () {                                                                                 // 416
        return (this.sortable === undefined) ? true : this.sortable;                                            // 417
    },                                                                                                          // 418
                                                                                                                // 419
    'isVisible': function () {                                                                                  // 420
        var self = this; // is a field object                                                                   // 421
        var topLevelData;                                                                                       // 422
        if (Template.parentData(2) && Template.parentData(2).reactiveTableSetup) {                              // 423
          topLevelData = Template.parentData(2);                                                                // 424
        } else {                                                                                                // 425
          topLevelData = Template.parentData(1);                                                                // 426
        }                                                                                                       // 427
        var visibleFields = topLevelData.visibleFields.get();                                                   // 428
        var fields = topLevelData.fields;                                                                       // 429
                                                                                                                // 430
        var visibleField = _.findWhere(visibleFields, {fieldId: self.fieldId});                                 // 431
        if (visibleField) {                                                                                     // 432
            return visibleField.isVisible.get();                                                                // 433
        } else {                                                                                                // 434
            // Add field to visibleFields list                                                                  // 435
            var _isVisible = getDefaultFieldVisibility(self);                                                   // 436
            visibleFields.push({fieldId:self.fieldId, isVisible:_isVisible});                                   // 437
            topLevelData.visibleFields.set(visibleFields);                                                      // 438
            return _isVisible.get();                                                                            // 439
        }                                                                                                       // 440
    },                                                                                                          // 441
                                                                                                                // 442
    'isAscending' : function () {                                                                               // 443
        var sortDirection = Template.parentData(1).sortDirection.get();                                         // 444
        return (sortDirection === 1);                                                                           // 445
    },                                                                                                          // 446
                                                                                                                // 447
    'sortedRows': function () {                                                                                 // 448
        if (this.server) {                                                                                      // 449
            return this.publishedRows.find({                                                                    // 450
              "reactive-table-id": this.publicationId.get()                                                     // 451
            }, {                                                                                                // 452
              sort: {                                                                                           // 453
                "reactive-table-sort": 1                                                                        // 454
              }                                                                                                 // 455
            });                                                                                                 // 456
        } else  {                                                                                               // 457
            var sortDirection = this.sortDirection.get();                                                       // 458
            var sortKeyFieldId = this.sortKey.get();                                                            // 459
            var sortKeyField = _.findWhere(this.fields, {fieldId: sortKeyFieldId});                             // 460
                                                                                                                // 461
            var limit = this.rowsPerPage.get();                                                                 // 462
            var currentPage = this.currentPage.get();                                                           // 463
            var skip = currentPage * limit;                                                                     // 464
            var filterQuery = getFilterQuery(getFilterStrings(this.filters.get()), getFilterFields(this.filters.get(), this.fields), {enableRegex: this.enableRegex});
                                                                                                                // 466
            if (!sortKeyField) {                                                                                // 467
                // No sort field set, return unsorted collection                                                // 468
                return this.collection.find(filterQuery, {                                                      // 469
                    skip: skip,                                                                                 // 470
                    limit: limit                                                                                // 471
                });                                                                                             // 472
            } else if (sortKeyField.fn && !sortKeyField.sortByValue) {                                          // 473
                var data = this.collection.find(filterQuery).fetch();                                           // 474
                var sorted =_.sortBy(data, function (object) {                                                  // 475
                    return sortKeyField.fn(object[sortKeyField.key], object);                                   // 476
                });                                                                                             // 477
                if (sortDirection === -1) {                                                                     // 478
                    sorted = sorted.reverse();                                                                  // 479
                }                                                                                               // 480
                return sorted.slice(skip, skip + limit);                                                        // 481
            } else {                                                                                            // 482
                var sortKey = sortKeyField.key || sortKeyField;                                                 // 483
                var sortQuery = {};                                                                             // 484
                sortQuery[sortKey] = sortDirection;                                                             // 485
                                                                                                                // 486
                return this.collection.find(filterQuery, {                                                      // 487
                    sort: sortQuery,                                                                            // 488
                    skip: skip,                                                                                 // 489
                    limit: limit                                                                                // 490
                });                                                                                             // 491
            }                                                                                                   // 492
        }                                                                                                       // 493
    },                                                                                                          // 494
                                                                                                                // 495
    'noData': function () {                                                                                     // 496
        var pageCount = getPageCount.call(this);                                                                // 497
        return (pageCount === 0) && this.noDataTmpl;                                                            // 498
    },                                                                                                          // 499
                                                                                                                // 500
    'getPageCount' : getPageCount,                                                                              // 501
                                                                                                                // 502
    'getRowsPerPage' : function () {                                                                            // 503
        return this.rowsPerPage.get();                                                                          // 504
    },                                                                                                          // 505
                                                                                                                // 506
    'getCurrentPage' : function () {                                                                            // 507
        return 1 + this.currentPage.get();                                                                      // 508
    },                                                                                                          // 509
                                                                                                                // 510
    'isntFirstPage' : function () {                                                                             // 511
        return this.currentPage.get() > 0;                                                                      // 512
    },                                                                                                          // 513
                                                                                                                // 514
    'isntLastPage' : function () {                                                                              // 515
        var currentPage = 1 + this.currentPage.get();                                                           // 516
        var pageCount = getPageCount.call(this);                                                                // 517
        return currentPage < pageCount;                                                                         // 518
    },                                                                                                          // 519
                                                                                                                // 520
    'showNavigation' : function () {                                                                            // 521
        if (this.showNavigation === 'always') return true;                                                      // 522
        if (this.showNavigation === 'never') return false;                                                      // 523
        return getPageCount.call(this) > 1;                                                                     // 524
    }                                                                                                           // 525
});                                                                                                             // 526
                                                                                                                // 527
Template.reactiveTable.events({                                                                                 // 528
    'click .reactive-table .sortable': function (event) {                                                       // 529
        var template = Template.instance();                                                                     // 530
        var target = $(event.target).is('i') ? $(event.target).parent() : $(event.target);                      // 531
        var sortFieldId = target.attr('fieldid');                                                               // 532
        var currentSortFieldId = template.context.sortKey.get();                                                // 533
        if (currentSortFieldId === sortFieldId) {                                                               // 534
            var sortDirection = -1 * template.context.sortDirection.get();                                      // 535
            template.context.sortDirection.set(sortDirection);                                                  // 536
        } else {                                                                                                // 537
            template.context.sortKey.set(sortFieldId);                                                          // 538
        }                                                                                                       // 539
        getUpdateHandleForTemplate(template)(template.context);                                                 // 540
    },                                                                                                          // 541
                                                                                                                // 542
    'change .reactive-table-columns-dropdown input': function (event) {                                         // 543
        var template = Template.instance();                                                                     // 544
        var target = $(event.target);                                                                           // 545
        var fieldId = target.attr('data-fieldid');                                                              // 546
        var visibleFields = template.context.visibleFields.get();                                               // 547
        var visibleField = _.findWhere(visibleFields, {fieldId: fieldId});                                      // 548
        if (visibleField) {                                                                                     // 549
            // Toggle visibility                                                                                // 550
            visibleField.isVisible.set(!visibleField.isVisible.get());                                          // 551
            template.context.visibleFields.set(visibleFields);                                                  // 552
        }                                                                                                       // 553
    },                                                                                                          // 554
                                                                                                                // 555
    'change .reactive-table-navigation .rows-per-page input': function (event) {                                // 556
        var rowsPerPage = Math.max(~~$(event.target).val(), 1);                                                 // 557
        Template.instance().context.rowsPerPage.set(rowsPerPage);                                               // 558
        $(event.target).val(rowsPerPage);                                                                       // 559
        var template = Template.instance();                                                                     // 560
        getUpdateHandleForTemplate(template)(template.context);                                                 // 561
    },                                                                                                          // 562
                                                                                                                // 563
    'change .reactive-table-navigation .page-number input': function (event) {                                  // 564
        var currentPage = Math.max(~~$(event.target).val(), 1);                                                 // 565
        var pageCount = getPageCount.call(this);                                                                // 566
        if (currentPage > pageCount) {                                                                          // 567
          currentPage = pageCount;                                                                              // 568
        }                                                                                                       // 569
        if (currentPage < 0) {                                                                                  // 570
          currentPage = 1;                                                                                      // 571
        }                                                                                                       // 572
        var template = Template.instance();                                                                     // 573
        template.context.currentPage.set(currentPage - 1);                                                      // 574
        $(event.target).val(currentPage);                                                                       // 575
        getUpdateHandleForTemplate(template)(template.context);                                                 // 576
    },                                                                                                          // 577
                                                                                                                // 578
    'click .reactive-table-navigation .previous-page': function (event) {                                       // 579
        var template = Template.instance();                                                                     // 580
        var currentPage = template.context.currentPage.get();                                                   // 581
        template.context.currentPage.set(currentPage - 1);                                                      // 582
        getUpdateHandleForTemplate(template)(template.context);                                                 // 583
    },                                                                                                          // 584
                                                                                                                // 585
    'click .reactive-table-navigation .next-page': function (event) {                                           // 586
        var template = Template.instance();                                                                     // 587
        var currentPage = template.context.currentPage.get();                                                   // 588
        template.context.currentPage.set(currentPage + 1);                                                      // 589
        getUpdateHandleForTemplate(template)(template.context);                                                 // 590
    }                                                                                                           // 591
});                                                                                                             // 592
                                                                                                                // 593
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aslagle:reactive-table/lib/filter.js                                                                //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var parseFilterString = function (filterString) {                                                               // 1
  var startQuoteRegExp = /^[\'\"]/;                                                                             // 2
  var endQuoteRegExp = /[\'\"]$/;                                                                               // 3
  var filters = [];                                                                                             // 4
  var words = filterString.split(' ');                                                                          // 5
                                                                                                                // 6
  var inQuote = false;                                                                                          // 7
  var quotedWord = '';                                                                                          // 8
  _.each(words, function (word) {                                                                               // 9
    if (inQuote) {                                                                                              // 10
      if (endQuoteRegExp.test(word)) {                                                                          // 11
        filters.push(quotedWord + ' ' + word.slice(0, word.length - 1));                                        // 12
        inQuote = false;                                                                                        // 13
        quotedWord = '';                                                                                        // 14
      } else {                                                                                                  // 15
        quotedWord = quotedWord + ' ' + word;                                                                   // 16
      }                                                                                                         // 17
    } else if (startQuoteRegExp.test(word)) {                                                                   // 18
      if (endQuoteRegExp.test(word)) {                                                                          // 19
        filters.push(word.slice(1, word.length - 1));                                                           // 20
      } else {                                                                                                  // 21
        inQuote = true;                                                                                         // 22
        quotedWord = word.slice(1, word.length);                                                                // 23
      }                                                                                                         // 24
    } else {                                                                                                    // 25
      filters.push(word);                                                                                       // 26
    }                                                                                                           // 27
  });                                                                                                           // 28
  return filters;                                                                                               // 29
};                                                                                                              // 30
                                                                                                                // 31
var escapeRegex = function(text) {                                                                              // 32
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");                                                      // 33
};                                                                                                              // 34
                                                                                                                // 35
getFilterQuery = function (filterInputs, filterFields, settings) {                                              // 36
  settings = settings || {};                                                                                    // 37
  if (settings.enableRegex === undefined) {                                                                     // 38
    settings.enableRegex = false;                                                                               // 39
  }                                                                                                             // 40
  if (settings.fields) {                                                                                        // 41
    _.each(filterInputs, function (filter, index) {                                                             // 42
      if (_.any(settings.fields, function (include) { return include; })) {                                     // 43
        filterFields[index] = _.filter(filterFields[index], function (field) {                                  // 44
          return settings.fields[field];                                                                        // 45
        });                                                                                                     // 46
      } else {                                                                                                  // 47
        filterFields[index] = _.filter(filterFields[index], function (field) {                                  // 48
          return _.isUndefined(settings.fields[field]) || settings.fields[field];                               // 49
        });                                                                                                     // 50
      }                                                                                                         // 51
    });                                                                                                         // 52
  }                                                                                                             // 53
  var numberRegExp = /^\d+$/;                                                                                   // 54
  var queryList = [];                                                                                           // 55
  _.each(filterInputs, function (filter, index) {                                                               // 56
    if (filter) {                                                                                               // 57
      if (_.isObject(filter)) {                                                                                 // 58
        var fieldQueries = _.map(filterFields[index], function (field) {                                        // 59
          var query = {};                                                                                       // 60
          query[field] = filter;                                                                                // 61
          return query;                                                                                         // 62
        });                                                                                                     // 63
        if (fieldQueries.length) {                                                                              // 64
            queryList.push({'$or': fieldQueries});                                                              // 65
          }                                                                                                     // 66
      } else {                                                                                                  // 67
        var filters = parseFilterString(filter);                                                                // 68
        _.each(filters, function (filterWord) {                                                                 // 69
          if (settings.enableRegex === false) {                                                                 // 70
            filterWord = escapeRegex(filterWord);                                                               // 71
          }                                                                                                     // 72
          var filterQueryList = [];                                                                             // 73
          _.each(filterFields[index], function (field) {                                                        // 74
            var filterRegExp = new RegExp(filterWord, 'i');                                                     // 75
            var query = {};                                                                                     // 76
            query[field] = filterRegExp;                                                                        // 77
            filterQueryList.push(query);                                                                        // 78
                                                                                                                // 79
            if (numberRegExp.test(filterWord)) {                                                                // 80
              var numberQuery = {};                                                                             // 81
              numberQuery[field] = parseInt(filterWord, 10);                                                    // 82
              filterQueryList.push(numberQuery);                                                                // 83
            }                                                                                                   // 84
                                                                                                                // 85
            if (filterWord === "true") {                                                                        // 86
              var boolQuery = {};                                                                               // 87
              boolQuery[field] = true;                                                                          // 88
              filterQueryList.push(boolQuery);                                                                  // 89
            } else if (filterWord === "false") {                                                                // 90
              var boolQuery = {};                                                                               // 91
              boolQuery[field] = false;                                                                         // 92
              filterQueryList.push(boolQuery);                                                                  // 93
            }                                                                                                   // 94
          });                                                                                                   // 95
                                                                                                                // 96
          if (filterQueryList.length) {                                                                         // 97
            var filterQuery = {'$or': filterQueryList};                                                         // 98
            queryList.push(filterQuery);                                                                        // 99
          }                                                                                                     // 100
        });                                                                                                     // 101
      }                                                                                                         // 102
    }                                                                                                           // 103
  });                                                                                                           // 104
  return queryList.length ? {'$and': queryList} : {};                                                           // 105
};                                                                                                              // 106
                                                                                                                // 107
if (Meteor.isClient) {                                                                                          // 108
  ReactiveTable = ReactiveTable || {};                                                                          // 109
                                                                                                                // 110
  var reactiveTableFilters = {};                                                                                // 111
  var callbacks = {};                                                                                           // 112
                                                                                                                // 113
  ReactiveTable.Filter = function (id, fields) {                                                                // 114
    if (reactiveTableFilters[id]) {                                                                             // 115
        return reactiveTableFilters[id];                                                                        // 116
    }                                                                                                           // 117
                                                                                                                // 118
    var filter = new ReactiveVar();                                                                             // 119
                                                                                                                // 120
    this.fields = fields;                                                                                       // 121
                                                                                                                // 122
    this.get = function () {                                                                                    // 123
      return filter.get() || '';                                                                                // 124
    };                                                                                                          // 125
                                                                                                                // 126
    this.set = function (filterString) {                                                                        // 127
      filter.set(filterString);                                                                                 // 128
      _.each(callbacks[id], function (callback) {                                                               // 129
        callback();                                                                                             // 130
      });                                                                                                       // 131
    };                                                                                                          // 132
                                                                                                                // 133
    reactiveTableFilters[id] = this;                                                                            // 134
  };                                                                                                            // 135
                                                                                                                // 136
  ReactiveTable.clearFilters = function (filterIds) {                                                           // 137
    _.each(filterIds, function (filterId) {                                                                     // 138
      if (reactiveTableFilters[filterId]) {                                                                     // 139
        reactiveTableFilters[filterId].set('');                                                                 // 140
      }                                                                                                         // 141
    });                                                                                                         // 142
  };                                                                                                            // 143
                                                                                                                // 144
  dependOnFilters = function (filterIds, callback) {                                                            // 145
    _.each(filterIds, function (filterId) {                                                                     // 146
      if (_.isUndefined(callbacks[filterId])) {                                                                 // 147
        callbacks[filterId] = [];                                                                               // 148
      }                                                                                                         // 149
      callbacks[filterId].push(callback);                                                                       // 150
    });                                                                                                         // 151
  };                                                                                                            // 152
                                                                                                                // 153
  getFilterStrings = function (filterIds) {                                                                     // 154
    return _.map(filterIds, function (filterId) {                                                               // 155
      if (_.isUndefined(reactiveTableFilters[filterId])) {                                                      // 156
        return '';                                                                                              // 157
      }                                                                                                         // 158
      return reactiveTableFilters[filterId].get();                                                              // 159
    });                                                                                                         // 160
  };                                                                                                            // 161
                                                                                                                // 162
  getFilterFields = function (filterIds, allFields) {                                                           // 163
    return _.map(filterIds, function (filterId) {                                                               // 164
      if (_.isUndefined(reactiveTableFilters[filterId])) {                                                      // 165
        return _.map(allFields, function (field) { return field.key; });                                        // 166
      } else if (_.isEmpty(reactiveTableFilters[filterId].fields)) {                                            // 167
        return _.map(allFields, function (field) { return field.key; });                                        // 168
      } else {                                                                                                  // 169
        return reactiveTableFilters[filterId].fields;                                                           // 170
      }                                                                                                         // 171
    });                                                                                                         // 172
  };                                                                                                            // 173
                                                                                                                // 174
  Template.reactiveTableFilter.helpers({                                                                        // 175
    'class': function () {                                                                                      // 176
      return this.class || 'input-group';                                                                       // 177
    },                                                                                                          // 178
                                                                                                                // 179
    'filter': function () {                                                                                     // 180
      if (_.isUndefined(reactiveTableFilters[this.id])) {                                                       // 181
        new ReactiveTable.Filter(this.id, this.fields);                                                         // 182
      }                                                                                                         // 183
      return reactiveTableFilters[this.id].get();                                                               // 184
    }                                                                                                           // 185
  });                                                                                                           // 186
                                                                                                                // 187
  var updateFilter = _.debounce(function (template, filterText) {                                               // 188
    reactiveTableFilters[template.data.id].set(filterText);                                                     // 189
  }, 200);                                                                                                      // 190
                                                                                                                // 191
  Template.reactiveTableFilter.events({                                                                         // 192
    'keyup .reactive-table-input, input .reactive-table-input': function (event) {                              // 193
      var template = Template.instance();                                                                       // 194
      var filterText = $(event.target).val();                                                                   // 195
      updateFilter(template, filterText);                                                                       // 196
    },                                                                                                          // 197
  });                                                                                                           // 198
}                                                                                                               // 199
                                                                                                                // 200
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['aslagle:reactive-table'] = {
  ReactiveTable: ReactiveTable
};

})();
