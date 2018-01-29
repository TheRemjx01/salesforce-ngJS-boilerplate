# Salesforce-AngularJS-Boilerplate
## A AngularJS SPA Application Boilerplate for Salesforce Developer
### Concept 
To develop Salesforce in the moderm web development - SPA. 
Run fast, efficiently. No reload at all.

### Step by step
#### Server Site: From `Salesforce`
1. Create your custom controller, i.e: `SPA_HomePageCC`
    ```
        // SPA_HomePageCC: demo controller
        public class SPA_HomePageCC {
            // demo remote action
            @RemoteAction
            public static String helloWorld() {
                return 'Hello World';
            }
        
        }
    ```
2. create your `Visualforce page` and add your recent created controller `SPA_HomePageCC` to this page:
    ```
        <apex:page controller="SPA_HomePageCC"
                   showHeader="false"
                   sidebar="false"
                   standardStylesheets="false"
                   docType="html-5.0">
            <html>
                <head>
                    
                </head>
                <body ng-app="spa-app">
                    <app-root>Loading...</app-root>
                </body>
                <!-- YOUR SCRIPT FROM LOCAL DEV SERVER WILL BE PUT AT THE BOTTOM OF THE PAGE -->
            </html>
        </apex:page>
    ```

#### Client Site
You can clone this repository at branch `master` to get basic example. 
Here are the steps:
1. Clone this repository
2. Run `npm install` to install all the dependencies
3. Run script `npm run start-with-tunnel` to start your dev server and get your tunnel address powered by `ngrok.io`
    You will see something like this: 
    ```
        "C:\Program Files\JetBrains\WebStorm 2017.2.3\bin\runnerw.exe" "C:\Program Files\nodejs\node.exe" "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" run start-with-tunnel --scripts-prepend-node-path=auto
        
        > salesforce-ngJS-boilerplate@0.0.1 start-with-tunnel C:\Users\admin_1\Documents\salesforce-ngJS-boilerplate
        > concurrently "npm start" "node ngrok.tunnel.js" 
        
        [0] 
        [0] > salesforce-ngJS-boilerplate@0.0.1 start C:\Users\admin_1\Documents\salesforce-ngJS-boilerplate
        [0] > webpack-dev-server --progress --config webpack.dev.js
        [0] 
        [1] TUNNELING URL: https://ed6c143b.ap.ngrok.io
        [0]   0% compiling
         10% building modules 1/1 modules 0 active
        [0] Project is running at http://0.0.0.0:9081/
        [0] webpack output is served from /bin/
        
         10% building modules 1/2 modules 1 active ...r\client\index.js?http://0.0.0.0:9081
         10% building modules 1/3 modules 2 active ...ode_modules\webpack\hot\dev-server.js
         10% building modules 1/5 modules 4 active ...alesforce-ngJS-boilerplate\src\app.js
         10% building modules 2/5 modules 3 active ...alesforce-ngJS-boilerplate\src\app.js
         10% building modules 3/5 modules 2 active ...alesforce-ngJS-boilerplate\src\app.js
    ```
    Your tunneling will be available in console in `line 4`
 4. Now your application are available in url `https://tunnel-example-url.ap.ngrok.io/bin/app.bundle.js` which `tunnel-example-url.ap.ngrok.io` is your received tunnel from console
 5. Copy link to `app.bundle.js` and paste script link to the bottom of your `Visualforce page`
  Now, your `Visualforce page` wil be look like this: 
      ```
        <apex:page controller="SPA_HomePageCC"
                   showHeader="false"
                   sidebar="false"
                   standardStylesheets="false"
                   docType="html-5.0">
            <html>
                <head>
                    <h1>Your custom title</h1>
                </head>
                <body ng-app="spa-app">
                    <app-root>Loading...</app-root>
                </body>
                <script src="https://ed6c143b.ap.ngrok.io/bin/app.bundle.js"></script>
            </html>
        </apex:page>
      ```
  6. Now, browse your `Visualforce page` in your favorite browser and see result.
        It will looks like: 
        ```
            Application Works!
            Welcome, user Nghia
            Greeting from Salesforce: Hello World
        ```
     
    
    