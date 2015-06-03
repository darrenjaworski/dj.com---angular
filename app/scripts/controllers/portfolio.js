'use strict';

/**
 * @ngdoc function
 * @name djcomAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the djcomAngularApp
 */
angular.module('djcomAngularApp')
  .controller('PortfolioCtrl', function ($scope) {
      $scope.talks = [
          {
              'link': 'http://bit.ly/1zukqAi',
              'title': 'D3 - Code For OKC'
          }
      ];
    $scope.staplegun = [
    {
        'link': 'http://oklahomaworks.gov/',
        'title': 'Oklahoma Works'
    },
    {
        'link':'http://odocholiday2014.stplgn.us/',
        'title': 'ODOC Holiday Card'
    },
      {
        'link':'http://oklahomawinetrails.com',
        'title':'Oklahoma Wine Trails'
      },
      {
        'link':'http://patio.flintokc.com',
        'title':'Patio, brunch, and dine at Flint'
      },
      {
        'link':'http://swurbanfoundation.org/',
        'title':'Southwest Urban Foundation'
      },
      {
        'link':'http://hogantaylor.com',
        'title':'HoganTaylor'
      },
      {
        'link':'http://crossbeams.org',
        'title':'Catholic Charities OKC Crossbeams Capital Campaign'
      },
      {
        'link':'http://careers.oumedicine.com/nurse-peds.html',
        'title':'OU Medicine Careers'
      },
      {
        'link':'http://okhighered.org/gearup/',
        'title':'Oklahoma Gear Up'
      },
      {
        'link':'http://madeinoklahoma.net',
        'title':'Made in Oklahoma Program'
      },
      {
        'link':'http://warwick-energy.com',
        'title':'Warwick Energy'
      },
      {
        'link':'http://oualumniupdate.com',
        'title':'OU Alumni Survey'
      },
      {
        'link':'http://oumap.staplegun.us',
        'title':'OU Medicine Community Health Map'
      }
    ];
    $scope.private = [
      {
        'link':'http://web.archive.org/web/20131009232130/http://storyboarderpod.com/',
        'title':'Storyboarder Podcast'
      },
      {
        'link':'http://darrenjaworski.com',
        'title':'Darren Jaworski'
      },
      {
        'link':'http://madialexander.com',
        'title':'Madi Alexander'
    },
    {
        'link':'http://ea.darrenjaworski.com',
        'title':'Estapraq Kahlil'
    }
    ];
    $scope.privatetemp = [
        {
            'link':'http://oo.darrenjaworski.com',
            'title':'company'
        },
        {
            'link':'http://km.darrenjaworski.com',
            'title':'personal block'
        }
    ];
    $scope.okwatch = [
      {
        'link':'http://oklahomawatch.org/2013/07/22/oklahomas-correctional-facilities/',
        'title':'Oklahoma Correctional Facilities'
      },
      {
        'link':'http://oklahomawatch.org/2013/07/24/the-mcalester-prison-riot/',
        'title':'Big Mac Riot of 73'
      },
      {
        'link':'http://oklahomawatch.org/2013/07/22/oklahoma-state-penitentiary/',
        'title':'Oklahoma State Penitentiary'
      },
      {
        'link':'http://oklahomawatch.org/2013/07/26/charting-inmate-counts/',
        'title':'Oklahoma Inmate Counts'
      },
      {
        'link':'http://oklahomawatch.org/2013/07/20/oklahoma-watch-study-identifies-jobs-with-most-uninsured-workers/',
        'title':'OK Watch Study Identifies Uninsured Workers'
      },
      {
        'link':'http://oklahomawatch.org/2013/07/17/the-uninsured/',
        'title':'Where the Uninsured Work'
      },
      {
        'link':'http://oklahomawatch.org/2013/07/10/permits-for-handgun-licenses-keep-rising/',
        'title':'Handgun Permits'
      },
      {
        'link':'http://oklahomawatch.org/2013/06/30/data-driven-a-measure-of-hunger/',
        'title':'A Measure of Hunger'
      },
      {
        'link':'http://oklahomawatch.org/2013/06/24/cost-of-attendance/',
        'title':'Cost of Attendance'
      },
      {
        'link':'http://oklahomawatch.org/2013/05/24/where-tornados-strike/',
        'title':'Where Tornadoes Strike (article)'
      },
      {
        'link': 'http://darrenjaworski.cartodb.com/tables/tornadoes90_13/embed_map?title=false&description=false&search=false&shareable=false&cartodb_logo=true&scrollwheel=false&sql=&sw_lat=33.76088200086917&sw_lon=-103.86474609375&ne_lat=37&ne_lon=-93.31787109374999&height=600&id=cartodb-1369334401177',
        'title': 'Where Tornadoes Strike (working graphic)'
      },
      {
        'link':'http://oklahomawatch.org/2013/05/10/data-driven-spin-the-wheel-to-analyze-the-state-budget/',
        'title':'Interactive Sunburst Partition of the State Budget'
      },
      {
        'link':'http://oklahomawatch.org/2013/04/02/data-center-profile-of-oklahoma-legislature/',
        'title':'Interactive of the State Legislature (article)'
      },
      {
        'link':'http://games.darrenjaworski.com/legislative-graphic/',
        'title':'Interactive of the State Legislature (working graphic)'
      },
      {
        'link':'http://oklahomawatch.org/2013/02/19/where-the-states-stand-on-medicaid-expansion/',
        'title':'Where the States Stand on Medicaid Expansion'
      },
      {
        'link':'http://oklahomawatch.org/2013/04/17/mapping-obesity-in-oklahoma/',
        'title':'Mapping Obesity in Oklahoma'
      },
      {
        'link':'http://oklahomawatch.org/2013/05/08/what-oklahoma-hospitals-charge/',
        'title':'Comparing What Oklahoma Hospitals Charge'
      },
      {
        'link':'http://oklahomawatch.org/2013/04/26/data-driven-locating-the-uninsured/',
        'title':'Locating the Uninsured'
      },
      {
        'link':'http://oklahomawatch.org/2013/03/27/reading-test-results-for-oklahoma-schools-and-districts/',
        'title':'Reading Test Results for Oklahoma Schools and Districts'
      },
      {
        'link':'http://oklahomawatch.org/2013/03/15/oklahoma-lake-levels-decline/',
        'title':'Where Lake Levels Stand'
      },
      {
        'link':'http://oklahomawatch.org/2013/03/01/making-short-work-of-an-average-life/',
        'title':'Making Short Work of an Average Life'
      },
      {
        'link':'http://oklahomawatch.org/2013/02/20/ou-and-osu-graduation-rates-comparison/',
        'title':'The Growing, but Still Elusive, 4-Year College Degree'
      },
      {
        'link':'http://oklahomawatch.org/2013/01/29/firearm-deaths-in-ok-and-us/',
        'title':'Firearm Deaths in Oklahoma'
      },
      {
        'link':'http://oklahomawatch.org/2012/11/09/visualizations-of-ok-hispanic-population/',
        'title':'Visualizations of Oklahomas Hispanic Population'
      }
    ];
    $scope.routes = [
      {
        'link':'http://routes.ou.edu/?p=467',
        'title':'Captain Separated from Family for 10 years'
      },
      {
        'link':'http://routes.ou.edu/?p=170',
        'title':'Challenging Oklahoma Voter ID Law'
      },
      {
        'link':'http://routes.ou.edu/?p=167',
        'title':'Voter identification laws strengthened'
      }
    ];
    $scope.masters = [
      {
        'link':'https://www.dropbox.com/s/vmj3cxm8wa1l5xm/sciencecommunication.pdf?dl=0',
        'title':'Online Science Communication and Public Science Literacy'
      },
      {
        'link':'',
        'title':'Digital News Flow in an Online Oklahoma Network of Sources Authorities and Hubs'
      }
    ];
    $scope.politically = [
      {
        'link':'http://wandering-blog.blogspot.com/',
        'title':'Politically Scientific'
      },
      {
        'link':'http://wandering-blog.blogspot.com/2011/11/on-bacteria-and-economics.html',
        'title':'On Bacteria and Economics'
      },
      {
        'link':'http://wandering-blog.blogspot.com/2011/10/job-killing-government-regulation.html',
        'title':'Attack of the Job Killers!'
      },
      {
        'link':'http://wandering-blog.blogspot.com/2011/10/whats-going-on.html',
        'title':'Whats Happening Brother?'
      },
      {
        'link':'https://www.dropbox.com/s/t6w8x3qw8xea04a/logoKeynote.pdf?dl=0',
        'title':'Logo Design'
      },
      {
        'link':'https://www.dropbox.com/s/3emisej5tg0ltf6/authorinfographic.jpg?dl=1',
        'title':'Author Infographic'
      }
    ];
    $scope.accolades = [
      {
        'link':'http://www.okspj.com/2014awards.html',
        'title':'Oklahoma SPJ Pro - education reporting'
      },
      {
        'link':'http://www.okspj.com/2013awards.html',
        'title':'Oklahoma SPJ Pro - investigative reporting team'
      },
      {
        'link':'http://issuu.com/greatplainsawards/docs/gpbook2013',
        'title':'Great Plains Journalism Awards - general news reporting'
      },
      {
        'link':'http://issuu.com/greatplainsawards/docs/gp2014bookfinal',
        'title':'Great Plains Journalism Awards - beat reporting'
      }
    ];
    $scope.resume = [
        {
            'link': 'https://www.dropbox.com/s/cdj9tvibqoc4amz/resume.pdf?dl=1',
            'title': 'grab a copy'
        }
    ];
  });
