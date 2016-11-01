'use strict';
angular.module('pixelRockStudiosApp')
  .factory('apiMaster', function () {
    return [{'name': 'Getty Images Api', 'link': 'http://www.gettyimages.com/', 'file': 'gettyImages.json'},
    {'name': 'Google Maps Api', 'link': 'https://developers.google.com/maps/', 'file': 'googleMaps.json'},
    {'name': 'Another Api', 'link': 'http://www.google.com', 'file': 'gettyImages.json'}
]});
