import angular from 'angular';
import ngCookies from 'angular-cookies';
import ngFontAwesome from 'angular-fontawesome'
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMessages from 'angular-messages';
import uiRouter from '@uirouter/angularjs';
import ngMaterial from 'angular-material';

import routes from './app.routes';

import * as sfRemoteUtils from 'salesforce-js-remoting-utils/dist/sf-remote-utils';
const {NgJSRemoteService} = sfRemoteUtils;

import appComponent from './app.component';

import { getBaseHref } from './app.config';

const rootBaseHref = getBaseHref();
const app = function (angular) {
    return angular
        .module('spa-app', [])
        .service('ngJSRemoteService', NgJSRemoteService)
        .component('appRoot', appComponent);
}(angular);

