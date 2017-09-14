'use strict';

/**
 * @ngdoc function
 * @name pixelRockStudiosApp.controller:CitymapsCtrl
 * @description
 * # CitymapsCtrl
 * Controller of the pixelRockStudiosApp
 */
angular.module('pixelRockStudiosApp')
  .controller('CitymapsCtrl', function($scope,uiGmapGoogleMapApi,cityMaps,$resource) {
  	// initial google map settings
    $scope.map = { center: { latitude: 49, longitude: -78 }, zoom: 12, markers: [],tempMarkers:{}};
    $scope.options = {scrollwheel: false};
    $scope.search = 'pizza in bushwick';

    var geocoder = new google.maps.Geocoder();
    $scope.$watch('search',function(){
    
	    geocoder.geocode( { 'address': $scope.search}, function(results, status) {

		    if (status == google.maps.GeocoderStatus.OK) {
		    	$scope.map.center.latitude = results[0].geometry.location.lat();
		    	$scope.map.center.longitude = results[0].geometry.location.lng();
		    	$scope.map.tempMarkers = cityMaps.get({ search_q: $scope.search, lat: $scope.map.center.latitude, lng: $scope.map.center.longitude }, function() {
					addMarkerToMap();
				});
		    } else {
		      // alert('Geocode was not successful for the following reason: ' + status);
		    }
		  });
    });
    // add marker function
    function addMarkerToMap() {
    	for (var i = 0; i < $scope.map.tempMarkers.count; i++) {
			var marker = new google.maps.Marker({
	            idKey: i,
	              coords: {
	                latitude: $scope.map.tempMarkers.items[i].lat,
	                longitude: $scope.map.tempMarkers.items[i].lon
		        },
		        title: $scope.map.tempMarkers.items[i].name
		    })
			$scope.map.markers.push(marker);
		};
	}
	// initalie map after
	uiGmapGoogleMapApi.then(function(maps) {
    	// $scope.mapping = maps
    	// console.log("uiGmapGoogleMapApi",maps)
    });
  });