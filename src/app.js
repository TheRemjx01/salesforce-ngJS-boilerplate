import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
// MATERIAL UI LIBRARY HERE
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMessages from 'angular-messages';
import ngMaterial from 'angular-material';
// END MATERIAL UI LIBRARY
import * as sfRemoteUtils from 'salesforce-js-remoting-utils/dist/sf-remote-utils';
const {NgJSRemoteService} = sfRemoteUtils;

import { getBaseHref } from './app.config';
import {HomeScene, InvalidUrlScene, TodosScene} from "./scene/index";
import appComponent from './app.component';
import allRoutes from './app.routes';
import {NavBarComponent} from "./component/index";
import {TodoService} from "./service/index";

const rootBaseHref = getBaseHref();

const app = function (angular) {
    const $dependencies = ['ui.router', 'ngMaterial'];

    // CONFIG FOR UI ROUTER BASE HREF
    angular.element(document.getElementsByTagName('head'))
        .append(angular.element(`<base href=${rootBaseHref}/>`));

    return angular
        .module('spa-app', $dependencies)
        .config(($stateProvider, $urlRouterProvider) => {
            $urlRouterProvider.when('', '/'); // default route

            // register all router state
            allRoutes.forEach(item => {
                $stateProvider.state(item)
            });

            $urlRouterProvider.otherwise('/404'); // if not in routes list, move to 404 ui.router state

        })
        .service('ngJSRemoteService', NgJSRemoteService)
        .service('todoService', TodoService)
        .component('navBar', NavBarComponent)
        .component('homeScene', HomeScene)
        .component('todosScene', TodosScene)
        .component('invalidUrlScene', InvalidUrlScene)
        .component('appRoot', appComponent);
}(angular);

