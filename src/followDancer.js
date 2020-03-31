var MakeFollowDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = MakeDancer.prototype.step;

  //console.log(top, left)
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img class="followDancer" src="images/baby_dance.gif" title="" /></span>');
  // $(this.$node).toggleClass('dancer followDancer');
  this.xOffset = Math.random() * 30;
  this.yOffset = Math.random() * 30;

};

MakeFollowDancer.prototype = Object.create(MakeDancer.prototype);

MakeFollowDancer.prototype.constructor = MakeFollowDancer;

MakeFollowDancer.prototype.step = function() {
  this.oldStep();

  let $mouseX = 0, $mouseY = 0;
  let $xp = 0, $yp =0;

  $(document).on('mousemove', function(e) {
      $mouseX = e.pageX;
      $mouseY = e.pageY;
  });

  let $loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    $xp += (($mouseX - $xp)/3);
    $yp += (($mouseY - $yp)/3);
    $(".followDancer").css({left:$xp +'px', top:$yp +'px'});
  }, 30);

  // console.log(this.xposition + ' ' + this.yposition);

  // $('.followDancer').on('mousemove', function(e){
  //   console.log(this);
  //   this.setPosition(e.pageY - 5, e.pageX + 5);
  // }.bind(this));

}

