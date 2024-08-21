# Fullstack Vue Screencast - simple-coin-cap-deployed/

## This directory has the entire application built out and is prepared for deployment.
## This directory represents the end state of the final part of the screencast - Deployment.

### Running the application

1. Ensure you have `npm` installed.

2. Install the dependencies

````
npm install
````

3. Boot the app

````
npm run start-dev
````


The API and Webpack servers are now running concurrently - watch the console output for instructions. Your entire application is now available at [http://localhost:8080/](http://localhost:8080/)

### Bundling the application for deployment

1. Bundle the client assets

```
npm run build
```

This outputs a `dist/` folder that contains client-side code bundled and ready for deployment.