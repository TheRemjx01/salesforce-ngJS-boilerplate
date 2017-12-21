import angular from 'angular';
import ngCookies from 'angular-cookies';
import ngFontAwesome from 'angular-fontawesome'
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMessages from 'angular-messages';
import uiRouter from '@uirouter/angularjs';
import ngMaterial from 'angular-material';

import routes from './app-routes';

import { getBaseHref } from './app.config';

import {VFRemotingService as JSRemoteService} from "salesforce-js-remoting-utils";

const rootBaseHref = getBaseHref();
angular.element(document.getElementsByTagName('head')).append(angular.element(`<base href="${rootBaseHref}" />`));
