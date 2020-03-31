var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // bound the makeDancer prototype step
  this.oldStep = MakeDancer.prototype.step;

  // bound "this" to the construct of makeDancer
  MakeDancer.call(this, top, left, timeBetweenSteps);

  // property name for dancer
  this.name = 'blinkyDancer';
}

// Create a prototypal fail look up
MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

// reassign MakeBlinkyDancer constructor to point to it self
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

// prototype method "step" for blinkyDancer
MakeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};