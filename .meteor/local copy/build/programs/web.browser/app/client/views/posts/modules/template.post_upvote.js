(function(){
Template.__checkName("postUpvote");
Template["postUpvote"] = new Template("Template.postUpvote", (function() {
  var view = this;
  return HTML.Raw('<!-- {{#if upvoted}}\n    <span class="upvote-link voted action" title="{{_ "upvoted"}}">\n      {{{icon "voted" "icon-circle"}}}\n      <span class="sr-only">{{_ "upvoted"}}</span>\n    </span>\n  {{else}}\n    <a class="upvote-link not-voted action" href="#" title="{{_ "upvote_"}}">\n      {{{icon "upvote" "icon-circle"}}}\n      <span class="sr-only">{{_ "upvote_"}}</span>\n    </a>\n  {{/if}} -->');
}));

})();
