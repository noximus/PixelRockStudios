var BanTimeline = {
  f0_img1: document.getElementById("f0_img1"),
  f1_img1: document.getElementById("f1_img1"),
  f2_img1: document.getElementById("f2_img1"),
  f2_img2: document.getElementById("f2_img2"),
  f2_img3: document.getElementById("f2_img3"),
  f2_img4: document.getElementById("f2_img4"),
  f2_img5: document.getElementById("f2_img5"),
  f2_img6: document.getElementById("f2_img6"),
  f2_img7: document.getElementById("f2_img7"),
  f2_img8: document.getElementById("f2_img8"),
  f2_img9: document.getElementById("f2_img9"),
  f2_img10: document.getElementById("f2_img10"),
  f2_img11: document.getElementById("f2_img11"),
  f2_img12: document.getElementById("f2_img12"),
  f2_img13: document.getElementById("f2_img13"),
  f2_img14: document.getElementById("f2_img14"),
  f2_img15: document.getElementById("f2_img15"),
  f2_img16: document.getElementById("f2_img16"),
  f2_img17: document.getElementById("f2_img17"),
  f2_img18: document.getElementById("f2_img18"),
  f2_img19: document.getElementById("f2_img19"),
  f2_img20: document.getElementById("f2_img20"),
  f2_img21: document.getElementById("f2_img21"),
  f3_img1: document.getElementById("f3_img1"),
  bgColor: document.getElementById("bgColor"),
  f4_img1: document.getElementById("f4_img1"),
  f4_img2: document.getElementById("f4_img2"),
  f5_img1: document.getElementById("f5_img1"),
  f5_img2: document.getElementById("f5_img2"),
  cta: document.getElementById("cta"),
  init: function () {
    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump
    TweenLite.to(f3_img1, 0,{scaleX: 3,scaleY: 3, top:10, left:170}); 
   // TweenLite.to(pen, 0, {display: 'block', rotation:-90, delay:0});

    // run animation after init is done. 
    TweenLite.delayedCall(2.8, BanTimeline.frame0);
  },
  reset: function () {},
  frame0: function () {
    TweenLite.to(f0_img1, .5, {opacity:1, display: 'block', scaleX: 3,scaleY: 3, top:100, left:-40, delay: 0, ease: Quad.easeIn});

    TweenLite.delayedCall(.5, BanTimeline.frame1);
  },
  frame1: function () {
    TweenLite.to(f1_img1, 1, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});

    TweenLite.to(f0_img1, .5, {opacity:0, display: 'block'});


   TweenLite.to(penHolder, .3, { left:-76, top:5, delay: 0.2});
   TweenLite.to(pen, .2, {opacity:1, rotation:0, left:-10, top:-36, display: 'block', delay: 0, ease: Quad.easeOut});
   


   TweenLite.delayedCall(.5, BanTimeline.frame2);
  },
  frame2: function () {

/* Pen  */


    TweenLite.to(pen, .1, {rotation:-20, delay: 0});
    TweenLite.to(pen, .1, {rotation:-15, delay: 0.1});
    TweenLite.to(pen, .1, {rotation:-20, delay: 0.2});
    TweenLite.to(pen, .1, {rotation:-15, delay: 0.3});
    TweenLite.to(pen, .1, {rotation:-20, delay: 0.4});
    TweenLite.to(pen, .1, {rotation:-15, delay: 0.5});
    TweenLite.to(pen, .1, {rotation:-20, delay: 0.6});
    TweenLite.to(pen, .1, {rotation:-15, delay: 0.7});
    TweenLite.to(pen, .1, {rotation:-20, delay: 0.8});
    TweenLite.to(pen, .1, {rotation:-15, delay: 0.9});
    TweenLite.to(pen, .1, {rotation:-15, delay: 1});
    TweenLite.to(pen, .1, {rotation:-20, delay: 1.1});
    TweenLite.to(pen, .1, {rotation:-15, delay: 1.2});
    TweenLite.to(pen, .1, {rotation:-20, delay: 1.3});
    TweenLite.to(pen, .1, {rotation:-15, delay: 1.4});
    TweenLite.to(pen, .1, {rotation:-20, delay: 1.5});
    TweenLite.to(pen, .1, {rotation:-15, delay: 1.6});    
    TweenLite.to(pen, .1, {rotation:-25, delay: 1.6});  

    TweenLite.to(pen, .1, {rotation:-15, delay: 1.7});
    TweenLite.to(pen, .1, {rotation:-20, delay: 1.8});
    TweenLite.to(pen, .1, {rotation:-15, delay: 1.9});
    TweenLite.to(pen, .1, {rotation:-20, delay: 1.1});
    TweenLite.to(pen, .1, {rotation:-15, delay: 1.2});    
    TweenLite.to(pen, .1, {rotation:-25, delay: 1.3});  

    TweenLite.to(pen, .1, {rotation:-15, delay: 1.8});
    TweenLite.to(pen, .1, {rotation:-20, delay: 1.9});
    TweenLite.to(pen, .1, {rotation:-15, delay: 2});
    TweenLite.to(pen, .1, {rotation:-20, delay: 2.1});
    TweenLite.to(pen, .1, {rotation:-15, delay: 2.2});    
    TweenLite.to(pen, .1, {rotation:-25, delay: 2.3}); 

    TweenLite.to(pen, .1, {rotation:-15, delay: 2.4});
    TweenLite.to(pen, .1, {rotation:-25, delay: 2.5});
    TweenLite.to(pen, .1, {rotation:-20, delay: 2.6});
    TweenLite.to(pen, .1, {rotation:-30, delay: 2.6});
    TweenLite.to(pen, .1, {rotation:-25, delay: 2.7});    
    TweenLite.to(pen, .1, {rotation:-30, delay: 2.8});      

     TweenLite.to(pen, .1, {rotation:-40, delay: 2.9});
    TweenLite.to(pen, .1, {rotation:-45, delay: 3});
    TweenLite.to(pen, .1, {rotation:-40, delay: 3.1});
    TweenLite.to(pen, .1, {rotation:-45, delay: 3.2});
    TweenLite.to(pen, .1, {rotation:-40, delay: 3.3});    
     

  //  TweenLite.to(pen, .1, {rotation:-38, delay: 2.4});



   TweenLite.to(penHolder, 3.8, {left:120,  top:-52, delay: 0.1});
 // TweenLite.to(penHolder, 0.5, {left:120,  delay: 1.7,});

/*
    
    TweenLite.to(pen, .3, {rotation:-10, delay: 0.3});
*/



    TweenLite.to(f2_img1, .3, {opacity:1, display: 'block', delay: 0, });
    TweenLite.to(f2_img2, .3, {opacity:1, display: 'block', delay: .1, });
    TweenLite.to(f2_img3, .3, {opacity:1, display: 'block', delay: .2, });
    TweenLite.to(f2_img4, .3, {opacity:1, display: 'block', delay: .3, });
    TweenLite.to(f2_img5, .3, {opacity:1, display: 'block', delay: .4, });
    TweenLite.to(f2_img6, .3, {opacity:1, display: 'block', delay: .5, });
    TweenLite.to(f2_img7, .3, {opacity:1, display: 'block', delay: .6, });
    TweenLite.to(f2_img8, .3, {opacity:1, display: 'block', delay: .7, });
    TweenLite.to(f2_img9, .3, {opacity:1, display: 'block', delay: .8, });
    TweenLite.to(f2_img10, .3, {opacity:1, display: 'block', delay: .9, });


    TweenLite.to(f2_img11, .3, {opacity:1, display: 'block', delay: 1, });
    TweenLite.to(f2_img12, .3, {opacity:1, display: 'block', delay: 1.1, });
    TweenLite.to(f2_img13, .3, {opacity:1, display: 'block', delay: 1.2, });
    TweenLite.to(f2_img14, .3, {opacity:1, display: 'block', delay: 1.3, });
    TweenLite.to(f2_img15, .3, {opacity:1, display: 'block', delay: 1.4, });
    TweenLite.to(f2_img16, .3, {opacity:1, display: 'block', delay: 1.7, });

    TweenLite.to(f2_img17, .3, {opacity:1, display: 'block', delay: 1.8, });
    TweenLite.to(f2_img18, .3, {opacity:1, display: 'block', delay: 1.9, });

    TweenLite.to(f2_img19, .3, {opacity:1, display: 'block', delay: 2.2, });
    TweenLite.to(f2_img20, .3, {opacity:1, display: 'block', delay: 2.3, });
    TweenLite.to(f2_img21, .3, {opacity:1, display: 'block', delay: 2.7, });

   TweenLite.to(f2_img22, .3, {opacity:1, display: 'block', delay: 3, });
  TweenLite.to(f2_img23, .3, {opacity:1, display: 'block', delay: 3.1, });
    TweenLite.to(f2_img24, .3, {opacity:1, display: 'block', delay: 3.2, });

/* zoom out */

   TweenLite.to(pen, 0.5, {opacity:0, delay: 3 });

    TweenLite.to(f1_img1, 0.5, {opacity:1, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img1, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img2, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img3, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img4, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img5, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img6, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img7, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img8, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img9, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img10, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img11, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img12, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img13, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img14, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img15, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img16, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img17, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img18, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img19, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img20, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img21, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img22, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img23, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img24, 0.5, {opacity:0, display: 'block',scaleX: .5,scaleY: .5,left:-50, delay: 3, ease: Quad.easeOut});

    TweenLite.to(f1_img1, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});


   TweenLite.delayedCall(3, BanTimeline.frame3);
  },
  frame3: function () {

    TweenLite.to(textHolder, 0, {opacity:0, display: 'none' });
    TweenLite.to(f3_img1, .5, {opacity:1});
     TweenLite.to(f2_img23, 0, {opacity:0});
    TweenLite.to(f3_img1, 0.5, {opacity:1, display: 'block',scaleX: 1,scaleY: 1,top:0, left:0, delay: 0, ease: Quad.easeOut});
    TweenLite.to(bgColor, 0, {opacity:1, display: 'block', delay: 1});

    TweenLite.to(f3_img1, .5, {opacity:1, display: 'block',left:-450, delay: 2, ease: Quad.easeInOut});

    TweenLite.delayedCall(2, BanTimeline.frame4);
  },
  frame4: function () {
    TweenLite.to(f4_img1, 1, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});
    TweenLite.to(f4_img2, 1, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});
    

    TweenLite.to(f5_img1, 1, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});
    TweenLite.to(f5_img2, 1, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});
    TweenLite.to(cta, 1, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});
  }
};
BanTimeline.init();