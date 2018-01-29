const appController = function(ngJSRemoteService) {
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
    template: `
        <div>  
            <!-- IF APP WORK, YOU SHOULD SEE THIS LINE-->
            <h1>Application Works!</h1>
            <!-- IF CONTROLLER BINDING WORKED, YOU SHOULD SEE THIS LINE-->
            <h2>Welcome, user {{$ctrl.myName}}</h2>
            <!-- IF NSJSREMOTINGSERVICE  WORKED, YOU SHOULD SEE THIS LINE-->
            <h3>Greeting from Salesforce: {{$ctrl.greeting}}</h3> 
        </div>
    `,
    controller: appController,
    controllerAs: '$ctrl'
}