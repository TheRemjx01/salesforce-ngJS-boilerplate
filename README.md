# Salesforce-AngularJS-Boilerplate
## An AngularJS SPA Application Boilerplate for Salesforce Developer
### Concept 
To develop Salesforce in the modern web development - SPA. 
Run fast, efficiently. No reload at all.

In the previous example, we have covered how to use `ui-router` in order to make SPA app.
However, I guess that you have already regconize: App will not run if you turn of your local-dev-server. 
This example will show how to make app run without dev-server as well as build script with environments config as well as upload to static resource.

 
### Update/ Changes from last guide

1.`SPA_HomePage.page`

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
            <!--LOCAL DEV SCRIPT LOADED HERE -->
            <!-- COMMENT OUT IF YOU DON'T NEED DEV SERVER ANY MORE -->
            <!--<script src="https://0daa209a.ap.ngrok.io/bin/app.bundle.js"></script>-->
    		
            <!--BUILT DEV SCRIPT LOADED HERE -->
            <script src="{!URLFOR($Resource.Bundle_DevJS, 'app.bundle.js')}"></script>
        </html>
    </apex:page>
```


### Step by Step

### From client site
1. Run `npm run build-dev` to build your dev script or `npm run build-prod` to build your production script. (Steps below are the same)
2. Now, you will see in `~/bin` folder, there are files that we have already built above.
3. Use your zip program to compress all the files, in this example, the bundle name is: `dev_bundle.zip`

#### From `Salesforce`
1. After you got bundle zip from client site, upload bundle to static resource in your Salesforce Org, in this example, the static resource name is : `Bundle_DevJS.resource`
2. Comment out script link from dev-server and add  script link to your `app.bundle.js` in `Bundle_DevJS.resource`
3. Now, your application is ready without dev server anymore.





     
    
    