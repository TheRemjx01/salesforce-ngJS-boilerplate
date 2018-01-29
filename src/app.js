import angular from 'angular';
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

