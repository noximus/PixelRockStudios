'use strict';
angular.module('pixelRockStudiosApp')
  .controller('PortCtrl', function ($scope,portMaster) {
    
    $scope.portfolio = portMaster;
    // console.log("$scope.portfolio",portMaster[1].name);
    // $scope.portDetail = 1;
    $scope.selectPortItem = function(portItem) {
      $scope.current = portItem || 0;
      console.log($scope.current);        
    }
    // console.log("port Master: ",$scope.portfolio);
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
    function launchSiteTemp(e) {
      // console.log($("#launchGit").data("link"));
        window.open($(this).data("link"));        
    }
    // $(".pixel-button").click(function(e){
    // 	console.log($("#launchGit").data("link"));
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
