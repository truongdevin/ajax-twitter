// WORK IN PROGRESS!!

function UsersSearch (el) {
  this.$el = $(el);
  this.$input  = this.$el.find("input");
  this.$list = this.$el.find(".users");
  this.render();
  this.bindEvents();
}
