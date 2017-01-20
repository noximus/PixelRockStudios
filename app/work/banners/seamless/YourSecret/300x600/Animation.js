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
    for (i = 1; i < 13; i++) {
      var varNew = document.getElementById("star_"+i);
      TweenLite.to("star_"+i, .5, {opacity:1, delay: .1*i, ease: Expo.easeOut});
    }
    TweenLite.to(moon, 0.2, {opacity:1, delay:.8});
    TweenLite.to(building_color, 0.2, {opacity:1, delay:1.2});
    TweenLite.to(your, 0.1, {opacity:1, delay:1.4});
    TweenLite.to(secret, 0.1, {opacity:1, delay:1.6});

    TweenLite.delayedCall(3.5, home_animation.frame2);
  },
  frame2: function () {
    TweenLite.to(building, 0.1, {opacity:0, delay:0});
    TweenLite.to(building_color, 0.1, {opacity:0, delay:0});
    TweenLite.to(your, 0.1, {opacity:0, delay:0});
    TweenLite.to(secret, 0.1, {opacity:0, delay:0});
    TweenLite.to(moon, 0.1, {opacity:0, delay:0});  
    TweenLite.to(donuts, 0.1, {opacity:0, delay:0});
    TweenLite.to(star_1, 0.1, {opacity:0, delay:0});
    TweenLite.to(star_2, 0.1, {opacity:0, delay:0});
    TweenLite.to(star_3, 0.1, {opacity:0, delay:0});
    TweenLite.to(star_4, 0.1, {opacity:0, delay:0});
    TweenLite.to(star_5, 0.1, {opacity:0, delay:0});
    TweenLite.to(star_6, 0.1, {opacity:0, delay:0});
    TweenLite.to(star_7, 0.1, {opacity:0, delay:0});
    TweenLite.to(star_8, 0.1, {opacity:0, delay:0});
    TweenLite.to(star_9, 0.1, {opacity:0, delay:0});
    TweenLite.to(star_10, 0.1, {opacity:0, delay:0});
    TweenLite.to(star_11, 0.1, {opacity:0, delay:0});
    TweenLite.to(star_12, 0.1, {opacity:0, delay:0});

    TweenLite.delayedCall(0.2, home_animation.frame3);
  },
  frame3: function () {
    TweenLite.to(ThreeAM, 0.1, {opacity:1, delay:0});
    TweenLite.to(dumpling, 0.1, {opacity:1, delay:0.3});
    TweenLite.to(and, 0.1, {opacity:1, delay:.6}); 
    TweenLite.to(donuts, 0.1, {opacity:1, delay:.9});
    TweenLite.to(order, 0.1, {opacity:1, delay:1.2}); 
    
    TweenLite.delayedCall(3, home_animation.frame4);
  },
  frame4: function () {
    TweenLite.to(ThreeAM, 0.1, {opacity:0, delay:0});
    TweenLite.to(and, 0.1, {opacity:0, delay:0});  
    TweenLite.to(donuts, 0.1, {opacity:0, delay:0});
    TweenLite.to(dumpling, 0.1, {opacity:0, delay:0});
    TweenLite.to(order, 0.1, {opacity:0, delay:0});

    TweenLite.delayedCall(0.2, home_animation.frame5);
  },
  frame5: function () {
    TweenLite.to(safe, 0.4, {opacity:1, scaleX:1, scaleY:1});

    TweenLite.delayedCall(2.1, home_animation.frame6);
  },
  frame6: function () {
    TweenLite.to(safe, 0.1, {opacity:0});
    TweenLite.to(logo, 0.3, {opacity:1, delay:.5});
    TweenLite.to(how, 0.3, {opacity:1, delay:.7});
    TweenLite.to(order_now, 0.3, {opacity:1, top:0, delay:.9, scaleX:1, scaleY:1});

  }
};
// If true, start function. If false, listen for INIT.
window.onload = function() {

home_animation.init()

}

