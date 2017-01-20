var home_animation = {
  boundEvents: {},  
  container: document.getElementById("container"),
  init: function () {
    
  document.getElementById("container").style.display = "block";

  TweenLite.to(is, 0, {opacity:0, scaleX:5, scaleY:5});
  TweenLite.to(safe, 0, {opacity:0, scaleX:5, scaleY:5});
  TweenLite.to(with_text, 0, {opacity:0, scaleX:5, scaleY:5});  
  TweenLite.to(us, 0, {opacity:0, scaleX:5, scaleY:5});
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
    TweenLite.to(building_color, 0.5, {opacity:1, delay:1.2});
    TweenLite.to(your, 0.1, {opacity:1, delay:1.2});
    TweenLite.to(secret, 0.1, {opacity:1, delay:1.4});

    TweenLite.delayedCall(3, home_animation.frame2);
  },
  frame2: function () {
    var i;
    for (i = 1; i < 13; i++) {
      var varNew = document.getElementById("star_"+i);
      TweenLite.to("star_"+i, 0.2, {opacity:0, delay:0, ease: Expo.easeOut});
    }
    TweenLite.to(building, 0.1, {opacity:0, delay:0});
    TweenLite.to(building_color, 0.1, {opacity:0, delay:0});
    TweenLite.to(your, 0.1, {opacity:0, delay:0});
    TweenLite.to(secret, 0.1, {opacity:0, delay:0});

    TweenLite.delayedCall(0.4, home_animation.frame3);
  },
  frame3: function () {
    TweenLite.to(ThreeAM, 0.1, {opacity:1, delay:0});
    TweenLite.to(dumpling, 0.1, {opacity:1, delay:0.2});
    TweenLite.to(and, 0.1, {opacity:1, delay:0.6});  
    TweenLite.to(donuts, 0.1, {opacity:1, delay:0.8});
    TweenLite.to(order, 0.1, {opacity:1, delay:1});
   
    TweenLite.delayedCall(3, home_animation.frame4);
  },
  frame4: function () {
    TweenLite.to(ThreeAM, 0.1, {opacity:0, delay:0});
    TweenLite.to(dumpling, 0.1, {opacity:0, delay:0});
    TweenLite.to(and, 0.1, {opacity:0, delay:0});  
    TweenLite.to(donuts, 0.1, {opacity:0, delay:0});
    TweenLite.to(order, 0.1, {opacity:0, delay:0});

    TweenLite.delayedCall(0.4, home_animation.frame5);
  },
  frame5: function () {
    TweenLite.to(is, 0.4, {opacity:1, scaleX:1, scaleY:1});
    TweenLite.to(safe, 0.4, {opacity:1, scaleX:1, scaleY:1});
    TweenLite.to(with_text, 0.4, {opacity:1, scaleX:1, scaleY:1});  
    TweenLite.to(us, 0.4, {opacity:1, scaleX:1, scaleY:1});

   TweenLite.delayedCall(2.2, home_animation.frame6);
  },
  frame6: function () {
    TweenLite.to(is, 0.1, {opacity:0, delay:0});
    TweenLite.to(safe, 0.1, {opacity:0, delay:0});
    TweenLite.to(with_text, 0.1, {opacity:0, delay:0});  
    TweenLite.to(us, 0.1, {opacity:0, delay:0});

    TweenLite.delayedCall(0.4, home_animation.frame7);
  },
  frame7: function () {
    TweenLite.to(logo, 0.3, {opacity:1, delay:0});
    TweenLite.to(how, 0.3, {opacity:1, delay:0.1});
    TweenLite.to(order_now, 0.3, {opacity:1, top:0, delay:0.2, scaleX:1, scaleY:1});  
  }
};
// If true, start function. If false, listen for INIT.
window.onload = function() {
  home_animation.init();
}

