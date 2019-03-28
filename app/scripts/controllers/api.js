'use strict';
angular.module('pixelRockStudiosApp')
  .controller('ApiCtrl', function ($scope,apiMaster,$http) {
    
    var initUrl = 'objects/api/gettyImages.json';
    $scope.apiList = apiMaster;
    $scope.apiDetail = $http.get(initUrl).success(function(data){
      $scope.apiDetail = data;
    });
    // console.log("$scope.api",portDetail.getJsonFile('bmw-m-40th.json'));
    // $scope.portDetail = 1;
    $scope.selectApiItem = function(apiItem) {

        $scope.current = apiItem || 'objects/api/gettyImages.json';
        var url = 'objects/api/'+$scope.current;
        // portDetail.getJsonFile($scope.current); 

        $http.get(url).success(function(data){
            $scope.apiDetail = data;
        });
        // console.log($scope.portDetail);  
        // updatePort();    
    };
    $scope.launchSite = function() {
        window.open($scope.apiDetail.link);  
    };
    $scope.btnBounceOver = function(hoverEvent) {
        TweenMax.to($(hoverEvent.target).children('img'), 1, {css:{'margin-left':"30px"}, ease:Elastic.easeOut});
    };
    $scope.btnBounceLeave = function(hoverEvent) {
        TweenMax.to($(hoverEvent.target).children('img'), 1, {css:{'margin-left':"0px"}, ease:Elastic.easeOut});
    };
    
    // selectPortItem('bmw_m_40th.json');
    // bind portDetail to page

    // console.log("port Master: ",$scope.api);
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
    // function launchSiteTemp(e) {
    //   // console.log($("#launchGit").data("link"));
    //     window.open($(this).data("link"));        
    // }
    // $(".pixel-button").click(function(e){
    //  console.log($("#launchGit").data("link"));
    //  window.open($(this).data("link"));
    // });
    // $("#launchGit").click(function(e){
    //  //console.log($("#launchGit").data("link"));
    //  window.open($("#launchGit").data("link"));
    // });
    // $("#launchSite").click(function(e){
    //  //console.log($("#launchGit").data("link"));
    //  window.open($("#launchSite").data("link"));
    // });


  });
