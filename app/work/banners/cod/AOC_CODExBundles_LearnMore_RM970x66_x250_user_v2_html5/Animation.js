var home_animation = {
  init: function () {
    home_animation.frame1();
  },
  container: document.getElementById("container"),
  enterFor: document.getElementById("enterFor"),
  prize: document.getElementById("prize"),
  tweet: document.getElementById("tweet"),
  enter: document.getElementById("enter"),
  heroFrame: document.getElementById("heroFrame"),
  heros: document.getElementById("heros"),
  hashtag: document.getElementById("hashtag"),
  greatness: document.getElementById("greatness"),
  finalFrame: document.getElementById("finalFrame"),
  lrnBtn: document.getElementById("lrnBtn"),
  wave: document.getElementById("wave"),
  logo: document.getElementById("logo"),
  learnMore: document.getElementById("learnMore"),
  ps4logo: document.getElementById("ps4logo"),
  bundlesweeps: document.getElementById("bundlesweeps"),
  containerEx: document.getElementById("containerEx"),
  containerExWrap: document.getElementById("containerExWrap"),
  bloodEx: document.getElementById("bloodEx"),
  enterForEx: document.getElementById("enterForEx"),
  prizeEx: document.getElementById("prizeEx"),
  tweetEx: document.getElementById("tweetEx"),
  enterEx: document.getElementById("enterEx"),
  heroFrameEx: document.getElementById("heroFrameEx"),
  herosbgEx: document.getElementById("herosbgEx"),
  hashtagEx: document.getElementById("hashtagEx"),
  finaltxtEx: document.getElementById("finaltxtEx"),
  finalFrameEx: document.getElementById("finalFrameEx"),
  lrnBtnEx: document.getElementById("lrnBtnEx"),
  learnMore2Ex: document.getElementById("learnMore2Ex"),
  waveEx: document.getElementById("waveEx"),
  logoEx: document.getElementById("logoEx"),
  learnMoreEx: document.getElementById("learnMoreEx"),
  bundleEx: document.getElementById("bundleEx"),
  noPurch: document.getElementById("noPurch"),
  frame1: function () {
    TweenLite.to(enterFor, .8, {delay: .3, opacity: 1, ease: Linear.eastOut});
    TweenLite.to(prize, .8, {delay:1.3, opacity: 1, ease: Linear.eastOut});
    TweenLite.delayedCall(3, home_animation.frame2);
  },
  frame2: function () {
    TweenLite.to(prize, 0.4, {opacity: 0, ease: Linear.eastOut});
    TweenLite.to(enter, 0.4, {opacity: 0, display: 'none', ease: Linear.easeOut});
    TweenLite.to(tweet, 0.3, {delay:.5, display: 'block', opacity: 1, ease: Linear.easeIn});
    TweenLite.delayedCall(4, home_animation.frame3);
  },
  frame3: function () {
    TweenLite.to(tweet, 0.5, {opacity: 0, display: 'none', ease: Linear.easeOut});
    TweenLite.to(heroFrame, 0.3, {delay:.5, display: 'block', ease: Linear.easeIn});
    TweenLite.to(herosbg, 0.6, {delay:1, display: 'block', opacity:1, ease: Linear.easeIn});
    TweenLite.to(hashtag, 1, {delay:1.5, display: 'block', opacity:1, ease: Linear.easeIn});
    TweenLite.delayedCall(4.5, home_animation.frame4);
  },
  frame4: function () {
    TweenLite.to(heroFrame, .5, {opacity:0, display: 'none', ease:Linear.easeInOut});
    TweenLite.to(logo, .5, {opacity:0, display: 'none', ease:Linear.easeInOut});
    TweenLite.to(learnMore, .5, {opacity:0, display: 'none', ease:Linear.easeInOut});
    TweenLite.to(finalFrame, .5, {delay: 0, opacity: 1, display: 'block', ease: Linear.easeIn});
    TweenLite.to(greatness, 0.5, {delay: 1, opacity: 1, display:'block', ease: Linear.easeIn});
    TweenLite.to(bundlesweeps, .5, {delay:1.5, opacity:1, display: 'block', ease:Linear.easeIn});
    TweenLite.to(lrnBtn, 0.5, {delay: 2, opacity: 1, display:'block', ease: Linear.easeIn});
  },
  frame1ExIntro: function () {
    TweenLite.to(finalFrameEx, 0, {delay: 0, opacity: 0, display: 'block', ease: Linear.easeIn});
    TweenLite.to(learnMore2Ex, 0, {delay: 0, opacity: 0, display:'block', ease: Linear.easeIn});
    TweenLite.to(enterEx, 0, {delay: 0, opacity: 1, display: 'block', ease: Linear.easeOut});
    TweenLite.to(bloodEx, 0, {opacity:1, display: 'block', ease:Linear.easeInOut});
    TweenLite.to(logoEx, 0, {opacity:1, display: 'block', ease:Linear.easeInOut});
    TweenLite.to(learnMoreEx, 0, {opacity:1, display: 'block', ease:Linear.easeInOut});
    TweenLite.delayedCall(0, home_animation.frame1Ex);
  },
  frame1Ex: function () {
    TweenLite.to(container, .5, {opacity:0, display: 'none', ease:Linear.easeInOut});
    TweenLite.to(containerExWrap, .5, {opacity:1, display: 'block', ease:Linear.easeInOut});
    TweenLite.to(containerEx, .5, {opacity:1, display: 'block', ease:Linear.easeInOut});
    TweenLite.to(enterForEx, 1, {delay: .3, opacity: 1, ease: Linear.eastOut});
    TweenLite.to(prizeEx, 1, {delay:.7, opacity: 1, ease: Linear.eastOut});
    TweenLite.delayedCall(3, home_animation.frame2Ex);
  },
  frame2Ex: function () {
    TweenLite.to(prizeEx, 0.4, {opacity: 0, ease: Linear.eastOut});
    TweenLite.to(enterEx, 0.4, {opacity: 0, display: 'none', ease: Linear.easeOut});
    TweenLite.to(tweetEx, 0.3, {delay:.5, display: 'block', opacity: 1, ease: Linear.easeIn});
    TweenLite.delayedCall(3, home_animation.frame3Ex);
  },
  frame3Ex: function () {
    TweenLite.to(tweetEx, 0.5, {opacity: 0, display: 'none', ease: Linear.easeOut});
    TweenLite.to(heroFrameEx, 0.3, {delay:.5, display: 'block',opacity:1, ease: Linear.easeIn});
    TweenLite.to(herosbgEx, 0.6, {delay:1, display: 'block', opacity:1, ease: Linear.easeIn});
    TweenLite.to(hashtagEx, 1, {delay:1.5, display: 'block', opacity:1, ease: Linear.easeIn});
    TweenLite.to(noPurch, .6, {delay:2, display: 'block', opacity:1, ease: Linear.easeIn});
    TweenLite.delayedCall(4, home_animation.frame4Ex);
  },
  frame4Ex: function () {
    TweenLite.to(heroFrameEx, .5, {opacity:0, display: 'none', ease:Linear.easeInOut});
    TweenLite.to(bloodEx, .5, {opacity:0, display: 'none', ease:Linear.easeInOut});
    TweenLite.to(logoEx, .5, {opacity:0, display: 'none', ease:Linear.easeInOut});
    TweenLite.to(learnMoreEx, .5, {opacity:0, display: 'none', ease:Linear.easeInOut});
    TweenLite.to(finalFrameEx, .5, {delay: 0, opacity: 1, display: 'block', ease: Linear.easeIn});
    TweenLite.to(finaltxtEx, 0.5, {delay: 1, opacity: 1, display:'block', ease: Linear.easeIn});
    TweenLite.to(bundleEx, .5, {delay:1.5, opacity:1, display: 'block', ease:Linear.easeIn});
    TweenLite.to(learnMore2Ex, 0.5, {delay: 2, opacity: 1, display:'block', ease: Linear.easeIn});
  }
};

home_animation.init();
