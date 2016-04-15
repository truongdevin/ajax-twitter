var FollowToggle = require("./follow_toggle.js");

$(function() {
  var buttons = $(".follow-toggle");
  var buttonArr = []; //unnecessary?

  buttons.each(function(idx ,el){
    buttonArr.push(new FollowToggle(el));
  });
}

);
