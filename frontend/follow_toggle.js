function FollowToggle(el) {
  this.$el = $(el);
  this.userId  = this.$el.attr("data-user-id");
  this.followState = this.$el.attr("data-initial-follow-state");
  this.render();
  // this.$el.on("click", this.handleClick(event)).bind(this);
  this.bindEvents();
}

FollowToggle.prototype.bindEvents = function() {
  // var that = this;
  this.$el.on("click", function(event) {
    this.handleClick(event);
  }.bind(this)); //or that
};

FollowToggle.prototype.render = function() {
  if (this.followState === 'followed') {
    this.$el.text("Followed!");
    this.$el.attr("disabled", false);
  } else if (this.followState === 'following' || this.followState === 'unfollowing') {
    this.$el.attr("disabled", true);   //////// SET DISABLED TRUE
  } else {
    this.$el.text("Unfollowed!");
    this.$el.attr("disabled", false);
  }
};


FollowToggle.prototype.changeState = function() {
  // if (this.followState === 'followed') {
  //   this.followState = 'unfollowed';
  // } else {
  //   this.followState = 'followed';
  // }
  if (this.followState === 'unfollowing') {
    this.followState = 'unfollowed';
  } else {
    this.followState = 'followed';
  }
};

FollowToggle.prototype.handleClick = function(e) {
  e.preventDefault();
  var that = this;

  if (this.followState === "followed"){

    this.followState = "unfollowing";  ////
    that.render(); //////

    var obj = {
      type: "DELETE"
    };
  } else {

    this.followState = 'following';  ///////
    that.render(); /////////

    var obj = {
      type: "POST"
    };
  }

  $.ajax({
    url: "/users/"+ that.userId + "/follow",
    type: obj.type,
    dataType: 'json',
    success: function(){
      console.log('success!');
      that.changeState();
      that.render();
    },
    error: function(err) {
      console.log("Error!!", err);
    }
  }); //.bind(this)
};

module.exports = FollowToggle;
