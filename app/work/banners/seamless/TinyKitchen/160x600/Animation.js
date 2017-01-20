var BanTimeline = {
  star1: document.getElementById("star1"),
  star2: document.getElementById("star2"),
  star3: document.getElementById("star3"),
  star4: document.getElementById("star4"),
  your: document.getElementById("your"),
  tinyKitchen: document.getElementById("tinyKitchen"),
  willThankYou: document.getElementById("willThankYou"),
  f2Star1: document.getElementById("f2Star1"),
  f2Star2: document.getElementById("f2Star2"),
  f2Star3: document.getElementById("f2Star3"),
  f2Star4: document.getElementById("f2Star4"),
  f2And: document.getElementById("f2And"),
  f2So: document.getElementById("f2So"),
  f2Will: document.getElementById("f2Will"),
  f2The: document.getElementById("f2The"),
  f2Guy: document.getElementById("f2Guy"),
  f3Subletting: document.getElementById("f3Subletting"),
  f4Logo: document.getElementById("f4Logo"),
  f4NyEats: document.getElementById("f4NyEats"),
  f4OrderNow: document.getElementById("f4OrderNow"),
  frame1Wrap: document.getElementById("frame1Wrap"),
  frame2Wrap: document.getElementById("frame2Wrap"),
  frame3Wrap: document.getElementById("frame3Wrap"),
  init: function () {
    document.getElementById("container").style.display = "block";

// initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump
      TweenLite.to(your, 0, {scaleX:0, scaleY:0});
      TweenLite.to(f4OrderNow, 0, {scaleX:1.5, scaleY:1.5});
      TweenLite.to(f3Subletting, 0, {left:-5, opacity:1, display:'none'});
    // run animation after init is done. 
    BanTimeline.frame1();

  },
  reset: function () {
    
  },
  frame1: function () {
    TweenLite.to(your, .2, {opacity:1, display: 'block', scaleX:1, scaleY:1, delay:.2, ease:Power1.easeOut});
    TweenLite.to(tinyKitchen, .2, {opacity:1, display: 'block', delay:.6, ease:Power1.easeOut});
    TweenLite.to(willThankYou, .2, {opacity:1, display: 'block', delay:1, ease:Power1.easeOut});
    TweenLite.to(star3, .2, {display:'block', opacity:1, delay:1.25, ease:Power4.easeOut});
    TweenLite.to(star1, .2, {display:'block', opacity:1, delay:1.35, ease:Power4.easeOut});
    TweenLite.to(star2, .5, {display:'block', opacity:1, delay:1.45, ease:Power4.easeOut});
    TweenLite.to(star4, .2, {display:'block', opacity:1, delay:1.55, ease:Power4.easeOut});
    TweenLite.delayedCall(3.5, BanTimeline.frame2);
  },
  frame2: function () {
    TweenLite.to(frame1Wrap, .2, {opacity:0, display: 'none', delay: 0, ease:Power4.easeOut});
    TweenLite.to(f2And, .2, {opacity:1, display: 'block', delay: .2, ease:Power4.easeOut});
    TweenLite.to(f2So, .2, {opacity:1, display: 'block', delay: .3, ease:Power4.easeOut});
    TweenLite.to(f2Will, .2, {opacity:1, display: 'block', delay: .4, ease:Power4.easeOut});
    TweenLite.to(f2The, .2, {opacity:1, display: 'block', delay: .5, ease:Power4.easeOut});
    TweenLite.to(f2Guy, .2, {opacity:1, display: 'block', delay: .6, ease:Power4.easeOut});
    TweenLite.to(f2Star3, .2, {opacity:1, display: 'block', delay: .85, ease:Power4.easeOut});
    TweenLite.to(f2Star1, .2, {opacity:1, display: 'block', delay: .95, ease:Power4.easeOut});
    TweenLite.to(f2Star2, .2, {opacity:1, display: 'block', delay: 1.05, ease:Power4.easeOut});
    TweenLite.to(f2Star4, .2, {opacity:1, display: 'block', delay: 1.15, ease:Power4.easeOut});
    TweenLite.delayedCall(3.6, BanTimeline.frame3);
  },
  frame3: function () {
    TweenLite.to(frame2Wrap, .2, {opacity:0, display: 'none', delay: 0, ease:Power4.easeOut});
    TweenLite.to(f3Subletting, .2, {opacity:1, display:'block', delay:.2});
    TweenLite.to(f3Subletting, 2.3, {left:-460, delay: 1, ease:Power1.easeInOut});
    TweenLite.delayedCall(4.7, BanTimeline.frame4);
  },
  frame4: function () {
    TweenLite.to(frame3Wrap, .2, {opacity:0, display: 'none', delay: 0, ease:Power4.easeOut});
    TweenLite.to(f4Logo, .4, {opacity:1, display: 'block', delay: .3, ease:Power4.easeOut});
    TweenLite.to(f4NyEats, .4, {opacity:1, display: 'block', delay: .8, ease:Power4.easeOut});
    TweenLite.to(f4OrderNow, .5, {opacity:1, display: 'block', scaleX:1, scaleY:1, delay: 1.3, ease:Power4.easeOut});
  }
};
// If true, start function. If false, listen for INIT.
window.onload = function() {
  BanTimeline.init();
}
