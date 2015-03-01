'use strict';

/**
 * @ngdoc function
 * @name pixelRockStudiosApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pixelRockStudiosApp
 */
angular.module('pixelRockStudiosApp')
  .controller('PortCtrl', function ($scope) {
    
    $scope.portfolio = [
    {'name': 'BMW M 40th Anniversary test',
     'link': 'http://www.bmwusa.com/m',
      'img': [
          {'image':'../images/lg.jpg'},
          {'image':'../images/sm1.jpg'},
          {'image':'../images/sm2.jpg'}
      ]},
    {'name': 'BMW Motorsports',
     'link': 'http://www.bmwusa.com/standard/content/explore/bmwenthusiasts/bmwmotorsports.aspx'},
    {'name': 'BMW ConnectedDrive',
     'link': 'http://www.bmwusa.com/standard/content/innovations/bmwconnecteddrive/connecteddrive.aspx'},
    {'name': 'BMW Performance Driving School',
     'link': 'http://www.bmwusa.com/pds'},
    {'name': 'Justin Biebers Collection',
     'link': 'http://www.justinbiebercollectorsedition.com/#home'},
    {'name': 'Biore Skincare',
     'link': 'http://www.biore.com/en-US/biore-skincare'},
    {'name': 'BMW i8 Experience',
     'link': 'http://www.bmwusa.com/standard/content/vehicles/2014/bmwi/bmwi_i8redirect.aspx?from=/Standard/Content/Vehicles/2014/BMWi/BMWi8RD.aspx&return=/Standard/Content/Vehicles/2014/BMWi/BMWi8RD.aspx'},
    {'name': 'Fantastic 4 Rise of the Silver Surfer',
     'link': 'http://www.pixelrockstudios.com/work/f4'},
    {'name': 'Chevy Flash Calculator',
     'link': 'http://www.pixelrockstudios.com/work/chevy'},
    {'name': 'Ritz Carlton White Plains',
     'link': 'http://www.pixelrockstudios.com/work/ritz'},
    {'name': 'Kodak Flash Banner',
     'link': 'http://www.pixelrockstudios.com/work/kodak'},
    {'name': 'Crestor Astra Zeneca',
     'link': 'http://www.pixelrockstudios.com/work/astra'}
  ];
    // var navBG = $(".navBg");
    // var breadCrumb = $(".bread-crumbs");
    // var buttons = $(".pixel-button img");
    // TweenMax.to(navBG, 1, {css:{'margin-left':"137px"}, ease:Bounce.easeOut});
    // TweenMax.to(breadCrumb, 1, {css:{'padding-top':"10px",'height':"30px",'display':'block','opacity':'1'}, ease:Bounce.easeOut});
    // $('body').on('mouseover', '.pixel-button', function(e){
    //   console.log("hovering");
    //   TweenMax.to($(this).children('img'), 1, {css:{'margin-right':"30px"}, ease:Elastic.easeOut});
    // });
    // $('body').on('mouseout', '.pixel-button', function(e){
    //   TweenMax.to($(this).children('img'), 1, {css:{'margin-right':"5px"}, ease:Bounce.easeOut});
    // });
    // // Temporary button to link to site before adding angular database
    // $(".pixel-button").click(function(e){
    // 	//console.log($("#launchGit").data("link"));
    // 	window.open($(this).data("link"));
    // });
    // $("#launchGit").click(function(e){
    // 	//console.log($("#launchGit").data("link"));
    // 	window.open($("#launchGit").data("link"));
    // });
    // $("#launchSite").click(function(e){
    // 	//console.log($("#launchGit").data("link"));
    // 	window.open($("#launchSite").data("link"));
    // });


  });
