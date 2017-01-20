var home_animation = {
  boundEvents: {},  
  container: document.getElementById("container"),
  init: function () {
    
  document.getElementById("container").style.display = "block";

  TweenLite.to(safe, 0, {opacity:0, top:-40, scaleX:5, scaleY:5});
  TweenLite.to(order_now, 0, {opacity:1, scaleX:0, scaleY:0});  
    home_animation.frame1();
  },
  reset: function () {    
  },
  frame1: function () {
    // == show stars ==
    var i;
    for (i = 1; i < 8; i++) {
      var varNew = document.getElementById("star_"+i);
      TweenLite.to("star_"+i, .5, {opacity:1, delay: .2*i, ease: Expo.easeOut});
    }
    TweenLite.to(moon, 0.2, {opacity:1, delay:.8});
    TweenLite.to(building_color, 0.2, {opacity:1, delay:1.2});
    TweenLite.to(your, 0.1, {opacity:1, delay:1.4});
    TweenLite.to(secret, 0.1, {opacity:1, delay:1.8});
    TweenLite.to(ThreeAM, 0.1, {opacity:1, delay:2.4});
    TweenLite.to(dumpling, 0.1, {opacity:1, delay:2.7});
    TweenLite.to(and, 0.1, {opacity:1, delay:2.9});  
    TweenLite.to(donuts, 0.1, {opacity:1, delay:3.3});
    TweenLite.to(order, 0.1, {opacity:1, delay:3.5});

    TweenLite.delayedCall(5, home_animation.frame2);
  },
  frame2: function () {
    TweenLite.to(building, 0.1, {opacity:0, delay:0});
    TweenLite.to(building_color, 0.1, {opacity:0, delay:0});
    TweenLite.to(your, 0.1, {opacity:0, delay:0});
    TweenLite.to(secret, 0.1, {opacity:0, delay:0});
    TweenLite.to(moon, 0.1, {opacity:0, delay:0});
    TweenLite.to(ThreeAM, 0.1, {opacity:0, delay:0});
    TweenLite.to(dumpling, 0.1, {opacity:0, delay:0});
    TweenLite.to(and, 0.1, {opacity:0, delay:0});  
    TweenLite.to(donuts, 0.1, {opacity:0, delay:0});
    TweenLite.to(order, 0.1, {opacity:0, delay:0});
    TweenLite.to(star_1, 0.1, {opacity:0, delay:0});
    TweenLite.to(star_2, 0.1, {opacity:0, delay:0});
    TweenLite.to(star_3, 0.1, {opacity:0, delay:0});
    TweenLite.to(star_4, 0.1, {opacity:0, delay:0});
    TweenLite.to(star_5, 0.1, {opacity:0, delay:0});
    TweenLite.to(star_6, 0.1, {opacity:0, delay:0});
    TweenLite.to(star_7, 0.1, {opacity:0, delay:0});

    TweenLite.delayedCall(0.2, home_animation.frame3);
  },
  frame3: function () {
    TweenLite.to(safe, 0.4, {opacity:1, scaleX:1, scaleY:1});
    TweenLite.to(logo, 0.3, {opacity:1, delay:2.7});
    TweenLite.to(how, 0.3, {opacity:1, delay:3});
    TweenLite.to(order_now, 0.3, {opacity:1, top:0, delay:3.2, scaleX:1, scaleY:1});
  }
};
// If true, start function. If false, listen for INIT.
window.onload = function() {

home_animation.init()

}

