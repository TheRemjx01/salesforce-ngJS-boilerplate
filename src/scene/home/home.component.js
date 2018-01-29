import template from './home.component.html';
const homeController = function(ngJSRemoteService) {
    this.myName = 'Nghia';
    this.greeting = '';
    // required api object from ngJSRemoteService
    var _demoApis = {
        jsRemoteMethod: 'helloWorld',
        sfController: 'SPA_HomePageCC'
    };
    // get ng api then execute
    ngJSRemoteService.getNgApi(_demoApis)().then(res => {
        console.log('Asynchronous response from Apex Controller: ', res);
        this.greeting = res;
    });
};

export default {
    template,
    controller: homeController,
    controllerAs: '$ctrl'
}