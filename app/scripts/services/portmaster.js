'use strict';
angular.module('pixelRockStudiosApp')
  .factory('portMaster', function ($http) {
    // return $http.get('scripts/services/objects/portfolio.json');  
    return [
    {"name": "BMW M 40th Anniversary test",
     "link": "http://www.bmwusa.com/m",
     "file": "bmw_m_40th.json",
      "img": [
          {"image":"../images/lg.jpg"},
          {"image":"../images/sm1.jpg"},
          {"image":"../images/sm2.jpg"}
      ]},
    {"name": "BMW Motorsports",
     "link": "http://www.bmwusa.com/standard/content/explore/bmwenthusiasts/bmwmotorsports.aspx",
     "file": "bmw_motorsports.json"},
    {"name": "BMW ConnectedDrive",
     "link": "http://www.bmwusa.com/standard/content/innovations/bmwconnecteddrive/connecteddrive.aspx",
     "file": "bmw_connecteddrive.json"},
    {"name": "BMW Performance Driving School",
     "link": "http://www.bmwusa.com/pds",
     "file": "bmw_pds.json"},
    {"name": "Justin Biebers Collection",
     "link": "http://www.justinbiebercollectorsedition.com/#home",
     "file": "justin_bieber.json"},
    {"name": "Biore Skincare",
     "link": "http://www.biore.com/en-US/biore-skincare",
     "file": "biore.json"},
    {"name": "BMW i8 Experience",
     "link": "http://www.bmwusa.com/standard/content/vehicles/2014/bmwi/bmwi_i8redirect.aspx?from=/Standard/Content/Vehicles/2014/BMWi/BMWi8RD.aspx&return=/Standard/Content/Vehicles/2014/BMWi/BMWi8RD.aspx",
     "file": "bmw_i8.json"},
    {"name": "Fantastic 4 Rise of the Silver Surfer",
     "link": "http://www.pixelrockstudios.com/work/f4",
     "file": "fantastic4.json"},
    {"name": "Chevy Flash Calculator",
     "link": "http://www.pixelrockstudios.com/work/chevy",
     "file": "chevy_flash.json"},
    {"name": "Ritz Carlton White Plains",
     "link": "http://www.pixelrockstudios.com/work/ritz",
     "file": "ritz_carlton.json"},
    {"name": "Kodak Flash Banner",
     "link": "http://www.pixelrockstudios.com/work/kodak",
     "file": "kodak_flash.json"},
    {"name": "Crestor Astra Zeneca",
     "link": "http://www.pixelrockstudios.com/work/astra",
     "file": "crestor_astra.json"}
    ]
});
