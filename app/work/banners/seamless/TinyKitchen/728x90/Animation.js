var BanTimeline = {
  your: document.getElementById("your"),
  tinyKitchen: document.getElementById("tinyKitchen"),
  f2willThankYou: document.getElementById("f2willThankYou"),
  f2Star1: document.getElementById("f2Star1"),
  f2Star2: document.getElementById("f2Star2"),
  f2Star3: document.getElementById("f2Star3"),
  f3andSoWill: document.getElementById("f3andSoWill"),
  f3theGuy: document.getElementById("f3theGuy"),
  f4Subletting: document.getElementById("f4Subletting"),
  f5Logo: document.getElementById("f5Logo"),
  f5NyEats: document.getElementById("f5NyEats"),
  f5OrderNow: document.getElementById("f5OrderNow"),
  frame1Wrap: document.getElementById("frame1Wrap"),
  frame2Wrap: document.getElementById("frame2Wrap"),
  frame3Wrap: document.getElementById("frame3Wrap"),
  frame4Wrap: document.getElementById("frame4Wrap"),
  frame5Wrap: document.getElementById("frame5Wrap"),
  init: function () {
   
    document.getElementById("container").style.display = "block";
    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump
      TweenLite.to(your, 0, {left:-250,scaleX:0, scaleY:0});
      TweenLite.to(f5OrderNow, 0, {top:50,scaleX:1, scaleY:1.5});
      TweenLite.to(f4Subletting, 0, {left:600, opacity:0, display:'none'});
      TweenLite.to(f5Logo, 0, {left:-100});
      TweenLite.to(f5NyEats, 0, {left:-100});
    // run animation after init is done. 
    BanTimeline.frame1();
  },
  reset: function () {
    
  },
  frame1: function () {
    TweenLite.to(your, .1, {opacity:1, display: 'block',left:0,scaleX:1, scaleY:1, delay:.2, ease:Power1.easeOut});
    TweenLite.to(tinyKitchen, .2, {opacity:1, display: 'block', delay:.5, ease:Power1.easeOut});
    TweenLite.delayedCall(3.5, BanTimeline.frame2);
  },
  frame2: function () {
    TweenLite.to(frame1Wrap, .2, {opacity:0, display: 'none', delay: 0, ease:Power4.easeOut});
    TweenLite.to(f2willThankYou, .2, {opacity:1, display: 'block', delay:.4, ease:Power1.easeOut});
    TweenLite.to(f2Star1, .2, {display:'block', opacity:1, delay:.8, ease:Power4.easeOut});
    TweenLite.to(f2Star2, .2, {display:'block', opacity:1, delay:.9, ease:Power4.easeOut});
    TweenLite.to(f2Star3, .5, {display:'block', opacity:1, delay:1, ease:Power4.easeOut});

    TweenLite.delayedCall(4, BanTimeline.frame3);
  },
  frame3: function () {
    TweenLite.to(frame2Wrap, .2, {opacity:0, display: 'none', delay: 0, ease:Power4.easeOut});
    TweenLite.to(f3andSoWill, .2, {opacity:1, display:'block', delay:.2});
    TweenLite.to(f3theGuy, .2, {opacity:1, display:'block', delay:.2});

    TweenLite.delayedCall(3, BanTimeline.frame4);
  },
  frame4: function () {
    TweenLite.to(frame3Wrap, .2, {opacity:0, display: 'none', delay: 0, ease:Power4.easeOut});
    TweenLite.to(f4Subletting, 1.4, {opacity:1, display:'block', delay:0, ease:Power4.easeOut});
    TweenLite.to(f4Subletting, 1, {left:0, delay: 0, ease:Power1.easeInOut});

    TweenLite.delayedCall(3.5, BanTimeline.frame5);
  },
  frame5: function () {
    TweenLite.to(frame4Wrap, .2, {opacity:0, display: 'none', delay: 0, ease:Power4.easeOut});
    TweenLite.to(f5Logo, .4, {opacity:1, display: 'block', delay: .3, ease:Power4.easeOut});
    TweenLite.to(f5NyEats, .4, {opacity:1, display: 'block', delay: .8, ease:Power4.easeOut});
    TweenLite.to(f5OrderNow, .5, {opacity:1, display: 'block',top:0, scaleX:1, scaleY:1, delay: 1.3, ease:Power4.easeOut});
  }
};
window.onload = function() {BanTimeline.init();}