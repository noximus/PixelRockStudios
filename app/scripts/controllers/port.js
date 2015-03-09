'use strict';
angular.module('pixelRockStudiosApp')
  .controller('PortCtrl', function ($scope,portMaster,$http) {
    
    var initUrl = 'objects/bmw_m_40th.json';
    $scope.portfolio = portMaster;
    $scope.portDetail = $http.get(initUrl).success(function(data){
            $scope.portDetail = data;
        });
    // console.log("$scope.portfolio",portDetail.getJsonFile('bmw-m-40th.json'));
    // $scope.portDetail = 1;
    $scope.selectPortItem = function(portItem) {

        $scope.current = portItem || 0;
        var url = 'objects/'+$scope.current;
        // portDetail.getJsonFile($scope.current); 

        $http.get(url).success(function(data){
            $scope.portDetail = data;
        });
        // console.log($scope.portDetail);  
        // updatePort();    
    };
    $scope.launchSite = function() {
        window.open($scope.portDetail.link);
        // $scope.current = portItem || 0;
        // var url = 'objects/'+$scope.current;
        // // portDetail.getJsonFile($scope.current); 

        // $http.get(url).success(function(data){
        //     $scope.portDetail = data;
        // });
        // console.log($scope.portDetail);  
        // updatePort();    
    };
    // selectPortItem('bmw_m_40th.json');
    // bind portDetail to page

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
    // function launchSiteTemp(e) {
    //   // console.log($("#launchGit").data("link"));
    //     window.open($(this).data("link"));        
    // }
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
