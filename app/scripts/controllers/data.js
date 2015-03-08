'use strict';

/**
 * @ngdoc function
 * @name djcomAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the djcomAngularApp
 */
angular.module('djcomAngularApp')
  .controller('dataCtrl', function ($scope) {

    //   language,framework,competency
    //   python,scrapy,40
    //   python,django,15
    //   javascript,d3,60
    //   javascript,angular,35
    //   javascript,node,15
    //   javascript,grunt,50
    //   javascript,gulp,30
    //   javascript,ember,15
    //   javascript,phaser,60
    //   javascript,leaflet, 20
    //   c#,unity,100
    //   php,craft,40
    //   php,wordpress,25
    //   php,modx,5

    $scope.donuts = [
        { "language": "python", "frameworks": [["scrapy", 40], ["django", 15]] },
        { "language": "javascript", "frameworks": [["d3", 60], ["angular", 35], ["node", 15], ["grunt", 50], ["gulp", 30], ["ember", 15], ["phaser", 60], ["leaflet", 20]] },
        { "language": "c#", "frameworks": [["unity", 100]] },
        { "language": "php", "frameworks": [["craft", 40], ["wordpress", 25], ["modx", 5]] }
    ]

    $scope.images = [
        { "url": "/images/firstaidkit.jpg", "alt":"First Aid Kit" },
        { "url": "/images/stars.jpg", "alt":"Stars" },
        { "url": "/images/alabamashakes.jpg", "alt":"Alabama Shakes" },
        { "url": "/images/foxygen.jpg", "alt":"Foxygen" },
        { "url": "/images/lissie.jpg", "alt":"Lissie" },
        { "url": "/images/localnatives.jpg", "alt":"Local Natives" },
        { "url": "/images/bestcoast.jpg", "alt":"Best Coast" },
        { "url": "/images/bestcoasttwo.jpg", "alt":"Best Coast" },
        { "url": "/images/bestcoastthree.jpg", "alt":"Best Coast" },
        { "url": "/images/civilwars.jpg", "alt":"Civil Wars" },
        { "url": "/images/civilwarstwo.jpg", "alt":"Civil Wars" },
        { "url": "/images/marvingaye.jpg", "alt":"Marvin Gaye" },
        { "url": "/images/beachhouse.jpg", "alt":"Beach House" },
        { "url": "/images/beirut.jpg", "alt":"Beirut" },
        { "url": "/images/youthlagoon.jpg", "alt":"Youth Lagoon" },
        { "url": "/images/melodysechochamber.jpg", "alt":"Melody's Echo Chamber" },
        { "url": "/images/teganandsara.jpg", "alt":"Tegan and Sara" },
        { "url": "/images/national.jpg", "alt":"National" },
        { "url": "/images/chvrches.jpg", "alt":"Chvrches" },
        { "url": "/images/dumdumgirls.jpg", "alt":"Dum Dum Girls" },
        { "url": "/images/dumdumgirls2.jpg", "alt":"Dum Dum Girls" },
        { "url": "/images/purityring.jpg", "alt":"Purity Ring" },
        { "url": "/images/simonandgarfunkel.jpg", "alt":"Simon and Garfunkel" },
        { "url": "/images/blitzentrapper.jpg", "alt":"Blitzen Trapper" },
        { "url": "/images/firstaidkit2.jpg", "alt":"First Aid Kit" },
        { "url": "/images/jessieware.jpg", "alt":"Jessie Ware" },
        { "url": "/images/cavesingers.jpg", "alt":"Cave Singers" },
        { "url": "/images/purityring2.png", "alt":"Purity Ring" }
    ]

  });
