angular.module('routes', ['ui.router', 'UserProfileController','projectApplicationController'])

    .config(function($urlRouterProvider, $stateProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('contact', {
                url:'/contact',
                templateUrl: 'features/contact/contact.html'
            })
            .state('competitionInformation', {
                url:'/competition-information',
                templateUrl: 'features/competition/competition.html'
            })
            .state('home', {
                url:'/',
                templateUrl:'features/main-page/home.html'
            })
            .state('how-vip-credits-count', {
                url:'/how-vip-credits-count',
                templateUrl: 'features/how-vip-credits-count/index.html'
            })
            .state('evaluation', {
                url:'/peer-evaluations',
                templateUrl: 'features/evaluation-page/evaluation.html'
            })
            .state('graduateApplication', {
                url:'/graduate-application',
                templateUrl: 'features/graduate-application/graduateApplication.html'
            })
            .state('undergraduateApplication', {
                url:'/undergraduate-application',
                templateUrl: 'features/undergraduate-application/undergraduateApplication.html'
            })
            .state('presentationsAndPublications', {
    	        url:'/presentations-and-publications',
    	        templateUrl: 'features/presentations-and-publications/presentationsAndPublications.html'
    	    })
            .state('registerPermit', {
                url:'/request-registration-permit',
                templateUrl: 'features/registration-permit/registrationPermit.html'
            })
            .state('login', {
                url:'/login',
                templateUrl: 'features/login/loginTemplate.html'
            })
            .state('organization', {
                url:'/organization',
                templateUrl: 'features/organization/organization.html'
            })
            .state('userProfile', {
                url:'/profile',
                templateUrl: 'features/profile-page/userProfile.html',
                controller: 'UserCtrl',
                controllerAs: 'user'
            })
            .state('studentconfirminfo', {
                url:'/studentConfirmation/:id',
                templateUrl: 'features/apply-to-project/studentConfirmInfo.html',
                controller: 'projAppCtrl',
                controllerAs: 'projApp',
            });

    });
