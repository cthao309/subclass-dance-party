// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"><img class="image_size" src="images/break_dance.gif" title="" /></span>');

  // invoke the step function
  this.step();

  this.timeBetweenSteps = timeBetweenSteps;

  // invoke the setPosition
  this.setPosition(top, left);
};

// Refactored to pseudoclassical instantiation method
MakeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

// Refactored to pseudoclassical instantiation method "setPosition"
MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
