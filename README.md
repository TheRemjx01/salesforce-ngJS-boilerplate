# Salesforce-AngularJS-Boilerplate
## A AngularJS SPA Application Boilerplate for Salesforce Developer
### Concept 
To develop Salesforce in the moderm web development - SPA. 
Run fast, efficiently. No reload at all.
In the basic example, we have already integrated `webpack bundle` from `local dev server + tunnel` to `Visualforce page`.

In this guide, we will covered `ui-router` integrated into our app to complete our SPA Application.
 

### Step by Step
#### From `Salesforce`
1. Step by step from branch `master`
2. Create your Salesforce Site to your Visualforce page, i.e `SPA_HomePage`. Example site name: `https://angular-boilerplate-developer-edition.ap5.force.com/dev`
#### Client site
1. Step by step from branch `master`
2. Update your `base` tag configuration in head using dynamic append element(In `app.js` after comment: `// CONFIG FOR UI ROUTER BASE HREF`).
3. Create your `app.routes.js` that contains all `ui-router` state. 
4. Register all routes to your app in `app.js`
    ```
        import import allRoutes from './app.routes';
        
        // angular.module first then ...
        .config(($stateProvider, $urlRouterProvider) => {
                    $urlRouterProvider.when('', '/'); // default route
        
                    // register all router state
                    allRoutes.forEach(item => {
                        $stateProvider.state(item)
                    });
        
                    $urlRouterProvider.otherwise('/404'); // if not in routes list, move to 404 ui.router state
        
                })
        // ... continue to register component
    ```
5. Add `HomeScene`, `404Scene`, `NavBarComponent` to test your updated app.

     
    
    