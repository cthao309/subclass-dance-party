var MakeBounceDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = MakeDancer.prototype.step;
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img class="animated bounceDancer" src="images/girl_dance.gif" title="" /></span>');
  // $(this.$node).toggleClass('dancer ');
  // $(this.$node).addClass('animated');
}

MakeBounceDancer.prototype = Object.create(MakeDancer.prototype);
MakeBounceDancer.prototype.constructor = MakeBounceDancer;

MakeBounceDancer.prototype.step = function() {
  this.oldStep();
}