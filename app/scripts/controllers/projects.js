'use strict';

/**
 * @ngdoc function
 * @name djcomAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the djcomAngularApp
 */
angular.module('djcomAngularApp')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.projects = [
        {
            "title": "oklege explorer",
            "image": "/images/oklege.png",
            "description": "An app to explore the Oklahoma Legislature.",
            "links": [
                {
                    "link": "https://sleepy-refuge-4183.herokuapp.com/",
                    "title": "live"
                },
                {
                    "link": "https://github.com/darrenjaworski/loopback-ok-lege",
                    "title": "github"
                }
            ]
        },
      {
          "title": "a-f grades in oklahoma",
          "image": "/images/afgrades.png",
          "description": "An app to explore a-f grades for Oklahoma Schools.",
          "links": [
              {
                  "link": "http://af.darrenjaworski.com",
                  "title": "live"
              }
          ]
      },
      {
          "title": "earthquakes in oklahoma",
          "image": "/images/earthquakes.png",
          "description": "A Primer on earthquakes in Oklahoma.",
          "links": [
              {
                  "link": "http://eq.darrenjaworski.com",
                  "title": "live"
              },
              {
                  "link": "https://github.com/darrenjaworski/Earthquakes-in-Oklahoma",
                  "title": "github"
              }
          ]
      },
      {
          "title": "solar system",
          "image": "/images/solar.png",
          "description": "A play on scales and human perception.",
          "links": [
              {
                  "link": "http://bl.ocks.org/darrenjaworski/6043829",
                  "title": "live"
              },
              {
                  "link": "https://gist.github.com/darrenjaworski/6043829",
                  "title": "gist"
              }
          ]
      },
      {
          "title": "tutorials for journalists",
          "image": "/images/tutorial.png",
          "description": "For a series of tutorials on gist and bl.ocks.org I will be writing journalism-centric d3 examples. In order to facilitate basic data visualization accompaniment to articles published by an average journalist, I'm writing them with reusability and ease of use in mind.",
          "links": [
              {
                  "link": "http://bl.ocks.org/darrenjaworski/5874133",
                  "title": "live"
              },
              {
                  "link": "https://gist.github.com/darrenjaworski/5874133",
                  "title": "gist"
              }
          ]
      },
      {
          "title": "sunburst partition",
          "image": "/images/sunburst.png",
          "description": "A zoomable sunburst partition with label and annotations allowing users to fully interact with the Oklahoma State budget.",
          "links": [
              {
                  "link": "http://bl.ocks.org/darrenjaworski/5389708",
                  "title": "live"
              },
              {
                  "link": "https://gist.github.com/darrenjaworski/5389708",
                  "title": "gist"
              }
          ]
      },
      {
          "title": "topology projections",
          "image": "/images/censustract.png",
          "description": "TOPOJSON projections of various shapefiles of Oklahoma.. The topology is preserved from a shapefile to allow for implementation in infographics requiring spatial dimensions. Binding data to geographic divisions allow for endless visualizations.",
          "links": [
              {
                  "link": "http://bl.ocks.org/darrenjaworski/5732719",
                  "title": "live"
              },
              {
                  "link": "https://gist.github.com/darrenjaworski/5732719",
                  "title": "gist"
              }
          ]
      },
      {
          "title": "animated scatterplot",
          "image": "/images/scatterplot.png",
          "description": "A scatterplot of the cost of attendance and student debt for Oklahoma universities. The circle sizes represent total enrollment figures with the x axis representing tuition and fee and the y axis representing the debt load of students. A third dimension of time allows the user to see the increase in cost and borrowing for students.",
          "links": [
              {
                  "link": "http://bl.ocks.org/darrenjaworski/5544599/",
                  "title": "live"
              },
              {
                  "link": "https://gist.github.com/darrenjaworski/5544599",
                  "title": "gist"
              }
          ]
      },
      {
          "title": "the storyboarder podcast",
          "image": "/images/storyboarderpod.png",
          "description": "The Storyboarder Podcast was a radio show dedicated to writing and storytelling. My friend Jelani Sims and I partnered for the joint venture in August of 2012. The website was designed, maintained, and coded by me from the ground up. It implements a robust back-end and content management system for podcasts, blogs and short fiction, as well as an iTunes RSS feed generation system.",
          "links": [ ]
      }
    ];
  });
