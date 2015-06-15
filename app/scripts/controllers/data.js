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

    $scope.toggle = function(event) {
        console.log($(event))
        $(event.currentTarget).toggleClass('active');
    }

    $scope.images = [
        { "url": "/images/firstaidkit.jpg", "alt":"First Aid Kit", "musician":"First Aid Kit", "album": "The Lion's Roar" },
        { "url": "/images/stars.jpg", "alt":"Stars", "musician":"Stars", "album": "The North" },
        { "url": "/images/alabamashakes.jpg", "alt":"Alabama Shakes", "musician":"Alabama Shakes", "album": "Boys & Girls" },
        { "url": "/images/foxygen.jpg", "alt":"Foxygen", "musician":"Foxygen", "album": "We Are the 21st Century Ambassadors of Peace & Magic" },
        { "url": "/images/lissie.jpg", "alt":"Lissie", "musician":"Lissie", "album": "Back to Forever" },
        { "url": "/images/localnatives.jpg", "alt":"Local Natives", "musician":"Local Natives", "album": "Hummingbird" },
        { "url": "/images/bestcoast.jpg", "alt":"Best Coast", "musician":"Best Coast", "album": "Crazy for You" },
        { "url": "/images/bestcoasttwo.jpg", "alt":"Best Coast", "musician":"Best Coast", "album": "The Only Place" },
        { "url": "/images/bestcoastthree.jpg", "alt":"Best Coast", "musician":"Best Coast", "album": "Fade Away" },
        { "url": "/images/bestcoastfour.jpg", "alt":"Best Coast", "musician":"Best Coast", "album": "California Nights" },
        { "url": "/images/civilwars.jpg", "alt":"Civil Wars", "musician":"The Civil Wars", "album": "Barton Hollow" },
        { "url": "/images/civilwarstwo.jpg", "alt":"Civil Wars", "musician":"The Civil Wars", "album": "The Civil Wars" },
        { "url": "/images/marvingaye.jpg", "alt":"Marvin Gaye", "musician":"Marvin Gaye", "album": "What's Going On" },
        { "url": "/images/beachhouse.jpg", "alt":"Beach House", "musician":"Beach House", "album": "Bloom" },
        { "url": "/images/beirut.jpg", "alt":"Beirut", "musician":"Beirut", "album": "The Rip Tide" },
        { "url": "/images/youthlagoon.jpg", "alt":"Youth Lagoon", "musician":"Youth Lagoon", "album": "Wondrous Bughouse" },
        { "url": "/images/melodysechochamber.jpg", "alt":"Melody's Echo Chamber", "musician":"Melody's Echo Chamber", "album": "Melody's Echo Chamber" },
        { "url": "/images/teganandsara.jpg", "alt":"Tegan and Sara", "musician":"Tegan and Sara", "album": "Closer" },
        { "url": "/images/national.jpg", "alt":"National", "musician":"The National", "album": "Trouble Will Find Me" },
        { "url": "/images/chvrches.jpg", "alt":"Chvrches", "musician":"Chvrches", "album": "The Bones of What You Believe" },
        { "url": "/images/dumdumgirls.jpg", "alt":"Dum Dum Girls", "musician":"Dum Dum Girls", "album": "Only in Dreams" },
        { "url": "/images/dumdumgirls2.jpg", "alt":"Dum Dum Girls", "musician":"Dum Dum Girls", "album": "Too True" },
        { "url": "/images/purityring.jpg", "alt":"Purity Ring", "musician":"Purity Ring", "album": "Shrines" },
        { "url": "/images/simonandgarfunkel.jpg", "alt":"Simon and Garfunkel", "musician":"Simon and Garfunkel", "album": "Bookends" },
        { "url": "/images/blitzentrapper.jpg", "alt":"Blitzen Trapper", "musician":"Blitzen Trapper", "album": "Destroyer of the Void" },
        { "url": "/images/firstaidkit2.jpg", "alt":"First Aid Kit", "musician":"First Aid Kit", "album": "Stay Gold" },
        { "url": "/images/jessieware.jpg", "alt":"Jessie Ware", "musician":"Jessie Ware", "album": "Devotion" },
        { "url": "/images/cavesingers.jpg", "alt":"Cave Singers", "musician":"The Cave Singers", "album": "Naomi" },
        { "url": "/images/purityring2.jpg", "alt":"Purity Ring", "musician":"Purity Ring", "album": "Another Eternity" },
        { "url": "/images/docwatson.jpg", "alt": "Doc & Merle Watson", "musician":"Doc & Merle Watson", "album": "Ballads from Deep Gap" },
        { "url": "/images/docwatson2.jpg", "alt": "Doc & Merle Watson", "musician": "Doc Watson", "album": "Southbound" }
    ]

  });
