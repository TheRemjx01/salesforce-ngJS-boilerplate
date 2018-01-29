import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import * as sfRemoteUtils from 'salesforce-js-remoting-utils/dist/sf-remote-utils';
const {NgJSRemoteService} = sfRemoteUtils;

import { getBaseHref } from './app.config';
import {HomeScene, InvalidUrlScene} from "./scene/index";
import appComponent from './app.component';
import allRoutes from './app.routes';
import {NavBarComponent} from "./component/index";

const rootBaseHref = getBaseHref();

const app = function (angular) {
    const $dependencies = ['ui.router'];

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
        .component('navBar', NavBarComponent)
        .component('homeScene', HomeScene)
        .component('invalidUrlScene', InvalidUrlScene)
        .component('appRoot', appComponent);
}(angular);

