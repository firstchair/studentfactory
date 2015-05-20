(function () {

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/telescope-messages/lib/client/messages.js                                    //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
Messages = {                                                                             // 1
  // Local (client-only) collection                                                      // 2
  collection: new Meteor.Collection(null),                                               // 3
                                                                                         // 4
  flash: function(message, type) {                                                       // 5
    type = (typeof type === 'undefined') ? 'error': type;                                // 6
    // Store errors in the local collection                                              // 7
    this.collection.insert({message:message, type:type, seen: false, show:true});        // 8
  },                                                                                     // 9
                                                                                         // 10
  clearSeen: function() {                                                                // 11
    this.collection.update({seen:true}, {$set: {show:false}}, {multi:true});             // 12
  }                                                                                      // 13
};                                                                                       // 14
                                                                                         // 15
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/telescope-messages/lib/client/templates/template.messages.js                 //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
                                                                                         // 1
Template.__checkName("messages");                                                        // 2
Template["messages"] = new Template("Template.messages", (function() {                   // 3
  var view = this;                                                                       // 4
  return Blaze.Each(function() {                                                         // 5
    return Spacebars.call(view.lookup("messages"));                                      // 6
  }, function() {                                                                        // 7
    return [ "\n		", Blaze._TemplateWith(function() {                                    // 8
      return {                                                                           // 9
        template: Spacebars.call(view.lookup("message_item"))                            // 10
      };                                                                                 // 11
    }, function() {                                                                      // 12
      return Spacebars.include(function() {                                              // 13
        return Spacebars.call(Template.__dynamic);                                       // 14
      });                                                                                // 15
    }), "\n	" ];                                                                         // 16
  });                                                                                    // 17
}));                                                                                     // 18
                                                                                         // 19
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/telescope-messages/lib/client/templates/messages.js                          //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
Template[getTemplate('messages')].helpers({                                              // 1
  message_item: function () {                                                            // 2
    return getTemplate('message_item');                                                  // 3
  },                                                                                     // 4
  messages: function(){                                                                  // 5
    return Messages.collection.find({show: true});                                       // 6
  }                                                                                      // 7
});                                                                                      // 8
                                                                                         // 9
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/telescope-messages/lib/client/templates/template.message_item.js             //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
                                                                                         // 1
Template.__checkName("message_item");                                                    // 2
Template["message_item"] = new Template("Template.message_item", (function() {           // 3
  var view = this;                                                                       // 4
  return Blaze.If(function() {                                                           // 5
    return Spacebars.call(view.lookup("show"));                                          // 6
  }, function() {                                                                        // 7
    return [ "\n    ", HTML.DIV({                                                        // 8
      "class": "grid"                                                                    // 9
    }, "\n      ", HTML.DIV({                                                            // 10
      "class": function() {                                                              // 11
        return [ "error ", Spacebars.mustache(view.lookup("type")), "-message module" ]; // 12
      }                                                                                  // 13
    }, "\n        ", Blaze.View("lookup:message", function() {                           // 14
      return Spacebars.mustache(view.lookup("message"));                                 // 15
    }), "\n      "), "\n    "), "\n  " ];                                                // 16
  });                                                                                    // 17
}));                                                                                     // 18
                                                                                         // 19
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/telescope-messages/lib/client/templates/message_item.js                      //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
Template[getTemplate('message_item')].onCreated(function(){                              // 1
	var messageId=this.data._id;                                                            // 2
                                                                                         // 3
	Meteor.setTimeout(function(){                                                           // 4
		Messages.collection.update(messageId, {$set: {seen:true}});                            // 5
	}, 100);                                                                                // 6
});                                                                                      // 7
                                                                                         // 8
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
