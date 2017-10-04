'use strict';
angular.module('pixelRockStudiosApp')
  .controller('PortCtrl', function ($scope,portMaster,$http) {
    
    var initUrl = 'objects/port/init.json';
    $scope.portfolio = portMaster;
    $scope.portDetail = $http.get(initUrl).success(function(data){
            $scope.portDetail = data;
        });
    // console.log("$scope.portfolio",portDetail.getJsonFile('bmw-m-40th.json'));
    // $scope.portDetail = 1;
    $scope.selectPortItem = function(portItem) {

        $scope.current = portItem || 'objects/port/banner.json';
        var url = 'objects/port/'+$scope.current;
        // portDetail.getJsonFile($scope.current); 

        $http.get(url).success(function(data){
            $scope.portDetail = data;
        });
        // console.log($scope.portDetail);  
        // updatePort(); 
        // if($(window).width() < 798){
        //     window.open($scope.portDetail.link);
        // }    
    };
    $scope.launchSite = function() {
        window.open($scope.portDetail.link); 
    };
    $scope.launchBanner = function(numVar) {
        // $scope.bannerCurrent = $scope.portDetail.banners[numVar].link;
        // $scope.bannerCurrentWid = $scope.portDetail.banners[numVar].width;
        // $scope.bannerCurrentHei = $scope.portDetail.banners[numVar].height;
        // $('#bannerModal').modal();
        window.open($scope.portDetail.banners[numVar].link); 
    };
    $scope.launchBannerRich = function(numVar) {
        // $scope.bannerCurrentRich = $scope.portDetail.richbanners[numVar].link;
        // $scope.bannerCurrentWidRich = $scope.portDetail.richbanners[numVar].width;
        // $scope.bannerCurrentHeiRich = $scope.portDetail.richbanners[numVar].height;
        // $('#bannerModalRich').modal();
        window.open($scope.portDetail.richbanners[numVar].link); 
    };
    $scope.btnBounceOver = function(hoverEvent) {
        // TweenMax.to($(hoverEvent.target).children('img'), 1, {css:{'margin-left':"30px"}, ease:Elastic.easeOut});
    };
    $scope.btnBounceLeave = function(hoverEvent) {
        // TweenMax.to($(hoverEvent.target).children('img'), 1, {css:{'margin-left':"0px"}, ease:Elastic.easeOut});
    };
    $scope.refreshBanner = function() {
       /* console.log(document.getElementById('bannerView').contentWindow.location);*/
        // TweenMax.to($(hoverEvent.target).children('img'), 1, {css:{'margin-left':"0px"}, ease:Elastic.easeOut});
        document.getElementById('bannerView').contentWindow.location.reload(true);
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
